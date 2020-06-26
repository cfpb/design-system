---
title: Paragraphs
layout: variation
section: foundation
status: Released
description: Paragraph text should provide an efficient and pleasant experience
  on every viewport size. Readable text makes good use of alignment, spacing,
  line length and height, and contrast.
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <p>Lorem ipsum dolor sit amet, <em>consectetur adipisicing elit</em>,
          sed do

          eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna aliqua.

          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut

          aliquip ex ea commodo consequat.</p>
        variation_description: ""
        variation_name: Body text
        variation_implementation: >-
          #### Vertical spacing


          * Applies 15px bottom margin to all `p`, `ul`, `ol`, `dl`, `figure`, `table`, and `blockquote` elements.

          * Applies -5px top `margin` to lists following paragraphs to reduce `margin between them to 10px.

          * Applies 8px bottom `margin` to list items that are not within a nav element.

          * Assumes that the font size of each of these items remains the default.


          ### Italicizing


          `@webfont-italic: @webfont-regular;`


          We don’t serve the font file for Avenir Next Italic because we found Avenir Next Regular with browser-created faux italics was an acceptable substitute, and it saves a lot of bytes not to serve it.




          ### Bolding


          `@webfont-demi: @webfont-medium;`


          We’re trying out Avenir Next Medium with faux bolding in place of Avenir Next Demi, though the results of that experiment have been less predictable, so we may yet revert that decision.
        variation_specs: |-
          * Avenir Next Regular
          * 16px / 22px at all browser widths
      - variation_code_snippet: >-
          <p class="lead-paragraph">Ut enim ad minim veniam, quis nostrud
          exercitation

          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        variation_description: ""
        variation_name: Lead paragraph
        variation_specs: >-
          * Also referred to as a subheading

          * Avenir Next Regular

          * Text is responsive. Displays as a Heading 3 (22px / 28px) on large screens (>601px wide). Displays at Heading 4 (18px / 22px but still Regular weight) on small screens (<601px wide).
      - variation_code_snippet: |-
          <p class="a-micro-copy">
              Lorem ipsum dolor sit amet
          </p>
        variation_name: Microcopy
        variation_implementation: ""
        variation_specs: |-
          * Good for highlighting small pieces of text, typically legal copy.
          * Avenir Next Regular
          * 14px at all browser widths
    variation_group_name: Web paragraphs
  - variation_group_name: Print paragraphs
    variations:
      - variation_name: Body text
        variation_specs: |-
          * Avenir Next Regular
          * 11pt / 16pt
        variation_code_snippet: <p class="print-avenir-para">Lorem ipsum</p>
      - variation_name: Subheading
        variation_specs: |-
          * Avenir Next Regular
          * 16pt / 20pt
        variation_code_snippet: <p class="print-subheading">Lorem ipsum</p>
use_cases: ""
content_guidelines: ""
behavior: ""
accessibility: ""
research: ""
related_items: "* [Typography
  variables](https://cfpb.github.io/design-system/development/variables#typogra\
  phy)"
last_updated: 2020-01-06T20:28:04.952Z
secondary_section: Text
---
