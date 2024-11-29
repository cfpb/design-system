---
layout: variation
section: foundation
status: Released
variation_groups:
  - variations:
      - variation_code_snippet: |-
          <h1 class="superheading">Display</h1>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>

          <!--
          Example of a non heading element:
          <p class="h1">A non-heading element</p>
          -->
        variation_description: ''
        variation_jinja_code_snippet: ''
        variation_name: ''
        variation_specs: "| Heading   |
          Specs                                                            |
          Responsive behavior at < 601px |

          | --------- |
          ---------------------------------------------------------------- |
          ------------------------------ |

          | Display   | Avenir Next Regular, 48px /
          60px\x03                                | Drops to Heading
          1             |

          | Heading 1 | Avenir Next Demi Bold, 34px /
          42px\x03                              | Drops to Heading
          2             |

          | Heading 2 | Avenir Next Demi Bold, 26px /
          32px                               | Drops to Heading 3             |

          | Heading 3 | Avenir Next Regular, 22px /
          28px                                 | Drops to Heading
          4             |

          | Heading 4 | Avenir Next Medium, 18px /
          22px                                  | Drops to 16px /
          18px           |

          | Heading 5 | Avenir Next Demi Bold, 14px / 18px, All caps,
          1px letter spacing | No change                      |"
    variation_group_name: Web headings
    variation_group_description:
      At screen widths of 600px and below, the Display
      heading and Headings 1-4 drop in size. Heading 5 remains consistent at all
      screen widths.
  - variation_group_name: Print headings
    variations:
      - variation_code_snippet: >-
          <h1 style="font-size:60pt; font-weight:500;
          line-height:66pt">Display</h1>

          <h1 style="font-size:38pt; font-weight:400; line-height:40pt">Heading 1</h1>

          <h2 style="font-size:26pt; font-weight:400; line-height:28pt">Heading 2</h2>

          <h3 style="font-size: 16pt; font-weight:600; line-height: 18pt">Heading 3</h3>

          <h4 style=font-size:14pt; font-weight:500; line-height:16pt">Heading 4</h4>

          <h5 style="font-size:10pt; font-weight:600;line-height:12pt">Heading 5</h5>

          <p style="font-size: 12pt; font-weight: 500; line-height:14pt">Heading 6</p>
        variation_name: ''
        variation_description: ''
        variation_specs: |-
          | Heading   | Specs                                        |
          | --------- | -------------------------------------------- |
          | Display   | Avenir Next Medium, 60pt / 66pt              |
          | Heading 1 | Avenir Next Regular, 38pt / 40pt             |
          | Heading 2 | Avenir Next Regular, 26pt / 28pt
          |
          | Heading 3 | Avenir Next Demi Bold, 16pt / 18pt           |
          | Heading 4 | Avenir Next Medium, 14pt / 16pt              |
          | Heading 5 | Avenir Next Demi Bold, 10pt / 12pt, all caps |
          | Heading 6 | Avenir Next Medium, 12pt /14 pt              |
    variation_group_description: >+
      This hierarchy should serve as a basis for 8.5 x 11” documents, but
      appropriate scaling should be explored for content of larger or smaller
      dimensions.

  - variation_group_name: Variations
    variations:
      - variation_name: Meta header
        variation_description:
          The meta header is typically used for listing categories
          on pages like the [blog
          page](https://www.consumerfinance.gov/about-us/blog/).
        variation_code_snippet: >-
          <div class="m-meta-header">
              <div class="m-meta-header__item-group">
                <div class="m-meta-header__item">
                    {% include icons/chart.svg %}
                    Office of Research Publication
                </div>
                <div class="m-meta-header__item">
                    {% include icons/bank.svg %}
                    Policy and compliance
                </div>
              </div>
              <div class="m-meta-header__item">
                  <span class="a-date">
                      Published
                      <span class="datetime">
                        <time datetime="2024-09-28T00:00:00">SEP 28, 2024</time>
                      </span>
                  </span>
              </div>
          </div>
        variation_implementation: null
        variation_specs: >-
          * Avenir Next Medium, 18px

          * View a [list of icons](https://cfpb.github.io/design-system/foundation/iconography). Icon height is constrained to 19px.
      - variation_name: Eyebrow heading
        variation_description: >-
          The eyebrow heading is an additional label that can be used to support
          the main H1 heading on a page, provide additional context, or
          orientation when necessary. Use the eyebrow heading to label page
          headings that are part of a larger group of related pages, or when
          additional context can help orient the user to the page’s purpose.


          The eyebrow heading is secondary to and serves to support the main page heading. So it should be concise and shorter than the main page heading.


          An example of the eyebrow heading can be found on the [Buying a House journey pages](https://www.consumerfinance.gov/owning-a-home/process/prepare/).
        variation_code_snippet: |
          <div class="h5">eyebrow heading</div> <div class="h1">Heading 1</div>
        variation_specs: |-
          * Avenir Next Demi Bold
          * 14px / 18px, 1px letter spacing
          * All caps
          * <601px wide: No change
      - variation_name: Slug heading
        variation_description:
          Slug headings are used to call attention to and lead
          content on sidebars and prefooters, inset modules, and inset email
          modules.
        variation_code_snippet: |-
          <header class="m-slug-header">
              <h2 class="m-slug-header__heading">
                  Slug heading
              </h2>
          </header>
        variation_specs: >-
          * Slug title: H5


          * 5px thick CFPB Green top border that spans the length of the title


          * 1px thick Gray 50 top border that spans the width of the module or column
    variation_group_description: The heading variations below have specific use cases.
guidelines: >-
  ### Content


  * Headings should be sentence case.

  * Do not include punctuation in headings.

  * Keep headings to one line on desktop when possible.


  ### Spacing


  Refer to the [Guidelines section of the Fonts page](https://cfpb.github.io/design-system/foundation/fonts#guidelines) for information about heading spacing.
eyebrow: Typography
title: Headings
description: A successful type hierarchy establishes the order of importance of
  elements on a page. Consistent scaling, weights, and capitalization are used
  to create distinction between heading levels and provide users with  familiar
  focus points when scanning text.
use_cases: ''
behavior: ''
accessibility: Since categories can be repetitive, we suggest placing a label
  with `@include u-visually-hidden` prior to the headings with icons to add more context
  for screen readers.
related_items: >-
  * [Paragraphs](https://cfpb.github.io/design-system/foundation/paragraphs)

  * [Fonts](https://cfpb.github.io/design-system/foundation/fonts)
last_updated: 2019-10-21T21:54:52.744Z
research: ''
---
