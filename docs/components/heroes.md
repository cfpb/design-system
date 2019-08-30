---
title: Heroes
layout: variation
section: components
secondary_section: Layout options
status: Proposed
description: >-
  Heroes function as a primary focal point on a page, often used to introduce a
  collection of pages by combining a brief description of the goals of that
  section along with a visually impactful graphic.


  Heroes are the most prominent component on a page, in terms of their position
  and visual footprint. Heroes should only be used on top level pages, including
  landing and sublanding pages.


  ![Image of standard hero
  graphic](/design-system/images/uploads/hero_use-case.png "Image of standard
  hero graphic")


  ##### Where to use


  * [Landing page](https://cfpb.github.io/design-system/templates/landing-pages)

  * [Sublanding
  page](https://cfpb.github.io/design-system/templates/sublanding-pages)


  ##### When to use


  * When orienting a user to a new section or topic

  * When the page serves as a navigational tool with general information about a
  subject and links to lower-level pages that contain more specific information


  ##### When other options are better


  * When introducing a specific piece of content, like a blog, press release, or
  other lengthy or detailed content, use the text introduction


  More information about Heroes can be found at:


  <https://cfpb.github.io/design-manual/global-elements/heroes.html>


  and


  <https://cfpb.github.io/capital-framework/components/cf-layout/#heroes>
variations:
  - variation_code_snippet: |-
      <section class="m-hero" id="hero1">
          <div class="m-hero_wrapper wrapper">
              <div class="m-hero_text">
                  <h1 class="m-hero_heading">Standard hero with illustration</h1>
                  <p class="m-hero_subhead">
                      This text has a recommended count of 165-186 characters
                      (three lines at 1230px) following a one-line heading
                      and 108-124 characters (two lines at 1230px)
                      following a two-line heading.
                  </p>
              </div>
              <div class="m-hero_image-wrapper">
                  <div class="m-hero_image"></div>
              </div>
          </div>
          <style>
              #hero1 .m-hero_image {
                  background-image:
                      url('https://dummyimage.com/570x236/addc91/101820');
                  background-image: -webkit-image-set(
                      url('https://dummyimage.com/570x236/addc91/101820') 1x,
                      url('https://dummyimage.com/1140x472/addc91/101820') 2x
                  );
                  background-image: image-set(
                      url('https://dummyimage.com/570x236/addc91/101820') 1x,
                      url('https://dummyimage.com/1140x472/addc91/101820') 2x
                  );
                  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                      src='https://dummyimage.com/570x236/addc91/101820',
                      sizingMethod='scale');
                  padding-bottom: 41.4893617%;
              }

              @media screen and (min-width: 37.5625em) {
                  #hero1 .m-hero_image {
                      background-image:
                          url('https://dummyimage.com/470x195/addc91/101820');
                      background-image: -webkit-image-set(
                          url('https://dummyimage.com/470x195/addc91/101820') 1x,
                          url('https://dummyimage.com/940x390/addc91/101820') 2x
                      );
                      background-image: image-set(
                          url('https://dummyimage.com/470x195/addc91/101820') 1x,
                          url('https://dummyimage.com/940x390/addc91/101820') 2x
                      );
                      filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                          src='https://dummyimage.com/470x195/addc91/101820',
                          sizingMethod='scale');
                      padding-bottom: 41.4893617%;
                  }
              }
          </style>
      </section>
    variation_description: >-
      A hero consists of a headline, a small amount of additional sub-heading
      text and an image. Its background color or image is flush with the sides
      of the screen, and the content is vertically centered.
    variation_name: Standard hero with illustration
    variation_specs: >-
      * All illustrations should be saved at 200% to accommodate retina
      displays. Illustration dimensions: 470px (exact) x 195px (maximum) (2x:
      940px x 390px)

      * When saving illustrations, use a transparent background.

      * The illustration can be customized by setting the `background-image`
      property on the `.m-hero_image` element.

      * Single image for both large and small screens

      * On small screens (or where media queries are not supported), the text
      spans the full width of the `.m-hero_wrapper` and the illustration is
      displayed underneath.

      * For larger screen sizes, media queries are used to position the
      illustration to the right of the text.

      * At the grid’s maximum width and above, the hero should not exceed 285px
      in height. The image should be 195px in height to conform to this
      standard.
  - variation_code_snippet: |-
      <section class="m-hero m-hero__knockout" id="hero2">
          <div class="m-hero_wrapper wrapper">
              <div class="m-hero_text">
                  <h1 class="m-hero_heading">Max of 41 chars for a one-line heading</h1>
                  <p class="m-hero_subhead">
                      This text has a recommended count of 165-186 characters
                      (three lines at 1230px) following a one-line heading
                      and 108-124 characters (two lines at 1230px)
                      following a two-line heading.
                  </p>
              </div>
              <div class="m-hero_image-wrapper">
                  <div class="m-hero_image"></div>
              </div>
          </div>
          <style>
              #hero2 {
                  background-color: #207676;
              }

              #hero2 .m-hero_image {
                  background-image:
                      url('https://dummyimage.com/570x236/addc91/101820');
                  background-image: -webkit-image-set(
                      url('https://dummyimage.com/570x236/addc91/101820') 1x,
                      url('https://dummyimage.com/1140x472/addc91/101820') 2x
                  );
                  background-image: image-set(
                      url('https://dummyimage.com/570x236/addc91/101820') 1x,
                      url('https://dummyimage.com/1140x472/addc91/101820') 2x
                  );
                  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                      src='https://dummyimage.com/570x236/addc91/101820',
                      sizingMethod='scale');
                  padding-bottom: 41.4893617%;
              }

              @media screen and (min-width: 37.5625em) {
                  #hero2 .m-hero_image {
                      background-image:
                          url('https://dummyimage.com/470x195/addc91/101820');
                      background-image: -webkit-image-set(
                          url('https://dummyimage.com/470x195/addc91/101820') 1x,
                          url('https://dummyimage.com/940x390/addc91/101820') 2x
                      );
                      background-image: image-set(
                          url('https://dummyimage.com/470x195/addc91/101820') 1x,
                          url('https://dummyimage.com/940x390/addc91/101820') 2x
                      );
                      filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                          src='https://dummyimage.com/470x195/addc91/101820',
                          sizingMethod='scale');
                      padding-bottom: 41.4893617%;
                  }
              }
          </style>
      </section>
    variation_description: >-
      When using a dark background add the `__knockout` modifier to the hero to
      switch the text to white.
    variation_name: Hero with knockout text
  - variation_code_snippet: |-
      <section class="m-hero m-hero__bleeding" id="hero3">
          <div class="m-hero_wrapper wrapper">
              <div class="m-hero_text">
                  <h1 class="m-hero_heading">Max of 41 chars for a one-line heading</h1>
                  <p class="m-hero_subhead">
                      This text has a recommended count of 165-186 characters
                      (three lines at 1230px) following a one-line heading
                      and 108-124 characters (two lines at 1230px)
                      following a two-line heading.
                  </p>
              </div>
              <div class="m-hero_image-wrapper">
                  <div class="m-hero_image"></div>
              </div>
          </div>
          <style>
              #hero3 .m-hero_image {
                  background-image:
                      url('https://dummyimage.com/570x140/addc91/101820');
                  background-image: -webkit-image-set(
                      url('https://dummyimage.com/570x140/addc91/101820') 1x,
                      url('https://dummyimage.com/1140x280/addc91/101820') 2x
                  );
                  background-image: image-set(
                      url('https://dummyimage.com/570x140/addc91/101820') 1x,
                      url('https://dummyimage.com/1140x280/addc91/101820') 2x
                  );
                  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                      src='https://dummyimage.com/570x140/addc91/101820',
                      sizingMethod='scale');
                  padding-bottom: 25.1020408%;
              }

              @media screen and (min-width: 37.5625em) {
                  #hero3 .m-hero_image {
                      background-image:
                          url('https://dummyimage.com/470x640/addc91/101820');
                      background-image: -webkit-image-set(
                          url('https://dummyimage.com/470x640/addc91/101820') 1x,
                          url('https://dummyimage.com/940x1280/addc91/101820') 2x
                      );
                      background-image: image-set(
                          url('https://dummyimage.com/470x640/addc91/101820') 1x,
                          url('https://dummyimage.com/940x1280/addc91/101820') 2x
                      );
                      filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                          src='https://dummyimage.com/470x640/addc91/101820',
                          sizingMethod='scale');
                  }
              }
          </style>
      </section>
    variation_description: >-
      When using an illustration that bleeds top to bottom at larger screen
      sizes, add the `__bleeding` modifier to the hero and add an additional
      `m-hero_bleeding-image` as a sibling to `m-hero_image`.
    variation_name: Hero with bleeding illustration
    variation_specs: >-
      * Two images must be created, one for large and one for small screens

      * Large and small screen images should contain the same elements but can
      differ compositionally

      * On large screens, illustration bleeds top and bottom

      * Large screen image dimensions are based on maximum possible hero height
      at 601px width

      * To conserve vertical space, small screen image should be as short as
      possible

      * Illustration dimensions for large screens (exact): 470px x 638px (2x:
      940px x 1276px)

      * Illustration dimensions for small screens: 570px (exact) x 320px
      (maximum) (2x: 1140px x 640px)
  - variation_code_snippet: |-
      <section class="m-hero m-hero__overlay" id="hero4">
          <div class="m-hero_wrapper wrapper">
              <div class="m-hero_text">
                  <h1 class="m-hero_heading">Max of 41 chars for a one-line heading</h1>
                  <p class="m-hero_subhead">
                      This text has a recommended count of 165-186 characters
                      (three lines at 1230px) following a one-line heading
                      and 108-124 characters (two lines at 1230px)
                      following a two-line heading.
                  </p>
              </div>
              <div class="m-hero_image-wrapper">
                  <div class="m-hero_image"></div>
              </div>
          </div>
          <style>
              #hero4 .m-hero_image {
                  background-image:
                      url('https://dummyimage.com/600x250/addc91/101820');
                  background-image: -webkit-image-set(
                      url('https://dummyimage.com/600x250/addc91/101820') 1x,
                      url('https://dummyimage.com/1200x500/addc91/101820') 2x
                  );
                  background-image: image-set(
                      url('https://dummyimage.com/600x250/addc91/101820') 1x,
                      url('https://dummyimage.com/1200x500/addc91/101820') 2x
                  );
                  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                      src='https://dummyimage.com/600x250/addc91/101820',
                      sizingMethod='scale');
                  padding-bottom: 41.6666667%;
              }

              @media screen and (min-width: 37.5625em) {
                  #hero4 .m-hero_wrapper{
                      background-image:
                          url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg');
                      background-image: -webkit-image-set(
                          url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 1x,
                          url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 2x
                      );
                      background-image: image-set(
                          url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 1x,
                          url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 2x
                      );
                      filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                          src='http://files.consumerfinance.gov/f/images/PC_hero.original.jpg',
                          sizingMethod='scale');
                  }
              }
          </style>
      </section>
    variation_description: >-
      The text overlays the photograph at larger screen sizes. It’s best to
      avoid a non-button call to action in these, as it’s unlikely that the
      Pacific Blue will have accessible contrast with a non-white (or light
      gray) background.
    variation_name: Hero with photograph
    variation_specs: >-
      * Two images must be created, one for large and one for small screens

      * Large and small screen images should contain the same elements but can
      differ compositionally

      * When selecting a photo include a 30px horizontal margin of clear space
      between text and image area

      * Type contrast ratios cannot be mathematically determined for photos, so
      special care should be paid when selecting these images

      * To conserve vertical space, small screen image should be as short as
      possible

      * Photo dimensions for large screens (exact): 1230px x 285px

      * Photo dimensions for small screens: 600px (exact) x 338px (maximum)
usage: >-
  #### Content guidelines


  Hero content should serve to orient the user and communicate the primary goal
  of the page. Copy should be succinct and engaging, reflecting the voice and
  tone of the CFPB.


  ##### Purpose


  Hero copy should be written from the user’s perspective. It’s less about what
  we can do for them or what we can offer them, and more about what the user can
  do with the resources we provide.


  Hero content should help a user answer these two questions:


  Is this page what I was looking for? (orient the user)

  Do I want to keep reading? (engage the user)

  Since the goal of the hero is to get the user to continue reading the page,
  don’t include links or calls to action within the hero. If there is content
  that needs to link elsewhere for explanation, place it underneath the hero
  within the main content area.


  ##### Writing hero content


  ###### Heading


  Headings should communicate what the user can learn from the page or the
  benefit the page provides. Headings should be a single phrase, preferably one
  line at the largest breakpoint. Take care to avoid orphaned text.


  Headings should not include a period at the end. Question marks can be used
  when a question is asked, but avoid phrasing heroes as questions. Actionable,
  descriptive, orienting statements work best.


  * One-line (at largest breakpoint): 41 characters maximum

  * Two-line (at largest breakpoint): 82 characters maximum


  ###### Subheading


  Subheading content should be brief, enticing, and build upon the heading to
  describe the value of the page. Take care to avoid orphaned text.


  * After one-line heading: Between 165 and 186 characters (three lines at
  largest breakpoint)

  * After two-line heading: Between 108 and 124 characters (two lines at largest
  breakpoint)


  #### Behavior


  Below the 601 px breakpoint, the text and image stack to span the full width
  of the viewport.


  **601 px and above**


  ![Mockup of hero graphic at desktop
  size](/design-system/images/uploads/hero_behavior_large.png "Mockup of hero
  graphic at desktop size")


  **600 px and below**


  ![Mockup of hero graphic at small
  size](/design-system/images/uploads/hero_behavior_small.png "Mockup of hero
  graphic at small size")


  **Standard hero with illustration**


  ![Image of large non-bleed hero graphic with
  dimensions](/design-system/images/uploads/hero_style_non-bleed_large.png
  "Image of large non-bleed hero graphic with dimensions")


  ![Image of smaller non-bleed hero graphics with
  dimensions](/design-system/images/uploads/hero_style_non-bleed_small.png
  "Image of smaller non-bleed hero graphics with dimensions")


  **Hero with bleeding illustration**


  ![Image of larger bleeding hero graphic with
  dimensions](/design-system/images/uploads/hero_style_bleed_large.png "Image of
  larger bleeding hero graphic with dimensions")


  ![Image of smaller bleeding hero graphics with
  dimensions](/design-system/images/uploads/hero_style_bleed_small.png "Image of
  smaller bleeding hero graphics with dimensions")


  **Hero with photograph**


  ![Image of larger photographic hero graphic with
  dimensions](/design-system/images/uploads/hero_style_photo_large.png "Image of
  larger photographic hero graphic with dimensions")


  ![Image of smaller photographic hero graphic with
  dimensions](/design-system/images/uploads/hero_style_photo_small.png "Image of
  smaller photographic hero graphic with dimensions")
accessibility: ''
research: ''
---
