---
title: Accessibility audit tools
collection_name: pages
layout: variation
section: guidelines
description: This page contains web accessibility testing tools developed by the
  Design & Development team at the CFPB to check for our desired conformance to
  federal regulations around accessibility. The tools will help you check both
  that we're meeting the law and that we’re providing an inclusive web
  experience for all our users.
variation_groups:
  - variations:
      - variation_is_deprecated: false
        variation_name: ""
        variation_description: ""
    variation_group_name: CFPB manual web accessibility audit
    variation_group_description: >-
      Developed for use by both designers and developers, our manual web
      accessibility audit tool is largely comprised of tests for conformance to
      [WCAG 2.0 AA success
      criteria](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&versions=2.0&levels=aaa).
      The audit includes coverage for automated testing, screen reader testing,
      mobile testing, keyboard testing, and additional tests covering forms and
      sensory sensitivity. 


      **The tool is written for use on a MacBook installed with both Microsoft Excel and the Chrome browser, as well as an iPhone.** 


      [Download the CFPB manual accessibility audit](https://github.com/cfpb/design-system/blob/main/docs/assets/CFPB.manual.accessibility.audit.open.source.v1.0_09.30.21.xlsx) 


      If you have any feedback, please let us know [by filing a issue](https://github.com/cfpb/design-system/issues).
  - variation_group_name: Lighthouse automated audit
    variation_group_description: >-
      We also regularly check our pages for accessibility issues using an
      instance of Lighthouse.


      [View the CFPB Lighthouse reports dashboard](https://cfpb.github.io/cfgov-lighthouse/)


      The manual audit picks up issues that Lighthouse will not, so we prioritize using the manual audit for pages with interactive elements, new patterns or components, custom code, or pages that are not created with our CMS.
use_cases: ""
guidelines: >-
  This section describes our scale for classifying the severity of an
  accessibility bug.


  ### The scale


  #### Critical


  Violations that match the following criteria are considered **Critical**:


  | WCAG Level | Usability impact                                    | Page type or functionality                                      |

  | ---------- | --------------------------------------------------- | --------------------------------------------------------------- |

  | A or AA    | 1: Cannot achieve primary purpose of page/component | Global header/footer, Top 20 single page, CMS site-wide pattern |


  #### High priority


  Violations that match the following criteria are considered **High priority**:


  | WCAG Level | Usability impact                                    | Page type or functionality                                      |

  | ---------- | --------------------------------------------------- | --------------------------------------------------------------- |

  | A or AA    | 1: Cannot achieve primary purpose of page/component | Regular single page or one-off component                        |

  | A or AA    | 2: Hurts comprehension of page/component purpose    | Global header/footer, Top 20 single page, CMS site-wide pattern |


  #### Medium priority


  Violations that match the following criteria are considered **Medium priority**:


  | WCAG Level | Usability impact                                                                                 | Page type or functionality                               |

  | ---------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |

  | A or AA    | 2: Hurts comprehension of page/component purpose, or 3: Unrelated to main page/component purpose | Regular single page or one-off component                 |

  | A or AA    | 3: Unrelated to main page/component purpose                                                      | Global header/footer, top 20 page, CMS site-wide pattern |

  | AAA        | All other accessibility-related issues                                                           |                                                          |


  ### Definitions


  #### Usability impact levels


  **1: Cannot achieve primary purpose of page/component**\

  Example: A focus loop prevents you from tabbing all the way to the end of a form and submitting it.


  **2: Hurts comprehension of page/component purpose**\

  Example: Repeated contextless "Read more" links in a table, if there is a relatively simple workaround for the user (e.g., user could cycle through all of the table cells to understand the context of links, rather than navigate through links only)


  **3: Unrelated to main page/component purpose**\

  Example: Landmarks contain the word "navigation" twice because of redundant labeling 


  #### Page type or functionality


  **Global header/footer**\

  Issues that fall within the megamenu or footer and are therefore on every page


  **Top 20 page**\

  A single page that, based on analytics, falls within the top 20 most visited pages of your site 


  **Site-wide pattern**\

  Any pattern that is available as a standard component or pattern (e.g. expandables, video player)


  **Other**


  * **Regular single page:** Any page that does not fall into the Top 20 page category

  * **One-off component:** Functionality that is not available as a standard component or pattern, or custom code


  ### What to do with this scale


  * When entering the usability impact and page/functionality type into the manual accessibility audit, the severity rating will be calculated automatically for you.

  * If reporting an accessibility bug outside of the context of an audit, you can manually determine what the severity should be from the explanation above.

  * Use the severity to aid in determining when to fix accessibility bugs.
---
