---
title: Headings
layout: variation
section: components
secondary_section: Text
status: Released
description: >-
  Consistent scaling, weights, and capitalization are used to create distinction
  between heading levels.
variation_groups:
  - variations:
      - variation_code_snippet: |-
          <h1 class="superheading">Display heading</h1>
          <h1>Heading level 1</h1>
          <h2>Heading level 2</h2>
          <h3>Heading level 3</h3>
          <h4>Heading level 4</h4>
          <h5>Heading level 5</h5>
          <h6>Heading level 6</h6>

          <!--
          Example of a non heading element:
          <p class="h1">A non-heading element</p>
          -->
        variation_description: ''
        variation_jinja_code_snippet: ''
        variation_name: ''
        variation_specs: "| Heading | Specs | Responsive behavior at < 601px | \n| - | - | - |\n| Display | Avenir Next Regular, 48px / 60px\x03 | Drops to Heading 1 |\n| \rHeading 1 | Avenir Next Regular. 34px / 42px\x03 | <601px wide: Drops to Heading 2\r |\n| Heading 2 | Avenir Next Regular. 34px / 42px | Drops to Heading 3\r | \n\nElement | Variable name | Variable | web value | Print value\n--- | --- | --- | --- | ---\nTypeface | | | Avenir Next Regular | Avenir Next Regular\nWebfont | @webfont-regular: | Arial; | Arial\nText color | @text: | @black; | Black (#101820)\t| 0, 0, 0, 100\nText size | @size-xl: | 48px; | 48px | 38pt\nSmall screen text size | | | 34px | \nLine height | @base-line-height: | unit( @base-line-height-px / @base-font-size-px ); | \nLine height (pixels) | ? |  | 60px | 66pt\nSmall screen line height | | 42px | \nBottom margin | | | | 30px\nExtra-small breakpoint | @bp-xs-max: | 600px; |"
    variation_group_name: Web headings
    variation_group_description: >-
      At screen widths of 600px and below, the Display heading and Headings 1-4
      drop in size. Headings 5-6 remain consistent at all screen widths.
  - variation_group_name: Print headings
    variations:
      - variation_code_snippet: |-
          <h1 class="superheading">Display heading</h1>
          <h1>Heading level 1</h1>
          <h2>Heading level 2</h2>
          <h3>Heading level 3</h3>
          <h4>Heading level 4</h4>
          <h5>Heading level 5</h5>
          <h6>Heading level 6</h6>

          <!--
          Example of a non heading element:
          <p class="h1">A non-heading element</p>
          -->
  - variation_group_name: Variations
    variations:
      - variation_name: ' Heading with icon'
        variation_code_snippet: |-
          <a href="#" class="a-heading a-heading__icon">
              {% include icons/dialogue.svg %}
              Heading with icon
          </a>
        variation_description: ''
        variation_specs: >-
          Responsive heading. At small screen sizes, displays as heading level
          2.

          <601px wide: Drops to Heading 2


          Element | Variable name | Variable | web value | Print value

          --- | --- | --- | --- | ---

          Text size | @size-i: | 34px; | 34px | 38pt

          Small screen text size | | | 26px |

          Line height (pixels) | ? |  | 42px | 40pt

          Small screen line height | | 32px |

          Bottom margin | | | 15px |
      - variation_name: 'Heading with icon: Meta header'
        variation_description: >-
          This example of a heading with icon shows .m-meta-header_left using
          the .a-heading__icon pattern and .m-meta-header_right using the
          .a-date pattern but you could use other patterns in place of them. Or
          you can even swap them so that date is attached to .m-meta-header_left
          and .a-heading.a-heading__icon is attached to .m-meta-header_right.
        variation_code_snippet: |-
          <header class="m-meta-header">
              <div class="m-meta-header_right">
                  <span class="a-date">
                      Nov 4, 2013
                  </span>
              </div>
              <div class="m-meta-header_left">
                  <span class="u-visually-hidden">Categories: </span>
                  <a href="#" class="a-heading a-heading__icon">
                      {% include icons/credit-card.svg %}
                      Consumer finance
                  </a>
                  |
                  <a href="#" class="a-heading a-heading__icon">
                      {% include icons/bullhorn.svg %}
                      At the CFPB
                  </a>
              </div>
          </header>
      - variation_name: Eyebrow headings
        variation_description: >-
          Use the eyebrow heading to label page headings that are part of a
          larger group of related pages, or when additional context can help
          orient the user to the page's purpose.


          The eyebrow heading is secondary to and serves to support the main
          page heading. So it should be concise and shorter than the main page
          heading.
        variation_code_snippet: >
          <!--The code snippet below is only used for display purposes. The
          eyebrow heading should be built using div tags:   


          <div class ="eyebrow">


          The text will be styled the same as H5 heading text.

          -->


          <p class="h5">Eyebrow heading</p>

          <h1>Heading 1</h1>
      - variation_name: Slug heading
        variation_description: Use headers to lead content.
        variation_code_snippet: |-
          <header class="m-slug-header">
              <h2 class="a-heading">
                  Blog summary
              </h2>
          </header>
usage: "#### Content guidelines\n\n* Headings should be sentence case.\n* Do not include punctuation in headings.\n* Keep headings to one line on desktop when possible.\n\n#### Behavior\n\nAt screen widths of 600px and below, the Display heading and Headings 1-4 drop in size. Headings 5-6 remain consistent at all screen widths.\n\n#### Style\n\n##### Spacing\nWhen a heading is followed by paragraph text, include 30px of space below Display and 15px below Headings 1–6. \r\n\nWhen body copy is followed by a heading, include 45px of space above Heading 2 and 30px above Headings 3–6.\r\n\nFor stacked headings, include 30 px of space after the primary heading.\r\n\nFor multiple paragraphs within the same section set the space between paragraphs to 15px."
accessibility: >-
  Since categories can be repetitive, we suggest placing a label with
  `.u-visually-hidden` prior to the headings with icons to add more context for
  screen readers (see Meta Header).
last_updated: 2019-10-21T21:54:52.744Z
research: ''
---
