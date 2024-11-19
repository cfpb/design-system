---
title: Helper classes and mixins
layout: variation
section: development
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <html class="no-js">

          <script>
                // Confirm availability of JavaScript and remove no-js class from html
                var docElement = document.documentElement;
                docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2');
          </script>

          <div class="u-js-only"></div>
        variation_description: >-
          Hide an element when JavaScript isn’t available. Requires a small
          script in the `<head>` of your `<html>` document that removes a
          `.no-js` class.


          * Add a `no-js` class to the html



          ```html

          <html class="no-js">

          ```


          * Add a script to remove the no-js class after confirming JavaScript is available


          ```html

          <script>
              // Confirm availability of JavaScript and remove no-js class from html
              var docElement = document.documentElement;
              docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2');
          </script>

          ```


          * Add the utility class to the element you want to hide


          ```html

          <div class="u-js-only"></div>

          ```
        variation_name: '"JS only" helper class'
      - variation_code_snippet: >-
          <div class="u-clearfix">
              <div style="float:left; width:100%; height:60px; background:black;"></div>
          </div>

          <em>This text would normally flow up into the black box of the box above</em>
        variation_description: >-
          Clear floated elements to avoid following elements from flowing into
          the previous one.


          For example, to float an element to the left, but prevent the following text from flowing into it.


          More information see: <http://css-tricks.com/snippets/css/clear-fix>
        variation_name: '"Clearfix" helper class'
      - variation_code_snippet: ''
        variation_description: >-
          Hide an element from view while keeping it accessible to screen
          readers.


          For example, to create a link with a social network icon, but allow non-sighted users to understand the context, add descriptive text with the `u-visually-hidden` class.


          ```html

          <h1>
              <a href="#">
                  <span class="cf-icon cf-icon-x-square"></span>
                  <span class="u-visually-hidden">Share on Twitter</span>
              </a>
          </h1>

          ```
        variation_name: '"Visually hidden" helper class'
      - variation_description: Use `u-hidden` to hide an element from everything
          (including screen readers). This is useful for dynamically hiding and
          showing content. It is also useful for progressive enhancement. For
          example, if you want to hide something initially on page load but show
          it after checking for browser support, use JavaScript to remove this
          class from the element after verifying support.
        variation_name: '"Totally hidden" helper class'
      - variation_code_snippet: ''
        variation_name: '"Float right" helper class'
        variation_description: |-
          ```html
          <div class="u-right"></div>
          ```
      - variation_code_snippet: >-
          <h4 class="u-mb0">Demonstration of heading 4 with zero bottom
          margin</h4>

          <hr>
        variation_description: >-
          Force a `margin` top or bottom on an element in pixels.


          `.u-m[p][#]`


          _`[p]` is the position, use `t` for top or `b` for bottom. `[#]` is the pixel value, available options are 0, 5, 10, 15, 20, 30, 45, 60_
        variation_name: '"Margin utilities" helper classes'
      - variation_code_snippet: >-
          <!--NOTE: Inline style properties for demonstration only.-->


          <div class="u-w100pct" style="background: #f4edf3; margin-bottom: 1px; font-size:12px;">
              <code>.u-w100pct</code>
          </div>

          <div class="u-w90pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w90pct</code>
          </div>

          <div class="u-w80pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w80pct</code>
          </div>

          <div class="u-w70pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w70pct</code>
          </div>

          <div class="u-w60pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w60pct</code>
          </div>

          <div class="u-w50pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w50pct</code>
          </div>

          <div class="u-w40pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w40pct</code>
          </div>

          <div class="u-w30pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w30pct</code>
          </div>

          <div class="u-w20pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w20pct</code>
          </div>

          <div class="u-w10pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w10pct</code>
          </div>

          <div class="u-w75pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w75pct</code>
          </div>

          <div class="u-w25pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w25pct</code>
          </div>

          <div class="u-w65pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w65pct</code>
          </div>

          <div class="u-w15pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w15pct</code>
          </div>

          <div class="u-w66pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w66pct</code>
          </div>

          <div class="u-w33pct" style="background: #f4edf3; margin-bottom: 1px;font-size:12px;">
              <code>.u-w33pct</code>
          </div>
        variation_description: Set the `width` of an element in percentages.
        variation_name: '"Width utilities" helper classes'
      - variation_code_snippet: |-
          <!--NOTE: Inline style properties for demonstration only-->

          <div style="border: 1px solid black; height: 22px; padding: 5px;">
              <p class="u-show-on-mobile">Visible on mobile</p>
          </div>
        variation_description:
          Shows content on screen widths under 601px. Reduce screen
          size to see this in action.
        variation_name: '"Show on mobile" width-specific helper class'
      - variation_code_snippet: |-
          <!--NOTE: Inline style properties for demonstration only-->

          <div style="border: 1px solid black; height: 22px; padding: 5px;">
              <p class="u-hide-on-mobile">Hidden on mobile</p>
          </div>
        variation_description:
          Hides content on screens widths under 601px. Reduce
          screen size to see this in action.
        variation_name: '"Hide on mobile" width-specific helper class'
    variation_group_name: Helper classes
  - variation_group_name: Mixins
    variations:
      - variation_name: '"Flexible proportional containers" mixin'
        variation_description: >-
          Utilize intrinsic ratios to create a flexible container that retains
          an aspect ratio. When `<img>` tags scale they retain their aspect
          ratio, but if you need a flexible video you will need to use this
          mixin.


          _Read more about intrinsic ratios: <http://alistapart.com/article/creating-intrinsic-ratios-for-video>_


          `.u-flexible-container-mixin(@width: 16, @height: 9);`


          In addition to the mixin, there are two default classes available for building 16:9 and 4:3 containers.


          _When using the mixin, pass the `width` as the first argument, and the `height` as the second argument. Default values are `16, 9`._


          Original mixin credit: <https://gist.github.com/craigmdennis/6655047>
        variation_code_snippet: >-
          <!--NOTE: Inline style properties for demonstration only-->


          <h4>16:9 flexible video player</h4>

          <p>
              To create a 16:9 flexible video player,
              wrap the video element in an element with
              <code>u-flexible-container</code>
              and add the <code>u-flexible-container__inner</code>
              to the video element.
          </p>

          <div class="u-flexible-container">
              <video class="u-flexible-container__inner"
                    style="background:#75787B;"
                    controls>
              </video>
          </div>


          <br />


          <h4>Flexible container with background</h4>

          <p>
              To create a flexible container with only a background
              (no inner video or object element), omit the inner container.
          </p>

          <div class="u-flexible-container"
              style="background-image: url(https://dummyimage.com/700x394/addc91/101820);
                      background-position: center center;
                      background-repeat: no-repeat;"></div>

          <br />


          <h4>4:3 flexible video player</h4>

          <p>
              To create a 4:3 flexible video player,
              add the <code>__4_3 modifier</code> to the container.
          </p>

          <div class="u-flexible-container u-flexible-container--4-3">
              <video class="u-flexible-container__inner"
                    style="background:#75787B;"
                    controls>
              </video>
          </div>
      - variation_name: '"Link color" mixin'
        variation_description: >-
          Calling the mixin without arguments will set the following states:
          default - `#0071bc`, `:hover` - `#205493`, `:focus` - `#0071bc`,
          `:visited` - `#4c2c92`, `:active` - `#046b99`.


          `u-link-colors()`


          Passing a single argument into the mixin will set the color for the default, `:visited`, `:hover`, `:focus`, and `:active` states.


          `u-link-colors(@c)`


          Passing two arguments into the mixin will set the color for the default, `:visited`, and `:active` states as the first argument, and `:hover` and `:focus` as the second argument.


          `u-link-colors(@c, @h)`


          Passing five arguments will set the color for the default, `:visited`, `:hover`, `:focus`, and `:active` states respectively.


          `u-link-colors(@c, @v, @h, @f, @a)`


          Passing ten arguments will set the text (default, `:visited`, `:hover`, `:focus`, and `:active` states in the first five arguments) and border colors (default, `:visited`, `:hover`, `:focus`, and `:active` states in the following five arguments) separately.


          `u-link-colors(@c, @v, @h, @f, @a, @bc, @bv, @bh, @bf, @ba)`


          **A base mixin of `u-link-colors-base()` exists, but please refrain from using this mixin directly in order to promote consistent naming throughout this project. If you need to set colors for all states of a link, use `.u-link-colors(@c, @v, @h, @f, @a)`.**
        variation_code_snippet: ''
      - variation_name: '"Link border" mixin'
        variation_description: >-
          Force the default bottom `border` on the default and `:hover` states.


          `.u-link__border()`


          Turn off the default bottom `border` on the default and `:hover` states.


          `.u-link__no-border()`


          Turn off the default bottom `border` on the default state but force a bottom border on the `:hover` state.


          `.u-link__hover-border()`
        variation_code_snippet: ''
      - variation_name: '"Link children" mixin'
        variation_description: >-
          Calling this mixin without arguments will set the default color for
          the `:hover` state of a child within a link, without affecting the
          link itself.


          `.u-link__hover-child()`


          Passing a single argument into the mixin will set a custom color for the `:hover` state of a child within a link, without affecting the link itself.


          `.u-link__hover-child(@c)`
        variation_code_snippet: ''
      - variation_name: '"Small text utility" mixin'
        variation_code_snippet: ''
        variation_description: >-
          #### **Class**


          Sets the element to `14px` (in `em`s).


          *To be used on default `16px` text only.
          To use on text set to another size, use the mixin below.*


          `.u-small-text`


          There is also a modifier, `u-small-text--subtle`, which sets the color
          to be gray.

          #### **Mixin**


          Sets the element to `14px` (in `em`s) based on the text size passed as `@context`.


          `.u-small-text(@context)`


          ```scss

          // Ex.

          .example {
            font-size: math.div(20px, @base-font-size-px) + em;

            small {
              .u-small-text(20px);
            }
          }

          // Compiles to

          .example {
            font-size: 1.25em;
          }

          .example small {
            font-size: 0.7em;
          }

          ```
guidelines: ''
eyebrow: Utilities
status: Released
description: 'Helper classes and mixins are utilities to help front-end web
  development meet our design standards. '
use_cases: ''
behavior: ''
accessibility: ''
last_updated: 2019-09-13T18:46:32.716Z
research: ''
---
