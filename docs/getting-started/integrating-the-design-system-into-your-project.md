---
title: Integrating the Design System into your project
layout: variation
section: getting-started
description: >

  The Design System provides a set of modular HTML, CSS, and JavaScript patterns
  that can be used both collectively and individually. There are several ways to
  integrate it into your project:


  1. [Installing a single component with npm or
  yarn](#installing-a-single-component-with-npm-or-yarn)

  1. [Using the generator](#using-the-generator)

  1. [Using Less](#using-less)

  1. [Downloading the compiled CSS](#downloading-the-compiled-css)


  Our recommended workflow if you are starting a new codebase is to use the
  generator to scaffold out a new Design System project. This allows you to pick
  and choose your modules as well as providing a solid front end build process.


  ## Installing a single component with npm or yarn


  Just want one or two CF components and not the entire framework?

  Simply install and `@import` only the components you need.


  ### Install with yarn or npm

  Pick one:

  ```sh

  yarn add cf-buttons cf-icons

  ```

  or

  ```sh

  npm install cf-buttons cf-icons

  ```


  ### Import CSS

  ```css

  @import (less) "node_modules/cf-buttons/src/cf-buttons.less";

  @import (less) "node_modules/cf-icons/src/cf-icons.less";


  /* the rest of your stylesheet… */

  ```


  > NOTE: Be sure to run the Less files through
    [Autoprefixer](https://github.com/postcss/autoprefixer),
    or your compiled CSS might not work perfectly in older browsers.

  ### Import JavaScript

  ```js

  import Expandable from '@cfpb/expandables/src/Expandable'';


  Expandable.init( document.querySelector( '#container' ) );

  ```



  ## Using the generator


  To use the generator, you will need [Node.js](http://nodejs.org/),

  [Yeoman](http://yeoman.io/), and [Gulp](http://gulpjs.com/).


  ### Installing dependencies


  [Node.js](http://nodejs.org/) can be downloaded and installed directly from
  the Node website, or by using a package manager for your system. At the CFPB
  we use Homebrew. To install the dependencies:


  ```sh

  brew install node  # if installing node with Homebrew

  npm install --global gulp yo generator-cf

  ```


  ### Scaffolding out a project


  To create a new project, create a directory, cd into that directory, and run
  the `yo cf` command:


  ```sh

  mkdir my-awesome-project

  cd my-awesome-project

  yo cf

  ```


  The generator will prompt you to complete information about the project and
  choose the Design System modules you would like to use.


  ### Navigating the project folder


  Once the generator has finished you'll have a folder full of files and
  folders.

  Here's a quick guide on working with these files:


  - Run `npm run build` to process the files in `src` and output them to `dist`.

  - To view your site, go to the dist directory and start a local server: `cd
  dist && python -m SimpleHTTPServer`. You can now navigate to `localhost:8000`
  in your web browser.

  - Edit files within the `src` directory and re-run `npm run build` to view
  changes.


  #### Editing the Less and JS


  The generator has created a starter Less file at `src/static/css/main.less`.

  This file includes all of the necessary imports needed for Capital Framework.

  There is also a starter JavaScript file at `src/static/js/main.js`.

  Both `main.less` and `main.js` are already wired into `Gruntfile.js` (or
  `gulp/tasks/`

  if you selected gulp) so compiling is as easy as running `npm run build`. It
  also

  copies files from `src` into `dist`, which will update what you see at
  `localhost:8000/`.


  ### Theming / Customizing


  You can override component UI colors within
  `src/static/css/cf-theme-overrides.less`.

  This is already set up for you and gets imported by `main.less`.

  If you would like to use your own color palette simply replace the contents of

  `brand-palette.less` with your own color variables,

  then update `cf-theme-overrides.less` by overriding each UI color variable

  with a color from `brand-palette.less` or any color of your choosing.


  The same applies when you need to add custom styles to your project.

  You can add any custom `.less` files to your project that you may need,

  just remember to import them in `main.less` using the correct path.


  ## Using Less


  If you don't want to use the generator,

  you can just download the source files and import them into your project.


  > NOTE: Be sure to run the Less files through
    [Autoprefixer](https://github.com/postcss/autoprefixer),
    or your compiled CSS will
    not work perfectly in older browsers.

  Run `npm install capital-framework`. This will download Capital Framework to
  your

  project's `node_modules` directory. You can then import the framework into

  your application's primary Less file:


  ```css

  @import (less) "node_modules/capital-framework/src/capital-framework.less";


  /* the rest of your stylesheet… */

  ```


  Just want one or two CF components and not the entire framework?

  Simply install and `@import` only the components you need.


  ```sh

  npm install cf-buttons cf-icons

  ```


  ```css

  @import (less) "node_modules/cf-buttons/src/cf-buttons.less";

  @import (less) "node_modules/cf-icons/src/cf-icons.less";


  /* the rest of your stylesheet… */

  ```


  ## Downloading the compiled CSS


  Capital Framework's compiled CSS can be <a class="cf-download"
  href="https://npmcdn.com/capital-framework/dist/">downloaded here</a>.

  Download it and copy the files found in the `dist/` directory to your project.

  Use standard `<link>` and `<script>` tags.


  ```html

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
last_updated: 2019-09-13T13:48:42.692Z
---

