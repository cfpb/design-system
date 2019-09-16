---
title: Left Hand Navigation
layout: variation
section: components
secondary_section: Navigation
status: Released
description: >-
  More information can be found at:

  *
  https://cfpb.github.io/capital-framework/components/cf-layout/#standard-content-formats
variations:
  - variation_code_snippet: |-
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
    variation_description: >-
      Add a class of `.content__L-R` to `main.content` to determine the width
      ratio of `.content_main` and `.content_sidebar`, where ‘L’ is the
      left-hand item and ‘R’ is the right-hand item. The two common
      configurations are `1-3` (sidebar on the left, content on the right, in a
      ratio of 1:3) and `2-1` (content on the left, sidebar on the right, in a
      ratio of 2:1).


      It is assumed that the content is wider than the sidebar.
    variation_name: Left-hand navigation layout
usage: ''
accessibility: ''
research: ''
---

