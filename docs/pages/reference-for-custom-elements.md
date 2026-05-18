---
title: Reference for custom elements
layout: variation
section: components
status: Released
description: These components are custom elements (web components).
variation_groups:
  - variations:
      - variation_is_deprecated: false
        variation_name: Icons
        variation_description: Lazy-loaded icons that are included via a `name` property, and colorized via `color` keyword property.
        variation_code_snippet_rendered: >-
          <div>

            <p>Color set via property on component:</p>

            <cfpb-icon name="approved" />
            <cfpb-icon name="approved" color="gray" />
            <cfpb-icon name="approved" color="red" />
            <cfpb-icon name="approved" color="gold" />
            <cfpb-icon name="approved" color="green" />

            <br>

            <cfpb-icon name="error-round" />
            <cfpb-icon name="error-round" color="gray-80" />
            <cfpb-icon name="error-round" color="red-60" />
            <cfpb-icon name="error-round" color="gold-40" />
            <cfpb-icon name="error-round" color="green-20" />

            <br>
            <br>

            <p>Color set by `color` style set on parent element:</p>

            <span style="color:blue;"><cfpb-icon name="github-square" /></span>

            <br>
            <br>

            <p>Animate icons by adding the `spin` attribute:</p>

            <cfpb-icon name="update" spin />
          </div>
        variation_code_snippet: >-
          <div>
            <cfpb-icon name="approved" />
            <cfpb-icon name="approved" color="gray" />
            <cfpb-icon name="approved" color="red" />
            <cfpb-icon name="approved" color="gold" />
            <cfpb-icon name="approved" color="green" />

            <br>

            <cfpb-icon name="error-round" />
            <cfpb-icon name="error-round" color="gray-80" />
            <cfpb-icon name="error-round" color="red-60" />
            <cfpb-icon name="error-round" color="gold-40" />
            <cfpb-icon name="error-round" color="green-20" />

            <br>

            <cfpb-icon name="update" spin />
          </div>
      - variation_is_deprecated: false
        variation_name: Tagline
        variation_description: A US gov branded tagline.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-tagline></cfpb-tagline>

            <br>

            <cfpb-tagline islarge></cfpb-tagline>

            <br>

            <cfpb-tagline>USA</cfpb-tagline>
          </div>
        variation_code_snippet: >-
          <cfpb-tagline></cfpb-tagline>
          <cfpb-tagline islarge></cfpb-tagline>
          <cfpb-tagline>USA</cfpb-tagline>
      - variation_is_deprecated: false
        variation_name: Link
        variation_description: A standard link.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-link><a href="#">This is a link</a></cfpb-link>

            <br>

            <cfpb-link link-variant="nav-left"><a href="#">This is a link</a></cfpb-link>

            <br>

            <cfpb-link link-variant="nav-right"><a href="#">This is a link</a></cfpb-link>

            <br>
            
            <cfpb-link link-variant="download"><a href="#">This is a link</a></cfpb-link>

            <br>
            
            <cfpb-link link-variant="external"><a href="#">This is a link</a></cfpb-link>

            <br>

            <cfpb-link no-top-border><a href="#">No top border</a></cfpb-link>

          </div>
        variation_code_snippet: >-
          <cfpb-link href="#">This is a link</cfpb-link>
          <cfpb-link href="#" iconleft="left">This is a link</cfpb-link>
          <cfpb-link href="#" iconright="right">This is a link</cfpb-link>
          <cfpb-link href="#" iconright="download">This is a link</cfpb-link>
          <cfpb-link href="#" iconright="external-link">This is a link</cfpb-link>
          <cfpb-link href="#" no-top-border>No top border</cfpb-link>
          <cfpb-link>No href</cfpb-link>
      - variation_is_deprecated: false
        variation_name: Icon and Text
        variation_description: A basic pairing of an SVG icon and text.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-icon-text>No icon</cfpb-icon-text>

            <br>

            <cfpb-icon-text iconleft="bank">Icon, but no divider</cfpb-icon-text>

            <br>

            <cfpb-icon-text has-div iconleft="download">Icon on left</cfpb-icon-text>

            <br>

            <cfpb-icon-text has-div iconright="download">Icon on right</cfpb-icon-text>

            <br>

            <cfpb-icon-text has-div iconleft="bank" iconright="download">Icon on both sides</cfpb-icon-text>

            <br>

            <cfpb-icon-text has-div disabled iconright="download">Disabled state</cfpb-icon-text>

            <br>

            <cfpb-icon-text has-div div-color="red-60" iconleft="warning">Warning state</cfpb-icon-text>

            <br>

            <cfpb-icon-text has-underline="tablet-up" iconright="external-link">Style as standard link</cfpb-icon-text>

            <br>

            <cfpb-icon-text inline has-underline="all" iconright="external-link">Style as inline link</cfpb-icon-text>

            <br><hr><br>

            <p>
            The following section allows interacting with the API.
            </p>
            <p><cfpb-icon-text id="icon-text-example" iconright="download" has-div>Example icon-text component</cfpb-icon-text></p>
            <p>

            <input type="checkbox" id="icon-text-example-warning" />
            <label for="icon-text-example-warning">Warning</label>

            </p><p>

            <input type="checkbox" id="icon-text-example-disabled" />
            <label for="icon-text-example-disabled">Disabled</label>

            </p><p>

            <input type="checkbox" id="icon-text-example-icon-start" />
            <label for="icon-text-example-icon-start">Start icon</label>

            </p><p>

            <input type="checkbox" id="icon-text-example-icon-end" checked />
            <label for="icon-text-example-icon-end">End icon</label>

            </p><p>

            <input type="checkbox" id="icon-text-example-has-div" checked />
            <label for="icon-text-example-has-div">Has a divider</label>

            </p><p>

            <input type="checkbox" id="icon-text-example-icon-animate" />
            <label for="icon-text-example-icon-animate">Animate icon</label>

            </p><p>

            <input type="checkbox" id="icon-text-example-icon-right" />
            <label for="icon-text-example-icon-right">Align icon to right at mobile</label>

            </p><p>

            <input type="checkbox" id="icon-text-example-inline" />
            <label for="icon-text-example-inline">Display inline</label>

            </p><p>

            <label for="icon-text-example-underline">Has undeline at screen size:</label>
            <select id="icon-text-example-underline">
              <option>none</option>
              <option>all</option>
              <option>tablet-up</option>
            </select>

            </p>
            <script>
            (function(){
            const iconTextEx = document.querySelector('#icon-text-example');

            const warBtn = document.querySelector('#icon-text-example-warning');
            const disBtn = document.querySelector('#icon-text-example-disabled');
            const iconStartBtn = document.querySelector('#icon-text-example-icon-start');
            const iconEndBtn = document.querySelector('#icon-text-example-icon-end');
            const hasDivBtn = document.querySelector('#icon-text-example-has-div');
            const animateBtn = document.querySelector('#icon-text-example-icon-animate');
            const iconRightBtn = document.querySelector('#icon-text-example-icon-right');
            const inlineBtn = document.querySelector('#icon-text-example-inline');

            const underlineSel = document.querySelector('#icon-text-example-underline');
            underlineSel.addEventListener('change',()=>{
              if (underlineSel.value === 'none') iconTextEx.removeAttribute('has-underline');
              else iconTextEx.hasUnderline = underlineSel.value;
            });

            warBtn.addEventListener('click', () => {
              if (iconTextEx.hasAttribute('div-color')) {
                iconTextEx.removeAttribute('div-color');
              } else {
                iconTextEx.divColor = 'red-60';
              }
            });

            disBtn.addEventListener('click', () => {
              iconTextEx.disabled = !iconTextEx.disabled;
            });

            iconStartBtn.addEventListener('click', () => {
              if (iconTextEx.iconLeft) iconTextEx.iconLeft = null;
              else iconTextEx.iconLeft = 'bank';
            });

            iconEndBtn.addEventListener('click', () => {
              if (iconTextEx.iconRight) iconTextEx.iconRight = null;
              else iconTextEx.iconRight = 'download';
            });

            hasDivBtn.addEventListener('click', () => {
              iconTextEx.hasDiv = !iconTextEx.hasDiv;
            });

            animateBtn.addEventListener('click', () => {
              iconTextEx.isIconLeftSpin = !iconTextEx.isIconLeftSpin;
              iconTextEx.isIconRightSpin = !iconTextEx.isIconRightSpin;
            });

            iconRightBtn.addEventListener('click', () => {
              iconTextEx.mobileIconAlignEnd = !iconTextEx.mobileIconAlignEnd;
            })
            
            inlineBtn.addEventListener('click', () => {
              iconTextEx.inline = !iconTextEx.inline;
            })

            })();
            </script>
          </div>
        variation_code_snippet: >-
          <cfpb-icon-text>No icon</cfpb-icon-text>
          <cfpb-icon-text iconleft="download">Icon on left</cfpb-icon-text>
          <cfpb-icon-text iconright="download">Icon on right</cfpb-icon-text>
          <cfpb-icon-text iconleft="bank" iconright="download">Icon on both sides</cfpb-icon-text>
          <cfpb-icon-text disabled iconright="download">Disabled state</cfpb-icon-text>
      - variation_is_deprecated: false
        variation_name: Button
        variation_description: A basic button in web component syntax.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-button>This is a button</cfpb-button>

            <br>

            <cfpb-button type="submit">This is a submit button</cfpb-button>

            <br>

            <cfpb-button type="reset">This is a reset button</cfpb-button>

            <br>

            <cfpb-button variant="secondary">This is a secondary button</cfpb-button>

            <br>

            <cfpb-button variant="warning">This is a warning button</cfpb-button>

            <br>

            <cfpb-button disabled>This is a disabled primary button</cfpb-button>

            <br>

            <cfpb-button disabled>This is a disabled secondary button</cfpb-button>

            <br>

            <cfpb-button style-as-link>This is a button styled as a link</cfpb-button>

            <br>

            <cfpb-button style-as-link disabled>This is a disabled button styled as a link</cfpb-button>

            <br>

            <cfpb-button style-as-link iconright="download">This is a button styled as a link with an icon</cfpb-button>

            <br>

            <cfpb-button href="#" iconright="download">This is a link styled as a button with an icon</cfpb-button>

            <br>

            <cfpb-button iconright="download">This is a button with an icon</cfpb-button>

            <br>

            <cfpb-button disabled iconright="download">This is a disabled button with an icon</cfpb-button>

            <br>
            <hr>
            <br>
            <p>
            The following section allows interacting with the API.
            </p>
            <p><cfpb-button id="btn-example" iconright="update" iconrightspin>Example button</cfpb-button></p>

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

            <input type="checkbox" id="btn-example-link" />
            <label for="btn-example-link">Link style</label>

            </p><p>

            <input type="checkbox" id="btn-example-disabled" />
            <label for="btn-example-disabled">Disabled</label>

            </p><p>

            <input type="checkbox" id="btn-example-hidden" />
            <label for="btn-example-hidden">Hide icon</label>

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
              if (hidBtn.checked) btnEx.iconRight = null;
              else btnEx.iconRight = 'update';
            });

            linkBtn.addEventListener('click',()=>{
              btnEx.styleAsLink = !btnEx.styleAsLink;
              if (hidBtn.checked) btnEx.iconRight = null;
              else btnEx.iconRight = 'update';
            });

            fullBtn.addEventListener('click',()=>{
              btnEx.fullOnMobile = !btnEx.fullOnMobile;
            });

            })();
            </script>
          </div>
        variation_code_snippet: >-
          <cfpb-button>This is a button</cfpb-button>
          <cfpb-button full-on-mobile>This is a button link</cfpb-button>
          <cfpb-button disabled>This is a disabled button link</cfpb-button>
          <cfpb-button style-as-link>This is a button styled as a link</cfpb-button>
          <cfpb-button style-as-link iconright="download">This is a button styled as a link with an icon</cfpb-button>
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
              <ul hidden>
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
            <ul hidden>
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
        variation_name: Listbox item
        variation_description: >-
          A Listbox item component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-listbox-item disabled>Earth</cfpb-listbox-item>
            <cfpb-listbox-item checked disabled>Jupiter</cfpb-listbox-item>
            <cfpb-listbox-item type="checkbox">Mercury</cfpb-listbox-item>
            <cfpb-listbox-item type="checkbox" checked>Venus</cfpb-listbox-item>
            <cfpb-listbox-item type="check">Mars</cfpb-listbox-item>
            <cfpb-listbox-item type="check" checked>Saturn</cfpb-listbox-item>
            <cfpb-listbox-item type="plain">Uranus</cfpb-listbox-item>
            <cfpb-listbox-item type="plain" checked>Pluto</cfpb-listbox-item>

            <br>
            <hr>
            <br>

            <p>
            The following section allows interacting with the Listbox item API.
            </p>
            <p><cfpb-listbox-item id="listbox-item-example">Ceres</cfpb-listbox-item></p>
            <p>
            <label for="listbox-item-example-type">Listbox item type:</label>
            <select id="listbox-item-example-type">
              <option>plain</option>
              <option>check</option>
              <option>checkbox</option>
            </select>

            </p><p>

            <input type="checkbox" id="listbox-item-example-disabled" />
            <label for="listbox-item-example-disabled">Disabled</label>

            </p><p>

            <input type="checkbox" id="listbox-item-example-hidden" />
            <label for="listbox-item-example-hidden">Hidden</label>

            </p>
            <script>
            const listItem = document.querySelector('#listbox-item-example');

            const typeSel = document.querySelector('#listbox-item-example-type');

            const disBtn = document.querySelector('#listbox-item-example-disabled');
            const hiddenBtn = document.querySelector('#listbox-item-example-hidden');

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
          <cfpb-listbox-item disabled>Earth</cfpb-listbox-item>
          <cfpb-listbox-item checked disabled>Jupiter</cfpb-listbox-item>
          <cfpb-listbox-item type="checkbox">Mercury</cfpb-listbox-item>
          <cfpb-listbox-item type="checkbox" checked>Venus</cfpb-listbox-item>
          <cfpb-listbox-item type="check">Mars</cfpb-listbox-item>
          <cfpb-listbox-item type="check" checked>Saturn</cfpb-listbox-item>
          <cfpb-listbox-item type="plain">Uranus</cfpb-listbox-item>
          <cfpb-listbox-item type="plain" checked>Pluto</cfpb-listbox-item>
      - variation_is_deprecated: false
        variation_name: Listboxes
        variation_description: >-
          A listbox component.
        variation_code_snippet_rendered: >-
          <div>
            <cfpb-listbox aria-label="List of planets">
              <cfpb-listbox-item>Mercury</cfpb-listbox-item>
              <cfpb-listbox-item>Venus</cfpb-listbox-item>
              <cfpb-listbox-item>Earth</cfpb-listbox-item>
              <cfpb-listbox-item>Mars</cfpb-listbox-item>
              <cfpb-listbox-item>Jupiter</cfpb-listbox-item>
              <cfpb-listbox-item>Saturn</cfpb-listbox-item>
              <cfpb-listbox-item>Uranus</cfpb-listbox-item>
              <cfpb-listbox-item>Neptune</cfpb-listbox-item>
            </cfpb-listbox>

            <br><br>

            <cfpb-listbox aria-label="List of planets" type="check">
              <cfpb-listbox-item>Mercury</cfpb-listbox-item>
              <cfpb-listbox-item>Venus</cfpb-listbox-item>
              <cfpb-listbox-item>Earth</cfpb-listbox-item>
              <cfpb-listbox-item checked>Mars</cfpb-listbox-item>
              <cfpb-listbox-item>Jupiter</cfpb-listbox-item>
              <cfpb-listbox-item>Saturn</cfpb-listbox-item>
              <cfpb-listbox-item>Uranus</cfpb-listbox-item>
              <cfpb-listbox-item>Neptune</cfpb-listbox-item>
            </cfpb-listbox>

            <br><br>

            <cfpb-listbox aria-label="List of planets" type="checkbox">
              <cfpb-listbox-item>Mercury</cfpb-listbox-item>
              <cfpb-listbox-item>Venus</cfpb-listbox-item>
              <cfpb-listbox-item>Earth</cfpb-listbox-item>
              <cfpb-listbox-item checked>Mars</cfpb-listbox-item>
              <cfpb-listbox-item>Jupiter</cfpb-listbox-item>
              <cfpb-listbox-item>Saturn</cfpb-listbox-item>
              <cfpb-listbox-item>Uranus</cfpb-listbox-item>
              <cfpb-listbox-item>Neptune</cfpb-listbox-item>
            </cfpb-listbox>

            <br>
            <hr>
            <br>

            <p>
            The following section allows interacting with the Listbox item API.
            </p>
            <p>
              <cfpb-listbox id="listbox-example" aria-label="List of planets">
                <cfpb-listbox-item>Mercury</cfpb-listbox-item>
                <cfpb-listbox-item>Venus</cfpb-listbox-item>
                <cfpb-listbox-item>Earth</cfpb-listbox-item>
                <cfpb-listbox-item>Mars</cfpb-listbox-item>
                <cfpb-listbox-item>Jupiter</cfpb-listbox-item>
                <cfpb-listbox-item>Saturn</cfpb-listbox-item>
                <cfpb-listbox-item>Uranus</cfpb-listbox-item>
                <cfpb-listbox-item>Neptune</cfpb-listbox-item>
              </cfpb-listbox>

            </p><p>

            <label for="listbox-example-type">Listbox item type:</label>
            <select id="listbox-example-type">
              <option>plain</option>
              <option>check</option>
              <option>checkbox</option>
            </select>

            </p><p>

            <input type="text" id="listbox-example-filter" aria-labelledby="listbox-example-filter-btn" />
            <button id="listbox-example-filter-btn">Filter</button>
            <button id="listbox-example-show-all-btn">Show all</button>

            </p><p>

            <div>
            <b id="listbox-example-visible"></b>
            # of visible items</div>

            </p><p>

            <div>
            <b id="listbox-example-checked"></b>
            # of checked items</div>

            </p><p>

            <div>
            <b id="listbox-example-checked-visible"></b>
            # of checked and visible items</div>

            </p><p>

            <br>

            <input type="checkbox" id="listbox-example-multi" />
            <label for="listbox-example-multi">Allow checking multiple</label>

            </p>
            <script>
            (function() {
            const listEx = document.querySelector('#listbox-example');

            const typeSel = document.querySelector('#listbox-example-type');

            const filterInput = document.querySelector('#listbox-example-filter')
            const filterBtn = document.querySelector('#listbox-example-filter-btn');
            const showAllBtn = document.querySelector('#listbox-example-show-all-btn');

            const multiBtn = document.querySelector('#listbox-example-multi');

            const visInput = document.querySelector('#listbox-example-visible');

            const checkInput = document.querySelector('#listbox-example-checked');

            const visCheckInput = document.querySelector('#listbox-example-checked-visible');

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
          <cfpb-listbox aria-label="List of planets">
            <cfpb-listbox-item>Mercury</cfpb-listbox-item>
            <cfpb-listbox-item>Venus</cfpb-listbox-item>
            <cfpb-listbox-item>Earth</cfpb-listbox-item>
            <cfpb-listbox-item>Mars</cfpb-listbox-item>
            <cfpb-listbox-item>Jupiter</cfpb-listbox-item>
            <cfpb-listbox-item>Saturn</cfpb-listbox-item>
            <cfpb-listbox-item>Uranus</cfpb-listbox-item>
            <cfpb-listbox-item>Neptune</cfpb-listbox-item>
          </cfpb-listbox>

          <cfpb-listbox aria-label="List of planets" type="check">
            <cfpb-listbox-item>Mercury</cfpb-listbox-item>
            <cfpb-listbox-item>Venus</cfpb-listbox-item>
            <cfpb-listbox-item>Earth</cfpb-listbox-item>
            <cfpb-listbox-item checked>Mars</cfpb-listbox-item>
            <cfpb-listbox-item>Jupiter</cfpb-listbox-item>
            <cfpb-listbox-item>Saturn</cfpb-listbox-item>
            <cfpb-listbox-item>Uranus</cfpb-listbox-item>
            <cfpb-listbox-item>Neptune</cfpb-listbox-item>
          </cfpb-listbox>

          <cfpb-listbox aria-label="List of planets" type="checkbox">
            <cfpb-listbox-item>Mercury</cfpb-listbox-item>
            <cfpb-listbox-item>Venus</cfpb-listbox-item>
            <cfpb-listbox-item>Earth</cfpb-listbox-item>
            <cfpb-listbox-item checked>Mars</cfpb-listbox-item>
            <cfpb-listbox-item>Jupiter</cfpb-listbox-item>
            <cfpb-listbox-item>Saturn</cfpb-listbox-item>
            <cfpb-listbox-item>Uranus</cfpb-listbox-item>
            <cfpb-listbox-item>Neptune</cfpb-listbox-item>
          </cfpb-listbox>
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
