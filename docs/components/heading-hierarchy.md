---
title: Headings
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
  - variation_code_snippet: <h1 class="superheading">Example display heading</h1>
    variation_description: '<601px wide: Drops to Heading 1'
    variation_jinja_code_snippet: ''
    variation_name: Display heading
    variation_specs: "Element | Variable name | Variable | web value | Print value\n--- | --- | --- | --- | ---\nTypeface | | | Avenir Next Regular | Avenir Next Regular\nWebfont | @webfont-regular: | Arial; | Arial\nText color | @text: | @black; | Black (#101820)\t| 0, 0, 0, 100\nText size | @size-xl: | 48px; | 48px | 38pt\nSmall screen text size | | | 34px | \nLine height | @base-line-height: | unit( @base-line-height-px / @base-font-size-px ); | \nLine height (pixels) | ? |  | 60px | 66pt\nSmall screen line height | | 42px | \nBottom margin | | | | 30px\nExtra-small breakpoint | @bp-xs-max: | 600px; |"
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
    variation_specs: |-
      Element | Variable name | Variable | web value | Print value
      --- | --- | --- | --- | ---
      Text size | @size-i: | 34px; | 34px | 38pt
      Small screen text size | | | 26px | 
      Line height (pixels) | ? |  | 42px | 40pt
      Small screen line height | | 32px | 
      Bottom margin | | | 15px |
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
      Text size | @size-ii: | 26px; | 26px | 26pt
      Small screen text size | | | 22px | 
      Line height (pixels) | ? |  | 32px | 28pt
      Small screen line height | | 28px | 
      Bottom margin | | | 15px |
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
      Text size | @size-iii: | 22px; | 22px | 16pt
      Small screen text size | | | 18px | 
      Line height (pixels) | ? |  | 28px | 18pt
      Small screen line height | | 22px | 
      Bottom margin | | | 15px |
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
      Text size | @size-iv: | 18px; | 18px | 14pt
      Small screen text size | | | 16px | 
      Line height (pixels) | ? |  | 22px | 16pt
      Small screen line height | | 18px | 
      Bottom margin | | | 15px |
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
      Text size | @size-v: | 14px; | 14px | 10pt
      Line height (pixels) | ? |  | 18px | 12pt
      Bottom margin | | | 15px |
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
      Text size | @size-vi: | 12px; | 12px | 12pt
      Line height (pixels) | ? |  | 15px | 14pt
      Bottom margin | | | 15px |
usage: >-
  **Use cases**


  Consistent scaling, weights, and capitalization are used to create distinction
  between heading levels. 


  **Content guidelines**


  TBD


  **Behavior**

  At screen widths of 600px and below, the Display heading and Headings 1-4 drop
  in size. Headings 5-6 remain consistent at all screen widths.
accessibility: TBD
research: TBD
---

