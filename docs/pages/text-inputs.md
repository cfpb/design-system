---
layout: variation
section: components
status: Released
variation_groups:
  - variation_group_name: Single line text inputs
    variations:
      - variation_code_snippet: >-
          <!--States are shown for demonstration purposes only-->

          <input class="a-text-input"
                type="text"
                id="textinput-example-default"
                placeholder="Placeholder text"
          value="Input text">

          <br><br><br>

          <h4>

          Default states

          </h4>

          <input class="a-text-input"
                type="text"
                id="textinput-example-default"
                placeholder="Placeholder text"
          value="Enabled">

          <br><br>

          <input class="a-text-input hover"
                 type="text"
                 id="textinput-example-hover"
                 placeholder="Placeholder text"
                 value="Hover">
          <br><br>

          <input class="a-text-input focus"
                 type="text"
                 id="textinput-example-focus"
                 placeholder="Placeholder text"
                 value="Focus">
          <br><br>

          <input class="a-text-input"
                 type="text"
                 id="textinput-example-disabled"
                 placeholder="Disabled"
                 disabled>
          <br>

          <br>

          <br><br>

          <h3> Validation status

          <h4>

          Success states

          </h4>

          <input class="a-text-input a-text-input__success" type="text" placeholder="Enabled" id="form-input-success" aria-describedby="form-input-success_message">

          <br><br>

          <input class="a-text-input hover"
                 type="text"
                 id="textinput-example-hover"
                 placeholder="Placeholder text"
                 value="Hover">
          <br><br>

          <input class="a-text-input focus a-text-input__success"
                 type="text"
                       id="textinput-example-success"
                 placeholder="Placeholder text"
                 value="Focus">
          <br><br><br>

          <h4>

          Warning states

          </h4>
           <input class="a-text-input a-text-input__warning" type="text" placeholder="Enabled" id="form-input-warning" aria-describedby="form-input-warning_message">
          <br><br>

          <input class="a-text-input hover"
                 type="text"
                 id="textinput-example-hover"
               placeholder="Placeholder text"
                 value="Hover">
          <br><br>

          <input class="a-text-input focus a-text-input__warning"
                 type="text"
                       id="textinput-example-warning"
                 placeholder="Placeholder text"
                 value="Focus">
          <br><br><br>

          <h4>

          Error states

          </h4>

          <input class="a-text-input a-text-input__error" type="text" placeholder="Enabled" id="form-input-error" aria-describedby="form-input-error_message">

          <br><br>

          <input class="a-text-input hover"
                 type="text"
                 id="textinput-example-hover"
                 placeholder="Placeholder text"
                 value="Hover">
          <br><br>

          <input class="a-text-input focus a-text-input__error"
                 type="text"
                       id="textinput-example-focus"
                 placeholder="Placeholder text"
                 value="Focus">
        variation_specs: ""
        variation_name: Text input
        variation_description: Use when the expected user input is a single line of
          text, for example email addresses, names, or search queries. The
          length of the input field should be proportional to the expected user
          input, so that the user can see what they've typed without having to
          scroll to reveal hidden content.
      - variation_is_deprecated: false
        variation_name: Error status
        variation_code_snippet: >-
          <!--States are shown for demonstration purposes only--><h4>

          States

          </h4>

          <input class="a-text-input a-text-input__error" type="text" placeholder="Default" id="form-input-error" aria-describedby="form-input-error_message">

          <br><br>

          <input class="a-text-input hover"
                 type="text"
                 id="textinput-example-hover"
                 placeholder="Placeholder text"
                 value="Hover">
          <br><br>

          <input class="a-text-input focus a-text-input__error"
                 type="text"
                       id="textinput-example-focus"
                 placeholder="Placeholder text"
                 value="Focus">
          <br><br>
      - variation_is_deprecated: false
        variation_name: Text input (full width)
        variation_code_snippet: |-
          <div class="m-form-field">
              <input class="a-text-input a-text-input__full"
                    type="text"
                    id="full-textinput-example"
                    placeholder="Placeholder text"
                    value="Input text">
          </div>
      - variation_is_deprecated: false
        variation_name: Text input (with button)
        variation_description: Use for simple forms where a full filter isn’t necessary.
        variation_code_snippet: |-
          <div class="o-form__input-w-btn">
              <div class="o-form__input-w-btn_input-container">
                  <input class="a-text-input" type="text" title="Test input">
              </div>
              <div class="o-form__input-w-btn_btn-container">
                  <button class="a-btn">Search</button>
              </div>
          </div>
      - variation_is_deprecated: false
        variation_name: Button inside text input
        variation_description: Use to offer the user an action to take related to the
          input, typically to clear the input.
        variation_code_snippet: >-
          <div class="m-btn-inside-input">
              <input type="text"
                  value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
                  title="Test input"
                  class="a-text-input">
              <button class="a-btn a-btn__link">
                  {% include icons/error.svg %}
                  <span class="u-visually-hidden">Clear</span>
              </button>
          </div>
      - variation_is_deprecated: false
        variation_name: Button inside text input with another button
        variation_description: This example combines both of the previous patterns,
          creating a typical site search form.
        variation_code_snippet: >-
          <div class="o-form__input-w-btn">
              <div class="o-form__input-w-btn_input-container">
                  <div class="m-btn-inside-input">
                      <input type="text"
                          value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
                          title="Test input"
                          class="a-text-input">
                      <button class="a-btn a-btn__link">
                          {% include icons/error.svg %}
                          <span class="u-visually-hidden">Clear</span>
                      </button>
                  </div>
              </div>
              <div class="o-form__input-w-btn_btn-container">
                  <button class="a-btn">Search</button>
              </div>
          </div>
    variation_group_description: ""
  - variation_group_name: Multiple line text inputs
    variations:
      - variation_is_deprecated: false
        variation_name: Text area input
        variation_description: Use when the expected user input is more than a few words
          and could span multiple lines. Make sure the input size is big enough
          that the user can see what they've typed without having to scroll to
          reveal hidden content, and small enough that the user doesn't have  to
          navigate the viewport in order to see the entire field at once.
        variation_code_snippet: |-
          <textarea class="a-text-input"
                    id="textarea-example-default"
                    placeholder="Placeholder text">Input text</textarea>
      - variation_is_deprecated: false
        variation_name: Text area input (full width)
        variation_description: |-
          <div class="m-form-field">
              <textarea class="a-text-input a-text-input__full"
                        id="full-textarea-example"
                        placeholder="Placeholder text">Input text</textarea>
          </div>
guidelines: >-
  ### Stylistic guidelines


  Choose the appropriate width for text input fields so they match the kind of information requested. This makes it easier for users to quickly grasp what’s being asked.


  For example, it’s hard to understand at a glance that a single 1,000 px-wide text field is asking for your phone number or birth date. When possible, be even more explicit with the width by dividing it into known character counts. For instance, social security number should be three characters, then two, then four. Be mindful of not getting too restrictive, however. This approach could work for phone numbers, but only if international numbers are not permitted.


  These types of inputs should always be smaller widths:


  * Middle initial

  * Date, month, or year

  * State abbreviation


  ### Content guidelines


  Text should be in sentence case. Use placeholder text for formatting examples only. Don’t use for instructions. Placeholder text disappears once a user begins typing in the field. For more information, see [Design System guidance on placeholder text](https://cfpb.github.io/design-system/components/helper-text#placeholder-text-1).
eyebrow: Components
title: Text inputs
description: Text inputs allow the user to enter any combination of letters,
  numbers, or symbols. Text input fields can span single or multiple lines.
use_cases: ""
behavior: As the screen size gets smaller, break multi-column inputs into a
  single, stacked column. Fields that are next to each other on a large screen,
  should stack at smaller screen sizes. When possible, fields should span the
  entire width of the screen at the smallest screen sizes.
accessibility: >-
  Inputs should always be paired with a `label` for accessibility reasons.


  Users of screen readers use the tab key to move focus from one form control to another. Make sure that tab focus order reflects the way you would like users to navigate through the form. Consider whether tabs should move a user down or across the page.
related_items: "* [Text input
  variables](https://cfpb.github.io/design-system/development/variables#forms-1\
  )"
last_updated: 2020-01-28T15:55:47.394Z
research: ""
---
