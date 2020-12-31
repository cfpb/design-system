# CFPB Design System [![Travis](https://img.shields.io/travis/cfpb/design-system.svg?style=flat-square)](https://travis-ci.org/cfpb/design-system) [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-design-system.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-design-system)

The Consumer Financial Protection Bureau's user interface framework and documentation.

| atomic-component | buttons | core | expandables | forms | grid
|:---:|:---:|:---:|:---:|:---:|:---:|
| [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-atomic-component.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-atomic-component) | [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-buttons.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-buttons)  | [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-core.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-core)  | [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-expandables.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-expandables)  | [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-forms.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-forms)  | [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-grid.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-grid)  |

| icons | layout | notifications | pagination | tables | typography |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-icons.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-icons)  | [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-layout.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-layout)  | [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-notifications.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-notifications)  | [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-pagination.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-pagination)  | [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-tables.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-tables)  | [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-typography.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-typography)  |


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
It lives in this repository's `docs/` directory
and is powered by [Netlify CMS](https://www.netlifycms.org/)
and [Jekyll](https://jekyllrb.com/).
To edit any page of the website,
click the edit button at the bottom right of the page.
You'll need to be added as a contributor to this repository in order to
authenticate with Netlify CMS.

To run the documentation website locally:

```shell
git clone https://github.com/cfpb/design-system.git
cd design-system
yarn
yarn start
```

Visit http://localhost:4000/design-system/ to view the site.
Editing a page locally will change your local files, using
[an experimental Netlify CMS feature](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository).

To run accessibility tests against your local files:

```shell
yarn a11y
```

## Contributing

Please view our [contribution guidelines.](CONTRIBUTING.md)


## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
