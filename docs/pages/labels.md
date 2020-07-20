---
title: Labels and legends
layout: variation
section: components
status: Released
description: "Labels and legends are used to help users understand the meaning
  of a form input. Legends are used exclusively for
  [fieldsets](https://cfpb.github.io/design-system/components/fieldsets). "
variation_groups:
  - variations:
      - variation_code_snippet: |-
          <label class="a-label a-label__heading" for="label-heading-example">
          Label heading
          </label>

          <input class="a-text-input" type="text" id="label-heading-example">
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
        variation_specs: |-
          #### Inline label
          * Avenir Next Regular, 16 px, Black (#101820)
          * Positioned to the right of the input field, inline
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
        variation_specs: |-
          #### Legend
          * Avenir Next Medium, 18 px, Black (#101820)
          * Positioned above a group of input fields, left aligned
    variation_group_name: Types
use_cases: ""
guidelines: ""
behavior: ""
accessibility: ""
research: ""
related_items: >-
  * [Helper text](https://cfpb.github.io/design-system/components/helper-text)

  * [Fieldsets](https://cfpb.github.io/design-system/components/fieldsets)

  * [Designing forms](https://cfpb.github.io/design-system/patterns/designing-forms)
last_updated: 2020-01-28T15:55:47.394Z
secondary_section: Text
---
