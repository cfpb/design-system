---
title: How to use the design system
permalink: /getting-started/How-to-use-the-design-system
layout: variation
section: getting-started
status: Proposed
description: >-
  ### Anatomy of a component


  #### src/


  The working folder containing component source files.


  #### screenshot.png


  Screenshot of the component in a browser.


  #### usage.md


  Markdown file containing code snippets of how to use the component. cf-buttons
  is a good example.


  #### package.json


  Used to record the component’s dependencies, keywords and description, among
  other things. The less property should point to the component’s Less file,
  styles to the component’s compiled CSS file, and main to the component’s
  JavaScript file, if applicable. Whenever you update a component, increment the
  component’s package.json file appropriately.


  ### Getting started


  Capital Framework provides a set of modular HTML, CSS, and JavaScript patterns
  that can be used both collectively and individually. There are several ways to
  integrate Capital Framework into your project:


  1. Using the generator

  2. Using Less

  3. Downloading the compiled CSS


  Our recommended workflow is to use the generator to scaffold out a new Capital
  Framework project. This allows you to pick and choose your modules as well as
  providing a solid front end build process.


  #### Using the generator


  To use the generator, you will need [Node.js](http://nodejs.org/),
  [Yeoman](http://yeoman.io/), and [Gulp](http://gulpjs.com/).


  ##### Installing dependencies


  [Node.js](http://nodejs.org/) can be downloaded and installed directly from
  the Node website, or by using a package manager for your system. At the CFPB
  we use Homebrew. To install the dependencies:


  ```

  brew install node  # if installing node with Homebrew

  npm install --global gulp yo generator-cf

  ```


  ##### Scaffolding out a project


  To create a new project, create a directory, cd into that directory, and run
  the yo cf command:


  ```

  mkdir my-awesome-project

  cd my-awesome-project

  yo cf

  ```


  The generator will prompt you to complete information about the project and
  choose the Capital Framework modules you would like to use.


  ##### Navigating the project folder


  Once the generator has finished you’ll have a folder full of files and
  folders. Here’s a quick guide on working with these files:


  * Run npm run build to process the files in src and output them to dist.

  * To view your site, go to the dist directory and start a local server: cd
  dist && python -m SimpleHTTPServer. You can now navigate to localhost:8000 in
  your web browser.

  * Edit files within the src directory and re-run npm run build to view
  changes.


  ###### Editing the Less and JS


  The generator has created a starter Less file at `src/static/css/main.less`.
  This file includes all of the necessary imports needed for Capital Framework.
  There is also a starter JavaScript file at `src/static/js/main.js`. Both
  `main.less` and `main.js` are already wired into `Gruntfile.js` (or
  `gulp/tasks/` if you selected gulp) so compiling is as easy as running `npm
  run build`. It also copies files from src into `dist`, which will update what
  you see at `localhost:8000/`.


  ##### Theming / Customizing


  You can override component UI colors within
  `src/static/css/cf-theme-overrides.less`. This is already set up for you and
  gets imported by `main.less`. If you would like to use your own color palette
  simply replace the contents of `brand-palette.less` with your own color
  variables, then update `cf-theme-overrides`.less by overriding each UI color
  variable with a color from `brand-palette.less` or any color of your choosing.


  The same applies when you need to add custom styles to your project. You can
  add any custom `.less` files to your project that you may need, just remember
  to import them in `main.less` using the correct path.


  ##### Using Less


  If you don’t want to use the generator, you can just download the source files
  and import them into your project.


  > NOTE: Be sure to run the Less files through Autoprefixer, or your compiled
  Capital Framework CSS will not work perfectly in older browsers.


  Run `npm install capital-framework`. This will download Capital Framework to
  your project’s `node_modules` directory. You can then import the framework
  into your application’s primary Less file:


  ```

  @import (less) "node_modules/capital-framework/src/capital-framework.less";


  /* the rest of your stylesheet… */

  ```


  Just want one or two CF components and not the entire framework? Simply
  install and `@import` only the components you need.


  ```

  npm install cf-buttons cf-icons

  ```


  ```

  @import (less) "node_modules/cf-buttons/src/cf-buttons.less";

  @import (less) "node_modules/cf-icons/src/cf-icons.less";


  /* the rest of your stylesheet… */

  ```


  ##### Downloading the compiled CSS


  Capital Framework’s compiled CSS can be downloaded here. Download it and copy
  the files found in the `dist/` directory to your project. Use standard
  `<link>` and `<script>` tags.


  ```

  <!DOCTYPE html>

  <html>

  <head>
      <title>My Awesome Project</title>
      <link rel="stylesheet" href="capital-framework.min.css">
  </head>

  <body>
      <!-- Your project's HTML goes here. -->
      <script src="capital-framework.min.js"></script>
  </body>

  </html>

  ```
---

