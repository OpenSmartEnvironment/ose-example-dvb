#!/usr/bin/env node

/**
 * @caption DVB streamer example
 *
 *
 * @readme
 * This example provides a DVB streamer to be used together with the
 * [media player example].
 *
 * @features
 * - streaming using [DVBlast](http://www.videolan.org/projects/dvblast.html)
 * - unicast streaming of single channels
 * - multicast streaming of all channels in a single multiplex
 *
 * @usage
 * ## Usage
 *
 * For the DVB streamer application to work, you need the following
 * prerequisites:
 * - Node.js and npm
 * - DVBlast
 *
 * To install the example application, do the following:
 *
 *     git clone https://github.com/OpenSmartEnvironment/ose-example-dvb
 *     cd ose-example-dvb
 *     npm install
 *
 * Configure the IP address and port number of the OSE Media player within your network in `bin/run.js`.
 *
 *     player: 'ws://IP_ADDRESS:PORT'
 *
 *
 * Start the DVB streamer example as follows:
 *
 *     ./bin/run.js
 *
 *
 * @module example-dvb
 * @main example-dvb
 */

/**
 * @caption DVB streamer example startup script
 *
 * @class example-dvb.bin.run
 * @type module
 */


'use strict';

// The OSE framework is initialized by requiring the "ose" package:
const O = require('ose')(module)
  .setPackage('ose-example-dvb')
;

/*!
 * OSE is configured by a configuration object, `module.exports` in
 * this case. Each property of this object defines the configuration
 * for one [OSE plugin].
 */

// Basic properties of OSE instance
exports.ose = {
  name: 'dvb',          // Name of this OSE instance
  space: 'example.org',  // Space name this instance belongs to
  spid: 3,
};


// Enable general control package
exports['ose-control'] = {};

// Enable general DVB package
exports['ose-dvb'] = {};

// Enable general media player package
exports['ose-media'] = {};

// Enable VideoLAN control package
exports['ose-videolan'] = {};


// Enable CLI interface
exports.cli = {
  id: 'ose/lib/cli',

  // CLI can run some commands:
  /*
  script: [
    'wait 10000',
    'space example.org',
    'shard dvb',
    'entry dvblast',
    'info',
    'detail',
  ],
  */
};


// Definition of data structure – The space named "example.org"
// contains all your data
exports.space = {
  id: 'ose/lib/space',         // Module id
  name: 'example.org',         // Name of the space
  home: 'player',              // Home instance of the space

  // Peers to connect to
  peers: {
    // Media player OSE instance – Change the following IP
    // address to that of the media player instance.
    player: 'ws://10.166.25.8:4431',  // CHANGE ME !!!!!
  }
};

// The space is partitioned into shards:
// DVB shard
exports.control = {
  id: 'ose/lib/shard',
  sid: 8,                   // Shard id unique within the space
  schema: 'control',        // Schema the shard belongs to
  alias: 'dvb',             // Shard alias
  home: 'dvb',              // Home instance of the space
  upgrades: [
    initDvb,                // Method initializing entries belonging to the shard, defined below
  ],
};


// "dvb" shard initialization method.
function initDvb(transaction, cb) {
  transaction.add('dvblast', {
    alias: 'dvbstreamer',
    name: 'DVBlast',

    /* Uncomment following "mcast" property to enable multicast streaming
    mcast: {
      entry: 'mcastPool',
      shard: 'mediaControl',
    },
    */
  });

  return cb();
}

// Start OSE instance
O.run();
