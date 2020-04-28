#!/usr/bin/env bash

set -eu

# See full list of GitHub-provided env variables at
# https://help.github.com/en/actions/reference/virtual-environments-for-github-hosted-runners
repo_uri="https://x-access-token:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git"
remote_name="origin"
main_branch="master"
target_branch="gh-pages"
target_dir="docs/_site/"

cd "$GITHUB_WORKSPACE"

# Mount the github pages branch as a subdirectory
# See http://sangsoonam.github.io/2019/02/08/using-git-worktree-to-deploy-github-pages.html
git worktree add "$target_dir" "$target_branch"

# Install dependencies
yarn
yarn --cwd docs/

# Build the design system website
yarn --cwd docs/ run build

# Remove the built Jekyll website from .gitignore
sed -i '/_site/d' ./.gitignore

# Configure git
git config user.name "CFPBot"
git config user.email "CFPBot@users.noreply.github.com"

# Commit the built website
cd "$target_dir"
git add .
git commit -m "Update GitHub Pages"
if [ "$?" != "0" ]; then
	echo "nothing to commit"
	exit 0
fi

# Push to remote gh-pages branch
git remote set-url "$remote_name" "$repo_uri"
git push "$remote_name" "$target_branch"
