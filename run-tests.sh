#!/bin/bash

set -o pipefail
set -e

# Run all our tests.
./node_modules/.bin/mocha --recursive

