#!/bin/sh

# Back up the current changelog
mv CHANGELOG.md /tmp/capital-framework-changelog.md

# Generate the latest changelog entries
# See docs at https://github.com/lerna/lerna-changelog
lerna-changelog --next-version-from-metadata > CHANGELOG.md

# Add a new line to keep releases spaced nicely
echo "\n" >> CHANGELOG.md

# Combine the two
cat /tmp/capital-framework-changelog.md >> CHANGELOG.md

# Delete the temporary file for good measure
rm /tmp/capital-framework-changelog.md
