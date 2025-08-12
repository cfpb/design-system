---
title: Elements
layout: variation
section: components
status: Released
description: The components are custom elements (web components).
variation_groups:
  - variations:
      - variation_is_deprecated: false
        variation_name: Button
        variation_description: A basic button in web component syntax.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-button>This is a button</cfpb-button>
          </div>
        variation_code_snippet: >-
          <cfpb-button>This is a button</cfpb-button>
      - variation_is_deprecated: false
        variation_name: File upload
        variation_description: >-
          Allows files to be selected for upload.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-file-upload>Select file</cfpb-file-upload>
          </div>
        variation_code_snippet: >-
          <cfpb-file-upload>Select file</cfpb-file-upload>
      - variation_is_deprecated: false
        variation_name: Checkbox
        variation_description: >-
          A checkbox component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-form-choice>
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice disabled>
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice validation="success">
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice validation="warning">
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice validation="error">
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice large>
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice large disabled>
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice large validation="success">
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice large validation="warning">
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice large validation="error">
              Gold
            </cfpb-form-choice>
          </div>
        variation_code_snippet: >-
          <cfpb-form-choice>
              Gold
            </cfpb-form-choice>

            <cfpb-form-choice disabled>
              Gold
            </cfpb-form-choice>

            <cfpb-form-choice validation="success">
              Gold
            </cfpb-form-choice>

            <cfpb-form-choice validation="warning">
              Gold
            </cfpb-form-choice>

            <cfpb-form-choice validation="error">
              Gold
            </cfpb-form-choice>

            <cfpb-form-choice large>
              Gold
            </cfpb-form-choice>

            <cfpb-form-choice large disabled>
              Gold
            </cfpb-form-choice>
      - variation_is_deprecated: false
        variation_name: Radio button
        variation_description: >-
          A radio button component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-form-choice type="radio">
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice type="radio" disabled>
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice type="radio" validation="success">
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice type="radio" validation="warning">
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice type="radio" validation="error">
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice type="radio" large>
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice type="radio" large disabled>
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice type="radio" large validation="success">
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice type="radio" large validation="warning">
              Gold
            </cfpb-form-choice>

            <br>

            <cfpb-form-choice type="radio" large validation="error">
              Gold
            </cfpb-form-choice>
          </div>
        variation_code_snippet: >-
          <cfpb-form-choice type="radio">
            Gold
          </cfpb-form-choice>

          <cfpb-form-choice type="radio" disabled>
            Gold
          </cfpb-form-choice>

          <cfpb-form-choice type="radio" validation="success">
            Gold
          </cfpb-form-choice>

          <cfpb-form-choice type="radio" validation="warning">
            Gold
          </cfpb-form-choice>

          <cfpb-form-choice type="radio" validation="error">
            Gold
          </cfpb-form-choice>

          <cfpb-form-choice type="radio" large>
            Gold
          </cfpb-form-choice>

          <cfpb-form-choice type="radio" large disabled>
            Gold
          </cfpb-form-choice>

          <cfpb-form-choice type="radio" large validation="success">
            Gold
          </cfpb-form-choice>

          <cfpb-form-choice type="radio" large validation="warning">
            Gold
          </cfpb-form-choice>

          <cfpb-form-choice type="radio" large validation="error">
            Gold
          </cfpb-form-choice>

        variation_name: Topic tag
        variation_description: >-
          Tag element for topics.
        variation_code_snippet_rendered: >-
          <div>
          <cfpb-tag-group stacked>
            <cfpb-tag-topic>
              Option 1
            </cfpb-tag-topic>
            <cfpb-tag-topic href="#">
              Option 2
            </cfpb-tag-topic>
            <cfpb-tag-topic href="#">
              Option 3
            </cfpb-tag-topic>
          </cfpb-tag-group>
          </div>
        variation_code_snippet: >-
          <cfpb-tag-topic stacked>
            Option 1
          </cfpb-tag-topic>
          <cfpb-tag-topic href="#">
            Option 2
          </cfpb-tag-topic>
          <cfpb-tag-topic href="#">
            Option 3
          </cfpb-tag-topic>
      - variation_is_deprecated: false
        variation_name: Filter tag
        variation_description: >-
          Tag element for filters.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-tag-filter>
              Option 1
            </cfpb-tag-filter>
          </div>
        variation_code_snippet: >-
          <cfpb-tag-filter>
            Option 1
          </cfpb-tag-filter>
      - variation_is_deprecated: false
        variation_name: Filter tag group
        variation_description: >-
          A group of filter Tag elements.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-tag-group>
              <cfpb-tag-filter>
                Option 1
              </cfpb-tag-filter>
              <cfpb-tag-filter>
                Option 2
              </cfpb-tag-filter>
              <cfpb-tag-filter>
                Option 3
              </cfpb-tag-filter>
            </cfpb-tag-group>
          </div>
        variation_code_snippet: >-
          <cfpb-tag-group>
            <cfpb-tag-filter>
              Option 1
            </cfpb-tag-filter>
            <cfpb-tag-filter>
              Option 2
            </cfpb-tag-filter>
            <cfpb-tag-filter>
              Option 3
            </cfpb-tag-filter>
          </cfpb-tag-group>
    variation_group_name: Types
guidelines: ''
eyebrow: Web Components
use_cases: ''
accessibility: ''
related_items: ''
last_updated: 2020-01-06T20:31:06.632Z
behavior: ''
research: ''
---
