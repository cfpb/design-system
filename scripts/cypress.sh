#!/bin/sh

if [ "$1" = "open" ]; then
    ./node_modules/.bin/cypress open --config-file cypress.config.js
else
    ./node_modules/.bin/cypress run --config-file cypress.config.js
fi
