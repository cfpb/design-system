---
title: Lists
layout: variation
section: components
secondary_section: Text
status: Proposed
description: "Lists are an effective way to visually highlight important information so that it can be more easily scanned and read. Before writing a list, it’s important to identify the best style needed for the information being presented.\n\nList items should:\n\n* Be capitalized\n* Avoid unnecessary repetition\n* Have a parallel structure\n* Start with an introductory clause or sentence\n* Use consistent punctuation\n\nIf the list items are complete sentences, the introductory clause should also be a complete sentence, followed by a colon. These list items should end with a period.\n\nIf the list items are a group of short fragments that each work to complete an introductory clause, the introductory clause should also be a short fragment, followed by a colon. These list items should end with no punctuation.\n\nMore information can be found at:\n* http://cfpb.github.io/design-manual/brand-guidelines/typography.html\t\n* https://cfpb.github.io/capital-framework/components/cf-typography/#lists"
variations:
  - variation_code_snippet: |-
      <ul class="m-list m-list__unstyled">
          <li class="m-list_item">List item 1</li>
          <li class="m-list_item">List item 2</li>
          <li class="m-list_item">List item 3</li>
      </ul>
    variation_description: Unstyled list removes bullets and other styling from a list.
    variation_name: Unstyled list
  - variation_code_snippet: |-
      <p> Paragraph example for visual reference</p>
      <ul class="m-list">
          <li class="m-list_item">List item 1</li>
          <li class="m-list_item">
              List item 2
              <ul class="m-list m-list__spaced">
                  <li class="m-list_item">List item 2a</li>
                  <li class="m-list_item">List item 2b</li>
                  <li class="m-list_item">List item 2c</li>
              </ul>
          </li>
          <li class="m-list_item">List item 3</li>
      </ul>
      <p> Paragraph example for visual reference</p>
    variation_description: >-
      Use a bulleted list when grouping similar items or short thoughts into
      “bite-size” chunks. Generally, the order or count of the items in a bullet
      list isn’t important. An exception to this may be a list of states, which
      naturally fits into an alphabetical order.
    variation_name: Bulleted list
  - variation_code_snippet: |-
      <p>Paragraph example for visual reference</p>
      <ol>
          <li>List item 1</li>
          <li>
              List item 2
              <ol>
                    <li>Nested item 2-1</li>
                    <li>Nested item 2-2</li>
                    <li>Nested item 2-3</li>
              </ol>
          </li>
          <li>List item 3</li>
      </ol>
      <p>Paragraph example for visual reference</p>
    variation_description: >
      When the order of information presented is important, use a numbered list.
      This could include chronological items, things presented in the order or
      importance, or a finite list of a counted number of items.
    variation_name: Numbered list
  - variation_code_snippet: |-
      <ul class="m-list m-list__horizontal">
          <li class="m-list_item">List item 1</li>
          <li class="m-list_item">List item 2</li>
          <li class="m-list_item">List item 3</li>
      </ul>
    variation_description: A modifier for the list to make it show items horizontally.
    variation_name: Horizontal list
  - variation_code_snippet: |-
      <ul class="m-list m-list__links">
          <li class="m-list_item">
              <a class="m-list_link" href="#">List item 1</a>
          </li>
          <li class="m-list_item">
              <a class="m-list_link" href="#">List item 2</a>
          </li>
          <li class="m-list_item">
              <a class="m-list_link" href="#">List item 3</a>
          </li>
      </ul>
    variation_description: >-
      The link list modifier is intended to be used for lists where each item is
      a link. It converts to a finger-friendly link with a large tap area on
      smaller screens.
    variation_name: Link list
  - variation_code_snippet: |-
      <ul class="m-list m-list__spaced">
          <li class="m-list_item">List item 1</li>
          <li class="m-list_item">List item 2</li>
          <li class="m-list_item">List item 3</li>
      </ul>
    variation_description: Spaced list adds extra padding to every element in a list.
    variation_name: Spaced list
  - variation_code_snippet: '  '
    variation_description: >-
      When the primary role of a list is to offer definitions or explanations
      for a group of terms, the bolded term should appear first, followed by a
      colon. The definition should appear after the bolded term and be written
      in complete sentences.


      Each defined term should appear on its own line, without an indentation or
      bullet.
    variation_name: Basic definition list
  - variation_code_snippet: ' '
    variation_description: >-
      Modifies the base style to make <dt> look like an h5. Used for definition
      lists that contain key/value or term/definition pairs (i.e. lists where
      the <dt> is fairly short, acts like a label, and is readable in all caps),
      like the Mosaic portals and the job listings.
    variation_name: Key/value definition list
  - variation_code_snippet: ' '
    variation_description: >-
      Modifies the base style to put <dt> and <dd> on the same line (and maybe
      also add a colon after the <dt>?). Used when the two parts of the list
      entry should be inline, as in the job listings.


      ![](/design-system/images/uploads/28131667-787b1896-66ef-11e7-8411-c0f40ba79e2c.png)
    variation_name: Compact definition list
usage: ''
accessibility: ''
research: ''
---

