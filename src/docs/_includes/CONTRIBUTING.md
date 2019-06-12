All contributions to this project will be released under the CC0 public domain
dedication. By submitting a pull request or filing a bug, issue, or
feature request, you are agreeing to comply with this waiver of copyright interest.
Details can be found in our [TERMS](https://github.com/cfpb/capital-framework/blob/master/TERMS.md) and [LICENSE](https://github.com/cfpb/capital-framework/blob/master/LICENSE).

--------------------------------------------------------------------------------

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

We work off feature branches from the `master` branch.
After you've edited a component,
open a Pull Request to merge your feature branch back into `master`.

For example, if you wanted to change `cf-buttons` and use it in
[cfgov-refresh](https://github.com/cfpb/cfgov-refresh),
here's what you'd do:

1. `git clone git@github.com:cfpb/capital-framework.git`, if you haven't already.
1. `cd capital-framework`
1. `git checkout master && git pull` to ensure you're on the latest changes (this step is not necessary when cloning for the first time).
1. `yarn` to install dependencies and set up [workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
1. `git checkout -b button-fix` to create a new branch for your changes.
1. Edit file(s) in `/packages/cf-buttons/` however you want.
1. Run `gulp docs` to update the documentation.
1. `yarn run cf-link` to [link](https://yarnpkg.com/lang/en/docs/cli/link/) your local CF components.
1. `cd ~/wherever/cfgov-refresh/` to navigate to another project where you'd like to test your buttons changes (in this case, cfgov-refresh).
1. `yarn link cf-buttons` to link cf-buttons to cfgov-refresh.
1. `gulp build` in cfgov-refresh to compile your stylesheets.
1. [Start cfgov-refresh](https://cfpb.github.io/cfgov-refresh/usage/) and navigate to a page with buttons to view your cf-buttons changes.
1. When you're pleased with your changes, `cd` back to your `capital-framework` repo and commit your changes: `git commit -am "Fix button border radius"`
1. `git push origin button-fix` to push your branch up to GitHub.
1. Go to https://github.com/cfpb/capital-framework and open a pull request to merge `button-fix` into `master`.

If you are not a current contributor to Capital Framework,
use forks by first clicking the fork button on top of the repository
and cloning your fork in step 1.
In the final step, go to https://github.com/cfpb/capital-framework
and file a pull request by clicking the link to compare changes across forks.

### Updating Documentation

Documentation is maintained in each component's folder's `usage.md` file.
Changes to documentation are made on the `master` branch using the workflow
above and pulled in the `docs` directory using the `gulp docs` command.
The `usage.md` files are then rendered as separated pages on Capital Framework's website
[(See this example from cf-core)](https://cfpb.github.io/capital-framework/components/cf-core/).


### Testing components locally

#### Automated tests

Automated tests can be run with the command `yarn test`.

#### Testing in the documentation site

If you're hacking on a component and want to test it in the documentation site
follow the following steps.

1. Ensure that you have the Bundler Ruby gem installed
   by running `gem install bundler`.
   ([more info](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll#requirements)).
1. Check out a working branch.
1. Run `gulp docs`.
1. Go into the documentation directory with `cd docs`.
1. Run `bundle install` if you haven't before
   (also run `bundle update` periodically).
1. Run `bundle exec jekyll serve watch` and visit http://localhost:4000/.

### Browser support

We configure [Autoprefixer](#autoprefixer)
and [Babel](#babel) to support the following list of browsers.

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

#### Babel

Babel compiles our [ES6](http://es6-features.org/) JavaScript where necessary
for the browsers that either don't support or have limited support of ES6
features. For more information visit the [Babel documentation site]
(https://babeljs.io/).

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

1. Ensure you're on `master` and `git pull` to confirm you're up-to-date.
1. Export a personal access token called
   [`GITHUB_AUTH`](https://github.com/lerna/lerna-changelog#github-token).
1. Run `yarn run changelog` and open `CHANGELOG.md` to see a preview
   of new changelog entries.
   We use a [tool](https://github.com/lerna/lerna-changelog#usage) that scans our
   Pull Requests for specific labels so if you see a PR missing from the changelog,
   ensure it has been labeled `breaking`, `enhancement`, `bug`,
   `documentation` or `internal`.
1. If you're pleased with the changelog preview,
   `git checkout CHANGELOG.md` to reset it.
1. Run `yarn run release` to start the release.
1. If all packages are shown as having been published,
   run `git push` to push changes to the remote `master` branch.

Lerna will update the changelog, ask for a new version number, create a git tag,
push to GitHub and publish to npm.


## Notes

The CSS and JavaScript files that are generated during the build task are only
used for testing. Because this project doesn't necessarily produce a final
product it is up to the projects that use it to generate and maintain their own
browser support config. An example of this is
[consumerfinance.gov](https://github.com/cfpb/cfgov-refresh), which generates
specific IE 8 and 9 stylesheets, whereas the Capital Framework build task
bundles those with the main stylesheet. Despite the differences in delivery,
the output and support are the same.

### Adhere to any linting errors or warnings

The `gulp lint` linting tasks that are set up within the build processes
are there to promote consistency.
When contributing code please publicly track that there are no linting errors
or warnings using the testing checklist in the pull request description.


### Follow our CSS naming conventions

**We are using a customized BEM format**

```css
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
