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
          @btn-text:                  var(--white);
          @btn-bg:                    var(--pacific);
          @btn-bg-hover:              var(--pacific-dark);
          @btn-bg-active:             var(--navy);
          @btn-divider:               var(--pacific-60);

          // .btn__secondary
          @btn__secondary-text:       var(--white);
          @btn__secondary-bg:         var(--gray);
          @btn__secondary-bg-hover:   var(--gray-dark);
          @btn__secondary-bg-active:  var(--black);
          @btn__secondary-divider:    var(--gray-40);

          // .btn__warning
          @btn__warning-text:         var(--white);
          @btn__warning-bg:           var(--red-mid-dark);
          @btn__warning-bg-hover:     var(--red-dark);
          @btn__warning-bg-active:    var(--gray-dark);
          @btn__warning-divider:      var(--red-60);

          // .btn__disabled
          @btn__disabled-text:        var(--gray);
          @btn__disabled-bg:          var(--gray-20);
          @btn__disabled-outline:     var(--gray-20);
          @btn__disabled-divider:     var(--gray-60);
          ```
        variation_code_snippet: ''
      - variation_name: Sizing
        variation_description: |-
          ```
          // .btn
          @btn-font-size:             @base-font-size-px;
          @btn-border-radius-size:    4px;
          @btn-v-padding:             8px;
          @btn-h-padding:             14px;
          ```
  - variation_group_name: Forms
    variations:
      - variation_name: Color
        variation_description: |-
          ```
          // .a-text-input borders
          @input-border:                            var(--gray-60);
          @input-border__hover:                     var(--pacific);
          @input-border__focused:                   var(--pacific);
          @input-border__active:                    var(--pacific);
          @input-border__error:                     var(--red);
          @input-border__error__hover:              var(--red-dark);
          @input-border__warning:                   var(--gold);
          @input-border__warning__hover:            var(--gold-dark);
          @input-border__success:                   var(--green);
          @input-border__success__hover:            var(--green-dark);
          @input-border__selected:                  var(--pacific);

          // .a-text-input backgrounds
          @input-bg:                                var(--white);
          @input-bg__selected:                      var(--pacific);
          @input-bg__disabled:                      var(--gray-10);
          @input-bg__disabled-selected:             var(--gray-40);

          // .a-text-input text
          @input-text:                              var(--black);
          @input-text__disabled:                    var(--gray);
          @input-text__placeholder:                 var(--gray);

          // .a-text-input icons
          @input-icon__error:                       var(--red);

          // .a-select
          @select-border:                           @input-border;
          @select-icon-bg:                          var(--gray-10);
          @select-text__disabled:                   @input-text__disabled;

          // .m-form-field
          @form-field-input-border:                 @input-border;
          @form-field-input-border__focused:        @input-border;
          @form-field-input-border__disabled:       var(--gray-60);

          // .m-form-field--lg-target
          @form-field-input-lg-target-bg:           var(--gray-10);
          @form-field-input-lg-target-bg__selected: var(--pacific-20);
          @form-field-input-lg-target-bg__disabled: var(--gray-20);
          @form-field-input-lg-target-border:       var(--pacific);

          // .a-label__helper
          @label-helper:                            var(--gray);
          ```
        variation_code_snippet: ''
      - variation_name: Sizing
        variation_description: |-
          ```
          // .a-select
          @select-height: 30px;
          ```
        variation_code_snippet: ''
  - variation_group_name: Grid
    variation_group_description: >-
      ```

      @grid_wrapper-width: 1230px;

      ```

      The grid’s maximum width in px. This value can be overridden in the `grid__wrapper()` mixin.


      ```

      @grid_gutter-width: 30px;

      ```

      The fixed width between columns.


      ```

      @grid_total-columns: 12;

      ```

      The total number of columns used in calculating column widths. This value can be overridden in the `grid__column()` mixin.


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
    variation_group_description: ''
    variations:
      - variation_description: |-
          ```
          // .block
          @block--bg:                 var(--gray-5);
          @block--border:             var(--gray-40);
          @block--border-top:         var(--gray-40);
          @block--border-right:       var(--gray-40);
          @block--border-bottom:      var(--gray-40);
          @block--border-left:        var(--gray-40);

          // .content__main
          @content__main-border:       var(--gray-40);

          // .content__sidebar
          @content__sidebar-bg:        var(--gray-5);
          @content__sidebar-border:    var(--gray-40);

          // .content__line
          @content__line:              var(--gray-40);

          // .grid__column__top-divider
          @grid__column__top-divider:  var(--gray-40);

          // .grid__column__left-divider
          @grid__column__left-divider: var(--gray-40);

          ```
        variation_name: Color
      - variation_name: Heroes and featured content modules
        variation_description: |-
          #### Color
          ```
          // Hero variables
          @hero-bg:                   var(--gray-5);
          @hero-knockout-bg:          var(--gray);
          @hero-knockout-text:        var(--white);

          // Featured Content Module variables
          @fcm-bg:                    @block--bg;
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
          @notification-bg:             var(--gray-5);
          @notification-bg-success:     var(--green-10);
          @notification-bg-warning:     var(--gold-10);
          @notification-bg-error:       var(--red-10);

          @notification-border:         var(--gray-40);
          @notification-border-success: var(--green);
          @notification-border-warning: var(--gold);
          @notification-border-error:   var(--red);

          @notification-icon:           var(--gray);
          @notification-icon-success:   var(--green);
          @notification-icon-warning:   var(--gold);
          @notification-icon-error:     var(--red);
          ```
        variation_code_snippet: ''
      - variation_name: Sizing
        variation_description: '`@notification-padding__px: 15px;`'
        variation_code_snippet: ''
  - variation_group_name: Pagination
    variation_group_description: ''
    variations:
      - variation_name: Color
        variation_description: |-
          ```
          @pagination-text: var(--gray);
          @pagination-bg:   var(--gray-10);
          ```
        variation_code_snippet: ''
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
          @table-cell-bg:              var(--white);
          @table-cell-bg_alt:          var(--gray-5);
          @table-row-link-bg-hover:    var(--pacific-80);
          @table-row-link-hover-color: var(--white);
          @table-head-text:            @text;
          @table-head-bg:              var(--gray-5);
          @table-scrolling-border:     var(--gray-40);
          @table-border:               var(--gray);

          ```
  - variation_group_name: Typography
    variations:
      - variation_name: Color
        variation_description: |-
          ```
          // Running text elements

          // .a-date
          @date:                      var(--gray);

          // .m-pull-quote
          @pull-quote_body:           var(--black);
          @pull-quote_citation:       var(--gray);

          // Headers

          // .m-slug-header
          @slug-header_border__thin:  var(--gray-10);
          @slug-header_border__thick: var(--green);

          // .m-meta-header
          @meta-header_border:        var(--gray-40);

          // Body
          @text:                      var(--black);

          // Links
          // a
          @link-text:              var(--pacific);
          @link-underline:         var(--pacific);
          @link-text-visited:      var(--teal);
          @link-underline-visited: var(--teal);
          @link-text-hover:        var(--pacific-dark);
          @link-underline-hover:   var(--pacific-dark);
          @link-text-active:       var(--navy);
          @link-underline-active:  var(--navy);

          // .a-link--jump
          @jump-link_bg:           var(--gray-5);
          @jump-link_border:       var(--gray-40);

          // code
          @code-text:              @text;
          @code-bg:                var(--gray-5);
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
      - variation_name: '@font-face file path'
        variation_description: >-
          Use this variable to point to the file containing your `@font-face`
          rules. To use none, set it to an empty string.

          `@font-face-path: 'licensed-fonts.less';`
      - variation_name: Font source
        variation_description: >-
          Use this variable to specify where the fonts declared in
          `licensed-fonts.less` are located when self-hosting the font files.
          Can be either a relative or absolute path.

          ```

          @cf-fonts-path: '/static/fonts'`;

          ```
---
