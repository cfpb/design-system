#!/usr/bin/env bash

yarn lint &&

yarn build &&

release-it --only-version &&

cd packages/cfpb-design-system && npm publish
