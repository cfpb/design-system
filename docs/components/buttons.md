---
variations:
  - variation_code_snippet: |-
      <button class="a-btn" title="Test button">Primary button</button>

      <!--
      Alternatives:
      <a href="#" class="a-btn" title="Test button">Anchor Tag</a>
      <input type="submit" value="Input Tag" class="a-btn">
      -->
    variation_description: >-
      Use primary buttons for actions that go to the next step.


      The Primary button is an atom in our atomic design standards. You can
      apply the a-btn class to a link, button and submit input field to receive
      the atomic button styles.


      For accessibility reasons, use the semantic `<button>` instead of a link
      when possible.
    variation_jinja_code_snippet: |-
      ```
      {% macro render(value) -%}

      <div class="o-form-actions">
          <input class="a-btn a-btn__super form-actions_item"
                 type="submit"
                 value="{{ value.button_text }}">
      </div>

      {%- endmacro %}
      ```
    variation_name: Primary button
  - variation_code_snippet: >-
      <button class="a-btn a-btn__secondary" title="Test button">Secondary
      button</button>


      <!--

      Alternatives:

      <a href="#" class="a-btn hover" title="Test button">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn hover">

      -->
    variation_description: Use secondary buttons for actions that happen on the current page.
    variation_jinja_code_snippet: |-
      ```
      this is a jinja
      ```
    variation_name: Secondary button
  - variation_code_snippet: >

      <button class="a-btn a-btn__warning" title="Test button">Destructiv
      button</button>


      <!--

      Alternatives:

      <a href="#" class="a-btn a-btn__warning">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__warning">

      -->
    variation_description: ''
    variation_jinja_code_snippet: |-
      ```
      this is a jinja
      ```
    variation_name: Destructive action button
  - variation_code_snippet: >-
      <button class="a-btn a-btn__disabled" title="Test button">Disabled
      button</button>


      <!--

      Alternatives:

      <a href="#" class="a-btn a-btn__disabled">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__disabled">

      <button class="a-btn" disabled title="Test button">Button Tag w/ disabled
      attr</button>

      -->
    variation_description: ''
    variation_name: Disabled button
  - variation_code_snippet: >-
      <button class="a-btn a-btn__super" title="Test button">Super
      button</button>


      <!--

      Alternatives:

      <a href="#" class="a-btn a-btn__super">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__super">

      -->
    variation_name: Super button
  - variation_code_snippet: >-
      <button class="a-btn a-btn__full-on-xs" title="Test button">Full-width
      Button</button>


      <!--

      Alternatives:

      <a href="#" class="a-btn a-btn__full-on-xs">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__full-on-xs">

      -->
    variation_description: _Reduce screen size to see these in action._
    variation_name: Full-width button
  - variation_code_snippet: >-
      <!--

      Note: Due to inherent whitespace created between inline elements,
      whitespace must be removed between the icon and its wrapping span element.

      -->


      <button class="a-btn">
          <span class="a-btn_icon
                       a-btn_icon__on-left">
             {% include icons/error.svg %}
          </span>
          Close
      </button>


      <button class="a-btn">
          Close
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              {% include icons/error.svg %}
          </span>
      </button>
    variation_description: ''
    variation_name: Icon button
  - variation_code_snippet: |-
      <button class="a-btn">
          Submit your complaint
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              {% include icons/updating.svg %}
          </span>
      </button>
    variation_description: ''
    variation_jinja_code_snippet: TBD
    variation_name: Animated icon button
  - variation_code_snippet: |-
      <div class="m-btn-group">
          <button class="a-btn">Yes</button>
          <button class="a-btn">No</button>
          <button class="a-btn">Maybe So</button>
      </div>
    variation_jinja_code_snippet: ''
    variation_name: Button group
  - variation_code_snippet: |-
      <div class="m-btn-group">
          <button class="a-btn a-btn__super">Yes</button>
          <button class="a-btn a-btn__super">No</button>
          <button class="a-btn a-btn__super">Maybe So</button>
      </div>
    variation_name: Super button group
  - variation_code_snippet: '<button href="#" class="a-btn a-btn__link">Default state</button>'
    variation_name: Primary Button link
  - variation_code_snippet: >-
      <button href="#" class="a-btn a-btn__link a-btn__secondary">Default
      state</button>
    variation_name: Secondary button link
  - variation_code_snippet: >-
      <button href="#" class="a-btn a-btn__link a-btn__warning">Default
      state</button>
    variation_name: Warning button link
  - variation_code_snippet: ''
    variation_description: >-
      For multiple actions in a single button unit. Prone to error, avoid if
      possible.
    variation_name: Compound button
  - variation_code_snippet: ''
    variation_description: >-
      When paired with a primary action, indicate the destructive action using a
      destructive action button link to the right of the primary button.
    variation_name: Destructive action
title: Buttons
layout: variation
section: components
secondary_section: Forms
status: Released
description: >-
  Buttons signal actions. They should be used sparingly; each additional button
  on a page reduces the visual prominence of a call to action. In contrast,
  [links](https://test-things.github.io/design-system/components/link) should
  lead users to another page or further information.
variation_groups:
  - variation_group_name: Primary buttons
    variations:
      - variation_name: Primary button
        variation_description: >-
          Use primary buttons for actions that go to the next step.


          The Primary button is an atom in our atomic design standards. You can
          apply the a-btn class to a link, button and submit input field to
          receive the atomic button styles.
        variation_code_snippet: |-
          <button class="a-btn" title="Test button">Primary button</button>

          <button class="a-btn" title="Test button">Primary button</button>
        variation_jinja_code_snippet: |-
          <button class="a-btn" title="Test button">Primary button</button>

          <button class="a-btn" title="Test button">Primary button</button>
        Implementation: |-
          <button class="a-btn" title="Test button">Primary button</button>

          <button class="a-btn" title="Test button">Primary button</button>
      - variation_name: Primary button
        variation_description: >-
          Use primary buttons for actions that go to the next step.


          The Primary button is an atom in our atomic design standards. You can
          apply the a-btn class to a link, button and submit input field to
          receive the atomic button styles.
        variation_code_snippet: |-
          <button class="a-btn" title="Test button">Primary button</button>

          <button class="a-btn" title="Test button">Primary button</button>
        variation_jinja_code_snippet: |-
          <button class="a-btn" title="Test button">Primary button</button>

          <button class="a-btn" title="Test button">Primary button</button>
        Implementation: |-
          <button class="a-btn" title="Test button">Primary button</button>

          <button class="a-btn" title="Test button">Primary button</button>
  - variation_group_name: Secondary buttons
    variations:
      - variation_description: |-
          <button class="a-btn" title="Test button">Primary button</button>

          <button class="a-btn" title="Test button">Primary button</button>
        variation_code_snippet: |-
          <button class="a-btn" title="Test button">Primary button</button>

          <button class="a-btn" title="Test button">Primary button</button>
        variation_jinja_code_snippet: |-
          <button class="a-btn" title="Test button">Primary button</button>

          <button class="a-btn" title="Test button">Primary button</button>
        variation_name: Foo button
usage: >-
  <h3>Use cases</h3>


  Use primary buttons for actions that go to the next step. Use secondary
  buttons for actions that happen on the current page. Generous white space
  lends focus and makes buttons more actionable. Avoid using multiple primary
  buttons on a single page; there can be multiple secondary buttons per page.


  Use an animated icon in a button to reassure the user that the action they are
  attempting to perform is functioning as intended.


  <h3>Content guidelines</h3>


  Labels should be written in sentence case. Use verbs and an active voice.
  Language should be clear, succinct, and informative. Limit the copy length to
  22 characters.


  Use icons consistently. Each icon should be used exclusively for one action.
  Icons appear to the left of the button text. Buttons that have “forward”
  actions have icons to the right of the text, and those with “back” actions
  have icons to the left.


  <h3>Code</h3>


  The cf-buttons component provides extensions to the basic button styles.


  cf-core and cf-icons components are all dependencies of this component.


  NOTE: If you use cf-buttons.less directly, be sure to run the file through
  Autoprefixer, or your compiled Capital Framework CSS will not work perfectly
  in older browsers.
restrictions:
  - restrictions_do: |-
      Test

      <button class="a-btn" title="Test button">Short label</button>
    restrictions_do_not: >-
      Test


      <button class="a-btn" title="Test button">This label is much, much too
      long</button>
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
accessibility: ''
related_items: '- related items'
last_updated: 2020-01-28T15:55:47.394Z
research: ''
help_us: "More information can be found at:\n* http://cfpb.github.io/design-manual/page-components/buttons.html\t\n* https://cfpb.github.io/capital-framework/components/cf-buttons/"
---
