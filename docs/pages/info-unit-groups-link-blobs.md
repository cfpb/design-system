---
title: Link blobs
layout: variation
section: patterns
status: Released
description: Link blobs are text-only layout modules. They provide brief context
  to lead users from a parent page ([landing
  pages](https://cfpb.github.io/design-system/templates/landing-pages),
  [sublanding
  pages](https://cfpb.github.io/design-system/templates/sublanding-pages), and
  [browse pages](https://cfpb.github.io/design-system/templates/browse-pages))
  to a child or sibling page.
variation_groups:
  - variations:
      - variation_code_snippet: ""
        variation_description: >-
          ![Info unit group: example of half width link
          blob](/design-system/images/uploads/halfwidthblob_intro_mockup.png
          "Info unit group: example of half width link blob")


          ##### When to use


          * Ideally, when an even number of these components can be featured together.


          ##### When other options are better


          * When the number of components would be better featured in multiples of 3, use the third-width link blob.

          * When content requires imagery, use the 50/50 image and text or 25/75 image and text components.
        variation_jinja_code_snippet: >-
          File in https://github.com/cfpb/cfgov-refresh:


          https://github.com/cfpb/cfgov-refresh/blob/e67d1ad321551c221c01eaa62589dfdd1177d1dc/cfgov/jinja2/v1/_includes/organisms/half-width-link-blob-group.html
        variation_name: Half-width link blob
        variation_specs: >-
          * Headings: Use H3 or H4. Do not use both.
            * H3: Use when you wish to give the blob heading text a higher level of prominence within the page hierarchy. Avoid using H3 when it will cause the heading to break to 3 lines or more.
            * H4: Use when you wish to give the heading text less prominence within the page hierarchy or when the blob set follows an H3 heading. When you select the H4 you have the option of including a minicon to the left of the heading.

          ![](/design-system/images/uploads/halfwidthblob_style_mockup.png)
      - variation_code_snippet: ""
        variation_description: >-
          ![Info unit group: example of third width link
          blob](/design-system/images/uploads/third_width_link_blob_intro.png
          "Info unit group: example of third width link blob")


          ##### When to use


          * Ideally, when a group of these components can be featured together in multiples of three (3, 6, 9, etc.).


          ##### When other options are better


          * When the number of components would be better featured in multiples of 2, use the half-width link blob instead

          * When headings are too long for the narrower width, for example, when they break to 3 lines or more.

          * When content requires imagery, use the 50/50 image and text or the 25/75 image and text instead.
        variation_jinja_code_snippet: >-
          File in https://github.com/cfpb/cfgov-refresh:


          https://github.com/cfpb/cfgov-refresh/blob/e67d1ad321551c221c01eaa62589dfdd1177d1dc/cfgov/jinja2/v1/_includes/organisms/third-width-link-blob-group.html
        variation_name: Third-width link blob
        variation_specs: >-
          * Headings: Use H3 or H4. Do not use both.
            * H3: Use when you wish to give the blob heading text a higher level of prominence within the page hierarchy. Avoid using H3 when it will cause the heading to break to 3 lines or more.
            * H4: Use when you wish to give the heading text less prominence within the page hierarchy or when the blob set follows an H3 heading. When you select the H4 you have the option of including a minicon to the left of the heading.

          ![](/design-system/images/uploads/third_width_link_blob_style.png)
      - variation_name: 25/75 image and text component
        variation_description: >-
          ![Info unit group: example of third width link
          blob](/design-system/images/uploads/third_width_link_blob_intro.png
          "Info unit group: example of third width link blob")


          ![]()


          The 25/75 image and text component is used to draw the user’s eye to key information and navigation links, and aid comprehension by pairing content with illustration/imagery.


          When used in conjunction with half width link blob, it can help create a hierarchy of child pages or other content on the page, or can help feature a particular link over others.


          ##### When to use


          * When a call-to-action, leading users to a deeper page in the section, needs a visual highlight on the page.

          * When an image or illustration helps users better understand the purpose of content.

          * Can be used for an even or odd number of items and may imply a hierarchy of information given the list style format.


          ##### When other options are better


          * When content doesn’t require imagery. Suggest using the half width link blob pattern instead.

          * When there are multiple paragraphs of copy.
        variation_specs: >-
          * ![diagram of the 25/75 image and text module with 30px of spacing
          shown](/design-system/images/uploads/25-75_style_desktop_1.jpg "Info
          unit group: specs for 25/75 image and text")

            Imagery: 1:1 ratio, may be illustration, isocon, or photography. * 150px wide for 901+ px breakpoint and 130 px wide for 900 px breakpoint and below
          * Padding: 30px padding for imagery across responsive sizes

          * Headings: Any heading size may be used, recommend H2-6
    variation_group_name: Types
    variation_group_description: A link blob is a unit consisting of heading, short
      descriptive text, and call to action. At breakpoints above 601 px, link
      blobs are found in rows of two blobs (half-width link blobs) or three
      blobs (third-width link blobs).
use_cases: ""
content_guidelines: >-
  Do not use blobs for multiple paragraphs of copy. Copy should be succinct.

  * Headings
    * 45 characters max. 25 characters max is preferred, which renders as one line at max column width.
  * Descriptions
    * Half-width link blobs: 100-250 characters max
    * Third-width link blobs: 90-150 characters max
  * Call to action
    * Half-width link blobs: 40 characters max
    * Third-width link blobs: 30 characters max
    * Follow [link guidelines](https://cfpb.github.io/design-system/components/links).
  * When these components are featured together (which is ideal), the amount of content in each component should be as close to the same number of total lines as possible.
    * For half-width link blobs, one or two lines different is ok
    * For third-width link blobs, a difference of one line is ok
behavior: >-
  At breakpoints below 601, side-by-side modules stack vertically in Z-order as
  shown below, and the mobile link style is used for the call to action link(s)


  #### Half-width link blob


  Above 600 px | Below 601 px

  --- | ---

  ![](/design-system/images/uploads/halfwidthblob_behavior_mockup_1.png) | ![](/design-system/images/uploads/halfwidthblob_behavior_mockup_2.png)


  #### Third-width link blob


  Above 600 px | Below 601 px

  --- | ---

  ![](/design-system/images/uploads/third_width_link_blob_behavior_1.png) | ![](/design-system/images/uploads/third_width_link_blob_behavior_2.png)
accessibility: ""
related_items: >-
  * [Info Unit Groups: image and
  text](https://cfpb.github.io/design-system/components/info-unit-groups-image-and-text)

  * [Links](https://cfpb.github.io/design-system/components/links)

  * [Typography](https://cfpb.github.io/design-system/foundation/typography)
last_updated: 2019-08-30T16:07:00.000Z
secondary_section: Layout options
---
