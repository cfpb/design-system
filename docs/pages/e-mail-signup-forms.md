---
title: E-mail signup forms
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
                      <a class="a-btn a-btn--link a-btn--secondary" href="#" target="_blank" rel="noopener noreferrer">
                      See Privacy Act statement
                      </a>
                  </div>
              </form>
          </div>
        variation_description:
          When implemented into a side bar, the h2 includes CFPB
          standard top green border.
        variation_name: Sidebar email sign up
        variation_specs: |-
          * Heading: H5 slug
          * Body copy: Avenir paragraph

          ![](/design-system/images/uploads/emailsignup_style_mockup.png)
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
                          <a class="a-btn a-btn--link a-btn--secondary" href="#" target="_blank" rel="noopener noreferrer">
                          See Privacy Act statement
                          </a>
                      </div>
                  </form>
              </div>
          </div>
        variation_implementation: ''
      - variation_code_snippet: ''
        variation_description: >-
          The inset email signup module is a variation on the main email signup
          that can be used in the body content of
          [Learn](https://cfpb.github.io/design-system/pages/learn-pages) and
          [Browse](https://cfpb.github.io/design-system/pages/browse-pages)
          pages. It should be used when the email CTA is more important to the
          purpose of the page than the sidebar or prefooter placement reflects.


          ![Inset email signup](/design-system/images/uploads/2e07e378-4adf-11e8-96a7-67d2534eec85.png)


          #### When to use inset email signup


          * On [Learn](https://cfpb.github.io/design-system/pages/learn-pages) pages, only use the inset email module when signing up for the email list is a primary user goal for the page, for example job seekers signing up for job announcements.

          * On [Browse](https://cfpb.github.io/design-system/pages/browse-pages) pages, use the inset email module when feedback modules or other prefooter content competes with the prefooter email signup CTA, or when signing up for the email list is a primary user goal.


          #### When other options are better


          * On [Learn](https://cfpb.github.io/design-system/pages/learn-pages) pages when we want to encourage visitors to sign up for an email list but the list itself is not a primary user goal, use the standard sidebar email signup.

          * On [Browse](https://cfpb.github.io/design-system/pages/browse-pages) pages, when email signups are not a primary user goal, and the prefooter/end of page content has no other CTAs to compete with the email signup, use the standard prefooter email signup.
        variation_name: Inset email sign up
        variation_specs: |-
          * Heading: H3
          * Body copy: Avenir paragraph
        variation_code_snippet_rendered: ''
    variation_group_name: Types
    variation_group_description: >-
      The email sign up form is comprised of a slug heading, custom description
      text, form field for the user to enter their email address, standardized
      link to a privacy policy statement, and standardized sign up button.


      Different page types will be connected to the corresponding GovDelivery list based on the page topic (i.e. HMDA) or page type (i.e. blog).
guidelines: >-
  ### Content guidelines


  #### Sidebar email sign up


  * Default slug text: “Email updates”

  * Description text will be unique to each mailing list and should clearly set expectations for what a user will receive as a result of signing up. Email address field should always be marked required.

  * Use standard helper text within form field: “john@example.com” and standard privacy policy text before the button.

  * Use standard button text: “Sign up”


  #### Inset email sign up


  * The module heading should provide a strong call to action that clearly sets expectations for what a user will receive as a result of signing up. Uncheck "Default heading style" to use H3.

  * The additional body text can further clarify what kind of information will be in the emails, with a focus on the value users will receive from the emails.

  * The placement of the email signup on the page should not interfere with the primary page goal. Users respond better to follow-on requests that happen after their primary goal has been met.
eyebrow: Forms
status: Released
description: Email sign-ups allow users to stay engaged on a specific topic or
  content type produced by the Bureau. They are used to add individual email
  addresses to a specific mailing list that is relevant to the content on the
  page or the section it is contained within.
use_cases: ''
behavior: >-
  The mockups below show simultaneously how this pattern works within either a
  sidebar or a prefooter area.


  ### Sidebar email sign up module: Sublanding pages


  | Above 900 px                                                                        | 601-900 px                                                                                | Below 601 px                                                                                 |

  | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |

  | ![Sublanding page](/design-system/images/uploads/emailsignup_behavior_mockup_1.jpg) | ![Breakpoints 900 - 601](/design-system/images/uploads/emailsignup_behavior_mockup_3.jpg) | ![Breakpoints 601 and less](/design-system/images/uploads/emailsignup_behavior_mockup_4.jpg) |


  ### Sidebar email sign up module: Browse pages


  Browse pages do not have a sidebar. The sidebar email sign up module appears in the prefooter at the bottom of the page.


  | Above 600 px                                                                    | Below 601 px                                                                                 |

  | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |

  | ![Browse page](/design-system/images/uploads/emailsignup_behavior_mockup_2.jpg) | ![Breakpoints 601 and less](/design-system/images/uploads/emailsignup_behavior_mockup_4.jpg) |


  ### Inset


  When the inset module is wide enough, the Privacy Act statement link is displayed inline with the sign up button, right-aligned.


  At breakpoints below 601px, the inset module transitions to a single column and stacks above the full-width text. The signup button extends the full width of the module at the smallest breakpoint, 320px.


  | Above 900 px                                                                                 | 601-900 px                                                                         | Below 601 px                                                                       |

  | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |

  | ![Inset email sign up 900 breakpoint](/design-system/images/uploads/email-sign-up_learn.png) | ![Inset breakpoint 601](/design-system/images/uploads/email-sign-up_learn_601.png) | ![Inset breakpoint 320](/design-system/images/uploads/email-sign-up_learn_320.png) |
accessibility: ''
last_updated: 2020-01-28T15:55:47.394Z
research: ''
---
