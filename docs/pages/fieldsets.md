---
title: Fieldsets
layout: variation
section: components
status: Released
description: >-
  The fieldset element is used to group several controls as well as labels
  within a web form. A fieldset includes each of the following:


  * [Legend](https://cfpb.github.io/design-system/components/labels-and-legends)

  * [Block helper text](https://cfpb.github.io/design-system/components/helper-text) (if necessary)

  * [Inline labels](https://cfpb.github.io/design-system/components/labels-and-legends)

  * Set of controls such as [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) or [radio buttons](https://cfpb.github.io/design-system/components/radio-buttons)
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <form class="o-form">

          <legend class="a-legend">

          Basic legend
              <small class="a-label_helper a-label_helper__block">Use block helper text for instructions</small>
          </legend>
              <div class="o-form_group">
                  <fieldset class="o-form_fieldset">
                      <div class="m-form-field m-form-field__checkbox">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_1" name="test_checkbox">
                          <label class="a-label" for="test_checkbox_1">Inline label</label>
                      </div>
                      <div class="m-form-field m-form-field__checkbox">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_2" name="test_checkbox">
                          <label class="a-label" for="test_checkbox_2">Inline label</label>
                      </div>
                  </fieldset>
              </div>
          </form>
        variation_description: ""
        variation_name: Fieldset with checkboxes
      - variation_code_snippet: >-
          <form class="o-form">

          <legend class="a-legend">

          Basic legend
              <small class="a-label_helper a-label_helper__block">Use block helper text for instructions</small>
          </legend>
              <div class="o-form_group">
                  <fieldset class="o-form_fieldset">
                      <div class="m-form-field m-form-field__radio">
                          <input class="a-radio" type="radio" id="test_radio_1" name="test_radio">
                          <label class="a-label" for="test_radio_1">Inline label</label>
                      </div>
                      <div class="m-form-field m-form-field__radio">
                          <input class="a-radio" type="radio" id="test_radio_2" name="test_radio">
                          <label class="a-label" for="test_radio_2">Inline label</label>
                      </div>
                  </fieldset>
              </div>
          </form>
        variation_description: ""
        variation_name: Fieldset with radio buttons
    variation_group_name: Types
    variation_group_description: ""
  - variation_group_name: Sizes
    variations:
      - variation_name: Large target fieldset with checkboxes
        variation_code_snippet: >-
          <form class="o-form">

          <legend class="a-legend">

          Basic legend
              <small class="a-label_helper a-label_helper__block">Use block helper text for instructions</small>
          </legend>
              <div class="o-form_group">
                  <fieldset class="o-form_fieldset">
                      <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default_1">
                          <label class="a-label" for="test_checkbox_lg_default_1">Inline label</label>
                      </div>
                      <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default_2">
                          <label class="a-label" for="test_checkbox_lg_default_2">Inline label</label>
                      </div>
                      <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default_3">
                          <label class="a-label" for="test_checkbox_lg_default_3">Inline label</label>
                      </div>
                      <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default_4">
                          <label class="a-label" for="test_checkbox_lg_default_4">Inline label</label>
                      </div>
                  </fieldset>
              </div>
          </form>
      - variation_name: Large target fieldset with radio buttons
        variation_code_snippet: >-
          <fieldset class="o-form_fieldset">

          <legend class="a-legend">

          Basic legend
              <small class="a-label_helper a-label_helper__block">Use block helper text for instructions</small>
          </legend>

                          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
                              <input class="a-radio" id="is_helpful_1" type="radio" name="is_helpful" value="1">
                                  <label class="a-label" for="is_helpful_1">Inline label
                                  </label>
                          </div>

                          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
                              <input class="a-radio" id="is_helpful_2" type="radio" name="is_helpful" value="0">
                                  <label class="a-label" for="is_helpful_2">Inline label
                                  </label>
                          </div>

                          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
                              <input class="a-radio" id="is_helpful_3" type="radio" name="is_helpful" value="0">
                                  <label class="a-label" for="is_helpful_3">Inline label
                                  </label>
                          </div>

                          <div class="m-form-field m-form-field__radio m-form-field__lg-target">
                              <input class="a-radio" id="is_helpful_4" type="radio" name="is_helpful" value="0">
                                  <label class="a-label" for="is_helpful_4">Inline label
                                  </label>
                          </div>
              </fieldset>
use_cases: ""
guidelines: ""
eyebrow: Form elements
behavior: ""
accessibility: ""
last_updated: 2020-01-28T15:55:47.394Z
research: ""
---
