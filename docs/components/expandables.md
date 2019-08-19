---
title: Expandables
layout: variation
section: components
secondary_section: Content layouts
status: Proposed
description: >-
  Expandables are components that have additional content that can be opened
  (expanded) and closed (collapsed). They can appear on their own or in groups.


  They can be used for displaying non-essential information on a page. They are
  also helpful for FAQ sections, schedules, and for conserving vertical space by
  collapsing secondary information on mobile devices.


  Information about Expandables can be found at:


  * http://cfpb.github.io/design-manual/page-components/expandables.html

  * https://cfpb.github.io/capital-framework/components/cf-expandables/
variations:
  - variation_code_snippet: |-
      <div class="o-expandable
                  o-expandable__padded
                  o-expandable__background
                  o-expandable__border">
          <button class="o-expandable_header o-expandable_target"
                  title="Expand content">
              <h3 class="h4 o-expandable_header-left o-expandable_label">
                  Expandable Header
              </h3>
              <span class="o-expandable_header-right o-expandable_link">
                  <span class="o-expandable_cue o-expandable_cue-open">
                      <span class="u-visually-hidden-on-mobile">Show</span>
                      {% include icons/plus-round.svg %}
                  </span>
                  <span class="o-expandable_cue o-expandable_cue-close">
                      <span class="u-visually-hidden-on-mobile">Hide</span>
                      {% include icons/minus-round.svg %}
                  </span>
              </span>
          </button>
          <div class="o-expandable_content">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                  temporibus magnam debitis quidem. Ducimus ratione
                  corporis nesciunt earum vel est quaerat blanditiis
                  dolore ipsa?
              </p>
          </div>
      </div>
    variation_description: The following combination is our recommended go-to expandable pattern.
    variation_name: Basic expandable
  - variation_code_snippet: |-
      <div class="o-expandable
                  o-expandable__padded
                  o-expandable__background
                  o-expandable__border">
          <button class="o-expandable_header o-expandable_target"
                  title="Expand content">
              <h3 class="h4 o-expandable_header-left o-expandable_label">
                  Expandable Header
              </h3>
              <span class="o-expandable_header-right o-expandable_link">
                  <span class="o-expandable_cue o-expandable_cue-open">
                      <span class="u-visually-hidden-on-mobile">Show</span>
                      {% include icons/plus-round.svg %}
                  </span>
                  <span class="o-expandable_cue o-expandable_cue-close">
                      <span class="u-visually-hidden-on-mobile">Hide</span>
                      {% include icons/minus-round.svg %}
                  </span>
              </span>
          </button>
          <div class="o-expandable_content o-expandable_content__onload-open">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                  temporibus magnam debitis quidem. Ducimus ratione
                  corporis nesciunt earum vel est quaerat blanditiis
                  dolore ipsa?
              </p>
          </div>
      </div>
    variation_description: ''
    variation_name: Basic expandable (open on load)
  - variation_code_snippet: |-
      <div class="o-expandable">
          <button class="o-expandable_target" title="Expand content">
              <span class="o-expandable_cue o-expandable_cue-open">
                  <span class="u-visually-hidden-on-mobile">Show</span>
              </span>
              <span class="o-expandable_cue o-expandable_cue-close">
                  <span class="u-visually-hidden-on-mobile">Hide</span>
              </span>
          </button>
          <div class="o-expandable_content">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                  temporibus magnam debitis quidem. Ducimus ratione
                  corporis nesciunt earum vel est quaerat blanditiis
                  dolore ipsa?
              </p>
          </div>
      </div>
    variation_name: Barebones expandable
  - variation_code_snippet: |-
      <div class="o-expandable-group">
          <div class="o-expandable o-expandable__padded">
              <button class="o-expandable_header o-expandable_target"
                      title="Expand content">
                  <h3 class="h4 o-expandable_header-left o-expandable_label">
                      Expandable Header 1
                  </h3>
                  <span class="o-expandable_header-right o-expandable_link">
                      <span class="o-expandable_cue o-expandable_cue-open">
                          <span class="u-visually-hidden-on-mobile">Show</span>
                          {% include icons/plus-round.svg %}
                      </span>
                      <span class="o-expandable_cue o-expandable_cue-close">
                          <span class="u-visually-hidden-on-mobile">Hide</span>
                          {% include icons/minus-round.svg %}
                      </span>
                  </span>
              </button>
              <div class="o-expandable_content">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                      temporibus magnam debitis quidem. Ducimus ratione
                      corporis nesciunt earum vel est quaerat blanditiis
                      dolore ipsa?
                  </p>
              </div>
          </div>
          <div class="o-expandable o-expandable__padded">
              <button class="o-expandable_header o-expandable_target"
                      title="Expand content">
                  <h3 class="h4 o-expandable_header-left o-expandable_label">
                      Expandable Header 2
                  </h3>
                  <span class="o-expandable_header-right o-expandable_link">
                      <span class="o-expandable_cue o-expandable_cue-open">
                          <span class="u-visually-hidden-on-mobile">Show</span>
                          {% include icons/plus-round.svg %}
                      </span>
                      <span class="o-expandable_cue o-expandable_cue-close">
                          <span class="u-visually-hidden-on-mobile">Hide</span>
                          {% include icons/minus-round.svg %}
                      </span>
                  </span>
              </button>
              <div class="o-expandable_content">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                      temporibus magnam debitis quidem. Ducimus ratione
                      corporis nesciunt earum vel est quaerat blanditiis
                      dolore ipsa?
                  </p>
              </div>
          </div>
          <div class="o-expandable o-expandable__padded">
              <button class="o-expandable_header o-expandable_target"
                      title="Expand content">
                  <h3 class="h4 o-expandable_header-left o-expandable_label">
                      Expandable Header 3
                  </h3>
                  <span class="o-expandable_header-right o-expandable_link">
                      <span class="o-expandable_cue o-expandable_cue-open">
                          <span class="u-visually-hidden-on-mobile">Show</span>
                          {% include icons/plus-round.svg %}
                      </span>
                      <span class="o-expandable_cue o-expandable_cue-close">
                          <span class="u-visually-hidden-on-mobile">Hide</span>
                          {% include icons/minus-round.svg %}
                      </span>
                  </span>
              </button>
              <div class="o-expandable_content">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                      temporibus magnam debitis quidem. Ducimus ratione
                      corporis nesciunt earum vel est quaerat blanditiis
                      dolore ipsa?
                  </p>
              </div>
          </div>
      </div>
    variation_name: Expandable group
  - variation_code_snippet: |-
      <div class="o-expandable-group o-expandable-group__accordion">
          <div class="o-expandable o-expandable__padded">
              <button class="o-expandable_header o-expandable_target"
                      title="Expand content">
                  <h3 class="h4 o-expandable_header-left o-expandable_label">
                      Expandable Header 1
                  </h3>
                  <span class="o-expandable_header-right o-expandable_link">
                      <span class="o-expandable_cue o-expandable_cue-open">
                          <span class="u-visually-hidden-on-mobile">Show</span>
                          {% include icons/plus-round.svg %}
                      </span>
                      <span class="o-expandable_cue o-expandable_cue-close">
                          <span class="u-visually-hidden-on-mobile">Hide</span>
                          {% include icons/minus-round.svg %}
                      </span>
                  </span>
              </button>
              <div class="o-expandable_content">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                      temporibus magnam debitis quidem. Ducimus ratione
                      corporis nesciunt earum vel est quaerat blanditiis
                      dolore ipsa?
                  </p>
              </div>
          </div>
          <div class="o-expandable o-expandable__padded">
              <button class="o-expandable_header o-expandable_target"
                      title="Expand content">
                  <h3 class="h4 o-expandable_header-left o-expandable_label">
                      Expandable Header 2
                  </h3>
                  <span class="o-expandable_header-right o-expandable_link">
                      <span class="o-expandable_cue o-expandable_cue-open">
                          <span class="u-visually-hidden-on-mobile">Show</span>
                          {% include icons/plus-round.svg %}
                      </span>
                      <span class="o-expandable_cue o-expandable_cue-close">
                          <span class="u-visually-hidden-on-mobile">Hide</span>
                          {% include icons/minus-round.svg %}
                      </span>
                  </span>
              </button>
              <div class="o-expandable_content">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                      temporibus magnam debitis quidem. Ducimus ratione
                      corporis nesciunt earum vel est quaerat blanditiis
                      dolore ipsa?
                  </p>
              </div>
          </div>
          <div class="o-expandable o-expandable__padded">
              <button class="o-expandable_header o-expandable_target"
                      title="Expand content">
                  <h3 class="h4 o-expandable_header-left o-expandable_label">
                      Expandable Header 3
                  </h3>
                  <span class="o-expandable_header-right o-expandable_link">
                      <span class="o-expandable_cue o-expandable_cue-open">
                          <span class="u-visually-hidden-on-mobile">Show</span>
                          {% include icons/plus-round.svg %}
                      </span>
                      <span class="o-expandable_cue o-expandable_cue-close">
                          <span class="u-visually-hidden-on-mobile">Hide</span>
                          {% include icons/minus-round.svg %}
                      </span>
                  </span>
              </button>
              <div class="o-expandable_content">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                      temporibus magnam debitis quidem. Ducimus ratione
                      corporis nesciunt earum vel est quaerat blanditiis
                      dolore ipsa?
                  </p>
              </div>
          </div>
      </div>
    variation_description: >-
      Accordions can only show one open expandable at a time. Add the
      `o-expandable-group__accordion` class to the expandable group to activate
      the accordion mode.
    variation_name: Accordion-style group
usage: >-
  **Content guidelines**

  ##### Individual

  When only one expandable is used, it should include a stroke on all sides,
  heading text, and the expand/collapse minicon within a circle with a label
  reading “Show” or “Hide” (when possible). A white or 5% gray background can be
  used to highlight the section from the page background.


  The entire bar is actionable. The header should clearly indicate what the user
  will see when the content is expanded (it should not be a call to action).
  Expand icons stay aligned at the top of the row when the title breaks to
  multiple lines.


  ##### Group

  When expandable sections are used in a group, they are stacked vertically,
  with each row sharing its top or bottom stroke with the adjacent row. In this
  use case, expandables have no background color of their own, but match
  whatever color they are used on (this would typically be a white page or 5%
  gray well). Title text should be consistent across a group of expandables.


  **Behavior**

  ##### Collapsed

  The default collapsed state should include the expand/collapse minicon within
  a circle and a label (if space allows). The Show/Hide label can be hidden at
  narrower screen widths to prevent titles prematurely breaking onto multiple
  lines and to reduced visual clutter.


  ##### Expanded

  The content of an expandable can contain normal paragraphs, headings, lists,
  wells, and images.


  Expandables can make use of an optional stroke under the title when expanded.
  The title stroke can help to define the title from the expanded content for
  longer sections of text. It should be indented left and right to match the
  text within the expandable section.


  In the default mode, users are able to have multiple sections of an expandable
  group expanded at the same time, which allows users to easily compare
  information that is available in different sections.


  ##### Code

  NOTE: If you use `cf-expandables.less` directly, be sure to run the file
  through [Autoprefixer](https://github.com/postcss/autoprefixer), or your
  compiled Capital Framework CSS will not work perfectly in older browsers.


  ###### Expanded modifier


  ###### Padded modifier
accessibility: >-
  The `find` function will not discover information hidden by a collapsed
  expandable, so use good judgement in deciding which information to hide.
  Non-javaScript users should default to the expanded state. Otherwise, the
  default state (expanded or collapsed) will depend on the circumstance.
research: ''
---

