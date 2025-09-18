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

            <br>

            <cfpb-button href="#" full-on-mobile>This is a button link</cfpb-button>

            <br>

            <cfpb-button disabled>This is a disabled button link</cfpb-button>

            <br>
            <hr>
            <br>
            <p>
            The following section allows interacting with the button API.
            </p>
            <p><cfpb-button id="btn-example">{% include icons/updating.svg %} Example button</cfpb-button></p>
            <p>
            <button id="show-icon">Show icon</button>
            <button id="hide-icon">Hide icon</button>
            </p>
            <script>
            const btn = document.querySelector('#btn-example');

            const btnShowIcon = document.querySelector('#show-icon');
            const btnHideIcon = document.querySelector('#hide-icon');

            btnShowIcon.addEventListener('click',()=>{
              btn.showIcon();
            });
            btnHideIcon.addEventListener('click',()=>{
              btn.hideIcon();
            });
            </script>
          </div>
        variation_code_snippet: >-
          <cfpb-button>This is a button</cfpb-button>
          <cfpb-button href="#" full-on-mobile>This is a button link</cfpb-button>
          <cfpb-button disabled>This is a disabled button link</cfpb-button>
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

      - variation_is_deprecated: false
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
            <cfpb-tag-group id="tag-group-example">
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

            <br>
            <hr>
            <br>
            <p>
            The following section allows interacting with the tag group API.
            </p>
            <p>
            <label>
              Name:
              <input id="add-tag-name">
            </label>
            </p><p>
            <label>
              Index:
              <input id="add-tag-index" type="number">
            </label>
            </p><p>
            <label>
              Type:
              <select id="tag-type">
                <option>cfpb-tag-filter</option>
                <option>cfpb-tag-topic (no link)</option>
                <option>cfpb-tag-topic (link)</option>
              </select>
            </label>
            </p><p>
            <button id="add-tag">Add tag</button>
            <button id="remove-tag">Remove tag</button>
            </p>
            <br>
            <label>
            <p>Events dispatched:<br>
            <textarea id="tag-group-events" style="width:100%"></textarea>
            </label>
            </p>
            <script>
            const tagGroup = document.querySelector('#tag-group-example');
            const textArea = document.querySelector('#tag-group-events');
            tagGroup.addEventListener('tag-added', (evt)=> textArea.value += 'tag-added: ' + evt.detail.target.textContent.trim() + ' at index ' + evt.detail.index + '\n');
            tagGroup.addEventListener('tag-removed', (evt)=> textArea.value +=  'tag-removed: ' + evt.detail.target.textContent.trim() + ' at index ' + evt.detail.index + '\n');

            const btnAdd = document.querySelector('#add-tag');
            const btnRemove = document.querySelector('#remove-tag');
            const tagName = document.querySelector('#add-tag-name');
            const tagIndex = document.querySelector('#add-tag-index');
            const tagType = document.querySelector('#tag-type');

            btnAdd.addEventListener('click',()=>{
              let tag;
              switch (tagType.value) {
                case 'cfpb-tag-filter' :
                  tag = document.createElement('cfpb-tag-filter');
                break;
                case 'cfpb-tag-topic (no link)' :
                  tag = document.createElement('cfpb-tag-topic');
                break;
                case 'cfpb-tag-topic (link)' :
                  tag = document.createElement('cfpb-tag-topic');
                  tag.setAttribute('href', '#');
                break;
              }
              tag.innerHTML = tagName.value;
              const index = tagIndex.value === '' ? -1 : Number(tagIndex.value);
              tagGroup.addTag(tag, index);
            });

            btnRemove.addEventListener('click',()=>{
              const tags = tagGroup.querySelectorAll('*')
              let tag;
              tags.forEach((item) => {
                if (item.textContent.trim() === tagName.value) tag = item;
              });
              tagGroup.removeTag(tag);
            });
            </script>
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
      - variation_is_deprecated: false
        variation_name: Label
        variation_description: >-
          A label component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-label>
              <div slot="label">This is a label</div>
            </cfpb-label>

            <br>
            <br>
            <br>

            <cfpb-label>
              <div slot="label">This is a label</div>
              <div slot="helper">With helper text</div>
            </cfpb-label>

            <br>
            <br>
            <br>

            <cfpb-label block>
              <div slot="label">This is a label</div>
              <div slot="helper">With a block-level helper text</div>
            </cfpb-label>
          </div>
        variation_code_snippet: >-
          <cfpb-label>
            <div slot="label">This is a label</div>
          </cfpb-label>

          <cfpb-label>
            <div slot="label">This is a label</div>
            <div slot="helper">With helper text</div>
          </cfpb-label>

          <cfpb-label block>
            <div slot="label">This is a label</div>
            <div slot="helper">With a block-level helper text</div>
          </cfpb-label>
      - variation_is_deprecated: false
        variation_name: Multiselect
        variation_description: >-
          A select component that can have multiple selections.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-multiselect label="Select a planet">
              <select multiple>
                <option>
                  Mercury
                </option>
                <option>
                  Venus
                </option>
                <option>
                  Earth
                </option>
                <option>
                  Mars
                </option>
                <option>
                  Jupiter
                </option>
                <option>
                  Saturn
                </option>
                <option>
                  Uranus
                </option>
                <option>
                  Neptune
                </option>
              </select>
            </cfpb-multiselect>
          </div>
        variation_code_snippet: >-
          <cfpb-multiselect>
            <select multiple>
              <option>
                Mercury
              </option>
              <option>
                Venus
              </option>
              <option>
                Earth
              </option>
              <option>
                Mars
              </option>
              <option>
                Jupiter
              </option>
              <option>
                Saturn
              </option>
              <option>
                Uranus
              </option>
              <option>
                Neptune
              </option>
            </select>
          </cfpb-multiselect>
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
