# Netlify CMS Design System

### Getting started

Clone or fork the repo, then install dependencies:

```shell
git clone https://github.com/test-things/design-system.git
cd design-system
yarn
```

### Development

To run a local copy of Netlify CMS that will open PRs against this GitHub repository:

```shell
yarn start
```

Visit http://localhost:4000/design-system/ to view the site and http://localhost:4000/design-system/admin to log into the CMS.

The OAuth app is hosted on [glitch](https://glitch.com/edit/#!/netlifycms-auth).

Webpack and Jekyll will watch your JS and HTML and recompile when changed.  
Custom Netlify CMS widgets are in `admin/src/`.  
Jekyll templates are in `_layouts/`.  
Design system components are in `components/`.
