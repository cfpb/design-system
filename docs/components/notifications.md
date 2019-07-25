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
    variation_name: Default state
  - variation_code_snippet: <marquee>Some sample code will eventually show up here.</marquee>
    variation_description: The secondary state is very secondary.
    variation_name: Secondary state
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

