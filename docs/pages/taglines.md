---
title: Taglines
layout: variation
section: patterns
status: Released
description: >-
  Taglines are short paragraphs of text with a USA flag to their left.
variation_groups:
  - variations:
      - variation_name: "Standard tagline"
        variation_code_snippet: >-
          <div class="a-tagline">
              <span class="u-usa-flag"></span>
              <div>
                An official website of the
                <span class="a-tagline_usa">United States government</span>
              </div>
          </div>
        variation_description: ""
        variation_implementation: >-
          The flag itself is a stand-alone element of
          `<span class="u-usa-flag"></span>`
          that uses a utility class that embeds a double-resolution flag png
          via a data URI.
      - variation_name: "Large tagline"
        variation_code_snippet: >-
          <div class="a-tagline a-tagline__large">
              <span class="u-usa-flag"></span>
              <div>
                An official website of the
                <span class="a-tagline_usa">United States government</span>
              </div>
          </div>
        variation_description: ""
        variation_implementation: >-
          The `a-tagline_usa` container prevents wrapping of the
          "United States government" text.
      - variation_name: "Extra large tagline"
        variation_code_snippet: >-
          <div class="a-tagline a-tagline__xlarge">
              <span class="u-usa-flag"></span>
              We're a government agency whose mission is to protect consumers
              from financial harm.
          </div>
        variation_description: ""
        variation_implementation: >-
          A `div` container around the tagline is not needed if there is no
          markup inside the content.
use_cases: >-
  Taglines are used in the header and footer across consumerfinance.gov and within
  inkwells.
guidelines: ''
behavior: ''
accessibility: ''
research: ''
related_items: ''
last_updated: 2019-10-21T20:38:39.851Z
secondary_section: Layout options
---
