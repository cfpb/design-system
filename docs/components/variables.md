---
title: Variables
layout: variation
section: components
secondary_section: Core development
status: Proposed
description: >
  Component variables are used to theme a component. They likely will be left as
  is, but if needed can be overwritten by duplicating the variable in a `@key:
  value` format with a different value. This customized variable would be placed
  in the same file where this component’s less file is imported.
variation_groups:
  - variation_group_name: Buttons
    variations:
      - variation_name: Color
        variation_description: >-
          Color variables referenced in comments are from cf-core
          cf-brand-colors.less.


          ```

          // .btn

          @btn-text:                  @white;

          @btn-bg:                    @pacific;

          @btn-bg-hover:              @dark-pacific;

          @btn-bg-active:             @navy;


          // .btn__secondary

          @btn__secondary-text:       @white;

          @btn__secondary-bg:         @gray;

          @btn__secondary-bg-hover:   @dark-gray;

          @btn__secondary-bg-active:  @black;


          // .btn__warning

          @btn__warning-text:         @white;

          @btn__warning-bg:           @red;

          @btn__warning-bg-hover:     @dark-red;

          @btn__warning-bg-active:    @dark-gray;


          // .btn__disabled

          @btn__disabled-text:        @gray;

          @btn__disabled-bg:          @gray-20;

          @btn__disabled-outline:     @gray-20;

          ```
        variation_code_snippet: ""
      - variation_name: Sizing
        variation_description: |-
          ```
          // .btn
          @btn-font-size:             @base-font-size-px;
          @btn-border-radius-size:    4px;
          @btn-v-padding:             8px;
          @btn-h-padding:             14px;
          @btn-v-padding-modifier-ie: 0.8;

          // .btn__super
          @btn__super-font-size:      18px;
          ```
  - variation_group_name: Expandables
    variations:
      - variation_name: Color
        variation_description: |-
          ```
          // .o-expandable
          @expandable-focus:             @black;

          // .o-expandable_label
          @expandable_label-text:        @black;

          // .o-expandable_link
          @expandable_link-text:         @pacific;

          // .o-expandable__padded
          @expandable__padded-bg:        @gray-10;
          @expandable__padded-bg-hover:  @gray-20;
          @expandable__padded-divider:   @gray-40;

          // .o-expandable-group
          @expandable-group_header-text: @gray;
          @expandable-group_header-bg:   @gray-10;
          @expandable-group-bg:          @white;
          @expandable-group-divider:     @gray-80;
          ```
      - variation_name: Sizing
        variation_description: |
          ```
          @expandable_link-font-size: 14px;
          ```
      - variation_name: Timing
        variation_description: |-
          ```
          // Transition timing
          @expandable__transition-speed: 0.25s;
          ```
---
