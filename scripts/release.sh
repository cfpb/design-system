#!/usr/bin/env bash

# Exit on error from any of the linting sub-tasks.
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

if [ -z "${GITHUB_TOKEN}" ]; then
    echo -e "${RED}WARNING!${NC} ${RED}WARNING!${NC} ${RED}WARNING!${NC}"
    echo -e "Variable ${GREEN}GITHUB_TOKEN${NC} is not set."
    echo "Do you wish to continue with the release?"
    # Prompt the user to continue the release or not.
    read -p "You will need to manually create a GitHub release if you continue. [y/n]" release_prompt

    # Set default of release_prompt value to no.
    release_prompt="${release_prompt:-n}"
fi

if [ "$release_prompt" = "n" ] || [ "$release_prompt" = "N" ]; then
    echo -e "${RED}Release aborted${RED}"
    exit
fi

echo -e "${GREEN}Release started…${RED}"
echo -e "${GREEN}Checking linting and building…${RED}"
yarn lint
yarn build

echo -e "${GREEN}Creating release…${RED}"
release-it --only-version

echo -e "${GREEN}Publishing to npm…${RED}"
cd packages/cfpb-design-system && npm publish

echo -e "${GREEN}Successfully published!${RED} 🇺🇸"
