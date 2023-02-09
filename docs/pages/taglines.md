---
layout: variation
section: patterns
status: Released
variation_groups:
  - variations:
      - variation_name: Standard tagline
        variation_code_snippet: |-
          <div class="a-tagline">
              <span class="u-usa-flag"></span>
              <div class="a-tagline_text">
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
          <div class="a-tagline a-tagline__large">
              <span class="u-usa-flag"></span>
              <div class="a-tagline_text">
                  An official website of the
                  <span class="u-nowrap">United States government</span>
              </div>
          </div>
        variation_description: ''
        variation_implementation:
          The `u-nowrap` container prevents wrapping of the
          "United States government" text. If the content of the tagline
          contains markup it needs to go inside a generic `div` container.
      - variation_name: Extra large tagline
        variation_code_snippet: |-
          <div class="a-tagline a-tagline__xlarge">
              <span class="u-usa-flag"></span>
              <div class="a-tagline_text">
                We're a government agency whose mission is to protect consumers
                from financial harm.
              </div>
          </div>
        variation_description: An extra large tagline, which stacks on mobile.
        variation_implementation: ''
        variation_is_deprecated: true
    variation_group_name: Types
guidelines: ''
eyebrow: Featured content
title: Taglines
description: Taglines are short paragraphs of text with a USA flag to their left.
use_cases: Taglines are used in the header and footer across consumerfinance.gov
  and within inkwells.
behavior: ''
accessibility: ''
related_items: ''
last_updated: 2019-10-21T20:38:39.851Z
research: ''
---
