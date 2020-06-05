---
title: Labels and legends
layout: variation
section: components
secondary_section: Text
status: Released
description: "Labels and legends are used to help users understand the meaning
  of a form input. Legends are used exclusively for [fieldsets](). "
variation_groups:
  - variations:
      - variation_code_snippet: |-
          <label class="a-label">
              A basic label
          </label>
        variation_description: ""
        variation_name: Basic label
      - variation_code_snippet: |-
          <label class="a-label a-label__heading">
          Label heading
          </label>

          <input class="a-text-input" type="text">
        variation_description: ""
        variation_name: Label heading
        variation_specs: |-
          #### Label heading styles
          * Avenir Next Medium, 18 px, Black (#101820)
          * Positioned above the input field, left aligned
          * Margin bottom: 10 px
      - variation_name: Inline label
        variation_code_snippet: |-
          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox">
              <label class="a-label" for="test_checkbox">Inline label</label>
          </div>
      - variation_code_snippet: >-
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

              </fieldset>
        variation_description: The legend serves as the heading for a
          [fieldset](https://cfpb.github.io/design-system/components/fieldsets).
        variation_name: Basic legend
    variation_group_name: Types
use_cases: ""
content_guidelines: ""
behavior: ""
accessibility: ""
last_updated: 2020-01-28T15:55:47.394Z
research: ""
---
