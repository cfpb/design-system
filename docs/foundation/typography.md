---
title: Typography
layout: variation
section: foundation
secondary_section: Brand guidelines
status: Released
description: A clear typographic hierarchy is critical to the effective
  communication of our brand. Type should be light and well-spaced to reinforce
  that we are transparent, open, and approachable. This system uses weight,
  scale, and capitalization to convey the relative importance of each heading
  within a document. Readability and accessibility allow all users to
  efficiently read and absorb textual information.
variation_groups:
  - variation_group_name: Typefaces
    variations:
      - variation_code_snippet: >-
          <h4 style="font-family:'AvenirNextLTW01-Medium';font-weight:
          600;letter-spacing: 1px;">Avenir Next Demi Bold<br><br>

          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>

          abcdefghijklmnopqrstuvwxyz<br>

          0123456789</p></h4>
        variation_name: " Avenir Next Demi Bold"
      - variation_code_snippet: >-
          <h4 style="font-family:'AvenirNextLTW01-Medium';font-weight:
          500;">Avenir Next Medium<br><br>

          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>

          abcdefghijklmnopqrstuvwxyz<br>

          0123456789</p></h4>
        variation_name: " Avenir Next Medium"
      - variation_code_snippet: >-
          <h4 style="font-family:'AvenirNextLTW01-Regular';">Avenir Next
          Regular<br><br>

          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>

          abcdefghijklmnopqrstuvwxyz<br>

          0123456789</p></h4>
        variation_name: "Avenir Next Regular "
    variation_group_description: Avenir Next is the primary brand typeface and can
      be used across all formats from print to digital. Its round and geometric
      letterforms are approachable and modern.
  - variation_group_name: Headings
    variations:
      - variation_name: Web headings
        variation_description: At screen widths of 600px and below, the Display heading
          and Headings 1-4 drop in size. Headings 5-6 remain consistent at all
          screen widths.
        variation_code_snippet: |-
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
        variation_specs: "| Heading   |
          Specs                                                             |
          Responsive behavior at < 601px |

          | --------- |
          ----------------------------------------------------------------- |
          ------------------------------ |

          | Display   | Avenir Next Regular, 48px /
          60px\x03                                 | Drops to Heading
          1             |

          | Heading 1 | Avenir Next Regular. 34px /
          42px\x03                                 | Drops to Heading
          2             |

          | Heading 2 | Avenir Next Regular. 34px /
          42px                                  | Drops to Heading
          3             |

          | Heading 3 | Avenir Next Regular, 22px /
          28px                                  | Drops to Heading
          4             |

          | Heading 4 | Avenir Next Medium, 18px /
          22px                                   | Drops to 16px /
          18px           |

          | Heading 5 | Avenir Next Demi Bold, 14px / 18px. All caps,
          1px letter spacing  | No change                      |

          | Heading 6 | Avenir Next Demi Bold, 12px / 15px. All caps,
          1px letter spacing  | No change                      |"
      - variation_name: Print headings
        variation_description: >+
          This hierarchy should serve as a basis for 8.5 x 11” documents, but
          appropriate scaling should be explored for content of larger or
          smaller dimensions.

        variation_code_snippet: >
          <h1 style="font-size:60pt; font-weight:500; line-height:66pt">Display
          heading</h1>

          <h1 style="font-size:38pt; font-weight:400; line-height:40pt">Heading level 1</h1>

          <h2 style="font-size:26pt; font-weight:400; line-height:28pt">Heading level 2</h2>

          <h3 style="font-size: 16pt; font-weight:600; line-height: 18pt">Heading level 3</h3>

          <h4 style=font-size:14pt; font-weight:500; line-height:16pt">Heading level 4</h4>

          <h5 style="font-size:10pt; font-weight:600;line-height:12pt">Heading level 5</h5>

          <p style="font-size: 12pt; font-weight: 500; line-height:14pt">Heading level 6</p>
        variation_specs: |-
          | Heading   | Specs                            |
          | --------- | -------------------------------- |
          | Display   | Avenir Next Medium, 60pt / 66pt  |
          | Heading 1 | Avenir Next Regular, 38pt / 40pt |
          | Heading 2 | Avenir Next Regular, 26pt / 28pt |
          | Heading 3 | Avenir Next Regular, 16pt / 18pt |
          | Heading 4 | Avenir Next Medium, 14pt / 16pt  |
          | Heading 5 | Avenir Next Demi Bold, 10pt / 12pt, All caps | 
          | Heading 6 | Avenir Next Medium, 12pt /14 pt |
      - variation_name: Heading with icon
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
      - variation_name: Eyebrow heading
        variation_description: >-
          Use the eyebrow heading to label page headings that are part of a
          larger group of related pages, or when additional context can help
          orient the user to the page’s purpose.


          The eyebrow heading is secondary to and serves to support the main page heading. So it should be concise and shorter than the main page heading. 


          An example of the eyebrow heading can be found on the [Buying a House journey pages](https://www.consumerfinance.gov/owning-a-home/process/prepare/).
        variation_implementation: This example of a heading with icon shows
          `.m-meta-header_left` using the `.a-heading__icon` pattern and
          `.m-meta-header_right` using the `.a-date` pattern. However, you could
          use other patterns in place of them, or even swap them so that date is
          attached to `.m-meta-header_left` and `.a-heading.a-heading__icon` is
          attached to `.m-meta-header_right`.
        variation_code_snippet: >
          <!--The code snippet below is only used for display purposes. The
          eyebrow heading should be built using div tags:


          <div class ="eyebrow">


          The text will be styled the same as H5 heading text.

          -->


          <h5>eyebrow heading</h5>

          <h1>Heading 1</h1>
      - variation_name: Slug heading
        variation_code_snippet: |-
          <header class="m-slug-header">
              <h2 class="a-heading">
                  Slug heading
              </h2>
          </header>
    variation_group_description: Consistent scaling, weights, and capitalization are
      used to create distinction between heading levels.
  - variation_group_name: Paragraphs
    variations:
      - variation_name: Body text
        variation_description: "Body text should provide an efficient and pleasant
          experience on every viewport size. Readable text makes good use of
          alignment, spacing, line length and height, and contrast. "
        variation_code_snippet: >-
          <p>This is a sample of body text. Lorem ipsum dolor sit amet,
          <em>consectetur adipisicing elit</em>, sed do

          eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna aliqua.

          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut

          aliquip ex ea commodo consequat.</p>
      - variation_name: Lead paragraph (subheading)
        variation_description: Lead paragraph text appears below the H1. Displays as a
          Heading 3 on large screens; at screen widths of 600px and
          below,  displays at Heading 4 size (but still Regular weight) on small
          screens.
        variation_code_snippet: >-
          <p class="lead-paragraph">Ut enim ad minim veniam, quis nostrud
          exercitation

          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        variation_specs: "<601px wide: 18px / 22px"
      - variation_name: Microcopy
        variation_code_snippet: |-
          <p class="a-micro-copy">
             Example of microcopy
          </p>
  - variation_group_name: Quotes
use_cases: ""
content_guidelines: >-
  Readable text allows users to efficiently read and take in textual
  information. Text that is not readable turns off readers or makes it
  challenging for them to stay focused. The following guidelines promote good
  readability.


  #### Alignment


  Typography should be set flush left. This provides the eye a constant starting point for each line, making text easier to read.


  ![](/design-system/images/uploads/typography_typesetting01_-2.png)


  #### Line height


  Ample space between lines of type promotes an open feeling and lends flow to body copy.


  When setting body copy, the leading should be 1.375 times the type size, or 37.5% larger.


  ![](/design-system/images/uploads/typography_typesetting03_-2.png)


  #### Line length


  Comfortable line length allows the user’s eyes to flow easily from the end of one line to the beginning of the next.


  For a single column of text, line length should be an average of 66 characters per line, including spaces, but may range from 50 to 75 characters.


  ![](/design-system/images/uploads/typography_typesetting04_-2.png)


  #### Spacing


  White space affects how the user focuses their attention on the content. It makes it easier to know what to read and where to begin. Spacing between typographic elements should be open enough to feel light, but close enough to establish a proper relationship between elements.


  ##### Heading followed by body copy

  When a heading is followed by paragraph text, include 30px of space below Display and 15px below Headings 1–6.


  ![](/design-system/images/uploads/typography_typesetting05_below-headings_-2.png)


  ##### Body copy followed by a heading

  When body copy is followed by a heading, include 45px of space above Heading 2 and 30px above Headings 3–6.


  ![](/design-system/images/uploads/typography_typesetting05_above-headings_-2.png)


  ##### Heading followed by a heading

  For stacked headings, include 30 px of space after the primary heading.


  ![](/design-system/images/uploads/typography_typesetting05_between-headings_-2.png)


  ##### Body copy spacing

  For multiple paragraphs within the same section set the space between paragraphs to 15px.


  ![](/design-system/images/uploads/typography_typesetting05_in-body_-2.png)
behavior: ""
accessibility: >-
  #### Text contrast


  WCA (Web Content Accessibility) standards ensure that content is accessible by everyone, regardless of any disability or user device.


  To ensure text remains compliant with [WCAG 2.0 standards](http://www.w3.org/TR/WCAG20/), use only these permitted color combinations. These options fall within the range of foreground/background color contrast permitted by the Section 508 guidelines.


  #### For more information:


  To learn more, refer to the [http://www.section508.gov](https://www.section508.gov/).


  [This color contrast tool](https://accessibility.oit.ncsu.edu/tools/color-contrast/accessible-color-palette.php?&colors=1e9642,20aa3f,66c368,addc91,c7e5b3,e2efd8,005e5d,257675,579695,89b6b5,b4d2d1,d4e7e6,0050b4,0072ce,4497dc,7eb7e8,afd2f2,d6e8fa,002d72,254b87,5674a3,889cc0,b3c0d9,d3daeb,a01b68,b4267a,c55998,d486b2,e3b2cc,f0d8e2,b63014,d14124,dd735d,e79e8e,f0c3b8,f7e0d9,dc731c,ff9e1b,ffb858,ffce8d,ffe1b9,fff0dd,745745,8a6c57,a18573,baa496,d3c5bc,e7ddd7,101820,43484e,5a5d61,75787b,919395,b4b5b6,d2d3d5,e7e8e9,f7f8f9,ffffff&main=ffffff&level=AA) is a useful resource for testing the compliance of any combination of colors in our palette.
---
