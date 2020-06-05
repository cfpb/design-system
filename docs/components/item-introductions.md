---
title: Item introductions
layout: variation
section: components
secondary_section: Layout options
description: The item introduction component is a variation of the
  [](https://cfpb.github.io/design-manual/global-elements/text-introductions.html)text
  introduction. It's used on learn and document detail pages found through
  filterable lists. Examples of pages that use item introductions include blog
  posts, press releases, and documents.
variation_groups:
  - variation_group_name: Standard item introduction
    variations:
      - variation_description: >-
          The item introduction consists of a heading, sometimes referred to as
          the post title, with a category label above it in the vast majority of
          cases. The item introduction may also include a minicon next to the
          category label, subheading paragraph, author, dates, and/or social
          sharing icons. Layout as seen on a Learn page template:


          ![Schematic of an item introduction](/design-system/images/uploads/itemintro_intro.png)


          ##### WHEN TO USE

          * When introducing a specific article or post (such as a press release or blog post) or document or group of documents (such as a report, rule or enforcement action) linked through a filterable list.

          *  When the page contains specific content about one subject; there aren’t any child pages that drill down to anything more specific.


          ##### WHEN OTHER OPTIONS ARE BETTER

          * When creating general content pages, even if the content is detailed or lengthy.
        variation_specs: >-
          #### Style 


          ![](/design-system/images/uploads/itemintro_style.png)


          * Required components: Only the post title is absolutely required and the category label should be used in the vast majority of cases. (Category label minicons are optional.)

          * Optional components: Subheader paragraph, author, dates, and social sharing icons.

          * Spacing: 45 px margin above, 60 px margin below.
content_guidelines: >-
  Category should always be selected if it is a page type that is categorized.


  Headings should be as succinct as possible, ideally no more than 2 lines at max column width; 80 characters or less.


  The optional subheader paragraph should be additive to the user experience. Most pages currently using this component do not use the subheader element.


  If using the subheader paragraph, it should expand on the page title and help explain why the reader should care. No more than 2 sentences; 50 words.
behavior: >-
  | Above 900 px                         | Below 901
  px                               |

  | ------------------------------------ | ------------------------------------------ |

  | Item intro with sidebar to the right | Item intro takes up full width of viewport |

  | ![Schematic of an item intro at breakpoints above 900 px](/design-system/images/uploads/itemintro_behavior1.png) | ![schematic of an item intro at breakpionts below 901 px](/design-system/images/uploads/itemintro_behavior2.png) |
---
