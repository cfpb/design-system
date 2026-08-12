#!/bin/sh

if [ "$1" = "open" ]; then
    ./node_modules/.bin/playwright test --ui
else
    ./node_modules/.bin/playwright test
fi
