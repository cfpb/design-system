---
title: Paragraphs
layout: variation
section: components
secondary_section: Text
status: Released
description: >-
  This page is under active development. Information is being moved into it from
  these pages:


  * http://cfpb.github.io/design-manual/brand-guidelines/typography.html

  * https://cfpb.github.io/capital-framework/components/cf-core/#base-typography
variations:
  - variation_code_snippet: >-
      <p>Lorem ipsum dolor sit amet, <em>consectetur adipisicing elit</em>, sed
      do

      eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna
      aliqua.

      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut

      aliquip ex ea commodo consequat.</p>
    variation_description: >-
      Body text should provide an efficient and pleasant experience on every
      viewport size. Readable text makes good use of alignment, spacing, line
      length and height, and contrast.
    variation_name: Body text
    variation_specs: "Element | Variable name | Variable | web value | Print value\n--- | --- | --- | --- | ---\nTypeface | | | Avenir Next Regular | Avenir Next Regular\nWebfont | @webfont-regular: | Arial | Arial\nText color | @text: | @black; | Black (#101820)\t| 0, 0, 0, 100\nText size | @base-font-size-px | 16px | 16px | 11pt\nLine height (pixels) | @base-line-height-px: | 22px; | 22px | 16pt\nLine height | @base-line-height: | unit( @base-line-height-px / @base-font-size-px ); | \nBottom margin | | | 15px |\nExtra-small breakpoint | @bp-xs-max: | 600px; |"
  - variation_code_snippet: >-
      <p class="lead-paragraph">Ut enim ad minim veniam, quis nostrud
      exercitation

      ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    variation_description: >-
      Responsive text. Displays as a Heading 3 on large screens; displays at
      Heading 4 size (but still Regular weight) on small screens.

      <601px wide: 18px / 22px
    variation_name: Lead paragraph (subheading)
    variation_specs: |-
      Element | Variable name | Variable | web value | Print value
      --- | --- | --- | --- | ---
      Text size | ? |  | 22px | 16pt
      Small screen text size | | | 18px |
      Line height (pixels) | ? |  | 28px | 20pt
      Small screen line height | | 22px |
  - variation_code_snippet: |-
      <p class="a-micro-copy">
          Lorem ipsum dolor sit amet
      </p>
    variation_name: Microcopy
    variation_specs: "Element | Variable name | Variable | web value | Print value\n--- | --- | --- | --- | ---\nText color | @micro-copy | @black | Black (#101820)\t| 0, 0, 0, 100\nText size |  |  |  | \nLine height (pixels) |  |  |  | \nBottom margin | | | |"
usage: |-
  <h3>Use cases</h3>

  TBD

  <h3>Content guidelines</h3>

  TBD
accessibility: ''
research: ''
---

