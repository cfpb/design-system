---
title: Blocks
layout: variation
section: development
status: Released
description: >
  `.block` is a base class with several modifiers that help you separate chunks
  of content via `margin`, `padding`, `border`, and `background`.
variation_groups:
  - variations:
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
        variation_description: The standard `.block` class by itself simply adds a
          `margin` of twice the gutter width to the top and bottom.
        variation_name: Standard block example
      - variation_code_snippet: |-
          Main content...
          <div class="block block__border-top">
              Content block with top border.
          </div>
        variation_description: Adds top `border` to `.block`.
        variation_jinja_code_snippet: ""
        variation_name: Border top modifier
      - variation_code_snippet: |-
          Main content...
          <div class="block block__border-right">
              Content block with right border.
          </div>
        variation_description: Adds right `border` to `.block`.
        variation_name: Border right modifier
      - variation_code_snippet: |-
          Main content...
          <div class="block block__border-bottom">
              Content block with bottom border.
          </div>
        variation_description: Adds bottom `border` to `.block`.
        variation_name: Border bottom modifier
      - variation_code_snippet: |-
          Main content...
          <div class="block block__border-left">
              Content block with left border.
          </div>
        variation_description: Adds left `border` to `.block`.
        variation_name: Border left modifier
      - variation_code_snippet: |-
          Main content...
          <div class="block block__border">
              Content block with borders on all sides.
          </div>
        variation_description: Adds `border` on all sides to `.block`.
        variation_name: Border modifier
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
        variation_description: Removes the side `margin` from `.block`. Typically used
          in conjunction with `.block__bg` to create a ‘well’ whose `background`
          extends into the left and right gutters. (See below.)
        variation_name: Flush-sides modifier
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
        variation_description: Removes the side, top, and bottom `margin` from `.block`.
        variation_name: Flush modifier
      - variation_code_snippet: |-
          Main content...
          <div class="block block__bg">
              Content block with a background
          </div>
        variation_description: Adds a `background` color and padding to `.block`. Setup
          for (ems-equivalent) `30px` `padding` on top and `60px` on bottom.
        variation_name: Background modifier
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
        variation_description: This is an example of combining modifiers to get a flush
          `padding` and `background` with a `.block`.
        variation_name: Background and flush-sides modifier combo example
      - variation_code_snippet: |-
          Main content...
          <div class="block block__padded-top block__border-top">
              Content block with reduced top margin and added top padding
              and border.
          </div>
        variation_description: Breaks top `margin` into `margin` and `padding`. Useful
          in combination with `block__border-top` to add `padding` between
          `.block` contents and `border`.
        variation_name: Padded-top modifier
      - variation_code_snippet: |-
          Main content...
          <div class="block block__padded-bottom block__border-bottom">
              Content block with reduced bottom margin and added bottom padding
              and border.
          </div>
        variation_description: Breaks bottom `margin` into `margin` and `padding`.
          Useful in combination with `block__border-bottom` to add `padding`
          between `.block` contents and `border`.
        variation_name: Padded-bottom modifier
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
          Useful for when you need some consistent `margin` between `.blocks`
          that are nested within other `.blocks`.


          _Note that the `div`s with inline styles are for demonstration purposes only and should not be used in production._
        variation_name: Sub blocks
      - variation_name: Mixing content blocks with content layouts
        variation_description: >+
          You can safely combine `.block` with `.content-l_col` to achieve a
          column-based layout at larger screens with no top margin and a
          vertical layout at smaller screens that do have margins.


          _Note that the divs with inline styles are for demonstration purposes only and should not be used in production._

        variation_code_snippet: >-
          <div class="content-l">
              <div class="block content-l_col content-l_col-1-2">
                  <div style="background: #F1F2F2; padding: 8px;">
                      Content block that is also a content column.
                      Notice how my top margins only exist on smaller screens when
                      I need to stack vertically.
                  </div>
              </div>
              <div class="block content-l_col content-l_col-1-2">
                  <div style="background: #F1F2F2; padding: 8px;">
                      Content block that is also a content column.
                      Notice how my top margins only exist on smaller screens when
                      I need to stack vertically.
                  </div>
              </div>
          </div>
use_cases: ""
content_guidelines: ""
behavior: ""
accessibility: ""
research: ""
related_items: "* [Layout
  variables](https://cfpb.github.io/design-system/development/variables#color-4\
  )"
last_updated: 2020-01-06T20:29:09.912Z
secondary_section: Core development
---
