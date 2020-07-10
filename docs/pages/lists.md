---
title: Lists
layout: variation
section: components
status: Released
description: Lists are an effective way to visually highlight important
  information so that it can be more easily scanned and read. Before writing a
  list, it’s important to identify the best style needed for the information
  being presented.
variation_groups:
  - variation_group_name: Types
    variations:
      - variation_name: Bulleted list
        variation_description: Use a bulleted list when grouping similar items or short
          thoughts into “bite-size” chunks. Generally, the order or count of the
          items in a bullet list isn’t important. An exception to this may be a
          list of states, which naturally fits into an alphabetical order.
        variation_code_snippet: |-
          <ul class="m-list">
              <li class="m-list_item">List item 1</li>
              <li class="m-list_item">
                  List item 2
                  <ul class="m-list">
                      <li class="m-list_item">List item 2a</li>
                      <li class="m-list_item">List item 2b</li>
                      <li class="m-list_item">List item 2c</li>
                  </ul>
              </li>
              <li class="m-list_item">List item 3</li>
          </ul>
        variation_specs: >-
          
          #### Default


          * Avenir Next Regular, 16px

          * Margin bottom (list item): 8px

          * Margin top (list): 10px

          * Margin bottom (list): 15px

          * Bullets are solid squares

          * Bullets are aligned flush with the left margin of the column of text they’re in


          NESTED


          * Bullets are open circles and flush left with the preceding line of text
      - variation_name: Numbered list
        variation_description: When the order of information presented is important, use
          a numbered list. This could include chronological items, things
          presented in the order of importance, or a finite list of a counted
          number of items.
        variation_code_snippet: |-
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
        variation_specs: >-
          

          DEFAULT


          * Avenir Next Regular, 16px

          * Margin bottom (list item): 8px

          * Margin top (list): 10px

          * Margin bottom (list): 15px

          * Numbers are right aligned to their associated period; all single-digit numbers fit inside the left margin


          NESTED ITEMS


          * Depending on the content and use case, nested items may either appear as bullets — solid squares — that are flush left with the preceding line of text, or lower-cased letters, as shown in the example.
  - variations:
      - variation_code_snippet: |-
          <ul class="m-list m-list__unstyled">
              <li class="m-list_item">List item 1</li>
              <li class="m-list_item">List item 2</li>
              <li class="m-list_item">List item 3</li>
          </ul>
        variation_description: Unstyled list removes bullets and other styling from a list.
        variation_name: Unstyled list
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
        variation_description: The link list modifier is intended to be used for lists
          where each item is a link. It converts to a finger-friendly link with
          a large tap area on smaller screens.
        variation_name: Link list
        variation_specs: |-
          * Avenir Next Medium, 16px, Pacific
          * Border bottom: 1 px, dotted, Pacific
          * Margin bottom (list item): 8px
          * Margin top (list): 10px
          * Margin bottom (list): 15px
      - variation_code_snippet: |-
          <ul class="m-list m-list__spaced">
              <li class="m-list_item">List item 1</li>
              <li class="m-list_item">List item 2</li>
              <li class="m-list_item">List item 3</li>
          </ul>
        variation_description: Spaced list adds extra padding to every element in a list.
        variation_name: Spaced list
    variation_group_name: Variations
use_cases: ""
guidelines: >-
  ### Content guidelines


  List items should:


  * Be capitalized

  * Avoid unnecessary repetition

  * Have a parallel structure

  * Start with an introductory clause or sentence

  * Use consistent punctuation


  If the list items are complete sentences, the introductory clause should also be a complete sentence, followed by a colon. These list items should end with a period.


  If the list items are a group of short fragments that each work to complete an introductory clause, the introductory clause should also be a short fragment, followed by a colon. These list items should end with no punctuation.
behavior: ""
accessibility: ""
research: ""
related_items: ""
last_updated: 2020-01-28T15:55:47.394Z
secondary_section: Layout options
---
