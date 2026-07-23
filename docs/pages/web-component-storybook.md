---
title: Web Component Storybook
collection_name: pages
layout: variation
section: development
description: >-
  ### Pipeline overview


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
             { excludeCategories: ['methods] },
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


          If a component reflects a boolean attribute (`reflect: true`), prefer testing/asserting against the DOM attribute in play functions. There is an example of this in `packages/cfpb-design-system/src/elements/cfpb-button/cfpb-button.stories.ts` under `CollapseProgramatically`. We check `button.getAttribute(aria-expanded)`, not a JS property to assert real rendered state.


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
            `args: { ...args, variant: 'primary', 'deafault-slot': 'Button label' },`
            It also dynamically builds a select control for `icon-left/icon-right` off the actual icon SVG filenames and includes two intentionally invalid stories (`InvalidVariant`, `InvalidType`) tagged `['!dev','!autodocs']`. These exist to be picked up by the Vitest/Storybook test runner and verify that invalid values fall back gracefully without cluttering the storybook UI (sidebar/docs).

          - `cfpb-expandable.stories.ts` can't use the auto `template()` because it needs two _named_ slots. This is the pattern to copy for any component with named slots. It also demonstrates the `play` functions exercising the component's 4 custom events using `fn()` spies from the `storybook/test` and `userEvent.click`, plus a synthetic-event trick for the CSS-transition-driven `collapsend`/`expandend` events because the component's internal BaseTransition listens for the Chromium-prefixed name first. `CollapseProgramatically` shows testing an imperative property write.

            It writes a custom `render:` like this:

            ```JS
            render: ({ open, 'header-slot': header, 'content-slot': content }) =>
              html`<cfpb-expandable ?open="${open}">
                <span slot="header">${header}</span>
                <p slot="content">${content}</p>
              </cfpb-expandable>`,
            ```

          - `cfpb-tag-filter.stories.ts` - back to auto `template(args)` since it only has a default slot. Demonstrates testing a custom even (`item-click`) via click, and a second story (`focused`) that calls the component's own async `focus()` method directly on the element reference rather than through play-function DOM interaction. That is a useful pattern when a component exposes imperative methods that don't correspond to any attribute.

          - `cfpb-tagline.stories.ts` - the minimal case. Single boolean property (`isLarge`, no explicit `attribute:` override so it defaults to the camelCase name), no play functions. Good starting template for the simplest components.
      - variation_is_deprecated: false
        variation_name: 'Recipe: adding a story for a component'
        variation_description: >-
          - Confirm the component's `index.js` has a class-level
          `@element`,`@slot` and `@fires` JSDoc block since these are what
          renders in the Docs page

          - Create `<name>.stories.ts` next to `index.js`. Copy the `cfpb-tagline.stories.ts` as the minimal template, or `cfpb-button.stories.ts` if you are needing more than one variant.

          - Import `Meta/StoryObj` from `@storybook/web-components`

          - Call `<Component>.init()` at module scope before anything else

          - Call `getStorybookHelpers<xProps>('tag-name', { excludeCategories: ['methods'] })`, importing the `XProps` type from the `storybook/custom-elements-types`

          - Decide `tempalate(args)` vs custom `render:` use the auto `template` if the component onlhy has a default slot. Write a custom `html` render (like in the expandables story) if it has named slots or needs conditional markup.

          - Set `meta.args/meta.argTypes` using _attribute-cased keys_, not camelCased properties. If you do this wrong it won't error, it just silently no-ops the control or arg

          - Set `meta.component: 'tag-name'` and `tags: ['autodocs]`. This isn't optional. Without `component:` set the auto-generated `Overview` docs page fails to render its canvas and Attributes/Slots/Events table.

          - For components with custom events or imperative methods, add `play` functions using `fn()` + `userEvent` + `expect` from `storybook/test` following the `cfpb-expandable`/`cfpb-tag-filter` pattern. Tag test-only/invalid-input stories `['!dev, !autodocs]` so they run in the test suite but don't clutter the sidebar or docs page.

          - Run `yarn storybook` (regenerates the manifest via `yarn analyze` first) and confirms the new story renders and controls bind correctly
      - variation_is_deprecated: false
        variation_name: Linting
        variation_description: Auto-generated CEM and
          `storybook/custom-elements-types.d.ts` get linted as part of `yarn
          analyze` and linting for TS files was added to the project.
      - variation_is_deprecated: false
        variation_name: Testing
        variation_description: >-
          `vitest.config.js` defines Vitest projects:


          - Unit (`packages/**/*.spec.js`, jsdom environment)

          - `storybook` - uses `storybookTest()` from `@storybook/addon-vitest/vitest-plugin`, pointed at `.storybook/` running in a real headless Chromium via `@vitest/browser-playwright`. This project turns every story (including the `[!dev]` tagged ones) into a Vitest test, and runs each story's `play` function as the test body.


          Run everything with `yarn test`
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
