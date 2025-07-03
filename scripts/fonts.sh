#!/usr/bin/env bash

FONT_VARIABLE="source-sans-3-latin-wght-normal.woff2"

# Add required webfonts locally to docs/fonts/ directory.
mkdir ./docs/fonts/
cp ./node_modules/@fontsource-variable/source-sans-3/files/$FONT_VARIABLE ./docs/fonts/$FONT_VARIABLE
cd ../../
