---
title: Checkboxes
layout: variation
section: components
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <!--States are shown for demonstration purposes only-->

          <h4>

          States

          </h4>

          <div class="m-form-field m-form-field--checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox">
              <label class="a-label" for="test_checkbox">Enabled</label>
          </div>

          <br>

          <!--Hover-->

          <div class="m-form-field m-form-field--checkbox">
              <input class="a-checkbox hover" type="checkbox" id="test_checkbox_basic_hover">
              <label class="a-label" for="test_checkbox_basic_hover">Hover</label>
          </div>

          <br>

          <!--Focus-->

          <div class="m-form-field m-form-field--checkbox">
              <input class="a-checkbox focus" type="checkbox" id="test_checkbox_basic_focus">
              <label class="a-label" for="test_checkbox_basic_focus">Focus</label>
          </div>

          <br>

          <!--Selected-->

          <div class="m-form-field m-form-field--checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_checked" checked>
              <label class="a-label" for="test_checkbox_basic_checked">Selected</label>
          </div>

          <br>

          <!--Disabled-->

          <div class="m-form-field m-form-field--checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_disabled" disabled>
              <label class="a-label" for="test_checkbox_basic_disabled">Disabled</label>
          </div>

          <br>

          <!--Disabled/selected-->

          <div class="m-form-field m-form-field--checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_disabled_selected" disabled checked>
              <label class="a-label" for="test_checkbox_basic_disabled_selected">Disabled/selected</label>
          </div>

          <br><br>

          <h4>

          Validation status

          </h4>

          <!--Success-->

          <div class="m-form-field
                      m-form-field--checkbox
                      m-form-field--checkbox-success">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_success">
              <label class="a-label" for="test_checkbox_success">Success</label>
          </div>

          <br>

          <!--Warning-->

          <div class="m-form-field
                      m-form-field--checkbox
                      m-form-field--checkbox-warning">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_warning">
              <label class="a-label" for="test_checkbox_warning">Warning</label>
          </div>

          <br>

          <!--Error-->

          <div class="m-form-field
                      m-form-field--checkbox
                      m-form-field--checkbox-error">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_error">
              <label class="a-label" for="test_checkbox_error">Error</label>
          </div>
        variation_description: ''
        variation_name: Checkbox
        variation_specs: ''
      - variation_is_deprecated: false
        variation_name: Checkbox (with helper text)
        variation_code_snippet: >-
          <div class="m-form-field m-form-field--checkbox">
              <input class="a-radio" type="checkbox" id="test_checkbox_basic_helper">
              <label class="a-label" for="test_checkbox_basic_helper">
          Label
                  <small class="a-label__helper">
                      (This is optional helper text)
                  </small>
              </label>
          </div>
      - variation_is_deprecated: false
        variation_name: Large target area checkbox
        variation_description:
          For better usability, consider using the checkboxes with
          large target areas. These are easier to interact with (especially on
          smaller screens) and harder to miss. They are especially desirable
          when the form will have heavy mobile usage. Given the amount of real
          estate they occupy, they’re probably not suited for all use cases; for
          example, they may not work well for terms of service agreement
          checkboxes.
        variation_code_snippet: >-
          <div class="m-form-field
                      m-form-field--checkbox
                      m-form-field--lg-target">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default">
              <label class="a-label" for="test_checkbox_lg_default">Enabled</label>
          </div>

          <br>


          <!--Hover-->

          <div class="m-form-field
                      m-form-field--checkbox
                      m-form-field--lg-target">
              <input class="a-checkbox hover" type="checkbox" id="test_checkbox_lg_hover">
              <label class="a-label" for="test_checkbox_lg_hover">Hover</label>
          </div>

          <br>


          <!--Focus-->

          <div class="m-form-field
                      m-form-field--checkbox
                      m-form-field--lg-target">
              <input class="a-checkbox focus" type="checkbox" id="test_checkbox_lg_focus">
              <label class="a-label" for="test_checkbox_lg_focus">Focus</label>
          </div>


          <br>


          <!--Selected-->

          <div class="m-form-field
                      m-form-field--checkbox
                      m-form-field--lg-target">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_checked" checked>
              <label class="a-label" for="test_checkbox_lg_checked">Selected</label>
          </div>

          <br>


          <!--Disabled-->

          <div class="m-form-field
                      m-form-field--checkbox
                      m-form-field--lg-target">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_disabled" disabled>
              <label class="a-label" for="test_checkbox_lg_disabled">Disabled</label>
          </div>

          <br>


          <!--Disabled/Selected-->

          <!--

          <div class="m-form-field
                      m-form-field--checkbox
                      m-form-field--lg-target">
              <input class="a-checkbox"
                     type="checkbox"
                     id="test_checkbox_lg_disabled"
                     disabled
                     checked>
              <label class="a-label" for="test_checkbox_lg_disabled">Disabled/Selected</label>
          </div>

          -->
        variation_specs: ''
      - variation_is_deprecated: false
        variation_name: Large target area checkbox (with helper text)
        variation_code_snippet: >-
          <div class="m-form-field
                      m-form-field--checkbox
                      m-form-field--lg-target">
              <input class="a-checkbox" type="radio" id="test_checkbox_lg_helper">
              <label class="a-label" for="test_checkbox_lg_helper">
                 Label
                  <small class="a-label__helper">
                      (This is optional helper text)
                  </small>
                </label>
          </div>
    variation_group_name: Types
guidelines: >-
  ### Content guidelines


  * Label text should be concise


  ### Stylistic guidelines


  * Text spacing should inform spacing of checkboxes and checkbox should be vertically centered with the first line of text in an option.
eyebrow: Components
status: Released
description: Use checkboxes when the user can select more than one option from a
  group. Make clear with helper text that this is the case. Use [radio
  buttons](/design-system/components/radio-buttons) when the user can select
  only one choice from a group.
use_cases: ''
behavior: >-
  Selecting the checkbox or touching the label text next to it should toggle the
  state of the checkbox on and off.


  To optimize usability, consider using checkboxes with large target areas. If these won’t fit into the design and the default style shown below is used, make sure the target area is at least 45 x 45px and that it includes the text label.
accessibility: To optimize screen reader accessibility, lay out checkboxes
  vertically rather than horizontally.
last_updated: 2019-09-17T14:30:15.293Z
research: ''
---
