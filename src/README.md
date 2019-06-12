# Capital Framework [![Travis](https://img.shields.io/travis/cfpb/capital-framework.svg?style=flat-square)](https://travis-ci.org/cfpb/capital-framework) [![npm](https://img.shields.io/npm/v/capital-framework.svg?style=flat-square)](https://www.npmjs.com/package/capital-framework)

The Consumer Financial Protection Bureau's user interface framework.

| atomic-component | buttons | core | expandables | forms | grid
|:---:|:---:|:---:|:---:|:---:|:---:|
| [![npm](https://img.shields.io/npm/v/cf-atomic-component.svg?style=flat-square)](https://www.npmjs.com/package/cf-atomic-component) | [![npm](https://img.shields.io/npm/v/cf-buttons.svg?style=flat-square)](https://www.npmjs.com/package/cf-buttons)  | [![npm](https://img.shields.io/npm/v/cf-core.svg?style=flat-square)](https://www.npmjs.com/package/cf-core)  | [![npm](https://img.shields.io/npm/v/cf-expandables.svg?style=flat-square)](https://www.npmjs.com/package/cf-expandables)  | [![npm](https://img.shields.io/npm/v/cf-forms.svg?style=flat-square)](https://www.npmjs.com/package/cf-forms)  | [![npm](https://img.shields.io/npm/v/cf-grid.svg?style=flat-square)](https://www.npmjs.com/package/cf-grid)  | 

| icons | layout | notifications | pagination | tables | typography |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [![npm](https://img.shields.io/npm/v/cf-icons.svg?style=flat-square)](https://www.npmjs.com/package/cf-icons)  | [![npm](https://img.shields.io/npm/v/cf-layout.svg?style=flat-square)](https://www.npmjs.com/package/cf-layout)  | [![npm](https://img.shields.io/npm/v/cf-notifications.svg?style=flat-square)](https://www.npmjs.com/package/cf-notifications)  | [![npm](https://img.shields.io/npm/v/cf-pagination.svg?style=flat-square)](https://www.npmjs.com/package/cf-pagination)  | [![npm](https://img.shields.io/npm/v/cf-tables.svg?style=flat-square)](https://www.npmjs.com/package/cf-tables)  | [![npm](https://img.shields.io/npm/v/cf-typography.svg?style=flat-square)](https://www.npmjs.com/package/cf-typography)  |



## Installation

```sh
npm install capital-framework
```

Components can also be installed individually:

```sh
npm install cf-buttons
npm install cf-expandables
```

### Project scaffolding

Want some boilerplate?
There is a Yeoman generator through the
[generator-cf](https://github.com/cfpb/generator-cf) project:

```sh
npm install -g yo generator-cf
mkdir my-new-project && cd $_
yo cf
```

### Using Less files directly

If you don't want to use the
[generator-cf](https://github.com/cfpb/generator-cf) Yeoman generator,
you can download the Capital Framework source files and
import them into your project.

Run `npm install capital-framework`.
This will download Capital Framework to your project's `node_modules` folder.
You can then import the framework into your application's primary Less file:

```less
@import (less) "node_modules/capital-framework/src/capital-framework.less";

// the rest of your stylesheet...
```

You may want to install individual [Capital Framework Components](https://cfpb.github.io/capital-framework/components/), so that you can leave out things you don't need, or to make it possible to update the components one-at-a-time in the future.

> NOTE: Be sure to run the Less files through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will not work
  perfectly in older browsers.

## Contributing

Please view our [contribution guidelines.](CONTRIBUTING.md)


## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
