---
layout: variation
section: components
status: Released
variation_groups:
  - variations:
      - variation_name: Standard tagline
        variation_code_snippet: <cfpb-tagline />
        variation_description: ""
        variation_implementation: >-
          The flag itself is a stand-alone custom element of `<cfpb-flag-usa />`
          that uses a utility class that embeds a double-resolution flag png via
          a data URI.

          Custom text can be placed between the opening and closing tag to supplant the default text.
      - variation_name: Large tagline
        variation_code_snippet: <cfpb-tagline islarge />
        variation_description: ""
        variation_implementation: 'Internally, `white-space: nowrap` is set on the
          container to prevent wrapping of the "United States government" text.'
    variation_group_name: Types
guidelines: ""
eyebrow: Web Components
title: Taglines
description: Taglines are short paragraphs of text with the USA flag to their
  left that are used in the header and footer across consumerfinance.gov and
  other apps.
use_cases: ""
behavior: ""
accessibility: ""
related_items: ""
last_updated: 2019-10-21T20:38:39.851Z
research: ""
---
