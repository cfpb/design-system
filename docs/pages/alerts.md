---
title: Alerts
layout: variation
section: components
status: Released
description: Alerts draw a user's attention to a change in the status of a form
  or page. Form-level alerts reflect a user or system action and appear below
  the form title. Field-level alerts appear inline with input fields and can
  highlight successful submissions, errors that need to be corrected, or details
  to know before submitting a form.
variation_groups:
  - variation_group_name: Form-level alerts
    variations:
      - variation_is_deprecated: false
        variation_name: Information
        variation_description:
          The information alert is the base alert type without any
          modifiers. If your alert message requires further explanation, include
          that content in a paragraph following the main message.
        variation_code_snippet: >-
          <div class="m-notification
                      m-notification--visible">
              {% include icons/information-round.svg %}
              <div class="m-notification__content">
                  <div class="m-notification__message">Information alert</div>
              </div>
          </div>


          <br>


          <div class="m-notification
                      m-notification--visible">
              {% include icons/information-round.svg %}
              <div class="m-notification__content">
                  <div class="m-notification__message">Information alert</div>
                  <p class="m-notification__explanation">
                      You can also add an explanation to the alert.
                  </p>
              </div>
          </div>


          <br>


          <div class="m-notification
                      m-notification--visible">
              {% include icons/information-round.svg %}
              <div class="m-notification__content">
                  <div class="m-notification__message">Information alert</div>
                  <p class="m-notification__explanation">
                      This is the explanation of the alert.
                  </p>
                  <ul class="m-list m-list--links">
                      <li class="m-list__item">
                          <a class="a-link a-link--jump" href="/">
                            <span class="a-link__text">
                              This is a link below the explanation
                            </span>
                          </a>
                      </li>
                      <li class="m-list__item">
                          <a class="a-link a-link--jump" href="/">
                            <span class="a-link__text">
                              This is an external link {% include icons/external-link.svg %}
                            </span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
        variation_implementation:
          Alerts are hidden by default; you can toggle their
          visibility by adding or removing the `m-notification--visible` class
          to the base element.
      - variation_code_snippet: |-
          <div class="m-notification
                      m-notification--visible
                      m-notification--success">
              {% include icons/approved-round.svg %}
              <div class="m-notification__content">
                  <div class="m-notification__message">11 results</div>
                  <p class="m-notification__explanation">
                      This is an optional explanation of the success message.
                  </p>
                  <ul class="m-list m-list--links">
                      <li class="m-list__item">
                          <a class="a-link a-link--jump" href="/">
                            <span class="a-link__text">
                              This is an external link {% include icons/external-link.svg %}
                            </span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
        variation_description:
          The success alert displays when an operation has run as
          expected, such as returning the number of results in a search.
        variation_implementation: ''
        variation_name: Success
        variation_specs: ''
      - variation_code_snippet: |-
          <div class="m-notification
                      m-notification--visible
                      m-notification--warning">
              {% include icons/warning-round.svg %}
              <div class="m-notification__content">
                  <div class="m-notification__message">No results found.</div>
                  <p class="m-notification__explanation">
                      This is an optional explanation of the warning.
                  </p>
                  <ul class="m-list m-list--links">
                      <li class="m-list__item">
                          <a class="a-link a-link--jump" href="/">
                            <span class="a-link__text">
                              This is an external link {% include icons/external-link.svg %}
                            </span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
        variation_description:
          The warning alert displays when an operation has run as
          expected, but doesn’t have the expected results, such as a search that
          returned no result. This alert can also be used to display additional
          critical information to a user before they submit a form, such as how
          their data will be used and protected or a reminder that they can’t
          edit their responses after submitting.
        variation_implementation: ''
        variation_name: Warning
        variation_specs: ''
      - variation_code_snippet: |-
          <div class="m-notification
                      m-notification--visible
                      m-notification--error">
              {% include icons/error-round.svg %}
              <div class="m-notification__content">
                  <div class="m-notification__message">Page not found.</div>
                  <p class="m-notification__explanation">
                      This is an optional explanation of the error.
                  </p>
                  <ul class="m-list m-list--links">
                      <li class="m-list__item">
                          <a class="a-link a-link--jump" href="/">
                            <span class="a-link__text">
                              This is an external link {% include icons/external-link.svg %}
                            </span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
        variation_description:
          The error alert displays when an operation has not run as
          expected and encounters an error. Use after validating on the server
          side to call out input errors preventing form submission.
        variation_implementation: >-
          * For screen reader accessibility, include anchor links to the fields
          that
            need correction.
          * Place form-level alerts below the form title.

          * For field level alerts, the error icon and message should
            always appear below the input field.
        variation_name: Error
        variation_specs: ''
      - variation_code_snippet: >-
          <div class="m-notification
                      m-notification--visible">
              {% include icons/updating.svg %}
              <div class="m-notification__content">
                  <div class="m-notification__message">The page is loading…</div>
              </div>
          </div>
        variation_description: The in-progress alert displays when something is
          happening on the page, such as a page loading as search results are
          found. Use [animated
          icons](https://cfpb.github.io/design-system/foundation/iconography) to
          reassure the user that an action is functioning as intended.
        variation_name: In-progress
    variation_group_description: ''
  - variation_group_name: Field-level alerts
    variations:
      - variation_is_deprecated: false
        variation_name: Success
        variation_code_snippet: >
          <div class="m-form-field">
              <input class="a-text-input a-text-input--success" type="text" placeholder="Input text" id="form-input-success" aria-describedby="form-input-success_message">
              <div class="a-form-alert a-form-alert--success" id="form-input-success_message" role="alert">
                  {% include icons/approved-round.svg %}
                  <span class="a-form-alert__text">
                      This is a field-level alert with a success status.
                  </span>
              </div>
          </div>
        variation_code_snippet_rendered: ''
        variation_specs: ''
      - variation_is_deprecated: false
        variation_name: Warning
        variation_code_snippet: >-
          <div class="m-form-field">
              <input class="a-text-input a-text-input--warning" type="text" placeholder="Input text" id="form-input-warning" aria-describedby="form-input-warning_message">
              <div class="a-form-alert a-form-alert--warning" id="form-input-warning_message" role="alert">
                  {% include icons/warning-round.svg %}
                  <span class="a-form-alert__text">
                      This is a field-level alert with a warning status.
                  </span>
              </div>
          </div>
        variation_specs: ''
      - variation_is_deprecated: false
        variation_name: Error
        variation_code_snippet: >-
          <div class="m-form-field">
              <input class="a-text-input a-text-input--error" type="text" placeholder="Input text" id="form-input-error" aria-describedby="form-input-error_message"><div class="a-form-alert a-form-alert--error" id="form-input-error_message" role="alert">
                  {% include icons/error-round.svg %}
                  <span class="a-form-alert__text">
                      This is a field-level alert with an error status.
                  </span>
          </div>
        variation_specs: ''
    variation_group_description:
      Field-level alerts reflect validation status and
      include success, warning, and error. Field-level alerts (icon and message)
      should always appear below the input field.
guidelines: ''
eyebrow: Components
use_cases: ''
accessibility: >-
  * For screen reader accessibility, form-level errors should include anchor
  links to the problem field in question.

  * Place form-level alerts below the form title.

  * In general, use distinct icons, contrasting colors, prominent placement, and text to indicate errors. Don’t rely on just one method, as users can have many different accessibility needs (color blind users, visually impaired users, users with motor control issues, etc.).
related_items: ''
redirect_from:
  - /notifications
  - /components/notifications
last_updated: 2020-01-28T15:55:47.394Z
behavior: >-
  ### Placement


  * Form-level alerts should appear below the form title.

  * Field-level alerts (icon and validation status message) should always appear below the input field.


  ### Validation


  Where possible, display formatting errors immediately using client-side validation so the user doesn’t have to wait until submitting to see what went wrong (this is especially frustrating if the information the user enters the first time around is not cached on submit and they have to fill out all the fields again from scratch). If letters are entered in a date field, if an email address is missing the “@” sign, let the user know right away by showing a field-level error on blur.


  That said, it’s a good idea to always validate on the server side even if you use client-side validation for formatting checks. That’s because JavaScript validation may not work on all clients; JavaScript errors could occur no matter the client; and JS validation can easily be bypassed, which raises security concerns.


  In general, the best practice for server-side validation is to mark errors with both form-level and field-level errors.
research: ''
---
