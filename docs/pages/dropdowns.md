---
layout: variation
section: components
status: Released
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <!--Default state-->


          <div class="m-form-field m-form-field__select">
              <label class="a-label a-label__heading" for="test_select_default">
                  Default
              </label>
              <div class="a-select">
                  <select id="test_select_default">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      <option value="option4">Option 4</option>
                  </select>
              </div>
          </div>


          <br>


          <!--Hover state-->

          <div class="m-form-field m-form-field__select">
              <label class="a-label a-label__heading" for="test_select__hover">
                 Hover
              </label>
              <div class="a-select">
                  <select id="test_select__hover" class="hover">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      <option value="option4">Option 4</option>
                  </select>
              </div>
          </div>


          <br>


          <!--Focus state-->


          <div class="m-form-field m-form-field__select">
              <label class="a-label a-label__heading" for="test_select__focus">
                  Focus
              </label>
              <div class="a-select">
                  <select id="test_select__focus" class="focus">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      <option value="option4">Option 4</option>
                  </select>
              </div>
          </div>


          <br>


          <!--Disabled state-->


          <div class="m-form-field m-form-field__select">
              <label class="a-label a-label__heading" for="test_select__disabled">Disabled</label>
              <div class="a-select a-select__disabled">
                  <select id="test_select__disabled" disabled>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      <option value="option4">Option 4</option>
                  </select>
              </div>
          </div>
        variation_description: Allows the user to select a single item from a dropdown
          list of options.
        variation_name: Single select
        variation_specs: |-
          <h3 class="h4">Default</h3>

          * Height: 35 px
          * Padding: 7 px
          * Border: 1 px, Gray 60 (#919395)
          * Background (down caret box): Gray 10 (#e7e8e9)
          * Minicon: Gray 80 (#75787b)
          * Body (Avenir Next Regular, 16px), Black (#101820)



          <h3 class="h4">Hover</h3>

          * Border: 2 px, Pacific (#0072ce)



          <h3 class="h4">Focus</h3>

          * Border: 2 px, Pacific (#0072ce)
          * Outline: Dotted 1px, Pacific (#0072ce)



          <h3 class="h4">Disabled</h3>

          * Background: Gray 10 (#e7e8e9)
          * Avenir Next Regular, 16 px, Dark Gray (#43484e)
      - variation_is_deprecated: false
        variation_name: Multiselect
        variation_description: Allows the user to select multiple items from a dropdown
          list of options.
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__select">
              <label class="a-label a-label__heading" for="test_select__multiple">
                  Label
              </label>
              <select class="o-multiselect" id="test_select__multiple" multiple>
                  <option value="option1" selected>Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4" selected>Option 4</option>
                  <option value="option5">Option 5</option>
                  <option value="option6">Option 6</option>
                  <option value="option7">Option 7</option>
                  <option value="option8">Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious</option>
              </select>
          </div>
        variation_implementation: "Custom JavaScript may be required to make the default
          multiselect component accessible for the visually impaired. See the
          [accessibility](#accessibility) section for more information. "
    variation_group_name: Types
guidelines: ""
eyebrow: Form elements
title: Selects
description: Selects allow users to make a single selection or multiple
  selections from a finite list of options. They are not always the best choice
  from a usability perspective; see the use cases section below for more
  details.
use_cases: >-
  While selects are easy to implement, they aren’t always the best choice from a
  usability perspective.


  Use selects when:


  * You have a long list of finite options. 

    * If the list is shorter than around six items, [radio buttons](https://cfpb.github.io/design-system/components/radio-buttons) or [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) might work better. 
    * If the options include something open ended, a [text input](https://cfpb.github.io/design-system/components/text-inputs) field is better.
  * You need structured data for a long list. 

    * For instance, an open text field for “state” could be entered as Missouri or MO. So if this needs to be standardized, a select facilitates this standardization.
  * The list options are familiar to the user. 

    * A select is not a good place to introduce new or complicated terms or concepts. 
    * For instance, if the question is “What’s your favorite color of the rainbow,” a select could be a good choice. The options are familiar and there are more than six.
behavior: ""
accessibility: >-
  ### Selects

  Keep in mind that selects behave differently on various mobile devices, taking up different amounts of real estate and requiring different interactions. Mobile also doesn’t allow for the use of typeahead to navigate quickly to an item in a list, so navigating long lists can be especially cumbersome.


  ### Multiselects

  From an accessibility standpoint, browser defaults for multiple select components require the use of a mouse (e.g. holding down the control key and clicking several items). The default components are a poor choice for the visually impaired. If a multiselect component is desired, use custom JavaScript to make it accessible.
related_items: "* [Forms
  variables](https://cfpb.github.io/design-system/development/variables#forms-1\
  )"
last_updated: 2020-01-06T20:31:06.632Z
research: ""
---
