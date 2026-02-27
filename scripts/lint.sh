#!/bin/bash

## Run prettier. See ignored paths in .prettierignore.
yarn prettier "./**/*.{js,jsx,ts,tsx,md,css,scss}" --write

## Run JS linting. See ignored paths in eslint.config.js.
yarn eslint "./{.,test,docs,packages}/**/*.js" --fix

## Run CSS linting. See ignored paths in .stylelintignore.
yarn stylelint "{docs,packages}/**/*.{css,scss}" --fix
