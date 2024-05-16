#!/usr/bin/env bash

set -eu

# See full list of GitHub-provided env variables at
# https://help.github.com/en/actions/reference/virtual-environments-for-github-hosted-runners
repo_uri="https://x-access-token:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git"
remote_name="origin"
main_branch="main"
target_branch="gh-pages"
target_dir="docs/_site/design-system/"

cd "$GITHUB_WORKSPACE"

git fetch "$remote_name" "$target_branch"
git checkout "$target_branch"
git checkout "$main_branch"

# Mount the github pages branch as a subdirectory
# See http://sangsoonam.github.io/2019/02/08/using-git-worktree-to-deploy-github-pages.html
git worktree add "$target_dir" "$target_branch"

# Install dependencies
yarn install
yarn after-install

# Build the design system website
yarn build-decap

# Remove the built Jekyll website from .gitignore
sed -i '/_site/d' ./.gitignore

# Check to see if there are any changes to commit.
cd "$target_dir"

if [ -z "$(git status --porcelain)" ]; then
	echo "no local changes to commit"
	exit 0
fi

# Commit all changed files.
git config user.name "CFPBot"
git config user.email "CFPBot@users.noreply.github.com"
git add .
git commit -am "Update GitHub Pages"

# Push to remote gh-pages branch
git remote set-url "$remote_name" "$repo_uri"
git push "$remote_name" "$target_branch"
