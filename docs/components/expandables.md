---
title: Expandables
layout: variation
section: components
secondary_section: Layout options
status: Released
description: >-
  Expandables are components that have additional content that can be opened
  (expanded) and closed (collapsed). They can appear on their own or in groups.


  They can be used for displaying non-essential information on a page. They are also helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.


  Information about Expandables can be found at:


  * http://cfpb.github.io/design-manual/page-components/expandables.html

  * https://cfpb.github.io/capital-framework/components/cf-expandables/
variation_groups:
  - variation_group_name: Standard expandables
    variations:
      - variation_name: Standard expandable
        variation_description: The following combination is our recommended go-to expandable pattern.
        variation_code_snippet: |-
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
                      <a href="#">Lorem link</a>.
                  </p>
              </div>
          </div>
      - variation_name: Standard expandable (open on load)
        variation_code_snippet: >-
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
                      <a href="#">Lorem link</a>.
                  </p>
              </div>
          </div>
        variation_description: Sometimes you may want the expandable to be open by
          default. This is as easy as adding the
          `.o-expandable_content__onload-open` modifier to the
          `.o-expandable_content` block.
    variation_group_description: ""
  - variation_group_name: Variations
    variation_group_description: Expandables can be built by combining the basic
      barebones structure described below with more specialized expandable
      elements and modifiers described throughout.
    variations:
      - variation_name: Barebones expandable
        variation_description: >-
          Expandables can be built by combining the basic barebones structure
          along with more specialized expandable elements and modifiers
          described throughout to create custom expandable patterns.


          In this barebones example there are no visual styles.
        variation_code_snippet: >-
          <div class="o-expandable">
              <button class="o-expandable_target" title="Expand content">
                  <span class="o-expandable_cue o-expandable_cue-open">
                      <span class="u-visually-hidden-on-mobile">Barebones expandable example </span>
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
                      <a href="#">Lorem link</a>.
                  </p>
              </div>
          </div>
      - variation_name: Expanded modifier
        variation_description: >-
          Sometimes you may want the expandable to be open by default. This is
          as easy as adding the `.o-expandable_content__onload-open` modifier to
          the `.o-expandable_content block.`


          ```

          .o-expandable_content__onload-open

          ```
        variation_code_snippet: ""
      - variation_name: Padded modifier
        variation_description: >-
          Adds padding and a background color to `.o-expandable_header` and
          `.o-expandable_content`.


          In addition to using the `.o-expandable__padded` modifier you also need to make sure you are using `.o-expandable_header`.


          ```

          .o-expandable__padded

          ```
        variation_code_snippet: ""
      - variation_name: Spaced header modifier
        variation_description: >-
          Allows you to add space between `.o-expandable_header` and
          `.o-expandable_content`.


          ```

          .o-expandable_header__spaced

          ```
  - variations:
      - variation_code_snippet: >-
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
                          <a href="#">Lorem link</a>.
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
                          <a href="#">Lorem link</a>.
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
                          <a href="#">Lorem link</a>.
                      </p>
                  </div>
              </div>
          </div>
        variation_name: Expandable group
      - variation_code_snippet: >-
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
                          <a href="#">Lorem link</a>.
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
                          <a href="#">Lorem link</a>.
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
                          <a href="#">Lorem link</a>.
                      </p>
                  </div>
              </div>
          </div>
        variation_description: Accordions can only show one open expandable at a time.
          Add the `o-expandable-group__accordion` class to the expandable group
          to activate the accordion mode.
        variation_name: Accordion-style group
    variation_group_name: Groups
    variation_group_description: ""
use_cases: ""
content_guidelines: >-
  #### Individual


  When only one expandable is used, it should include a stroke on all sides, heading text, and the expand/collapse minicon within a circle with a label reading “Show” or “Hide” (when possible). A white or 5% gray background can be used to highlight the section from the page background.


  The entire bar is actionable. The header should clearly indicate what the user will see when the content is expanded (it should not be a call to action). Expand icons stay aligned at the top of the row when the title breaks to multiple lines.


  #### Group


  When expandable sections are used in a group, they are stacked vertically, with each row sharing its top or bottom stroke with the adjacent row. In this use case, expandables have no background color of their own, but match whatever color they are used on (this would typically be a white page or 5% gray well). Title text should be consistent across a group of expandables.


  ### Behavior


  #### Collapsed


  The default collapsed state should include the expand/collapse minicon within a circle and a label (if space allows). The Show/Hide label can be hidden at narrower screen widths to prevent titles prematurely breaking onto multiple lines and to reduced visual clutter.


  #### Expanded


  The content of an expandable can contain normal paragraphs, headings, lists, wells, and images.


  Expandables can make use of an optional stroke under the title when expanded. The title stroke can help to define the title from the expanded content for longer sections of text. It should be indented left and right to match the text within the expandable section.


  In the default mode, users are able to have multiple sections of an expandable group expanded at the same time, which allows users to easily compare information that is available in different sections.


  #### Code


  Below are modifiers and elements of expandables.


  NOTE: If you use `cf-expandables.less` directly, be sure to run the file through [Autoprefixer](https://github.com/postcss/autoprefixer), or your compiled Capital Framework CSS will not work perfectly in older browsers.



  ##### Label


  Allows you to add some styled text.


  ```

  <span class="o-expandable_label">
      Lorem ipsum
  </span>

  ```


  ##### Link


  Allows you to add some styled text to look like a link.

  Note: only use this in the expandable header


  ```

  <span class="o-expandable_link">
      Lorem ipsum
  </span>

  ```


  ##### Header


  Creates a full-width container to house information that is always visible. This is useful for more complicated expandables that need to convey more information than just ‘Show/Hide’ before the user expands it.


  Combine `.o-expandable_header` with `.o-expandable_target` for a full-width trigger.


  ```

  .o-expandable_header

  ```


  ##### Header left/right


  Allows you to float information left and right.


  ```

  .o-expandable_header-left

  .o-expandable_header-right

  ```


  #### JavaScript API


  A new array of Expandable instances can be created with `const expandables = Expandable.init();`. Each instance has the following methods for public consumption:


  ##### toggleTargetState( element )


  ```

  const` element = document.querySelector( '.o-expandable_target' );

  expandables[0].toggleTargetState( element );

  ```


  Toggle an expandable to open or closed.

  Parameters:


  * element {HTMLNode} The expandable target HTML DOM element.


  ##### getLabelText()


  ```

  expandables[0].getLabelText();

  ```


  Retrieve the label text of the expandable header.

  Return:


  * {string} The text of the expandable’s label.
behavior: ""
accessibility: The `find` function will not discover information hidden by a
  collapsed expandable, so use good judgement in deciding which information to
  hide. Non-javaScript users should default to the expanded state. Otherwise,
  the default state (expanded or collapsed) will depend on the circumstance.
related_items: ""
last_updated: 2019-12-16T18:43:19.784Z
research: "### Google Tag Manager


  Below is a list of items that Digital Analytics references in the tag that
  captures expandables.\ 


  #### TAG ITEMS


  **Category:** Page Interaction (hardcoded)



  **Action:** Dropdown (hardcoded)



  **Label:** where {{element}} = element clicked


  ```

  var elem = {{element}};

  \rvar closestElem = closest(elem, '.o-expandable_target');\r

  var textElem = closestElem.querySelector('.o-expandable_label') ||
  closestElem.querySelector('.o-expandable_cue')\r;

  var text = textElem.textContent.trim();\r

  return text;

  ```


  OR


  ```

  var elem = {{element}};\rvar closestElem = closest(elem,
  '.expandable_target');

  var text =
  closestElem.querySelector('.expandable_label').textContent.trim();

  return text;

  ```




  #### TRIGGER ITEMS


  Element has a parentNode with className matching RegEx
  `expandable_header|expandable__padded`.


  Element has parentNode with a className that does not contain
  `nav-secondary`, since the secondary navigation at mobile uses an expandable
  as well."
---
