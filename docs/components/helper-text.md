---
title: Helper text
layout: variation
section: components
secondary_section: Text
status: Released
description: Helper text is used with form elements to give the user context
  about their usage. Examples include indicating whether a field is optional or
  required.
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <label class="a-label a-label__heading">

          Label
              <small class="a-label_helper a-label_helper__block">Use block helper text for instructions</small>
          </label>


          <input class="a-text-input" type="text" id="helper-example">
        variation_description: "Use block helper text to explain why a piece of
          information is being requested, address security and privacy concerns,
          or to suggest ways of providing answers other than providing
          formatting examples. "
        variation_name: Block helper text
        variation_specs: >-
          [Color
          variables](https://cfpb.github.io/design-system/components/variables#forms-1) 


          #### Block helper text

          - Avenir Next Regular, 16 px, Gray (#5a5d61)

          - Margin top: 10 px

          - Margin bottom: 10 px
      - variation_code_snippet: |-
          <label class="a-label a-label__heading">
           Label <small class="a-label_helper">(optional)</small>
          </label>

          <input class="a-text-input" type="text" id="helper-example">
        variation_description: Use inline helper text to indicate whether a field is
          optional. See the [behavior section](#behavior) for more information.
        variation_name: Inline helper text
        variation_specs: >-
          #### Inline helper text

          * Avenir Next Regular, 16 px, Gray (#5a5d61)

          * Margin bottom: 10 px


          Appears inline with label headings, and should be lowercase and placed in parenthesis after the label.
      - variation_code_snippet: >-
          <label class="a-label a-label__heading"
          for="textinput-example-default">
              Label
          </label>

          <input class="a-text-input"
                type="text"
                id="textinput-example-default"
                placeholder="Enter text…"
                value="mm/dd/yyyy">
          <br><br>

          <input class="a-text-input"
                type="text"
                id="textinput-example-default"
                placeholder="Enter text…"
                value="email@example.com">
          <br><br>

          <input class="a-text-input"
                type="text"
                id="textinput-example-default"
                placeholder="Enter text…"
                value="placeholder text">
        variation_description: Use placeholder text for formatting examples only. Don’t
          use for instructions. Placeholder text disappears once a user begins
          typing in the field.
        variation_name: Placeholder text
        variation_specs: |-
          #### Placeholder text
          Avenir Next Regular, 16 px, Gray (#5a5d61)
    variation_group_name: Types
    variation_group_description: "Types of helper text include block helper text,
      inline helper text, and placeholder text. "
use_cases: ""
content_guidelines: >-
  ### Required vs. optional fields

  Where possible, design your forms to only include required fields. If it’s not required, ask yourself if it’s really necessary to include at all. Add instructions at the top of the form to clearly indicate that all fields are required unless otherwise noted. If a field is optional, indicate it with inline helper text, as shown above. Don’t indicate which fields are required; that would only introduce redundant visual noise.


  Try not to design forms consisting mainly of optional fields. If you must do so, mark required field labels only with inline helper text.
behavior: ""
accessibility: For screen reader accessibility, consider using the
  aria-describedby attribute for helper text, which gives screen readers users
  the information if they need while allowing more flexibility with placement.
related_items: >-
  * Labels 

  * [Variables](https://cfpb.github.io/design-system/components/variables#forms-1)

  * Form principles
last_updated: 2020-01-28T15:55:47.394Z
---
