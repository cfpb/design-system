#!/usr/bin/env bash

set -eu

# See full list of GitHub-provided env variables at
# https://help.github.com/en/actions/reference/virtual-environments-for-github-hosted-runners
repo_uri="https://x-access-token:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git"
remote_name="origin"
main_branch="main"
target_branch="gh-pages"
target_dir="docs/_site/design-system/"
gh_pages_dir=""

# Remove the worktree when the script exits, regardless if it succeeds or fails
cleanup() {
	if [ -n "${gh_pages_dir}" ] && [ -d "${gh_pages_dir}" ]; then
		git worktree remove "${gh_pages_dir}" --force || true
	fi
}

trap cleanup EXIT

cd "$GITHUB_WORKSPACE"

git fetch "$remote_name" "$target_branch"
git checkout "$main_branch"

# Mount the github pages branch as a separate worktree
# See http://sangsoonam.github.io/2019/02/08/using-git-worktree-to-deploy-github-pages.html
gh_pages_dir="$(mktemp -d)"
git worktree add "$gh_pages_dir" "$target_branch"

# Install dependencies
yarn install
yarn after-install

# Build the design system website
yarn build-decap

# Remove the built Eleventy website from .gitignore
sed -i '/_site/d' ./.gitignore

# Don't delete the `pr-preview` folder (or git metadata)
rsync -av --delete \
	--exclude "pr-preview" \
	--exclude ".git" \
	--exclude ".github" \
	"$target_dir"/. "$gh_pages_dir"/

# Check to see if there are any changes to commit.
cd "$gh_pages_dir"

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
