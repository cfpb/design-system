---
title: Tooltips
collection_name: pages
layout: variation
section: components
status: Beta
description: A tooltip provides short, descriptive information when a user
  hovers or focuses on an element. It contains helpful but non-critical
  information and is useful in a space-constrained user interface.
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
guidelines: Be judicious in using tooltips and explore other design options that
  keep content visible before choosing to use a tooltip. Only consider using a
  tooltip for short, non-critical information in a space-constrained user
  interface. Because a tooltip is hidden until activated, ensure content within
  a tooltip is not essential for completing a task on the page. For more
  guidance, see the [USWDS tooltip
  page](https://designsystem.digital.gov/components/tooltip/).
eyebrow: Components
behavior: >
  - Activate a tooltip by hovering or focusing on a help (question mark) icon
  situated next to text.

  - Press the escape key to dismiss open tooltips.

  - When a tooltip is at the edge of the user’s viewport, it should automatically reorient itself away from the edge of the screen to prevent content clipping.
accessibility: As USWDS states, tooltips are progressive enhancements for the
  title attribute and will display as the title attribute if the component
  doesn’t initialize. When testing tooltips for accessibility, ensure they are
  compliant with [USWDS tooltip accessibility
  tests](https://designsystem.digital.gov/components/tooltip/accessibility-tests/).
related_items: ""
---
