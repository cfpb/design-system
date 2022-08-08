---
title: Banners
layout: variation
section: components
secondary_section: Alerts
status: Beta
description: This component provides banner boxes at the top of a page's
  content. This is similar to a notification, but is intended to be full width.
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
                                  <a class="m-list_link" href="/">
                                      A link can be added
                                  </a>
                              </li>
                              <li class="m-list_item">
                                  <a class="m-list_link" href="/">
                                      Multiple links are supported
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        variation_description: ""
        variation_name: Default banner
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
                      </div>
                  </div>
              </div>
          </div>
        variation_name: Dark banner
    variation_group_name: ""
last_updated: 2020-01-28T15:55:47.394Z
---
