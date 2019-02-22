#!/bin/bash

set -o pipefail
set -e

# Run a background HTTP server to serve our JavaScript and test against.
##./node_modules/.bin/http-server . -p 8000 --silent &
##TEST_SERVER_PID=$!

# Run all our tests.
./node_modules/.bin/mocha --recursive

# Kill our backgrounded server (http-server expects a Ctrl+C, aka SIGINT)
##kill -SIGINT $TEST_SERVER_PID
