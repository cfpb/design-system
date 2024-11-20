---
layout: variation
section: components
status: Released
variation_groups:
  - variation_group_name: Types
    variations:
      - variation_code_snippet: >-
          <!--States are shown for demonstration purposes only-->


          <h4>

          States

          </h4>

          <input class="a-text-input"
                type="text"
                id="textinput-example-default"
                placeholder="Placeholder text"
          value="Enabled">

          <br><br>

          <input class="a-text-input hover"
                 type="text"
                 id="textinput-example-hover"
                 placeholder="Placeholder text"
                 value="Hover">
          <br><br>

          <input class="a-text-input focus"
                 type="text"
                 id="textinput-example-focus"
                 placeholder="Placeholder text"
                 value="Focus">
          <br><br>

          <input class="a-text-input"
                 type="text"
                 id="textinput-example-disabled"
                 placeholder="Disabled"
                 disabled>
          <br>

          <br>

          <br>


          <h4>

          Validation status

          </h4>

          <input class="a-text-input a-text-input--success" type="text" placeholder="Success" id="form-input-success" aria-describedby="form-input-success_message">

          <br><br>

          <input class="a-text-input a-text-input--warning" type="text" placeholder="Warning" id="form-input-warning" aria-describedby="form-input-warning_message">

          <br><br>

          <input class="a-text-input a-text-input--error" type="text" placeholder="Error" id="form-input-error" aria-describedby="form-input-error_message">
        variation_specs: ''
        variation_name: Text input
        variation_description:
          Use when the expected user input is a single line of
          text, for example email addresses, names, or search queries. The
          length of the input field should be proportional to the expected user
          input, so that the user can see what they've typed without having to
          scroll to reveal hidden content.
      - variation_is_deprecated: false
        variation_name: Text input (full width)
        variation_code_snippet: |-
          <div class="m-form-field">
              <input class="a-text-input a-text-input--full"
                    type="text"
                    id="full-textinput-example"
          placeholder="Placeholder text"
          value="Input text">
          </div>
      - variation_is_deprecated: false
        variation_name: Search input
        variation_description: Use for search inputs.
        variation_code_snippet: |-
          <form>
              <div class="o-search-input">
                  <div class="o-search-input__input">
                      <label for="example-search-text" class="o-search-input__input-label" aria-label="Search for a term">
                        {% include icons/search.svg %}
                      </label>
                      <input type="search" id="example-search-text" name="example-search-text" value="" class="a-text-input a-text-input__full" placeholder="Enter your search term(s)" title="Enter your search term(s)" autocomplete="off" maxlength="75">
                      <button type="reset" onclick="document.getElementById('example-search-text').setAttribute('value','')" aria-label="Clear search" title="Clear search">
                        {% include icons/error.svg %}
                      </button>
                  </div>
                  <button class="a-btn" type="submit" aria-label="Search for term(s)">
                      Search
                  </button>
              </div>
          </form>
    variation_group_description: ''
  - variation_group_name: Text area input
    variations:
      - variation_is_deprecated: false
        variation_name: Text area input
        variation_description:
          Use when the expected user input is more than a few words
          and could span multiple lines. Make sure the input size is big enough
          that the user can see what they've typed without having to scroll to
          reveal hidden content, and small enough that the user doesn't have  to
          navigate the viewport in order to see the entire field at once.
        variation_code_snippet: |-
          <textarea class="a-text-input"
                    id="textarea-example-default"
                    placeholder="Placeholder text">Input text</textarea>
      - variation_is_deprecated: false
        variation_name: Text area input (full width)
        variation_code_snippet: |-
          <div class="m-form-field">
              <textarea class="a-text-input a-text-input--full"
                        id="full-textarea-example"
                     placeholder="Placeholder text">Input text</textarea>
          </div>
guidelines: >-
  ### Stylistic guidelines


  Choose the appropriate width for text input fields so they match the kind of information requested. This makes it easier for users to quickly grasp what’s being asked.


  For example, it’s hard to understand at a glance that a single 1,000 px-wide text field is asking for your phone number or birth date. When possible, be even more explicit with the width by dividing it into known character counts. For instance, social security number should be three characters, then two, then four. Be mindful of not getting too restrictive, however. This approach could work for phone numbers, but only if international numbers are not permitted.


  These types of inputs should always be smaller widths:


  * Middle initial

  * Date, month, or year

  * State abbreviation


  ### Content guidelines


  Text should be in sentence case. Use placeholder text for formatting examples only. Don’t use for instructions. Placeholder text disappears once a user begins typing in the field. For more information, see [Design System guidance on placeholder text](https://cfpb.github.io/design-system/components/helper-text#placeholder-text-1).
eyebrow: Components
title: Text inputs
description: Text inputs allow the user to enter any combination of letters,
  numbers, or symbols. Text input fields can span single or multiple lines.
use_cases: ''
behavior: As the screen size gets smaller, break multi-column inputs into a
  single, stacked column. Fields that are next to each other on a large screen,
  should stack at smaller screen sizes. When possible, fields should span the
  entire width of the screen at the smallest screen sizes.
accessibility: >-
  Inputs should always be paired with a `label` for accessibility reasons.


  Users of screen readers use the tab key to move focus from one form control to another. Make sure that tab focus order reflects the way you would like users to navigate through the form. Consider whether tabs should move a user down or across the page.
related_items: ''
last_updated: 2020-01-28T15:55:47.394Z
research: ''
---
