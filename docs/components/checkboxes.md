---
title: Checkboxes
layout: variation
section: components
secondary_section: Forms
status: Released
description: >-
  Use checkboxes when the user can select more than one option from a list. Make
  clear with helper text that this is the case.


  More information can be found at:


  * <http://cfpb.github.io/design-manual/page-components/form-fields.html#checkboxes>	

  * <https://cfpb.github.io/capital-framework/components/cf-forms/#basic-checkboxes>
variation_groups:
  - variations:
      - variation_code_snippet: |-
          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox">
              <label class="a-label" for="test_checkbox">Label</label>
          </div>
        variation_description: The default section below demonstrates how a checkbox
          would normally appear in code.
        variation_name: Default state
      - variation_name: Hover state
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox hover" type="checkbox" id="test_checkbox_basic_hover">
              <label class="a-label" for="test_checkbox_basic_hover">Label</label>
          </div>
      - variation_name: Focus state
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox focus" type="checkbox" id="test_checkbox_basic_focus">
              <label class="a-label" for="test_checkbox_basic_focus">Label</label>
          </div>
      - variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_checked" checked>
              <label class="a-label" for="test_checkbox_basic_checked">Label</label>
          </div>
        variation_name: Selected state
      - variation_name: Disabled state
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_disabled" disabled>
              <label class="a-label" for="test_checkbox_basic_disabled">Label</label>
          </div>
      - variation_name: Disabled/selected state
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_disabled" disabled checked>
              <label class="a-label" for="test_checkbox_basic_disabled">Label</label>
          </div>
      - {}
    variation_group_name: Standard checkboxes
  - variation_group_name: Large target area checkboxes
    variations:
      - variation_name: Default state
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox
          m-form-field__lg-target">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default">
              <label class="a-label" for="test_checkbox_lg_default">Label</label>
          </div>
        variation_specs: |-
          Target area
          - Minimum height: 50px
          - Background: Gray 10 (#e7e8e9)
          - Padding: 15 px

          Radio button (or checkbox) and text
          - Border: 1 px, Gray 60 (#919395)
          - Background: 20 px x 20 px, White (#ffffff)
          - Avenir Next Regular, 16 px, Black (#101820)
      - variation_name: Hover state
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox
          m-form-field__lg-target">
              <input class="a-checkbox hover" type="checkbox" id="test_checkbox_lg_hover">
              <label class="a-label" for="test_checkbox_lg_hover">Label</label>
          </div>
        variation_specs: |-
          Target area
          - Border: 2 px, Pacific (#0072ce)
          - Background: Gray 10 (#e7e8e9)
          - Radio button (or checkbox)

          Checkbox
          - Border: 2 px, Pacific (#0072ce)
      - variation_name: Focus state
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox
          m-form-field__lg-target">
              <input class="a-checkbox focus" type="checkbox" id="test_checkbox_lg_focus">
              <label class="a-label" for="test_checkbox_lg_focus">Label</label>
          </div>
        variation_specs: |-
          
          Target area
          - Border: 2 px, Pacific (#0072ce)
          - Background: Gray 10 (#e7e8e9)
          - Outline: Dotted 1px, Pacific (#0072ce)

          Checkbox
          - Border: 2 px, Pacific (#0072ce)
      - variation_name: Selected state
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox
          m-form-field__lg-target">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_checked" checked>
              <label class="a-label" for="test_checkbox_lg_checked">Label</label>
          </div>
        variation_specs: |-
          Target area
          - Border: 1 px, Pacific (#0072ce)
          - Background: Pacific 20 (#d6e8fa)

          Checkbox
          - Border: 1 px, Gray 60 (#919395)
          - Background: 14 x 14 px, Pacific (#0072ce)
      - variation_name: Disabled state
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox
          m-form-field__lg-target">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_disabled" disabled>
              <label class="a-label" for="test_checkbox_lg_disabled">Label</label>
          </div>
        variation_specs: |-
          Checkbox
          - Border: 1 px, Gray 60 (#919395)
          - Background: Gray 20 (#d2d3d5)
          - Avenir Next Regular, 16 px, Gray (#5a5d61)
      - variation_name: Disabled/selected state
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox
          m-form-field__lg-target">
              <input class="a-checkbox"
                     type="checkbox"
                     id="test_checkbox_lg_disabled"
                     disabled
                     checked>
              <label class="a-label" for="test_checkbox_lg_disabled">Label</label>
          </div>
    variation_group_description: For better usability, consider using checkboxes and
      radio buttons with large target areas. These are easier to interact with
      (especially on smaller screens) and harder to miss. They are especially
      desirable when the form will have heavy mobile usage. Given the amount of
      real estate they occupy, they’re probably not suited for all use cases;
      for example, they may not work well for terms of service agreement
      checkboxes.
use_cases: >-
  * Use checkboxes when the user can select more than one option from a list.

  * Use [radio buttons](/design-system/components/radio-buttons) when the user can choose only one option out of a list.


  ##### Nested checkboxes


  There are times when checkboxes may be nested with parent/child relationships. This is common when used within filter interactions.


  ##### Usability


  In this case, the following behavior and design should be followed:

  * Parent is “collapsed” and displays an expandable arrow at the end of the text.

  * The label of the parent checkbox should be clickable.

  * Clicking on the label or arrow toggles the opening/closing of the child options.

  * In open state, arrow points up; in closed state, arrow points down.

  * Child options are in black text and not clickable.

  * Clicking on the parent checkbox selects the parent option and all child options.

  * Clicking on the parent checkbox does not change the state of the open/close expansion (if it’s checked with the children expanded, it stays expanded, for instance).
content_guidelines: >-
  * Label text should be concise

  * Text spacing should inform spacing of checkboxes and checkbox should be vertically centered with the first line of text in an option.
behavior: >-
  Selecting the checkbox or touching the label text next to it should toggle the
  state of the checkbox on and off.

  To optimize usability, consider using checkboxes with large target areas. If these won’t fit into the design and the default style shown below is used, make sure the target area is at least 45 x 45px and that it includes the text label.
accessibility: To optimize screen reader accessibility, lay out checkboxes
  vertically rather than horizontally.
last_updated: 2019-09-17T14:30:15.293Z
research: ""
---
