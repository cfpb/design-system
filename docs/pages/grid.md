---
layout: variation
section: foundation
status: Released
variation_groups:
  - variation_group_name: Standard grid
    variation_group_description: >-
      Twelve-column grid with flexible column widths and fixed gutters. The
      width of the padding on the left and right edge of the grid depends on
      device size.


      * 30px fixed gutter width

      * Max width 1230px, background colors may bleed to edge

      * Desktop: 30px padding on each side

      * Tablet: 30px padding on each side

      * Mobile: 15px padding on each side
    variations:
      - variation_name: ''
        variation_description: ''
        variation_code_snippet: |-
          <div class="cols-12">
              <section>
                  <div class="col col-1"><div>one</div></div>
                  <div class="col col-1"><div>one</div></div>
                  <div class="col col-1"><div>one</div></div>
                  <div class="col col-1"><div>one</div></div>
                  <div class="col col-1"><div>one</div></div>
                  <div class="col col-1"><div>one</div></div>
                  <div class="col col-1"><div>one</div></div>
                  <div class="col col-1"><div>one</div></div>
                  <div class="col col-1"><div>one</div></div>
                  <div class="col col-1"><div>one</div></div>
                  <div class="col col-1"><div>one</div></div>
                  <div class="col col-1"><div>one</div></div>
              </section>

              <section>
                  <div class="col col-2"><div>two</div></div>
                  <div class="col col-2"><div>two</div></div>
                  <div class="col col-2"><div>two</div></div>
                  <div class="col col-2"><div>two</div></div>
                  <div class="col col-2"><div>two</div></div>
                  <div class="col col-2"><div>two</div></div>
              </section>

              <section>
                  <div class="col col-2"><div>two</div></div>
                  <div class="col col-3"><div>three</div></div>
                  <div class="col col-2"><div>two</div></div>
                  <div class="col col-3"><div>three</div></div>
                  <div class="col col-2"><div>two</div></div>
              </section>

              <section>
                  <div class="col col-3"><div>three</div></div>
                  <div class="col col-3"><div>three</div></div>
                  <div class="col col-3"><div>three</div></div>
                  <div class="col col-3"><div>three</div></div>
              </section>

              <section>
                  <div class="col col-4"><div>four</div></div>
                  <div class="col col-4"><div>four</div></div>
                  <div class="col col-4"><div>four</div></div>
              </section>

              <section>
                  <div class="col col-6"><div>six</div></div>
                  <div class="col col-6"><div>six</div></div>
              </section>

              <section>
                  <div class="col col-12"><div>twelve</div></div>
              </section>
          </div>
  - variation_group_name: Breakpoints
    variation_group_description: >-
      Five major breakpoints standardize large-scale changes like navigation and
      sidebar behavior. Use other breakpoints as necessary.


      * `xs`: 0-600px

      * `sm`: 601-900px

      * `med`: 901-1020px

      * `lg`: 1021-1230px

      * `xl`: 1231px and up
  - variations:
      - variation_code_snippet: >-
          <div class="main-wrapper" style="background-color: #f9f9f9">This
          container now has left and right padding and a centered max
          width.</div>

          <div class="wide-wrapper" style="background-color: #f9f9f9">This container is the same except it has a wider max-width.</div>
        variation_description: |-
          Wrappers are centered containers with a max-width
          and outside left/right padding of ½ the gutter width on each side.

          #### Sass mixin

          ```scss
          @include u-grid-wrapper( @grid_wrapper-width: @grid_wrapper-width )
          ```

          You can create a wrapper with max-width other than the default
          by passing a pixel value into the mixin.

          #### Example

          ```scss
          .main-wrapper {
              @include u-grid-wrapper();
          }
          .wide-wrapper {
              @include u-grid-wrapper( 1900px );
          }
          ```
        variation_name: Wrappers
      - variation_code_snippet: >-
          <div class="main-wrapper">
              <div class="half">I am half of my parent.</div>
              <div class="half">
                      <div class="styled">I am half of my parent. I also have a border and background.</div>
              </div>
          </div>
        variation_description: >-
          #### Mixin


          ```scss

          @include u-grid-column( $columns: 1, $total: $grid-total-columns )

          ```


          Create a grid column that is `$columns` wide given `$total` total grid columns.

          Grid columns use transparent borders to create the gutters of the grid,

          so if you want a column to have a background or border, you'll need to

          add a wrapper just inside the column to be styled that way.



          ```scss

          .main-wrapper {
              @include u-grid-wrapper;
          }

          .half {
              @include u-grid-column(1, 2);
          }

          .styled {
              border: 1px solid #999;
              background: #EEE;
          }

          ```


          **NOTE:** cf-grid does not have a "row" concept.

          If you have a 12-column grid and place 24 columns inside a wrapper,

          cf-grid columns will automatically stack into two rows of 12.
        variation_name: Columns
      - variation_code_snippet: |-
          <div class="main-wrapper">
              <div class="half">
                  <div class="nested">
                      <div class="half"></div>
                      <div class="half"></div>
                  </div>
              </div>
              <div class="half">
                  <div class="nested">
                      <div class="half"></div>
                      <div class="half"></div>
                  </div>
              </div>
          </div>
        variation_description: >
          Since all grid columns have left and right gutters,

          you will notice undesirable offsetting when nesting columns.

          Normally this is removed with complex selectors

          or by adding classes to the first and last column per 'row'.


          In cf-grid, the way to get around this is by wrapping your columns

          in a container that utilizes the `@include u-grid-nested-col-group` mixin.

          This mixin uses negative left and right margins to

          pull the columns back into alignment with parent columns.


          Working this way allows you to easily create responsive grids.

          You are free to control the number of columns per "row" at different breakpoints

          without having to deal with the first and last columns of each row.


          #### Mixin


          ```scss

          @include u-grid-nested-col-group;

          ```


          #### Usage


          ```scss

          .main-wrapper {
              @include u-grid-wrapper;
          }

          .nested {
              @include u-grid-nested-col-group;
          }

          .half {
              @include u-grid-column(1, 2);
          }

          ```
        variation_name: Nested columns
      - variation_code_snippet: |-
          <div class="cols-12">
              <section>
                  <div class="col col-6">
                      <div>six</div>
                      <section class="nested">
                          <div class="col col-4"><div>four</div></div>
                          <div class="col col-4"><div>four</div></div>
                          <div class="col col-4"><div>four</div></div>
                      </section>
                  </div>

                  <div class="col col-6">
                      <div>six</div>
                      <section class="nested">
                          <div class="col col-4"><div>four</div></div>
                          <div class="col col-4"><div>four</div></div>
                          <div class="col col-4"><div>four</div></div>
                      </section>
                  </div>
              </section>

              <section>
                  <div class="col col-3">
                      <div>three</div>
                      <section class="nested">
                          <div class="col col-6"><div>six</div></div>
                          <div class="col col-6"><div>six</div></div>
                      </section>
                  </div>

                  <div class="col col-6">
                      <div>six</div>
                      <section class="nested">
                          <div class="col col-4"><div>four</div></div>
                          <div class="col col-4"><div>four</div></div>
                          <div class="col col-4"><div>four</div></div>
                      </section>
                  </div>

                  <div class="col col-3">
                      <div>three</div>
                      <section class="nested">
                          <div class="col col-3"><div>three</div></div>
                          <div class="col col-3"><div>three</div></div>
                          <div class="col col-3"><div>three</div></div>
                          <div class="col col-3"><div>three</div></div>
                      </section>
                  </div>
              </section>
          </div>
        variation_description: ''
        variation_name: Nesting
      - variation_name: 'Cf-grid helpers: Wrapper'
        variation_description: >
          Turns an element into a cf-grid wrapper at 801px and above (e.g.,
          `<div class="wrapper">`). Includes some explicit declarations for
          Internet Explorer 8 due to the fact that it doesn’t support media
          queries.
        variation_code_snippet: |-
          <div class="wrapper">
              Wrapper
          </div>
    variation_group_name: Development
    variation_group_description: >-

      **Warning:** _This document is written for people who might want to create a grid system using our SCSS mixins, and does not itself document how we have used our own mixins to create a grid system. Nor does it document how to use said grid system. This page probably needs a major re-write._


      ----


      The grid component is a suite of variables and mixins that enables you to

      lay out a flexible 12-column grid with fixed-size gutters.

      (Column widths will expand and contract with the width of the page,

      but the gutter width remains constant.)

      The mixins are made to be used within your project's SCSS code to give grid

      layout to your content without needing to use non-semantic grid classes.


      For example, when creating a half-and-half layout, instead of applying classes

      to your column wrappers, like this:


      ```scss

      <div class="col-half"> … </div>

      <div class="col-half"> … </div>

      ```


      You can give your wrappers semantic class names that describe their content,

      and apply the mixins to those semantic classes, like this:


      ```scss

      <div class="description"> … </div>

      <div class="illustration"> … </div>

      ```


      ```scss

      .description,

      .illustration {
          @include u-grid-column(1, 2);
      }

      ```


      Read on for more details on the variables and mixins this component provides.

guidelines: ''
eyebrow: Basics
title: Grid
description: >
  The grid provides structure for website content. The flexible design adjusts
  for different devices.
use_cases: ''
behavior: ''
accessibility: ''
related_items: ''
last_updated: 2019-09-10T15:02:08.752Z
research: ''
---
