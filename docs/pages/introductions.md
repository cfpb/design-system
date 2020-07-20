---
title: Text introductions
layout: variation
section: patterns
status: Released
description: The text introduction is the standard page introduction pattern
  used across all pages that do not have a
  [hero](https://cfpb.github.io/design-system/patterns/heroes) or [item
  introduction](https://cfpb.github.io/design-system/patterns/item-introductions).
  They introduce a page, or collection of pages, with a brief description of the
  goals of that section.
variation_groups:
  - variations:
      - variation_code_snippet: ""
        variation_description: >-
          Text introductions consist of a heading and lead paragraph. They
          should be used on every page, except in cases when a
          [hero](https://cfpb.github.io/design-system/patterns/heroes) or [item
          introduction](https://cfpb.github.io/design-system/patterns/item-introductions)
          is used.


          Layout as seen with a standard right sidebar:


          ![Image of a text introduction component with a standard right sidebar](/design-system/images/uploads/text_introduction_072020.png)
        variation_jinja_code_snippet: ""
        variation_name: ""
        variation_specs: >-
          #### Style


          ![Image of text intro showing grid and design specs](/design-system/images/uploads/text_introduction_specs_072020.png)


          * Spacing: 45px margin above, 60 px margin below.

          * Page title: Heading 1

          * Subheader: Lead paragraph style

          * Optional body paragraph and link: Avenir paragraph

          * Text spans seven columns

          * At breakpoints below 600: Page title and lead paragraph drop down one type size to make reading on smaller devices easier.
    variation_group_name: Standard text introduction
    variation_group_description: ""
  - variation_group_name: Variation
    variation_group_description: ""
    variations:
      - variation_specs: >-
          #### Style


          ![Image of text intro with breakout sidebar showing grid and design specs](/design-system/images/uploads/breakout_sidebar_specs_072020.png)


          * Spacing: The breakout may be taller than the Text Intro content, in which case the margin beneath the breakout should be 60px.

          * Required elements: slug title and paragraph text.

          * Imagery: May use either a circle (1x1) image or a 16x9 ratio image.
        variation_name: Breakout sidebar
        variation_description: >-
          On [landing](https://cfpb.github.io/design-system/pages/landing-pages)
          or
          [sub-landing](https://cfpb.github.io/design-system/pages/sublanding-pages)
          pages, the text introduction may be accompanied by a breakout sidebar
          to highlight a specific piece of content from the section. The
          optional breakout sidebar should be used when a specific piece of
          content needs to be highlighted that is related to, but not a
          continuation of, content in the introduction. The breakout sidebar may
          contain a related posts element or imagery. An example of it appears
          on the [Rulemaking sub-landing
          page](https://www.consumerfinance.gov/policy-compliance/rulemaking/).


          Layout as seen with a ‘breakout’ highlight in the right sidebar area:


          ![Image of a text introduction component with a "breakout" highlight in the right sidebar](/design-system/images/uploads/breakout_sidebar_072020.png)
use_cases: ""
guidelines: >-
  ### Content guidelines


  #### Headings


  Headings should be as succinct as possible, ideally staying on a single line at max column width; 35 characters or less.


  * Heading should be in sentence case

  * Use the word “and” instead of “&”


  #### Lead paragraph


  Lead paragraph beneath heading should also be succinct, roughly 1-3 sentences; 350 characters maximum. This paragraph should explain why the page exists (how does its content tie back to the CFPB mission?) and the value add to the user (what will they get out of the content on this page?).


  #### Descriptive paragraph (optional)


  The optional description paragraph can be anywhere between 1-5 sentences; 100-800 characters, depending on the needs of the page.


  * If a breakout sidebar is being used, longer text may be appropriate to help match the text introduction length to the sidebar length

  * For emphasis, a call to action last sentence can be entered as its own paragraph underneath this lead paragraph, either linked to a url or not


  #### Call-to-action link (optional)


  The optional call-to-action link should be one line; about 40 characters or less. Link content should follow [link guidelines](https://cfpb.github.io/design-system/components/links).
behavior: >-
  ### Text introduction


  | Above 900 px                                   | Below 901 px                                                                                   |

  | ---------------------------------------------- | ---------------------------------------------------------------------------------------------- |

  | With standard grey-welled sidebar on the right | With standard grey-welled sidebar stacked to prefooter                                         |

  | ![Mockup of 900 pixel and above layout](/design-system/images/uploads/text_introduction_above900_072020.png)                                            | ![Mockup of 901 pixel and below layout](/design-system/images/uploads/text_introduction_below901_072020.png)|


  ### Text introduction with breakout sidebar


  | Above 900 px                                                                          | Below 901 px                                                                                   |

  | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |

  | Breakout sidebar on the right                                                         | Breakout sidebar stacked immediately after text intro                                          |

  | ![Mockup of 900+ pixel layout](/design-system/images/uploads/breakout_sidebar_above900_072020.png) | ![Mockup of 900 pixel and below layout](/design-system/images/uploads/breakout_sidebar_below901_072020.png) |
accessibility: ""
research: ""
related_items: >-
  * [Heroes](https://cfpb.github.io/design-system/patterns/heroes)

  * [Item introductions](https://cfpb.github.io/design-system/patterns/item-introductions)
last_updated: 2020-01-28T15:55:47.394Z
secondary_section: Layout options
---
