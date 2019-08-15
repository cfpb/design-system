---
title: Featured Content Module
layout: variation
section: components
secondary_section: Content layouts
status: Proposed
description: >-
  Featured content modules (FCMs) function to highlight a specific piece of
  content within a page. They are not integral to the page, and could be removed
  while leaving the page integrity intact.


  Featured content modules, like a hero, consist of headline and description, an
  optional call to action, and a static or video visual. They are intended to be
  used in a main content column next to a sidebar.


  Information about Featured Content Modules can be found at:\

  *
  http://cfpb.github.io/design-manual/page-components/featured-content-module.html\

  *
  https://cfpb.github.io/capital-framework/components/cf-layout/#featured-content-module
variations:
  - variation_code_snippet: |-
      <section class="o-featured-content-module">
          <div class="o-featured-content-module_text">
              <h2>Featured content</h2>
              <p>
                  Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
                  instructior ex pri. Cu pri inani constituto, cum aeque noster
                  commodo cu.
              </p>
              <a class="a-link
                        a-link__jump
                        a-link__icon-after-text">
                  <span class="a-link_text">Read more about the feature</span>
                  {% include icons/right.svg %}
              </a>
          </div>
          <div class="o-featured-content-module_visual">
              <img class="o-featured-content-module_img"
                   src="https://dummyimage.com/1076x606/addc91/101820"
                   alt="">
          </div>
      </section>
    variation_description: The default state is the most default state of them all.
    variation_name: Visual anchored on the left
  - variation_code_snippet: |-
      <section class="o-featured-content-module
                      o-featured-content-module__right">
          <div class="o-featured-content-module_text">
              <h2>Featured map</h2>
              <p>
                  Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
                  instructior ex pri. Cu pri inani constituto, cum aeque noster
                  commodo cu.
              </p>
              <a class="a-link
                        a-link__jump
                        a-link__icon-after-text">
                  <span class="a-link_text">Read more about the feature</span>
                  {% include icons/right.svg %}
              </a>
          </div>
          <div class="o-featured-content-module_visual">
              <img class="o-featured-content-module_img"
                   src="https://dummyimage.com/1076x606/addc91/101820"
                   alt="">
          </div>
      </section>
    variation_description: >-
      To anchor a featured content module’s visual on the right (for example,
      when displaying a map with a copyright watermark on the right), add the
      `o-featured-content-module__right` modifier class to the
      `o-featured-content-module` organism. This anchors the right side of the
      image to the right of the available space so that the right side remains
      in view at all screen sizes.
    variation_name: Visual anchored on the right
  - variation_code_snippet: |-
      <section class="o-featured-content-module
                      o-featured-content-module__center">
          <div class="o-featured-content-module_text">
              <h2>Featured video</h2>
              <p>
                  Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
                  instructior ex pri. Cu pri inani constituto, cum aeque noster
                  commodo cu.
              </p>
              <a class="a-link
                        a-link__jump
                        a-link__icon-after-text">
                  <span class="a-link_text">Read more about the feature</span>
                  {% include icons/right.svg %}
              </a>
          </div>
          <div class="o-featured-content-module_visual">
              <img class="o-featured-content-module_img"
                   src="https://dummyimage.com/1076x606/addc91/101820"
                   alt="">
          </div>
      </section>
    variation_description: >-
      When the featured content module visual is a video, or a static image
      composed with its subject in the middle, add the
      `o-featured-content-module__center` modifier class to the
      `o-featured-content-module` organism. This anchors the center of the image
      to the center of the available space so that the focal point of the visual
      remains in view at all screen sizes.
    variation_name: Centered visual
usage: >
  **Use cases**


  Featured content modules should highlight a single piece of content. That
  content can be almost anything, from a webpage to a blog post to a PDF to a
  video.


  FCMs appear below the title and introductory paragraph on a page, and retain
  that position on all screen sizes.


  FCMs contain a headline, body copy text, a call to action (either a text link
  or a play button), and a graphical element related to the piece of content
  being featured. They are a “mini story” and never simply a dominant visual.


  FCMs can appear on any page type, though they are best suited for pages third
  level and below in the site map. They are designed to accommodate pages with
  either a left-hand navigation or right-hand sidebar.


  **Content guidelines**

  Text is full-width and displayed above the visual in the default/mobile view.
  When creating a static image for the visual, it should be 1076px × 606px (a
  16:9 aspect ratio), which is 2x the rendered width at the maximum size at
  which the visual will be seen (on a 600px wide display).


  **Behavior**


  At desktop size, the ratio of text and visual changes with screen size to keep
  the full height of the image visible. As available width dips below the
  maximum page width, the text area shrinks in width while the visual maintains
  a fixed width of 270px. That means that the height and aspect ratio of the
  visual will change as the screen shrinks, and the image will be cropped
  between 16% and 29% from each side.


  At larger screen sizes, the image moves to the right of the text, occupying a
  fixed width of 270px (equal to 3 of 12 columns at max page width). By default,
  the left edge of the image is anchored to the left side of the visual’s
  270px-wide area, and the right side is cropped off. The aspect ratio of the
  visual area increases as screen size increases, resulting in slightly
  different image cropping at different screen sizes, but the left edge of the
  image remains anchored in view. The full height of the image is always in
  view; the top and bottom are never cropped. See below for modifiers that
  change the image’s horizontal anchoring.
accessibility: ''
research: ''
---

