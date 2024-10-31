#!/bin/bash

## Run prettier. See ignored path in .prettierignore.
yarn prettier "./**/*.{js,jsx,ts,tsx,md,css,less}" --write

## Run JS linting. See ignored path in .eslintignore.
yarn eslint "./{.,test,docs,packages}/**/*.js" --fix

## Run CSS linting. See ignored path in .stylelintignore.
yarn stylelint "{docs,packages}/**/*.scss" --fix
