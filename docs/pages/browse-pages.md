---
title: Browse pages
layout: variation
section: pages
status: Released
description: >-
  "Browse" page types provide detailed information related to a larger topic
  (consumer information, product overviews, etc). These pages typically contain
  medium-length content, include "how-to" action steps for specific tasks, and
  may provide links to specific documents or resources.


  The "Browse" page template automatically includes **left-hand sub-navigation** for all children pages that share the parent page. (For example, note how all the navigation items in the **Live example** are housed under the parent [Buying a house](https://www.consumerfinance.gov/owning-a-home/) page.)


  Browse pages can also have parent-child relationships to other browse pages; note the children pages from the **live example**, e.g. [Check your credit](https://www.consumerfinance.gov/owning-a-home/prepare/check-your-credit/).
variation_groups:
  - variation_group_name: Standard browse page
    variations:
      - variation_code_snippet: ''
        variation_description: >-
          | Browse page wireframe | Example |

          | -- | -- |

          | ![Browse page example](/design-system/images/uploads/browse_example.jpg) | Example of a browse page: [Buying a House](https://www.consumerfinance.gov/owning-a-home/prepare/check-your-credit/) |
        variation_name: ''
use_cases: >-
  ### When to use


  * Target user is primarily in a browse mindset, interested in quickly consuming information and keeping an eye out for key phrases, so content on this page should be grouped to help them quickly find relevant information.

  * When adding new information to an existing topic area within one of the main navigation verticals.

  * When introducing a sub-topic, describing action items, or listing out resources.


  ### When other options are better


  * When page content is a lengthy article or text.
guidelines: >-
  ### Content guidelines


  Content should be displayed in a way that allows for ease of browsing; group content in ways that makes it easy to find.


  Page titles are sentence case and use the word “and” instead of “&”. Left side sub-navigation and breadcrumb labels follow same style as the main menu.


  Try to avoid creating superfluous paragraphs to contain url text; list urls where possible and minimize unnecessary content; this will help the user browse and find what they need faster, and helps to give visual clarity without the need to read the entire paragraph to find what they need.


  #### Area 1: Introduction


  * [Text introduction](https://cfpb.github.io/design-system/patterns/text-introductions) is required.


  #### Area 2: Main content


  * Must contain at least one pattern.


  #### Area 3: Prefooter


  * Optional

  * If using both static and dynamic content, preference for dynamic content to appear above static content.


  #### Area 4: Secondary navigation


  * If this browse page sits below a sublanding page (majority of cases), a breadcrumb displaying the sublanding page is required. 

  * Left side navigation shows all sibling browse pages that sit beneath a sublanding page.
behavior: >-
  Below the 901 pixel breakpoint, the sub-navigation collapses into the global
  navigation under a hamburger menu, as seen on the [Regulatory agenda
  page](http://www.consumerfinance.gov/policy-compliance/rulemaking/regulatory-agenda/).


  Also below the 901 pixel breakpoint, if a browse page has child browse pages, the children appear in a special expandable navigation at the top of the page, as seen on the [TRID guidance page](https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/tila-respa-integrated-disclosures/).


  | Above 900 px | Below 901 px |

  | -- | -- |

  | ![Breakpoints 901+](/design-system/images/uploads/browse_behavior_desktop.jpg) | ![Breakpoints 900 and less](/design-system/images/uploads/browse_behavior_mobile.jpg) |
related_items: >-
  ### Page introductions


  * [Text introduction](/design-system/patterns/text-introductions)


  ### Content


  * [Image and text component](/design-system/patterns/info-unit-groups#image-and-text-1)

  * [Text component](/design-system/patterns/info-unit-groups#text-only-1)

  * [Featured content module](/design-system/patterns/featured-content-module)

  * [Wells](/design-system/patterns/wells)

  * [Expandables](/design-system/components/expandables)

  * [Tables](/design-system/components/tables)

  * [Email signup form](https://cfpb.github.io/design-system/patterns/e-mail-signup-forms)
last_updated: 2020-01-13T23:25:20.183Z
---
