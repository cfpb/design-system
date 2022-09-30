---
title: Document detail pages
layout: variation
section: pages
status: Released
description: Document detail page types provide summary information about a
  document or related group of documents. These pages help users better
  understand the relevancy and context of documents before deciding whether or
  not to download or engage further.
variation_groups:
  - variation_group_name: Standard document detail page
    variations: []
    variation_group_description: >
      | Document detail page wireframe | Example |

      | -- | -- |

      | ![](/design-system/images/uploads/docdetail_top_example.jpg) | Example: [2019 Consumer Response annual report](https://www.consumerfinance.gov/data-research/research-reports/2019-consumer-response-annual-report/)
use_cases: >-
  ### When to use


  * When the primary goal of the page is to encourage users to download a resource or understand the context around a document.

  * When creating a filterable list of items, document detail pages house the items within the filterable list.


  ### When other options are better


  * When providing the full text of an article or detailed content, but not specifically focused on a document for download, use the more general [Learn page template](https://cfpb.github.io/design-system/pages/learn-pages).
guidelines: >-
  ### Content guidelines


  * Page content should provide context for the document housed on the page and should help users get a sense of what will be in the document before the download it; what answers it provides, what they will learn, etc.

  * Multiple documents should only be grouped on a single page when they are different versions of a single document, or provide context for one another.


  #### Area 1: Item introduction


  * Using the [item introduction](https://cfpb.github.io/design-system/patterns/item-introductions) is required.


  #### Area 2: Main content


  * At least one pattern is required here.


  #### Area 3: Sidebar


  * Strongly recommend using the metadata sidebar component in order to display basic information about the document(s) housed on this page.

  * When the metadata sidebar is used, it must appear at the top of the sidebar area.


  #### Post preview


  * Function of the post preview is to provide context to the user to help them decide if the document has the information they need as they browse through a list.

  * May use up to two category labels, but strongly recommended to assign one category label per page.

  * Post preview title will be linked, so no need to provide “Click here to read more” direct call to action, or link to the doc detail page within the preview description text.

  * Post preview description text should be limited to 2-3 sentences; 50 words. Language should provide a “nudge” to action.


  ##### Possible metadata inputs shown


  ![Possible metadata inputs shown](/design-system/images/uploads/post_style.jpg)


  1. Category label - minicon, H4 (2 max)

  2. Date - H5 Grey #75797C **(required)**

  3. Image (thumbnail) - 30px padding

  4. Event date icon - Unique option for events, dynamic icon with 15px padding

  5. Post title - H3 **(required)**

  6. Sub-heading - H6

  7. Description - Avenir paragraph **(required)**

  8. Author label - Avenir paragraph

  9. Secondary link - Standard hyperlink

  10. Topics tags - H6 Grey #75797C, 80% gold #FAAF4C dotted underline and round bullet
behavior: >-
  Below the 901 pixel breakpoint, the sidebar stacks below the main content
  area.


  | Above 900 px                                                                      | Below 901 px                                                                             |

  | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |

  | ![Breakpoints 901+](/design-system/images/uploads/docdetail_behavior_desktop.jpg) | ![Breakpoints 900 and less](/design-system/images/uploads/docdetail_behavior_mobile.jpg) |


  ### Post preview


  When document detail pages are accessed via entries within a filterable list, information about each page is displayed on filterable list pages via the post preview component.


  ### Post preview within a filterable list


  | Above 600 px                                                                                                           | Below 601 px                                                                                                                  |

  | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |

  | ![Post preview within a filterable list at breakpoints 601+](/design-system/images/uploads/post_preview_desktop_1.jpg) | ![Post preview within a filterable list at breakpoints 600 and less](/design-system/images/uploads/post_preview_mobile_1.jpg) |
related_items: >-
  ### Pages


  * [Learn page](https://cfpb.github.io/design-system/pages/learn-pages)

  * [Filterable list page](https://cfpb.github.io/design-system/pages/filterable-list-pages)


  ### Page introductions 


  * [Item introduction](https://cfpb.github.io/design-system/patterns/item-introductions)


  ### Content


  * [Tables](/design-system/components/tables)

  * [Expandables](/design-system/components/expandables)

  * Metadata / Related posts / Related links

  * [Email sign-up form](https://cfpb.github.io/design-system/patterns/e-mail-signup-forms)
last_updated: 2020-01-13T23:29:43.319Z
---
