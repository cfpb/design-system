#!/usr/bin/env bash

FONT_REGULAR="source-sans-3-latin-400-normal.woff2"
FONT_SEMI_BOLD="source-sans-3-latin-600-normal.woff2"
FONT_BOLD="source-sans-3-latin-700-normal.woff2"

# Add required webfonts locally to docs/fonts/ directory.
mkdir ./docs/fonts/
cp ./node_modules/@fontsource/source-sans-3/files/$FONT_REGULAR ./docs/fonts/$FONT_REGULAR
cp ./node_modules/@fontsource/source-sans-3/files/$FONT_SEMI_BOLD ./docs/fonts/$FONT_SEMI_BOLD
cp ./node_modules/@fontsource/source-sans-3/files/$FONT_BOLD ./docs/fonts/$FONT_BOLD
cd ../../
