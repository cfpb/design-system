---
title: Range sliders
layout: variation
section: components
variation_groups:
  - variations:
      - variation_code_snippet: ""
        variation_description: >-
          ### Default state


          ![](/design-system/images/uploads/slider-default.png)


          ### Focus state


          ![](/design-system/images/uploads/slider-focus.png)


          View this component in use on [Planning your Social Security claiming age](https://www.consumerfinance.gov/consumer-tools/retirement/before-you-claim/). After entering your date of birth and highest annual work income and then pressing the "Get your estimates" button, you will see an interactive chart with a range slider.
        variation_name: ""
        variation_specs: ""
    variation_group_name: Standard range slider
guidelines: ""
eyebrow: Components
status: Released
description: Range sliders allow the user to select a value between a defined
  minimum and maximum range. They can work well for discovery and education, but
  because they’re imprecise and difficult to manipulate, are not the best choice
  when the user is likely to have a specific number that they want to input.
use_cases: >-
  Range sliders can work well for discovery and education, where the inputs are
  [a relative quantity and not a specific numeric
  input](https://medium.com/@paulvddool/sliders-are-bad-practice-b56c3b7a6e19).
  As an example, users can narrow a list of flight options on kayak.com with
  sliders that show a range of takeoff times. Sliders are an elegant and
  intuitive way to allow the user to discover which takeoff times will yield the
  lowest fares.


  Because they’re imprecise and difficult to manipulate, range sliders are not a good choice when the user is likely to have a specific number that they want to input. If you choose to implement a slider in this latter case, consider adding steppers or an input box as an alternative means of entering the same data.


  Also consider the balance between the length of the slider and the number of data points it covers (the range, as well as how discrete the points are). The more points to choose from, the harder it is for the user to target a specific number.
behavior: ""
accessibility: Make sure that sliders are accessible by keyboard using the arrow keys.
last_updated: 2020-01-28T15:55:47.394Z
research: ""
---
