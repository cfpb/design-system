---
layout: variation
section: components
status: Released
description: Banner notifications communicate high-priority information about
  the state or status of page content. Banner notifications inform users of
  important information that is not specific to an immediate task. They are
  positioned at the top of the page content area, and span the full width.
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <div class="o-banner">
              <div class="wrapper wrapper--match-content">
                  <div class="m-notification
                              m-notification--visible
                              m-notification--warning">
                      {% include icons/warning-round.svg %}
                      <div class="m-notification__content">
                          <div class="m-notification__message">Warning banner with a notification</div>
                          <p class="m-notification__explanation">
                              An optional paragraph of text can be added to explain the purpose of the warning banner.
                          </p>
                          <ul class="m-list m-list--links">
                              <li class="m-list__item">
                                  <a class="a-link a-link--jump" href="#">
                                      <span class="a-link__text">
                                        A link can be added
                                      </span>
                                  </a>
                              </li>
                              <li class="m-list__item">
                                  <a class="a-link a-link--jump" href="#">
                                    <span class="a-link__text">
                                      Multiple links are supported
                                    </span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        variation_description:
          The warning banner is used to display high-priority
          system or product level notifications that are not specific to an
          immediate task.
        variation_name: Warning banner
      - variation_is_deprecated: false
        variation_code_snippet: >-
          <div class="o-banner o-banner--dark">
              <div class="wrapper wrapper--match-content">
                  <div class="m-notification
                              m-notification--warning
                              m-notification--visible">
                      {% include icons/information-round.svg %}
                      <div class="m-notification__content">
                          <div class="m-notification__message">
                              Archived content banner with notification
                          </div>
                          <p class="m-notification__explanation">
                              An optional paragraph of text can be added to explain the purpose of the archived content banner.
                          </p>
                          <ul class="m-list m-list--links">
                              <li class="m-list__item">
                                  <a class="a-link a-link--jump" href="#test-link">
                                      <span class="a-link__text">
                                          Links can be added
                                      </span>
                                  </a>
                              </li>
                              <li class="m-list__item">
                                  <a class="a-link a-link--jump" href="#">
                                      <span class="a-link__text">
                                          Visited links are also white
                                      </span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        variation_name: Archived content banner
        variation_description:
          The archived content banner is used to identify website
          pages that are outdated and should no longer be referenced for
          guidance. These pages may have historical value or significance to
          researchers, historians, and the public.
    variation_group_name: Types
guidelines: Banner notifications are positioned at the top of the page content
  area and span the full width.
eyebrow: Components
use_cases: Use the banner notification to communicate important information
  about the state or status of page content or to highlight high-priority system
  or product level information. Use the inline notification instead when calling
  out specific page content or when alerting users to information that is
  specific to an immediate task.
related_items: "[N﻿otifications](https://cfpb.github.io/design-system/component\
  s/notifications)"
redirect_from:
  - /components/banners
  - /banners
last_updated: 2020-01-28T15:55:47.394Z
title: Banner (notification)
behavior: ''
---
