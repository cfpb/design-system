---
title: Paragraphs
permalink: /components/paragraphs
layout: variation
collection_name: components
section: components
status: Proposed
description: >-
  This page is under active development. Information is being moved into it from
  these pages:

  * "http://cfpb.github.io/design-manual/brand-guidelines/typography.html

  * https://cfpb.github.io/capital-framework/components/cf-core/#base-typography
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
    variation_name: Body text
    variation_specs: "Element | Variable name | Variable | web value | Print value\n--- | --- | --- | --- | ---\nTypeface | | | Avenir Next Regular | Avenir Next Regular\nWebfont | @webfont-regular: | Arial | Arial\nText color | @text: | @black; | Black (#101820)\t| 0, 0, 0, 100\nText size | @base-font-size-px | 16px | 16px | 11pt\nLine height (pixels) | @base-line-height-px: | 22px; | 22px | 16pt\nLine height | @base-line-height: | unit( @base-line-height-px / @base-font-size-px ); | \nBottom margin | | | 15px |\nExtra-small breakpoint | @bp-xs-max: | 600px; |"
  - variation_code_snippet: >-
      <p class="lead-paragraph">Ut enim ad minim veniam, quis nostrud
      exercitation

      ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    variation_description: >-
      Responsive text. Displays as a Heading 3 on large screens; displays at
      Heading 4 size (but still Regular weight) on small screens.

      <601px wide: 18px / 22px
    variation_name: Lead paragraph (subheading)
    variation_specs: |-
      Element | Variable name | Variable | web value | Print value
      --- | --- | --- | --- | ---
      Text size | ? |  | 22px | 16pt
      Small screen text size | | | 18px | 
      Line height (pixels) | ? |  | 28px | 20pt
      Small screen line height | | 22px | 
  - variation_code_snippet: |-
      <p class="a-micro-copy">
          Lorem ipsum dolor sit amet
      </p>
    variation_name: Microcopy
    variation_specs: "Element | Variable name | Variable | web value | Print value\n--- | --- | --- | --- | ---\nText color | @micro-copy | @black | Black (#101820)\t| 0, 0, 0, 100\nText size |  |  |  | \nLine height (pixels) |  |  |  | \nBottom margin | | | |"
  - variation_code_snippet: |-
      <aside class="m-pull-quote">
          <p class="m-pull-quote_body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cum corrupti tempora nam nihil qui mollitia consectetur
              corporis nemo culpa dolorum!
          </p>
          <footer>
              <cite class="m-pull-quote_citation">
                  Author Name
              </cite>
          </footer>
      </aside>
    variation_name: Pull quote
    variation_specs: "Element | Variable name | Variable | web value | Print value\n--- | --- | --- | --- | ---\nColor | @pull-quote_body | @black | Black (#101820)\t| 0, 0, 0, 100\nColor (citation) | @pull-quote_citation | @gray | Gray (#5a5d61) | 0, 0, 0, 77 |\nText size |  |  |  | \nLine height (pixels) |  |  |  | \nBottom margin | | | |"
usage: |-
  **Use cases**

  TBD

  **Content guidelines**

  TBD
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

