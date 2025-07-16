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
              </span>
            </li>

            <li>
              <span class="a-tag-topic">
                <span class="a-tag-topic__bullet" aria-hidden="true">•</span>
                <span class="a-tag-topic__text">Banking</span>
              </span>
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
                {% include icons/error.svg %}
              </button>
            </li>
            <li>
              <button class="a-tag-filter">
                Option 2
                {% include icons/error.svg %}
              </button>
            </li>
            <li>
              <button class="a-tag-filter">
                Option 3
                {% include icons/error.svg %}
              </button>
            </li>
          </ul>
    variation_group_name: Types
behavior: To clear a filter tag selection, click the “x” icon inside of the filter tag.
related_items: >-
  *
  [Multiselect](https://cfpb.github.io/design-system/components/selects#multiselect)

  * [Filterable list control panels](https://cfpb.github.io/design-system/patterns/filterable-list-control-panels)
---
