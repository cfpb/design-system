#!/usr/bin/env bash

set -eu

yarn
yarn run build-netlify

# The design system website lives at cfpb.github.io/design-system
# To simulate this with the PR preview websites we put the compiled
# Jekyll site into a design-system/ sub directory
mv docs/_site/ docs/_site-tmp/
mkdir -p docs/_site/design-system
mv docs/_site-tmp/* docs/_site/design-system/
