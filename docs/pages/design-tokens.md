---
title: Design Tokens
collection_name: pages
layout: variation
section: development
status: Beta
description: >-
  ## The design system encapsulates all of the design choices in design tokens


  ### Intro to design tokens

  Everything that you see on our website consists of the all the design choices that embody the CFPB design system. The site is built from these typography, spacing, sizing, opacity, radii, shadows, motion and animation, opacity, and icon  decisions.


  We call all of these decisions design tokens. Tokens can take many forms. Things like SCSS variables, CSS custom properties or platform agnostic JSON design tokens. 


  #### Legacy components

  We have been using design tokens in the form of SCSS variables for quite a while now. That has served us well. If you start to use the CFPB design system you will see that we have leveraged SCSS mixins, variables, etc to create the CFPB design system. When you get started using components from the design system this is what you will be working with. 


  The legacy components utilize variables in the form of `$varible-name: value` and will see this used throughout the codebase. This is a sound a approach and delivers a good developer experience. However, this does require knowledge of SCSS to work with and is tied to the platform. Our design token usage with our legacy components is extensive and mainly relies on css custom properties and SCSS variables.  


  #### Web components


  We have started to make web component versions of our legacy components. These use a slightly different take on using design tokens. 


  The tokens we are using in our web components use platform agnostic JSON for color which Style Dictionary then translates into .css custom properties. For now we are using JSON for our colors but more will be coming soon (think sizing, spacing, etc).  


  What this allows us, is the tokens become easily parsed and consumed. We could deliver these tokens into Android or iOS formats if we needed to make native apps. 

  Not only that, but the move to JSON tokens means we are centralizing our source of truth by exporting them directly out of Figma. We are hoping to enhance collaboration between design and development. The idea is that a designer can manage and maintain these tokens in Figma and then developers can directly consume the output.  
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
use_cases: ""
guidelines: ""
---
