# CFPB Design System [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-design-system.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-design-system) [![.github/workflows/lighthouse.yml](https://github.com/cfpb/design-system/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/cfpb/design-system/actions/workflows/lighthouse.yml)

The Consumer Financial Protection Bureau's user interface framework and documentation.

## Getting Started

Visit the [getting started section](https://cfpb.github.io/design-system/development/getting-started) in the Design System documentation.

## Documentation

The Design System's website is available at https://cfpb.github.io/design-system/.
It lives in this repository's `docs/` directory
and is powered by [Decap CMS](https://decapcms.org/)
and [Eleventy](https://www.11ty.dev/).
To edit any page of the website,
click the edit button at the bottom right of the page.
You'll need to be added as a contributor to this repository in order to
authenticate with Decap CMS.

## Web Components

The Design System's components have traditionally been written largely without
the use of external frameworks (`cfpb-tooltips` is a notable exception).
We are gradually transitioning some components to web components.
The properties of these components can be analyzed with the command:

```sh
npx web-component-analyzer packages/cfpb-design-system/src/elements
```

### Running the documentation website locally

The documentation website is built with Node.js and Eleventy. To run it locally:

```shell
git clone https://github.com/cfpb/design-system.git
cd design-system
yarn install
yarn after-install
yarn start
```

Visit http://localhost:4000/design-system/ to view the site.
Editing a page locally will change your local files.

To run Google Lighthouse accessibility tests against your local files:

```shell
yarn a11y
```

## Contributing

Please view our [contribution guidelines.](CONTRIBUTING.md)

## Open source licensing info

1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
