---
title: Contact Information
layout: variation
section: components
secondary_section: Layout options
status: Proposed
description: >-
  The contact information component is used to display phone, email, mailing
  address, and fax information for offices within the Bureau. This pattern may
  show up in either the main content area or the sidebar, as seen in the mockup
  below:


  ![Contact info
  mockup](/design-system/images/uploads/contactinfo_intro_mockup.jpg)


  Information for "Contact Information" can be found at:


  http://cfpb.github.io/design-manual/page-components/contact-information.html
variations:
  - variation_jinja_code_snippet: |-
      {% if value.contact %}
          <div class="o-main-contact-info">
              <h2>{{ value.contact.heading }}</h2>

              {{ value.contact.body | safe }}

              {% if value.contact.contact_info %}

                  {% for block in value.contact.contact_info %}
                      {{ render_stream_child(block) }}
                  {% endfor %}
              {% endif %}
          </div>
      {% endif %}
    variation_name: Main content contact info
  - variation_jinja_code_snippet: |-
      <div class="o-sidebar-contact-info">
          <div class="o-sidebar-contact-info_heading">
            <header class="m-slug-header">
                <h2 class="a-heading">
                    Contact Information
                </h2>
            </header>
          </div>

          <div class="o-sidebar-contact-info_content">
              {% if value.contact.heading %}
                  <h3>{{ value.contact.heading }}</h3>
              {% endif %}

              {{ value.contact.body | safe }}
          </div>

          <div class="o-sidebar-contact-info_contacts">
              {% if value.contact.contact_info %}
                  {% for block in value.contact.contact_info %}
                      {{ render_stream_child(block) }}
                  {% endfor %}
              {% endif %}
          </div>
      </div>
    variation_name: Sidebar contact info
usage: >-
  **Use cases**


  * When there is a specific action users may want or need to take that requires
  contacting a specific office within the Bureau.

  * Default placement should be in the sidebar, use main content area when
  contact information is of extra significance or directly ties into the main
  objective of the page.


  ##### When something else is better


  * When no contact information is needed or no specific action is tied to the
  contact information.


  **Content guidelines**


  Headings should be the official name of the office.


  Description beneath heading should clearly state why a user would need to
  contact the office. This description should closely follow the office
  descriptions linked through the bureau structure page. About 2-3 sentences in
  length (150-300 characters).


  Email address should always be formatted as @consumerfinance.gov, not
  @cfpb.gov. (Addresses are automatically redirected, no technical work is
  necessary to support this standard.)


  Mailing address:


  * Street suffixes (street, place, avenue, etc.) should be spelled out.

  * Cardinal directions (NW, SW, NE, SE, N, E, S, W) should be title case with
  no periods, and come after a comma.

  * Washington, D.C. has a comma and periods in D.C.


  Notes:


  * Pre-set contact options are email, phone number (including TTY/TDD), fax,
  and physical addresses.

  * Sidebar pattern includes the option for map imagery.

  * Pre-set minicons are used to help visually reinforce the type of contact
  method.


  ##### Behavior


  The mockups below show simultaneously how this pattern works within either the
  main content area or the sidebar:


  Breakpoints 901+

  As seen on pages with right sidebar.


  ![Desktop
  mockup](/design-system/images/uploads/contactinfo_behavior_mockup_1.jpg)


  Breakpoints 901+

  As seen on pages with a sub nav.


  ![Breakpoints
  901+](/design-system/images/uploads/contactinfo_behavior_mockup_2.jpg)


  Breakpoints 900 and less

  Patterns are stacked single column.


  ![Breakpoints 900 and
  less](/design-system/images/uploads/contactinfo_behavior_mockup_3.jpg)
accessibility: ''
research: ''
---
