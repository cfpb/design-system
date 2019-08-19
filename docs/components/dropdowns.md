---
title: Dropdowns and multi-select
layout: variation
section: components
secondary_section: Forms
status: Proposed
description: "More information can be found at:\n\n* http://cfpb.github.io/design-manual/page-components/form-fields.html#dropdowns\t\n* https://cfpb.github.io/capital-framework/components/cf-forms/#select-dropdown\n* https://cfpb.github.io/capital-framework/components/cf-forms/#basic-multiselect"
variations:
  - variation_code_snippet: |-
      <div class="m-form-field m-form-field__select">
          <label class="a-label a-label__heading" for="test_select_default">
              Label
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
    variation_description: ''
    variation_name: Select dropdown
  - variation_code_snippet: |-
      <div class="m-form-field m-form-field__select">
          <label class="a-label a-label__heading" for="test_select__multiple">
              Label
          </label>
          <select class="a-multiselect" id="test_select__multiple" multiple>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
              <option value="option1">Option 5</option>
              <option value="option2">Option 6</option>
              <option value="option3">Option 7</option>
              <option value="option4">Option 8</option>
          </select>
      </div>
    variation_description: ''
    variation_name: Multiselect
usage: >-
  **Use cases**

  While dropdowns are easy to implement, they aren’t always the best choice from
  a usability perspective.


  Use dropdowns when:

  * You have a long list of finite options. If the list is shorter than around
  six items, radio buttons might work better. If the options include something
  open ended, a text input field is better.

  * You need structured data for a long list. For instance, an open text field
  for “state” could be entered as Missouri or MO. So if this needs to be
  standardized, a dropdown facilitates this standardization.

  * The list options are familiar to the user. A dropdown is not a good place to
  introduce new or complicated terms or concepts. For instance, if the question
  is “What’s your favorite color of the rainbow,” a dropdown could be a good
  choice. The options are familiar and there are more than six. You don’t want
  the user to have to read and absorb a lot of new information in a dropdown.
accessibility: >-
  Keep in mind that dropdowns behave differently on various mobile devices,
  taking up different amounts of real estate and requiring different
  interactions. Mobile also doesn’t allow for the use of typeahead to navigate
  quickly to an item in a list, so navigating long lists can be especially
  cumbersome.


  From an accessibility standpoint, browser defaults for multiple select
  components require the use of a mouse (e.g. holding down the control key and
  clicking several items). The default components are a poor choice for the
  visually impaired. If a multi-select component is desired, use custom
  JavaScript to make it accessible.
research: >-
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
  rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna
  non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut
  dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut
  blandit.


  Odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec
  congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu
  ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in
  metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus
  tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur.


  Vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac
  egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora
  torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit
  amet leo consequat posuere.
help_us: ''
---

