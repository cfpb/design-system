---
layout: variation
section: components
status: Released
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <div id="pagination_content"></div>


          <!-- Paginated content here -->


          <nav class="m-pagination" role="navigation" aria-label="Pagination">
              <a class="a-btn
                        m-pagination__btn-prev"
                href="?page=21#pagination_content">
                  {% include icons/left.svg %}
                  <span>Newer</span>
              </a>

              <form class="m-pagination__form"
                    action="#pagination_content">
                  <label class="m-pagination__label">
                      Page
                      <span class="u-visually-hidden">
                          number 22 out
                      </span>
                      <input class="m-pagination__current-page"
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
                                 a-btn--link"
                          type="submit">Go</button>
              </form>

              <a class="a-btn
                        m-pagination__btn-next"
                href="?page=23#pagination_content">
                  <span>Older</span>
                  {% include icons/right.svg %}
              </a>
          </nav>
        variation_description: ''
        variation_name: Default pagination
        variation_implementation:
          To enable the component to jump directly to the
          paginated content, include an `id` on a wrapper of the paginated
          content (or an element directly above it), e.g.,
          `id="pagination_content"`.
        variation_specs: ''
      - variation_code_snippet: >-
          <nav class="m-pagination" role="navigation" aria-label="Pagination">

          <a class="a-btn a-btn--disabled m-pagination__btn-prev">

          {% include icons/left.svg %}<span>Newer</span></a>

          <form class="m-pagination__form" action="#pagination_content">
            <label class="m-pagination__label">  Page
              <span class="u-visually-hidden">number 1 out</span>
              <input class="m-pagination__current-page"
                name="page"
                type="number"
                min="1"
                max="149"
                pattern="[0-9]*"
                inputmode="numeric" value="1">
             of 149
            </label>
          <button class="a-btn a-btn--link" type="submit">Go</button> </form>

          <a class="a-btn m-pagination__btn-next" href="?page=2#pagination_content">
            <span>Older</span>
            {% include icons/right.svg %}
          </a>

          </nav>
        variation_description:
          When on the first or last page of paginated content, be
          sure to disable the appropriate buttons by adding the
          `a-btn--disabled` modifier and removing their `href` attribute.
        variation_jinja_code_snippet: ''
        variation_name: First and last pages
    variation_group_name: Standard pagination
    variation_group_description:
      Pagination consists of buttons to navigate through
      content, along with an inline form (input field, submit button) to enable
      users to navigate to specific pages by number.
guidelines: >-
  * Display 25 results per page.

  * If content is sorted by date, label the navigation buttons "Older" and "Newer"; otherwise, label the buttons "Previous" and "Next".

  * Tables with over 20 rows can be paired with pagination.
eyebrow: Components
title: Pagination
description: Pagination is used for splitting up content or data into several
  pages, so as to make it easier for users to consume information.
use_cases: ''
behavior: >-
  On small screens, the buttons display next to each other, stacked on top of
  the form (`@bp-xs-max`).


  | Above 600 px | Below 601 px |

  | ------------ | ------------ |

  | ![Pagination at breakpoints above 600 px](/design-system/images/uploads/screen-shot-2021-01-22-at-5.02.03-pm.png) | ![Pagination at breakpoints below 601 px](/design-system/images/uploads/screen-shot-2021-01-22-at-5.02.30-pm.png) |
accessibility: ''
related_items: ''
last_updated: 2020-01-28T15:55:47.394Z
research: ''
---
