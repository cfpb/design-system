---
title: Main content and sidebars
layout: variation
section: development
status: Released
description: |+
  A set of HTML and CSS layout helpers.

variation_groups:
  - variations:
      - variation_code_snippet: |-
          <main class="content" role="main">
              <section class="content_hero" style="background: #E3E4E5">
                  Content hero
              </section>
              <div class="wrapper">
                  <section class="content__main">
                      Main content area
                  </section>
                  <aside class="content__sidebar" style="background: #F1F2F2">
                      Sidebar
                  </aside>
              </div>
          </main>
        variation_description: >-
          Standard layout for the main content area and sidebar.


          By default `.content__main` and `.content__sidebar` stack vertically. When using the modifiers described below to create columns, the columns will remain stacked for smaller screens and then convert to to columns at `801px`.


          Inline styling is for demonstration purposes only; do not include it in your markup.
        variation_name: Main content and sidebar
      - variation_name: Left-hand sidebar layout
        variation_description: >-
          Add a class of `.content__L-R` to `main.content` to determine the
          width ratio of `.content__main` and `.content__sidebar`, where ‘L’ is
          the left-hand item and ‘R’ is the right-hand item. The two common
          configurations are 1-3 (sidebar on the left, content on the right, in
          a ratio of 1:3) and 2-1 (content on the left, sidebar on the right, in
          a ratio of 2:1).


          It is assumed that the content is wider than the sidebar.
        variation_code_snippet: >-
          <main class="content content--1-3" role="main">
              <div class="content__line"></div>
              <div class="wrapper">
                  <aside class="content__sidebar">
                      Section navigation
                  </aside>
                  <section class="content__main">
                      <h2>Main content area</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Cum corrupti tempora nam nihil qui mollitia consectetur
                          corporis nemo culpa dolorum! Laborum at eos deleniti
                          consequatur itaque officiis debitis quisquam! Provident!
                      </p>
                  </section>
              </div>
          </main>

          <footer class="footer" role="contentinfo">
              <div class="wrapper">
                  Footer
              </div>
          </footer>
      - variation_code_snippet: >-
          <main class="content content--2-1" role="main">
              <div class="content__line"></div>
              <div class="wrapper">
                  <section class="content__main">
                      <h2>Main content area</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Cum corrupti tempora nam nihil qui mollitia consectetur
                          corporis nemo culpa dolorum! Laborum at eos deleniti
                          consequatur itaque officiis debitis quisquam! Provident!
                      </p>
                  </section>
                  <aside class="content__sidebar" style="background: #F1F2F2">
                      Sidebar
                  </aside>
              </div>
          </main>

          <footer class="footer" role="contentinfo">
              <div class="wrapper">
                  Footer
              </div>
          </footer>
        variation_description: >-
          Add a class of `.content__L-R` to `main.content` to determine the
          width ratio of `.content__main` and `.content__sidebar`, where ‘L’ is
          the left-hand item and ‘R’ is the right-hand item. The two common
          configurations are `1-3` (sidebar on the left, content on the right,
          in a ratio of 1:3) and `2-1` (content on the left, sidebar on the
          right, in a ratio of 2:1).


          It is assumed that the content is wider than the sidebar.


          Inline styling is for demonstration purposes only; do not include it in your markup.
        variation_name: Right-hand sidebar layout
    variation_group_name: Main content and sidebar
  - variation_group_name: Modifiers
    variations:
      - variation_name: Flush bottom modifier
        variation_description: >+
          Add a class of `.content--flush-bottom` to `.content__main` or
          `.content__sidebar` to remove bottom padding.

        variation_code_snippet: >-
          <main class="content content--1-3" role="main">
              <div class="content__line"></div>
              <div class="wrapper">
                  <aside class="content__sidebar content--flush-bottom">
                      Side with no bottom padding...
                  </aside>
                  <section class="content__main content--flush-bottom">
                      Main content with no bottom padding...
                      <div class="block
                                  block--flush-bottom
                                  block--flush-sides
                                  block--bg">
                          .content--flush-bottom is very useful when you have a
                          content block inside of .content__main with a background
                          and flush sides.
                      </div>
                  </section>
              </div>
          </main>

          <footer class="footer" role="contentinfo">
              <div class="wrapper">
                  Footer
              </div>
          </footer>
      - variation_name: Flush top modifier (only on small screens)
        variation_description: >+
          Add a class of `.content--flush-top-on-small` to `.content__main` or
          `.content__sidebar` to remove top padding on small screens only.
          ‘Small’ screens in this case refers to the breakpoint where
          `.content__main` and `.content__sidebar` single column layout.

        variation_code_snippet: |-
          <main class="content content--1-3" role="main">
              <div class="content__line"></div>
              <div class="wrapper">
                  <aside class="content__sidebar content--flush-top-on-small">
                      Side with no top padding on small screens...
                  </aside>
                  <section class="content__main">
                      Main content
                  </section>
              </div>
          </main>
          <footer class="footer" role="contentinfo">
              <div class="wrapper">
                  Footer
              </div>
          </footer>
      - variation_name: Flush all modifier (only on small screens)
        variation_description: >+
          Add a class of `.content--flush-all-on-small` to `.content__main` or
          `.content__sidebar` to remove all padding and border-based gutters on
          small screens only. ‘Small’ screens in this case refers to the
          breakpoint where .content__main and .content__sidebar single column
          layout.

        variation_code_snippet: >-
          <main class="content content--1-3" role="main">
              <div class="content__line"></div>
              <div class="wrapper">
                  <aside class="content__sidebar content--flush-all-on-small">
                      Side with no padding or border-based gutters on small screens...
                  </aside>
                  <section class="content__main">
                      Main content
                  </section>
              </div>
          </main>

          <footer class="footer" role="contentinfo">
              <div class="wrapper">
                  Footer
              </div>
          </footer>
  - variation_group_name: Custom content layouts
    variations:
      - variation_name: Grid with content
        variation_description: >+
          The content-l (“content layout”) class can be used to lay content out
          in a grid.

        variation_code_snippet: |-
          <div class="content-l">
              <div class="content-l__col content-l__col-1">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Full-width column (spans 12 columns)
                  </div>
              </div>
              <div class="content-l__col content-l__col-1-2">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Half-width column (spans 6/12 columns)
                  </div>
              </div>
              <div class="content-l__col content-l__col-1-2">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Half-width column (spans 6/12 columns)
                  </div>
              </div>
              <div class="content-l__col content-l__col-1-3">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Third-width column (spans 4/12 columns)
                  </div>
              </div>
              <div class="content-l__col content-l__col-1-3">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Third-width column (spans 4/12 columns)
                  </div>
              </div>
              <div class="content-l__col content-l__col-1-3">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Third-width column (spans 4/12 columns)
                  </div>
              </div>
              <div class="content-l__col content-l__col-2-3">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Two thirds-width column (spans 8/12 columns)
                  </div>
              </div>
              <div class="content-l__col content-l__col-1-3">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Third-width column (spans 4/12 columns)
                  </div>
              </div>
              <div class="content-l__col content-l__col-1-4">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;">
                      Quarter width column (spans 3/12 columns)
                  </div>
              </div>
              <div class="content-l__col content-l__col-3-4">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;">
                      Three-quarter width column (spans 9/12 columns)
                  </div>
              </div>
          </div>
use_cases: ''
guidelines: ''
behavior: ''
accessibility: ''
research: ''
related_items: >-
  * [Blocks](https://cfpb.github.io/design-system/development/blocks)

  * [Grid](https://cfpb.github.io/design-system/foundation/grid)
last_updated: 2020-01-28T15:55:47.394Z
eyebrow: Layout
---
