---
title: Pagination
layout: variation
section: patterns
status: Released
description: Pagination is used to help split up long sets of data or content
  into shorter pieces, so as to make it easier for users to consume information.
variation_groups:
  - variations:
      - variation_code_snippet: >-
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
                href="?page=23#pagination_content">Older
                  <span class="a-btn_icon a-btn_icon__on-right">{% include icons/right.svg %}</span>

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
        variation_description: ""
        variation_name: Default pagination
        variation_implementation: To enable the component to jump directly to the
          paginated content, include an `id` on a wrapper of the paginated
          content (or an element directly above it), e.g.,
          `id="pagination_content"`.
        variation_specs: "[Color and sizing
          variables](https://cfpb.github.io/design-system/components/variables#\
          pagination)"
      - variation_code_snippet: >-
          <nav class="m-pagination" role="navigation"
          aria-label="Pagination">

          <a class="a-btn  a-btn__disabled m-pagination_btn-prev">

          <span class="a-btn_icon a-btn_icon__on-left">{% include icons/left.svg %}</span>        Newer </a>


          <a class="a-btn m-pagination_btn-next" href="?page=2#pagination_content">        Older

          <span class="a-btn_icon a-btn_icon__on-right">{% include icons/right.svg %}</span>

          </a>


          <form class="m-pagination_form" action="#pagination_content">

          <label class="m-pagination_label" for="m-pagination_current-page">  Page

          <span class="u-visually-hidden">                number 1 out </span>

          <input class="m-pagination_current-page" id="m-pagination_current-page" name="page"                   type="number" min="1"                   max="149" pattern="[0-9]*"                   inputmode="numeric" value="1">            of 149        </label>        <button class="a-btn                       a-btn__link m-pagination_btn-submit" id="m-pagination_btn-submit"                type="submit">Go</button> </form>

          </nav>
        variation_description: When on the first or last page of paginated content, be
          sure to disable the appropriate buttons by adding the
          `a_btn__disabled` modifier and removing their `href` attribute.
        variation_jinja_code_snippet: ""
        variation_name: First and last pages
    variation_group_name: Standard pagination
    variation_group_description: Pagination consists of “Older” and “Newer” links,
      styled as buttons, and an inline form (input, submit button) that allows
      users to navigate to specific pages by number. When appropriate, the
      buttons may be labeled “Previous” and “Next”.
use_cases: ""
guidelines: Tables with over 20 rows can be paired with pagination.
behavior: >+
  `@bp-xs-max`: On small screens, the buttons display next to each other,
  stacked on top of the form

accessibility: ""
research: ""
related_items: "* [Pagination
  variables](https://cfpb.github.io/design-system/development/variables#paginat\
  ion-1)"
last_updated: 2020-01-28T15:55:47.394Z
secondary_section: Navigation
---
