#!/bin/sh
set -e

# Build package assets in the background.
yarn build-packages &

# Make sure everything is current and built and generate changelog.
yarn build &

# Update the changelog.
yarn changelog

# Reminder to edit files before release.
while true; do
    read -p $'Have you manually updated the version in \e[31mCHANGELOG.md\e[0m:? [y/n]' yn
    case $yn in
        [Yy]* ) echo 'Great! Run \033[0;32mgit add . && git commit -m "Bump version" && yarn release\033[0m'; break;;
        [Nn]* ) echo '\033[0;31mEdit the versions and re-run `yarn pre-release`\033[0m'; exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
