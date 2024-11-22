---
title: Date picker
collection_name: pages
layout: variation
section: components
description: A date picker helps users select a single date.
variation_groups:
  - variations:
      - variation_is_deprecated: false
        variation_name: Date picker
        variation_description:
          Date inputs use the browser's built-in date picker, where
          available, otherwise they fall back to a text input.
        variation_code_snippet: <input type="date" class="a-text-input" placeholder="mm/dd/yyyy">
        variation_group_name: Types
      - variation_is_deprecated: false
        variation_name: Date picker (full-width)
        variation_description:
          Date inputs may use the `a-text-input--full` modifier to
          fill their available space.
        variation_code_snippet: <input type="date" class="a-text-input
          a-text-input--full" placeholder="mm/dd/yyyy">
    variation_group_name: Types
accessibility: >-
  Inputs should always be paired with a `label` for accessibility reasons.


  Users of screen readers use the tab key to move focus from one form control to another. Make sure that tab focus order reflects the way you would like users to navigate through the form. Consider whether tabs should move a user down or across the page.
related_items: '* [Text inputs ](https://cfpb.github.io/design-system/components/text-inputs)'
---
