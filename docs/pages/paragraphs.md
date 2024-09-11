---
layout: variation
section: foundation
status: Released
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <p>Avenir Next Regular, 16px / 22px at all browser widths. Lorem ipsum
          dolor sit amet, <em>consectetur adipisicing elit</em>, sed do

          eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna aliqua.

          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut

          aliquip ex ea commodo consequat.</p>
        variation_description: ''
        variation_name: Body text
        variation_implementation: >-
          #### Vertical spacing


          * Applies 15px bottom margin to all `p`, `ul`, `ol`, `dl`, `figure`, `table`, and `blockquote` elements.

          * Applies -5px top `margin` to lists following paragraphs to reduce `margin between them to 10px.

          * Applies 8px bottom `margin` to list items that are not within a nav element.

          * Assumes that the font size of each of these items remains the default.


          #### Italicizing


          We don’t serve the font file for Avenir Next Italic because we found Avenir Next Regular with browser-created faux italics was an acceptable substitute, and it saves a lot of bytes not to serve it.


          #### Bolding


          We’re trying out Avenir Next Medium with faux bolding in place of Avenir Next Demi, though the results of that experiment have been less predictable, so we may yet revert that decision.
        variation_specs: |-
          * Avenir Next Regular
          * 16px / 22px at all browser widths
      - variation_code_snippet: >-
          <p class="lead-paragraph">Avenir Next Regular, 22px / 28px on large
          screens and 18px / 22px on small screens. Ut enim ad minim veniam,
          quis nostrud exercitation

          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        variation_description: ''
        variation_name: Lead paragraph
        variation_specs: >-
          * Also referred to as a subheading

          * Avenir Next Regular

          * Text is responsive. Displays as a Heading 3 (22px / 28px) on large screens (>601px wide). Displays at Heading 4 (18px / 22px but still Regular weight) on small screens (<601px wide).
    variation_group_name: Web paragraphs
  - variation_group_name: Print paragraphs
    variations:
      - variation_name: Body text
        variation_specs: |-
          * Avenir Next Regular
          * 11pt / 16pt
        variation_code_snippet: ''
        variation_description: >-
          <p style="font-size: 11pt; font-weight: 400; line-height:16pt">Avenir
          Next Regular, 11pt / 16pt. Lorem ipsum dolor sit amet, ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>


          <br>
      - variation_name: Subheading
        variation_specs: |-
          * Avenir Next Regular
          * 16pt / 20pt
        variation_code_snippet: ''
        variation_description: >-


          <p style="font-size: 16pt; font-weight: 400; line-height:20pt">Avenir Next Regular, 16pt / 20pt. Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


          <br>
guidelines: Refer to the [Guidelines section of the Fonts
  page](https://cfpb.github.io/design-system/foundation/fonts#guidelines) for
  information about alignment, line height, line length, and spacing.
eyebrow: Typography
title: Paragraphs
description: Paragraph text should provide an efficient and pleasant experience
  on every viewport size. Readable text makes good use of alignment, spacing,
  line length and height, and contrast.
use_cases: ''
behavior: ''
accessibility: ''
related_items: >-
  * [Headings](https://cfpb.github.io/design-system/foundation/headings)

  * [Fonts](https://cfpb.github.io/design-system/foundation/fonts)

last_updated: 2020-01-06T20:28:04.952Z
research: ''
---
