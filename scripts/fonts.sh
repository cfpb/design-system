#!/usr/bin/env bash

# Add required webfonts locally to docs/fonts/ directory.
mkdir ./docs/fonts/
cd ./docs/fonts
prefix="https://github.com/cfpb/consumerfinance.gov/blob/main/static.in/cfgov-fonts/fonts/"
fonts=("2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2" "627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2")
for font in ${fonts[@]}; do
  # Flags: s = silent, L = follow redirects.
  curl -sL "${prefix}${font}?raw=true" > ${font}
done
cd ../../
