---
title: Checkboxes
layout: variation
section: components
secondary_section: Forms
status: Released
description: "Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case.\n\nMore information can be found at:\n\n* http://cfpb.github.io/design-manual/page-components/form-fields.html#checkboxes\t\n* https://cfpb.github.io/capital-framework/components/cf-forms/#basic-checkboxes"
variations:
  - variation_code_snippet: |-
      <div class="m-form-field m-form-field__checkbox">
          <input class="a-checkbox" type="checkbox" id="test_checkbox">
          <label class="a-label" for="test_checkbox">Label</label>
      </div>
    variation_description: >-
      The default section below demonstrates how a checkbox would normally
      appear in code.
    variation_name: Default state
    variation_specs: |-
      Height: 20 px

      Width: 20 px

      Margin right: 10 px

      Border: 1 px, Gray 60 (#919395)

      Background: White (#ffffff)

      Avenir Next Regular, 16 px, Black (#101820)
  - variation_code_snippet: |-
      <div class="m-form-field m-form-field__checkbox">
          <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_checked" checked>
          <label class="a-label" for="test_checkbox_basic_checked">Label</label>
      </div>
    variation_name: Selected state
    variation_specs: |-
      Border: 1 px, Gray 60 (#919395)

      Minicon: 18 px, Black (#101820)
usage: >-
  Selecting the checkbox or touching the label text next to it should toggle the
  state of the checkbox on and off.


  To optimize usability, consider using checkboxes with large target areas. If
  these won’t fit into the design and the default style shown below is used,
  make sure the target area is at least 45 x 45px and that it includes the text
  label.


  <h3>Use cases</h3>


  * Use checkboxes when the user can select more than one option from a list. 

  * Use [radio buttons](/components/radio-buttons) when the user can choose only
  one option out of a list.


  <h4>Nested checkboxes</h4>


  There are times when checkboxes may be nested with parent/child relationships.
  This is common when used within filter interactions.


  <h5>Usability</h5>


  * In this case, the following behavior and design should be followed:

  * Parent is “collapsed” and displays an expandable arrow at the end of the
  text

  * The label of the parent checkbox should be clickable

  * Clicking on the label or arrow toggles the opening/closing of the child
  options

  * In open state, arrow points up; in closed state, arrow points down

  * Child options are in black text and not clickable

  * Clicking on the parent checkbox selects the parent option and all child
  options

  * Clicking on the parent checkbox does not change the state of the open/close
  expansion (if it’s checked with the children expanded, it stays expanded, for
  instance)


  <h3>Content guidelines</h3>


  * Label text should be concise


  - - -
accessibility: >-
  To optimize screen reader accessibility, lay out checkboxes vertically rather
  than horizontally.
research: ''
last_updated: 2019-09-17T14:30:15.293Z
---

