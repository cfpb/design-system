#!/bin/zsh

set -euo pipefail

# Storybook indexes stories on startup. Generate the nav-derived story files
# before launching dev mode so the explorer reflects the current Decap nav
# immediately instead of waiting for the first watcher tick.
yarn generate-storybook-stories

exec ./node_modules/.bin/concurrently \
  --kill-others \
  "yarn watch-storybook-stories" \
  "./node_modules/.bin/storybook dev --port 6006 --ci --exact-port"
