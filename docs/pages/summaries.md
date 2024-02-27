---
layout: variation
section: components
status: Released
variation_groups:
  - variation_group_name: Summaries
    variations:
      - variation_name: Summary (on desktop)
        variation_code_snippet: >-
          <div class="o-summary">
              <div class="o-summary__content">
                  Resize me smaller if the read more button is absent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a href="#">Duis</a>.
              </div>

              <button class="o-summary__btn">
                  Read full answer
                  {% include icons/plus-round.svg %}
              </button>
          </div>
      - variation_name: Summary (long amounts of mixed content)
        variation_code_snippet: >-
          <div class="o-summary">
              <div class="o-summary__content">
                  <p>
                  Resize me smaller if the read more button is absent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a href="#">Duis</a> aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a href="#">Duis</a> aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>

                  <p>
                  <ul>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                  </ul>
                  </p>
              </div>

              <button class="o-summary__btn">
                  Read full answer
                  {% include icons/plus-round.svg %}
              </button>
          </div>
      - variation_name: Summary on Mobile
        variation_code_snippet: >-
          <div class="o-summary o-summary--mobile">
            <div class="o-summary__content">
              Resize me to mobile if the read more button is absent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <button class="o-summary__btn">
                Read full answer
                {% include icons/plus-round.svg %}
            </button>
          </div>
        variation_description:
          Adding the `o-summary--mobile` modifier makes the summary
          behavior only show up on a mobile (narrow) page width.
      - variation_name: Summary Minimal
        variation_code_snippet: >-
          <div class="o-summary-minimal">
            <div class="o-summary-minimal__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <button class="o-summary-minimal__btn">
                <span class="o-summary-minimal__cue-open">
                    Show
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-summary-minimal__cue-close">
                    Hide
                    {% include icons/minus-round.svg %}
                </span>
            </button>
          </div>
        variation_description:
          This component provides a more inconspicous button, which stays
          at the bottom of the summary when expanded.
eyebrow: Components
title: Summaries
description: Summary components hides content over a certain height. When the
  hidden content is shown it can't be reverted to the summary until the page is
  reloaded.
last_updated: 2019-12-16T18:43:19.784Z
---
