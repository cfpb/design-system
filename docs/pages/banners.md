---
layout: variation
section: components
status: Proposed
variation_groups:
  - variations:
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
                              Archived content banner with notification
                          </div>
                          <p class="m-notification_explanation">
                              An optional paragraph of text can be added to explain the purpose of the archived content banner.
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
      - variation_is_deprecated: false
        variation_name: US gov banner
        variation_description: The US gov banner identifies official websites of
          government organizations in the United States. It helps visitors
          understand whether a website is official and secure.
        variation_code_snippet: |-
          <div class="m-global-eyebrow">
              <div class="a-tagline">
                  <span class="u-usa-flag"></span>
                  <div>
                      An official website of the
                      <span class="u-nowrap">United States government</span>
                  </div>
              </div>
          </div>
      - variation_code_snippet: >-
          <div class="o-banner">
              <div class="wrapper wrapper__match-content">
                  <div class="m-notification
                              m-notification__visible
                              m-notification__warning">
                      {% include icons/warning-round.svg %}
                      <div class="m-notification_content">
                          <div class="h4 m-notification_message">Warning banner with a notification</div>
                          <p class="m-notification_explanation">
                              An optional paragraph of text can be added to explain the purpose of the warning banner.
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
        variation_description: The warning banner is used to display high-priority
          system or product level notifications that are not specific to an
          immediate task.
        variation_name: Warning banner
    variation_group_name: Types
eyebrow: Alerts
title: Banners
description: Banners appear at the top of the page and span the full width. They
  can communicate high-priority information about the state or status of page
  content or identify that a website is official and secure.
use_cases: Use the banner to communicate important information that is not
  related to a specific task. Use the
  [notification](https://cfpb.github.io/design-system/components/notifications#information-base-notification-1)
  instead when calling out specific page content or when alerting users as to
  information that is relevant to the immediate task.
behavior: ""
related_items: "[N﻿otifications](https://cfpb.github.io/design-system/component\
  s/notifications)"
last_updated: 2020-01-28T15:55:47.394Z
---
