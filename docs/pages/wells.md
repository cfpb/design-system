---
layout: variation
section: patterns
status: Released
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <div class="o-well">
              <p class="h4">Well title</p>
              <p>
                  Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
                  instructior ex pri. Cu pri inani constituto, cum aeque noster commodo
                  cu. <a href="#">Example link</a>.
              </p>
          </div>
        variation_description: ''
        variation_name: Standard well
        variation_specs: >-
          * Padding at breakpoints 601+: 30 (top), 30 (right) 60 (bottom), 30
          (left)

          * Padding at breakpoints 600 and below: 30 (top), 15 (right), 60 (bottom), 15 (left)

          * Background color: 5% grey (#F7F7F7)

          * Border: 1px 50% grey (#BABBBD)

          * Single column content only.

            ![Schematic of well showing padding ](/design-system/images/uploads/wells_style_mockup.png)
      - variation_code_snippet: >-
          <div class="o-well o-well__inkwell">
              <p class="h4">Inkwell modifier</p>

              <div class="a-tagline a-tagline__xlarge">
                  <span class="u-usa-flag"></span>
                  <div class="a-tagline_text">
                    This is a tagline inside an inkwell.
                  </div>
              </div>

              <p>
                  Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
                  instructior ex pri. Cu pri inani constituto, cum aeque noster commodo
                  cu. <a href="#">Example link</a>.
              </p>
          </div>
        variation_description:
          T﻿he inkwell was originally developed for use on the
          cf.gov home page, but was not implemented.
        variation_name: Inkwell
        variation_is_deprecated: true
    variation_group_name: Wells
guidelines: >-
  Wells should generally be text-based. If content must include imagery or
  videos, use the [featured content
  module](/design-system/patterns/featured-content-module) instead. Examples of
  types of content to include:


  * Headings (H2 - H5). Headings should be as succinct as possible and 35 characters or less (including spaces)

  * Text (including bullets and numbered lists). Text should be succinct.

  * Links
eyebrow: Featured content
title: Wells
description: Wells are used to highlight specific information within a
  designated section of a page. This breaks up the flow of content on the page
  and helps to emphasize and set apart the content that is included. They are
  generally used on
  [browse](https://cfpb.github.io/design-system/pages/browse-pages),
  [learn](https://cfpb.github.io/design-system/pages/learn-pages), and [document
  detail
  pages](https://cfpb.github.io/design-system/pages/document-detail-pages).
use_cases: >-
  Grey wells should be used to feature content or specific calls to action.
  They  will help visually set apart the content within it, so use sparingly to
  draw attention to that content.


  Ideally, content within a well should not take up more than a third of page content.
behavior: >-
  Wells are full width. Note that at breakpoints 600 and under there are slight
  padding adjustments to maximize real estate on smaller displays.


  | Above 900 px, with right sidebar | Above 900 px, with left nav | Below 901 px, both page types |

  | -- | -- | -- |

  | ![](/design-system/images/uploads/wells_behavior_mockup_1.png) | ![](/design-system/images/uploads/wells_behavior_mockup_2.png) | ![](/design-system/images/uploads/wells_behavior_mockup_3.png) |
accessibility: ''
related_items: '* [Featured content module](/design-system/patterns/featured-content-module)'
last_updated: 2019-10-21T20:38:39.851Z
research: ''
---
