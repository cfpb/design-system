---
title: Integrating the Design System into your project
layout: variation
section: getting-started
description: >-
  The Design System provides a set of modular HTML, CSS, and JavaScript patterns
  that can be used both collectively and individually. There are several ways to
  integrate it into your project:


  1. [Installing individual components with npm or Yarn](#installing-individual-components-with-yarn-or-npm)

  1. [Downloading the compiled CSS](#downloading-the-compiled-css)



  ## Installing individual components with Yarn or npm


  Just want one or two CF components and not the entire framework?

  Simply install and `@import` only the components you need.


  ### Install with Yarn or npm


  Pick one:


  ```

  yarn add cf-buttons cf-icons

  ```


  or


  ```

  npm install cf-buttons cf-icons

  ```


  ### Import Less


  ```less

  // adjust paths to the modules as necessary

  @import "node_modules/@cfpb/cfpb-buttons/src/cfpb-buttons.less";

  @import "node_modules/@cfpb/cfpb-icons/src/cfpb-icons.less";

  ```


  _Note:_ Be sure to run the Less files through

  [Autoprefixer](https://github.com/postcss/autoprefixer),

  or your compiled CSS might not work perfectly in older browsers.


  ### Import JavaScript


  ```js

  import Expandable from '@cfpb/cfpb-expandables/src/Expandable';


  // initialize all expandables with class .o-expandable

  // if they are within an element with id #container

  Expandable.init( document.querySelector( '#container' ) );

  ```



  ## Downloading the compiled CSS and JavaScript


  While we recommend the above installation method to make future updates smaller and safer by allowing you to update one component at a time, there may be some use cases where it's more appropriate to just grab a snapshot of the full Design System's compiled CSS and JavaScript and drop it into a page. <a class="cf-download" href="https://npmcdn.com/@cfpb/cfpb-design-system/">You can download the compiled Design System CSS and JavaScript from UNPKG.</a>


  Download the `cfpb-design-system.css` and `cfpb-design-system.js` files to your project and use standard `<link>` and `<script>` tags to include them. For example:


  ```html

  <!DOCTYPE html>

  <html>

  <head>
      <title>My Awesome Project</title>
      <link rel="stylesheet" href="css/cfpb-design-system.css">
      <link rel="stylesheet" href="css/your-project-styles.css">
  </head>

  <body>
      <!-- Your project's HTML goes here. -->
      <script src="js/cfpb-design-system.js"></script>
      <script src="js/your-project-scripts.js></script>
  </body>

  </html>

  ```
last_updated: 2019-09-13T13:48:42.692Z
---
