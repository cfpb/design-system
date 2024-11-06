#!/usr/bin/env bash

NODE_VERSION=$(node -p -e "require('./packages/cfpb-design-system/package.json').version")

if [ "$1" = "stdout" ]; then
    yarn exec git-cliff -o - --include-path 'packages/cfpb-design-system/**/*' --unreleased --tag $NODE_VERSION
else
    yarn exec git-cliff -o 'packages/cfpb-design-system/CHANGELOG.md' --include-path 'packages/cfpb-design-system/**/*' --tag $NODE_VERSION
fi