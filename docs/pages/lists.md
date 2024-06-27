---
layout: variation
section: components
status: Released
variation_groups:
  - variation_group_name: Types
    variations:
      - variation_name: Bulleted list
        variation_description:
          Use a bulleted list when grouping similar items or short
          thoughts into “bite-size” chunks. Generally, the order or count of the
          items in a bullet list isn’t important. An exception to this may be a
          list of states, which naturally fits into an alphabetical order.
        variation_code_snippet: |-
          <ul class="m-list">
              <li class="m-list__item">List item 1</li>
              <li class="m-list__item">
                  List item 2
                  <ul class="m-list">
                      <li class="m-list__item">List item 2a</li>
                      <li class="m-list__item">List item 2b</li>
                      <li class="m-list__item">List item 2c</li>
                  </ul>
              </li>
              <li class="m-list__item">List item 3</li>
          </ul>
        variation_specs: ''
      - variation_name: Numbered list
        variation_description:
          When the order of information presented is important, use
          a numbered list. This could include chronological items, things
          presented in the order of importance, or a finite list of a counted
          number of items.
        variation_code_snippet: |-
          <p>Less than 10 items is not indented.</p>
          <ol>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
          </ol>

          <p>
            More than 9 items is indented to align double digits.
            Inner lists are not indented, regardless of the number of items.
          </p>
          <ol>
              <li>List item 1</li>
              <li>
                  List item 2
                  <ol>
                        <li>Nested item 2-1</li>
                        <li>Nested item 2-2</li>
                        <li>Nested item 2-3</li>
                        <li>Nested item 2-4</li>
                        <li>Nested item 2-5</li>
                        <li>Nested item 2-6</li>
                        <li>Nested item 2-7</li>
                        <li>Nested item 2-8</li>
                        <li>Nested item 2-9</li>
                        <li>Nested item 2-10</li>

                  </ol>
              </li>
              <li>List item 3
                  <ol>
                        <li>Nested item 3-1</li>
                        <li>Nested item 3-2</li>
                        <li>Nested item 3-3</li>
                  </ol>
              </li>
              <li>List item 4</li>
              <li>List item 5</li>
              <li>List item 6</li>
              <li>List item 7</li>
              <li>List item 8</li>
              <li>List item 9</li>
              <li>List item 10</li>
          </ol>
        variation_specs: ''
  - variations:
      - variation_code_snippet: |-
          <ul class="m-list m-list--unstyled">
              <li class="m-list__item">List item 1</li>
              <li class="m-list__item">List item 2</li>
              <li class="m-list__item">List item 3</li>
          </ul>
        variation_description: Unstyled list removes bullets and other styling from a list.
        variation_name: Unstyled list
      - variation_code_snippet: |-
          <ul class="m-list m-list--horizontal">
              <li class="m-list__item">List item 1</li>
              <li class="m-list__item">List item 2</li>
              <li class="m-list__item">List item 3</li>
          </ul>
        variation_description: A modifier for the list to make it show items horizontally.
        variation_name: Horizontal list
      - variation_description:
          'Link lists is where each item in a list is a jump link,
          which converts to a finger-friendly link with a large tap area on
          smaller screens. See example on the <a
          href="/design-system/components/links#list-link">links page</a>. '
        variation_name: Link list
      - variation_code_snippet: |-
          <ul class="m-list m-list--spaced">
              <li class="m-list__item">List item 1</li>
              <li class="m-list__item">List item 2</li>
              <li class="m-list__item">List item 3</li>
          </ul>
        variation_description: Spaced list adds extra padding to every element in a list.
        variation_name: Spaced list
    variation_group_name: Variations
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
eyebrow: Components
title: Lists
description: Lists are an effective way to visually highlight important
  information so that it can be more easily scanned and read. Before writing a
  list, it’s important to identify the best style needed for the information
  being presented.
use_cases: ''
behavior: ''
accessibility: ''
related_items: ''
last_updated: 2020-01-28T15:55:47.394Z
research: ''
---
