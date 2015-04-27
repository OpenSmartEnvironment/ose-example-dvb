# Open Smart Environment - DVB streamer example
This example provides a DVB streamer to be used together with an
[media player example](http://opensmartenvironment.github.io/doc/#mediaplayerexample) instance. In this example, a new entry
controlling a DVBlast is created.

## Important links
This package is a part of the OSE suite. For more information, see the following links:
- [DVB streamer example documentation](http://opensmartenvironment.github.io/doc/#example-dvb)
- [OSE suite documentation](http://opensmartenvironment.github.io/doc/)
- [All packages](https://github.com/opensmartenvironment/)

## About OSE
<b>Open Smart Environment software is a suite for creating
multi-instance applications that work as a single whole.</b><br>
Imagine, for example, a personal mesh running on various devices
including HTPCs, phones, tablets, workstations, servers, Raspberry
Pis, home automation gadgets, wearables, drones, etc.

OSE software consists of several npm packages: a [framework](http://opensmartenvironment.github.io/doc/#framework) running
on Node.js, an [HTML5 frontend](http://opensmartenvironment.github.io/doc/#html5frontend), extending
packages and a set of example applications.

<a href="http://opensmartenvironment.github.io/doc/resource/ose.svg"><img width=100% src="http://opensmartenvironment.github.io/doc/resource/ose.svg"></a>

**Set-up of current example applications.** Here,
OSE provides a [Media player](http://opensmartenvironment.github.io/doc/#example-player) running on an HTPC
that can be controlled by an IR remote through
[LIRC](http://opensmartenvironment.github.io/doc/#example-lirc) and is capable of playing streams from a
[DVB streamer](http://opensmartenvironment.github.io/doc/#example-dvb) and control devices through GPIO
pins on a [Raspberry Pi](http://opensmartenvironment.github.io/doc/#example-rpi)

For more information about OSE see **[the documentation](http://opensmartenvironment.github.io/doc/)**.

## Status
- Pre-alpha stage (insecure and buggy)
- Unstable API
- Patchy documentation
- No test suite

This is not yet a piece of download-and-use software. It is important
to understand the basic principles covered by the
[documentation](http://opensmartenvironment.github.io/doc/).

## Platforms
OSE has the following prerequisites:
- Node.js (>0.10) running on Debian Jessie and Raspbian
- Firefox 37 or newer with Web Components enabled

## Usage

For the DVB streamer application to work, you need the following
prerequisities: 
- Node.js and npm 
- DVBlast

To install the example application, do the following:

    git clone https://github.com/OpenSmartEnvironment/ose-example-dvb
    cd ose-example-dvb
    npm install

Configure the IP address and port number of the OSE Media player within your network in `bin/run.js`.

    player: 'ws://[ip address](http://opensmartenvironment.github.io/doc/#ipaddress):[port](http://opensmartenvironment.github.io/doc/#port)'


Start the DVB streamer example as follows:

    ./bin/run.js

## Licence
This software is released under the terms of the [GNU General
Public Licence v3.0](http://www.gnu.org/copyleft/gpl.html) or
later.
