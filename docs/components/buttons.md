---
title: Buttons
permalink: components/buttons
layout: component
collection_name: components
section: components
status: Proposed
intro: >-
  Buttons signal actions. They should be used sparingly; each additional button
  on a page reduces the visual prominence of a call to action. In contrast,
  [links](https://test-things.github.io/design-system/components/link) should
  lead users to another page or further information.


  The cf-buttons component provides extensions to the basic button styles for
  Capital Framework.


  cf-core and cf-icons components are all dependencies of this component.


  NOTE: If you use cf-buttons.less directly, be sure to run the file through
  Autoprefixer, or your compiled Capital Framework CSS will not work perfectly
  in older browsers.
variations:
  - variation_code_snippet: |-
      Default State<br>
      <button class="a-btn" title="Test button">Button</button>
      <br>Hovered state<br>
      <button class="a-btn hover" title="Test button">Button</button>
      <br>Focused state<br>
      <button class="a-btn focus" title="Test button">Button</button>
      <br>Active state<br>
      <button class="a-btn active" title="Test button">Button</button>

      <!--
      Alternatives for Default state:
      <a href="#" class="a-btn" title="Test button">Anchor Tag</a>
      <input type="submit" value="Input Tag" class="a-btn">

      Alternatives for Hovered state:
      <a href="#" class="a-btn hover" title="Test button">Anchor Tag</a>
      <input type="submit" value="Input Tag" class="a-btn hover">

      Alternatives for Focused state:
      <a href="#" class="a-btn focus" title="Test button">Anchor Tag</a>
      <input type="submit" value="Input Tag" class="a-btn focus">

      Alternatives for Active state:
      <a href="#" class="a-btn active" title="Test button">Anchor Tag</a>
      <input type="submit" value="Input Tag" class="a-btn active">
      -->
    variation_description: >-
      Use primary buttons for actions that go to the next step.


      The Primary button is an atom in our atomic design standards. You can
      apply the a-btn class to a link, button and submit input field to receive
      the atomic button styles.


      For accessibility reasons, use the semantic <button> instead of a link
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
    variation_specs: "Element | Variable type | Variable | Value\n--- | --- | --- | ---\nTypeface | - | - | Avenir Next Medium\t\nText size | @btn-font-size | @base-font-size-px;\t| 16px\t\nText color | @btn-text | @white; | White (#ffffff)\t\nBackground | @btn-bg: | @pacific; | Pacific (#0072ce)\nBackground (hover) | @btn-bg-hover: | @dark-pacific; | Dark Pacific (#0050b4)\nBackground (active)  | @btn-bg-active: | @navy; | Navy (#254b87)\nTop/bottom padding | @btn-v-padding | 8px; | 8px\t\nLeft/right padding | @btn-h-padding | 14px; | 14 px\t\nBorder radius | @btn-border-radius-size | 4px; | 4px\t\nPadding modifier | @btn-v-padding-modifier-ie: | 0.8; | -\t\nOutline color | @btn-bg: | @pacific; | Pacific (#0072ce)\nOutline size | | | Dotted 1px\nOutline offset | | | 1px\n"
  - variation_code_snippet: >-
      Default state<br>

      <button class="a-btn a-btn__secondary" title="Test button">Button</button>

      <br>Hovered state<br>

      <button class="a-btn a-btn__secondary hover" title="Test
      button">Button</button>

      <br>Focused state<br>

      <button class="a-btn a-btn__secondary focus" title="Test
      button">Button</button>

      <br>Active state<br>

      <button class="a-btn a-btn__secondary active" title="Test
      button">Button</button>


      <!--

      Alternatives for Default state:

      <a href="#" class="a-btn hover" title="Test button">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn hover">


      Alternatives for Hovered state:

      <a href="#" class="a-btn a-btn__secondary hover">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__secondary
      hover">


      Alternatives for Focused state:

      <a href="#" class="a-btn a-btn__secondary focus">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__secondary
      focus">


      Alternatives for Active state:

      <a href="#" class="a-btn a-btn__secondary active">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__secondary
      active">

      -->
    variation_description: Use secondary buttons for actions that happen on the current page.
    variation_jinja_code_snippet: |-
      ```
      this is a jinja
      ```
    variation_name: Secondary button
    variation_specs: "Element | Variable type | Variable | Value\n--- | --- | --- | ---\nTypeface | - | - | Avenir Next Medium\t\nText size | @btn-font-size | @base-font-size-px;\t| 16px\t\nText color | @btn__secondary-text: | @white; | White (#ffffff)\t\nBackground | @btn__secondary-bg: | @gray; | Gray (#5a5d61)\nBackground (hover) | @btn__secondary-bg-hover: | @dark-gray; | Dark gray (#43484e)\nBackground (active) | @btn__secondary-bg-active: | @black; | Black (#101820)\nTop/bottom padding | @btn-v-padding | 8px; | 8px\t\nLeft/right padding | @btn-h-padding | 14px; | 14 px\t\nBorder radius | @btn-border-radius-size | 4px; | 4px\t\nPadding modifier | @btn-v-padding-modifier-ie: | 0.8; | -\t\nOutline color | @btn-bg: | @gray; | Gray (#5a5d61)\nOutline size | | | Dotted 1px\nOutline offset | | | 1px"
  - variation_code_snippet: >
      Default State<br>

      <button class="a-btn a-btn__warning" title="Test button">Button</button>

      <br>Hovered state<br>

      <button class="a-btn a-btn__warning hover" title="Test
      button">Button</button>

      <br>Focused state<br>

      <button class="a-btn a-btn__warning focus" title="Test
      button">Button</button>

      <br>Active state<br>

      <button class="a-btn a-btn__warning active" title="Test
      button">Button</button>


      <!--

      Alternatives for Default state:

      <a href="#" class="a-btn a-btn__warning">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__warning">


      Alternatives for Hovered state:

      <a href="#" class="a-btn a-btn__warning hover">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__warning hover">


      Alternatives for Focused state:

      <a href="#" class="a-btn a-btn__warning focus">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__warning focus">


      Alternatives for Active state:

      <a href="#" class="a-btn a-btn__warning active">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__warning
      active">

      -->
    variation_description: ''
    variation_jinja_code_snippet: |-
      ```
      this is a jinja
      ```
    variation_name: Destructive action button
    variation_specs: "Element | Variable type | Variable | Value\n--- | --- | --- | ---\nTypeface | - | - | Avenir Next Medium\t\nText size | @btn-font-size | @base-font-size-px;\t| 16px\t\nText color | @btn-text | @white; | White (#ffffff)\t\nBackground | @btn__warning-bg: | @red; | Red (#d14124)\nBackground (hover) | @btn__warning-bg-hover: | @dark-red; | Dark red (#b63014)\nBackground (active)  | @btn__warning-bg-active: | @dark-gray; | Dark gray (#43484e)\nTop/bottom padding | @btn-v-padding | 8px; | 8px\t\nLeft/right padding | @btn-h-padding | 14px; | 14 px\t\nBorder radius | @btn-border-radius-size | 4px; | 4px\t\nPadding modifier | @btn-v-padding-modifier-ie: | 0.8; | -\t\nOutline color | @btn-bg: | @red; | Red (#d14124)\nOutline size | | | Dotted 1px\nOutline offset | | | 1px"
  - variation_code_snippet: |-
      <a href="#" class="a-btn active" title="Test button">Anchor Tag</a>
      <button class="a-btn active" title="Test button">Button Tag</button>
      <input type="submit" value="Input Tag" class="a-btn active">
    variation_description: ''
    variation_name: Disabled button
    variation_specs: ''
  - variation_code_snippet: |-
      Default State
      <button class="a-btn" title="Test button">Button Tag</button>

      Hover state
      <button class="a-btn hover" title="Test button">Button Tag</button>

      Focused state
      <button class="a-btn focus" title="Test button">Button Tag</button>

      Active state
      <button class="a-btn active" title="Test button">Button Tag</button>
    variation_name: Super button
  - variation_code_snippet: >-
      Default State<br>

      <button class="a-btn a-btn__full-on-xs" title="Test
      button">Button</button>


      <!--

      Alternatives for Default state:

      <a href="#" class="a-btn a-btn__full-on-xs">Anchor Tag</a>

      <input type="submit" value="Input Tag" class="a-btn a-btn__full-on-xs">

      -->
    variation_description: _Reduce screen size to see these in action._
    variation_name: Full-width button
    variation_specs: "Element | Variable type | Variable | Value\n--- | --- | --- | ---\nTypeface | - | - | Avenir Next Medium\t\nText size | @btn-font-size | @base-font-size-px;\t| 16px\t\nText color | @btn-text | @white; | White (#ffffff)\t\nBackground | @btn-bg: | @pacific; | Pacific (#0072ce)\nBackground (hover) | @btn-bg-hover: | @dark-pacific; | Dark Pacific (#0050b4)\nBackground (active)  | @btn-bg-active: | @navy; | Navy (#254b87)\nTop/bottom padding | @btn-v-padding | 8px; | 8px\t\nLeft/right padding | @btn-h-padding | 14px; | 14 px\t\nBorder radius | @btn-border-radius-size | 4px; | 4px\t\nPadding modifier | @btn-v-padding-modifier-ie: | 0.8; | -\t\nOutline color | @btn-bg: | @pacific; | Pacific (#0072ce)\nOutline size | | | Dotted 1px\nOutline offset | | | 1px"
  - variation_code_snippet: >-
      <!--

      Note: Due to inherent whitespace created between inline elements,
      whitespace must be removed between the icon and its wrapping span element.

      -->


      Primary button with icon on the left<br>

      <button class="a-btn">
          Close
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              <img src="/design-system/assets/icons/error.svg" class="cf-icon-svg" />
          </span>
      </button>

      <br>Secondary button with icon on the left<br>

      <button class="a-btn a-btn__secondary">
          Close
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              <img src="/design-system/assets/icons/error.svg" class="cf-icon-svg" />
          </span>
      </button>

      <br>Warning button with icon on the left<br>

      <button class="a-btn a-btn__warning">
          Close
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              <img src="/design-system/assets/icons/error.svg" class="cf-icon-svg" />
          </span>
      </button>

      <br>Disabled button with icon on the left<br>

      <button class="a-btn a-btn__disabled">
          Close
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              <img src="/design-system/assets/icons/error.svg" class="cf-icon-svg" />
          </span>
      </button><br>Primary button with icon on the left<br>

      <button class="a-btn">
          Close
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              <img src="/design-system/assets/icons/error.svg" class="cf-icon-svg" />
          </span>
      </button>

      <br>Secondary button with icon on the left<br>

      <button class="a-btn a-btn__secondary">
          Close
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              <img src="/design-system/assets/icons/error.svg" class="cf-icon-svg" />
          </span>
      </button>

      <br>Warning button with icon on the left<br>

      <button class="a-btn a-btn__warning">
          Close
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              <img src="/design-system/assets/icons/error.svg" class="cf-icon-svg" />
          </span>
      </button>

      <br>Disabled button with icon on the left<br>

      <button class="a-btn a-btn__disabled">
          Close
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              <img src="/design-system/assets/icons/error.svg" class="cf-icon-svg" />
          </span>
      </button>
    variation_description: ''
    variation_name: Icon button
    variation_specs: >-
      Specs table doesn't really apply since there's primary, secondary,
      warning, and disabled buttons in this variation.
  - variation_code_snippet: |-
      <button class="a-btn">
          Submit your complaint
          <span class="a-btn_icon
                       a-btn_icon__on-right">
              <img src="/design-system/assets/icons/updating.svg" class="cf-icon-svg" />
          </span>
      </button>
    variation_description: ''
    variation_jinja_code_snippet: TBD
    variation_name: Animated icon button
  - variation_code_snippet: |-
      Primary button group<br>
      <div class="m-btn-group">
          <button class="a-btn">Yes</button>
          <button class="a-btn">No</button>
          <button class="a-btn">Maybe So</button>
      </div>
      <br>Super button group<br>
      <div class="m-btn-group">
          <button class="a-btn a-btn__super">Yes</button>
          <button class="a-btn a-btn__super">No</button>
          <button class="a-btn a-btn__super">Maybe So</button>
      </div>
    variation_jinja_code_snippet: ''
    variation_name: Button group
    variation_specs: TBD
  - variation_code_snippet: >-
      __Primary button link__<br>


      <button href="#" class="a-btn a-btn__link">Default state</button>


      <button href="#" class="a-btn a-btn__link hover">Hovered state</button>


      <button href="#" class="a-btn a-btn__link focus">Focused state</button>


      <button href="#" class="a-btn a-btn__link active">Active state</button>


      <br>__Secondary button link__<br>


      <button href="#" class="a-btn a-btn__link a-btn__secondary">Default
      state</button>


      <button href="#" class="a-btn a-btn__link a-btn__secondary hover">Hovered
      state</button>


      <button href="#" class="a-btn a-btn__link a-btn__secondary focus">Focused
      state</button>


      <button href="#" class="a-btn a-btn__link a-btn__secondary active">Active
      state</button>


      <br>__Warning button link__<br>


      <button href="#" class="a-btn a-btn__link a-btn__warning">Default
      state</button>


      <button href="#" class="a-btn a-btn__link a-btn__warning hover">Hovered
      state</button>


      <button href="#" class="a-btn a-btn__link a-btn__warning focus">Focus
      state</button>


      <button href="#" class="a-btn a-btn__link a-btn__warning active">Active
      state</button>
    variation_name: Button link
    variation_specs: TBD
  - variation_code_snippet: TBD
    variation_description: >-
      For multiple actions in a single button unit. Prone to error, avoid if
      possible.
    variation_name: Compound button
    variation_specs: TBD
  - variation_code_snippet: TBD
    variation_description: >-
      When paired with a primary action, indicate the destructive action using a
      destructive action button link to the right of the primary button.
    variation_name: Destructive action
    variation_specs: TBD
usage: >-
  **Use cases**


  Use primary buttons for actions that go to the next step. Use secondary
  buttons for actions that happen on the current page. Generous white space
  lends focus and makes buttons more actionable. Avoid using multiple primary
  buttons on a single page; there can be multiple secondary buttons per page.


  Use an animated icon in a button to reassure the user that the action they are
  attempting to perform is functioning as intended.


  **Content guidelines**


  Labels should be written in sentence case. Use verbs and an active voice.
  Language should be clear, succinct, and informative. Limit the copy length to
  22 characters.


  Use icons consistently. Each icon should be used exclusively for one action.
  Icons appear to the left of the button text. Buttons that have “forward”
  actions have icons to the right of the text, and those with “back” actions
  have icons to the left.
accessibility: TBD
research: TBD
related_items: '- related items'
help_us: 1TBD
---
