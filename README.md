# recalbox-manager

[![Build Status](https://travis-ci.org/DjLeChuck/recalbox-manager.svg?branch=master)](https://travis-ci.org/DjLeChuck/recalbox-manager)
[![Known Vulnerabilities](https://snyk.io/test/github/djlechuck/recalbox-manager/badge.svg)](https://snyk.io/test/github/djlechuck/recalbox-manager)

A web interface to manage recalbox configuration.

## Note
The API activation step is only needed if you want launch game through the web interface. Otherwise, it's not necessary.

## Installation from sources
1. Clone or download the repository: `git clone https://github.com/DjLeChuck/recalbox-manager.git`
2. Compile the project from a computer (not recalbox): `./compile.sh`
3. Activate the API: https://github.com/recalbox/recalbox-api/blob/1.1.x/documentation/activate-on-recalbox.md
4. Launch the server (connect through SSH on the recalbox): `cd /recalbox/share/manager && NODE_ENV=production PORT=3000 node dist/server.js`
5. Go on http://recalbox:3000/

## Installation from releases
1. Download the release: https://github.com/DjLeChuck/recalbox-manager/releases/
2. Extract the package on recalbox: `\recalbox\share\manager` for example
3. Activate the API: https://github.com/recalbox/recalbox-api/blob/1.1.x/documentation/activate-on-recalbox.md
4. Launch the server (connect through SSH on the recalbox): `cd /recalbox/share/manager && NODE_ENV=production PORT=3000 node dist/server.js`
5. Go on http://recalbox:3000/

## Known issues
* Some changes are not directly applied; The recalbox must be restarted.
