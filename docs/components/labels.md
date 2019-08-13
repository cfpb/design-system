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
    variation_name: Label helper text
  - variation_code_snippet: |-
      <label class="a-label a-label__heading">
          A label heading
          <small class="a-label_helper a-label_helper__block">Helper text</small>
      </label>
    variation_description: >-
      Use block helper text to explain why a piece of information is being
      requested, address security and privacy concerns, or to suggest ways of
      providing answers other than providing formatting examples.


      Appears with labels and label headings.
    variation_name: Block helper text
usage: >-
  **Use cases**


  Phasellus molestie magna non est bibendum non venenatis nisl tempor.
  Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.
  Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at
  risus.


  **Content guidelines**


  Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a
  porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget
  odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus
  vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis
  aliquet egestas purus in.
accessibility: >
  For screen reader accessibility, consider using the aria-describedby attribute
  for helper text, which gives screen readers users the information if they need
  while allowing more flexibility with placement.
research: ''
---

