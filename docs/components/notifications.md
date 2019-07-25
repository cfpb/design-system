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
  - variation_code_snippet: <marquee>Some sample code will eventually show up here.</marquee>
    variation_description: >-
      Where possible, display formatting errors immediately using client-side
      validation so the user doesn’t have to wait until submitting to see what
      went wrong (this is especially frustrating if the information the user
      enters the first time around is not cached on submit and they have to fill
      out all the fields again from scratch). If letters are entered in a date
      field, if an email address is missing the “@” sign, let the user know
      right away by showing a field-level error on blur.


      That said, it’s a good idea to always validate on the server side even if
      you use client-side validation for formatting checks. That’s because
      JavaScript validation may not work on all clients; JavaScript errors could
      occur no matter the client; and JS validation can easily be bypassed,
      which raises security concerns.


      In general, the best practice for server-side validation is to mark errors
      with both form-level and field-level errors.
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

