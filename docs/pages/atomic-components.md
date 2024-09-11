---
variations: []
title: Atomic components
layout: variation
section: development
status: Released
description: >-
  In general, our components employ the concept of atomic design, meaning that we break them down into atoms, molecules, and organisms,
  each successive level being more complex than the previous.
  (We do not currently use the template or page concepts as described in
  [Brad Frost's seminal article introducing atomic design](http://bradfrost.com/blog/post/atomic-web-design/)).

  Our components are composed (on the front-end) of HTML, SCSS (Sass), and JavaScript.
  If a component doesn’t have user interactions or require styling,
  then it won’t have an associated JS and/or SCSS file.

  ## CSS class name prefixes

  The atomic components have CSS class names with the prefixes `a-`, `m-`, `o-`, corresponding to atoms, molecules, and organisms. Additionally, utility classes have the `u-` prefix. These classes are for one-off adjustments, that are shared
  across several components and don't fit neatly into the atomic hierarchy.

use_cases: ''
guidelines: ''
behavior: ''
accessibility: ''
last_updated: 2020-01-28T15:55:47.394Z
eyebrow: General conventions
research: ''
---
