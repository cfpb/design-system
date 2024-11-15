---
title: Variables
layout: variation
section: development
eyebrow: Utilities
status: Proposed
description: >
  Variables are either processed at build-time by the Sass compiler, if they are
  Sass variables, or at run-time by the browser,
  if they are CSS custom variables (CSS custom properties).


  The Sass variables appear as a `@key:value` format and are generally used to
  theme a component. CSS custom properties appear as a `--key: value` format.

variation_groups:
  - variation_group_name: Typography
    variations:
      - variation_name: Color and Font custom props
        variation_description: |-
          There is a Sass mixin for defining the CSS custom variables
          (CSS custom properties) used in the project. This should be used and
          included once in your project's CSS entry-point file.


          ```scss
          @use '@cfpb/cfpb-design-system/src/abstracts' as *;
          @include define-custom-props;
          ```
      - variation_name: Font stack
        variation_description: |-
          Override this variable in order to specify a font stack other than the
          CFPB's default brand font and fallback.


          ```css
          :root {
            --font-stack: 'Avenir Next', Arial, sans-serif;
          }
          ```
      - variation_name: Font source
        variation_description: |-
          There is a Sass mixin for specifying the path to the woff and woff2 font files for the CFPB default brand font, Avenir Next.
          Pass in the path to the files. The path can be either a relative or absolute path.


          ```scss
          @include licensed-font('/path/to/fonts/woff/files');
          ```
---
