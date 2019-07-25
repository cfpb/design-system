---
title: Notifications
permalink: /components/notifications
layout: component
collection_name: components
section: components
status: Proposed
intro: >-
  This page is under active development. Information is being moved into it from
  these pages:


  *
  https://cfpb.github.io/design-manual/page-components/form-fields.html#notifications

  * https://cfpb.github.io/capital-framework/components/cf-notifications/
variations:
  - variation_code_snippet: |-
      <div class="m-notification
                  m-notification__visible">
          {% include icons/information-round.svg %}
          <div class="m-notification_content">
              <div class="h4 m-notification_message">A default notification</div>
          </div>
      </div>
    variation_description: >-
      The default notification creates the base for the message that is often
      hidden and empty, but is modified by scripting in production to update the
      state and message based on user input.
    variation_name: Default notification
  - variation_code_snippet: |-
      <div class="m-notification
                  m-notification__visible">
          {% include icons/information-round.svg %}
          <div class="m-notification_content">
              <div class="h4 m-notification_message">A default notification</div>
              <p class="m-notification_explanation">
                  This is the explanation of the notification.
              </p>
          </div>
      </div>
    variation_description: >-
      If your notification requires further explanation, include it in a
      paragraph following the main message.
    variation_name: Default notification with explanation
  - variation_code_snippet: |-
      <div class="m-notification
                  m-notification__visible">
          {% include icons/information-round.svg %}
          <div class="m-notification_content">
              <div class="h4 m-notification_message">A default notification</div>
              <ul class="m-list m-list__links">
                  <li class="m-list_item">
                      <a class="m-list_link" href="/">
                          This is a link below the message
                      </a>
                  </li>
                  <li class="m-list_item">
                      <a class="m-list_link" href="/">
                          This is another link
                      </a>
                  </li>
              </ul>
          </div>
      </div>

      <br /> <!-- Spacing between two notification examples -->

      <div class="m-notification
                  m-notification__visible">
          {% include icons/information-round.svg %}
          <div class="m-notification_content">
              <div class="h4 m-notification_message">A default notification</div>
              <p class="m-notification_explanation">
                  This is the explanation of the notification.
              </p>
              <ul class="m-list m-list__links">
                  <li class="m-list_item">
                      <a class="m-list_link" href="/">
                          This is a link below the explanation
                      </a>
                  </li>
                  <li class="m-list_item">
                      <a class="m-list_link" href="/">
                          This is an external link {% include icons/external-link.svg %}
                      </a>
                  </li>
              </ul>
          </div>
      </div>
    variation_description: >-
      If your notification requires links, include them below the message or
      explanation as a `m-list` unordered list.
    variation_name: Default notification with links
  - variation_code_snippet: |-
      <div class="m-notification
                  m-notification__visible">
          {% include icons/update.svg %}
          <div class="m-notification_content">
              <div class="h4 m-notification_message">The page is loading…</div>
          </div>
      </div>
    variation_description: >-
      The action notification displays when something is happening on the page,
      such as a page loading notification as search results are found. Use
      [animated
      minicons](https://cfpb.github.io/design-system/foundation/iconography) to
      reassure the user that an action is functioning as intended.
    variation_name: Action notification
  - variation_code_snippet: |-
      <div class="m-notification
                  m-notification__visible
                  m-notification__success">
          {% include icons/approved-round.svg %}
          <div class="m-notification_content">
              <div class="h4 m-notification_message">11 results</div>
          </div>
      </div>
    variation_description: >-
      The success notification is for displaying when an operation has run as
      expected, such as returning the number of results in a search.
    variation_name: Success notification
  - variation_code_snippet: |-
      <div class="m-notification
                  m-notification__visible
                  m-notification__warning">
          {% include icons/warning-round.svg %}
          <div class="m-notification_content">
              <div class="h4 m-notification_message">No results found.</div>
          </div>
      </div>
    variation_description: >-
      The warning notification is for displaying when an operation has run as
      expected, but doesn’t have the expected results, such as a search that
      returned no results.
    variation_name: Warning notification
usage: >-
  **Use cases**


  Phasellus molestie magna non est bibendum non venenatis nisl tempor.
  Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.
  Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at
  risus.


  **Content guidelines**


  Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a
  porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget
  odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus
  vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis
  aliquet egestas purus in.
accessibility: >-
  For screen reader accessibility, form-level errors should include anchor links
  to the problem field in question. In general, use distinct icons, contrasting
  colors, prominent placement, and text to indicate errors. Don’t rely on just
  one method, as users can have many different accessibility needs (color blind
  users, visually impaired users, users with motor control issues, etc.).
research: ''
---

