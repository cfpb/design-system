---
title: Integrating the Design System into your project
layout: variation
section: development
description: |-
  The Design System provides a set of modular HTML, CSS, and JavaScript patterns
  that can be used both collectively and individually. There are several ways to
  integrate it into your project:

  1. [Build pre-requisites](#build-pre-requisites)

  1. [Installing components in your project](#installing-components-in-your-project)

  2. [Downloading the compiled CSS and JavaScript](#downloading-the-compiled-css-and-javascript)


  ## Build pre-requisites

  1. **SCSS**. Your project will need a way of building `.scss` files. The Design System uses
  [esbuild](https://esbuild.github.io/) for this task.

  2. **Embedding SVG icons**. There are some instances where SVG icons are embedded in the CSS.
  The Design System uses a special CSS custom property, `--cfpb-background-icon-svg`, which gets swapped out with an SVG file from the
  [SVG icons directory](https://github.com/cfpb/design-system/tree/main/packages/cfpb-design-system/src/components/cfpb-icons/icons). Your build will need to
  perform that swap, if you are using the source SCSS files and include
  components that have embedded icons (the drop-down selects, for example).
  A esbuild script for processing the icons can be [found in the Design System project](https://github.com/cfpb/design-system/blob/main/esbuild/plugins/postcss-process-icons.js).

  ## Installing components in your project

  The Design System is distributed via the npm `@cfpb/cfpb-design-system`
  package, which you can install via `yarn` or `npm`.


  Pick one:


  ```bash

  yarn add @cfpb/cfpb-design-system

  ```


  or


  ```bash

  npm install @cfpb/cfpb-design-system

  ```


  ### Folder structure

  The folder architecture loosely follows the [Sass opinionated style guide](https://sass-guidelin.es/#architecture), which breaks it down into:

    - **abstracts** - definition files for variables and global mixins.
    - **base** - CSS base styling.
    - **components** - Specific component packages.
    - **utilities** - Global utilities shared across components.

  Additionally, the project has a root directory `index.scss` and `index.js`
  file, which point to the other directory sources.


  ### Import CSS

  After installing the Design System via `yarn` or `npm`, you'll be able to
  import the CSS into your project. This should happen in your main CSS entry-point file.

  ```scss
  // Adjust paths to the package as necessary.

  @use 'node_modules/@cfpb/cfpb-design-system/src/abstracts' as *;
  @use 'node_modules/@cfpb/cfpb-design-system/src/base' as *;
  @use 'node_modules/@cfpb/cfpb-design-system/dist/index.css' as *;
  ```

  ### Define custom properties

  Next you'll want to define the custom CSS properties (variables) that set the
  colors and font stack.

  ```scss
  @include define-custom-props;
  ```

  ### Set official font stack

  If the project has access to Avenir Next `.woff` files, you'll include a mixin
  to point to those woff files and create the Avenir Next `@font-face` rules.

  ```scss
  // This is the path for self-hosted fonts.
  @include licensed-font('/path/to/the/font/woff/files');
  ```


  ### Resolve references

  Any file that references Design System variables or mixins, needs to import
  a reference to where those references are defined. Most often this will mean
  repeating an import of the abstracts directory in your `.scss` files.

  ```scss
  @use 'node_modules/@cfpb/cfpb-design-system/src/abstracts' as *;
  ```

  Although discouraged, occasionally you may reference a variable that appears within a component itself, in which case you need to reference that components SCSS, such as:

  ```scss
  @use 'node_modules/@cfpb/cfpb-design-system/src/components/cfpb-buttons/button-link' as *;
  ```

  ### Import JavaScript


  ```js

  import { Expandable } from '@cfpb/cfpb-design-system';


  // initialize all expandables with class .o-expandable

  // if they are within an element with id #container

  Expandable.init( document.querySelector( '#container' ) );

  ```


  ## Downloading the compiled CSS and JavaScript


  While we recommend the above installation method to make future updates smaller and safer by allowing you to update one component at a time, there may be some use cases where it's more appropriate to just grab a snapshot of the full Design System's compiled CSS and JavaScript and drop it into a page. <a class="cf-download" href="https://unpkg.com/@cfpb/cfpb-design-system/">You can download the compiled Design System CSS and JavaScript from UNPKG.</a>


  Download the `@cfpb/cfpb-design-system/dist/index.css` and `@cfpb/cfpb-design-system/dist/index.js` files to your project and use standard `<link>` and `<script>` tags to include them. For example:


  ```html

  <!DOCTYPE html>

  <html>

  <head>
      <title>My Awesome Project</title>
      <link rel="stylesheet" href="css/cfpb-design-system/dist/index.css">
      <link rel="stylesheet" href="css/your-project-styles.css">
  </head>

  <body>
      <!-- Your project's HTML goes here. -->
      <script src="js/cfpb-design-system/dist/index.js"></script>
      <script src="js/your-project-scripts.js"></script>
  </body>

  </html>

  ```
last_updated: 2019-09-13T13:48:42.692Z
---
