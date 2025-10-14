---
layout: variation
section: foundation
status: Released
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <p>Source Sans 3 Regular, 16px / 22px at all browser widths. Lorem
          ipsum dolor sit amet, <em>consectetur adipisicing elit</em>, sed do

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


          #### Italicizing


          We don’t serve the font file for Source Sans 3 Italic because we found Source Sans 3 Regular with browser-created faux italics was an acceptable substitute, and it saves a lot of bytes not to serve it.


          #### Bolding


          We’re trying out Source Sans 3 Medium with faux bolding in place of Source Sans 3 Semi Bold, though the results of that experiment have been less predictable, so we may yet revert that decision.
        variation_specs: >-
          | **Paragraph text style** | **Font-weight** | **Font-size** |
          **Font-size-adjust*** | **Line-height** | **Responsive behavior at
          <601px** |

          | ------------------------ | --------------- | ------------- | --------------------- | --------------- | --------------------------------- |

          | Body text                | 400 (Regular)   | 16px          | 0.517                 | 22px            | No change                         |
      - variation_code_snippet: >-
          <p class="lead-paragraph">Source Sans 3 Regular, 22px / 28px on large
          screens and 18px / 22px on small screens. Ut enim ad minim veniam,
          quis nostrud exercitation

          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        variation_description: ""
        variation_name: Lead paragraph
        variation_specs: >-
          | **Paragraph text style**                      | **Font-weight** |
          **Font-size** | **Font-size-adjust*** | **Line-height** | **Responsive
          behavior at <601px** |

          | --------------------------------------------- | --------------- | ------------- | --------------------- | --------------- | --------------------------------- |

          | Lead style (also referred to as a subheading) | 400 (Regular)   | H3 (22px)     | 0.517                 | 27.5px          | Drops to H4                       |
    variation_group_name: Web paragraphs
  - variation_group_name: Print paragraphs
    variations:
      - variation_name: Body text
        variation_specs: >-
          | **Paragraph text style** | **Font weight** | **Font size** | **Line
          height** |

          | ------------------------ | --------------- | ------------- | --------------- |

          | Body text                | Regular         | 11pt          | 16pt            |
        variation_code_snippet: ""
        variation_description: Source Sans 3 Regular, 11pt / 16pt. Lorem ipsum dolor sit
          amet, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
      - variation_name: Subheading
        variation_specs: >-
          | **Paragraph text style** | **Font weight** | **Font size** | **Line
          height** |

          | ------------------------ | --------------- | ------------- | --------------- |

          | Subheading               | Regular         | 16pt          | 20pt            |
        variation_code_snippet: ""
        variation_description: >-
          

          <p style="font-size: 16pt; font-weight: 400; line-height:20pt">Source Sans 3 Regular, 16pt / 20pt. Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


          <br>
guidelines: Refer to the [Guidelines section of the Fonts
  page](https://cfpb.github.io/design-system/foundation/fonts#guidelines) for
  information about alignment, line height, line length, and spacing.
eyebrow: Typography
title: Paragraphs
description: Paragraph text should provide an efficient and pleasant experience
  on every viewport size. Readable text makes good use of alignment, spacing,
  line length and height, and contrast.
use_cases: ""
behavior: ""
accessibility: ""
related_items: |-
  * [Headings](https://cfpb.github.io/design-system/foundation/headings)
  * [Fonts](https://cfpb.github.io/design-system/foundation/fonts)
last_updated: 2020-01-06T20:28:04.952Z
research: ""
---
