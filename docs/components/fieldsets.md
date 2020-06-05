---
title: Fieldsets
layout: variation
section: components
secondary_section: Forms
status: Released
description: >-
  The fieldset element is used to group several controls as well as labels
  within a web form. 


  More information can be found at:

  * http://cfpb.github.io/design-manual/page-components/form-fields.html	

  * https://cfpb.github.io/capital-framework/components/cf-forms/#fieldsets


  *NOTE: The code doesn't match description in that the code doesn't include a legend, block helper text, or inline labels.
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <form class="o-form">
              <div class="o-form_group">
                  <fieldset class="o-form_fieldset">
                      <div class="m-form-field m-form-field__checkbox">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_1" name="test_checkbox">
                          <label class="a-label" for="test_checkbox_1">Label</label>
                      </div>
                      <div class="m-form-field m-form-field__checkbox">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_2" name="test_checkbox">
                          <label class="a-label" for="test_checkbox_2">Label</label>
                      </div>
                  </fieldset>
              </div>
          </form>
        variation_description: " "
        variation_name: Fieldset with checkboxes
      - variation_code_snippet: >-
          <form class="o-form">
              <div class="o-form_group">
                  <fieldset class="o-form_fieldset">
                      <div class="m-form-field m-form-field__radio">
                          <input class="a-radio" type="radio" id="test_radio_1" name="test_radio">
                          <label class="a-label" for="test_radio_1">Label</label>
                      </div>
                      <div class="m-form-field m-form-field__radio">
                          <input class="a-radio" type="radio" id="test_radio_2" name="test_radio">
                          <label class="a-label" for="test_radio_2">Label</label>
                      </div>
                  </fieldset>
              </div>
          </form>
        variation_description: " "
        variation_name: Fieldset with radio buttons
    variation_group_name: Standard fieldsets
    variation_group_description: The fieldset includes the legend, optional block
      helper text, inline labels, and a set of controls.
  - variation_group_name: Groups
    variations:
      - variation_name: Large target fieldset with checkboxes
        variation_code_snippet: >-
          <form class="o-form">
              <div class="o-form_group">
                  <fieldset class="o-form_fieldset">
                      <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default_1">
                          <label class="a-label" for="test_checkbox_lg_default_1">Label</label>
                      </div>
                      <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default_2">
                          <label class="a-label" for="test_checkbox_lg_default_2">Label</label>
                      </div>
                      <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default_3">
                          <label class="a-label" for="test_checkbox_lg_default_3">Label</label>
                      </div>
                      <div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
                          <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default_4">
                          <label class="a-label" for="test_checkbox_lg_default_4">Label</label>
                      </div>
                  </fieldset>
              </div>
          </form>
      - variation_name: Large target fieldset with radio buttons
        variation_code_snippet: >-
          <fieldset class="o-form_fieldset">
                          <legend class="a-legend">Basic legend
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
content_guidelines: ""
behavior: ""
accessibility: ""
last_updated: 2020-01-28T15:55:47.394Z
research: ""
---
