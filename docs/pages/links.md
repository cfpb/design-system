---
layout: variation
section: components
status: Released
variation_groups:
  - variation_group_name: Types
    variations:
      - variation_code_snippet: <a href="#">Inline link</a>
        variation_description:
          Inline links appear within a line of text or other inline
          elements. Inline links are underlined and retain a consistent
          appearance across all screen widths.
        variation_name: Inline link
        variation_implementation:
          'Links that appear in body text (`p`), link lists
          (`li`), or definitions (`dd`) are automatically underlined. To enable
          underlines elsewhere, e.g. to underline links in a `nav` element,
          simply add a `border-bottom-width: 1px;` to the link.'
        variation_specs: ''
        variation_code_snippet_rendered: <p>Here's the default <a href="#">inline link</a> style.</p>
      - variation_is_deprecated: false
        variation_name: Standalone link
        variation_description:
          Standalone links sit on their own line. At larger screen
          widths, standalone links are medium weight and underlined. At smaller
          screen widths, standalone links convert to full block links with top
          and bottom borders that have a finger-friendly touch area.
        variation_code_snippet: >-
          <p>
              <a class="a-link a-link--jump" href="#"><span class="a-link__text">Standalone link</span>
              </a>
          </p>
        variation_code_snippet_rendered: >-
          <a class="a-link a-link--jump" href="#"><span
          class="a-link__text">Standalone link</span>
              </a>
      - variation_is_deprecated: false
        variation_name: Link with icon
        variation_description:
          Each icon should be used exclusively and consistently for
          one action. An icon should appear after the text it represents. The
          only exception is a link that takes a user to a previous step or page,
          where the icon should appear before the link's text. Icons should
          never be underlined.
        variation_implementation: >-


          * To prevent the link’s underline from extending under the icon, wrap the link text with a `span.a-link__text`. There can be no whitespace between the text and the opening and closing span tags. Include the icon either prior to or after the `a-link__text`. It is important the text and icon are siblings to correctly handle underlines.
        variation_code_snippet: >
          <!-- Inline -->

          <a class="a-link" href="#"><span class="a-link__text">file or document</span> {% include icons/document.svg %}   

          </a>


          <!-- Standalone -->

          <a class="a-link a-link--jump" href="#">{% include icons/left.svg %} <span class="a-link__text">Go back</span>

          </a>
        variation_code_snippet_rendered: "<h4>Inline</h4>

          <p>

          \  The document icon is used to emphasize a link that
          contains a

          \        <a class=\"a-link\" href=\"#\"><span
          class=\"a-link__text\">file or document</span> {% include
          icons/document.svg %}  \

          \        </a>.

          \  The external link icon is used to emphasize a link to a

          \        <a class=\"a-link\" href=\"#\"><span
          class=\"a-link__text\">non-CFPB webpage</span> {% include
          icons/external-link.svg %}

          \        </a>.\

          </p>

          <h4>Standalone</h4>


          <a class=\"a-link a-link--jump\" href=\"#\">{% include
          icons/left.svg %} <span class=\"a-link__text\">Go back</span>

          </a>      \


          <br><br>   \


          <a class=\"a-link a-link--jump\" href=\"#\"><span
          class=\"a-link__text\">Continue</span> {% include icons/right.svg %}

          </a>

          \   \

          <br><br>   \


          <a class=\"a-link a-link--jump\" href=\"#\"><span
          class=\"a-link__text\">External link</span> {% include
          icons/external-link.svg %}

          </a>


          <br><br>   \


          <a class=\"a-link a-link--jump\" href=\"#\"><span
          class=\"a-link__text\">Document or file</span> {% include
          icons/document.svg %}

          </a>

          \    "
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
        variation_description:
          A list link is an item in a set of two or more stacked
          standalone links. Items in a link list are medium weight and are
          underlined at larger screen widths. At smaller screen widths, they
          convert to full block links with a top and bottom border.
        variation_implementation: Standalone links are used in
          [cards](https://cfpb.github.io/design-system/patterns/cards) and [info
          unit
          groups](https://cfpb.github.io/design-system/patterns/info-unit-groups),
          among other places.
        variation_jinja_code_snippet: ''
        variation_specs: ''
      - variation_name: Destructive link
        variation_code_snippet: |-
          <a class="a-btn a-btn--link a-btn--warning" href="#">
               Destructive link
          </a>
        variation_description:
          A destructive action is an action that will lead to data
          loss, for example, deleting data from a form or removing a file that
          was previously uploaded. Although a destructive action can be styled
          as a button, we recommend using the destructive link style (shown
          below) to ensure consistency across cf.gov products.
        variation_specs: ''
      - variation_is_deprecated: false
        variation_name: Printed links
        variation_description: When a page is printed from
          [consumerfinance.gov](https://www.consumerfinance.gov/), links should
          appear in the following style and include both the original link text
          as well as a shortened URL.
        variation_code_snippet: Here's the <a href="#">link style</a> when printed.
        variation_code_snippet_rendered: '<p>Here''s the <a
          href="https://consumerfinance.gov/about-us/blog"
          style="font-weight: 500;">link style<span style="border-bottom: 1px
          solid #ffffff; font-weight: 300;">
          (cfpb.gov/about-us/blog)</span></a> when printed.</p>'
        variation_implementation: When a page is printed, cf.gov's [print
          stylesheet](https://github.com/cfpb/consumerfinance.gov/blob/c9637160e14da5093b43c78fc2c87fa0ba190887/cfgov/unprocessed/css/print.less)
          appends link URLs in parentheses next to their link text.
        variation_specs: ''
    variation_group_description: ''
guidelines: ''
eyebrow: Components
title: Links
description: Links are navigational elements that connect users to other
  locations, either on the current page or to a different page or site. In
  contrast, [buttons](/design-system/components/buttons) are used to signal
  important actions.
use_cases: ''
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
research: ''
---
