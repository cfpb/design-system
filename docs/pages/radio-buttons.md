---
layout: variation
section: components
status: Released
variation_groups:
  - variation_group_name: Types
    variations:
      - variation_code_snippet: >
          <div class="m-form-field m-form-field--radio">
              <input class="a-radio" type="radio" id="test_radio_basic_default">
              <label class="a-label" for="test_radio_basic_default">Enabled</label>
          </div>


          <br>

          <!--Hover-->

          <div class="m-form-field m-form-field--radio">
              <input class="a-radio hover" type="radio" id="test_radio_basic_hover">
              <label class="a-label" for="test_radio_basic_hover">Hover</label>
          </div>

          <br>


          <!--Focus-->

          <div class="m-form-field m-form-field--radio">
              <input class="a-radio focus" type="radio" id="test_radio_basic_focus">
              <label class="a-label" for="test_radio_basic_focus">Focus</label>
          </div>

          <br>


          <!--Selected-->

          <div class="m-form-field m-form-field--radio">
              <input class="a-radio" type="radio" id="test_radio_basic_checked" checked>
              <label class="a-label" for="test_radio_basic_checked">Selected</label>
          </div>

          <br>


          <!--Disabled-->

          <div class="m-form-field m-form-field--radio">
              <input class="a-radio" type="radio" id="test_radio_basic_disabled" disabled>
              <label class="a-label" for="test_radio_basic_disabled">Disabled</label>
          </div>

          <br>


          <!--Disabled/selected-->

          <div class="m-form-field m-form-field--radio">
              <input class="a-radio"
                     type="radio"
                     id="test_radio_basic_disabled_selected"
                     disabled
                     checked>
              <label class="a-label" for="test_radio_basic_disabled_selected">Disabled/selected</label>
          </div>
        variation_specs: ''
        variation_name: Radio button
      - variation_name: Radio button (with helper text)
        variation_description:
          Radio button inputs can have labels that span multiple
          lines and can include optional helper text that appears below the main
          label text.
        variation_code_snippet: |-
          <div class="m-form-field m-form-field--radio">
              <input class="a-radio" type="radio" id="test_radio_basic_helper">
              <label class="a-label" for="test_radio_basic_helper">
                  Label
                  <small class="a-label__helper">
                      (This is optional helper text)
                  </small>
              </label>
          </div>
        variation_specs: ''
      - variation_is_deprecated: false
        variation_name: Large target area radio button
        variation_description:
          For better usability, consider using radio buttons with
          large target areas. These are easier to interact with (especially on
          smaller screens) and harder to miss. They are especially desirable
          when the form will have heavy mobile usage. Given the amount of real
          estate they occupy, they’re probably not suited for all use cases.
        variation_code_snippet: >-
          <div class="m-form-field m-form-field--radio m-form-field--lg-target">
              <input class="a-radio" type="radio" id="test_radio_lg_default">
              <label class="a-label" for="test_radio_lg_default">Enabled</label>
          </div>

          <br>


          <!--Hover-->

          <div class="m-form-field m-form-field--radio m-form-field--lg-target">
              <input class="a-radio hover" type="radio" id="test_radio_lg_hover">
              <label class="a-label" for="test_radio_lg_hover">Hover</label>
          </div>

          <br>


          <!--Focus-->

          <div class="m-form-field m-form-field--radio m-form-field--lg-target">
              <input class="a-radio focus" type="radio" id="test_radio_lg_focus">
              <label class="a-label" for="test_radio_lg_focus">Focus</label>
          </div>

          <br>


          <!--Selected-->


          <div class="m-form-field m-form-field--radio m-form-field--lg-target">
              <input class="a-radio" type="radio" id="test_radio_lg_checked" checked>
              <label class="a-label" for="test_radio_lg_checked">Selected</label>
          </div>

          <br>


          <!--Disabled-->

          <div class="m-form-field m-form-field--radio m-form-field--lg-target">
              <input class="a-radio" type="radio" id="test_radio_lg_disabled" disabled>
              <label class="a-label" for="test_radio_lg_disabled">Disabled</label>
          </div>

          <br>


          <!--Disabled/selected-->

          <div class="m-form-field m-form-field--radio m-form-field--lg-target">
              <input class="a-radio"
                     type="radio"
                     id="test_radio_lg_disabled_selected"
                     disabled
                     checked>
              <label class="a-label" for="test_radio_lg_disabled_selected">Disabled/selected</label>
          </div>
        variation_specs: ''
      - variation_is_deprecated: false
        variation_name: Large target area radio button (with helper text)
        variation_code_snippet: |-
          <div class="m-form-field m-form-field--radio m-form-field--lg-target">
              <input class="a-radio" type="radio" id="test_radio_lg_helper">
              <label class="a-label" for="test_radio_lg_helper">
          Label
                  <small class="a-label__helper">
                      (This is optional helper text)
                  </small>
                </label>
          </div>
guidelines: ''
eyebrow: Components
title: Radio buttons
description: Use radio buttons when the user can select exactly one option from
  a group. Avoid long lists of radio buttons (usually no more than 6-8 options).
  When there are more than two options, stack radio buttons vertically. Use
  [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) when
  the user can select more than one option from a group.
use_cases: >-
  Leave radio buttons unselected as the default. It’s easy for users to miss
  that a radio button has been preselected and to submit a form with an
  erroneous answer.


  Never use radio buttons for optional questions. Once a radio button is selected from a list, it or another choice must remain selected and there is no undoing the selection unless you reload the form.


  Consider using radio buttons with large target areas. If these won’t fit into your design and you need to use the standard radio button make sure the target area is at least 45 x 45 px and includes the label text.
behavior: ''
accessibility: There are some issues with Voiceover reading radio buttons. To
  get around this, consider using the aria-describedby attribute.
related_items: ''
last_updated: 2020-01-28T15:55:47.394Z
research: ''
---
