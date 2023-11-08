---
title: Banner (notification)
layout: variation
section: components
status: Released
description: Banner notifications communicate high-priority information about
  the state or status of page content. Banner notifications inform users of
  important information that is not specific to an immediate task.
variation_groups:
  - variations:
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
    variation_group_name: Types
use_cases: Use the banner notification to communicate important information
  about the state or status of page content or to highlight high-priority system
  or product level information. Use the inline notification instead when calling
  out specific page content or when alerting users to information that is
  specific to an immediate task.
guidelines: Banner notifications are positioned at the top of the page content
  area and span the full width.
eyebrow: Components
behavior: ""
related_items: "[N﻿otifications](https://cfpb.github.io/design-system/component\
  s/notifications)"
last_updated: 2020-01-28T15:55:47.394Z
---
