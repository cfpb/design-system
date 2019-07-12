# CFPB's Design System

[![Build Status](https://travis-ci.org/cfpb/design-system.png?branch=master)](https://travis-ci.org/cfpb/design-system?branch=master)


The documentation website is in `docs/`. The code for Capital Framework, our UI library, is in `src/`.

### Getting started with our docs

Clone or fork the repo, then install dependencies:

```shell
git clone https://github.com/cfpb/design-system.git
cd design-system/docs
yarn
```

To run a local copy of Netlify CMS that will open PRs against this GitHub repository:

```shell
yarn start
```

#### Notes:

- Visit http://localhost:4000/design-system/ to view the site.
- Visit http://localhost:4000/design-system/admin to log into the CMS. **Note:** The CMS talks to GitHub.com so editing a page in the CMS will open a pull request.
- The OAuth app is hosted on [glitch](https://glitch.com/edit/#!/netlifycms-auth).
- Webpack and Jekyll will watch your JS and HTML and recompile when changed.
- The website is in `docs/`.
- [Capital Framework](https://github.com/cfpb/capital-framework) has been copied into `src/`.
- Custom Netlify CMS widgets are in `docs/admin/src/`.
- Jekyll templates are in `docs/_layouts/`.

### Getting started with Capital Framework

We're in the process of migrating Capital Framework to this repository.
For now, it still lives at [cfpb/capital-framework](https://github.com/cfpb/capital-framework). Stay tuned.
