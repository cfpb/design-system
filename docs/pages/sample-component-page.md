---
title: Sample component page
layout: variation
section: null
status: Released
description: 'Intro: Describe this component in 1-3 sentences. Explain why the
  page exists and what users will get out of the content on this page. Be brief.
  Limit to around 400 characters with spaces.'
variation_groups:
  - variation_group_name: Standard [component name] or Types
    variation_group_description: >-
      Optional description. 1-3 sentences, 200-350 characters.


      ### Instructions


      ***Use the following prompts to get started on your component page:***


      *First, add a variation group.*


      *1) In the "Variation group name" field,*  


      * *Use the label "Standard \[component]" if there is **one** standard default component. See [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) and [tables](https://cfpb-sandbox.github.io/design-system/components/tables) as examples.*


      * *Use the label "Types" if there is **more than one** standard component with different use cases. See [buttons](https://cfpb.github.io/design-system/components/buttons) as an example.*


      *2) Click on the "Add variations" button below.* 

      * *If there's one standard component, leave the "Variation name" field blank.* 

      * *If there are types, add as many variations as needed. Add the name of each type to the "Variation name" field.*


      *3) If there are states, add a single code snippet showing them, as shown in this example. If necessary, you can add an image instead of a code snippet, but live samples are strongly preferred.*


      *4) If you have them, add implementation notes to the "Implementation details" tab. Add design, production, and style notes to the "Optional specs" tab.*
    variations:
      - variation_name: ''
        variation_description: ''
        variation_code_snippet: >-
          <div class="m-form-field m-form-field--checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox">
              <label class="a-label" for="test_checkbox">Default</label>
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
        variation_implementation:
          This is developer-focused stuff. Be sure to add the
          `.o-blahblah` class to `blahblah` if you're doing this or that,
          otherwise this bad thing will happen.
        variation_specs: |-
          You can add images here too.

          #### Default checkbox
          - Height: 20 px
          - Width: 20 px
          - Margin right: 10 px
          - Border: 1 px, Gray 60 (#919395)
          - Background: White (#ffffff)
          - Avenir Next Regular, 16 px, Black (#101820)

          #### Hover
          - Border: 2 px, Pacific (#0072ce)

          #### Focus
          - Border: 2 px, Pacific (#0072ce)
          - Outline: Dotted 1px, Pacific (#0072ce)
          - Outline offset: 1px

          #### Selected
          - Border: 1 px, Gray 60 (#919395)
          - Minicon: 18 px, Black (#101820)

          #### Disabled
          - Border: 1 px, Gray 60 (#919395)
          - Background: Gray 10 (#e7e8e9)
          - Avenir Next Regular, 16 px, Dark Gray (#43484e)
  - variation_group_name: Variations
    variation_group_description: >
      Optional descriptive text. 1-3 sentences, 200-350 characters.


      *If your component has further variations beyond what's shown in the Standard/Types group above, add an additional "Variation group", and name it using the "Variation group name" field.*


      *The name of this group may vary depending on use case. For example:*

      * *Use the label "Groups" if you're showing component groupings. See [expandables](https://cfpb.github.io/design-system/components/expandables#groups) for an example.* 

      * *Use the label "Sizes" if you're showing alternate component sizes. See [checkboxes](https://cfpb.github.io/design-system/components/checkboxes#sizes) for an example.*

      * *One-off labels may also be appropriate (for example, "[Responsive tables](https://cfpb.github.io/design-system/components/tables#responsive-tables)", "[Links with icons](https://cfpb.github.io/design-system/components/links#links-with-icons))* 

      * *If in doubt, use the label "Variations"* 


      *Once you've done that, click on the "Add variations" button, label each variation, and add implementation and specs details as needed.*
    variations:
      - variation_name: Feathered checkbox
        variation_description: Brief statement of what this is, if needed. Sample would appear below.
      - variation_name: Striped checkbox
        variation_description: Brief statement of what this is, if needed. Sample would appear below.
      - variation_name: Pleated checkbox
        variation_description: Brief statement of what this is, if needed. Sample would appear below.
use_cases: Provide details on when and where to use this component. Use active
  voice. No character limit. Paragraph content is optional.
guidelines: >-
  ### Content guidelines


  Include character count restrictions/recommendations, casing guidelines, voice, etc. No character limit. Paragraph content is optional.


  ### Stylistic guidelines


  If applicable, include information on how the component is styled or used. This is not used often in component pages, mostly foundations pages.
behavior: >-


  Responsive guidelines.


  | Above 600 px                                                         | Below 601 px                                                 |

  | -------------------------------------------------------------------- | ------------------------------------------------------------ |

  | Image showing what component looks like at tablet/desktop breakpoint | Image showing what component looks like at mobile breakpoint |
restrictions:
  - restrictions_do: Words or photos
    restrictions_do_not: Words or photos
---
