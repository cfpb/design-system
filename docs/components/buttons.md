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
    variation_group_description: ""
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
        variation_specs: |-
          Default
          - Avenir Next Medium, 16px, (#ffffff)
          - Background: Pacific (#0072ce)
          - Top and bottom padding: 10px
          - Left and right padding: 15px
          - Border radius: 4px

          Hover
          - Background: Dark Pacific (#0050b4)

          Focused
          - Background: Dark Pacific (#0050b4)
          - Outline: Dotted 1px, Pacific (#0072ce)
          - Outline offset: 1px

          Active
          - Background: Navy (#254b87)
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
        variation_specs: |-
          Default
          - Background: Gray (#5a5d61)

          Hover
          - Background: Dark Gray (#43484e)

          Focused
          - Background: Dark Gray (#43484e)
          - Outline: Dotted 1px, Gray (#5a5d61)
          - Outline offset: 1px

          Active
          - Background: CFPB Black (#101820)
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
        variation_specs: |-
          Default/Hover/Active
          - Avenir Next Medium, 16px, Gray (#5a5d61)
          - Background: Gray 20 (#d2d3d5)
          - Cursor set to `not-allowed`

          Focused
          - Outline: Dotted 1px, Gray 20 (#d2d3d5)
          - Outline offset: 1px
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
        variation_specs: |-
          Default
          - Background: Red (#d14124)

          Hover
          - Background: Dark Red (#b63014)

          Focused
          - Background: Dark Red (#b63014)
          - Outline: Dotted 1px, Red (#d14124)
          - Outline offset: 1px

          Active
          - Background: Dark Gray (#43484e)
  - variation_group_name: Sizes
    variation_group_description: ""
    variations:
      - variation_code_snippet: >-
          <button class="a-btn a-btn__super" title="Default state">Default
          state</button>


          <button class="a-btn a-btn__super hover" title="Hovered state">Hovered state</button>


          <button class="a-btn a-btn__super focus" title="Focused state">Focused state</button>


          <button class="a-btn a-btn__super active" title="Active state">Active state</button>
        variation_description: At the designer’s discretion, use the super button on
          consumer-facing products for an important call to action.
        variation_jinja_code_snippet: |-
          {% macro render(value) -%}

          <div class="o-form-actions">
              <input class="a-btn a-btn__super form-actions_item"
                    type="submit"
                    value="{{ value.button_text }}">
          </div>

          {%- endmacro %}
        variation_name: Super buttons
        variation_specs: |-
          - Avenir Next Medium, 18px, White (#ffffff)
          - Top and bottom padding: 15px
          - Left and right padding: 30px
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
  - variation_group_name: Buttons with icons
    variations:
      - variation_name: Icon buttons
        variation_description: Example below of buttons with icon on left and icon on
          right ("back" and "next")
        variation_code_snippet: ""
      - variation_name: Animated icon
        variation_description: Use an animated icon in a button to reassure the user
          that the action they are attempting to perform is functioning as
          intended.
      - {}
    variation_group_description: Use icons consistently. Each icon should be used
      exclusively for one action. Icons appear to the left of the button text.
      Buttons that have “forward” actions have icons to the right of the text,
      and those with “back” actions have icons to the left.
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
