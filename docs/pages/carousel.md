---
title: Carousel
layout: variation
section: patterns
status: Legacy
description: >-
  A carousel, otherwise known as a slideshow or image slider, allows multiple
  pieces of content to occupy high value real estate at the top of a landing
  page. From, [December
  2019](https://web.archive.org/web/20191210233347/https://www.consumerfinance.gov/)
  to [February
  2021](https://web.archive.org/web/20210201004337/https://www.consumerfinance.gov/),
  CFPB's homepage featured a carousel.


  Carousels offer poor usability and are considered an [anti-pattern](https://thegood.com/insights/ecommerce-image-carousels/). Their use is discouraged.
variation_groups:
  - variation_group_name: Types
    variations:
      - variation_description: >-
          The standard carousel organism is comprised of a set of blocks of
          content that can be navigated through sequentially. Each content item
          includes a title, description, link and image.


          ![CFPB carousel](/design-system/images/uploads/carousel.gif)


          Unlike other carousel patterns, CFPB's carousel does not automatically progress through its items. A user must either click the previous/next arrow or select one of the thumbnail previews at the bottom of the component.
        variation_name: Standard carousel
        variation_implementation: >-
          CFPB's front-end carousel code consisted of the following elements:


          * [Carousel organism HTML](https://github.com/cfpb/consumerfinance.gov/blob/1afe8171c17365bb6bad889e3e034877c0bed5d3/cfgov/jinja2/v1/_includes/organisms/carousel.html)

          * [Carousel JavaScript](https://github.com/cfpb/consumerfinance.gov/blob/1afe8171c17365bb6bad889e3e034877c0bed5d3/cfgov/unprocessed/js/organisms/Carousel.js)

          * [Carousel Less](https://github.com/cfpb/consumerfinance.gov/blob/1afe8171c17365bb6bad889e3e034877c0bed5d3/cfgov/unprocessed/css/organisms/carousel.less)


          On the back-end, the carousel items were managed via Wagtail:


          * [HomePage model](https://github.com/cfpb/consumerfinance.gov/blob/1afe8171c17365bb6bad889e3e034877c0bed5d3/cfgov/v1/models/home_page.py#L31-L120)


          See [cf.gov PR#6290](https://github.com/cfpb/consumerfinance.gov/pull/6290/files) for a list of all carousel files.
use_cases: |-
  ### When to use

  * Never.

  ### When other options are better

  * Always.
guidelines: >-
  ### Content guidelines


  * Carousel item titles should be as succinct as possible, 45 characters maximum (including spaces). Sentence case, unless proper noun. 

  * Item descriptions should be 140 characters maximum (including spaces).

  * Item link text has a 30 character maximum limit (including spaces). Lead with a verb, and be specific.
behavior: ''
accessibility: ''
research: >+
  There is a plethora of research discouraging the use of carousels on websites:


  * [Carousel Usability: Designing an Effective UI for Websites with Content Overload](https://www.nngroup.com/articles/designing-effective-carousels/)

  * [Image Carousels and Sliders? Don’t Use Them.](https://cxl.com/blog/dont-use-automatic-image-sliders-or-carousels/)

  * [It’s Time to Kill the Website Image Carousel](https://sitecare.com/blog/its-time-to-kill-the-website-image-carousel/)

related_items: >-
  * [Heroes](https://cfpb.github.io/design-system/patterns/heroes)

  * [Featured content module](https://cfpb.github.io/design-system/patterns/featured-content-module)
last_updated: 2020-01-28T15:55:47.394Z
---
