# CFPB Design System [![npm](https://img.shields.io/npm/v/@cfpb/cfpb-design-system.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/cfpb-design-system) [![.github/workflows/lighthouse.yml](https://github.com/cfpb/design-system/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/cfpb/design-system/actions/workflows/lighthouse.yml)

The Consumer Financial Protection Bureau's user interface framework and documentation.

## Getting Started

Visit the [getting started section](https://cfpb.github.io/design-system/development/getting-started) in the Design System documentation.

## Documentation

The Design System's website is available at https://cfpb.github.io/design-system/.
It lives in this repository's `docs/` directory
and is powered by [Decap CMS](https://decapcms.org/)
and [Jekyll](https://jekyllrb.com/).
To edit any page of the website,
click the edit button at the bottom right of the page.
You'll need to be added as a contributor to this repository in order to
authenticate with Decap CMS.

### Running the documentation website locally

The project has a dependency on Ruby because it uses Jekyll. If you do not have Ruby installed, you will need to install it. We recommend using [RVM](https://rvm.io/rvm/install). If you don't have admin access to your machine, try these steps:

```shell
curl -sSL https://get.rvm.io | bash -s stable --ruby
brew install openssl
brew link openssl --force
rvm install ruby-3.2.3 -C --with-openssl-dir=$(brew --prefix openssl@3)
rvm --default use 3.2.3
gem install eventmachine -- --with-openssl-dir=$(brew --prefix openssl@3)
bundle install
```

And then to run the documentation website locally:

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
