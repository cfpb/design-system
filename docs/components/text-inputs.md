---
title: Text Inputs
permalink: /components/text-inputs
layout: component
collection_name: components
section: components
status: Proposed
intro: >-
  This page is under active development. Information is being moved into it from
  these pages:

  *
  http://cfpb.github.io/design-manual/page-components/form-fields.html#text-input-fields

  * https://cfpb.github.io/capital-framework/components/cf-forms/#text-inputs
variations:
  - variation_code_snippet: <marquee>Some sample code will eventually show up here.</marquee>
    variation_description: The default state is the most default state of them all.
    variation_name: Default state
  - variation_code_snippet: <marquee>Some sample code will eventually show up here.</marquee>
    variation_description: The secondary state is very secondary.
    variation_name: Secondary state
usage: >-
  **Use cases**


  TBD


  **Content guidelines**

  Choose the appropriate width for text input fields so they match the kind of
  information requested. This makes it easier for users to quickly grasp what’s
  being asked.


  For example, it’s hard to understand at a glance that a single 1,000 px-wide
  text field is asking for your phone number or birth date. When possible, be
  even more explicit with the width by dividing it into known character counts.
  For instance, social security number should be three characters, then two,
  then four. Be mindful of not getting too restrictive, however. This approach
  could work for phone numbers, but only if international numbers are not
  permitted.


  These types of inputs should always be smaller widths:


  * Middle initial

  * Date, month, or year

  * State abbreviation


  **Behavior**

  As the screen size gets smaller, break multi-column inputs into a single,
  stacked column. Fields that are next to each other on a large screen, should
  stack at smaller screen sizes. When possible, fields should span the entire
  width of the screen at the smallest screen sizes.
accessibility: >-
  Users of screen readers use the tab key to move focus from one form control to
  another. Make sure that tab focus order reflects the way you would like users
  to navigate through the form. Consider whether tabs should move a user down or
  across the page.
research: TBD
related_items: '* A related item'
help_us: '* Help us do a thing'
---

