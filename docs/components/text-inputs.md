---
title: Text Inputs
permalink: /components/text-inputs
layout: component
collection_name: components
section: components
status: Proposed
intro: >-
  For information on Form alerts, see the notifications section


  This page is under active development. Information is being moved into it from
  these pages:

  *
  http://cfpb.github.io/design-manual/page-components/form-fields.html#text-input-fields

  * https://cfpb.github.io/capital-framework/components/cf-forms/#text-inputs
variations:
  - variation_code_snippet: |-
      <label class="a-label a-label__heading" for="textinput-example-default">
          Label for text input
      </label>
      <input class="a-text-input"
             type="text"
             id="textinput-example-default"
             placeholder="Enter text…"
             value="Placeholder text">
    variation_description: >-
      The default section below demonstrates how a text input would normally
      appear in code.
    variation_name: Basic text input
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Text color | @input-text | @black | Black (#101820)
      Text color | @input-text | @black | Black (#101820)
      Text color (placeholder) | @gray | 
      Text color (disabled) | @gray | 
      Text size | @base-font-size-px | 16px | 16px | 11pt
      Border | @input-border | @gray-60 | Gray 60 ()
      Border (hover) | @pacific | 
      Border (focused) | @pacific | 
      Border (active) | @pacific | 
      Border (selected) | @pacific | 
      Background | @input-bg | @white | White ()
      Background (selected) | 
      Background (disabled)
  - variation_code_snippet: |-
      <label class="a-label a-label__heading" for="textarea-example-default">
          A textarea input
      </label>
      <textarea class="a-text-input"
                id="textarea-example-default"
                placeholder="Enter text…">Lorem Ipsum</textarea>
    variation_description: ''
    variation_name: Textarea input
    variation_specs: |
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Height | @select-height | @30px | 30px
  - variation_code_snippet: |-
      <div class="m-form-field">
          <label class="a-label a-label__heading" for="full-textinput-example">
              A full-width text input
          </label>
          <input class="a-text-input a-text-input__full"
                 type="text"
                 id="full-textinput-example"
                 value="Lorem ipsum">
      </div>
    variation_name: Full-width text input
  - variation_code_snippet: |-
      <div class="m-form-field">
          <label class="a-label a-label__heading" for="full-textarea-example">
              A full-width textarea input
          </label>
          <textarea class="a-text-input a-text-input__full"
                    id="full-textarea-example">Lorem Ipsum</textarea>
      </div>
    variation_name: Full-width textarea input
  - variation_code_snippet: |-
      <div class="o-form__input-w-btn">
          <div class="o-form__input-w-btn_input-container">
              <input class="a-text-input" type="text" title="Test input">
          </div>
          <div class="o-form__input-w-btn_btn-container">
              <button class="a-btn">Search</button>
          </div>
      </div>
    variation_description: These are used for simple forms where a full filter isn’t necessary.
    variation_name: Text input with a button
  - variation_code_snippet: |-
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
    variation_description: >-
      These offer the user an action to take related to the input, typically to
      clear the input.
    variation_name: Button inside a text input
  - variation_code_snippet: |-
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
    variation_description: >-
      This example combines both of the previous patterns, creating a typical
      site search form.
    variation_name: Button inside a text input with another button
usage: >-
  **Use cases**


  TBD


  **Content guidelines**

  Choose the appropriate width for text input fields so they match the kind of
  information requested. This makes it easier for users to quickly grasp what’s
  being asked.


  For example, it’s hard to understand at a glance that a single 1,000 px-wide
  text field is asking for your phone number or birth date. When possible, be
  even more explicit with the width by dividing it into known character counts.
  For instance, social security number should be three characters, then two,
  then four. Be mindful of not getting too restrictive, however. This approach
  could work for phone numbers, but only if international numbers are not
  permitted.


  These types of inputs should always be smaller widths:


  * Middle initial

  * Date, month, or year

  * State abbreviation


  **Behavior**

  As the screen size gets smaller, break multi-column inputs into a single,
  stacked column. Fields that are next to each other on a large screen, should
  stack at smaller screen sizes. When possible, fields should span the entire
  width of the screen at the smallest screen sizes.
accessibility: >-
  Inputs should always be paired with a `label` for accessibility reasons.


  Users of screen readers use the tab key to move focus from one form control to
  another. Make sure that tab focus order reflects the way you would like users
  to navigate through the form. Consider whether tabs should move a user down or
  across the page.
research: TBD
related_items: '* A related item'
help_us: '* Help us do a thing'
---

