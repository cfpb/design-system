---
layout: variation
section: components
description: Banner notifications alert users as to the state of content on a
  page. Banner notifications appear at the top of the page content just under
  the header bar and span the full width of the page. When used on a webpage,
  banner notifications highlight high priority information about the status of
  the content on the page.
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <div class="o-banner">
              <div class="wrapper wrapper__match-content">
                  <div class="m-notification
                              m-notification__visible
                              m-notification__warning">
                      {% include icons/information-round.svg %}
                      <div class="m-notification_content">
                          <div class="h4 m-notification_message">A default banner with a notification</div>
                          <p class="m-notification_explanation">
                              An optional paragraph of text can be added to explain the purpose of the banner.
                          </p>
                          <ul class="m-list m-list__links">
                              <li class="m-list_item">
                                  <a class="m-list_link" href="#">
                                      A link can be added
                                  </a>
                              </li>
                              <li class="m-list_item">
                                  <a class="m-list_link" href="#">
                                      Multiple links are supported
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        variation_description: The warning banner is used to display system or product
          level notifications that are not specific to a task.
        variation_name: Warning banner
      - variation_is_deprecated: false
        variation_code_snippet: >-
          <div class="o-banner o-banner__dark">
              <div class="wrapper wrapper__match-content">
                  <div class="m-notification
                              m-notification__warning
                              m-notification__visible">
                      {% include icons/information-round.svg %}
                      <div class="m-notification_content">
                          <div class="h4 m-notification_message">
                              A dark-themed banner with a notification
                          </div>
                          <p class="m-notification_explanation">
                              An optional paragraph of text can be added to explain the purpose of the banner.
                          </p>
                          <ul class="m-list m-list__links">
                              <li class="m-list_item">
                                  <a class="m-list_link" href="#test-link">
                                      Links can be added
                                  </a>
                              </li>
                              <li class="m-list_item">
                                  <a class="m-list_link" href="#">
                                      Visited links appear gray instead of white
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        variation_name: Archived content banner
        variation_description: The archived content banner is used to identify website
          pages that are outdated and should no longer be referenced for
          guidance. These pages may have historical value or significance to
          researchers, historians, and the public.
    variation_group_name: Types
eyebrow: Alerts
use_cases: >-
  Banner notifications alert users as to the state of content on a page. Banner
  notifications appear at the top of the page content just under the header bar
  and span the full width of the page. When used on a webpage, banner
  notifications highlight important information about the status of the content
  on the page. 


  ### When to use


  Use the banner notification for instances where communicating the status of webpage content is of primary importance


  ### When other options are better


  Use the in-page (or inline) notification when calling out important page content or alerting users to information that is relevant to the task at hand
last_updated: 2020-01-28T15:55:47.394Z
title: Banner
status: Proposed
---
