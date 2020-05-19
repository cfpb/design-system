---
title: Buttons
layout: variation
section: components
secondary_section: Forms
status: Released
description: Buttons signal actions. They should be used sparingly; each
  additional button on a page reduces the visual prominence of a call to action.
  In contrast,
  [links](https://test-things.github.io/design-system/components/link) should
  lead users to another page or further informationz.
variation_groups:
  - variation_group_name: Standard buttons
    variation_group_description: Optional introductory paragraph
    variations:
      - variation_code_snippet: >-
          <button class="a-btn" title="Default state">Default state</button>


          <button class="a-btn hover" title="Hovered state">Hovered state</button>


          <button class="a-btn focus" title="Focused state">Focused state</button>


          <button class="a-btn active" title="Active state">Active state</button>
        variation_description: >-
          Use primary buttons for actions that go to the next step.


          The Primary button is an atom in our atomic design standards. You can apply the `a-btn` class to a link, button and submit input field to receive the atomic button styles.
        variation_jinja_code_snippet: |-
          {% macro render(value) -%}

          <div class="o-form-actions">
              <input class="a-btn form-actions_item"
                    type="submit"
                    value="{{ value.button_text }}">
          </div>

          {%- endmacro %}
        variation_implementation: >-
          For accessibility reasons, use the semantic `<button>` instead of a
          link

          when possible.
        variation_specs: Some specs could go here.
        variation_name: Primary buttons
      - variation_code_snippet: >-
          <button class="a-btn a-btn__secondary" title="Default state">Default
          state</button>


          <button class="a-btn a-btn__secondary hover" title="Hovered state">Hovered state</button>


          <button class="a-btn a-btn__secondary focus" title="Focused state">Focused state</button>


          <button class="a-btn a-btn__secondary active" title="Active state">Active state</button>
        variation_description: Use secondary buttons for actions that happen on the current page.
        variation_jinja_code_snippet: |-
          {% macro render(value) -%}

          <div class="o-form-actions">
              <input class="a-btn a-btn__secondary form-actions_item"
                    type="submit"
                    value="{{ value.button_text }}">
          </div>

          {%- endmacro %}
        variation_name: Secondary buttons
      - variation_code_snippet: >-
          <button class="a-btn a-btn__disabled" title="Default state">Default
          state</button>


          <button class="a-btn a-btn__disabled hover" title="Hovered state">Hovered state</button>


          <button class="a-btn a-btn__disabled focus" title="Focused state">Focused state</button>
        variation_jinja_code_snippet: |-
          {% macro render(value) -%}

          <div class="o-form-actions">
              <input class="a-btn a-btn__disabled form-actions_item"
                    type="submit"
                    value="{{ value.button_text }}">
          </div>

          {%- endmacro %}
        variation_name: Disabled buttons
      - variation_code_snippet: >-
          <button class="a-btn a-btn__warning" title="Default state">Default
          state</button>


          <button class="a-btn a-btn__warning hover" title="Hovered state">Hovered state</button>


          <button class="a-btn a-btn__warning focus" title="Focused state">Focused state</button>
        variation_jinja_code_snippet: |-
          {% macro render(value) -%}

          <div class="o-form-actions">
              <input class="a-btn a-btn__warning form-actions_item"
                    type="submit"
                    value="{{ value.button_text }}">
          </div>

          {%- endmacro %}
        variation_name: Destructive buttons
  - variation_group_name: Sizes
    variation_group_description: Optional introductory paragraph
    variations:
      - variation_code_snippet: >-
          <button class="a-btn a-btn__super" title="Default state">Default
          state</button>


          <button class="a-btn a-btn__super hover" title="Hovered state">Hovered state</button>


          <button class="a-btn a-btn__super focus" title="Focused state">Focused state</button>


          <button class="a-btn a-btn__super active" title="Active state">Active state</button>
        variation_description: Use super buttons to really get users' attention.
        variation_jinja_code_snippet: |-
          {% macro render(value) -%}

          <div class="o-form-actions">
              <input class="a-btn a-btn__super form-actions_item"
                    type="submit"
                    value="{{ value.button_text }}">
          </div>

          {%- endmacro %}
        variation_name: Super buttons
      - variation_code_snippet: >-
          <button class="a-btn a-btn__full-on-xs" title="Default state">Default
          state</button>


          <button class="a-btn a-btn__full-on-xs hover" title="Hovered state">Hovered state</button>


          <button class="a-btn a-btn__full-on-xs focus" title="Focused state">Focused state</button>


          <button class="a-btn a-btn__full-on-xs active" title="Active state">Active state</button>
        variation_description: Reduce screen size to see these in action.
        variation_jinja_code_snippet: |-
          {% macro render(value) -%}

          <div class="o-form-actions">
              <input class="a-btn a-btn__full-on-xs form-actions_item"
                    type="submit"
                    value="{{ value.button_text }}">
          </div>

          {%- endmacro %}
        variation_name: Full-width buttons on x-small screens
  - variation_group_name: Groups
    variations:
      - variation_code_snippet: |-
          <div class="m-btn-group">
              <button class="a-btn">Yes</button>
              <button class="a-btn">No</button>
              <button class="a-btn">Maybe So</button>
          </div>
        variation_name: Default buttton group
use_cases: >-
  Use primary buttons for actions that go to the next step. Use secondary
  buttons for actions that happen on the current page. Generous white space
  lends focus and makes buttons more actionable. Avoid using multiple primary
  buttons on a single page; there can be multiple secondary buttons per page.


  Use an animated icon in a button to reassure the user that the action they are attempting to perform is functioning as intended.
content_guidelines: >-
  Labels should be written in sentence case. Use verbs and an active voice.
  Language should be clear, succinct, and informative. Limit the copy length to
  22 characters.


  Use icons consistently. Each icon should be used exclusively for one action. Icons appear to the left of the button text. Buttons that have “forward” actions have icons to the right of the text, and those with “back” actions have icons to the left.
behavior: ""
restrictions:
  - restrictions_do: |-
      Test

      <button class="a-btn" title="Test button">Short label</button>
    restrictions_do_not: >-
      Test


      <button class="a-btn" title="Test button">This label is much, much too long</button>
  - restrictions_do: |+
      Test

      <button class="a-btn">
          <span class="a-btn_icon
                       a-btn_icon__on-left">
             {% include icons/left.svg %}
          </span>
          Back
      </button>

    restrictions_do_not: |-
      Test

      <button class="a-btn">
          Back
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              {% include icons/left.svg %}
          </span>
      </button>
accessibility: ""
related_items: "- related items"
last_updated: 2020-01-28T15:55:47.394Z
research: ""
---
