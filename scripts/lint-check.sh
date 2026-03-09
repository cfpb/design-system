#!/bin/bash

set -euo pipefail

## check formatting, see ignored paths in .prettierignore
yarn exec prettier "**/*.{js,jsx,ts,tsx,css,scss,md}" --check

## check js linting, see ignored paths in .eslint.config.js
yarn exec eslint "./{.,test,docs,packages}/**/*.js"

## check css linting, see ignored paths in .stylelintignore
yarn exec stylelint "{docs,packages}/**/*.{css,scss}"
