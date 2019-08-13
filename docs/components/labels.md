---
title: Labels and helper text
layout: variation
section: components
secondary_section: Text
status: Proposed
description: "\nMore information can be found at:\n* http://cfpb.github.io/design-manual/page-components/form-fields.html\t\n* https://cfpb.github.io/capital-framework/components/cf-forms/#labels"
variations:
  - variation_code_snippet: |-
      <label class="a-label">
          A basic label
      </label>
    variation_description: ''
    variation_name: Basic label
  - variation_code_snippet: |-
      <label class="a-label a-label__heading">
          A label heading
      </label>
    variation_description: The secondary state is very secondary.
    variation_name: Label heading
  - variation_code_snippet: |-
      <label class="a-label a-label__heading">
          A label heading <small class="a-label_helper">(optional)</small>
      </label>
    variation_description: >-
      Appears with label headings. Use to indicate whether a field is optional
      or required.
    variation_name: Inline helper text
  - variation_code_snippet: |-
      <label class="a-label a-label__heading">
          A label heading
          <small class="a-label_helper a-label_helper__block">Use block helper text for instructions</small>
      </label>
    variation_description: >-
      Use block helper text to explain why a piece of information is being
      requested, address security and privacy concerns, or to suggest ways of
      providing answers other than providing formatting examples.


      Appears with labels and label headings.
    variation_name: Block helper text
  - variation_code_snippet: |-
      <label class="a-label a-label__heading" for="textinput-example-default">
          A text input
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
    variation_description: >-
      Use placeholder text for formatting examples only. Don’t use for
      instructions. Placeholder text disappears once a user begins typing in the
      field.
    variation_name: Placeholder text
usage: >-
  **Content guidelines**


  Where possible, design your forms to only include required fields. If it’s not
  required, ask yourself if it’s really necessary to include at all. Add
  instructions at the top of the form to clearly indicate that all fields are
  required unless otherwise noted. If a field is optional, indicate it with
  inline helper text, as shown here. Don’t indicate which fields are required;
  that would only introduce redundant visual noise.


  Try not to design forms consisting mainly of optional fields. If you must do
  so, mark required field labels only with inline helper text.
accessibility: >
  For screen reader accessibility, consider using the aria-describedby attribute
  for helper text, which gives screen readers users the information if they need
  while allowing more flexibility with placement.
research: ''
---

