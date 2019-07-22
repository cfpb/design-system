---
title: Color
permalink: /foundation/color
layout: component
collection_name: components
section: components
status: Proposed
intro: >-
  A minimal palette, clear hierarchy, and ample whitespace ensure a voice of
  authority and expertise in communication.


  This page is under active development. Information is being moved into it from
  these pages:


  * http://cfpb.github.io/design-manual/brand-guidelines/color-principles.html

  * http://cfpb.github.io/design-manual/data-visualization/color.html
variations:
  - variation_code_snippet: ' '
    variation_description: >-
      Our core brand color is CFPB Green. Green 60 and Green 20 play a
      supporting role in basic branded pieces. Black is typically used for type
      and icons while grays are used for wells and accents, such as rules and
      borders.
    variation_name: Primary palette
  - variation_code_snippet: ' '
    variation_description: >-
      The secondary color palette introduces visual variety. Colors were
      selected to hold together as a family and coordinate with CFPB Green.
    variation_name: Secondary colors
  - variation_code_snippet: ' '
    variation_description: >-
      Tints expand upon the primary and secondary color palettes to help create
      visual cohesion when incorporating complex illustrations and data
      visualizations.
    variation_name: Tints
  - variation_code_snippet: ' '
    variation_name: Data visualization cool palette
  - variation_code_snippet: ' '
    variation_name: Data visualization warm palette
  - variation_code_snippet: ' '
    variation_name: Data visualization divergent palette
usage: >-


  To update the color palette within the Design Manual:


  1. Update the values within the CFPB Brand Colors CSV file

  2. From terminal within this repo run npm run colors, this will auto-generate
  a new brand-palette.less file

  3. Run grunt build (you may need the -f flag because of linting issues)

  4. Run npm start and check
  /design-manual/brand-guidelines/color-principles.html locally

  5. Commit the changes and open a PR.


  Once the PR is merged, the Less file needs to be duplicated in Capital
  Framework CF Core and follow that project’s release process.
---

