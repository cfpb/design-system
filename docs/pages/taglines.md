---
layout: variation
section: components
variation_groups:
  - variations:
      - variation_name: Standard tagline
        variation_code_snippet: |-
          <div class="a-tagline">
              <span class="u-usa-flag"></span>
              <div class="a-tagline__text">
                  An official website of the
                  <span class="u-nowrap">United States government</span>
              </div>
          </div>
        variation_description: ''
        variation_implementation:
          The flag itself is a stand-alone element of `<span
          class="u-usa-flag"></span>` that uses a utility class that embeds a
          double-resolution flag png via a data URI.
      - variation_name: Large tagline
        variation_code_snippet: |-
          <div class="a-tagline a-tagline--large">
              <span class="u-usa-flag"></span>
              <div class="a-tagline__text">
                  An official website of the
                  <span class="u-nowrap">United States government</span>
              </div>
          </div>
        variation_description: ''
        variation_implementation:
          The `u-nowrap` container prevents wrapping of the
          "United States government" text. If the content of the tagline
          contains markup it needs to go inside a generic `div` container.
    variation_group_name: Types
use_cases: ''
guidelines: ''
eyebrow: Components
accessibility: ''
related_items: ''
last_updated: 2019-10-21T20:38:39.851Z
title: Taglines
status: Released
description: Taglines are short paragraphs of text with the USA flag to their
  left that are used in the header and footer across consumerfinance.gov.
behavior: ''
research: ''
---
