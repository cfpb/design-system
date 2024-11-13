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

  Buttons that appear in a group together with other buttons should be wrapped
  in a container with the `m-btn-group` class to properly space the buttons
  across screen sizes.
variation_groups:
  - variation_group_name: Types
    variation_group_description: ''
    variations:
      - variation_code_snippet: >-
          <div class="m-btn-group">
            <button class="a-btn" title="Default state">Default state</button>

            <button class="a-btn hover" title="Hovered state">Hovered state</button>

            <button class="a-btn focus" title="Focused state">Focused state</button>

            <button class="a-btn active" title="Active state">Active state</button>
          </div>
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
          <div class="m-btn-group">
            <button class="a-btn a-btn--secondary" title="Default state">Default
            state</button>

            <button class="a-btn a-btn--secondary hover" title="Hovered state">Hovered state</button>

            <button class="a-btn a-btn--secondary focus" title="Focused state">Focused state</button>

            <button class="a-btn a-btn--secondary active" title="Active state">Active state</button>
          </div>
        variation_description: Use a secondary button for actions that happen on the current page.
        variation_name: Secondary button
        variation_specs: ''
      - variation_code_snippet: >-
          <div class="m-btn-group">
            <button class="a-btn a-btn--disabled" title="Default state"
            disabled>Default state</button>

            <button class="a-btn a-btn--disabled hover" title="Hovered state" disabled>Hovered state</button>

            <button class="a-btn a-btn--disabled focus" title="Focused state" disabled>Focused state</button>
          </div>
        variation_name: Disabled button
        variation_specs: ''
      - variation_code_snippet: >-
          <div class="m-btn-group">
            <button class="a-btn a-btn--warning" title="Default state">Default
            state</button>

            <button class="a-btn a-btn--warning hover" title="Hovered state">Hovered state</button>

            <button class="a-btn a-btn--warning focus" title="Focused state">Focused state</button>
          </div>
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
          <div class="m-btn-group">
            <button class="a-btn a-btn--full-on-xs" title="Default state">Default
            state</button>

            <button class="a-btn a-btn--full-on-xs hover" title="Hovered state">Hovered state</button>

            <button class="a-btn a-btn--full-on-xs focus" title="Focused state">Focused state</button>

            <button class="a-btn a-btn--full-on-xs active" title="Active state">Active state</button>
          </div>
      - variation_is_deprecated: false
        variation_name: Button with icon
        variation_description:
          An icon should appear after the text it represents. The
          only exception is the back button, in which the icon should appear
          before the button’s text. Each icon should be used exclusively and
          consistently for one action. Icons should never be underlined.
        variation_code_snippet: |-
          <div class="m-btn-group">
            <button class="a-btn">
                {% include icons/left.svg %}
                <span>Back</span>
            </button>

            <button class="a-btn">
                <span>Next</span>
                {% include icons/right.svg %}
            </button>

            <button class="a-btn a-btn--secondary">
                {% include icons/left.svg %}
                <span>Back</span>
            </button>

            <button class="a-btn a-btn--secondary">
                <span>Next</span>
                {% include icons/right.svg %}
            </button>

            <button class="a-btn a-btn--warning">
                {% include icons/left.svg %}
                <span>Back</span>
            </button>

            <button class="a-btn a-btn--warning">
                <span>Next</span>
                {% include icons/right.svg %}
            </button>

            <button class="a-btn a-btn--disabled">
                {% include icons/left.svg %}
                <span>Back</span>
            </button>

            <button class="a-btn" disabled>
                <span>Next</span>
                {% include icons/right.svg %}
            </button>

            <button class="a-btn" aria-label="Back">
                {% include icons/left.svg %}
            </button>

            <button class="a-btn" aria-label="Next">
                {% include icons/right.svg %}
            </button>
          </div>
      - variation_is_deprecated: false
        variation_name: Button with animated icon
        variation_code_snippet: >-
          <button class="a-btn">
              <span>Submit your complaint</span>
              {% include icons/updating.svg %}
          </button>
        variation_description: >
          Use an animated icon in a button to reassure the user that the action
          they are attempting to perform is functioning as intended.

          The icon can be hidden when the action is complete by adding the
          `a-btn--hide-icon` class to the button.
      - variation_is_deprecated: false
        variation_name: Button link
        variation_code_snippet: >-
          <div class="m-btn-group">
            <a class="a-btn a-btn--link" title="Default state" href="#">Default state</button>

            <a class="a-btn a-btn--link hover" title="Hovered state" href="#">Hovered state</button>

            <a class="a-btn a-btn--link focus" title="Focused state" href="#">Focused state</button>

            <a class="a-btn a-btn--link active" title="Active state" href="#">Active state</button>
          </div>

          <br>

          <div class="m-btn-group">
              <a class="a-btn" href="#">Submit</a>
              <a class="a-btn a-btn--link a-btn--secondary" href="#">
                  See Privacy Act statement
              </a>
          </div>

          <br>

          <div class="m-btn-group">
              <a class="a-btn">
                  <span>Download PDF</span>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--download" viewBox="0 0 12 19"><path d="M11.16 16.153a.477.477 0 0 1-.476.475H1.316a.476.476 0 0 1-.475-.475V3.046a.476.476 0 0 1 .475-.475h6.95l2.893 2.893zm-1.11-9.925H8.059a.575.575 0 0 1-.574-.573V3.679H1.95v11.84h8.102zm-1.234 5.604L6.388 14.26a.554.554 0 0 1-.784 0l-2.428-2.428a.554.554 0 1 1 .783-.784l1.483 1.482V7.41a.554.554 0 1 1 1.108 0v5.12l1.482-1.482a.554.554 0 0 1 .784.783z"></path></svg>
              </a>
              <button class="a-btn a-btn--link" href="#">
                  <span>Download CSV</span>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--download" viewBox="0 0 12 19"><path d="M11.16 16.153a.477.477 0 0 1-.476.475H1.316a.476.476 0 0 1-.475-.475V3.046a.476.476 0 0 1 .475-.475h6.95l2.893 2.893zm-1.11-9.925H8.059a.575.575 0 0 1-.574-.573V3.679H1.95v11.84h8.102zm-1.234 5.604L6.388 14.26a.554.554 0 0 1-.784 0l-2.428-2.428a.554.554 0 1 1 .783-.784l1.483 1.482V7.41a.554.554 0 1 1 1.108 0v5.12l1.482-1.482a.554.554 0 0 1 .784.783z"></path></svg>
              </button>
              <a class="a-btn a-btn--link a-btn--secondary" href="#">
                  <span>External link</span>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--external-link" viewBox="0 0 14 19"><path d="M13.017 3.622v4.6a.554.554 0 0 1-1.108 0V4.96L9.747 7.122a1.7 1.7 0 0 1 .13.646v5.57A1.664 1.664 0 0 1 8.215 15h-5.57a1.664 1.664 0 0 1-1.662-1.663v-5.57a1.664 1.664 0 0 1 1.662-1.662h5.57A1.65 1.65 0 0 1 9 6.302l2.126-2.126H7.863a.554.554 0 1 1 0-1.108h4.6a.554.554 0 0 1 .554.554M8.77 8.1l-2.844 2.844a.554.554 0 0 1-.784-.783l2.947-2.948H2.645a.555.555 0 0 0-.554.555v5.57a.555.555 0 0 0 .554.553h5.57a.555.555 0 0 0 .554-.554z"></path></svg>
              </a>
          </div>
        variation_description: >
          A link can be styled as a button, and vice versa.
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
