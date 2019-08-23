---
title: Sidebars and Prefooters
layout: variation
section: components
secondary_section: Content layouts
status: Proposed
description: >-
  Sidebars are present across most page templates to house information related
  to the main content of the page. On pages with leftside sub-navigation,
  sidebar content may be displayed as an optional prefooter at the bottom of the
  main content.


  Sidebars may can contain related posts, calls to action, metadata, email sign
  ups, contact information, etc. Primary layout variations as seen in basic
  sidebar format. Multiple elements can be used in the sidebar/ prefooter but
  each should have their own slug label.


  Information about Sidebars/Prefooters can be found at:

  * http://cfpb.github.io/design-manual/page-components/sidebar-prefooter.html

  *
  https://cfpb.github.io/capital-framework/components/cf-layout/#standard-content-formats
variations:
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


      By default `.content_main` and `.content_sidebar` stack vertically. When
      using the modifiers described below to create columns, the columns will
      remain stacked for smaller screens and then convert to to columns at
      `801px`.


      Inline styling is for demonstration purposes only; do not include it in
      your markup.
    variation_name: Main content and sidebar
  - variation_code_snippet: |-
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
      Add a class of `.content__L-R` to `main.content` to determine the width
      ratio of `.content_main` and `.content_sidebar`, where ‘L’ is the
      left-hand item and ‘R’ is the right-hand item. The two common
      configurations are `1-3` (sidebar on the left, content on the right, in a
      ratio of 1:3) and `2-1` (content on the left, sidebar on the right, in a
      ratio of 2:1).


      It is assumed that the content is wider than the sidebar.


      Inline styling is for demonstration purposes only; do not include it in
      your markup.
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


      Note that inline styling is for demonstration purposes only; do not
      include it in your markup.
    variation_name: Bleedbar sidebar styling
  - variation_code_snippet: |-
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
      Add a class of .content_main__narrow to .content_main to get a one-column
      (in a 12-column grid) gutter on the right side.


      Inline styling is for demonstration purposes only; do not include it in
      your markup.
    variation_name: Narrow content column option
  - variation_code_snippet: ''
    variation_description: >-
      ![Related posts
      example](/design-system/images/uploads/related_posts_example.jpg)
    variation_name: Related posts
  - variation_code_snippet: ''
    variation_description: >-
      ![Related links
      example](/design-system/images/uploads/related_links_example.jpg)
    variation_name: Related links
  - variation_code_snippet: ''
    variation_description: '![Metadata example](/design-system/images/uploads/metadata_example.jpg)'
    variation_name: Metadata
  - variation_code_snippet: ''
    variation_description: '![](/design-system/images/uploads/cta_example.png)'
    variation_name: Call to action with button
usage: >-
  **Use cases**


  ##### When to use Related posts


  * This component is used to display lists of related content dynamically
  pulled from elsewhere in the site – blogs, events, and newsroom items– based
  on topic tag selections.

  * The amount and types of related content may be restricted based on the
  subject matter and needs of the page.


  ##### When other options are better


  * When lists of items should not be automatically updated consider related
  links instead.

  * When posts will be mixed with other types of content.


  ##### When to use Related links


  * When a specific, static piece of content and call to action needs to be
  displayed in the sidebar.

  * When a static list of links or specific related posts need to be displayed
  in the sidebar.


  ##### When other options are better


  * When all of the content is posts that can be dynamically populated.


  ##### When to use Meta data


  * When displaying relevant metadata about a specific document or set of
  documents, such as for a rule, notice, or report, for users to easily
  reference.


  ##### When other options are better


  * When anything other than metadata for a document detail page is being
  displayed.


  ##### When to use call to action with button


  * When highlighting or featuring a call to take a specific action.


  ##### When other options are better


  * When the “action” is navigating to another page of the site or downloading a
  document. Refer to the buttons page for more information.


  **Content guidelines**


  * Slugs should be as succinct as possible, ideally 30 characters or less. They
  should be limited to one line at max column width.

  * Description beneath heading should also be succinct, limited to 3 lines at
  max column width max; 100 characters.

  * Call to action link should be limited to one line at max column width; 40
  characters or less.

  * Content can be one or two columns in prefooter depending on need.

  * In the prefooter, content is populated in a Z-order, chronologically.


  #### Behavior


  All variations of sidebar element move into prefooter format at screen widths
  less than 901 px. The sidebar area can house multiple stacked sidebar
  elements.


  Under 600px all elements become single column. Mobile link style should be
  used in place of normal links at this size.


  ![Sidebar 901+](/design-system/images/uploads/behavior_sidebar_desktop.jpg)


  ![Sidebar 900 or less (transition to
  prefooter)](/design-system/images/uploads/behavior_sidebar_mobile.jpg)


  Prefooter format is automatically used on pages that have a left side
  secondary navigation.


  Below 601 px width, for legibility link styling on clickable headings remains
  in the standard format, but mobile link style is applied where possible.


  ![Prefooter 901+ (with side
  nav.)](/design-system/images/uploads/behavior_prefooter_desktop_1.jpg)


  ![Prefooter 600 or
  less](/design-system/images/uploads/behavior_prefooter_mobile_1.jpg)
accessibility: ''
research: ''
---

