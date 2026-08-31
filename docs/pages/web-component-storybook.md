---
title: Web Component Storybook
collection_name: pages
layout: variation
section: development
description: >-
  ## Pipeline overview


  ```

  index.js (JSDoc + LitElement)
           |
           V
  storybook/custom-elements.json <- the custom element manifest (source of truth)
           |
           |- @wc-toolkit/jsx-types -> storybook/custom-elements.types.d.ts (typed *Props)
           |- setCustomElementsManifest() (storybook/preview.js)
                          |
           @wc-toolkit/storybook-helpers -> getStorybookHelpers() { args, argTypes, template }
                          |
                    *.stories.ts
  ```
variation_groups:
  - variations:
      - variation_is_deprecated: false
        variation_name: The analyzer and CEM configuration
        variation_description: >-
          `custom-elements-manifest.config.js` drives cem analyze:


          ```JS

          export default {
            globs: ['packages/cfpb-design-system/src/elements/**/*.js'],
            exclude: ['**/*.spec.js', '**/utilities/**'],
            outdir: 'storybook',
            litelement: true,
            plugins: [
              sortModulesPlugin(),
              jsxTypesPlugin({
                outdir: 'storybook',
                fileName: 'custom-elements-types.d.ts',
                // Generate imports relative to the storybook/ output dir
                componentTypePath: (_name, _tag, modulePath) => `../${modulePath}`,
              }),
            ],
          };

          ```


          - `litelement: true` tells the analyzer to understand Lit's `static properties = {...}` shorthand (attribute name, reflect, type) instead of requiring `@property()` decorators.

          - `exclude: ['**/utilities/**']` keeps non-component helper modules (like `shared-config.js`) out of the manifest

          - `sortModulesPlugin` is a local plugin added to make output diff-stable. Without this regenerating the manifest could produce reorder only diffs.


          Run it manually any time with:

          `yarn analyze`
      - variation_is_deprecated: false
        variation_name: wc-toolkit - the two packages in use
        variation_description: >-
          `@wc-toolkit/jsx-types` (analyzer plugin at build time): reads the
          manifest and emits `storybook/custom-elements.types.d.ts` - one
          <TagName>Props type per component. For every property it emits two
          keys: the kebab-case attribute name and the camelCase property name,
          both typed off the class:


          ```JS

          //storybook/custom-elements.types.d.ts snippet

          export type CfpbButtonProps = {
            'icon-left'?: CfpbButton['iconLeft'];
            /**  */
            iconLeft?: CfpbButton['iconLeft'];
            /**  */
            'icon-right'?: CfpbButton['iconRight'];
            /**  */
            iconRight?: CfpbButton['iconRight'];
            ...
          }

          ```


          `@wc-toolkit/storybook-helpers` (runtime, used in every `.stories.ts`) reads the _manifest_ (registered once via `setCustomElementsManifest` in `.storybook/preview.js`) and turns it into ready-made Storybook `args/argTypes/template` for a given tag:


          ```JS

          const { args, argTypes, template } = getStorybookHelpers<CfpbButtonProps>(
             'cfpb-button',
             { excludeCategories: ['methods'] },
          );

          ```


          `excludeCategories: ['methods']` is used in every story file. It drops public methods from the args/controls table since methods aren't bindable Storybook controls.


          `setStorybookHlpersConfig({ hideArgsRef: true })` in `preview.js` suppresses the "ref" column the helper would otherwise add to the args table in the UI.
      - variation_is_deprecated: false
        variation_name: JSDoc - what works and what doesn't
        variation_description: >-
          Class level tags on the component's leading doc comment work correctly
          and are the only reliable source of documentation right now:


          ```JS

          /**
           *
           * @element cfpb-expandable
           * @slot header - The header content for the expandable.
           * @slot content - The content within the expandable.
           * @fires expandbegin - The expandable started expanding.
           * @fires expandend - The expandable finished expanding.
           * @fires collapsebegin - The expandables started collapsing.
           * @fires collapseend - The expandables finished collapsing.
           */
          ```


          Verified in the generated manifest, these come through with the real descriptions:


          ```JSON

          // EG from the CEM  at storybook/custom-elements.json

          ...

          "slots": [
                      {
                        "description": "The header content for the expandable.",
                        "name": "header"
                      },
                      {
                        "description": "The content within the expandable.",
                        "name": "content"
                      }
                    ],
          ...

          "events": [
                      {
                        "name": "expandbegin",
                        "type": {
                          "text": "CustomEvent"
                        },
                        "description": "The expandable started expanding."
                      },
                      {
                        "name": "expandend",
                        "type": {
                          "text": "CustomEvent"
                        },
                        "description": "The expandable finished expanding."
                      },
                      {
                        "name": "collapsebegin",
                        "type": {
                          "text": "CustomEvent"
                        },
                        "description": "The expandables started collapsing."
                      },
                      {
                        "name": "collapseend",
                        "type": {
                          "text": "CustomEvent"
                        },
                        "description": "The expandables finished collapsing."
                      }
                    ],
          ...

          ```


          #### Gotcha: every component in this codebase also writes a `@property` block directly above `static properties`


          In `cfpb-button/index.js` for example:


          ```JS
           /**
             * @property {string} type - The button type: button, submit, or reset.
             * @property {boolean} disabled - Whether the button is disabled or not.
             ...
             * @returns {object} The map of properties.
             */
            static properties = {
              type: { ... },
              href: { ... },
          ...

          ```


          That looks like it should document each attribute, _but it doesn't_ because the CEM lit-plugin doesn't attach `@property` tag text to individual manifest attributes when they are declared this way.


          The net effect of this currently is that the Storybook Controls/Docs tables do not show attribute descriptions for any component. Do not expect `@property {type} name - description` to do anything visible in Storybook for now. We can open a spike in the future to investigate the correct comment formatting for populating the CEM. I did not want to rewrite all the Web Components comments for this right now. I opted to keep it for in editor documentation, but just be aware of the implication for Storybook.
      - variation_is_deprecated: false
        variation_name: Attributes over properties for bindings
        variation_description: >-
          Since custom elements only receive strings/booleans through markup,
          stories should drive components through their attributes (kebab-case),
          not JS properties. This is why every args object in the 4 examples use
          attribute-cased keys: icon-left, icon-right, icon-left-spin,
          icon-right-spin, style-as-link, full-on-mobile which is matching the
          `attribute:` value declaration in each `static properties` entry.


          `getStorybookHelpers`'s argTypes are keyed the same way, so when you override a control you also use the attribute name:


          ```JS

          argTypes {
             ...argTypes,
             'icon-left': { control: 'select', options: ['', ...iconNames] },
             'icon-right': { control: 'select', options: ['', ...iconNames] },
          }

          ```


          If a component reflects a boolean attribute (`reflect: true`), prefer asserting against the DOM attribute rather than the JS property so you are checking real rendered state. There is an example of this in `packages/cfpb-design-system/elements/cfpb-expandable/index.spec.js` under `collapsing programatically` which checks `button.getAttribute('aria-expanded')` and `elm.hasAttribute('open')`.


          This isn't stylistic. Prior to fixing this, `cfpb-button.stories.ts` used camelCase keys here (`iconLeft, iconRight`) which silently failed to attach the icon-select controls to the real args since `getStorybookHelpers` generates attribute-cased keys.
      - variation_is_deprecated: false
        variation_name: Walkthrough of how the 4 example stories differ
        variation_description: >-
          - `cfpb-button.stories.ts` is the fullest example. It uses the helper
          generated `template(args)` directly as `render` (no custom markup
          needed since the button has a default slot). Adds a `default-slot`
          pseudo-arg for the slotted button label `getStorybookHelpers` derives
          this arg automatically from the manifest's unnamed slot entry (`slots:
          [{ name: '', description: '...'}]`) and the story just seeds a default
          value for it:

            `args: { ...args, variant: 'primary', 'default-slot': 'Button label' },`

            It also dynamically builds a select control for `icon-left/icon-right` off the actual icon SVG filenames. It has no `play` functions. The button has no interaction of its own to demonstrate so its whole contract lives in `cfpb-button/index.spec.js`: variant and type fallbacks, the link form, and disabled state.

          - `cfpb-expandable.stories.ts` can't use the auto `template()` because it needs two _named_ slots. This is the pattern to copy for any component with named slots. It also demonstrates `play` functions exercising the component's 4 custom events using `fn()` spies from `storybook/test` and `userEvent.click`, plus a synthetic-event trick for the CSS transition drive `collapsed` / `expanded` events because the component's internal BaseTransition listens for the Chromium-prefix name first. Those 4 stay in the story because each is derived by a real click. Programatic property writes moved to `cfpb-expandable/index.spec.js`

            It writes a custom `render:` like this:

            ```JS
            render: ({ open, 'header-slot': header, 'content-slot': content }) =>
              html`<cfpb-expandable ?open="${open}">
                <span slot="header">${header}</span>
                <p slot="content">${content}</p>
              </cfpb-expandable>`,
            ```

          - `cfpb-tag-filter.stories.ts` - back to auto `template(args)` since it only has a default slot. It shows the split most clearly. The `Default` story's `play` function clickc the button and asserts `item-click` fires in Chromium, while `cfpb-tag-filter/index.spec.js` covers the event's shape (`detail.target`, `bubbles`, `composed`), the async `focus()` method, the `for` label form, and value derivation from slotted text. Same component, no overlapping assertions.

          - `cfpb-tagline.stories.ts` - the minimal case. Single boolean property (`isLarge`, no explicit `attribute:` override so it defaults to the camelCase name), no play functions. Good starting template for the simplest components.
      - variation_is_deprecated: false
        variation_name: 'Recipe: adding a story for a component'
        variation_description: >-
          - Confirm the component's `index.js` has a class-level
          `@element`,`@slot` and `@fires` JSDoc block since these are what
          render in the Docs page

          - Create `<name>.stories.ts` next to `index.js`. Copy the `cfpb-tagline.stories.ts` as the minimal template, or `cfpb-button.stories.ts` if you are needing more than one variant.

          - Import `Meta/StoryObj` from `@storybook/web-components`

          - Call `<Component>.init()` at module scope before anything else

          - Call `getStorybookHelpers<xProps>('tag-name', { excludeCategories: ['methods'] })`, importing the `XProps` type from the `storybook/custom-elements-types`

          - Decide between `tempalate(args)` and a custom `render:`. Use the auto `template` if the component only has a default slot. Write a custom `html` render (like in the expandables story) if it has named slots or needs conditional markup.

          - Set `meta.args/meta.argTypes` using _attribute-cased keys_, not camelCased properties. If you do this wrong it won't error, it just silently no-ops the control or arg

          - Set `meta.component: 'tag-name'` and `tags: ['autodocs']`. This isn't optional. Without `component:` set the auto-generated `Overview` docs page fails to render its canvas and Attributes/Slots/Events table.

          - Add a `play` function only for a real user interaction (like a click or keypress) following the `cfpb-expandable/cfpb-tag-filter` pattern with `fn()` + `userEvent` + `expect` from `storybook/test`. Everything else goes in a spec. See the Testing section . 

          - Write `<element>/index.spec.js` alongside the story for the component's behavior contract. See Testing section. 

          - Run `yarn storybook` (regenerates the manifest via `yarn analyze` first) and confirm that new story renders and the controls bind correctly.
      - variation_is_deprecated: false
        variation_name: Linting
        variation_description: Auto-generated CEM and
          `storybook/custom-elements-types.d.ts` get linted as part of `yarn
          analyze` and linting for TS files was added to the project.
      - variation_is_deprecated: false
        variation_name: Testing
        variation_description: >-
          Each element folder holds three files with separate jobs:


          | File            | Holds                                           | Runs in  | 

          | --------------- | ----------------------------------------------- | -------- | 

          | `index.js`      | the component                                   | n/a      | 

          | `index.spec.js` | its behavior contract                           | jsdom    | 

          | `*.stories.ts`  | what it looks like, plus real user interactions | Chromium |


          If a test proves what the component looks like, it belongs in a story. If it proves what a user can do, it belongs in a `play` functions on a story. Everything else goes in `index.spec.js`: attributes, properties, emitted event shape, slots, fallbacks, error paths, matrices of values. Never assert the same thing in both places.


          The reason to bother with the split is portability. `index.spec.js` files import the component itself, so if Storybook is ever replaced they keep running untouched. Anything proven only by a `play` functions goes when Storybook goes. Keep that set small.


          ### Deciding where a test goes


          | What you are proving                       | Where                 | 

          | ------------------------------------------ | --------------------- | 

          | Supported visual states, variants, sizes   | `*.stories.ts`        | 

          | On user interaction (click, keypress)      | story `play` function | 

          | Accessibility (axe)                        | free with every story | 

          | A matrix of cases (`it.each`)              | `index.spec.js`       | 

          | Event `detail`, `bubbles`, `composed`      | `index.spec.js`       | 

          | Focus management, slots, form behavior     | `index.spec.js`       | 

          | Invalid input, fallbacks, console warnings | `index.spec.js`       | 

          | Pure utilities and services                | `utilities/*.spec.js` | 

          | Multi-component journeys, full pages       | Playwright, rarely    |


          `cfpb-tag-filter` is the clearest example. 


          The `Default` story's play function clicks the button with the `userEvent` and asserts `item-click` fires in Chromium. `index.spec.js` triggers the same button with a direct `button.click()` and asserts the event's `detail.target`, `bubbles` and `composed`. 


          Two files, two environments, no assertion in both.


          Do no write test only stories tagged `['!dev', '!autodoc']`. We used that pattern here but removed it. Those assertions live in the specs now, where `it.each` covers a matrix in one block and nothing depends on Storybook.


          ### Writing a spec


          Copy `cfpb-file-upload/index.spec.js` for the minimal case, or `cfpb-button/index.spec.js` if you want a `mount()` helper. Mount the element, wait for it to be defined and rendered, assert agains the shadow root and then clean up.


          ```js

          describe('<cfpb-alert', () => {
            let elm;

            beforeEach(async () => {
              CfpbAlert.init();
              elm = document.createElement('cfpb-alert');
              elm.setAttribute('status', 'info');
              elm.setAttribute('message', 'Information alert');
              elm.innerHTML =
                '<span>You can also add an explanation to the alert.</span>';
              document.body.appendChild(elm);

              await customElements.whenDefined('cfpb-alert');
              await elm.updateComplete;
            });

            afterEach(() => {
              document.body.removeChild(elm);
            });

            ...

            it('applies the alert role', () => {
              const container = elm.shadowRoot.querySelector('.container');
              expect(container.getAttribute('role')).toBe('alert');
            });

            ...
          ``` 


          Prefer `createElement` and `setAttribute` over assigning `innerHTML` template strings. Reach for `it.each` on a matrix. On named test per case beats a `for` loop inside a single test, because a failure tells you which case broke.

          `globals: true` is set, so `describe`, `it`, `expect` and `vi` need no imports.


          ### Vitest projects


          `vitest.config.js` defines two:


          - `unit` runs `packages/**/*.spec.js` in jsdom - `storybook` - uses `storybookTest()` from `@storybook/addon-vitest/vitest-plugin`, pointed at `.storybook/` running in a real headless Chromium via `@vitest/browser-playwright`. It turns every story into a Vitest test and runs the story's `play` function as the test body.


          ```sh

          yarn test # everything

          vitest run --project-unit # just the fast jsdom tests

          vitest run packages/**/elements/cfpb-alert # one element

          vitest # watch mode

          ```


          ### End-to-end tests (Playwright)

          Some things can only be proven with several components on a real page, like the doc site's search or and expandable inside a form. Those are Playwright tests, not Vitest ones. They live in `test/playwright/`, split into `docs/` and `packages/`. `playwright.config.ts` starts `yarn start` and points at `http://127.0.0.1:4000/designsystem`


          ```sh

          yarn playwright # run the e2e suite

          yarn playwright open # run it in Playwright's UI mode

          ```


          Watch out for the collision. `@playwright/test` is the e2e runner described here. The seperate `playwright` package is only a browser driver for the `@vitest/browser-playwright`, which launches Chromium for the `storybook` Vitest project. The two have nothing to do with each other.


          Keep this suite small. A journey you could prove at the component level belongs in `index.spec.js`, where it runs faster and fails more legibly.
      - variation_is_deprecated: false
        variation_name: Accessibility (@storybook/addon-a11y)
        variation_description: >-
          Registered in `.storybook/main.js` and configured in
          `.storybook/preview.js`


          ```js

          a11y: {
              // 'todo' - show a11y violations in the test UI only
              // 'error' - fail CI on a11y violations
              // 'off' - skip a11y checks entirely
              test: 'todo',
            },
          ```


          Set as `'todo` means that axe core accessibility checks run against every story automatically and violations surface in the Storybook a11y panel/Vitest addon UI, but _DO NOT FAIL_ `yarn test` or CI. Bumping this to `'error'` repo-wide would turn any existing violations across all stories into a build failure if we want that in the future. Importantly, new components get a11y checking for free just by having a story! No extra config per component needed.
    variation_group_name: Web Component Storybook setup details
    variation_group_description: ''
---
