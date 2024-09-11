---
layout: variation
section: components
status: Released
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <label class="a-label a-label--heading" for="helper-block-example">

          Label
              <small class="a-label__helper a-label__helper--block">Use block helper text for instructions</small>
          </label>


          <input class="a-text-input" type="text" id="helper-block-example">
        variation_description:
          'Block helper text appears directly beneath a form label.
          Use it to explain why a piece of information is being requested,
          address security and privacy concerns, or to suggest ways of providing
          answers other than providing formatting examples. '
        variation_name: Block helper text
        variation_specs: ''
      - variation_code_snippet: |-
          <label class="a-label a-label--heading" for="helper-inline-example">
           Label <small class="a-label__helper">(optional)</small>
          </label>

          <input class="a-text-input" type="text" id="helper-inline-example">
        variation_description:
          Inline helper text appears directly after a form label.
          Use it to indicate whether a field is optional. See the [behavior
          section](#behavior) for more information.
        variation_name: Inline helper text
        variation_specs: ''
      - variation_code_snippet: >
          <label class="a-label a-label--heading"
          for="textinput-example-email-default">
              Email address
          </label>

          <input class="a-text-input"
                type="text"
                id="textinput-example-email-default"
                placeholder="email@example.com">
        variation_description:
          Placeholder text appears within a text input field, and
          disappears once a user begins typing in that field. Use it for
          formatting examples only.
        variation_name: Placeholder text
        variation_specs: ''
    variation_group_name: Types
    variation_group_description: ''
guidelines: >-
  ### Required vs. optional fields

  Where possible, design your forms to only include required fields. If it’s not required, ask yourself if it’s really necessary to include at all. Add instructions at the top of the form to clearly indicate that all fields are required unless otherwise noted. If a field is optional, indicate it with inline helper text, as shown above. Don’t indicate which fields are required; that would only introduce redundant visual noise.


  Try not to design forms consisting mainly of optional fields. If you must do so, mark required field labels only with inline helper text.
eyebrow: Components
title: Helper text
description: Helper text is used with form elements to give the user context
  about their usage. Types of helper text include block helper text, inline
  helper text, and placeholder text.
use_cases: ''
behavior: ''
accessibility: For screen reader accessibility, consider using the
  `aria-describedby` attribute for helper text, which gives screen readers users
  the information if they need while allowing more flexibility with placement.
related_items: >-
  * [Labels and
  legends](https://cfpb.github.io/design-system/components/labels-and-legends)

  * [Designing forms](https://cfpb.github.io/design-system/patterns/designing-forms)
last_updated: 2020-01-28T15:55:47.394Z
---
