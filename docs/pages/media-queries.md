---
title: Media queries
layout: variation
section: development
eyebrow: Utilities
status: Released
description: Mixins for consistent media queries that take `px` values and
  convert them to ems.
variation_groups:
  - variation_group_description: >-
      These mixins take a px value breakpoint and set of style rules and
      converts them to the corresponding min or max width media query.


      ```scss

      @include respond-to-min(vars-breakpoints.@bp) {
          @rules
      }


      @include respond-to-max(vars-breakpoints.@bp) {
          @rules
      }

      ```

      For example…

      ```scss

      // Tablet and above.

      @include respond-to-min(vars-breakpoints.@bp-sm-min) {
          .title {
              font-size: 2em;
          }
      }

      ```

      …compiles to…

      ```css

      @media only all and (min-width: 37.5625em) {
          .title {
              font-size: 2em;
          }
      }

      ```
    variation_group_name: Min and max width
  - variation_group_description: >-
      This mixin takes both min and max px values and a set of style rules and
      converts them to the corresponding min and max media query.


      ```scss

      @include respond-to-range(@bp1, @bp2) {
        @rules
      }

      ```


      For example…


      ```scss

      // Tablet only.

      @include respond-to-range(@bp-sm-min, @bp-sm-max) {
          .title {
              font-size: 2em;
          }
      }

      ```


      …compiles to…


      ```css

      @media only all and (min-width: 37.5625em) and (max-width: 56.25em) {
          .title {
              font-size: 2em;
          }
      }

      ```
    variation_group_name: Range
  - variation_group_name: Print
    variation_group_description: >-

      This mixin allows us to easily write styles that target both `@media print` and `.print`.


      The following SCSS…

      ```scss

      .example {
          color: var(--gray);
          @include respond-to-print() {
              color: var(--black);
          }
      }

      ```

      …compiles to…

      ```css

      .example {
          color: #75787B;
      }

      @media print {
          .example {
              color: #101820;
          }
      }

      .print .example {
          color: #101820;
      }

      ```
use_cases: ''
guidelines: ''
behavior: ''
accessibility: ''
last_updated: 2020-01-28T15:55:47.394Z
research: ''
---
