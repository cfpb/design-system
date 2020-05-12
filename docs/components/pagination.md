---
title: Pagination
layout: variation
section: components
secondary_section: Navigation
status: Released
description: "Default pagination consists of “Older” and “Newer” links, styled as buttons, and an inline form (input, submit button) that allows users to navigate to specific pages by number. When appropriate, the buttons may be labeled “Previous” and “Next”.\n\nMore information can be found at:\n* http://cfpb.github.io/design-manual/page-components/tables.html#behavior\t\n* https://cfpb.github.io/capital-framework/components/cf-pagination/"
variation_groups:
  - variations:
      - variation_code_snippet: |-
          <div id="pagination_content"></div>

          <!-- Paginated content here -->

          <nav class="m-pagination" role="navigation" aria-label="Pagination">
              <a class="a-btn
                        m-pagination_btn-prev"
                href="?page=21#pagination_content">
                  <span class="a-btn_icon a-btn_icon__on-left">{% include icons/left.svg %}</span>
                  Newer
              </a>
              <a class="a-btn
                        m-pagination_btn-next"
                href="?page=23#pagination_content">
                  <span class="a-btn_icon a-btn_icon__on-right">{% include icons/right.svg %}</span>
                  Older
              </a>
              <form class="m-pagination_form"
                    action="#pagination_content">
                  <label class="m-pagination_label"
                        for="m-pagination_current-page">
                      Page
                      <span class="u-visually-hidden">
                          number 22 out
                      </span>
                      <input class="m-pagination_current-page"
                            id="m-pagination_current-page"
                            name="page"
                            type="number"
                            min="1"
                            max="149"
                            pattern="[0-9]*"
                            inputmode="numeric"
                            value="22">
                      of 149
                  </label>
                  <button class="a-btn
                                a-btn__link
                                m-pagination_btn-submit"
                          id="m-pagination_btn-submit"
                          type="submit">Go</button>
              </form>
          </nav>
        variation_description: ''
        variation_name: Default pagination
      - variation_code_snippet: >-
          <nav class="m-pagination" role="navigation" aria-label="Pagination">    <a
          class="a-btn              a-btn__disabled
          m-pagination_btn-prev">        <span class="a-btn_icon
          a-btn_icon__on-left">{% include icons/left.svg %}</span>        Newer
          </a>    <a class="a-btn              m-pagination_btn-next"
          href="?page=2#pagination_content">        Older        <span
          class="a-btn_icon a-btn_icon__on-right">{% include icons/right.svg
          %}</span>    </a>    <form class="m-pagination_form"
          action="#pagination_content">        <label
          class="m-pagination_label"
          for="m-pagination_current-page">            Page            <span
          class="u-visually-hidden">                number 1 out
          </span>            <input
          class="m-pagination_current-page"
          id="m-pagination_current-page"
          name="page"                   type="number"
          min="1"                   max="149"
          pattern="[0-9]*"                   inputmode="numeric"
          value="1">            of 149        </label>        <button
          class="a-btn                       a-btn__link
          m-pagination_btn-submit"
          id="m-pagination_btn-submit"                type="submit">Go</button>
          </form></nav>
        variation_description: ''
        variation_jinja_code_snippet: ''
        variation_name: First and last pages
use_cases: ''
content_guidelines: 'Tables with over 20 rows can be paired with pagination.'
behavior: >-
  `@bp-xs-max`: On small screens, the buttons display next to each other,
  stacked on top of the form


  <h3>Code</h3>

  To enable the component to jump directly to the paginated content, include an
  `id` on a wrapper of the paginated content (or an element directly above it),
  e.g., `id="pagination_content"`.


  When on the first or last page of paginated content, be sure to disable the
  appropriate buttons by adding the `a_btn__disabled` modifier and removing
  their `href` attribute.


  The cf-pagination component provides a responsive approach to multipage page
  navigation for Capital Framework.


  `cf-core`, `cf-buttons`, and `cf-icons` components are all dependencies of
  this component.


  NOTE: If you use `cf-pagination.less` directly, be sure to run the file
  through Autoprefixer, or your compiled Capital Framework CSS will not work
  perfectly in older browsers.
accessibility: ''
research: ''
last_updated: 2020-01-28T15:55:47.394Z
---
