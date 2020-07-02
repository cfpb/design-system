---
title: Notifications
layout: variation
section: components
status: Released
description: "This page describes notifications and form alerts, the latter
  which provide a light-touch alternative for inline form validation or feedback
  to a user’s input. The default (base) notification is also described; it is
  modified by scripting in production to update the state and message based on
  user input.  "
variation_groups:
  - variation_group_name: Types
    variations:
      - variation_code_snippet: |-
          <div class="m-notification
                      m-notification__visible
                      m-notification__success">
              {% include icons/approved-round.svg %}
              <div class="m-notification_content">
                  <div class="h4 m-notification_message">11 results</div>
              </div>
          </div>
        variation_description: >
          The success notification is for displaying when an operation has run
          as expected, such as returning the number of results in a search.
        variation_implementation: ""
        variation_name: Success notification
        variation_specs: |-
          * Border: 2 px, CFPB Green (#20aa3f)
          * Icon: 18 px, CFPB Green (#20aa3f)
          * Background color: Green 20 (#e2efd8)
          * Success icon and message should always appear below input field.
      - variation_name: Success notification (field-level)
        variation_code_snippet: >-
          
          <div class="m-form-field m-form-field__success">
              <input class="a-text-input a-text-input__success" type="text" placeholder="Placeholder text" id="form-input-success" aria-describedby="form-input-success_message">
              <div class="a-form-alert a-form-alert__success" id="form-input-success_message" role="alert">
                  {% include icons/approved-round.svg %}
                  <span class="a-form-alert_text">
                      This is an inline alert with a success state.
                  </span>
              </div>
          </div>
        variation_description: ""
        variation_specs: |-
          * Border: 2 px, CFPB Green (#20aa3f)
          * Minicon: 18 px, CFPB Green (#20aa3f)
          * Success minicon and message should always appear below input field
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
          The warning notification displays when an operation has run as
          expected, but doesn’t have the expected results, such as a search that
          returned no results.


          This notification can also be used to display additional critical information to a user before they submit a form, such as how their data will be used and protected or a reminder that they can’t edit their responses after submitting.
        variation_implementation: ""
        variation_name: Warning notification
        variation_specs: |-
          * Border: 2 px, Gold (#ff9e1b)
          * Background: Gold 20 (#fff0dd)
          * Minicon: 18px, Gold (#ff9e1b)
      - variation_name: Warning notification (field-level)
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__warning">
              <input class="a-text-input a-text-input__warning" type="text" placeholder="Placeholder text" id="form-input-warning" aria-describedby="form-input-warning_message">
              <div class="a-form-alert a-form-alert__warning" id="form-input-warning_message" role="alert">
                  {% include icons/warning-round.svg %}
                  <span class="a-form-alert_text">
                      This is an inline alert with a warning state.
                  </span>
              </div>
          </div>
        variation_description: ""
        variation_specs: |-
          * Border: 2 px, Gold (#ff9e1b)
          * Minicon: 18 px, Gold (#ff9e1b)
          * Warning minicon and message should always appear below input field
      - variation_code_snippet: |-
          <div class="m-notification
                      m-notification__visible
                      m-notification__error">
              {% include icons/error-round.svg %}
              <div class="m-notification_content">
                  <div class="h4 m-notification_message">Page not found.</div>
              </div>
          </div>
        variation_description: The error notification displays when an operation has not
          run as expected and encounters an error. Use after validating on the
          server side to call out input errors preventing form submission.
        variation_implementation: >-
          * For screen reader accessibility, include anchor links to the fields
          that

          need correction.


          * Place form-level alerts below the form title.


          * For field level notifications, the error minicon and message should

          always appear below the input field.
        variation_name: Error notification
        variation_specs: |-
          * Border: 2 px, Red (#d14124)
          * Background: Red 20 (#fff0dd)
          * Minicon: 18px, Red (#d14124)
      - variation_name: Error notification (field-level)
        variation_code_snippet: >-
          <div class="m-form-field m-form-field__error">
              <input class="a-text-input a-text-input__error" type="text" placeholder="Placeholder text" id="form-input-error" aria-describedby="form-input-error_message">
              <div class="a-form-alert a-form-alert__error" id="form-input-error_message" role="alert">
                  {% include icons/error-round.svg %}
                  <span class="a-form-alert_text">
                      This is an inline alert with an error state.
                  </span>
              </div>
          </div>
        variation_specs: |-
          * Border: 2 px, Red (#d14124)
          * Minicon: 18 px, Red (#d14124)
      - variation_code_snippet: >-
          <div class="m-notification
                      m-notification__visible">
              {% include icons/updating.svg %}
              <div class="m-notification_content">
                  <div class="h4 m-notification_message">The page is loading…</div>
              </div>
          </div>
        variation_description: The in-progress notification displays when something is
          happening on the page, such as a page loading notification as search
          results are found. Use [animated
          minicons](https://cfpb.github.io/design-system/foundation/iconography)
          to reassure the user that an action is functioning as intended.
        variation_name: In-progress notification
    variation_group_description: Types of notifications include success, warning, error, and in-progress.
  - variation_group_name: Default (base) notification
    variations:
      - variation_code_snippet: >-
          <div class="m-notification
                      m-notification__visible">
              {% include icons/information-round.svg %}
              <div class="m-notification_content">
                  <div class="h4 m-notification_message">A default notification</div>
              </div>
          </div>


          <br>


          <div class="m-notification
                      m-notification__visible">
              {% include icons/information-round.svg %}
              <div class="m-notification_content">
                  <div class="h4 m-notification_message">A default notification</div>
                  <p class="m-notification_explanation">
                      You can also add an explanation to the notification.
                  </p>
              </div>
          </div>


          <br>


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
          The default notification creates the base for the message that is
          often hidden and empty, but is modified by scripting in production to
          update the state and message based on user input.


          If your notification requires further explanation, include it in a paragraph following the main message.


          Notifications are hidden by default; you can toggle their visibility by adding or removing the `m-notification__visible` class to the base element.
        variation_implementation: >-
          Notifications are hidden by default; you can toggle their visibility
          by

          adding or removing the `m-notification__visible` class to the base

          element.


          If your notification requires links, include them below the message or

          explanation as a `m-list` unordered list.
        variation_name: ""
use_cases: ""
content_guidelines: ""
behavior: >-
  ### Placement


  * Form-level alerts should appear below the form title. 


  * Field-level alerts (minicon and message) should always appear below the input field.  


  ### Validation


  Where possible, display formatting errors immediately using client-side validation so the user doesn’t have to wait until submitting to see what went wrong (this is especially frustrating if the information the user enters the first time around is not cached on submit and they have to fill out all the fields again from scratch). If letters are entered in a date field, if an email address is missing the “@” sign, let the user know right away by showing a field-level error on blur.


  That said, it’s a good idea to always validate on the server side even if you use client-side validation for formatting checks. That’s because JavaScript validation may not work on all clients; JavaScript errors could occur no matter the client; and JS validation can easily be bypassed, which raises security concerns.


  In general, the best practice for server-side validation is to mark errors with both form-level and field-level errors.
accessibility: >-
  * For screen reader accessibility, form-level errors should include anchor
  links to the problem field in question.

  * Place form-level alerts below the form title.

  * In general, use distinct icons, contrasting colors, prominent placement, and text to indicate errors. Don’t rely on just one method, as users can have many different accessibility needs (color blind users, visually impaired users, users with motor control issues, etc.).
research: ""
related_items: "* [Notifications
  variables](https://cfpb.github.io/design-system/development/variables#notific\
  ations)"
last_updated: 2020-01-28T15:55:47.394Z
secondary_section: Alerts
---
