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
      - variation_code_snippet: ""
        variation_description: "![Related posts
          example](/design-system/images/uploads/related_posts_example.jpg)"
        variation_name: Related posts
      - variation_code_snippet: ""
        variation_description: "![Related links
          example](/design-system/images/uploads/related_links_example.jpg)"
        variation_name: Related links
      - variation_code_snippet: ""
        variation_description: "![Metadata
          example](/design-system/images/uploads/metadata_example.jpg)"
        variation_name: Metadata
      - variation_code_snippet: ""
        variation_description: "![](/design-system/images/uploads/cta_example.png)"
        variation_name: Call to action with button
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
use_cases: ""
content_guidelines: ""
behavior: ""
accessibility: ""
last_updated: 2020-01-28T15:55:47.394Z
research: ""
---
