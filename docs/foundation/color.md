---
title: Color
layout: variation
section: foundation
secondary_section: Identity
status: Proposed
description: >-
  A minimal palette, clear hierarchy, and ample whitespace ensure a voice of
  authority and expertise in communication.


  The following sets of colors maintain CFPB brand cohesion and create
  accessible graphics.


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
  When used properly, color can help clarify relationships between data, provide
  emphasis for certain data points, and maintain a consistent brand voice. When
  used poorly, color can overwhelm the user, make the data confusing and break
  with brand standards to appear inconsistent.


  * To highlight part of a set of data, or show that things are related, use a
  tint or a shade of the main color.

  * Use categorical color schemes when you’re visualizing groups of things.
  These are discrete colors that do not imply an visual relationship between the
  sets of data.

  * When you’re displaying sequential data that shows a range of data in a
  ranked order, use these sequential colors to imply the relationship.


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
accessibility: >-
  Color should never be solely relied on to convey meaning in a visualization
  because of accessibility standards for people who are blind and visually
  impaired. There should be other clues beyond color to convey meaning or
  relationship; this is a key reason that also directly labeling data and using
  patterns is important.


  You can use the [Color Palette Accessibility
  Checker](https://accessibility.oit.ncsu.edu/tools/color-contrast/accessible-color-palette.php?&colors=1e9642,20aa3f,66c368,addc91,c7e5b3,e2efd8,005e5d,257675,579695,89b6b5,b4d2d1,d4e7e6,0050b4,0072ce,4497dc,7eb7e8,afd2f2,d6e8fa,002d72,254b87,5674a3,889cc0,b3c0d9,d3daeb,a01b68,b4267a,c55998,d486b2,e3b2cc,f0d8e2,b63014,d14124,dd735d,e79e8e,f0c3b8,f7e0d9,dc731c,ff9e1b,ffb858,ffce8d,ffe1b9,fff0dd,745745,8a6c57,a18573,baa496,d3c5bc,e7ddd7,101820,43484e,5a5d61,75787b,919395,b4b5b6,d2d3d5,e7e8e9,f7f8f9,ffffff&main=ffffff&level=AA)
  to check and confirm the accessibility of CFPB colors at different type sizes.


  #### Color blindness


  When choosing colors for a graph, keep in mind that they may look different to
  people with color blindness. About [1 in 12 men with Northern European
  ancestry have green/red color
  blindness](https://nei.nih.gov/health/color_blindness/facts_about).


  Instead of green/red, the teal/red color combination should used instead for
  pro/con, yes/no, positive/negative relationships. This both improves
  accessibility associated with color blindness, and also leaves the CFPB green
  color to represent the brand.


  * Do not use color as the only means of conveying information, indicating an
  action, prompting a response, or distinguishing a visual element.

  * Text should have a contrast ratio of at least 4.5 : 1, but there are
  exceptions.
    * For large text, a contrast ratio of only 3 : 1 is necessary. Large regular text is at least 18pt/24px, while large bold text is 14pt/18px.
    * Text or images of text that are either pure decoration or not visible, or are part of a logo, picture that contains significant other visual content, or inactive UI components (like disabled form controls) do not have a color contrast requirement.

  The [Colour Contrast
  Check](http://www.snook.ca/technical/colour_contrast/colour.html) is a nice
  tool for testing color contrast ratios.
---

