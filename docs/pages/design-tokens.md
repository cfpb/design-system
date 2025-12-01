---
title: Design Tokens
collection_name: pages
layout: variation
section: development
description: >-
  ## The design system encapsulates all of the design choices that make up the
  system in design tokens. 


  ### Intro to design tokens

  Everything that we see used on our website consists of the all the design choices the embody the CFPB design system. The site is built from these typography, spacing, sizing, opacity, etc decisions.


  #### Legacy components

  We have been using design tokens in the form of SCSS based tokens for quite a while now. That historically has served us well. If you start to us the CFPB design system you will see that we have leveraged SCSS mixins, variables, etc to create the system. If you want to get started using components from the design system this is what you will be working with. 


  The legacy components utilize variables in the form of `$varible-name: value` and will see this used throughout the codebase. This is a sound a approach and delivers a good developer experience. However, this does require knowledge of SCSS to work with and is tied to the platform. Our design token usage here is extensive and mainly relies on css custom properties as well as SCSS variables.  


  #### Web components


  We have started to make web component versions of our legacy components. These use a slightly different take on using design tokens. 


  Our web component tokens use platform agnostic JSON which Style Dictionary then translates into .css custom properties for the color properties. For now we are using JSON for our colors but more will be coming soon (think sizing, spacing, etc).  


  What this allows us, is the tokens become easily parsed and consumed. We could deliver these tokens into Android or iOS formats if we needed to make native apps. 

  Not only that, but the move to JSON tokens means we are centralizing our source of truth. We are hoping to enhance collaboration between design and development where a designer can manages and maintain these tokens in Figma and then developers can directly consume the output. These efforts are helping to reduce technical debt by centralizing design values for consumption.  
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
guidelines: |-
  ## Designer Usage

  ## Developer Usage
---
