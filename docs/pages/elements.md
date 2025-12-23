---
title: Elements
layout: variation
section: components
status: Released
description: These components are custom elements (web components).
variation_groups:
  - variations:
      - variation_is_deprecated: false
        variation_name: Icon and Text
        variation_description: A basic pairing of an SVG icon and text.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-icon-text>No icon</cfpb-icon-text>

            <br>

            <cfpb-icon-text>{% include icons/download.svg %} Icon on left</cfpb-icon-text>

            <br>

            <cfpb-icon-text>Icon on right {% include icons/download.svg %}</cfpb-icon-text>

            <br>

            <cfpb-icon-text>{% include icons/bank.svg %} Icon on both sides {% include icons/download.svg %}</cfpb-icon-text>

            <br>

            <cfpb-icon-text disabled>Disabled state {% include icons/download.svg %}</cfpb-icon-text>

            <br>

            <cfpb-icon-text style="--icon-text-divider: var(--red-60)">{% include icons/warning.svg %} Warning state</cfpb-icon-text>

            <br><hr><br>

            <p>
            The following section allows interacting with the API.
            </p>
            <p><cfpb-icon-text id="icon-text-example">{% include icons/bank.svg %} Example icon-text component {% include icons/download.svg %}</cfpb-icon-text></p>
            <p>

            <input type="checkbox" id="icon-text-example-warning" />
            <label for="icon-text-example-warning">Warning</label>

            </p><p>

            <input type="checkbox" id="icon-text-example-disabled" />
            <label for="icon-text-example-disabled">Disabled</label>

            </p><p>

            <input type="checkbox" id="icon-text-example-icon-hidden" />
            <label for="icon-text-example-icon-hidden">Hide icon</label>

            </p>
            <script>
            (function(){
            const iconTextEx = document.querySelector('#icon-text-example');

            const warBtn = document.querySelector('#icon-text-example-warning');
            const disBtn = document.querySelector('#icon-text-example-disabled');

            const hiddenBtn = document.querySelector('#icon-text-example-icon-hidden');

            warBtn.addEventListener('click', () => {
              if (iconTextEx.hasAttribute('style')) {
                iconTextEx.removeAttribute('style');
              } else {
                iconTextEx.setAttribute('style', '--icon-text-divider: var(--red-60)');
              }
            });

            disBtn.addEventListener('click', () => {
              iconTextEx.disabled = !iconTextEx.disabled;
            });

            hiddenBtn.addEventListener('click', () => {
              iconTextEx.iconHidden = !iconTextEx.iconHidden;
            });
            })();
            </script>
          </div>
        variation_code_snippet: >-
          <cfpb-icon-text>No icon</cfpb-icon-text>
          <cfpb-icon-text>{% include icons/download.svg %} Icon on left</cfpb-icon-text>
          <cfpb-icon-text>Icon on right {% include icons/download.svg %}</cfpb-icon-text>
          <cfpb-icon-text>{% include icons/bank.svg %} Icon on both sides {% include icons/download.svg %}</cfpb-icon-text>
          <cfpb-icon-text disabled>Disabled state {% include icons/download.svg %}</cfpb-icon-text>
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

            <cfpb-button style-as-link href="#">This is a button styled as a link</cfpb-button>

            <br>

            <cfpb-button>This is a button with an icon {% include icons/download.svg %}</cfpb-button>

            <br>

            <cfpb-button disabled>This is a disabled button with an icon {% include icons/download.svg %}</cfpb-button>

            <br>
            <hr>
            <br>
            <p>
            The following section allows interacting with the API.
            </p>
            <p><cfpb-button id="btn-example">{% include icons/updating.svg %} Example button</cfpb-button></p>

            <p>
            <label for="btn-example-variant">Button type:</label>
            <select id="btn-example-variant">
              <option>primary</option>
              <option>secondary</option>
              <option>warning</option>
            </select>

            </p><p>

            <input type="checkbox" id="btn-example-flush-left" />
            <label for="btn-example-flush-left">Flush left</label>

            </p><p>

            <input type="checkbox" id="btn-example-flush-right" />
            <label for="btn-example-flush-right">Flush right</label>

            </p><p>

            <input type="checkbox" id="btn-example-disabled" />
            <label for="btn-example-disabled">Disabled</label>

            </p><p>

            <input type="checkbox" id="btn-example-hidden" />
            <label for="btn-example-hidden">Hide icon</label>

            </p><p>

            <input type="checkbox" id="btn-example-link" />
            <label for="btn-example-link">Link style</label>

            </p><p>

            <input type="checkbox" id="btn-example-full" />
            <label for="btn-example-full">Full on mobile</label>

            </p>

            <script>
            (function(){
            const btnEx = document.querySelector('#btn-example');

            const variantSel = document.querySelector('#btn-example-variant');

            const flushLeft = document.querySelector('#btn-example-flush-left');
            const flushRight = document.querySelector('#btn-example-flush-right');

            const disBtn = document.querySelector('#btn-example-disabled');
            const hidBtn = document.querySelector('#btn-example-hidden');
            const linkBtn = document.querySelector('#btn-example-link');
            const fullBtn = document.querySelector('#btn-example-full');

            variantSel.addEventListener('change',()=>{
              btnEx.variant = variantSel.value;
            });

            flushLeft.addEventListener('click',()=>{
              btnEx.flushLeft = !btnEx.flushLeft;
            });

            flushRight.addEventListener('click',()=>{
              btnEx.flushRight = !btnEx.flushRight;
            });

            disBtn.addEventListener('click',()=>{
              btnEx.disabled = !btnEx.disabled;
            });

            hidBtn.addEventListener('click',()=>{
              if (hidBtn.checked) btnEx.hideIcon();
              else btnEx.showIcon();
            });

            linkBtn.addEventListener('click',()=>{
              btnEx.styleAsLink = !btnEx.styleAsLink;
            });

            fullBtn.addEventListener('click',()=>{
              btnEx.fullOnMobile = !btnEx.fullOnMobile;
            });

            })();
            </script>
          </div>
        variation_code_snippet: >-
          <cfpb-button>This is a button</cfpb-button>
          <cfpb-button href="#" full-on-mobile>This is a button link</cfpb-button>
          <cfpb-button disabled>This is a disabled button link</cfpb-button>
          <cfpb-button style-as-link href="#">This is a button styled as a link</cfpb-button>
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
            <p> Checkbox icons:</p>

            <cfpb-checkbox-icon borderless checked></cfpb-checkbox-icon>
            <cfpb-checkbox-icon borderless></cfpb-checkbox-icon>
            <cfpb-checkbox-icon borderless disabled checked></cfpb-checkbox-icon>
            <cfpb-checkbox-icon borderless checked validation="error"></cfpb-checkbox-icon>
            <cfpb-checkbox-icon></cfpb-checkbox-icon>
            <cfpb-checkbox-icon checked></cfpb-checkbox-icon>
            <cfpb-checkbox-icon disabled></cfpb-checkbox-icon>
            <cfpb-checkbox-icon checked disabled></cfpb-checkbox-icon>
            <cfpb-checkbox-icon validation="error"></cfpb-checkbox-icon>
            <cfpb-checkbox-icon checked validation="warning"></cfpb-checkbox-icon>
            <cfpb-checkbox-icon validation="success"></cfpb-checkbox-icon>

            <br>
            <hr>
            <br>
            <p>
            The following section allows interacting with the API.
            </p>
            <p><cfpb-checkbox-icon id="checkbox-icon-example"></cfpb-checkbox-icon></p>

            <p>

            <label for="checkbox-icon-example-validation">Validation state:</label>
            <select id="checkbox-icon-example-validation">
              <option>---</option>
              <option>success</option>
              <option>warning</option>
              <option>error</option>
            </select>

            </p><p>

            <input type="checkbox" id="checkbox-icon-example-checked" />
            <label for="checkbox-icon-example-checked">Checked</label>

            </p><p>

            <input type="checkbox" id="checkbox-icon-example-borderless" />
            <label for="checkbox-icon-example-borderless">Borderless</label>

            </p><p>

            <input type="checkbox" id="checkbox-icon-example-disabled" />
            <label for="checkbox-icon-example-disabled">Disabled</label>

            </p>

            <script>
            (function(){
            const iconEx = document.querySelector('#checkbox-icon-example');

            const valSel = document.querySelector('#checkbox-icon-example-validation');

            const checkBtn = document.querySelector('#checkbox-icon-example-checked');
            const borderBtn = document.querySelector('#checkbox-icon-example-borderless');
            const disBtn = document.querySelector('#checkbox-icon-example-disabled');

            valSel.addEventListener('change',()=>{
              if (valSel.value !== '---') iconEx.validation = valSel.value;
              else iconEx.removeAttribute('validation');
            });

            checkBtn.addEventListener('click',()=>{
              iconEx.checked = !iconEx.checked;
            });

            borderBtn.addEventListener('click',()=>{
              iconEx.borderless = !iconEx.borderless;
            });

            disBtn.addEventListener('click',()=>{
              iconEx.disabled = !iconEx.disabled;
            });

            })();
            </script>

            <br>
            <br>
            <hr>
            <br>

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


            <br>
            <hr>
            <br>

            <p>
            The following section allows interacting with the API.
            </p>
            <p><cfpb-form-choice id="choice-example">Form choice example</cfpb-form-choice></p>

            <p>
            <label for="choice-example-type">Choice type:</label>
            <select id="choice-example-type">
              <option>checkbox</option>
              <option>radio</option>
            </select>

            </p><p>

            <label for="choice-example-validation">Validation state:</label>
            <select id="choice-example-validation">
              <option>---</option>
              <option>success</option>
              <option>warning</option>
              <option>error</option>
            </select>

            </p><p>

            <input type="checkbox" id="choice-example-large" />
            <label for="choice-example-large">Large</label>

            </p><p>

            <input type="checkbox" id="choice-example-disabled" />
            <label for="choice-example-disabled">Disabled</label>

            </p>

            <script>
            (function(){
            const choiceEx = document.querySelector('#choice-example');

            const typeSel = document.querySelector('#choice-example-type');
            const valSel = document.querySelector('#choice-example-validation');

            const largeBtn = document.querySelector('#choice-example-large');
            const disBtn = document.querySelector('#choice-example-disabled');

            typeSel.addEventListener('change',()=>{
              choiceEx.type = typeSel.value;
            });

            valSel.addEventListener('change',()=>{
              if (valSel.value !== '---') choiceEx.validation = valSel.value;
              else choiceEx.removeAttribute('validation');
            });

            largeBtn.addEventListener('click',()=>{
              choiceEx.large = !choiceEx.large;
            });

            disBtn.addEventListener('click',()=>{
              choiceEx.disabled = !choiceEx.disabled;
            });

            })();
            </script>

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
            The following section allows interacting with the API.
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
        variation_name: Search input
        variation_description: >-
          A search input component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-form-search-input borderless>
            </cfpb-form-search-input>
            <br>
            <cfpb-form-search-input>
            </cfpb-form-search-input>
            <br>
            <cfpb-form-search-input disabled>
            </cfpb-form-search-input>
            <br>
            <cfpb-form-search-input validation="error">
            </cfpb-form-search-input>
            <br>
            <cfpb-form-search-input validation="warning">
            </cfpb-form-search-input>
            <br>
            <cfpb-form-search-input validation="success">
            </cfpb-form-search-input>

            <br><hr><br>

            <p>
            The following section allows interacting with the API.
            </p>
            <p><cfpb-form-search-input id="search-input-example"></cfpb-form-search-input></p>

            <p>

            <label for="search-input-example-validation">Validation state:</label>
            <select id="search-input-example-validation">
              <option>---</option>
              <option>success</option>
              <option>warning</option>
              <option>error</option>
            </select>

            </p><p>

            <input type="checkbox" id="search-input-example-disabled" />
            <label for="search-input-example-disabled">Disabled</label>

            </p><p>

            <input type="checkbox" id="search-input-example-placeholder" />
            <label for="search-input-example-placeholder">Placeholder</label>

            </p>
            <script>
            (function(){
            const formSearchEx = document.querySelector('#search-input-example');

            const valSel = document.querySelector('#search-input-example-validation');

            const disBtn = document.querySelector('#search-input-example-disabled');
            const plcBtn = document.querySelector('#search-input-example-placeholder');

            valSel.addEventListener('change', () => {
              if (valSel.value !== '---') formSearchEx.validation = valSel.value;
              else formSearchEx.removeAttribute('validation');
            });

            disBtn.addEventListener('click', () => {
              formSearchEx.disabled = !formSearchEx.disabled;
            });

            plcBtn.addEventListener('click', () => {
              if ( formSearchEx.placeholder === '') {
               formSearchEx.placeholder = 'Example placeholder…';
              } else {
                formSearchEx.placeholder = '';
              }
            });

            })();
            </script>
          </div>
        variation_code_snippet: >-
          <cfpb-form-search-input borderless>
          </cfpb-form-search-input>

          <cfpb-form-search-input>
          </cfpb-form-search-input>

          <cfpb-form-search-input disabled>
          </cfpb-form-search-input>

          <cfpb-form-search-input validation="error">
          </cfpb-form-search-input>

          <cfpb-form-search-input validation="warning">
          </cfpb-form-search-input>

          <cfpb-form-search-input validation="success">
          </cfpb-form-search-input>
      - variation_is_deprecated: false
        variation_name: Search widget
        variation_description: >-
          A search widget component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-form-search>
              <ul>
                <li>How do I add money to my prepaid card?</li>
                <li>What are credit card “add-on products?”</li>
                <li>How do I qualify for an advertised 0% auto financing?</li>
                <li>Can I make additional payments on my student loan?</li>
                <li>How do I tell if I have a fixed or adjustable rate mortgage?</li>
                <li>I was offered a pension advance. What is this? What should I look out for?</li>
                <li>What are rate caps with an adjustable-rate mortgage (ARM), and how do they work?</li>
                <li>For an adjustable-rate mortgage (ARM), what are the index and margin, and how do they work?</li>
              </ul>
            </cfpb-form-search>
          </div>
        variation_code_snippet: >-
          <cfpb-form-search>
            <ul>
              <li>How do I add money to my prepaid card?</li>
              <li>What are credit card “add-on products?”</li>
              <li>How do I qualify for an advertised 0% auto financing?</li>
              <li>Can I make additional payments on my student loan?</li>
              <li>How do I tell if I have a fixed or adjustable rate mortgage?</li>
              <li>I was offered a pension advance. What is this? What should I look out for?</li>
              <li>What are rate caps with an adjustable-rate mortgage (ARM), and how do they work?</li>
              <li>For an adjustable-rate mortgage (ARM), what are the index and margin, and how do they work?</li>
            </ul>
          </cfpb-form-search>
      - variation_is_deprecated: false
        variation_name: Form-level alert
        variation_description: >-
          A form-level alert component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-form-alert validation="error">An error</cfpb-form-alert>
            <cfpb-form-alert validation="warning">A warning</cfpb-form-alert>
            <cfpb-form-alert validation="success">A success message</cfpb-form-alert>
          </div>
        variation_code_snippet: >-
          <cfpb-form-alert validation="error">An error</cfpb-form-alert>
          <cfpb-form-alert validation="warning">A warning</cfpb-form-alert>
          <cfpb-form-alert validation="success">A success message</cfpb-form-alert>
      - variation_is_deprecated: false
        variation_name: Pagination
        variation_description: >-
          A pagination component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-pagination value="4" max="10">
              <i18n-service>
                <template>
                  {
                    "en": {
                      "page number": "Page number",
                      "previous": "Older",
                      "next": "Newer",
                      "page": "Page",
                      "out of": "out of",
                      "of": "of",
                      "total pages": "total pages",
                      "go": "Go"
                    },
                    "es": {
                      "page number": "Número de página",
                      "previous": "Anterior",
                      "next": "Siguiente",
                      "page": "Página",
                      "out of": "de",
                      "of": "de",
                      "total pages": "páginas en total",
                      "go": "Ir"
                    }
                  }
                </template>
              </i18n-service>
            </cfpb-pagination>
          </div>
        variation_code_snippet: >-
          <cfpb-pagination value="4" max="10">
            <i18n-service>
              <template>
                {
                  "en": {
                    "page number": "Page number",
                    "previous": "Older",
                    "next": "Newer",
                    "page": "Page",
                    "out of": "out of",
                    "of": "of",
                    "total pages": "total pages",
                    "go": "Go"
                  },
                  "es": {
                    "page number": "Número de página",
                    "previous": "Anterior",
                    "next": "Siguiente",
                    "page": "Página",
                    "out of": "de",
                    "of": "de",
                    "total pages": "páginas en total",
                    "go": "Ir"
                  }
                }
              </template>
            </i18n-service>
          </cfpb-pagination>
      - variation_is_deprecated: false
        variation_name: List item
        variation_description: >-
          A list item component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-list-item disabled>Earth</cfpb-list-item>
            <cfpb-list-item checked disabled>Jupiter</cfpb-list-item>
            <cfpb-list-item type="checkbox">Mercury</cfpb-list-item>
            <cfpb-list-item type="checkbox" checked>Venus</cfpb-list-item>
            <cfpb-list-item type="check">Mars</cfpb-list-item>
            <cfpb-list-item type="check" checked>Saturn</cfpb-list-item>
            <cfpb-list-item type="plain">Uranus</cfpb-list-item>
            <cfpb-list-item type="plain" checked>Pluto</cfpb-list-item>

            <br>
            <hr>
            <br>

            <p>
            The following section allows interacting with the list item API.
            </p>
            <p><cfpb-list-item id="list-item-example">Ceres</cfpb-list-item></p>
            <p>
            <label for="list-item-example-type">List item type:</label>
            <select id="list-item-example-type">
              <option>plain</option>
              <option>check</option>
              <option>checkbox</option>
            </select>

            </p><p>

            <input type="checkbox" id="list-item-example-disabled" />
            <label for="list-item-example-disabled">Disabled</label>

            </p><p>

            <input type="checkbox" id="list-item-example-hidden" />
            <label for="list-item-example-hidden">Hidden</label>

            </p>
            <script>
            const listItem = document.querySelector('#list-item-example');

            const typeSel = document.querySelector('#list-item-example-type');

            const disBtn = document.querySelector('#list-item-example-disabled');
            const hiddenBtn = document.querySelector('#list-item-example-hidden');

            typeSel.addEventListener('change', (evt) => {
              listItem.type = evt.target.value;
            });

            disBtn.addEventListener('click', () => {
              listItem.disabled = !listItem.disabled;
            });

            hiddenBtn.addEventListener('click', () => {
              listItem.hidden = !listItem.hidden;
            });
            </script>
          </div>
        variation_code_snippet: >-
          <cfpb-list-item disabled>Earth</cfpb-list-item>
          <cfpb-list-item checked disabled>Jupiter</cfpb-list-item>
          <cfpb-list-item type="checkbox">Mercury</cfpb-list-item>
          <cfpb-list-item type="checkbox" checked>Venus</cfpb-list-item>
          <cfpb-list-item type="check">Mars</cfpb-list-item>
          <cfpb-list-item type="check" checked>Saturn</cfpb-list-item>
          <cfpb-list-item type="plain">Uranus</cfpb-list-item>
          <cfpb-list-item type="plain" checked>Pluto</cfpb-list-item>
      - variation_is_deprecated: false
        variation_name: Lists
        variation_description: >-
          A list component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-list aria-label="List of planets">
              <cfpb-list-item>Mercury</cfpb-list-item>
              <cfpb-list-item>Venus</cfpb-list-item>
              <cfpb-list-item>Earth</cfpb-list-item>
              <cfpb-list-item>Mars</cfpb-list-item>
              <cfpb-list-item>Jupiter</cfpb-list-item>
              <cfpb-list-item>Saturn</cfpb-list-item>
              <cfpb-list-item>Uranus</cfpb-list-item>
              <cfpb-list-item>Neptune</cfpb-list-item>
            </cfpb-list>

            <br><br>

            <cfpb-list aria-label="List of planets" type="check">
              <cfpb-list-item>Mercury</cfpb-list-item>
              <cfpb-list-item>Venus</cfpb-list-item>
              <cfpb-list-item>Earth</cfpb-list-item>
              <cfpb-list-item checked>Mars</cfpb-list-item>
              <cfpb-list-item>Jupiter</cfpb-list-item>
              <cfpb-list-item>Saturn</cfpb-list-item>
              <cfpb-list-item>Uranus</cfpb-list-item>
              <cfpb-list-item>Neptune</cfpb-list-item>
            </cfpb-list>

            <br><br>

            <cfpb-list aria-label="List of planets" type="checkbox">
              <cfpb-list-item>Mercury</cfpb-list-item>
              <cfpb-list-item>Venus</cfpb-list-item>
              <cfpb-list-item>Earth</cfpb-list-item>
              <cfpb-list-item checked>Mars</cfpb-list-item>
              <cfpb-list-item>Jupiter</cfpb-list-item>
              <cfpb-list-item>Saturn</cfpb-list-item>
              <cfpb-list-item>Uranus</cfpb-list-item>
              <cfpb-list-item>Neptune</cfpb-list-item>
            </cfpb-list>

            <br>
            <hr>
            <br>

            <p>
            The following section allows interacting with the list item API.
            </p>
            <p>
              <cfpb-list id="list-example" aria-label="List of planets">
                <cfpb-list-item>Mercury</cfpb-list-item>
                <cfpb-list-item>Venus</cfpb-list-item>
                <cfpb-list-item>Earth</cfpb-list-item>
                <cfpb-list-item>Mars</cfpb-list-item>
                <cfpb-list-item>Jupiter</cfpb-list-item>
                <cfpb-list-item>Saturn</cfpb-list-item>
                <cfpb-list-item>Uranus</cfpb-list-item>
                <cfpb-list-item>Neptune</cfpb-list-item>
              </cfpb-list>

            </p><p>

            <label for="list-example-type">List item type:</label>
            <select id="list-example-type">
              <option>plain</option>
              <option>check</option>
              <option>checkbox</option>
            </select>

            </p><p>

            <input type="text" id="list-example-filter" aria-labelledby="list-example-filter-btn" />
            <button id="list-example-filter-btn">Filter</button>
            <button id="list-example-show-all-btn">Show all</button>

            </p><p>

            <div>
            <b id="list-example-visible"></b>
            # of visible items</div>

            </p><p>

            <div>
            <b id="list-example-checked"></b>
            # of checked items</div>

            </p><p>

            <div>
            <b id="list-example-checked-visible"></b>
            # of checked and visible items</div>

            </p><p>

            <br>

            <input type="checkbox" id="list-example-multi" />
            <label for="list-example-multi">Allow checking multiple</label>

            </p>
            <script>
            (function() {
            const listEx = document.querySelector('#list-example');

            const typeSel = document.querySelector('#list-example-type');

            const filterInput = document.querySelector('#list-example-filter')
            const filterBtn = document.querySelector('#list-example-filter-btn');
            const showAllBtn = document.querySelector('#list-example-show-all-btn');

            const multiBtn = document.querySelector('#list-example-multi');

            const visInput = document.querySelector('#list-example-visible');

            const checkInput = document.querySelector('#list-example-checked');

            const visCheckInput = document.querySelector('#list-example-checked-visible');

            typeSel.addEventListener('change', (evt) => {
              listEx.type = evt.target.value;
            });

            filterBtn.addEventListener('click', () => {
              const items = filterInput.value.split(',');
              listEx.filterItems(items);
            });

            showAllBtn.addEventListener('click', () => {
              listEx.showAllItems();
            });

            multiBtn.addEventListener('click', () => {
              listEx.multiple = !listEx.multiple;
            });

            const itemsHandler = (evt) => {
              if (evt.detail.visibleItems.length === listEx.visibleItems.length) visInput.innerText = evt.detail.visibleItems.length;
              else visInput.innerText = 'ERR';

              if (evt.detail.checkedItems.length === listEx.checkedItems.length) checkInput.innerText = evt.detail.checkedItems.length;
              else checkInput.innerText = 'ERR';

              if (evt.detail.visibleCheckedItems.length === listEx.visibleCheckedItems.length) visCheckInput.innerText = evt.detail.visibleCheckedItems.length;
              else visCheckInput.innerText = 'ERR';
            }

            listEx.addEventListener('items-ready', itemsHandler);
            listEx.addEventListener('items-filter', itemsHandler);

            listEx.addEventListener('item-click', (evt) => {
              visInput.innerText = listEx.visibleItems.length;
              checkInput.innerText = listEx.checkedItems.length;
              visCheckInput.innerText = listEx.visibleCheckedItems.length;
            });

            })()
            </script>
          </div>
        variation_code_snippet: >-
          <cfpb-list aria-label="List of planets">
            <cfpb-list-item>Mercury</cfpb-list-item>
            <cfpb-list-item>Venus</cfpb-list-item>
            <cfpb-list-item>Earth</cfpb-list-item>
            <cfpb-list-item>Mars</cfpb-list-item>
            <cfpb-list-item>Jupiter</cfpb-list-item>
            <cfpb-list-item>Saturn</cfpb-list-item>
            <cfpb-list-item>Uranus</cfpb-list-item>
            <cfpb-list-item>Neptune</cfpb-list-item>
          </cfpb-list>

          <cfpb-list aria-label="List of planets" type="check">
            <cfpb-list-item>Mercury</cfpb-list-item>
            <cfpb-list-item>Venus</cfpb-list-item>
            <cfpb-list-item>Earth</cfpb-list-item>
            <cfpb-list-item checked>Mars</cfpb-list-item>
            <cfpb-list-item>Jupiter</cfpb-list-item>
            <cfpb-list-item>Saturn</cfpb-list-item>
            <cfpb-list-item>Uranus</cfpb-list-item>
            <cfpb-list-item>Neptune</cfpb-list-item>
          </cfpb-list>

          <cfpb-list aria-label="List of planets" type="checkbox">
            <cfpb-list-item>Mercury</cfpb-list-item>
            <cfpb-list-item>Venus</cfpb-list-item>
            <cfpb-list-item>Earth</cfpb-list-item>
            <cfpb-list-item checked>Mars</cfpb-list-item>
            <cfpb-list-item>Jupiter</cfpb-list-item>
            <cfpb-list-item>Saturn</cfpb-list-item>
            <cfpb-list-item>Uranus</cfpb-list-item>
            <cfpb-list-item>Neptune</cfpb-list-item>
          </cfpb-list>
      - variation_is_deprecated: false
        variation_name: Select list
        variation_description: >-
          A select list component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-select>
              <ul>
                <li>
                  Mercury
                </li>
                <li>
                  Venus
                </li>
                <li data-checked>
                  Earth
                </li>
                <li>
                  Mars
                </li>
                <li>
                  Jupiter
                </li>
                <li>
                  Saturn
                </li>
                <li>
                  Uranus
                </li>
                <li>
                  Neptune
                </li>
              </ul>
            </cfpb-select>


            <br><br>

            <cfpb-select multiple>
              <ul>
                <li>
                  Mercury
                </li>
                <li>
                  Venus
                </li>
                <li data-checked>
                  Earth
                </li>
                <li checked>
                  Mars
                </li>
                <li>
                  Jupiter
                </li>
                <li>
                  Saturn
                </li>
                <li>
                  Uranus
                </li>
                <li>
                  Neptune
                </li>
              </ul>
            </cfpb-select>
          </div>
        variation_code_snippet: >-
          <cfpb-select multiple>
              <ul>
                <li>
                  Mercury
                </li>
                <li>
                  Venus
                </li>
                <li data-checked>
                  Earth
                </li>
                <li checked>
                  Mars
                </li>
                <li>
                  Jupiter
                </li>
                <li>
                  Saturn
                </li>
                <li>
                  Uranus
                </li>
                <li>
                  Neptune
                </li>
              </ul>
            </cfpb-select>
      - variation_is_deprecated: false
        variation_name: Expandables
        variation_description: >-
          An expandable component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-expandable>
              <h3 slot="header">Expandable header</h3>
              <p slot="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                  temporibus magnam debitis quidem. Ducimus ratione
                  corporis nesciunt earum vel est quaerat blanditiis
                  dolore ipsa?
                  <a href="#">Lorem link</a>.
              </p>
            </cfpb-expandable>
          </div>
        variation_code_snippet: >-
          <cfpb-expandable>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
                <a href="#">Lorem link</a>.
            </p>
          </cfpb-expandable>
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
