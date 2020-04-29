---
title: E-mail Signup Forms
layout: variation
section: components
secondary_section: Forms
status: Released
description: >-
  Email sign-ups are used to add individual email addresses to a specific
  mailing list that is relevant to the content on the page or the section it is
  contained within.


  More information can be found at:


  http://cfpb.github.io/design-manual/page-components/email-sign-up.html
variation_groups:
  - variations:
      - variation_code_snippet: ''
        variation_description: >-
          ![Sidebar email signup
          mockup](/design-system/images/uploads/emailsignup_intro_mockup.png)
        variation_name: Sidebar email sign up
      - variation_code_snippet: ''
        variation_description: >-
          The inset email signup module is a variation on the main email signup that
          can be used in the body content of Learn and Browse pages. It should be
          used when the email CTA is more important to the purpose of the page than
          the sidebar or prefooter placement reflects.


          ![Inset email
          signup](/design-system/images/uploads/2e07e378-4adf-11e8-96a7-67d2534eec85.png)
        variation_name: Inset email sign up
usage: >-
  <h3>Use cases</h3>

  Email sign ups allow users to stay engaged on a specific topic or content type
  produced by the Bureau. Different page types will be connected to the
  corresponding GovDelivery list based on the page topic (i.e. HMDA) or page
  type (i.e. blog).


  This pattern also includes a link to our privacy statement and a an optional
  call to action to subscribe to an RSS feed.


  ##### When to use inset email signup


  * On Learn pages, only use the inset email module when signing up for the
  email list is a primary user goal for the page, for example job seekers
  signing up for job announcements.

  * On Browse pages, use the inset email module when feedback modules or other
  prefooter content competes with the prefooter email signup CTA, or when
  signing up for the email list is a primary user goal.


  ##### When other options are better


  * On Learn pages when we want to encourage visitors to sign up for an email
  list but the list itself is not a primary user goal, use the standard sidebar
  email signup.

  * On Browse pages, when email signups are not a primary user goal, and the
  prefooter/end of page content has no other CTAs to compete with the email
  signup, use the standard prefooter email signup.


  <h3>Content guidelines</h3>


  * Use standard slug text: “Email updates”

  * Description text will be unique to each mailing list and should clearly set
  expectations for what a user will receive as a result of signing up. Email
  address field should always be marked required.

  * Use standard helper text within form field: “john@example.com” and standard
  privacy policy text before the button.

  * Use standard button text: “Sign up”


  ##### Inset


  * The module heading should provide a strong call to action that clearly sets
  expectations for what a user will receive as a result of signing up.
    * Uncheck "Default heading style" to get the alternate heading style that we want in this inset module
  * The additional body text can further clarify what kind of information will
  be in the emails, with a focus on the value users will receive from the
  emails.

  * The placement of the email signup on the page should not interfere with the
  primary page goal. Users respond better to follow-on requests that happen
  after their primary goal has been met.


  <h3>Behavior</h3>


  The mockups below show simultaneously how this pattern works within either a
  sidebar or a prefooter area.


  #### Breakpoints 901+


  ##### Sublanding page


  ![Sublanding
  page](/design-system/images/uploads/emailsignup_behavior_mockup_1.jpg)


  ##### Browse page


  ![Browse
  page](/design-system/images/uploads/emailsignup_behavior_mockup_2.jpg)


  ##### Inset


  When the inset module is wide enough, the Privacy Act statement link is
  displayed inline with the sign up button, right-aligned.


  ![Inset email sign up 900
  breakpoint](/design-system/images/uploads/email-sign-up_learn.png)


  #### Breakpoints 900 - 601


  ##### Sidebar


  ![Breakpoints 900 -
  601](/design-system/images/uploads/emailsignup_behavior_mockup_3.jpg)


  #### Breakpoints 601 and less


  At breakpoints below 601: Heading sizes H3 and above automatically drop down
  one level and the mobile link style is used for the call to action link(s).


  ##### Sidebar


  ![Breakpoints 601 and
  less](/design-system/images/uploads/emailsignup_behavior_mockup_4.jpg)


  ##### Inset


  At breakpoints below 601px, the inset module transitions to a single column
  and stacks above the full-width text. The signup button extends the full width
  of the module at the smallest breakpoint, 320px.


  ![Inset breakpoint
  601](/design-system/images/uploads/email-sign-up_learn_601.png)


  ![Inset breakpoint
  320](/design-system/images/uploads/email-sign-up_learn_320.png)
accessibility: ''
research: ''
last_updated: 2020-01-28T15:55:47.394Z
---
