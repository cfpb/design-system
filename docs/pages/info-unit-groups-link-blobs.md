---
title: Info unit groups
layout: variation
section: patterns
status: Released
description: 'Info unit groups are generally used to provide brief context as
  they lead users from a parent page ([landing
  pages](https://cfpb.github.io/design-system/templates/landing-pages),
  [sublanding
  pages](https://cfpb.github.io/design-system/templates/sublanding-pages), and
  [browse pages](https://cfpb.github.io/design-system/templates/browse-pages))
  to additional content on a child or sibling page. Info units provide the
  ability to create content with multicolumn layouts. There are two types: image
  and text, or text only.'
variation_groups:
  - variation_group_name: Image and text
    variations:
      - variation_name: 25/75 image and text component
        variation_description: >-
          ![Info unit group: example of
          25/75](/design-system/images/uploads/2575example_desktop-1-.jpg "Info
          unit group: example of 25/75")


          ![]()


          The 25/75 image and text component is used to draw the user’s eye to key information and navigation links, and aid comprehension by pairing content with illustration/imagery.


          When used in conjunction with 50/50 text components, it can help create a hierarchy of child pages or other content on the page, or can help feature a particular link over others.


          The 25/75 image and text component is the only format where the format name, 25/75, refers to how each individual unit it laid out, not to how multiple units are laid out.


          #### When to use


          * When a call-to-action, leading users to a deeper page in the section, needs a visual highlight on the page

          * When an image or illustration helps users better understand the purpose of content

          * Can be used for an even or odd number of items and may imply a hierarchy of information given the list style format


          #### When other options are better


          * When content doesn’t require imagery

          * When there are multiple paragraphs of copy
        variation_specs: >-
          ![diagram of the 25/75 image and text module with 30px of spacing
          shown](/design-system/images/uploads/25-75_style_desktop_1.jpg "Info
          unit group: specs for 25/75 image and text")


          * Imagery: 1:1 ratio, may be illustration or photography

          * 150px wide for 901+ px breakpoint and 130 px wide for 900 px breakpoint and below

          * Padding: 30px padding for imagery across responsive sizes

          * Headings: H2-4 can be used
      - variation_name: 50/50 image and text component
        variation_description: >-
          ![Image showing layout of a 50/50 image and text
          component](/design-system/images/uploads/50_50_intro_mockup.png)


          The 50/50 image and text component is used to call attention to linked content on a page. At larger breakpoints, this component has a two column layout to utilize extra screen real estate.


          The 50/50 text component is a variation of the 50/50 image and text. The text-only version does not use imagery.


          #### When to use


          * When a call-to-action, leading users to a deeper page in the section, needs a visual highlight on the page

          * When an image or illustration helps users better understand the purpose of content

          * Ideally, when an even number of these components can be featured together

          * To help establish a hierarchy of linked content on this page


          #### When other options are better


          * When content doesn’t require imagery

          * When there are multiple paragraphs of copy
        variation_specs: >-
          ![](/design-system/images/uploads/50_50_style_mockup.png)


          * Imagery: 16:9 ratio, recommend 1600 x 900 pixels to account for retina displays

          * Headings: H2-4 can be used

          * Body copy: Avenir paragraph

          * At breakpoints below 601: Heading sizes H3 and above automatically drop down one level and the mobile link style is used for the call to action link(s).
      - variation_name: 33/33/33 image and text component
        variation_description: >-
          ![Image of a 33/33/33 image and text
          component](/design-system/images/uploads/33-33-33_image_text.jpg)


          #### When to use


          * Ideally, when a group of these components can be featured together in multiples of three (3, 6, 9, etc.)

          * When an image or illustration helps users better understand the purpose of content


          #### When other options are better


          * When the number of components would be better featured in multiples of 2, use the 50/50 text component instead

          * When headings are too long for the narrower width, for example, when they break to 3 lines or more

          * When content doesn't require imagery

          * When there are multiple paragraphs of copy
        variation_specs: >-
          * Imagery: 1:1 ratio, may be illustration or photography

          * 150px wide for 901+ px breakpoint and 130 px wide for 900 px breakpoint and below

          * Headings: H2-4 can be used
    variation_group_description: 'Image and text components consist of an image,
      plus a heading, short descriptive text, and call to action. There are
      three layouts that allow you to pair text with images: 25/75, 50/50, and
      33/33/33 components.'
  - variations:
      - variation_code_snippet: ''
        variation_description: >-
          ![Info unit group: example of half width link
          blob](/design-system/images/uploads/halfwidthblob_intro_mockup.png
          "Info unit group: example of half width link blob")


          #### When to use


          * Ideally, when an even number of these components can be featured together


          #### When other options are better


          * When the number of components would be better featured in multiples of 3, use the 33/33/33 text component instead

          * When content requires imagery, use the 50/50 image and text or 25/75 image and text components
        variation_jinja_code_snippet: >-
          File in https://github.com/cfpb/consumerfinance.gov:


          https://github.com/cfpb/consumerfinance.gov/blob/e67d1ad321551c221c01eaa62589dfdd1177d1dc/cfgov/jinja2/v1/_includes/organisms/half-width-link-blob-group.html
        variation_name: 50/50 text component
        variation_specs: >-
          * Headings: Use H3 or H4. Do not use both.
            * H3: Use when you wish to give the heading text a higher level of prominence within the page hierarchy. Avoid using H3 when it will cause the heading to break to 3 lines or more.
            * H4: Use when you wish to give the heading text less prominence within the page hierarchy or when the component follows an H3 heading. When you select the H4 you have the option of including a minicon to the left of the heading.

          ![](/design-system/images/uploads/halfwidthblob_style_mockup.png)
      - variation_code_snippet: ''
        variation_description: >-
          ![Info unit group: example of third width link
          blob](/design-system/images/uploads/third_width_link_blob_intro.png
          "Info unit group: example of third width link blob")


          #### When to use


          * Ideally, when a group of these components can be featured together in multiples of three (3, 6, 9, etc.)


          #### When other options are better


          * When the number of components would be better featured in multiples of 2, use the 50/50 text component instead.

          * When headings are too long for the narrower width, for example, when they break to 3 lines or more

          * When content requires imagery, use the 50/50 image and text or the 25/75 image and text instead
        variation_jinja_code_snippet: >-
          File in https://github.com/cfpb/consumerfinance.gov:


          https://github.com/cfpb/consumerfinance.gov/blob/e67d1ad321551c221c01eaa62589dfdd1177d1dc/cfgov/jinja2/v1/_includes/organisms/third-width-link-blob-group.html
        variation_name: 33/33/33 text component
        variation_specs: >-
          * Headings: Use H3 or H4. Do not use both.
            * H3: Use when you wish to give the heading text a higher level of prominence within the page hierarchy. Avoid using H3 when it will cause the heading to break to 3 lines or more.
            * H4: Use when you wish to give the heading text less prominence within the page hierarchy or when the component follows an H3 heading. When you select the H4 you have the option of including a minicon to the left of the heading.

          ![](/design-system/images/uploads/third_width_link_blob_style.png)
    variation_group_name: Text only
    variation_group_description: 'Text components consist of a heading, short
      descriptive text, and call to action. There are two types: 50/50 and
      33/33/33.'
use_cases: ''
guidelines: >-
  ### Content guidelines


  #### Headings


  * 25/75 image and text component: 60 characters or less, ideally rendering as one line

  * 50/50 image and text component: 30 characters or less, ideally rendering as one line

  * 50/50 and 33/33/33 text components: 45 characters max. 25 characters max is preferred, which renders as one line at max column width.

  * Option to give the entire info unit group a heading


  #### Descriptions


  * Do not use info unit groups for multiple paragraphs of copy. Copy should be succinct.

  * 50/50 text components: 100-250 characters max

  * 33/33/33 text components: 90-150 characters max

  * 25/75 image and text component: 275 characters max

  * 50/50 image and text component: 50 characters min, 130 characters max, which renders as 2-3 lines at max column width

  * When these components are featured together (which is ideal), the amount of content in each component should be as close to the same number of total lines as possible.

    * For 50/50 text components, one or two lines different is ok.
    * For 33/33/33 text components, a difference of one line is ok.
  * Option to give the entire info unit group an introductory paragraph.


  #### Call to action


  * 25/75 image and text component: 65 characters max

  * 50/50 image and text component: 40 characters max

  * 50/50 text components: 40 characters max

  * 33/33/33 text components: 30 characters max

  * Option to include sharing links below the info units

  * Follow [link guidelines](https://cfpb.github.io/design-system/components/links).




  ### Stylistic guidelines


  * If an info unit group contains both an image and a call to action link, you have the option of having the image link to the call to action URL. If there are multiple call to action links, the image will link to the first link.



  * Option to include a rule above an info unit group to separate it from the previous section on the page


  * Option to include a rule between rows of info units (or between each info unit in the case of a 25/75 layout)
behavior: >-
  ### 50/50 components


  Both the image and text and text-only components behave similarly. The text-only component is shown here.


  | Above 600 px                                                           | Below 601 px                                                           |

  | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |

  | ![](/design-system/images/uploads/halfwidthblob_behavior_mockup_1.png) | ![](/design-system/images/uploads/halfwidthblob_behavior_mockup_2.png) |


  ### 33/33/33 text component


  | Above 600 px                                                            | Below 601 px                                                            |

  | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |

  | ![](/design-system/images/uploads/third_width_link_blob_behavior_1.png) | ![](/design-system/images/uploads/third_width_link_blob_behavior_2.png) |


  ### 25/75 image and text component


  At breakpoints below 601, side-by-side modules stack vertically in Z-order as shown below, and the mobile link style is used for the call to action link(s).


  ![Below 600 px the 25/75 image and text components collapse with the image above the header and description text](/design-system/images/uploads/25-75-behavior-600.png "Breakpoint diagram for how 25/75 image and text component works at smaller screen sizes")
accessibility: ''
related_items: |-
  * [Links](https://cfpb.github.io/design-system/components/links)
  * [Typography](https://cfpb.github.io/design-system/foundation/typography)
last_updated: 2019-08-30T16:07:00.000Z
eyebrow: Main content
---
