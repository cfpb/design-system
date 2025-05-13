---
layout: variation
section: patterns
status: Released
variation_groups:
  - variations:
      - variation_is_deprecated: false
        variation_name: 25/75 info unit
        variation_description: >-
          An image is required in a 25/75 info unit. 


          ![Info unit group: example of 25/75](/design-system/images/uploads/2575example_desktop-1-.jpg "Info unit group: example of 25/75")![]()
        variation_jinja_code_snippet: ""
        variation_implementation: ""
        variation_specs: ""
      - variation_code_snippet: ""
        variation_description: >-
          An image is optional in a 50/50 info unit. 


          ![Image showing layout of a 50/50 image and text component](/design-system/images/uploads/50_50_intro_mockup.png)
        variation_jinja_code_snippet: >-
          File in https://github.com/cfpb/consumerfinance.gov:


          https://github.com/cfpb/consumerfinance.gov/blob/e67d1ad321551c221c01eaa62589dfdd1177d1dc/cfgov/jinja2/v1/_includes/organisms/half-width-link-blob-group.html
        variation_name: 50/50 info unit
        variation_specs: ""
      - variation_code_snippet: ""
        variation_description: >-
          An image is optional in a 33/33/33 info unit. 


          ![Image of a 33/33/33 image and text component](/design-system/images/uploads/33-33-33_image_text.jpg)
        variation_jinja_code_snippet: >-
          File in https://github.com/cfpb/consumerfinance.gov:


          https://github.com/cfpb/consumerfinance.gov/blob/e67d1ad321551c221c01eaa62589dfdd1177d1dc/cfgov/jinja2/v1/_includes/organisms/third-width-link-blob-group.html
        variation_name: 33/33/33 info unit
        variation_specs: ""
    variation_group_name: Types
    variation_group_description: "There are three types of info units: 25/75, 50/50, and 33/33/33. "
guidelines: >-
  ### Content guidelines

  - Content in info units should be succinct. Do not use info units for multiple paragraphs of copy. 

  - In addition to being able to give each info unit a heading and description, you may optionally give the info unit group a heading and introduction paragraph. 

  - Each info unit type may use an H2, H3, or H4 heading depending on where the info unit sits within the page's heading hierarchy. 


  #### 25/75 info unit


  - Heading: Maximum 60 characters 

  - Description: Maximum 275 characters 

  - Call to action: Maximum 65 characters


  #### 50/50 info unit

  Ideally, use an even number of 50/50 info units as a group. The content in each info unit should be roughly the same number of lines if possible. 

  - Heading: Maximum 30 characters

  - Description: If including an image, maximum 130 characters. If not including an image, maximum 250 characters. 

  - Call to action: Maximum 40 characters


  #### 33/33/33 info unit

  Ideally, group 33/33/33 info units in multiples of three (3, 6, 9, etc.). The content in each info unit should be roughly the same number of lines if possible. 

  - Heading: Maximum 30 characters

  - Description: Maximum 130 characters (previously 90-150)

  - Call to action: Maximum 40 characters


  ### Image guidelines

  Images can be illustrations or photos. 


  #### 25/75 info unit

  - Image required

  - Must be a 1:1 ratio

  - Can be a square or circle crop


  #### 50/50 info unit

  - Image optional

  - Can be a 1:1 or 16:9 ratio


  #### 33/33/33 info unit

  - Image optional

  - Must be a 1:1 ratio

  - Can be a square or circle crop


  ### Stylistic guidelines

  - Option to include a rule above an info unit group to separate it from the previous section on the page

  - Option to include a rule between rows of info units (or between each info unit in - If an info unit group contains both an image and a call-to-action link, option to have the image link to the call-to-action URL. If there are multiple call-to-action links, the image will link to the first link.
eyebrow: Main content
title: Info unit groups
description: "Info unit groups are used to draw a user’s eye to key information
  on a page. An info unit can contain an image, brief description, and
  call-to-action link to lead a user to additional content on a child or sibling
  page. "
use_cases: >-
  ### When to use

  - When a call-to-action link, leading users to a deeper page in the section, needs a visual highlight on the page

  - When an image or illustration helps users better understand the purpose of content

  - To help establish a hierarchy of linked content on a page

  - For brief content


  ### When other options are better

  - When there are multiple paragraphs of copy
behavior: "All info units stack to one column at small screen size. "
accessibility: ""
related_items: |-
  * [Links](https://cfpb.github.io/design-system/components/links)
  * [Typography](https://cfpb.github.io/design-system/foundation/typography)
last_updated: 2019-08-30T16:07:00.000Z
---
