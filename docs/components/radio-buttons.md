---
title: Radio Buttons
permalink: /components/radio-buttons
layout: component
collection_name: components
section: components
status: Proposed
intro: >-
  Use radio buttons when the user can choose only one option out of a list. Use
  these for a small number of discrete elements—avoid long lists of radio
  buttons (usually no more than 6-8 options).When there are more than two
  options, stack radio buttons vertically.


  More information can be found at:


  *
  <http://cfpb.github.io/design-manual/page-components/form-fields.html#radio-buttons>

  *
  [https://cfpb.github.io/capital-framework/components/cf-forms/#basic-radio-buttons](http://cfpb.github.io/design-manual/page-components/form-fields.html#radio-buttons)
variations:
  - variation_code_snippet: |-
      <div class="m-form-field m-form-field__radio">
          <input class="a-radio" type="radio" id="test_radio_basic_default">
          <label class="a-label" for="test_radio_basic_default">Label</label>
      </div>
    variation_description: ''
    variation_name: Default state
  - variation_code_snippet: |-
      <div class="m-form-field m-form-field__radio">
          <input class="a-radio" type="radio" id="test_radio_basic_disabled" disabled>
          <label class="a-label" for="test_radio_basic_disabled">Label</label>
      </div>
    variation_description: ''
    variation_name: Disabled state
  - variation_code_snippet: |-
      <div class="m-form-field m-form-field__radio m-form-field__lg-target">
          <input class="a-radio" type="radio" id="test_radio_lg_default">
          <label class="a-label" for="test_radio_lg_default">Label</label>
      </div>
    variation_name: Large target area radio button
  - variation_code_snippet: |-
      <div class="m-form-field m-form-field__radio m-form-field__lg-target">
          <input class="a-radio"
                 type="radio"
                 id="test_radio_lg_disabled"
                 disabled
                 checked>
          <label class="a-label" for="test_radio_lg_disabled">Label</label>
      </div>
    variation_name: Disabled large target area radio button
usage: >-
  **Use cases**


  Leave radio buttons unselected as the default. It’s easy for users to miss
  that a radio button has been preselected and to submit a form with an
  erroneous answer.


  Never use radio buttons for optional questions. Once a radio button is
  selected from a list, it or another choice must remain selected and there is
  no undoing the selection unless you reload the form.


  Consider using <a href="#large-target">radio buttons with large target
  areas</a>. If these won’t fit into your design and you need to use the default
  style shown below, make sure the target area is at least 45 x 45 px and
  includes the option text.


  **Content guidelines**


  TBA
accessibility: >
  There are some issues with Voiceover reading radio buttons. To get around
  this, consider using the aria-describedby attribute.
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

