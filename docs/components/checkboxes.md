---
title: Checkboxes
layout: variation
section: components
secondary_section: Forms
status: Proposed
description: "Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case.\n\nMore information can be found at:\n\n* http://cfpb.github.io/design-manual/page-components/form-fields.html#checkboxes\t\n* https://cfpb.github.io/capital-framework/components/cf-forms/#basic-checkboxes"
variations:
  - variation_code_snippet: |-
      <div class="m-form-field m-form-field__checkbox">
          <input class="a-checkbox" type="checkbox" id="test_checkbox">
          <label class="a-label" for="test_checkbox">Label</label>
      </div>
    variation_description: >-
      The default section below demonstrates how a checkbox would normally
      appear in code.
    variation_name: Default state
    variation_specs: |-
      Height: 20 px

      Width: 20 px

      Margin right: 10 px

      Border: 1 px, Gray 60 (#919395)

      Background: White (#ffffff)

      Avenir Next Regular, 16 px, Black (#101820)
  - variation_code_snippet: |-
      <div class="m-form-field m-form-field__checkbox">
          <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_checked" checked>
          <label class="a-label" for="test_checkbox_basic_checked">Label</label>
      </div>
    variation_name: Selected state
    variation_specs: |-
      Border: 1 px, Gray 60 (#919395)

      Minicon: 18 px, Black (#101820)
usage: >-
  Selecting the checkbox or touching the label text next to it should toggle the
  state of the checkbox on and off.


  To optimize usability, consider using checkboxes with large target areas. If
  these won’t fit into the design and the default style shown below is used,
  make sure the target area is at least 45 x 45px and that it includes the text
  label.


  <h3>Use cases</h3>


  TBD.


  <h3>Content guidelines</h3>


  TBD


  ****
accessibility: >-
  To optimize screen reader accessibility, lay out checkboxes vertically rather
  than horizontally.
research: >-
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
  rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna
  non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut
  dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut
  blandit.


  Odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec
  congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu
  ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in
  metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus
  tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur.


  Vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac
  egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora
  torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit
  amet leo consequat posuere.
---
