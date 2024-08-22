#!/bin/bash

: ${SAUCE_USERNAME?\"You need to define SAUCE_USERNAME and SAUCE_ACCESS_KEY env variables \"} && node_modules/saucectl/bin/saucectl run
