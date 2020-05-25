---
title: Radio Buttons
layout: variation
section: components
secondary_section: Forms
status: Released
description: >
  Use radio buttons when the user can choose only one option out of a list. Use
  these for a small number of discrete elements—avoid long lists of radio
  buttons (usually no more than 6-8 options). When there are more than two
  options, stack radio buttons vertically.
variation_groups:
  - variation_group_name: Standard radio buttons
    variations:
      - variation_code_snippet: >
          <div class="m-form-field m-form-field__radio">
              <input class="a-radio" type="radio" id="test_radio_basic_default">
              <label class="a-label" for="test_radio_basic_default">Default</label>
          </div>


          <br>

          <!--Hover-->

          <div class="m-form-field m-form-field__radio">
              <input class="a-radio hover" type="radio" id="test_radio_basic_hover">
              <label class="a-label" for="test_radio_basic_hover">Hover</label>
          </div>

          <br>


          <!--Focus--> 

          <div class="m-form-field m-form-field__radio">
              <input class="a-radio focus" type="radio" id="test_radio_basic_focus">
              <label class="a-label" for="test_radio_basic_focus">Focus</label>
          </div>

          <br>


          <!--Selected-->

          <div class="m-form-field m-form-field__radio">
              <input class="a-radio" type="radio" id="test_radio_basic_checked" checked>
              <label class="a-label" for="test_radio_basic_checked">Label</label>
          </div>

          <br> 


          <!--Disabled-->

          <div class="m-form-field m-form-field__radio">
              <input class="a-radio" type="radio" id="test_radio_basic_disabled" disabled>
              <label class="a-label" for="test_radio_basic_disabled">Disabled</label>
          </div>

          <br>


          <!--Disabled/selected-->

          <div class="m-form-field m-form-field__radio">
              <input class="a-radio"
                     type="radio"
                     id="test_radio_basic_disabled"
                     disabled
                     checked>
              <label class="a-label" for="test_radio_basic_disabled">Label</label>
          </div>
      - variation_name: Radio button with helper text
        variation_description: Checkboxes and radio button inputs can have labels that
          span multiple lines and have helper text that appears below the main
          label text.
        variation_code_snippet: |-
          <div class="m-form-field m-form-field__radio">
              <input class="a-radio" type="radio" id="test_radio_basic_helper">
              <label class="a-label" for="test_radio_basic_helper">
                  This is a very long label that wraps to a second line.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <small class="a-label_helper">
                      (This is helper text)
                  </small>
              </label>
          </div>
  - variations:
      - variation_code_snippet: >-
          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
              <input class="a-radio" type="radio" id="test_radio_lg_default">
              <label class="a-label" for="test_radio_lg_default">Default</label>
          </div>

          <br>


          <!--Hover--> 

          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
              <input class="a-radio hover" type="radio" id="test_radio_lg_hover">
              <label class="a-label" for="test_radio_lg_hover">Hover</label>
          </div>

          <br>


          <!--Focus-->

          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
              <input class="a-radio focus" type="radio" id="test_radio_lg_focus">
              <label class="a-label" for="test_radio_lg_focus">Focus</label>
          </div>

          <br>


          <!--Selected-->


          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
              <input class="a-radio" type="radio" id="test_radio_lg_checked" checked>
              <label class="a-label" for="test_radio_lg_checked">Selected</label>
          </div>

          <br>


          <!--Disabled-->

          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
              <input class="a-radio" type="radio" id="test_radio_lg_disabled" disabled>
              <label class="a-label" for="test_radio_lg_disabled">Disabled</label>
          </div>

          <br>


          <!--Disabled/selected--> 

          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
              <input class="a-radio"
                     type="radio"
                     id="test_radio_lg_disabled"
                     disabled
                     checked>
              <label class="a-label" for="test_radio_lg_disabled">Disabled/selected</label>
          </div>
        variation_name: ""
      - variation_code_snippet: |-
          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
              <input class="a-radio"
                    type="radio"
                    id="test_radio_lg_disabled"
                    disabled>
              <label class="a-label" for="test_radio_lg_disabled">Label</label>
          </div>
        variation_name: Disabled large target area radio button
      - variation_code_snippet: |-
          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
              <input class="a-radio" type="radio" id="test_radio_lg_helper">
              <label class="a-label" for="test_radio_lg_helper">
                  This is a very long label that wraps to a second line.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <small class="a-label_helper">
                      (This is helper text)
                  </small>
                </label>
          </div>
        variation_name: Large target radio button with helper text
    variation_group_name: Large target area radio buttons
use_cases: >-
  Leave radio buttons unselected as the default. It’s easy for users to miss
  that a radio button has been preselected and to submit a form with an
  erroneous answer.


  Never use radio buttons for optional questions. Once a radio button is selected from a list, it or another choice must remain selected and there is no undoing the selection unless you reload the form.


  Consider using <a href="#large-target">radio buttons with large target areas</a>. If these won’t fit into your design and you need to use the default style shown below, make sure the target area is at least 45 x 45 px and includes the option text.
content_guidelines: ""
behavior: ""
accessibility: There are some issues with Voiceover reading radio buttons. To
  get around this, consider using the aria-describedby attribute.
related_items: >-
  
  More information can be found at:


  * <http://cfpb.github.io/design-manual/page-components/form-fields.html#radio-buttons>

  * [https://cfpb.github.io/capital-framework/components/cf-forms/#basic-radio-buttons](http://cfpb.github.io/design-manual/page-components/form-fields.html#radio-buttons)
last_updated: 2020-01-28T15:55:47.394Z
research: TBA
---
