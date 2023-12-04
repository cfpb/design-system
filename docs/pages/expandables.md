---
layout: variation
section: components
status: Released
variation_groups:
  - variation_group_name: Standard expandables
    variations:
      - variation_name: Standard expandable
        variation_description: The following combination is our recommended go-to expandable pattern.
        variation_code_snippet: >-
          <div class="o-expandable
                      o-expandable__padded
                      o-expandable__background
                      o-expandable__border">
              <button class="o-expandable_header"
                      title="Expand content">
                  <h3 class="h4 o-expandable_label">
                      Expandable Header
                  </h3>
                  <span class="o-expandable_cues">
                      <span class="o-expandable_cue-open" role="img" aria-label="Show">
                          {% include icons/plus-round.svg %}
                      </span>
                      <span class="o-expandable_cue-close" role="img" aria-label="Hide">
                          <span class="u-visually-hidden">Hide</span>
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
        variation_specs: ""
        variation_implementation: >-
          A new array of Expandable instances can be created with `const
          expandables = Expandable.init();`. Each instance has the following
          methods for public consumption:


          #### toggleTargetState( element )


          ```

          const element = document.querySelector( '.o-expandable_header' );

          expandables[0].toggleTargetState( element );

          ```


          Toggle an expandable to open or closed.

          Parameters:


          * element {HTMLElement} The expandable target HTML DOM element.


          #### getLabelText()


          ```

          expandables[0].getLabelText();

          ```


          Retrieve the label text of the expandable header.

          Return:


          * {string} The text of the expandable’s label.
      - variation_name: Standard expandable (open on load)
        variation_code_snippet: >-
          <div class="o-expandable
                      o-expandable__padded
                      o-expandable__background
                      o-expandable__border
                      o-expandable__onload-open">
              <button class="o-expandable_header"
                      title="Expand content">
                  <h3 class="h4 o-expandable_label">
                      Expandable Header
                  </h3>
                  <span class="o-expandable_cues">
                      <span class="o-expandable_cue-open" role="img" aria-label="Show">
                          {% include icons/plus-round.svg %}
                      </span>
                      <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        variation_description: Sometimes you may want the expandable to be open by
          default. This is as easy as adding the `.o-expandable__onload-open`
          modifier to the `.o-expandable` block.
        variation_implementation: A new array of Expandable instances can be created
          using a JavaScript API. For information, [open the "Implementation"
          tab under Standard
          expandable](https://cfpb.github.io/design-system/components/expandables#standard-expandables).
    variation_group_description: ""
  - variations:
      - variation_code_snippet: >-
          <div class="o-expandable-group">
              <div class="o-expandable o-expandable__padded">
                  <button class="o-expandable_header"
                          title="Expand content">
                      <h3 class="h4 o-expandable_label">
                          Expandable Header 1
                      </h3>
                      <span class="o-expandable_cues">
                          <span class="o-expandable_cue-open" role="img" aria-label="Show">
                              {% include icons/plus-round.svg %}
                          </span>
                          <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
                  <button class="o-expandable_header"
                          title="Expand content">
                      <h3 class="h4 o-expandable_label">
                          Expandable Header 2
                      </h3>
                      <span class="o-expandable_cues">
                          <span class="o-expandable_cue-open" role="img" aria-label="Show">
                              {% include icons/plus-round.svg %}
                          </span>
                          <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
                  <button class="o-expandable_header"
                          title="Expand content">
                      <h3 class="h4 o-expandable_label">
                          Expandable Header 3
                      </h3>
                      <span class="o-expandable_cues">
                          <span class="o-expandable_cue-open" role="img" aria-label="Show">
                              {% include icons/plus-round.svg %}
                          </span>
                          <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        variation_specs: >-
          When expandable sections are used in a group, they are stacked
          vertically, with each row sharing its top or bottom stroke with the
          adjacent row. In this use case, expandables have no background color
          of their own, but match whatever color they are used on (this would
          typically be a white page or 5% gray well). Title text should be
          consistent across a group of expandables.


          #### Specifications


          * 60% gray 1px strokes. All sides on individual, or top and bottom for grouping.

          * Optional 5% gray or white background for individual expandable.

          * 10px top and bottom padding.

          * 15px left and right padding.

          * 15px padding between title and minicon with label.

          * Avenir paragraph (medium) or H4 title text.

          * Pacific blue minicon and label.


          ![Image showing vertical and horizontal padding within expandable elements](/design-system/images/uploads/expandables-spec.png)
        variation_description: >
          In the default mode, users are able to have multiple sections of an
          expandable group expanded at the same time, which allows users to
          easily compare information that is available in different sections.
        variation_implementation: A new array of Expandable instances can be created
          using a JavaScript API. For information, [open the "Implementation"
          tab under Standard
          expandable](https://cfpb.github.io/design-system/components/expandables#standard-expandables).
      - variation_code_snippet: >-
          <div class="o-expandable-group o-expandable-group__accordion">
              <div class="o-expandable o-expandable__padded">
                  <button class="o-expandable_header"
                          title="Expand content">
                      <h3 class="h4 o-expandable_label">
                          Expandable Header 1
                      </h3>
                      <span class="o-expandable_cues">
                          <span class="o-expandable_cue-open" role="img" aria-label="Show">
                              {% include icons/plus-round.svg %}
                          </span>
                          <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
                  <button class="o-expandable_header"
                          title="Expand content">
                      <h3 class="h4 o-expandable_label">
                          Expandable Header 2
                      </h3>
                      <span class="o-expandable_cues">
                          <span class="o-expandable_cue-open" role="img" aria-label="Show">
                              {% include icons/plus-round.svg %}
                          </span>
                          <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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

                           Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                          temporibus magnam debitis quidem. Ducimus ratione
                          corporis nesciunt earum vel est quaerat blanditiis
                          dolore ipsa?

                           Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                          temporibus magnam debitis quidem. Ducimus ratione
                          corporis nesciunt earum vel est quaerat blanditiis
                          dolore ipsa?

                           Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                          temporibus magnam debitis quidem. Ducimus ratione
                          corporis nesciunt earum vel est quaerat blanditiis
                          dolore ipsa?

                           Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                          temporibus magnam debitis quidem. Ducimus ratione
                          corporis nesciunt earum vel est quaerat blanditiis
                          dolore ipsa?

                           Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                          temporibus magnam debitis quidem. Ducimus ratione
                          corporis nesciunt earum vel est quaerat blanditiis
                          dolore ipsa?

                           Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                          temporibus magnam debitis quidem. Ducimus ratione
                          corporis nesciunt earum vel est quaerat blanditiis
                          dolore ipsa?
                      </p>
                  </div>
              </div>
              <div class="o-expandable o-expandable__padded">
                  <button class="o-expandable_header"
                          title="Expand content">
                      <h3 class="h4 o-expandable_label">
                          Expandable Header 3
                      </h3>
                      <span class="o-expandable_cues">
                          <span class="o-expandable_cue-open" role="img" aria-label="Show">
                              {% include icons/plus-round.svg %}
                          </span>
                          <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        variation_description: To show only one open expandable at a time, use an
          accordion group. Add the `o-expandable-group__accordion` class to the
          expandable group to activate the accordion mode.
        variation_name: Accordion-style group
        variation_implementation: A new array of Expandable instances can be created
          using a JavaScript API. For information, [open the "Implementation"
          tab under Standard
          expandable](https://cfpb.github.io/design-system/components/expandables#standard-expandables).
    variation_group_name: Groups
    variation_group_description: ""
  - variation_group_name: Variations
    variation_group_description: Should you need an expandable thing that is not
      covered by the expandables above, see the [Transition
      Patterns](https://cfpb.github.io/design-system/patterns/transition-patterns)
      for making a component with expandable-like behavior.
    variations: []
guidelines: ""
eyebrow: Components
title: Expandables
description: Expandables are components that have additional content that can be
  opened (expanded) and closed (collapsed). They can appear on their own or in
  groups. They may be helpful for FAQ sections, schedules, and for conserving
  vertical space by collapsing secondary information on mobile devices.
use_cases: ""
behavior: >
  ### Collapsed


  The default collapsed state should include the expand/collapse minicon within a circle and a label (if space allows). The Show/Hide label can be hidden at narrower screen widths to prevent titles prematurely breaking onto multiple lines and to reduced visual clutter.


  ### Expanded


  The content of an expandable can contain normal paragraphs, headings, lists, wells, and images.


  Expandables can make use of an optional stroke under the title when expanded. The title stroke can help to define the title from the expanded content for longer sections of text. It should be indented left and right to match the text within the expandable section.
accessibility: The `find` function will not discover information hidden by a
  collapsed expandable, so use good judgement in deciding which information to
  hide. Non-javaScript users should default to the expanded state. Otherwise,
  the default state (expanded or collapsed) will depend on the circumstance.
related_items: "* [Expandables
  variables](https://cfpb.github.io/design-system/development/variables#expanda\
  bles) "
last_updated: 2019-12-16T18:43:19.784Z
research: ""
---
