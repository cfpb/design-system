---
title: Blocks
layout: variation
section: components
secondary_section: Core development
status: Proposed
description: >-
  `.block` is a base class with several modifiers that help you separate chunks
  of content via `margin`, `padding`, `border`, and `background`.


  This page is under active development. Information is being moved into it from
  these pages:


  https://cfpb.github.io/capital-framework/components/cf-layout/#block
variations:
  - variation_code_snippet: |
      Main content...
      <div class="block">
          Content block
      </div>
      <div class="block">
          Content block
      </div>
      <div class="block">
          Content block
      </div>
    variation_description: >-
      The standard `.block` class by itself simply adds a `margin` of twice the
      gutter width to the top and bottom.
    variation_name: Standard block example
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Background | @block__bg | @gray-5 | Gray 5
  - variation_code_snippet: |-
      Main content...
      <div class="block block__border-top">
          Content block with top border.
      </div>
    variation_description: Adds top `border` to `.block`.
    variation_jinja_code_snippet: ''
    variation_name: Border top modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Border top | @block__border-top |  @gray-40 | Gray 40
  - variation_code_snippet: |-
      Main content...
      <div class="block block__border-right">
          Content block with right border.
      </div>
    variation_description: Adds right `border` to `.block`.
    variation_name: Border right modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Border right | @block__border-right |  @gray-40 | Gray 40
  - variation_code_snippet: |-
      Main content...
      <div class="block block__border-bottom">
          Content block with bottom border.
      </div>
    variation_description: Adds bottom `border` to `.block`.
    variation_name: Border bottom modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Border bottom | @block__border-bottom |  @gray-40 | Gray 40
  - variation_code_snippet: |-
      Main content...
      <div class="block block__border-left">
          Content block with left border.
      </div>
    variation_description: Adds left `border` to `.block`.
    variation_name: Border left modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Border left | @block__border-left |  @gray-40 | Gray 40
  - variation_code_snippet: |-
      Main content...
      <div class="block block__border">
          Content block with borders on all sides.
      </div>
    variation_description: Adds `border` on all sides to `.block`.
    variation_name: Border modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
      Border | @block__border |  @gray-40 | Gray 40
  - variation_code_snippet: |-
      Main content...
      <div class="block block__flush-top">
          Content block with no top margin.
      </div>
      <div class="block">
          Content block
      </div>
    variation_description: Removes the top `margin` from `.block`.
    variation_name: Flush-top modifier
    variation_specs: |
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
  - variation_code_snippet: |-
      Main content...
      <div class="block block__flush-bottom">
          Content block with no bottom margin.
      </div>
      <div class="block">
          Content block
      </div>
    variation_description: Removes the bottom `margin` from `.block`.
    variation_name: Flush-bottom modifier
    variation_specs: |
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
  - variation_code_snippet: |-
      <main class="content content__1-3" role="main">
          <div class="content_wrapper">
              <aside class="content_sidebar">
                  Section navigation
              </aside>
              <section class="content_main">
                  Main content...
                  <aside class="block block__flush-sides">
                      Content block with no side margins.
                  </aside>
              </section>
          </div>
      </main>
    variation_description: >-
      Removes the side `margin` from `.block`. Typically used in conjunction
      with `.block__bg` to create a ‘well’ whose `background` extends into the
      left and right gutters. (See below.)
    variation_name: Flush-sides modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
  - variation_code_snippet: |-
      <main class="content content__1-3" role="main">
          <div class="content_wrapper">
              <aside class="content_sidebar">
                  Section navigation
              </aside>
              <section class="content_main">
                  Main content...
                  <aside class="block block__flush">
                      Content block with no margins.
                  </aside>
              </section>
          </div>
      </main>
    variation_description: 'Removes the side, top, and bottom margin from .block.'
    variation_name: Flush modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
  - variation_code_snippet: |-
      Main content...
      <div class="block block__bg">
          Content block with a background
      </div>
    variation_description: >-
      Adds a `background` color and padding to `.block`. Setup for
      (ems-equivalent) `30px` `padding` on top and `60px` on bottom.
    variation_name: Background modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
  - variation_code_snippet: |-
      <main class="content content__1-3" role="main">
          <div class="content_wrapper">
              <aside class="content_sidebar">
                  Section navigation
              </aside>
              <section class="content_main content__flush-bottom">
                  Main content...
                  <div class="block block__flush-sides block__bg">
                      Content block with a background and flush sides
                  </div>
              </section>
          </div>
      </main>
    variation_description: >-
      This is an example of combining modifiers to get a flush `padding` and
      `background` with a `.block`.
    variation_name: Background and flush-sides modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
  - variation_code_snippet: |-
      Main content...
      <div class="block block__padded-top block__border-top">
          Content block with reduced top margin and added top padding
          and border.
      </div>
    variation_description: >-
      Breaks top `margin` into `margin` and `padding`. Useful in combination
      with `block__border-top` to add `padding` between `.block` contents and
      `border`.
    variation_name: Padded-top modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
  - variation_code_snippet: |-
      Main content...
      <div class="block block__padded-bottom block__border-bottom">
          Content block with reduced bottom margin and added bottom padding
          and border.
      </div>
    variation_description: >-
      Breaks bottom `margin` into `margin` and `padding`. Useful in combination
      with `block__border-bottom` to add `padding` between `.block` contents and
      `border`.
    variation_name: Padded-bottom modifier
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
  - variation_code_snippet: |-
      <div class="block block__sub">
          <div style="background: #F1F2F2; padding: 8px;">
              Sub content block
          </div>
      </div>
      <div class="block block__sub">
          <div style="background: #F1F2F2; padding: 8px;">
              Sub content block
          </div>
      </div>
      <div class="block block__sub">
          <div style="background: #F1F2F2; padding: 8px;">
              Sub content block
          </div>
      </div>
    variation_description: >-
      Useful for when you need some consistent `margin` between `.blocks` that
      are nested within other `.blocks`.


      Note that the `div`s with inline styles are for demonstration purposes
      only and should not be used in production.
    variation_name: Sub blocks
    variation_specs: |-
      Element | Variable name | Variable | web value
      --- | --- | --- | ---
usage: |-
  **Use cases**

  TBD

  **Content guidelines**

  TBD
accessibility: TBD
research: TBD
---
