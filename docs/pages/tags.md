---
title: Tags
collection_name: pages
layout: variation
section: components
status: Released
description: Tags are used to label, organize, or categorize content. Tags can
  be used as a method of filtering data or to show items within a particular
  category.
variation_groups:
  - variations:
      - variation_is_deprecated: false
        variation_name: Topic tag
        variation_description:
          Topic tags appear with content such as blog posts and
          press releases to display associated topics. When clicked, a topic tag
          takes a user to a filtered view of other items tagged with the same
          topic tag. In this filtered view, a topic tag appears as a filter tag.
        variation_code_snippet: |-
          <ul class="m-tag-group">
            <li>
              <a href="#" class="a-tag-topic">
                <span class="a-tag-topic__bullet" aria-hidden="true">•</span>
                <span class="a-tag-topic__text">Access to credit</span>
              </a>
            </li>

            <li>
              <a href="#" class="a-tag-topic">
                <span class="a-tag-topic__bullet" aria-hidden="true">•</span>
                <span class="a-tag-topic__text">Mortgages</span>
              </a>
            </li>
          </ul>
      - variation_is_deprecated: false
        variation_name: Topic tag (stacked)
        variation_description:
          A topic tags group can be stacked at all screen sizes by
          adding the \`m-tag-group--stacked\` modifier to the tag group.
        variation_code_snippet: |-
          <ul class="m-tag-group m-tag-group--stacked">
            <li>
              <a href="#" class="a-tag-topic">
                <span class="a-tag-topic__bullet" aria-hidden="true">•</span>
                <span class="a-tag-topic__text">Open government</span>
              </a>
            </li>

            <li>
              <a href="#" class="a-tag-topic">
                <span class="a-tag-topic__bullet" aria-hidden="true">•</span>
                <span class="a-tag-topic__text">Banking</span>
              </a>
            </li>
          </ul>
      - variation_is_deprecated: false
        variation_name: Non-link topic tags
        variation_description: A group of topic tags that are not links.
        variation_code_snippet: |-
          <ul class="m-tag-group">
            <li>
              <span class="a-tag-topic">
                <span class="a-tag-topic__bullet" aria-hidden="true">•</span>
                <span class="a-tag-topic__text">Open government</span>
              </a>
            </li>

            <li>
              <span class="a-tag-topic">
                <span class="a-tag-topic__bullet" aria-hidden="true">•</span>
                <span class="a-tag-topic__text">Banking</span>
              </a>
            </li>
          </ul>
      - variation_is_deprecated: false
        variation_name: Filter tag
        variation_description: Filter tags are used as a part of
          [multiselects](https://cfpb.github.io/design-system/components/selects#multiselect)
          to display categories, topics, and languages selected in a [filterable
          list control
          panel](https://cfpb.github.io/design-system/patterns/filterable-list-control-panels).
        variation_code_snippet: >-
          <ul class="m-tag-group">
            <li>
              <button class="a-tag-filter">
                Option 1
                <svg
                xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg
                cf-icon-svg__error" viewBox="0 0 12 19"><path d="M11.383 13.644A1.03
                1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1
                1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6
                8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455
                9.716z"></path>
                </svg>
              </button>
            </li><li>
              <button class="a-tag-filter">
                Option 4
                <svg
                xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg
                cf-icon-svg__error" viewBox="0 0 12 19"><path d="M11.383 13.644A1.03
                1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1
                1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6
                8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455
                9.716z"></path>
                </svg>
              </button>
            </li>
            <li>
              <button class="a-tag-filter">
                A filter tag with very long words like supercalifragilisticexpialidocious
                <svg
                xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg
                cf-icon-svg__error" viewBox="0 0 12 19"><path d="M11.383 13.644A1.03
                1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1
                1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6
                8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455
                9.716z"></path>
                </svg>
              </button>
            </li>
            <li>
              <a href="#" class="a-tag-filter">
                A filter tag using an anchor element
                <svg
                xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg
                cf-icon-svg__error" viewBox="0 0 12 19"><path d="M11.383 13.644A1.03
                1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1
                1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6
                8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455
                9.716z"></path>
                </svg>
              </a>
            </li>
          </ul>
      - variation_is_deprecated: false
        variation_name: Non-clickable filter tag
        variation_description: There can be elements that have the appearance of a filter tag, but are not clickable. This is used like an inline notification.
        variation_code_snippet: >-
          <div class="a-tag-filter">
            Note
          </div>
    variation_group_name: Types
behavior: To clear a filter tag selection, click the “x” icon inside of the filter tag.
related_items: >-
  *
  [Multiselect](https://cfpb.github.io/design-system/components/selects#multiselect)

  * [Filterable list control panels](https://cfpb.github.io/design-system/patterns/filterable-list-control-panels)
---
