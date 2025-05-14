---
title: Buttons
layout: variation
section: components
status: Released
description: Buttons are interactive elements that signal actions. They should
  be used sparingly as each additional button on a page reduces the visual
  prominence of a call to action. In contrast,
  [links](https://cfpb.github.io/design-system/components/links) should lead
  users to another page or further information.
variation_groups:
  - variation_group_name: Types
    variation_group_description: ''
    variations:
      - variation_code_snippet: >-
          <button class="a-btn" title="Primary">Primary</button>
        variation_description:
          Use a primary button for an action that goes to the next
          step. Avoid using multiple primary buttons on a single page; there can
          be multiple secondary buttons per page.
        variation_implementation: >-
          For accessibility reasons, use the semantic `<button>` instead of a
          link

          when possible.


          Apply the `a-btn` class to a link, button and submit input field to receive the atomic button styles. For more information, see [cf.gov refresh documentation on atomic styles](https://cfpb.github.io/consumerfinance.gov/atomic-structure/).
        variation_specs: ''
        variation_name: Primary button
      - variation_code_snippet: >-
          <button class="a-btn a-btn--secondary" title="Secondary">Secondary</button>
        variation_description: Use a secondary button for actions that happen on the current page.
        variation_name: Secondary button
        variation_specs: ''
      - variation_code_snippet: >-
          <button class="a-btn a-btn--disabled" title="Disabled"
          disabled>Disabled</button>
        variation_name: Disabled button
        variation_specs: ''
      - variation_code_snippet: >-
          <button class="a-btn a-btn--warning" title="Destructive">Destructive</button>
        variation_name: Destructive button
        variation_specs: ''
        variation_description:
          Although a destructive action can be styled as a button,
          we recommend using the [destructive
          link](https://cfpb.github.io/design-system/components/links#destructive-link)
          style for consistency across cf.gov products.
      - variation_is_deprecated: false
        variation_name: Button with icon
        variation_description:
          An icon should appear after the text it represents. The
          only exception is the back button, where the icon appears before the
          button’s text. Each icon should be used exclusively and consistently
          for one action.
        variation_code_snippet: >-
          <div class="m-btn-group">
              <button class="a-btn a-btn--secondary">{% include icons/left.svg %}
                <span>Go back</span>
              </button>
              <button class="a-btn a-btn--secondary">
                <span>Continue</span>{% include icons/right.svg %}
              </button>
          </div>

          <br>

          <button class="a-btn">
              <span>Upload file</span>{% include icons/upload.svg %}
          </button>
      - variation_is_deprecated: false
        variation_name: Button with animated icon
        variation_code_snippet: |-
          <button class="a-btn">
              <span>Submit your complaint</span>
              {% include icons/updating.svg %}
          </button>
        variation_description: >
          Use an animated icon in a button to reassure the user that the action
          they are attempting to perform is functioning as intended.

          The icon can be hidden when the action is complete by adding the `a-btn--hide-icon` class to the button.
      - variation_is_deprecated: false
        variation_name: Button group
        variation_description:
          A button group is an element that combines multiple
          buttons into a single unit, often used to represent related actions or
          options. The `m-btn-group` class wrapped around a group of buttons
          will properly space the buttons across screen sizes.
        variation_code_snippet: |-
          <div class="m-btn-group">
           <button class="a-btn a-btn--secondary">{% include icons/left.svg %}
                <span>Go back</span>
              </button>
              <button class="a-btn a-btn">
                <span>Continue</span>{% include icons/right.svg %}
              </button>
          </div>
          <br>
          <div class="m-btn-group">
              <a class="a-btn" href="#">Submit</a>
          <a class="a-btn a-btn--link a-btn--warning" href="#">
               Clear form
          </a>
          </div>
      - variation_is_deprecated: false
        variation_name: Full-width button (on x-small screens)
        variation_description: Reduce screen size to see this button in action.
        variation_code_snippet: >-
          <button class="a-btn a-btn--full-on-xs" title="Default state">Resize to mobile to see effect</button>
      - variation_is_deprecated: false
        variation_name: Button link
        variation_code_snippet: >-
          <div class="m-btn-group">
              <a class="a-btn">
                  <span>Link styled as a button</span>
                  {% include icons/download.svg %}
              </a>
              <button class="a-btn a-btn--link" href="#">
                  <span>Button styled as a link</span>
                  {% include icons/download.svg %}
              </button>
          </div>
        variation_description:
          A link can be styled as a button, and a button can be
          styled as a link. Whenever possible, use buttons for actions and links
          for navigation.
      - variation_is_deprecated: false
        variation_name: Printed button
        variation_description: When a
          [consumerfinance.gov](https://www.consumerfinance.gov/) page is
          printed, buttons are presented as links. See [Printed
          links](https://cfpb.github.io/design-system/components/links#printed-links)
          on the Links page for specifications.
use_cases: Buttons signal actions. They should be used sparingly; each
  additional button on a page reduces the visual prominence of a call to action.
  In contrast, [links](https://cfpb.github.io/design-system/components/links)
  should lead users to another page or further information.
guidelines: >-
  * Use generous white space to bring focus to a button and better make it
  appear actionable.

  * Write labels in sentence case.

  * Use verbs and an active voice.

  * Use clear, succinct, and informative language.

  * Limit the copy length to 22 characters.
behavior: ''
restrictions:
  - restrictions_do: <button class="a-btn" title="Test button">Short label</button>
    restrictions_do_not: <button class="a-btn" title="Test button">This label is
      much, much too long</button>
  - restrictions_do: |-
      <button class="a-btn">
          {% include icons/left.svg %}
          <span>Back</span>
      </button>
    restrictions_do_not: |-
      <button class="a-btn">
          <span>Back</span>
          {% include icons/left.svg %}
      </button>
eyebrow: Components
accessibility: ''
related_items: ''
last_updated: 2020-01-28T15:55:47.394Z
research: ''
---
