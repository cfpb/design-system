---
title: E-mail Signup Forms
layout: variation
section: components
secondary_section: Forms
status: Proposed
description: >-
  Email sign-ups are used to add individual email addresses to a specific
  mailing list that is relevant to the content on the page or the section it is
  contained within.


  More information can be found at:


  http://cfpb.github.io/design-manual/page-components/email-sign-up.html
variations:
  - variation_code_snippet: |
      <label class="a-label a-label__heading" for="textinput-example-default">
          A text input
      </label>
      <input class="a-text-input"
             type="text"
             id="textinput-example-default"
             placeholder="Enter text…"
             value="Lorem ipsum">
      <label class="a-label a-label__heading" for="textarea-example-default">
          A textarea input
      </label>
      <textarea class="a-text-input"
              id="textarea-example-default"
              placeholder="Enter text…">Lorem Ipsum</textarea>
    variation_description: |+

    variation_name: Basic email sign up
usage: >-
  **Use cases**

  Email sign ups allow users to stay engaged on a specific topic or content type
  produced by the Bureau. Different page types will be connected to the
  corresponding GovDelivery list based on the page topic (i.e. HMDA) or page
  type (i.e. blog).


  This pattern also includes a link to our privacy statement and a an optional
  call to action to subscribe to an RSS feed.


  **Content guidelines**


  * Use standard slug text: “Email updates”

  * Description text will be unique to each mailing list and should clearly set
  expectations for what a user will receive as a result of signing up. Email
  address field should always be marked required.

  * Use standard helper text within form field: “john@example.com” and standard
  privacy policy text before the button.

  * Use standard button text: “Sign up”


  **Behavior**

  The mockups below show simultaneously how this pattern works within either a
  sidebar or a prefooter area.


  ##### Breakpoints 901+


  ###### Sublanding page


  ![Sublanding
  page](/design-system/images/uploads/emailsignup_behavior_mockup_1.jpg)


  ###### Browse page


  ![Browse
  page](/design-system/images/uploads/emailsignup_behavior_mockup_2.jpg)


  ##### Breakpoints 900 - 601


  ![Breakpoints 900 -
  601](/design-system/images/uploads/emailsignup_behavior_mockup_3.jpg)


  ##### Breakpoints 601 and less

  At breakpoints below 601: Heading sizes H3 and above automatically drop down
  one level and the mobile link style is used for the call to action link(s).


  ![Breakpoints 601 and
  less](/design-system/images/uploads/emailsignup_behavior_mockup_4.jpg)
restrictions: []
accessibility: ''
research: ''
---

