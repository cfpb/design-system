---
title: Sample component page
layout: variation
section: null
status: Released
description: "Intro: Describe this component in 1-3 sentences. Explain why the
  page exists and what users will get out of the content on this page. Be brief.
  Limit to around 400 characters with spaces."
variation_groups:
  - variation_group_name: Standard [component name]
    variation_group_description: >-
      Optional description. 1-3 sentences, 200-350 characters.


      ### Instructions


      ***Use the following prompts to get started on your component page:***


      *1) If there is one standard default component, add the label "Standard \[component]" to the field "Component variation group name" above. Examples: See [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) and [tables](https://cfpb-sandbox.github.io/design-system/components/tables).*


      *If your component doesn't have just one standard default, but rather more than one type with different use cases, add the label "Types" to the field "Component variation group name" above. Examples: [E-mail signup forms](*https://cfpb.github.io/design-system/components/e-mail-signup-forms*) and [buttons](*https://cfpb.github.io/design-system/components/buttons*).*


      *2) Click on the "Add variations" button below. Leave the "Variation name" field blank if there's one standard component. If you're adding types, then you'll need to add more than one variation; add the name of each type to the "Variation name" field.* 


      *3) If there are states, add a single code snippet showing them, as shown in this example. If necessary, you can add an image instead of a code snippet, but live samples are strongly preferred.*


      *4) If you have them, add implementation notes to the "Implementation details" tab. Add design and style notes to the "Optional specs" tab.*
    variations:
      - variation_name: ""
        variation_description: ""
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox">
              <label class="a-label" for="test_checkbox">Default</label>
          </div>

          <br>

          <!--Hover-->

          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox hover" type="checkbox" id="test_checkbox_basic_hover">
              <label class="a-label" for="test_checkbox_basic_hover">Hover</label>
          </div>

          <br>

          <!--Focus-->

          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox focus" type="checkbox" id="test_checkbox_basic_focus">
              <label class="a-label" for="test_checkbox_basic_focus">Focus</label>
          </div>

          <br>

          <!--Selected-->

          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_checked" checked>
              <label class="a-label" for="test_checkbox_basic_checked">Selected</label>
          </div>

          <br>

          <!--Disabled-->

          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_disabled" disabled>
              <label class="a-label" for="test_checkbox_basic_disabled">Disabled</label>
          </div>

          <br>

          <!--Disabled/selected-->

          <div class="m-form-field m-form-field__checkbox">
              <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_disabled" disabled checked>
              <label class="a-label" for="test_checkbox_basic_disabled">Disabled/selected</label>
          </div>
        variation_implementation: This is developer-focused stuff. Be sure to add the
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
          - Avenir Next Regular, 16 px, Gray (#5a5d61)
  - variation_group_name: Variations
    variation_group_description: >-
      Optional descriptive text. 1-3 sentences, 200-350 characters. 


      ### Instructions


      ***Use the following prompts to add variations:***


      *Add variations to this group. To get started, click on the "Add variations" button. Add a "Variation name" in the corresponding field, and fill in the description, code snippet, implementation, and specs fields.*


      *Occasionally, "Variations" may not be the right label for this group. Some other instances of this label: "Groups", "Sizes", "Responsive \[component]." see [checkboxes](https://cfpb.github.io/design-system/components/checkboxes), [buttons](https://cfpb.github.io/design-system/components/buttons), and  [tables](https://cfpb-sandbox.github.io/design-system/components/tables) for other ways to group samples.*
    variations:
      - variation_name: Feathered checkbox
        variation_description: Brief statement of what this is, if needed. Sample would appear below.
      - variation_name: Striped checkbox
        variation_description: Brief statement of what this is, if needed. Sample would appear below.
      - variation_name: Pleated checkbox
        variation_description: Brief statement of what this is, if needed. Sample would appear below.
use_cases: >-
  ### Use cases


  Provide details on when and where to use this component. Use active voice. No character limit. Paragraph content is optional.


  ### Content guidelines


  Include character count restrictions/recommendations, casing guidelines, voice, etc. No character limit. Paragraph content is optional.


  ### Behavior


  Responsive guidelines.   


  | Above 600 px                                                         | Below 601 px                                                 |

  | -------------------------------------------------------------------- | ------------------------------------------------------------ |

  | Image showing what component looks like at tablet/desktop breakpoint | Image showing what component looks like at mobile breakpoint |
restrictions:
  - restrictions_do: Words or photos
    restrictions_do_not: Words or photos
secondary_section: Alerts
---
