---
title: Heading Hierarchy
permalink: /components/heading-hierarchy
layout: component
collection_name: components
section: components
status: Proposed
intro: >-
  Hierarchy refers to the difference in type size and weight between text
  elements. A successful hierarchy establishes the order of importance of
  elements on a page, allowing readers to easily scan content and find what
  they’re looking for.


  This page is under active development. Information is being moved into it from
  these pages:


  * http://cfpb.github.io/design-manual/brand-guidelines/typography.html

  * https://cfpb.github.io/capital-framework/components/cf-core/#type-hierarchy
variations:
  - variation_code_snippet: >-
      <p>Lorem ipsum dolor sit amet, <em>consectetur adipisicing elit</em>, sed
      do

      eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna
      aliqua.

      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut

      aliquip ex ea commodo consequat.</p>
    variation_description: >-
      Body text should provide an efficient and pleasant experience on every
      viewport size. Readable text makes good use of alignment, spacing, line
      length and height, and contrast.
    variation_jinja_code_snippet: ''
    variation_name: Body text
    variation_specs: "Element | Variable name | Variable | web value | Print value\n--- | --- | --- | --- | ---\nTypeface | | | Avenir Next Regular | Avenir Next Regular\nText color | @text: | @black; | Black (#101820)\t| 0, 0, 0, 100\nText size | @base-font-size-px: | 16px; | 16px | 11pt\nLine height (pixels) | @base-line-height-px: | 22px; | 22px | 16pt\nLine height | @base-line-height: | unit( @base-line-height-px / @base-font-size-px ); | \nLarge breakpoint | @bp-lg-max: | 1230px; | \nMedium breakpoint | @bp-med-max: | 1020px; |\nSmall breakpoint | @bp-sm-max: | 900px; |\nExtra-small breakpoint | @bp-xs-max: | 600px; |"
  - variation_code_snippet: >-
      <p class="lead-paragraph">Ut enim ad minim veniam, quis nostrud
      exercitation

      ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    variation_description: >-
      Responsive text. Displays as a Heading 3 on large screens; displays at
      Heading 4 size (but still Regular weight) on small screens.

      <601px wide: 18px / 22px
    variation_name: Lead paragraph (subheading)
    variation_specs: |+
      Element | Variable name | Variable | web value | Print value
      --- | --- | --- | --- | ---
      Text size | ? |  | 22px | 16pt
      Small screen text size | | | 18px | 
      Line height (pixels) | ? |  | 28px | 20pt
      Small screen line height | | 22px | 


  - variation_code_snippet: <h1 class="superheading">Example display heading</h1>
    variation_description: '<601px wide: Drops to Heading 1'
    variation_jinja_code_snippet: ''
    variation_name: Display heading
    variation_specs: |-
      Element | Variable name | Variable | web value | Print value
      --- | --- | --- | --- | ---
      Text size | ? |  | 48px | 38pt
      Small screen text size | | | 34px | 
      Line height (pixels) | ? |  | 60px | 66pt
      Small screen line height | | 42px | 
  - variation_code_snippet: |-
      <h1>Example heading element</h1>

      <!--
      Non heading element:
      <p class="h1">A non-heading element</p>
      -->
    variation_description: |-
      Responsive heading. At small screen sizes, displays as heading level 2.
      <601px wide: Drops to Heading 2
    variation_name: Heading level 1
    variation_specs: |+
      Element | Variable name | Variable | web value | Print value
      --- | --- | --- | --- | ---
      Text size | ? |  | 34px | 38pt
      Small screen text size | | | 26px | 
      Line height (pixels) | ? |  | 42px | 40pt
      Small screen line height | | 32px | 




  - variation_code_snippet: |-
      <h2>Example heading element</h2>

      <!--
      Non heading element:
      <p class="h2">A non-heading element</p>
      -->
    variation_description: |-
      Responsive heading. At small screen sizes, displays as heading level 3.
      <601px wide: Drops to Heading 3
    variation_name: Heading level 2
    variation_specs: |-
      Element | Variable name | Variable | web value | Print value
      --- | --- | --- | --- | ---
      Text size | ? |  | 26px | 26pt
      Small screen text size | | | 22px | 
      Line height (pixels) | ? |  | 32px | 28pt
      Small screen line height | | 28px | 
  - variation_code_snippet: |-
      <h3>Example heading element</h3>

      <!--
      Non heading element:
      <p class="h3">A non-heading element</p>
      -->
    variation_description: |-
      Responsive heading. At small screen sizes, displays as heading level 4.
      <601px wide: Drops to Heading 4
    variation_name: Heading level 3
    variation_specs: |-
      Element | Variable name | Variable | web value | Print value
      --- | --- | --- | --- | ---
      Typeface | | | | Avenir Next Demi Bold
      Text size | ? |  | 22px | 16pt
      Small screen text size | | | 18px | 
      Line height (pixels) | ? |  | 28px | 18pt
      Small screen line height | | 22px | 
  - variation_code_snippet: |-
      <h4>Example heading element</h4>

      <!--
      Non heading element:
      <p class="h4">A non-heading element</p>
      -->
    variation_description: >-
      Responsive heading. At small screen sizes, displays at same size as body
      text.

      <601px wide: Drops to 16px / 18px
    variation_jinja_code_snippet: |+

    variation_name: Heading level 4
    variation_specs: |-
      Element | Variable name | Variable | web value | Print value
      --- | --- | --- | --- | ---
      Typeface | | | Avenir Next Medium | Avenir Next Medium
      Text size | ? |  | 18px | 14pt
      Small screen text size | | | 16px | 
      Line height (pixels) | ? |  | 22px | 16pt
      Small screen line height | | 18px | 
  - variation_code_snippet: |-
      <h5>Example heading element</h5>

      <!--
      Non heading element:
      <p class="h5">A non-heading element</p>
      -->
    variation_description: Not a responsive heading. 1 px letter spacing.
    variation_name: Heading level 5
    variation_specs: |-
      Element | Variable name | Variable | web value | Print value
      --- | --- | --- | --- | ---
      Typeface | | | Avenir Next Demi Bold | Avenir Next Demi Bold
      Case | | | All caps | All caps
      Text size | ? |  | 14px | 10pt
      Line height (pixels) | ? |  | 18px | 12pt
  - variation_code_snippet: |-
      <h5>Example heading element</h5>

      <!--
      Non heading element:
      <p class="h6">A non-heading element</p>
      -->
    variation_description: Not a responsive heading. 1 px letter spacing.
    variation_name: Heading level 6
    variation_specs: |-
      Element | Variable name | Variable | web value | Print value
      --- | --- | --- | --- | ---
      Typeface | | | Avenir Next Demi Bold | Avenir Next Medium
      Case | | | All caps | 
      Text size | ? |  | 12px | 12pt
      Line height (pixels) | ? |  | 15px | 14pt
  - variation_code_snippet: |-
      <p> Paragraph example for visual reference</p>
      <ul>
          <li>List item 1</li>
          <li>
              List item 2
              <ul>
                    <li>Nested item 2-1</li>
                    <li>Nested item 2-2</li>
                    <li>Nested item 2-3</li>
              </ul>
          </li>
          <li>List item 3</li>
      </ul>
      <p> Paragraph example for visual reference</p>
    variation_name: Unordered list
  - variation_code_snippet: |-
      <p>Paragraph example for visual reference</p>
      <ol>
          <li>List item 1</li>
          <li>
              List item 2
              <ol>
                    <li>Nested item 2-1</li>
                    <li>Nested item 2-2</li>
                    <li>Nested item 2-3</li>
              </ol>
          </li>
          <li>List item 3</li>
      </ol>
      <p>Paragraph example for visual reference</p>
    variation_description: ''
    variation_name: Ordered list
usage: >-
  **Use cases**


  Consistent scaling, weights, and capitalization are used to create distinction
  between heading levels. 


  **Content guidelines**


  Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a
  porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.


  **Behavior**

  At screen widths of 600px and below, the Display heading and Headings 1-4 drop
  in size. Headings 5-6 remain consistent at all screen widths.
accessibility: >-
  Phasellus molestie magna non est bibendum non venenatis nisl tempor.
  Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.
  Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at
  risus et justo dignissim congue. Donec.
research: >-
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
  rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna
  non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut
  dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut
  blandit.


  Odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec
  congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu
  ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in
  metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus
  tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur.


  Vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac
  egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora
  torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit
  amet leo consequat posuere.
---

