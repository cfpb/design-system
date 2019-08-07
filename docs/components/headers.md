---
title: Headers
permalink: /components/headers
layout: variation
collection_name: components
section: components
status: Released
description: Use headers to lead content.
variations:
  - variation_code_snippet: |-
      <header class="m-slug-header">
          <h2 class="a-heading">
              Blog summary
          </h2>
      </header>
    variation_description: ''
    variation_name: Slug header
  - variation_code_snippet: |
      <header class="m-meta-header">
          <div class="m-meta-header_right">
              <span class="a-date">
                  Nov 4, 2013
              </span>
          </div>
          <div class="m-meta-header_left">
              <span class="u-visually-hidden">Categories: </span>
              <a href="#" class="a-heading a-heading__icon">
                  {% include icons/credit-card.svg %}
                  Consumer finance
              </a>
              |
              <a href="#" class="a-heading a-heading__icon">
                  {% include icons/bullhorn.svg %}
                  At the CFPB
              </a>
          </div>
      </header>
    variation_description: >-
      Note that the example shows `.m-meta-header_left` using the
      `.a-heading__icon` pattern and `.m-meta-header_right` using the `.a-date`
      pattern but you could use other patterns in place of them. Or you can even
      swap them so that date is attached to `.m-meta-header_left` and
      `.a-heading.a-heading__icon` is attached to `.m-meta-header_right`.
    variation_name: Meta header
usage: ''
accessibility: ''
research: ''
---

