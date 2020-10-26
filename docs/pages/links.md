---
title: Links
layout: variation
section: components
status: Released
description: Links lead users to a different page or further information. In
  contrast, [buttons](/design-system/components/buttons) are used to signal
  actions. Users should be able to identify links without relying on color or
  styling alone.
variation_groups:
  - variation_group_name: Standard links
    variations:
      - variation_code_snippet: >-
          <!--Note that the .visited, .hover, .focus, .active classes are for
          demonstration purposes only and should not be used in production.-->


          <!--

          <p>
              <a href="#">Default</a>,
              <a href="#" class="visited">Visited</a>,
              <a href="#" class="hover">Hovered</a>,
              <a href="#" class="focus">Focused</a>,
              <a href="#" class="active">Active</a>
          </p>

          -->


          <p>Here's the <a href="#">default link style</a>. For reference, here's the <a href="#" class="hover">hover link style</a>. Train your eyes on the <a href="#" class="focus">focused link style</a>. Jump to the <a href="#" class="active">active link style</a>. We’ve all been to the <a href="#" class="visited">visited link style</a>.</p>
        variation_description: >+
          Inline links should be regular weight if inline with other text (e.g.,
          within a paragraph like this one).

        variation_name: Inline links
        variation_implementation: ""
        variation_specs: >-
          [Color variables for
          links](https://cfpb.github.io/design-system/development/variables#typography-1)


          #### Default

          * Pacific Blue

          * 1px dotted bottom border


          #### Hover

          * Dark Pacific Blue

          * 1px solid bottom border


          #### Focus

          * Pacific Blue

          * 1px dotted bottom border

          * Thin dotted outline


          #### Active

          * Navy Blue

          * 1px solid bottom border


          #### Visited

          * Teal

          * 1px solid bottom border
      - variation_name: Call-to-action links
        variation_code_snippet: >-
          <ul class="m-list m-list__links">
              <li class="m-list_item">
                  <a class="m-list_link" href="#">Sample call-to-action link</a>
              </li>
              <li class="m-list_item">
                  <a class="m-list_link" href="#">Another sample call-to-action link</a>
              </li>
          </ul>
        variation_description: >+
          Call-to-action links are standalone links underneath paragraphs that
          highlight users' next steps. They are medium weight and often used in
          unordered lists.

        variation_implementation: Call-to-action links are used in
          [cards](https://cfpb.github.io/design-system/patterns/cards) and [info
          unit
          groups](https://cfpb.github.io/design-system/patterns/info-unit-groups),
          among other places.
    variation_group_description: >+
      Links that appear in body text (`p`), link lists (`li`), or definitions
      (`dd`) are automatically underlined. To enable underlines elsewhere, e.g.
      to underline links in a `nav` element, simply add a `border-bottom-width:
      1px;` to the link.

  - variation_group_name: Links with icons
    variation_group_description: >-
      * An icon should appear after the text it represents.  

      * Each icon should be used exclusively and consistently for one action.

      * The color and font-size of an icon should be the same as the text it represents, including state changes. 

      * Icons are never underlined.
    variations:
      - variation_specs: ""
        variation_code_snippet: |-
          <p>
            The document icon can emphasize a link that contains a
              <a class="a-link
                        a-link__icon"
                href="#">
                  <span class="a-link_text">file or document</span>
                  {% include icons/download.svg %}
              </a>.
              Use the external link icon to emphasize
              <a class="a-link
                        a-link__icon"
                href="#">
                  <span class="a-link_text">a non-CFPB webpage</span>
                  {% include icons/external-link.svg %}
              </a> for further details.
          </p>
        variation_name: Standard link with icon
        variation_description: To prevent the link’s underline from extending under the
          icon, wrap the link text with a `span.icon-link_text`. There can be no
          whitespace between the text and the opening and closing span tags.
          Include the icon either prior to or after the `a-link_text`. It is
          important the text and icon are siblings to correctly handle
          underlines.
      - variation_name: Non-wrapping icon links
        variation_description: Icons added to inline links can sometimes break onto the
          next line. If you want to prevent this, you can add the `__no-wrap`
          modifier to `.a-link__icon`.
        variation_code_snippet: |-
          <p>
              The document icon can emphasize a link that contains a
              <a class="a-link
                    a-link__icon
                    a-link__no-wrap"
            href="#">
                  <span class="a-link_text">file or document</span>
                  {% include icons/download.svg %}
              </a>.
          </p>
  - variation_group_name: Jump links
    variations:
      - variation_name: Jump link
        variation_code_snippet: |-
          <a class="a-link
                    a-link__jump
                    a-link__icon-after-text"
            href="#">
          <span class="a-link_text">Default jump link</span>
              {% include icons/right.svg %}
          </a>
      - variation_name: Large jump link
        variation_description: The large jump link has an 18px `font-size`, compared to
          the default of 16px.
        variation_code_snippet: |-
          <a class="a-link
                    a-link__jump
                    a-link__icon-after-text
                    a-link__large"
            href="#">
              <span class="a-link_text">Large jump link</span>
              {% include icons/right.svg %}
          </a>
      - variation_name: Jump link with icon on left
        variation_description: Jump links can also have icons before the text, like icon links.
        variation_code_snippet: |-
          <a class="a-link
                    a-link__jump
                    a-link__icon-before-text"
            href="#">
              {% include icons/left.svg %}
              <span class="a-link_text">Jump link with icon on left</span>
          </a>
      - variation_name: Jump link with background modifier
        variation_code_snippet: |-
          <a class="a-link
                    a-link__jump
                    a-link__icon-after-text
                    a-link__bg"
            href="#">
              <span class="a-link_text">Jump link with grey background and
                  solid borders on small screens</span>
              {% include icons/right.svg %}
          </a>
        variation_description: A grey background is added on small screens.
    variation_group_description: Jump links are standalone links that respond to
      small screens by converting to full block links that have a
      finger-friendly touch area. Reduce screen size to see these in action.
use_cases: ""
guidelines: ""
behavior: >-
  ### Default links

  In general, links should default to opening in the same page or browser tab. This allows the user to choose whether they want to open an additional window in order to view the content. This applies to document and external links.


  ### Opening a link in a new tab

  Links should open in a new tab in situations where users enter data or make selections that would be lost if they left the page. This includes interactive tools, search filters, and forms where the user has to enter and submit information.


  Add `target="_blank" rel="noopener noreferrer"` to direct these links to securely open in a new tab.


  Add an `aria-label` that includes the link text and informs users with visual impairments that the link will open in a new tab. An example would be `aria-label="Learn why some county data are unavailable. (Link opens in new tab.)"` This meets [WCAG guideline 3.2 that webpages should work in a predictable way](https://www.w3.org/TR/WCAG20-TECHS/G201.html).
accessibility: >-
  Link text should clearly describe where it will take the user if activated. If
  a screen reader user is cycling through the links on a page, link text such as
  "Read more" or "Click here" is not helpful for knowing where that link will
  take them. Write the link with language clearly describing the link's
  destination.


  In situations where that's untenable, you can improve the situation for screen reader users by coding the link with the `aria-label` attribute and adding more descriptive link text, which will be read aloud by screen readers.
research: ""
related_items: >-
  *
  [Variables](https://cfpb.github.io/design-system/development/variables#typography-1)

  * [Buttons](https://cfpb.github.io/design-system/components/buttons)

  * [Typography](https://cfpb.github.io/design-system/foundation/fonts)

  * [Iconography](https://cfpb.github.io/design-system/foundation/iconography)
last_updated: 2019-09-17T14:52:22.684Z
secondary_section: Text
---
