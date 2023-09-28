---
title: Variables
layout: variation
section: development
eyebrow: Utilities
status: Proposed
description: >
  Component variables are used to theme a component. They likely will be left as
  is, but if needed can be overwritten by duplicating the variable in a `@key:
  value` format with a different value. This customized variable would be placed
  in the same file where this component’s less file is imported. Color variables
  referenced in comments are from cf-core cf-brand-colors.less.
variation_groups:
  - variation_group_name: Buttons
    variations:
      - variation_name: Color
        variation_description: |-
          ```
          // .btn
          @btn-text:                  @white;
          @btn-bg:                    @pacific;
          @btn-bg-hover:              @pacific-dark;
          @btn-bg-active:             @navy;

          // .btn__secondary
          @btn__secondary-text:       @white;
          @btn__secondary-bg:         @gray;
          @btn__secondary-bg-hover:   @gray-dark;
          @btn__secondary-bg-active:  @black;

          // .btn__warning
          @btn__warning-text:         @white;
          @btn__warning-bg:           @red-mid-dark;
          @btn__warning-bg-hover:     @red-dark;
          @btn__warning-bg-active:    @gray-dark;

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

      @grid_wrapper-width: 1230px;

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
    variations:
      - variation_name: Breakpoints
        variation_description: |-
          ```
          @bp-xs-max:  600px;
          @bp-sm-min:  @bp-xs-max + 1px;
          @bp-sm-max:  900px;
          @bp-med-min: @bp-sm-max + 1px;
          @bp-med-max: 1020px;
          @bp-lg-min:  @bp-med-max + 1px;
          @bp-lg-max:  1230px;
          @bp-xl-min:  @bp-lg-max + 1px;
          ```
  - variation_group_name: Icons
    variations:
      - variation_name: Sizing
        variation_description: >-
          The standard icon height in ems matches the 19px rendered canvas of
          text set in Avenir Next sized at 16px (19/16 = 1.1875).

          ```

          @cf-icon-height: 1.1875em;

          ```
  - variation_group_name: Layout
    variation_group_description: ""
    variations:
      - variation_description: |-
          ```
          // .block
          @block__bg:                 @gray-5;
          @block__border:             @gray-40;
          @block__border-top:         @gray-40;
          @block__border-right:       @gray-40;
          @block__border-bottom:      @gray-40;
          @block__border-left:        @gray-40;

          // .content_main
          @content_main-border:       @gray-40;

          // .content_sidebar
          @content_sidebar-bg:        @gray-5;
          @content_sidebar-border:    @gray-40;

          // .content_line
          @content_line:              @gray-40;

          // .grid_column__top-divider
          @grid_column__top-divider:  @gray-40;

          // .grid_column__left-divider
          @grid_column__left-divider: @gray-40;

          ```
        variation_name: Color
      - variation_name: Heroes and featured content modules
        variation_description: |-
          #### Color
          ```
          // Hero variables
          @hero-bg:                   @gray-5;
          @hero-knockout-bg:          @gray;
          @hero-knockout-text:        @white;

          // Featured Content Module variables
          @fcm-bg:                    @block__bg;
          ```

          #### Sizing
          ```
          // Hero variables
          @hero-desktop-height: 285px;
          ```
  - variation_group_name: Notifications
    variations:
      - variation_name: Color
        variation_description: |-
          ```
          @notification-bg:             @gray-5;
          @notification-bg-success:     @green-10;
          @notification-bg-warning:     @gold-10;
          @notification-bg-error:       @red-10;

          @notification-border:         @gray-40;
          @notification-border-success: @green;
          @notification-border-warning: @gold;
          @notification-border-error:   @red;

          @notification-icon:           @gray;
          @notification-icon-success:   @green;
          @notification-icon-warning:   @gold;
          @notification-icon-error:     @red;
          ```
        variation_code_snippet: ""
      - variation_name: Sizing
        variation_description: "`@notification-padding__px: 15px;`"
        variation_code_snippet: ""
  - variation_group_name: Pagination
    variation_group_description: ""
    variations:
      - variation_name: Color
        variation_description: |-
          ```
          @pagination-text: @gray;
          @pagination-bg:   @gray-10;
          ```
        variation_code_snippet: ""
      - variation_name: Sizing
        variation_description: |-
          ```
          @pagination-btn-min-width-px: 130px;
          ```
  - variation_group_name: Tables
    variations:
      - variation_name: Color
        variation_description: |-
          ```
          @table-cell-bg:              @white;
          @table-cell-bg_alt:          @gray-5;
          @table-row-link-bg-hover:    @pacific-80;
          @table-row-link-hover-color: @white;
          @table-head-text:            @text;
          @table-head-bg:              @gray-5;
          @table-scrolling-border:     @gray-40;
          @table-border:               @gray;

          ```
  - variation_group_name: Typography
    variations:
      - variation_name: Color
        variation_description: |-
          ```
          // Running text elements

          // .a-date
          @date:                      @gray;

          // .m-pull-quote
          @pull-quote_body:           @black;
          @pull-quote_citation:       @gray;

          // Headings

          // .a-heading__icon
          @heading__icon:             @black;
          @heading__icon__hover:      @link-text-hover;

          // Headers

          // .m-slug-header
          @slug-header_border__thin:  @gray-10;
          @slug-header_border__thick: @green;

          // .m-meta-header
          @meta-header_border:        @gray-40;

          // Body
          @text:                      @black;

          // Links
          // a
          @link-text:              @pacific;
          @link-underline:         @pacific;
          @link-text-visited:      @teal;
          @link-underline-visited: @teal;
          @link-text-hover:        @pacific-dark;
          @link-underline-hover:   @pacific-dark;
          @link-text-active:       @navy;
          @link-underline-active:  @navy;

          // .a-link__jump
          @jump-link_bg:           @gray-5;
          @jump-link_border:       @gray-40;

          // code
          @code-text:              @text;
          @code-bg:                @gray-5;
          ```
      - variation_name: Sizing
        variation_description: >-
          ```

          @base-font-size-px:   16px;

          @base-line-height-px: 22px;

          @base-line-height:    unit( ( @base-line-height-px / @base-font-size-px ) );


          @size-xl:             48px; // Super-size


          @size-i:              34px; // h1-size

          @size-ii:             26px; // h2-size

          @size-iii:            22px; // h3-size

          @size-iv:             18px; // h4-size

          @size-v:              14px; // h5-site

          @size-vi:             12px; // h6-size

          @size-code:           13px; // Custom size only for Mono code blocks

          ```
      - variation_name: Font stack
        variation_description: >-
          Override this variable in order to specify a font stack other than the
          CFPB's default brand font and fallback.

          `@font-stack: 'Avenir Next', Arial, sans-serif;`


          ``
      - variation_name: "@font-face file path"
        variation_description: >-
          Use this variable to point to the file containing your `@font-face`
          rules. To use none, set it to an empty string.

          `@font-face-path: 'licensed-fonts.less';`


          ``
      - variation_name: Font source
        variation_description: >-
          Use this variable to specify where the fonts declared in
          `licensed-fonts.less` are located when self-hosting the font files.
          Can be either a relative or absolute path.

          ```

          @cf-fonts-path: '/static/fonts'`;

          ```
---
