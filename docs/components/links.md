---
title: Links
layout: variation
section: components
secondary_section: Text
status: Released
description: >-
  Links lead users to a different page or further information. In contrast,
  buttons are used to signal actions. Users should be able to identify links
  without relying on color or styling alone.


  More information can be found at:


  * <https://cfpb.github.io/design-manual/page-components/links.html>

  * <https://cfpb.github.io/capital-framework/components/cf-core/#default-links>

  * <https://cfpb.github.io/capital-framework/components/cf-typography/#link-patterns>
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
          Inline links should be Regular weight if inline with other text (e.g.,
          within a paragraph like this one).

        variation_name: Inline links
        variation_implementation: ""
        variation_specs: |-
          Default
          * Pacific Blue
          * 1px dotted bottom border

          Hover
          * Dark Pacific Blue
          * 1px solid bottom border

          Focus
          * Pacific Blue
          * 1px dotted bottom border
          * Thin dotted outline

          #### Active
          * Navy Blue
          * 1px solid bottom border

          #### Visited
          * Teal
          * 1px solid bottom border
      - variation_name: Standalone links
        variation_code_snippet: |-
          <ul class="medium-ex m-list m-list__unstyled">
              <li class="m-list_item">
                  <a href="#">Default link style</a>
              </li>
              <li class="m-list_item">
                  <a href="#" class="hover">Hover link style</a>
              </li>
              <li class="m-list_item">
                  <a href="#" class="focus">Focused link style</a>
              </li>
              <li class="m-list_item">
                  <a href="#" class="active">Active link style</a>
              </li>
              <li class="m-list_item">
                  <a href="#" class="visited">Visited link style</a>
              </li>
          </ul>
        variation_description: >+
          Standalone links (e.g., in a call to action or list of links) should
          be Medium weight.

    variation_group_description: >+
      Links that appear in body text (`p`), link lists (`li`), or definitions
      (`dd`) are automatically underlined. They are not underlined when included
      in a `nav` element. To enable them elsewhere, simply add a
      `border-bottom-width: 1px;` to the link.

  - variation_group_name: Links with icons
    variation_group_description: "Use icons when a link needs extra emphasis. Use
      icons consistently, or don’t use them at all. Each icon should be used
      exclusively for one action. "
    variations:
      - variation_specs: >
          Icons appear to the right of the link text. The color and font-size of
          icons should be the same as the adjacent text, including state
          changes. Icons are never underlined.
        variation_code_snippet: |-
          <p>
            Use the email icon to emphasize an email address like
              <a class="a-link
                        a-link__icon"
                href="#">
                  {% include icons/mail.svg %}
                  <span class="a-link_text">john.smith@cfpb.gov</span>
              </a>.
              Documents minicons can emphasize a link that contains a
              <a class="a-link
                        a-link__icon"
                href="#">
                  <span class="a-link_text">file or document</span>
                  {% include icons/download.svg %}
              </a>.
              Use the external link minicon to emphasize
              <a class="a-link
                        a-link__icon"
                href="#">
                  <span class="a-link_text">a non-CFPB webpage</span>
                  {% include icons/external-link.svg %}
              </a> for further details.
          </p>
        variation_name: Links with icon
        variation_description: >-
          To prevent the link’s underline from extending under the icon, you
          must wrap the link text with a `span.icon-link_text`. There can be no
          whitespace between the text and the opening and closing span tags.


          Include the icon either prior to or after the `a-link_text`. It is important the text and icon are siblings to correctly handle underlines.
      - variation_name: Non-wrapping icon links
        variation_description: "Warning: Icons added to inline links can sometimes break
          onto the next line. If you want to prevent this, you can add the
          `__no-wrap` modifier to `.a-link__icon`."
        variation_code_snippet: |-
          For more information, email
          <a class="a-link
                    a-link__icon
                    a-link__no-wrap"
            href="#">
              <span class="a-link_text">john.smith@cfpb.gov</span>
              {% include icons/mail.svg %}
          </a>.
  - variation_group_name: Jump links
    variations:
      - variation_name: Jump link
        variation_code_snippet: |-
          <a class="a-link
                    a-link__jump
                    a-link__icon-after-text"
            href="#">
          <span class="a-link_text">Jump link</span>
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
    variation_group_description: '"Jump links” are standalone links that respond to
      small screens by converting to full block links that have a
      finger-friendly touch area. Reduce screen size to see these in action.'
  - variations:
      - variation_code_snippet: >-
          <h2>Header 2 containing <a href="#">a link</a></h2>

          <p>Lorem ipsum dolor sit amet. Vestibulum orci ante, sagittis quis dolor a, fringilla dapibus nunc. Nulla in purus nisi. Curabitur vel odio et est auctor tincidunt. Et ultricies erat pellentesque nec. Suspendisse quis faucibus nec eu justo. Nulla ut massa eget dolor vehicula bibendum.</p>
        variation_description: "Generally, it is not recommended to add links in
          headers. Note that they are not underlined. "
        variation_name: Header link
      - variation_code_snippet: |-
          Needs code snippet!
          <!-- 
          <ul class="toc">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          -->
        variation_description: "Navigation links are not underlined and do not get a
          visited link style. "
        variation_name: Navigation links
        variation_specs: |-
          No underline
          No visited link style
    variation_group_name: Variations
use_cases: ""
content_guidelines: ""
behavior: >-
  ### Default links

  In general, links should default to opening in the same page or browser tab. This allows the user to choose whether they want to open an additional window in order to view the content.


  ### Opening a link in a new tab

  Links should open in a new tab in situations where users enter data or make selections that would be lost if they left the page. This includes interactive tools, search filters, and forms where the user has to enter and submit information.


  Add `target="_blank" rel="noopener noreferrer"` to direct these links to securely open in a new tab.


  Add an `aria-label` that includes the link text and informs users with visual impairments that the link will open in a new tab. An example would be `aria-label="Learn why some county data are unavailable. (Link opens in new tab.)"` This meets [WCAG guideline 3.2 that webpages should work in a predictable way](https://www.w3.org/TR/WCAG20-TECHS/G201.html).
accessibility: ""
last_updated: 2019-09-17T14:52:22.684Z
research: ""
---
