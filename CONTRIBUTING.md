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

For example, if you wanted to change `@cfpb/cfpb-buttons` and use it in
[cfgov-refresh](https://github.com/cfpb/cfgov-refresh),
here's what you'd do:

1. `git clone git@github.com:cfpb/design-system.git`, if you haven't already.
1. `cd design-system`
1. `git checkout main && git pull` to ensure you're on the latest changes (this step is not necessary when cloning for the first time).
1. `yarn install` to install dependencies and set up [workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
1. `yarn after-install` to copy assets and configure Ruby dependencies.
1. `git checkout -b button-fix` to create a new branch for your changes.
1. Edit file(s) in `/packages/cfpb-buttons/` however you want.
1. `yarn design-system-link` to [link](https://yarnpkg.com/lang/en/docs/cli/link/) your local CF components.
1. `cd ~/wherever/cfgov-refresh/` to navigate to another project where you'd like to test your buttons changes (in this case, cfgov-refresh).
1. `yarn link @cfpb/cfpb-buttons` to link @cfpb/cfpb-buttons to cfgov-refresh.
1. `yarn build-packages` in cfgov-refresh to compile your stylesheets.
1. [Start cfgov-refresh](https://cfpb.github.io/cfgov-refresh/usage/) and navigate to a page with buttons to view your @cfpb/cfpb-buttons changes.
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
powered by Netlify CMS and Jekyll.
To edit any page of the website, click the edit button at the bottom right of
the page.
You'll need to be added as a contributor to this repository in order to
authenticate with Netlify CMS.

### Testing components locally

#### Automated tests

Automated tests can be run with the command `yarn test:browser`.

### Browser support

We configure [Autoprefixer](#autoprefixer)
to support the following list of browsers.

- Latest 2 releases of all browsers including:
  - Chrome
  - Firefox
  - Safari
  - Internet Explorer
  - Edge
  - Opera
  - iOS Safari
  - Opera Mini
  - Android Browser
  - BlackBerry Browser
  - Opera Mobile
  - Chrome for Android
  - Firefox for Android
  - Samsung Internet
- Internet Explorer 9

http://browserl.ist/?q=last+2+versions%2C+Explorer+%3E%3D+9

As well as additional Autoprefixer support for:

- Internet Explorer 8

http://browserl.ist/?q=last+2+versions%2C+Explorer+%3E%3D+8

What this means to the end-user is we've added a level of backward
compatability for modern features as much as possible. This doesn't
necessarily mean feature parity. Where it's impossible or impractical to
implement a modern feature, we fallback to standard practices for that browser.
For example, we do not deliver interactive scripting for Internet Explorer 8,
but we do ensure that default browser features continue to work so users
that can't or don't want to upgrade continue to have access to the site and
our content.

#### Browser Testing

We have automated tests that use a headless version of Chrome to ensure
the majority of the site is working as expected. For manual testing, we
realistically test this project locally or in a virtual environment with the
following list of browsers:

- Chrome
- Firefox
- Safari
- Internet Explorer 8, 9, 10, and 11
- Edge
- iOS Safari
- Chrome for Android

#### Autoprefixer

Autoprefixer parses our CSS and adds vendor prefixes to rules where necessary
using reported feature support by [Can I Use](https://caniuse.com/). For more
information visit the [Autoprefixer documentation site]
(https://autoprefixer.github.io/).

#### Known feature differences

- JavaScript: We do not serve interactive scripting to IE 8 but we do deliver
  analytics via JavaScript.
- Icons: We currently use icon fonts to deliver scalable icons. Browsers that
  do not support icon fonts unfortunately do not receive backups but we try to
  always pair icons with text.

#### Resources

- https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
- https://saucelabs.com/beta/dashboard/tests
- http://developer.samsung.com/remotetestlab/rtlDeviceList.action#

## Release management

Ready to publish changes to npm?

First, set some credentials:

1. Export a personal access token called
   [`GITHUB_AUTH`](https://github.com/lerna/lerna-changelog#github-token).
1. Create an npm account if you don't already have one and ensure you're
   listed as a "collaborator" on all our npm packages (e.g.
   [cfpb-buttons](https://www.npmjs.com/package/@cfpb/cfpb-buttons)).
1. Check that you are logged in with `npm whoami`. If you aren't shown your username, run `npm login`.

Then, do a release:

1. Ensure you're on the `main` branch with `git checkout main`
   and pull latest with `git pull`.
1. [Check closed Pull Requests](https://github.com/cfpb/design-system/pulls?q=is%3Apr+is%3Aclosed) and ensure Pull Requests that change the `/packages/` have a label
   that begins with a `lerna-changelog/…` label.
1. Run `yarn pre-release`
1. Decide what version (major, minor, or patch) you will be releasing and
   manually update to that version in `CHANGELOG.md`.
   This is the future version that will be tagged shortly.
1. **There is a bug in lerna where the root package.json won't auto increment.**
   ([See this issue](https://github.com/lerna/lerna/issues/2879)).
   Manually increment the `version` in the root `package.json` file to match
   the latest change log entry and save the file.
1. Run `yarn release` to start the release.
1. It'll ask if you want to do a major, minor or patch release.
   Select whichever matches the latest changelog version.
   Lerna will tag and publish every package to npm.
1. Confirm both the updated root `CHANGELOG.md` and `package.json` files have
   been updated and committed to the `main` branch.

## Notes

The CSS and JavaScript files that are generated during the build task are only
used for testing. Because this project doesn't necessarily produce a final
product it is up to the projects that use it to generate and maintain their own
browser support config. An example of this is
[consumerfinance.gov](https://github.com/cfpb/cfgov-refresh), which generates
specific IE 8 and 9 stylesheets, whereas the Design System build task
bundles those with the main stylesheet. Despite the differences in delivery,
the output and support are the same.

### Adhere to any linting errors or warnings

The `yarn lint` linting tasks that are set up within the build processes
are there to promote consistency.
When contributing code please publicly track that there are no linting errors
or warnings using the testing checklist in the pull request description.

### Follow our CSS naming conventions

**We are using a customized BEM format:**

```
.block-name
.block-name_element-name
.block-name__block-modifier
.block-name_element-name__element-modifier
```

**Avoid creating elements of modifiers**

Appending an element name to a modifier class can result in a confusing class
name like `.list__space_item`.
Avoid this in favor of using a descendant, like this: `.list__spaced .list_item`.

### Shoot for mobile first declarations

In most cases styles should be declared mobile first,
then enhanced with `min-width` media queries.
By doing this we create a base experience that all devices can use
and one that does not require media query support.

## Adding and updating icons

Instructions for developers who've received a new or updated icon from a designer:

1. Place SVG file (named with its canonical name, i.e., `canonical.svg`)
   in [`packages/cfpb-icons/src/icons`](tree/main/packages/cfpb-icons/src/icons/)
1. Run `yarn process-icon-svgs` from the root of the repository
   - This script compresses and standardizes the SVG code for all of our icons
   - It should be a no-op for icons that have not changed
1. If the icon has aliases, go into the icons folder and duplicate the canonical file to the aliases:

   ```shell
   cd packages/cfpb-icons/src/icons/

   # Edit the command below for your actual canonical filename and aliases
   for ALIAS in {one,two,three,}; do cp canonical.svg $ALIAS.svg; done
   # Be sure to leave in the trailing comma if there is only one alias,
   # or it will not be treated as an iterable object and will include
   # the curly braces in the filename.
   ```

1. Return to the repo root and copy the icons into the docs site:

   ```shell
   cd ../../../../

   yarn copy-assets
   ```

1. If adding a new icon or updating any names/aliases, update the tables on both
   [`packages/cfpb-icons/usage.md`](tree/main/packages/cfpb-icons/usage.md)
   and [`docs/pages/iconography.md`](tree/main/docs/pages/iconography.md)
   accordingly
1. If any icons or aliases were deleted, be sure to delete them from both
   `packages/cfpb-icons/src/icons/` and `docs/_includes/icons/`
