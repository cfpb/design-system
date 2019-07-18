---
title: Blocks
permalink: /components/blocks
layout: component
collection_name: components
section: components
status: Proposed
intro: >-
  `.block` is a base class with several modifiers that help you separate chunks
  of content via `margin`, `padding`, `border`, and `background`.


  This page is under active development. Information is being moved into it from
  these pages:


  https://cfpb.github.io/capital-framework/components/cf-layout/#block
variations:
  - variation_code_snippet: |
      Main content...
      <div class="block">
          Content block
      </div>
      <div class="block">
          Content block
      </div>
      <div class="block">
          Content block
      </div>
    variation_description: >-
      The standard `.block` class by itself simply adds a `margin` of twice the
      gutter width to the top and bottom.
    variation_name: Standard block example
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Background | @block__bg | @gray-5 | Gray 5
  - variation_code_snippet: |-
      Main content...
      <div class="block block__border-top">
          Content block with top border.
      </div>
    variation_description: Adds top `border` to `.block`.
    variation_jinja_code_snippet: ''
    variation_name: Border top modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Border top | @block__border-top |  @gray-40 | Gray 40
  - variation_code_snippet: |-
      Main content...
      <div class="block block__border-right">
          Content block with right border.
      </div>
    variation_description: Adds right `border` to `.block`.
    variation_name: Border right modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Border right | @block__border-right |  @gray-40 | Gray 40
  - variation_code_snippet: |-
      Main content...
      <div class="block block__border-bottom">
          Content block with bottom border.
      </div>
    variation_description: Adds bottom `border` to `.block`.
    variation_name: Border bottom modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Border bottom | @block__border-bottom |  @gray-40 | Gray 40
  - variation_code_snippet: |-
      Main content...
      <div class="block block__border-left">
          Content block with left border.
      </div>
    variation_description: Adds left `border` to `.block`.
    variation_name: Border left modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Border left | @block__border-left |  @gray-40 | Gray 40
  - variation_code_snippet: TBD
    variation_name: Border modifier
usage: |-
  **Use cases**

  TBD

  **Content guidelines**

  TBD
accessibility: TBD
research: TBD
---

