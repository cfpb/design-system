---
title: Design Tokens
collection_name: pages
layout: variation
section: development
status: null
description: >-
  ## The design system encapsulates all of its design choices into design
  tokens.


  ### Intro to design tokens


  Everything you see on [consumerfinance.gov](https://www.consumerfinance.gov/) consists of the many design choices that embody the CFPB design system. The site is built from these typography, spacing, sizing, opacity, radii, shadows, motion and animation, and icon decisions.


  We call these decisions design tokens. Code tokens can take many forms, such as SCSS variables, CSS custom properties, or platform agnostic JSON design tokens. 


  #### Legacy components


  Our legacy component versions—currently found in the "Components" sub section of [Components](https://cfpb.github.io/design-system/components/)—leverage SCSS mixins, variables, etc., in the form of `$varible-name: value` or `--variable-name: value`. We've used this approach for several years, and it has served us well as it delivers a familiar developer experience. However, this approach requires knowledge of SCSS, is tied to the platform, and is extensive. 


  #### Web components (beta)


  We've started creating web component versions of our legacy components. These can be found on the [Elements](https://cfpb.github.io/design-system/components/elements) page within the "Web components (beta)" sub section of [Components](https://cfpb.github.io/design-system/components/). These web components utilize design tokens for color values in the form of platform-agnostic JSON. Style Dictionary translates this JSON into .css custom properties. These tokens become easily parsed and consumed, meaning we could deliver them into Android or iOS formats if desired. 


  With this move to JSON tokens, we are also centralizing our source of truth by exporting the tokens directly from our [Figma library](https://www.figma.com/community/file/1487539003249310850), enhancing collaboration between design and development. Designers can manage and maintain the tokens in Figma, and developers can directly consume the output.


  Currently, we are using JSON design tokens in our web components for color values. We plan to incrementally create more JSON design tokens for values such as sizing and spacing.
variation_groups:
  - variations: []
    variation_group_name: JSON Token Structure
    variation_group_description: >-
      ```

      {
        "abstracts-custom-props": {
          "beige": {
            "$type": "color",
            "$value": "#bea96f",
            "$extensions": {
              "com.figma": {
                "collectionName": "abstracts-custom-props",
                "collectionID": "VariableCollectionId:296:179",
                "modeName": "default",
                "modeID": "296:2",
                "variableName": "beige",
                "variableID": "VariableID:296:293"
              }
            }
         }
      }

      ```


      The above is a simplified example of our Figma exported JSON tokens. We take that JSON with Figma specific metadata and translate it into CSS using Style Dictionary. This example is using a direct value and gets translated into the following for consumption in our codebase:


      ```

      /**
       * Do not edit directly, this file was auto-generated.
       */

      :host {
        --beige: #bea96f;
      }

      ```
use_cases: ''
guidelines: ''
---
