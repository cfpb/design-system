---
title: 'Info Unit Groups: Link blobs'
layout: variation
section: components
secondary_section: Layout options
status: Released
description: >-
  In general, info unit groups provide context and lead users to additional
  content. The versions called link blobs are used to lead users to other deeper
  or sibling linked pages.


  ![Info unit group: example of link blob in Design System page
  intro](/design-system/images/uploads/third_width_link_blob_intro.png "Info
  unit group: example of link blob in Design System page intro")


  More information about Info Unit Group link blobs can be found at:


  *
  <http://cfpb.github.io/design-manual/page-components/half-width-link-blob.html>

  *
  <http://cfpb.github.io/design-manual/page-components/third-width-link-blob.html>

  *
  <https://cfpb.github.io/capital-framework/components/cf-layout/#custom-content-layouts>

  * <https://github.com/cfpb/cfgov-refresh/search?q=info-unit-group>
variations:
  - variation_code_snippet: ''
    variation_description: >-
      The half-width link blob is used on higher-level template pages to provide
      succinct descriptions and lead users to content deeper within the section.
      The two-column layout utilizes extra screen real estate found at higher
      breakpoints.


      ![Info unit group: example of half width link
      blob](/design-system/images/uploads/halfwidthblob_intro_mockup.png "Info
      unit group: example of half width link blob")


      ##### When to use


      * Default option for providing succinct descriptions and navigation paths
      to child pages from a parent page.

      * Ideally, when an even number of these components can be featured
      together.


      ##### When other options are better


      * When the number of components would be better featured in multiples of
      3. Suggest using third-width link blob.

      * When content requires imagery. Suggest using the 50/50 image and text or
      25/75 image and text components instead.

      * When there are multiple paragraphs of copy

      * When we are not implying a parent/child relationship between the current
      page and the linked page


      ##### WHERE TO USE


      * [Landing
      pages](https://cfpb.github.io/design-system/templates/landing-pages)

      * [Sublanding
      pages](https://cfpb.github.io/design-system/templates/sublanding-pages)

      * [Browse
      pages](https://cfpb.github.io/design-system/templates/browse-pages)
    variation_jinja_code_snippet: >-
      File in https://github.com/cfpb/cfgov-refresh:


      https://github.com/cfpb/cfgov-refresh/blob/e67d1ad321551c221c01eaa62589dfdd1177d1dc/cfgov/jinja2/v1/_includes/organisms/half-width-link-blob-group.html
    variation_name: Half-width link blob
  - variation_code_snippet: ''
    variation_description: >-
      The third-width link blob provides users with supplemental content or
      suggested navigation paths to sibling pages. The three-column layout
      utilizes extra screen real estate found at higher breakpoints.


      ![Info unit group: example of third width link
      blob](/design-system/images/uploads/third_width_link_blob_intro.png "Info
      unit group: example of third width link blob")


      ##### When to use


      * Default option for providing users with secondary content or suggested
      navigation paths to sibling pages.

      * Ideally, when a group of these components can be featured together in
      multiples of three (3, 6, 9, etc.).


      ##### When other options are better


      * When the number of components would be better featured in multiples of 2
      (Suggest using the half-width link blob)

      * When headings are too long for the narrower width, for example, when
      they break to 3 lines or more.

      * When content requires imagery (Suggest using the 50/50 image and text or
      the 25/75 image and text instead

      * When there are multiple paragraphs of copy

      * When the page includes a sidebar


      ##### WHERE TO USE


      * [Landing
      pages](https://cfpb.github.io/design-system/templates/landing-pages)

      * [Sublanding
      pages](https://cfpb.github.io/design-system/templates/sublanding-pages)

      * [Browse
      pages](https://cfpb.github.io/design-system/templates/browse-pages)
    variation_jinja_code_snippet: >-
      File in https://github.com/cfpb/cfgov-refresh:


      https://github.com/cfpb/cfgov-refresh/blob/e67d1ad321551c221c01eaa62589dfdd1177d1dc/cfgov/jinja2/v1/_includes/organisms/third-width-link-blob-group.html
    variation_name: Third-width link blob
usage: >-
  ### Behavior


  At breakpoints below 601, the two- or three-column patterns transition into a
  single column and stacks each instance in Z-order.


  **601 and above (2 column half-width link blob)**


  ![](/design-system/images/uploads/halfwidthblob_behavior_mockup_1.png)


  **601 and above (3 column third-width link blob)**


  ![](/design-system/images/uploads/third_width_link_blob_behavior_1.png)


  **600 and under (1 column half-width link blob)**


  ![](/design-system/images/uploads/halfwidthblob_behavior_mockup_2.png)


  **600 and under (1 column third-width link blob)**


  ![](/design-system/images/uploads/third_width_link_blob_behavior_2.png)


  ### Content guidelines


  * Headings should be as succinct as possible.
    * For half-width link blobs, ideally 1 line at max column width (25 characters) or two lines at max column width maximum (50 characters)
    * For third-width link blobs, ideally 1 line at max column width (25 characters) or two lines at max column width maximum (45 characters)
  * Description beneath heading should also be succinct.
    * For half-width link blobs, roughly 3-5 lines at max column width of text (100-250 characters)
    * For third-width link blobs, roughly 3-5 lines at max column width of text (between 90 and 150 characters)
  * Call to action link should stay on a single line at max column width. Link
  content should follow [link
  guidelines](https://cfpb.github.io/design-system/components/links).
    * For half-width link blobs, 40 characters or less
    * For third-width link blobs, 30 characters or less
  * When these components are featured together (which is ideal), the amount of
  content in each component should be as close to the same number of total lines
  as possible.
    * For half-width link blobs, one or two lines different is ok
    * For third-width link blobs, a difference of one line is ok

  ### Style


  * Headings: Use H3 or H4. Do not use both.
    * H3: Use when you wish to give the blob heading text a higher level of prominence within the page hierarchy. Avoid using H3 when it will cause the heading to break to 3 lines or more.
    * H4: Use when you wish to give the heading text less prominence within the page hierarchy or when the blob set follows an H3 heading. When you select the H4 you have the option of including a minicon to the left of the heading.
  * Body copy: Avenir paragraph.

  * At breakpoints below 601: H3 automatically drops down to an H4, the
  three-column pattern transitions into a single column and stacks, and the
  mobile link style is used for the call to action link(s)


  ![](/design-system/images/uploads/halfwidthblob_style_mockup.png)


  ![](/design-system/images/uploads/third_width_link_blob_style.png)
related_items: >-
  * [Info Unit Groups: image and
  text](https://cfpb.github.io/design-system/components/info-unit-groups-image-and-text)

  * [Links](https://cfpb.github.io/design-system/components/links)

  * [Typography](https://cfpb.github.io/design-system/foundation/typography)
last_updated: 2019-08-30T16:07:00.000Z
---

