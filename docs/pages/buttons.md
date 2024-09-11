---
title: Buttons
layout: variation
section: components
status: Released
description: Buttons are UI elements that signal actions. They should be used
  sparingly; each additional button on a page reduces the visual prominence of a
  call to action. In contrast,
  [links](https://cfpb.github.io/design-system/components/links) should lead
  users to another page or further information.
variation_groups:
  - variation_group_name: Types
    variation_group_description: ''
    variations:
      - variation_code_snippet: >-
          <button class="a-btn" title="Default state">Default state</button>


          <button class="a-btn hover" title="Hovered state">Hovered state</button>


          <button class="a-btn focus" title="Focused state">Focused state</button>


          <button class="a-btn active" title="Active state">Active state</button>
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
          <button class="a-btn a-btn--secondary" title="Default state">Default
          state</button>


          <button class="a-btn a-btn--secondary hover" title="Hovered state">Hovered state</button>


          <button class="a-btn a-btn--secondary focus" title="Focused state">Focused state</button>


          <button class="a-btn a-btn--secondary active" title="Active state">Active state</button>
        variation_description: Use a secondary button for actions that happen on the current page.
        variation_name: Secondary button
        variation_specs: ''
      - variation_code_snippet: >-
          <button class="a-btn a-btn--disabled" title="Default state"
          disabled>Default state</button>


          <button class="a-btn a-btn--disabled hover" title="Hovered state" disabled>Hovered state</button>


          <button class="a-btn a-btn--disabled focus" title="Focused state" disabled>Focused state</button>
        variation_name: Disabled button
        variation_specs: ''
      - variation_code_snippet: >-
          <button class="a-btn a-btn--warning" title="Default state">Default
          state</button>


          <button class="a-btn a-btn--warning hover" title="Hovered state">Hovered state</button>


          <button class="a-btn a-btn--warning focus" title="Focused state">Focused state</button>
        variation_name: Destructive button
        variation_specs: ''
      - variation_name: Destructive action
        variation_code_snippet: >-
          <div class="m-btn-group">
              <button class="a-btn">Action</button>
              <button class="a-btn a-btn--link a-btn--warning">Destructive action</button>
          </div>
        variation_description: When paired with a primary action, indicate the
          destructive action using a destructive action button link to the right
          of the primary button.
        variation_specs: ''
      - variation_is_deprecated: false
        variation_name: Full-width button (on x-small screens)
        variation_description: Reduce screen size to see this button in action.
        variation_code_snippet: >-
          <button class="a-btn a-btn--full-on-xs" title="Default state">Default
          state</button>


          <button class="a-btn a-btn--full-on-xs hover" title="Hovered state">Hovered state</button>


          <button class="a-btn a-btn--full-on-xs focus" title="Focused state">Focused state</button>


          <button class="a-btn a-btn--full-on-xs active" title="Active state">Active state</button>
      - variation_is_deprecated: false
        variation_name: Button group
        variation_code_snippet: |-
          <div class="m-btn-group">
              <button class="a-btn">Yes</button>
              <button class="a-btn">No</button>
              <button class="a-btn">Maybe</button>
          </div>
      - variation_is_deprecated: false
        variation_name: Button with icon
        variation_description:
          An icon should appear after the text it represents. The
          only exception is the back button, in which the icon should appear
          before the button’s text. Each icon should be used exclusively and
          consistently for one action. Icons should never be underlined.
        variation_code_snippet: |-
          <button class="a-btn">
              <span class="a-btn__icon
                           a-btn__icon--on-left">
                 {% include icons/left.svg %}
              </span>
              Back
          </button>

          <button class="a-btn">
              Next
              <span class="a-btn__icon
                           a-btn__icon--on-right">
                  {% include icons/right.svg %}
              </span>
          </button>
      - variation_is_deprecated: false
        variation_name: Button with animated icon
        variation_code_snippet: >-
          <button class="a-btn">
              Submit your complaint
              <span class="a-btn__icon
                           a-btn__icon--on-right">{% include icons/updating.svg %}</span>
          </button>
        variation_description: >
          Use an animated icon in a button to reassure the user that the action
          they are attempting to perform is functioning as intended.
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
          <span class="a-btn__icon
                       a-btn__icon--on-left">
             {% include icons/left.svg %}
          </span>
          Back
      </button>
    restrictions_do_not: |-
      <button class="a-btn">
          Back
          <span class="a-btn__icon
                       a-btn__icon--on-right">
              {% include icons/left.svg %}
          </span>
      </button>
eyebrow: Components
accessibility: ''
related_items: ''
last_updated: 2020-01-28T15:55:47.394Z
research: ''
---
