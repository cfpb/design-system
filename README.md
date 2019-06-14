# CFPB's Design System

The documentation website is in `docs/`. The code for Capital Framework, our UI library, is in `src/`.

### Getting started with our docs

Clone or fork the repo, then install dependencies:

```shell
git clone https://github.com/test-things/design-system.git
cd design-system/docs
yarn
```

To run a local copy of Netlify CMS that will open PRs against this GitHub repository:

```shell
yarn start
```

Visit http://localhost:4000/design-system/ to view the site and http://localhost:4000/design-system/admin to log into the CMS.

The OAuth app is hosted on [glitch](https://glitch.com/edit/#!/netlifycms-auth).

Webpack and Jekyll will watch your JS and HTML and recompile when changed.
The website is in `docs/`.  
[Capital Framework](https://github.com/cfpb/capital-framework) has been copied into `src/`.  
Custom Netlify CMS widgets are in `docs/admin/src/`.  
Jekyll templates are in `docs/_layouts/`.  
Design system components are in YAML in `docs/components/`.

### Getting started with Capital Framework

We're in the process of migrating Capital Framework to this repository.
For now, it still lives at [cfpb/capital-framework](https://github.com/cfpb/capital-framework). Stay tuned.
