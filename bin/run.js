#!/usr/bin/env node

/**
 * @caption DVB streamer example
 *
 *
 * @readme
 * This example provides a DVB streamer to be used together with an
 * [media player example] instance. In this example, a new entry
 * controlling a dvblast is created.
 *
 *
 * @usage
 * ## Usage
 *
 * For the DVB streamer application to work, you need the following
 * prerequisities: 
 * - Node.js and npm 
 * - DVBlast
 *
 * To install the example application, do the following:
 *
 *     git clone https://github.com/OpenSmartEnvironment/ose-example-dvb
 *     cd ose-example-dvb
 *     npm install
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
var O = require('ose').app(module, 'example');

/*!
 * OSE is configured by a configuration object, `module.exports` in
 * this case. Each property of this object defines the configuration
 * for one [OSE plugin].
 */

// Basic properties of OSE instance
exports.ose = {
  name: 'dvb',          // Name of this OSE instance
  space: 'example.org',  // Space name this instance belongs to
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
  home: 'player',               // Home instance of the space

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
  scope: 'control',         // Scope the shard belongs to
  alias: 'dvb',            // Shard alias
  home: 'dvb',             // Home instance of the space
  entries: initDvb,         // Method initializing entries belonging
                            // to the shard, defined below
};


// "dvb" shard initialization method.
function initDvb(shard) {
  shard.entry('dvbstreamer', 'dvblast', {
    name: 'DVBlast',

    /* Uncomment following "mcast" property to enable multicast streaming
    mcast: {
      id: 'mcastPool',
      alias: 'mediaControl',
    },
    */
  });
}

// Start OSE instance
O.run();
