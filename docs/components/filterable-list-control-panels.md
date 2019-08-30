---
title: Filterable List Control Panels
layout: variation
section: components
secondary_section: Layout options
status: Proposed
description: >-
  The filter control panel allows users to whittle down number of items in a
  list to help them focus in on a specific piece of content they may be looking
  for, or find content relevant to them based on specific filter parameters,
  housed in an expandable above the list.


  More information can be found at:


  http://cfpb.github.io/design-manual/page-components/filter-control.html
variations:
  - variation_code_snippet: ''
    variation_description: >-
      ##### Collapsed


      ![filter control
      collapsed](/design-system/images/uploads/filter_collapsed.png)


      ##### Expanded


      ![Filterable list
      expanded](/design-system/images/uploads/filter_expanded.png)
    variation_name: Default filterable list
usage: >-
  **Use cases**


  Use filters in conjunction with search to help users narrow down large amounts
  of data or content.


  ##### When to use

  * When presenting more than 20 documents or listings together for users to
  browse through.

  * Users interacting with content will want to focus their searching activities
  on this specific group of content, rather than using the general site search.

  * Data has relevant characteristics to filter on, for example product and
  issue for complaint data, location and property type for HMDA, date range and
  categories for articles


  ##### When other options are better

  * The total amount of content can be skimmed in a list of 20 items or less.

  * Characteristics available as filter options, such as topics, dates, and
  categories, are not relevant to the content.

  * Search alone is sufficient for user needs


  **Content guidelines**

  * Headings and labels should be as succinct as possible, ideally 10 characters
  or less. Do not use colon (:) or other punctuation after the header.

  * Help text in text fields should be 40 characters or less.

  Answer options beneath heading should also be succinct, roughly 25 characters
  or less.

  * Headings and answer options should be sentence case (unless specifically
  proper nouns or titles)

  * Notification messaging sits below filter and above results

  * Maximum three column wide layout, options stack vertically below 601 pixels

  * Follow form patterns for grouping, layout, and messaging.


  **Behavior**


  Filters live in an expandable style element allowing controls to be hidden
  when not in use/needed.


  On page load, the filter is collapsed by default. After filter is applied it
  remains open, except for mobile breakpoint (< 601 px) where is is collapsed
  after filtering to make vertical space for the notification to be viewed on
  screen.


  When a user applies a filter setting, a notification automatically appears
  below the panel indicating number of results or errors.
accessibility: ''
research: ''
---
