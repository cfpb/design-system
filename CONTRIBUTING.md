All contributions to this project will be released under the CC0 public domain
dedication. By submitting a pull request or filing a bug, issue, or
feature request, you are agreeing to comply with this waiver of copyright interest.
Details can be found in our [TERMS](https://github.com/cfpb/design-system/blob/main/TERMS.md) and [LICENSE](https://github.com/cfpb/design-system/blob/main/LICENSE).

---

There are two primary ways to help:

- Using the issue tracker, and
- Changing the codebase.

## Using the issue tracker

Use the issue tracker to suggest feature requests, report bugs, and ask questions.
This is also a great way to connect with the developers of the project as well
as others who are interested in this solution.

Use the issue tracker to find ways to contribute. Find a bug or a feature,
mention in the issue that you will take on that effort,
then follow the _Changing the codebase_ guidance below.

## Changing the codebase

We work off feature branches from the `main` branch.
After you've edited a component,
open a Pull Request to merge your feature branch back into `main`.

For example, if you wanted to change some button code in `@cfpb/cfpb-design-system` and use it in
[consumerfinance.gov](https://github.com/cfpb/consumerfinance.gov),
here's what you'd do:

1. `git clone git@github.com:cfpb/design-system.git`, if you haven't already.
1. `cd design-system`
1. `git checkout main && git pull` to ensure you're on the latest changes (this step is not necessary when cloning for the first time).
1. `yarn install` to install dependencies and set up [workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
1. `yarn after-install` to copy assets and configure Ruby dependencies.
1. `git checkout -b button-fix` to create a new branch for your changes.
1. Edit file(s) in `/packages/cfpb-design-system/src/components/cfpb-buttons` however you want.
1. Copy `/packages/cfpb-design-system/` into `node_modules/@cfpb/cfpb-design-system/` in your consumerfinance.gov or other repo.
1. `cd ~/wherever/consumerfinance.gov/` to navigate to another project where you'd like to test your buttons changes (in this case, consumerfinance.gov).
1. `yarn build` in consumerfinance.gov to compile your stylesheets.
1. [Start consumerfinance.gov](https://cfpb.github.io/consumerfinance.gov/usage/) and navigate to a page with buttons to view your `@cfpb/cfpb-design-system` changes.
1. When you're pleased with your changes, `cd` back to your `design-system` repo and commit your changes: `git commit -am "Fix button border radius"`
1. `git push origin button-fix` to push your branch up to GitHub.
1. Go to https://github.com/cfpb/design-system and open a pull request to merge `button-fix` into `main`.

If you are not a current contributor to this repository,
use forks by first clicking the fork button on top of the repository
and cloning your fork in step 1.
In the final step, go to https://github.com/cfpb/design-system
and file a pull request by clicking the link to compare changes across forks.

### Updating Documentation

The Design System's website lives in this repository's `docs/` directory and is
powered by Decap CMS and Jekyll.
To edit any page of the website, click the edit button at the bottom right of
the page.
You'll need to be added as a contributor to this repository in order to
authenticate with Decap CMS.

### Testing components locally

#### Automated tests

Automated tests can be run with the command `yarn test:browser`.

### Browser support

Per the [best practices published by browserslist](https://github.com/browserslist/browserslist?tab=readme-ov-file#best-practices),
we use a 0.2% cutoff with this config for the browsers
that get fed into our build systems.

What this means to the end-user is we've added a level of backward
compatability for modern features as much as possible. This doesn't
necessarily mean feature parity. Where it's impossible or impractical to
implement a modern feature, we fallback to standard practices for that browser.
For example, we do not deliver interactive scripting for Internet Explorer 8,
but we do ensure that default browser features continue to work so users
that can't or don't want to upgrade continue to have access to the site and
our content.

#### Autoprefixer

Autoprefixer parses our CSS and adds vendor prefixes to rules where necessary
using reported feature support by [Can I Use](https://caniuse.com/). For more
information visit the [Autoprefixer documentation site]
(https://autoprefixer.github.io/).

## Release management

Ready to publish changes to npm?

First, set some credentials:

1. Create and export a personal access token called
   [`GITHUB_TOKEN`](https://github.com/release-it/release-it/blob/main/docs/github-releases.md#automated).
1. Confirm your environment has the above token properly defined and is not blank: `echo $GITHUB_TOKEN`.
1. Create an npm account if you don't already have one and ensure you're
   listed as a "collaborator" on all our npm packages (e.g.
   [cfpb-buttons](https://www.npmjs.com/package/@cfpb/cfpb-buttons)).
1. Check that you are logged in with `npm whoami`. If you aren't shown your username, run `npm login`.

**Note:** If you run into issues with your npm account not approving your MFA code, try resetting your npm password at npmjs.com.

Then, do a release:

1. Ensure you're on the `main` branch with `git checkout main`
   and pull latest with `git pull`.
1. Run `yarn release`
1. Follow the prompts to decide what version (major, minor, or patch)
   you will be releasing.

### Adhere to any linting errors or warnings

The `yarn lint` command can be used to lint the CSS and JS. Linting tasks that are set up within the pre-release processes are there to promote consistency.

### Follow our CSS naming conventions

**We are using the getBEM format:**

```css
.block-name
.block-name__element-name
.block-name--block-modifier

/* Modifiers on elements is discouraged, but they would look like */
.block-name__element-name--element-modifier
```

**Avoid creating elements of modifiers**

Appending an element name to a modifier class can result in a confusing class
name like `.list--space__item`.
Avoid this in favor of using a descendant, like this: `.list--spaced .list__item`.

### Shoot for mobile first declarations

In most cases styles should be declared mobile first,
then enhanced with media queries.
By doing this we create a base experience that all devices can use
and one that does not require media query support.

## Adding and updating icons

Instructions for developers who've received a new or updated icon from a designer:

1. Place SVG file (named with its canonical name, i.e., `canonical.svg`)
   in [`packages/cfpb-design-system/src/components/cfpb-icons/icons`](tree/main/packages/cfpb-design-system/src/components/cfpb-icons/icons/).
1. If it has a `-round` or `-square` version, ensure those are in place as well.
1. Run `yarn process-icon-svgs` from the root of the repository.
   - This script compresses and standardizes the SVG code for all of our icons.
   - It should be a no-op for icons that have not changed.
1. From the repo root, copy the icons into the docs site with `yarn copy-assets`.

1. If adding a new icon or updating any names, update the tables on both
   [`packages/cfpb-design-system/src/components/cfpb-icons/usage.md`](tree/main/packages/cfpb-design-system/src/components/cfpb-icons/usage.md)
   and [`docs/pages/iconography.md`](tree/main/docs/pages/iconography.md)
   accordingly
1. If any icons were deleted, be sure to delete them from both
   `packages/cfpb-design-system/src/components/cfpb-icons/icons/` and `docs/_includes/icons/`
