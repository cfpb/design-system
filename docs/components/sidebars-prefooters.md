---
title: Main content and sidebars
layout: variation
section: components
secondary_section: Layout options
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
              <div class="content_wrapper">
                  <section class="content_main">
                      Main content area
                  </section>
                  <aside class="content_sidebar" style="background: #F1F2F2">
                      Sidebar
                  </aside>
              </div>
          </main>
        variation_description: >-
          Standard layout for the main content area and sidebar.


          By default `.content_main` and `.content_sidebar` stack vertically. When using the modifiers described below to create columns, the columns will remain stacked for smaller screens and then convert to to columns at `801px`.


          Inline styling is for demonstration purposes only; do not include it in your markup.
        variation_name: Main content and sidebar
      - variation_name: Left-hand sidebar layout
        variation_description: >-
          Add a class of `.content__L-R` to `main.content` to determine the
          width ratio of `.content_main` and `.content_sidebar`, where ‘L’ is
          the left-hand item and ‘R’ is the right-hand item. The two common
          configurations are 1-3 (sidebar on the left, content on the right, in
          a ratio of 1:3) and 2-1 (content on the left, sidebar on the right, in
          a ratio of 2:1).


          It is assumed that the content is wider than the sidebar.
        variation_code_snippet: >-
          <main class="content content__1-3" role="main">
              <div class="content_line"></div>
              <div class="content_wrapper">
                  <aside class="content_sidebar">
                      Section navigation
                  </aside>
                  <section class="content_main">
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
          <main class="content content__2-1" role="main">
              <div class="content_line"></div>
              <div class="content_wrapper">
                  <section class="content_main">
                      <h2>Main content area</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Cum corrupti tempora nam nihil qui mollitia consectetur
                          corporis nemo culpa dolorum! Laborum at eos deleniti
                          consequatur itaque officiis debitis quisquam! Provident!
                      </p>
                  </section>
                  <aside class="content_sidebar" style="background: #F1F2F2">
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
          width ratio of `.content_main` and `.content_sidebar`, where ‘L’ is
          the left-hand item and ‘R’ is the right-hand item. The two common
          configurations are `1-3` (sidebar on the left, content on the right,
          in a ratio of 1:3) and `2-1` (content on the left, sidebar on the
          right, in a ratio of 2:1).


          It is assumed that the content is wider than the sidebar.


          Inline styling is for demonstration purposes only; do not include it in your markup.
        variation_name: Right-hand sidebar layout
      - variation_code_snippet: |-
          <main class="content content__2-1 content__bleedbar" role="main">
              <section class="content_hero" style="background: #E3E4E5">
                  Content hero
              </section>
              <div class="content_line"></div>
              <div class="content_wrapper">
                  <section class="content_main">
                      Main content area
                  </section>
                  <aside class="content_sidebar">
                      Bleeding sidebar
                  </aside>
              </div>
          </main>
        variation_description: >-
          Simply add class `.content__bleedbar` to `main.content.` Only supports
          sidebars on the right, for now.


          Note that inline styling is for demonstration purposes only; do not include it in your markup.
        variation_name: Bleedbar sidebar styling
      - variation_code_snippet: >-
          <main class="content content__2-1" role="main">
              <div class="content_line"></div>
              <div class="content_wrapper">
                  <section class="content_main content_main__narrow">
                      <h2>Main content area</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Cum corrupti tempora nam nihil qui mollitia consectetur
                          corporis nemo culpa dolorum! Laborum at eos deleniti
                          consequatur itaque officiis debitis quisquam! Provident!
                      </p>
                  </section>
                  <aside class="content_sidebar" style="background: #F1F2F2">
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
          Add a class of .content_main__narrow to .content_main to get a
          one-column (in a 12-column grid) gutter on the right side.


          Inline styling is for demonstration purposes only; do not include it in your markup.
        variation_name: Narrow content column option
    variation_group_name: Main content and sidebar
  - variation_group_name: Modifiers
    variations:
      - variation_name: Flush bottom modifier
        variation_description: >+
          Add a class of `.content__flush-bottom` to `.content_main` or
          `.content_sidebar` to remove bottom padding.

        variation_code_snippet: >-
          <main class="content content__1-3" role="main">
              <div class="content_line"></div>
              <div class="content_wrapper">
                  <aside class="content_sidebar content__flush-bottom">
                      Side with no bottom padding...
                  </aside>
                  <section class="content_main content__flush-bottom">
                      Main content with no bottom padding...
                      <div class="block
                                  block__flush-bottom
                                  block__flush-sides
                                  block__bg">
                          .content__flush-bottom is very useful when you have a
                          content block inside of .content_main with a background
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
          Add a class of `.content__flush-top-on-small` to `.content_main` or
          `.content_sidebar` to remove top padding on small screens only.
          ‘Small’ screens in this case refers to the breakpoint where
          `.content_main` and `.content_sidebar` single column layout.

        variation_code_snippet: |-
          <main class="content content__1-3" role="main">
              <div class="content_line"></div>
              <div class="content_wrapper">
                  <aside class="content_sidebar content__flush-top-on-small">
                      Side with no top padding on small screens...
                  </aside>
                  <section class="content_main">
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
          Add a class of .content__flush-all-on-small to .content_main or
          .content_sidebar to remove all padding and border-based gutters on
          small screens only. ‘Small’ screens in this case refers to the
          breakpoint where .content_main and .content_sidebar single column
          layout.

        variation_code_snippet: >-
          <main class="content content__1-3" role="main">
              <div class="content_line"></div>
              <div class="content_wrapper">
                  <aside class="content_sidebar content__flush-all-on-small">
                      Side with no padding or border-based gutters on small screens...
                  </aside>
                  <section class="content_main">
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
              <div class="content-l_col content-l_col-1">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Full-width column (spans 12 columns)
                  </div>
              </div>
              <div class="content-l_col content-l_col-1-2">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Half-width column (spans 6/12 columns)
                  </div>
              </div>
              <div class="content-l_col content-l_col-1-2">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Half-width column (spans 6/12 columns)
                  </div>
              </div>
              <div class="content-l_col content-l_col-1-3">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Third-width column (spans 4/12 columns)
                  </div>
              </div>
              <div class="content-l_col content-l_col-1-3">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Third-width column (spans 4/12 columns)
                  </div>
              </div>
              <div class="content-l_col content-l_col-1-3">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Third-width column (spans 4/12 columns)
                  </div>
              </div>
              <div class="content-l_col content-l_col-2-3">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Two thirds-width column (spans 8/12 columns)
                  </div>
              </div>
              <div class="content-l_col content-l_col-1-3">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Third-width column (spans 4/12 columns)
                  </div>
              </div>
              <div class="content-l_col content-l_col-1-4">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;">
                      Quarter width column (spans 3/12 columns)
                  </div>
              </div>
              <div class="content-l_col content-l_col-3-4">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;">
                      Three-quarter width column (spans 9/12 columns)
                  </div>
              </div>
          </div>
      - variation_name: Large gutters modifier
        variation_code_snippet: |-
          <div class="content-l content-l__main  content-l__large-gutters">
              <div class="content-l_col content-l_col-1">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Full-width column (spans 12 columns)
                  </div>
              </div>
          </div>
          <div class="content-l content-l__main  content-l__large-gutters">
              <div class="content-l_col content-l_col-1-2">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Half-width column (spans 6/12 columns)
                  </div>
              </div>
              <div class="content-l_col content-l_col-1-2">
                  <div style="background: #F1F2F2;
                              text-align: center;
                              padding: 8px;
                              margin-bottom: 4px;">
                      Half-width column (spans 6/12 columns)
                  </div>
              </div>
          </div>
use_cases: ""
content_guidelines: ""
behavior: ""
accessibility: ""
related_items: |-
  * Column dividers
  * Block
last_updated: 2020-01-28T15:55:47.394Z
research: ""
---
