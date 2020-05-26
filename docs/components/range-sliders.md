---
title: Range Sliders
layout: variation
section: components
secondary_section: Forms
status: Released
description: Range sliders allow the user to select a value between a defined
  minimum and maximum range.
variation_groups:
  - variations:
      - variation_code_snippet: ""
        variation_description: |-
          ![](/design-system/images/uploads/slider-default.png)

          ![](/design-system/images/uploads/slider-focus.png)
        variation_name: ""
        variation_specs: |-
          #### Default
          Track
          - Height: 9 px
          - Border: 1 px, Gray 40 (#b4b5b6)
          - Background: Gray 80 (#75787b)

          Handle
          - Border: 1 px, Gray 40 (#b4b5b6)
          - Background: 45 px x 45 px, Gray 10 (#e7e8e9)

          #### Focus
          - Border: 2 px, Pacific (#0072ce)
          - Background: Pacific 20 (#d6e8fa)
          #### 
    variation_group_name: Standard range slider
use_cases: ""
content_guidelines: >-
  Range sliders can work well for discovery and education, where the inputs are
  [a relative quantity and not a specific numeric
  input](https://medium.com/@paulvddool/sliders-are-bad-practice-b56c3b7a6e19).
  As an example, users can narrow a list of flight options on kayak.com with
  sliders that show a range of takeoff times. Sliders are an elegant and
  intuitive way to allow the user to discover which takeoff times will yield the
  lowest fares.


  Because they’re imprecise and difficult to manipulate, range sliders are not a good choice when the user is likely to have a specific number that they want to input. If you choose to implement a slider in this latter case, consider adding steppers or an input box as an alternative means of entering the same data. Also consider the balance between the length of the slider and the number of data points it covers (the range as well as how discrete the points are). The more points to choose from, the harder it is for the user to target a specific number.
behavior: ""
accessibility: Make sure that sliders are accessible by keyboard using the arrow keys
last_updated: 2020-01-28T15:55:47.394Z
research: ""
---
