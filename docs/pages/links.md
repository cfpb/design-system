---
layout: variation
section: components
status: Released
variation_groups:
  - variation_group_name: Types
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
        variation_description: Inline links appear within a line of text or other inline
          elements. Inline links have a dotted underline in their default state
          and retain a consistent appearance across all screen sizes. When used
          with inline links, an icon should appear after the text it represents.
        variation_name: Inline link
        variation_implementation: "Links that appear in body text (`p`), link lists
          (`li`), or definitions (`dd`) are automatically underlined. To enable
          underlines elsewhere, e.g. to underline links in a `nav` element,
          simply add a `border-bottom-width: 1px;` to the link."
        variation_specs: ""
      - variation_is_deprecated: false
        variation_name: Standalone link
        variation_description: Standalone links appear on their own line and are often
          used to highlight a user's next steps. At larger screen widths they
          are medium weight and have a dotted underline. At smaller screen
          widths they convert to full block links with a top and bottom dotted
          border that have a finger-friendly touch area. Standalone links can be
          paired with icons that sit to the left or the right of the link text.
        variation_code_snippet: |-
          <p><a class="a-link
                    a-link--jump"
            href="#">
          <span class="a-link__text">Standalone link</span>
          </a></p>
      - variation_is_deprecated: false
        variation_name: Link with icon
        variation_description: When used, an icon should appear after the text it
          represents. Each icon should be used exclusively and consistently for
          one action. The color and font-size of an icon should be the same as
          the text it represents, including state changes. Icons should never be
          underlined.
        variation_implementation: >-
          

          * To prevent the link’s underline from extending under the icon, wrap the link text with a `span.a-link__text`. There can be no whitespace between the text and the opening and closing span tags. Include the icon either prior to or after the `a-link__text`. It is important the text and icon are siblings to correctly handle underlines.
        variation_code_snippet: |-
          <p>
            The document icon should emphasize a link that contains a
              <a class="a-link"
                href="#">
                  <span class="a-link__text">file or document</span>
                  {% include icons/download.svg %}
              </a>.
              Use the external link icon to emphasize
              <a class="a-link"
                href="#">
                  <span class="a-link__text">a non-CFPB webpage</span>
                  {% include icons/external-link.svg %}
              </a> for further details.
          </p>
      - variation_name: List link
        variation_code_snippet: |-
          <ul class="m-list m-list--links">
              <li class="m-list__item">
                  <a class="a-link a-link--jump" href="#">
                     <span class="a-link__text">List item 1</span>
                  </a>
              </li>
              <li class="m-list__item">
                  <a class="a-link a-link--jump" href="#">
                      <span class="a-link__text">List item 2</span>
                  </a>
              </li>
              <li class="m-list__item">
                  <a class="a-link a-link--jump" href="#">
                      <span class="a-link__text">List item 3</span>
                  </a>
              </li>
                  </a>
              </li>
          </ul>
        variation_description: A list link is an item in a set of two or more stacked
          standalone links. Items in a link list are medium weight and have a
          dotted underline in their default state at larger screen width. At
          smaller screen sizes they convert to full block links with a top and
          bottom dotted border.
        variation_implementation: Standalone links are used in
          [cards](https://cfpb.github.io/design-system/patterns/cards) and [info
          unit
          groups](https://cfpb.github.io/design-system/patterns/info-unit-groups),
          among other places.
        variation_jinja_code_snippet: ""
        variation_specs: ""
      - variation_name: Destructive action
        variation_code_snippet: >-
          <div class="m-btn-group">
              <button class="a-btn">Action</button>
              <button class="a-btn a-btn--link a-btn--warning">Destructive action</button>
          </div>
        variation_description: When paired with a primary action, indicate the
          destructive action using a destructive action button link to the right
          of the primary button.
        variation_specs: ""
      - variation_is_deprecated: false
        variation_name: Printed links
        variation_description: When a page is printed from
          [consumerfinance.gov](https://www.consumerfinance.gov/), links should
          appear in the following style and include both the original link text
          as well as a shortened URL.
        variation_code_snippet: Here's the <a href="#">link style</a> when printed.
        variation_code_snippet_rendered: "<p>Here's the <a
          href=\"https://consumerfinance.gov/about-us/blog\"
          style=\"font-weight: 500;\">link style<span style=\"border-bottom: 1px
          solid #ffffff; font-weight: 300;\">
          (cfpb.gov/about-us/blog)</span></a> when printed.</p>"
        variation_implementation: When a page is printed, cf.gov's [print
          stylesheet](https://github.com/cfpb/consumerfinance.gov/blob/c9637160e14da5093b43c78fc2c87fa0ba190887/cfgov/unprocessed/css/print.less)
          appends link URLs in parentheses next to their link text.
        variation_specs: ""
    variation_group_description: ""
guidelines: ""
eyebrow: Components
title: Links
description: Links are navigational elements that connect users to other
  locations, either on the current page or to a different page or site. In
  contrast, [buttons](/design-system/components/buttons) are used to signal
  important actions.
use_cases: ""
behavior: >-
  ### Opening a link in the current tab (default)


  In general, links should default to opening in the current page or browser tab. This allows the user to choose whether they want to open an additional window in order to view the content. This applies to document and external links.


  ### Opening a link in a new tab


  Links should open in a new tab in situations where users enter data or make selections that would be lost if they left the page. This includes interactive tools, search filters, and forms where the user has to enter and submit information.


  Add `target="_blank" rel="noopener noreferrer"` to direct these links to securely open in a new tab.


  Add an `aria-label` that includes the link text and informs users with visual impairments that the link will open in a new tab. An example would be `aria-label="Learn why some county data are unavailable. (Link opens in new tab.)"` This meets [WCAG guideline 3.2 that webpages should work in a predictable way](https://www.w3.org/TR/WCAG20-TECHS/G201.html).
accessibility: >-
  Link text should clearly describe where it will take the user if activated. If
  a screen reader user is cycling through the links on a page, link text such as
  "Read more" or "Click here" is not helpful for knowing where that link will
  take them. \

  \

  Write the link with language clearly describing the link's destination. In situations where that's untenable, you can improve the situation for screen reader users by coding the link with the `aria-label` attribute and adding more descriptive link text, which will be read aloud by screen readers.
related_items: |-
  * [Buttons](https://cfpb.github.io/design-system/components/buttons)
  * [Typography](https://cfpb.github.io/design-system/foundation/fonts)
  * [Iconography](https://cfpb.github.io/design-system/foundation/iconography)
last_updated: 2019-09-17T14:52:22.684Z
research: ""
---
