---
title: Item introductions
layout: variation
section: patterns
description: The item introduction is used on
  [learn](https://cfpb.github.io/design-system/pages/learn-pages) and [document
  detail
  pages](https://cfpb.github.io/design-system/pages/document-detail-pages)
  typically found through [filterable list
  pages](https://cfpb.github.io/design-system/pages/filterable-list-pages).
variation_groups:
  - variation_group_name: Standard item introduction
    variations:
      - variation_description: >-
          The item introduction consists of a heading, sometimes referred to as
          the post title, with a category label plus icon above it in some
          cases. The item introduction may also include author names, date,
          subheading paragraph, and/or social sharing icons. For reference, see
          this [example of a blog post using the item
          introduction](https://www.consumerfinance.gov/about-us/blog/innovation-spotlight-providing-adverse-action-notices-when-using-ai-ml-models/).


          Layout as seen on a Learn page template:


          ![Schematic of an item introduction](/design-system/images/uploads/itemintro_intro.png)
        variation_specs: >-
          ![](/design-system/images/uploads/itemintro_style.png)


          * Required components: Only the post title is absolutely required and the category label should be used in the vast majority of cases. (Category label minicons are optional.)

          * Optional components: Subheader paragraph, dates, and social sharing icons.

          * Spacing: 45 px margin above, 60 px margin below.
use_cases: >-
  ### When to use


  * When introducing a specific document or group of documents (such as a report, rule, or enforcement action) linked through a filterable list.

  * When the page contains specific content about one subject; there aren’t any child pages that drill down to anything more specific.


  ### When other options are better


  * When creating general content pages, even if the content is detailed or lengthy.
guidelines: >-
  Category should always be selected if it is a page type that is categorized
  (for example, enforcement actions do not have a category).


  Headings should be as succinct as possible, ideally no more than 2 lines at max column width; 80 characters or less.


  The optional subheader paragraph should be additive to the user experience. Most pages currently using this component do not use the subheader element.


  If using the subheader paragraph, it should expand on the page title and help explain why the reader should care. No more than 2 sentences; 50 words.
behavior: >-
  | Above 900 px                         | Below 901
  px                               |

  | ------------------------------------ | ------------------------------------------ |

  | Item intro with sidebar to the right | Item intro takes up full width of viewport |

  | ![Schematic of an item intro at breakpoints above 900 px](/design-system/images/uploads/itemintro_behavior1.png) | ![schematic of an item intro at breakpionts below 901 px](/design-system/images/uploads/itemintro_behavior2.png) |
related_items: >-
  * [Learn pages](https://cfpb.github.io/design-system/pages/learn-pages) 

  * [Document detail pages](https://cfpb.github.io/design-system/pages/document-detail-pages)  

  * [Heroes](https://cfpb.github.io/design-system/patterns/heroes)

  * [Text introductions](https://cfpb.github.io/design-system/patterns/text-introductions)
eyebrow: Introductions
---
