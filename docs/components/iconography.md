---
title: Iconography
permalink: /foundation/iconography
layout: component
collection_name: components
section: foundation
status: Proposed
intro: >-
  Icons visually reinforce an interface action, file type, status, or category.


  They are visually simple, quickly recognizable, and easy to understand. They
  are almost always used in context with descriptive text and function to
  reinforce the message of that text.


  This page is under active development. Information is being moved into it from
  these pages:

  * http://cfpb.github.io/design-manual/brand-guidelines/minicons.html

  * https://cfpb.github.io/capital-framework/components/cf-icons/
variations:
  - variation_code_snippet: |-
      <a class="a-link a-link__icon" href="#">
          <span class="a-link_text">Download the info sheet</span>
          {% include icons/download.svg %}
      </a>

      <!--
      Raw SVG

      <a class="a-link a-link__icon" href="#">
          <span class="a-link_text">Example with icon</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 651.7 1200" class="cf-icon-svg"><path d="M507.1 692.8c-15.6-15.6-40.9-15.6-56.6 0l-85.1 85.1V466.6c0-22.1-17.9-40-40-40s-40 17.9-40 40V778l-85.1-85.1c-15.6-15.6-40.9-15.6-56.6 0-15.6 15.6-15.6 40.9 0 56.6L297 902.9c7.5 7.5 17.7 11.7 28.3 11.7s20.8-4.2 28.3-11.7l153.3-153.4c15.8-15.7 15.8-41 .2-56.7z"/><path d="M30 161c-16.5 0-30 13.5-30 30v827.8c0 16.5 13.5 30 30 30h591.7c16.5 0 30-13.5 30-30V343.7L469 161H30zm389.6 60v134.8c0 19.9 16.3 36.2 36.2 36.2h135.9V988.8H60V221h359.6z"/></svg>
      </a>
      -->
    variation_description: Used inline with text.
    variation_name: Extra small
  - variation_code_snippet: ' '
    variation_description: |-
      * Used on buttons

      * Numbers, contact icons
    variation_name: Small
  - variation_code_snippet: ' '
    variation_description: |-
      * Social media sharing sets

      * Numbers, contact icons
    variation_name: Medium
  - variation_code_snippet: ' '
    variation_description: |-
      * Inline with large text links

      * Numbers, contact icons
    variation_name: Large
  - variation_code_snippet: ' '
    variation_description: '* Paired with primary headers'
    variation_name: Extra large
  - variation_code_snippet: ' '
    variation_description: ''
    variation_name: Animated icon
  - variation_code_snippet: ' '
    variation_name: Icon library
usage: >-
  #### SVG icon basics

  The cf-icon component provides Scalable Vector Graphics (SVG) icons for
  Capital Framework. This component can be used by itself, but is designed to
  work with Capital Framework.


  We subscribe to the guidance offered by Chris Coyier in his article, “[A
  Pretty Good SVG Icon
  System](https://css-tricks.com/pretty-good-svg-icon-system/)”, in which he
  concludes, “Just include the icons inline.”


  Because including raw SVG code is not necessarily pretty or user-friendly, we
  encourage using your templating system to include them by reference.



  #### Content guidelines


  ##### Color


  Icons should always be one color. If used over a color field, negative space
  should be knocked out.


  Although color usage is flexible, icons should always be used in high contrast
  tones relative to the background to maximize legibility.


  ![One color icon example and negative space knocked out icon
  example](/design-system/images/uploads/minicons3a_-2.png)


  ##### Spacing


  Padding varies around icons of various primary shapes. Square, vertically and
  horizontally rectangular, diagonal, and most complex icons can fit within the
  relative padding bounding box. Circular and some complex icons should be
  slightly larger to offset the visual weight of surrounding negative space.


  ![Icon spacing diagram](/design-system/images/uploads/minicons4_-2.png "Icon
  spacing diagram")


  #### Behavior


  In certain instances, icons can be animated to aid communication or to
  reassure the user that an action is functioning as intended. Examples include
  saving or loading content. Depending on the context, the animated icon follows
  the standards of the component that contains it, for example, the icon follows
  the size and padding standards for buttons when placed inside a button to
  indicate loading or follows standards of a form-level alert within an alert
  message.


  Our previous font icon system provided modifiers to rotate any icon. We found
  in reality this wasn’t practical and only one icon is ever animated, `update`.
  We’ve provided an alias–`updating`–to be used within the UI when a user needs
  to be made aware that the website is working on responding to their actions.


  #### Download


  ##### Icon font


  Our full icon set is available for desktop use as an icon font (.ttf). It can
  be accessed through programs like Illustrator and InDesign via the glyph
  panel.


  ##### Vector files


  Each of our icons is available for download as a vector (.svg) on The Noun
  Project, a platform that collects and catalogs icons that are created and
  uploaded by graphic designers from around the world.

  [View on Noun Project](http://thenounproject.com/cfpb_minicons/)
---

