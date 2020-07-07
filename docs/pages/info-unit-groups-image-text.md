---
title: "Info Unit Groups: Image and text"
layout: variation
section: patterns
status: Legacy
description: >-
  In general, info unit groups provide context and lead users to additional
  content off the page. The versions called image and text components are used
  to call attention to specific linked content.


  ![Info unit group: example of 50/50 image and text component](/design-system/images/uploads/50_50_intro_mockup.png "Info unit group: example of 50/50 image and text component")
variation_groups:
  - variations:
      - variation_code_snippet: TBD
        variation_description: >-
          ![25/75 Image and text component
          example](/design-system/images/uploads/2575example_desktop.jpg "25/75
          Image and text component example")


          The 25/75 image and text component is used to draw the user’s eye to key information and navigation links, and aid comprehension by pairing content with illustration/imagery.


          When used in conjunction with half width link blob, it can help create a hierarchy of child pages or other content on the page, or can help feature a particular link over others.


          **When to use**


          * When a call-to-action, leading users to a deeper page in the section, needs a visual highlight on the page.

          * When an image or illustration helps users better understand the purpose of content.

          * Can be used for an even or odd number of items and may imply a hierarchy of information given the list style format.


          **When other options are better**


          * When content doesn’t require imagery. Suggest using the half width link blob pattern instead.

          * When there are multiple paragraphs of copy.


          <h3>Behavior</h3>


          At breakpoints below 601, the two-column pattern transitions into a single column and stacks each instance in Z-order.


          ![25-75 component behavior screenshot](/design-system/images/uploads/25-75-behavior.png "25-75 component behavior screenshot")


          <h3>Content guidelines</h3>


          * Headings should be as succinct as possible, ideally staying on a single line at max column width; 60 characters or less.

          * Description beneath heading should also be succinct, ideally no more than 4 lines at max column width; 1-2 sentences, no more than 275 characters.

          * Call to action link should be a single concise phrase starting with an action verb. Should stay on a single line at max column width; 65 characters or less.


          **Style**


          ![25-75 component style screenshot](/design-system/images/uploads/style_desktop_1.jpg "25-75 component style screenshot")


          * Imagery: 1:1 ratio, may be illustration, isocon, or photography. 150px wide for 901+ px breakpoint and 130 px wide for 900 px breakpoint and below

          * Padding: 30px padding for imagery across responsive sizes

          * Headings: Any heading size may be used, recommend H2-6
        variation_jinja_code_snippet: "*
          [info-unit-group-2.html](https://github.com/cfpb/cfgov-refresh/blob/m\
          aster/cfgov/jinja2/v1/_includes/organisms/info-unit-group-2.html) in
          cfgov-refresh"
        variation_name: 25/75 Image and text component
      - variation_code_snippet: TBD
        variation_description: >-
          ![50/50 image and text
          component](/design-system/images/uploads/50_50_intro_mockup.png "50/50
          image and text component")


          The 50/50 image and text component is used to call attention to specific linked content on a page and feature it prodominantly. At larger breakpoints, this component has a two column layout to utilize extra screen real estate.


          The half-width link blob component is a variation of the 50/50 image and text that does not use imagery.


          **When to use**


          * When a call-to-action, leading users to a deeper page in the section, needs a visual highlight on the page.

          * When an image or illustration helps users better understand the purpose of content.

          * Ideally, when an even number of these components can be featured together.

          * To help establish a hierarchy of linked content on this page.


          **When other options are better**


          * When content doesn’t require imagery. Suggest using the half-width link blob component instead.

          * When there are multiple paragraphs of copy.


          <h3>Behavior</h3>


          At breakpoints below 601, the two-column pattern transitions into a single column and stacks each instance in Z-order.


          ![50-50 component behavior screenshot](/design-system/images/uploads/50-50-behavior.png "50-50 component behavior screenshot")


          <h3>Content guidelines</h3>


          * Headings should be as succinct as possible, ideally staying on a single line at max column width (30 characters or less).

          * Description beneath heading should also be succinct, 2-3 lines at max column width of text; roughly 50-130 characters.

          * Call to action link should be one line; about 40 characters or less. Link content should follow link guidelines.


          **Style**


          ![50-50 component style screenshot](/design-system/images/uploads/50_50_style_mockup.png "50-50 component style screenshot")


          * Imagery: 16:9 ratio, recommend 1600 x 900 pixels to account for retina displays.

          * Headings: Any heading size may be used, recommend H2-4.

          * Body copy: Avenir paragraph.

          * At breakpoints below 601: Heading sizes H3 and above automatically drop down one level and the mobile link style is used for the call to action link(s).
        variation_jinja_code_snippet: >+
          *
          [info-unit-group-2.html](https://github.com/cfpb/cfgov-refresh/blob/master/cfgov/jinja2/v1/_includes/organisms/info-unit-group-2.html)
          in cfgov-refresh

        variation_name: 50/50 image and text component
use_cases: ""
content_guidelines: >-
  **When to use**

  * When a call-to-action, leading users to a deeper page in the section, needs a visual highlight on the page.

  * When an image or illustration helps users better understand the purpose of content.

  * Can be used for an even or odd number of items and may imply a hierarchy of information given the list style format.
behavior: ""
accessibility: ""
research: ""
related_items: "* Link blobs (Design System page in progress)"
last_updated: 2019-09-17T14:27:23.333Z
secondary_section: null
---
