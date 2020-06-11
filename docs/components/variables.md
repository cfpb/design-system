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
        variation_code_snippet: ""
      - variation_name: Sizing
        variation_description: |
          ```
          @expandable_link-font-size: 14px;
          ```
        variation_code_snippet: ""
      - variation_name: Timing
        variation_description: |-
          ```
          // Transition timing
          @expandable__transition-speed: 0.25s;
          ```
  - variation_group_name: Forms
    variations:
      - variation_name: Color
        variation_description: |-
          ```
          // .a-text-input borders
          @input-border:                            @gray-60;
          @input-border__hover:                     @pacific;
          @input-border__focused:                   @pacific;
          @input-border__active:                    @pacific;
          @input-border__error:                     @red;
          @input-border__warning:                   @gold;
          @input-border__success:                   @green;
          @input-border__selected:                  @pacific;

          // .a-text-input backgrounds
          @input-bg:                                @white;
          @input-bg__selected:                      @pacific;
          @input-bg__disabled:                      @gray-10;
          @input-bg__disabled-selected:             @gray-40;

          // .a-text-input text
          @input-text:                              @black;
          @input-text__disabled:                    @gray;
          @input-text__placeholder:                 @gray;

          // .a-text-input icons
          @input-icon__error:                       @red;

          // .a-select
          @select-border:                           @input-border;
          @select-icon-bg:                          @gray-10;
          @select-text__disabled:                   @input-text__disabled;

          // .m-form-field
          @form-field-input-border:                 @input-border;
          @form-field-input-border__focused:        @input-border;
          @form-field-input-border__disabled:       @gray-60;

          // .m-form-field__lg-target
          @form-field-input-lg-target-bg:           @gray-10;
          @form-field-input-lg-target-bg__selected: @pacific-20;
          @form-field-input-lg-target-bg__disabled: @gray-20;
          @form-field-input-lg-target-border:       @pacific;

          // .a-label_helper
          @label-helper:                            @gray;
          ```
        variation_code_snippet: ""
      - variation_name: Sizing
        variation_description: |-
          ```
          // .a-select
          @select-height: 30px;
          ```
        variation_code_snippet: ""
  - variation_group_name: Grid
    variation_group_description: >-
      ```

      @grid_wrapper-width: 1200px;

      ```

      The grid’s maximum width in px. This value can be overridden in the `grid_wrapper()` mixin. 


      ```

      @grid_gutter-width: 30px;

      ```

      The fixed width between columns.


      ```

      @grid_total-columns: 12;

      ```

      The total number of columns used in calculating column widths. This value can be overridden in the `grid_column()` mixin.


      ```

      @grid_debug: false;

      ```

      Gives column blocks a background color if set to true.
  - variation_group_name: Icons
    variations:
      - variation_name: Sizing
        variation_description: >-
          The standard icon height in ems matches the 19px rendered canvas of
          text set in Avenir Next sized at 16px (19/16 = 1.1875).

          ```

          @cf-icon-height: 1.1875em;

          ```
  - variation_group_name: Heroes and featured content modules
    variation_group_description: ""
    variations:
      - variation_name: Color
        variation_description: |-
          ```
          // Hero variables
          @hero-bg:                   @gray-5;
          @hero-knockout-bg:          @gray;
          @hero-knockout-text:        @white;

          // Featured Content Module variables
          @fcm-bg:                    @block__bg;
          ```
      - variation_name: Sizing
        variation_description: |-
          ```
          // Hero variables
          @hero-desktop-height: 285px;
          ```
---
