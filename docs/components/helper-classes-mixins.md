---
title: Helper classes and mixins
layout: variation
section: components
secondary_section: Core development
status: Released
description: >-
  Helper classes and mixins are utilities to help front-end web development meet
  our design standards. More information about these utilities can be found at:


  https://cfpb.github.io/capital-framework/components/cf-core/#utilities
variations:
  - variation_code_snippet: |-
      <html class="no-js">
      <script>
            // Confirm availability of JavaScript and remove no-js class from html
            var docElement = document.documentElement;
            docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2');
      </script>
      <div class="u-js-only"></div>
    variation_description: >-
      Hide an element when JavaScript isn’t available. Requires a small script
      in the `<head>` of your `<html>` document that removes a `.no-js` class.


      1. Add a `no-js` class to the html



      ```

      <html class="no-js">

      ```


      2. Add a script to remove the no-js class after confirming JavaScript is
      available


      ```

      <script>
            // Confirm availability of JavaScript and remove no-js class from html
            var docElement = document.documentElement;
            docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2');
        </script>
      ```


      3. Add the utility class to the element you want to hide


      ```

      <div class="u-js-only"></div>

      ```
    variation_name: '"JS only" helper class'
  - variation_code_snippet: >-
      <div class="u-clearfix">
          <div style="float:left; width:100%; height:60px; background:black;"></div>
      </div>

      <em>This text would normally flow up into the black box of the box
      above</em>
    variation_description: >-
      Clear floated elements to avoid following elements from flowing into the
      previous one.


      For example, to float an element to the left, but prevent the following
      text from flowing into it.


      More information see: <http://css-tricks.com/snippets/css/clear-fix>
    variation_name: '"Clearfix" helper class'
  - variation_code_snippet: |-
      <h1>
          <a href="#">
              <span class="cf-icon cf-icon-twitter-square"></span>
              <span class="u-visually-hidden">Share on Twitter</span>
          </a>
      </h1>
    variation_description: >-
      Hide an element from view while keeping it accessible to screen readers.


      For example, to create a link with a social network icon, but allow
      non-sighted users to understand the context, add descriptive text with the
      `u-visually-hidden` class.
    variation_name: '"Visually hidden" helper class'
  - variation_description: >-
      Use `u-hidden` to hide an element from everything (including screen
      readers). This is useful for dynamically hiding and showing content. It is
      also useful for progressive enhancement. For example, if you want to hide
      something initially on page load but show it after checking for browser
      support, use JavaScript to remove this class from the element after
      verifying support.
    variation_name: '"Totally hidden" helper class'
  - variation_code_snippet: <div class="u-inline-block"></div>
    variation_description: '_DEPRECATED._ Identical to `display: inline-block.`'
    variation_name: '"Inline block" helper class [DEPRECATED]'
  - variation_code_snippet: <div class="u-right"></div>
    variation_name: '"Float right" helper class'
  - variation_code_snippet: |-
      <div class="u-break-word">
          This link should break:
          <a href="#">
              something@something.com
          </a>
      </div>

      <div>
          This link should not:
          <a href="#">
              something@something.com
          </a>
      </div>
    variation_description: >-
      Force word breaks within an element. Useful for small containers where
      text may over-run the width of the container.


      _This only works in Internet Explorer 8 when the element with the
      `.u-break-word` class has layout. See
      <http://stackoverflow.com/questions/3997223/word-wrapbreak-word-not-working-in-ie8>
      for more information._
    variation_name: '"Break word" helper class'
  - variation_code_snippet: <h1 class="u-mb0">Heading with zero bottom margin</h1>
    variation_description: >-
      Force a `margin` top or bottom on an element in pixels.


      `.u-m[p][#]`


      _`[p]` is the position, use `t` for top or `b` for bottom. `[#]` is the
      pixel value, available options are 0, 5, 10, 15, 20, 30, 45, 60_
    variation_name: '"Margin utilities" helper classes'
  - variation_code_snippet: |-
      <div class="u-w100pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w100pct</code>
      </div>
      <div class="u-w90pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w90pct</code>
      </div>
      <div class="u-w80pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w80pct</code>
      </div>
      <div class="u-w70pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w70pct</code>
      </div>
      <div class="u-w60pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w60pct</code>
      </div>
      <div class="u-w50pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w50pct</code>
      </div>
      <div class="u-w40pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w40pct</code>
      </div>
      <div class="u-w30pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w30pct</code>
      </div>
      <div class="u-w20pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w20pct</code>
      </div>
      <div class="u-w10pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w10pct</code>
      </div>
      <div class="u-w75pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w75pct</code>
      </div>
      <div class="u-w25pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w25pct</code>
      </div>
      <div class="u-w66pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w66pct</code>
      </div>
      <div class="u-w33pct" style="background: #f4edf3; margin-bottom: 1px;">
          <code>.u-w33pct</code>
      </div>
    variation_description: |-
      Set the `width` of an element in percentages.

      **NOTE: Inline style properties for demonstration only.**
    variation_name: '"Width utilities" helper classes'
usage: ''
accessibility: ''
research: ''
---

