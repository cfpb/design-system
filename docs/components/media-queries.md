---
title: Media queries
layout: variation
section: components
secondary_section: Core development
status: Proposed
description: >-
  Mixins for consistent media queries that take `px` values and convert them to
  ems.


  #### Respond to min and max width mixins

  These mixins take a px value breakpoint and set of style rules and converts
  them to the corresponding min or max width media query.


  ```

  .respond-to-min(@bp, @rules);


  .respond-to-max(@bp, @rules);

  ```

  Ex.

  ```

  .respond-to-min( @bp-sm-min, {
      .title {
          font-size: 2em;
      }
  } );


  // Compiles to


  @media only all and (min-width: 37.5625em) {
      .title {
          font-size: 2em;
      }
  }

  ```

  #### Respond to range mixin

  This mixin takes both min and max px values and a set of style rules and
  converts them to the corresponding min and max media query.

  ```

  .respond-to-range(@bp1, @bp2, @rules);

  ```

  Ex.

  ```

  .respond-to-range( @bp-sm-min, @bp-sm-max, {
      .title {
          font-size: 2em;
      }
  } );


  // Compiles to


  @media only all and (min-width: 37.5625em) and (max-width: 56.25em) {
      .title {
          font-size: 2em;
      }
  }

  ```

  #### Respond to dpi mixin

  This mixin allows us to easily write styles that target high-resolution
  screens, such as Apple retina screens

  ```

  // The following LESS...

  .example {
      background: url(regular-resolution-image.png);
      .respond-to-dpi(2, {
          background-image: url(retina-image.png);
      });
  }


  // ...Exports to

  .example {
      background: url(regular-resolution-image.png);
  }

  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      .example {
          background-image: url(retina-image.png);
      }
  }

  ```

  #### Respond to print mixin

  This mixin allows us to easily write styles that target both @media print and
  .print.

  ```

  // The following LESS...

  .example {
      color: @gray;
      .respond-to-print({
          color: @black;
      });
  }


  // ...Exports to

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

  Information about Media Queries can be found at:


  https://cfpb.github.io/capital-framework/components/cf-core/#media-queries
variations: []
usage: ''
accessibility: ''
research: ''
---
