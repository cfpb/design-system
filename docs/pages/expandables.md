---
layout: variation
section: components
status: Released
variation_groups:
  - variation_group_name: Types
    variations:
      - variation_name: Expandable
        variation_description: The following combination is our recommended go-to expandable pattern.
        variation_code_snippet: >-
          <div class="o-expandable
                      o-expandable__padded
                      o-expandable__background
                      o-expandable__border">
              <button class="o-expandable_header"
                      title="Expand content">
                  <h3 class="h4 o-expandable_label">
                      Expandable header
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
        variation_specs: ''
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
      - variation_name: Expandable (open on load)
        variation_code_snippet: >-
          <div class="o-expandable
                      o-expandable__padded
                      o-expandable__background
                      o-expandable__border
                      o-expandable__onload-open">
              <button class="o-expandable_header"
                      title="Expand content">
                  <h3 class="h4 o-expandable_label">
                      Expandable header
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
        variation_description:
          Sometimes you may want the expandable to be open by
          default. This is as easy as adding the `.o-expandable__onload-open`
          modifier to the `.o-expandable` block.
        variation_implementation:
          A new array of Expandable instances can be created
          using a JavaScript API. For information, [open the "Implementation"
          tab under Standard
          expandable](https://cfpb.github.io/design-system/components/expandables#standard-expandables).
      - variation_is_deprecated: false
        variation_name: Expandable group (default)
        variation_description:
          In the default mode, users are able to have multiple
          sections of an expandable group expanded at the same time, which
          allows users to easily compare information that is available in
          different sections.
        variation_code_snippet: >-
          <div class="o-expandable-group">
              <div class="o-expandable o-expandable__padded">
                  <button class="o-expandable_header"
                          title="Expand content">
                      <h3 class="h4 o-expandable_label">
                          Expandable header
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
                          Expandable header
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
                          Expandable header
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
      - variation_is_deprecated: false
        variation_name: Expandable group (accordion)
        variation_implementation:
          A new array of Expandable instances can be created
          using a JavaScript API. For information, [open the "Implementation"
          tab under Standard
          expandable](https://cfpb.github.io/design-system/components/expandables#standard-expandables).
        variation_description:
          To show only one open expandable at a time, use an
          accordion group. Add the `o-expandable-group__accordion` class to the
          expandable group to activate the accordion mode.
        variation_code_snippet: >-
          <div class="o-expandable-group o-expandable-group__accordion">
              <div class="o-expandable o-expandable__padded">
                  <button class="o-expandable_header"
                          title="Expand content">
                      <h3 class="h4 o-expandable_label">
                          Expandable header
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
                          Expandable header
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
                          Expandable header
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
      - variation_is_deprecated: false
        variation_name: Variations
        variation_description:
          Should you need an expandable thing that is not covered
          by the expandables above, see the [Transition
          Patterns](https://cfpb.github.io/design-system/patterns/transition-patterns)
          for making a component with expandable-like behavior.
    variation_group_description: ''
guidelines: ''
eyebrow: Components
title: Expandables
description: Expandables are components that have additional content that can be
  opened (expanded) and closed (collapsed). They can appear on their own or in
  groups. They may be helpful for FAQ sections, schedules, and for conserving
  vertical space by collapsing secondary information on mobile devices.
use_cases: ''
behavior: >-
  ### Collapsed


  The default collapsed state should include a heading and the expand/collapse minicon within a circle.


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
research: ''
---
