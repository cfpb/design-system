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


          - `litelement: true` tells the CEM analyzer to understand Lit's `static properties = {...}` shorthand (attribute name, reflect, type)

          - `exclude: ['**/utilities/**']` keeps non-component helper modules out

          - `sortModulesPlugin` is a local plugin added to make output alphabetical sorted.


          Run it with:

          `yarn analyze`
      - variation_is_deprecated: false
        variation_name: wc-toolkit - the two packages in use
        variation_description: >-
          `@wc-toolkit/jsx-types` reads the CEM and generates
          `storybook/custom-elements.types.d.ts` - Which ends up being one
          <TagName>Props type per Web Component. For every property it creates
          two keys: the kebab-case attribute and the camelCase property both
          typed off the class:


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


          `@wc-toolkit/storybook-helpers` reads the CEM (registered in `setCustomElementsManifest` in `.storybook/preview.js`) and turns that into a Storybook `args/argTypes/template` for a tag:


          ```JS

          const { args, argTypes, template } = getStorybookHelpers<CfpbButtonProps>(
             'cfpb-button',
             { excludeCategories: ['methods'] },
          );

          ```


          `excludeCategories: ['methods', 'properties']` is used in every story file. It removes methods from the args/controls table because they are not bindable in Storybook. `properties` is excluded because Web Components favor attrributes. But, also that `wc-toolkit` creates a control for both props and attributes whenever they are named differently (EG `styleAsLink` and `style-as-link`). `template()` binds both of them and that created a bug where using `properties` in Storybook would apply the prop after the attribute so leaving them let a prop with a default overwrite what the story set with the attribute.


          `setStorybookHlpersConfig({ hideArgsRef: true })` in `preview.js` hides the "ref" column the helper that clutters up the Storybook UI.
      - variation_is_deprecated: false
        variation_name: JSDoc
        variation_description: >-
          Class level tags on the component's leading doc comment work
          correctly:


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


          These come through with the correct descriptions in Storybook UI:


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


          #### Every component in this codebase got its `@property` moved to above the class instead of `static properties`


          In `cfpb-button/index.js` for example:


          ```JS
           /**
             * @property {string} type - The button type: button, submit, or reset.
             * @property {boolean} disabled - Whether the button is disabled or not.
             * ...
             * @returns {object} The map of properties.
             */
            static properties = {
              type: { ... },
              href: { ... },
          ...

          ```


          That looks like it should work with the CEM, _but it doesn't_ because the CEM lit-plugin doesn't attach `@property` tag text to individual manifest attributes.


          The the result of that was the Storybook Controls/Docs tables did not show attribute descriptions for any component. Do not expect `@property {type} name - description` to do anything in Storybook for now. We moved these comments from above `static properties` to above `export class`.
      - variation_is_deprecated: false
        variation_name: Attr over props
        variation_description: >-
          Since custom elements only receive strings/booleans through markup,
          stories should drive components through their attributes not JS
          properties. This is why every args object example use attribute-cased
          keys: icon-left, icon-right, icon-left-spin, icon-right-spin,
          style-as-link.


          `getStorybookHelpers`'s argTypes are done the same way. When you override a control you also use the attribute name:


          ```JS

          argTypes {
             ...argTypes,
             'icon-left': { control: 'select', options: ['', ...iconNames] },
             'icon-right': { control: 'select', options: ['', ...iconNames] },
          }

          ```


          If a component reflects a boolean attribute (`reflect: true`) assert against the DOM attribute rather than the JS property. That way you are checking real rendered state. There is an example of this in `packages/cfpb-design-system/elements/cfpb-expandable/index.spec.js` under `collapsing programatically` which checks `button.getAttribute('aria-expanded')` and `elm.hasAttribute('open')`


          This isn't stylistic. Prior to fixing this, `cfpb-button.stories.ts` used camelCase keys here (`iconLeft, iconRight`) which silently failed to attach the icon-select controls to the real args since `getStorybookHelpers` generates attribute-cased keys.
      - variation_is_deprecated: false
        variation_name: 'Recipe: adding a story for a component'
        variation_description: >-
          - Confirm the component's `index.js` has a class-level
          `@element`,`@slot` and `@fires` JSDoc block as necessary since these
          are what renders in the Docs page

          - Create `<name>.stories.ts` next to `index.js`. Look at the `cfpb-tagline.stories.ts` or `cfpb-button.stories.ts` for examples.

          - Import `Meta/StoryObj` from `@storybook/web-components`

          - Call `<Component>.init()` before anything else

          - Call `getStorybookHelpers<xProps>('tag-name', { excludeCategories: ['methods', 'properties'] })`, importing the `XProps` type from the `storybook/custom-elements-types`

          - Decide if you need `tempalate(args)` or a custom `render:`. Use the `wc-toolkit` `template()` if the component only has a default slot. Write a custom `html` render (like in the expandables story) if it has named slots or needs conditional markup.

          - Set `meta.args/meta.argTypes` using _attribute-cased keys_, not camelCased properties. If you do this wrong it won't error it just silently doesn't work.

          - Set `meta.component: 'tag-name'` and `tags: ['autodocs]`. Without `component:` set the auto-generated `Overview` docs page fails to render Attributes/Slots/Events table.

          - Add a `play` function only for user interaction (like a click or keypress) following the `cfpb-expandable/cfpb-tag-filter` pattern with `fn()` + `userEvent` + `expect` from `storybook/test`. Everything else goes in a spec. See section 8.

          - Write `<element>/index.spec.js` alongside the story for the component's behavior. See section 8.

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

          | `index.spec.js` | its behavior                                    | jsdom    |

          | `*.stories.ts`  | what it looks like, plus real user interactions | Chromium |


          If a test proves what the component looks like it should be in a story. If it is what a user can do it belongs in a `play` functions in a story. Everything else goes in `index.spec.js`: attributes, properties, emitted event shape, slots, fallbacks, error paths, matricies of values. Never assert the same thing in both places.


          The reason for the split is because we may move from Storybook. `index.spec.js` files import the component itself so if Storybook ever goes bye bye anything that happens by a `play` functions goes when Storybook goes.


          ### Deciding where a test goes


          | What you are proving                       | Where                 |

          | ------------------------------------------ | --------------------- |

          | Supported visual states, variants, sizes   | `*.stories.ts`        |

          | User interaction (click, keypress)         | story `play` function |

          | Accessibility (axe)                        | free with every story |

          | A matrix of cases (`it.each`)              | `index.spec.js`       |

          | Event `detail`, `bubbles`, `composed`      | `index.spec.js`       |

          | Focus management, slots, form behavior     | `index.spec.js`       |

          | Invalid input, fallbacks, console warnings | `index.spec.js`       |

          | Pure utilities and services                | `utilities/*.spec.js` |

          | Multi-component journeys, full pages       | Playwright, rarely    |


          `cfpb-tag-filter` is a good example. The `Default` story's play function clicks the button with the `userEvent` and asserts `item-click` fires in Chromium. `index.spec.js` triggers the same button with a direct `button.click()` and asserts the event's `detail.target`, `bubbles` and `composed`. Two files in two different environments and no duplication.
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


          Set as `'todo` means that axe core accessibility checks run against every story automatically and violations surface in the Storybook a11y panel/Vitest addon UI. They _DO NOT FAIL_ `yarn test` or CI. Setting this to `'error'` repo-wide would turn any violations across all stories into a build failure. New components get a11y checking for free just by having a story! No extra config needed.
    variation_group_name: Web Component Storybook setup details
    variation_group_description: ''
---
