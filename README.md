# CFPB Design System [![Travis](https://img.shields.io/travis/cfpb/design-system.svg?style=flat-square)](https://travis-ci.org/cfpb/design-system) [![npm](https://img.shields.io/npm/v/@cfpb/design-system.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/design-system)

The Consumer Financial Protection Bureau's user interface framework and documentation.

| atomic-component | buttons | core | expandables | forms | grid
|:---:|:---:|:---:|:---:|:---:|:---:|
| [![npm](https://img.shields.io/npm/v/@cfpb/atomic-component.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/atomic-component) | [![npm](https://img.shields.io/npm/v/@cfpb/buttons.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/buttons)  | [![npm](https://img.shields.io/npm/v/@cfpb/core.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/core)  | [![npm](https://img.shields.io/npm/v/@cfpb/expandables.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/expandables)  | [![npm](https://img.shields.io/npm/v/@cfpb/forms.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/forms)  | [![npm](https://img.shields.io/npm/v/@cfpb/grid.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/grid)  |

| icons | layout | notifications | pagination | tables | typography |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [![npm](https://img.shields.io/npm/v/@cfpb/icons.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/icons)  | [![npm](https://img.shields.io/npm/v/@cfpb/layout.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/layout)  | [![npm](https://img.shields.io/npm/v/@cfpb/notifications.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/notifications)  | [![npm](https://img.shields.io/npm/v/@cfpb/pagination.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/pagination)  | [![npm](https://img.shields.io/npm/v/@cfpb/tables.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/tables)  | [![npm](https://img.shields.io/npm/v/@cfpb/typography.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/typography)  |


## Installation

Install components using yarn or npm:

```sh
yarn add @cfpb/cfpb-buttons
# or
npm install @cfpb/cfpb-buttons
```

Or you can install all components at once:

```sh
yarn add @cfpb/cfpb-design-system
# or
npm install @cfpb/cfpb-design-system
```


## Usage

Import individual Less stylesheets or the entire design system into your project:

```less
@import '@cfpb/cfpb-buttons/src/cfpb-buttons.less';
@import '@cfpb/cfpb-typography/src/cfpb-typography.less';
// or
@import '@cfpb/cfpb-design-system/src/cfpb-design-system.less';

// the rest of your stylesheet...
```

Components with JavaScript can also be imported:

```js
import Expandable from '@cfpb/cfpb-expandables/src/Expandable'';

Expandable.init( document.querySelector( '#container' ) );
```

> NOTE: Be sure to run the Less files through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled CSS might not work perfectly in older browsers.


## Documentation

The Design System's website is available at https://cfpb.github.io/design-system/.
It lives in this repository's `docs/` directory and is powered by [Netlify CMS](https://www.netlifycms.org/) and [Jekyll](https://jekyllrb.com/).
To edit any page of the website, click the edit button at the bottom right of
the page.
You'll need to be added as a contributor to this repository in order to
authenticate with Netlify CMS.

To run the documentation website locally:

```shell
git clone https://github.com/cfpb/design-system.git
cd design-system/docs
yarn
yarn start
```

Visit http://localhost:4000/design-system/ to view the site.
Editing a page locally will change your local files, using
[an experimental Netlify CMS feature](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository).


## Contributing

Please view our [contribution guidelines.](CONTRIBUTING.md)


## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
