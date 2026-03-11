#!/bin/bash

if [ "${CI:-}" = "true" ]; then
  set -euo pipefail
  PRETTIER_FLAGS=("--check")
  ESLINT_FLAGS=("")
  STYLELINT_FLAGS=("")
else
  export FORCE_COLOR="${FORCE_COLOR:-1}"
  PRETTIER_FLAGS=("--write")
  ESLINT_FLAGS=("--fix")
  STYLELINT_FLAGS=("--fix")
fi

## Run Prettier, See ignored paths in .prettierignore
yarn exec prettier "./**/*.{js,jsx,ts,tsx,md,css,scss}" ${PRETTIER_FLAGS[@]}

## Run JS linting. See ignored paths in eslint.config.js.
yarn exec eslint "./{.,test,docs,packages}/**/*.js" ${ESLINT_FLAGS[@]}

## Run CSS linting. See ignored paths in .stylelintignore.
yarn exec stylelint "{docs,packages}/**/*.{css,scss}" ${STYLELINT_FLAGS[@]}
