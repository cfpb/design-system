---
title: Email signup forms
layout: variation
section: patterns
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <div class="o-email-signup">
              <header class="m-slug-header">
                  <h2 class="m-slug-header__heading">
                      Buying a House?
                  </h2>
              </header>
              <p>
                  Put your sign-up text here for the users.
              </p>
              <form class="o-form" method="POST" action="#">
                  <div class="m-notification">
                    <svg xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg cf-icon-svg--approved-round" viewBox="0 0 17 20.4"><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"/></svg>
                      <div class="m-notification__content">
                          This is for notifications after the user submits e-mail address.
                      </div>
                  </div>
                  <div class="m-form-field">
                      <label class="a-label a-label--heading" for="email_2">
                      Email address
                      </label>
                      <input class="a-text-input a-text-input--full" id="email_2" name="email" type="email" placeholder="mail@example.com" required="">
                  </div>
                  <div class="o-email-signup__buttons">
                      <button class="a-btn">Sign up</button>
                      <a class="a-btn a-btn--link" href="#" target="_blank"
                      rel="noopener noreferrer">
                      See Privacy Act statement
                      </a>
                  </div>
              </form>
          </div>
        variation_description: ''
        variation_name: Email signup form
        variation_specs: ''
        variation_code_snippet_rendered: >-
          <div class="o-well" style="max-width: 370px">
              <div class="o-email-signup">
                  <header class="m-slug-header">
                      <h2 class="m-slug-header__heading">
                          Buying a House?
                      </h2>
                  </header>
                  <p>
                      Put your sign-up text here for the users.
                  </p>
                  <form class="o-form" method="POST" action="#" onclick="return false;">
                      <div class="m-notification">
                            <svg xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg cf-icon-svg--approved-round" viewBox="0 0 17 20.4"><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"/></svg>                          <div class="m-notification__content">
                              This is for notifications after the user submits e-mail address.
                          </div>
                      </div>
                      <div class="m-form-field">
                          <label class="a-label a-label--heading" for="email_2">
                          Email address
                          </label>
                          <input class="a-text-input a-text-input--full" id="email_2" name="email" type="email" placeholder="mail@example.com" required="">
                      </div>
                      <div class="o-email-signup__buttons">
                          <button class="a-btn">Sign up</button>
                          <a class="a-btn a-btn--link" href="#" target="_blank" rel="noopener noreferrer">
                          See Privacy Act statement
                          </a>
                      </div>
                  </form>
              </div>
          </div>
        variation_implementation: ''
    variation_group_name: Types
    variation_group_description: ''
guidelines: >-
  ### Design guidelines


  Email signup forms can be placed in a page’s sidebar or as an inset in the page’s main content.


  #### Sidebar placement


  The most common placement for the email signup form is in the sidebar. This placement is possible on [Learn](https://cfpb.github.io/design-system/pages/learn-pages) and [Sublanding](https://cfpb.github.io/design-system/pages/sublanding-pages) pages. Because [Browse](https://cfpb.github.io/design-system/pages/browse-pages) pages do not have a sidebar, the email signup form can be placed in the prefooter at the bottom of the page.


  #### Inset placement


  An inset email signup form appears in the main content area of a page and is possible on [Learn](https://cfpb.github.io/design-system/pages/learn-pages) and [Sublanding](https://cfpb.github.io/design-system/pages/sublanding-pages) pages. Consider using an inset email signup form when the email call to action (CTA) is more important to the purpose of the page than the sidebar or prefooter placement reflects. When using an inset email signup form, ensure its placement on the page does not interfere with the primary page goal. Users respond better to follow-on requests that happen after their primary goal has been met.


  ### Content guidelines


  The email signup form is comprised of a heading, description, form field for the user to enter their email address, link to a privacy policy statement, and signup button.


  * **Heading:** As a default, use "Email updates" for the heading. If using a custom heading, provide a strong CTA that clearly sets expectations for what a user will receive when signing up. 

  * **Description:** Briefly clarify what kind of information will be in the emails with a focus on the value users will receive from the emails. 

  * **Form field:** Include an "Email address" label heading, use "mail@example.com" helper text, and set the form field as required. 

  * **Signup button:** Use standard "Sign up" button text. 

  * **Privacy policy link:** Use standard "See Privacy Act statement" text.
eyebrow: Forms
status: Released
description: Email signups forms allow users to stay engaged on a specific topic
  or content type. They are used to add individual email addresses to a specific
  mailing list that is relevant to the content on the page or the section it is
  contained within.
use_cases: ''
behavior: ''
accessibility: ''
last_updated: 2020-01-28T15:55:47.394Z
research: ''
---
