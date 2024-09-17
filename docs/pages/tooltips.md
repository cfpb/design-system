---
title: Tooltips
collection_name: pages
layout: variation
section: components
status: Beta
description: A tooltip is a short descriptive message that appears when a user
  hovers or focuses on an element. They display helpful but non-critical
  information and are useful in space-constrained user interfaces.
variation_groups:
  - variations:
      - variation_is_deprecated: false
        variation_code_snippet: >+
          The APR for the World Bank Platinum Credit Card is 9.7% <span
          data-tooltip="relevant-tooltip">{% include icons/help-round.svg
          %}</span>


          <template id="relevant-tooltip">
              <div class="tippy-heading">This data is accurate as of June 2023</div>
              <div class="tippy-body">APRs change over time and are specific to the applicant. Check rates before applying.</div>
          </template>

    variation_group_name: Standard tooltip
    variation_group_description: ""
guidelines: Tooltips should be activated by hovering or focusing over a help
  (question mark) icon that is next to text that requires additional clarity.
  They contain standard size body text and an optional `h3` heading.
eyebrow: Components
behavior: Pressing the `esc` key should dismiss all open tooltips. When a
  tooltip is at the edge of the user's viewport, it should automatically
  reorient itself away from the edge of the screen to prevent content clipping.
accessibility: >-
  Tooltips are progressive enhancements for the `title` attribute, and will
  display as the `title` attribute if the component doesn’t initialize.


  When testing tooltips for accessibility, ensure they are compliant with [USWDS' guidelines](https://designsystem.digital.gov/components/tooltip/accessibility-tests/).
related_items: ""
---
