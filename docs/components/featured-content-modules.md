---
title: Featured Content Module
layout: variation
section: components
secondary_section: Layout options
status: Released
description: Featured content modules (FCMs) highlight one specific piece of
  content at the top of a page (typically a sublanding page). Content is
  featured temporarily and should not be considered a permanent part of the
  page. Content can be a video, link, or download.
variation_groups:
  - variation_group_name: Standard featured content module
    variations:
      - variation_description: >-
          Featured content modules appear below the title and introductory
          paragraph on a page, and retain that position on all screen sizes.
          They can appear on any page type, though they are best suited for
          pages third level and below in the site map.  See Variations and
          Behavior on responsive image guidelines.


          ##### When to use


          * When content is new or relevant to—but not directly a part of—the main content on the page

          * When content needs to be highlighted because it’s timely, impactful, or unique to the Bureau

          * When content is a “mini-story” containing a headline, body copy, call to action, and image




          ![Image of a featured content module](/design-system/images/uploads/fcm-desktop02.png)
  - variations:
      - variation_code_snippet: >-
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
        variation_description: "By default, the featured content module visual is
          anchored on the left.  "
        variation_name: Visual anchored on the left (default)
      - variation_code_snippet: >-
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
        variation_description: To anchor a featured content module’s visual on the right
          (for example, when displaying a map with a copyright watermark on the
          right), add the `o-featured-content-module__right` modifier class to
          the `o-featured-content-module` organism. This anchors the right side
          of the image to the right of the available space so that the right
          side remains in view at all screen sizes.
        variation_name: Visual anchored on the right
      - variation_code_snippet: >-
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
        variation_description: When the featured content module visual is a video, or a
          static image composed with its subject in the middle, add the
          `o-featured-content-module__center` modifier class to the
          `o-featured-content-module` organism. This anchors the center of the
          image to the center of the available space so that the focal point of
          the visual remains in view at all screen sizes.
        variation_name: Centered visual
    variation_group_name: Image variations
    variation_group_description: >-
      The featured content module image or video is anchored left by default.
      There may in some cases be a need to anchor the image or video either
      right or center. For example, video should typically be centered. 


      The modifiers below describe how to change how the image or video is anchored, which affects what portion of the image is visible at different desktop breakpoints.
use_cases: >-
  Use a featured content module (FCM) when you want to highlight something
  that’s:


  * **Timely**: Highlights a new tool or development. Keep in mind: When you remove dated content from a FCM, make sure you're not getting rid of the only way users can navigate to it. Make sure to plan a permanent home for the content.


  * **Impactful**: Lets people know immediately how the content will affect them, how they can use it, and how it might enhance their understanding of—or experience with—the primary page content.


  * **Localized**: New content that specifically applies to people in a specific geographic area; it may be important for that audience to see their specific content first, and when it’s removed from the page it won’t disrupt the usual user flow.


  * **Unique**: Content that is specifically in the Bureau’s “wheelhouse” because of our position as an approachable, trusted, unbiased authority.


  Featured content modules should highlight a single piece of content. That content can be almost anything, from a webpage to a blog post to a PDF to a video.


  FCMs appear below the title and introductory paragraph on a page, and retain that position on all screen sizes.


  FCMs contain a headline, body copy text, a call to action (either a text link or a play button), and a graphical element related to the piece of content being featured. They are a “mini story” and never simply a dominant visual.


  FCMs can appear on any page type, though they are best suited for pages third level and below in the site map. They are designed to accommodate pages with either a left-hand navigation or right-hand sidebar.


  ##### When other options are better


  * When the content is an integral, long-term part of the intended user journey, then it should have a more permanent home on the page.


  * When there’s no link or video for the user to interact with. If you just want to visually differentiate your content from its surroundings, consider using a well or inline text instead.
content_guidelines: >-
  FCMs contain a headline, descriptive body copy text, an optional
  call-to-action link, and a graphical element related to the piece of content
  being featured. They are a “mini story” and never simply a dominant visual.


  * Headings should be as succinct as possible and 35 characters or less (including spaces).


  * Descriptions should be action-oriented and let the user know what they will get out of the featured content and how it's related to the main page content, not just what it is. Descriptions should be 160 characters or less (including spaces).


  * Links serve as a call-to-action, so they should begin with an action verb like “explore,” “read,” “learn,” or “discover.” When using an action verb, be specific and tie the action back to the content and what the user will get from it. As a best practice, only include up to one link in a FCM. Link text should be 35 characters or less (including spaces).


  * Do not include a link with a video FCM. In a FCM that features video, the desired action is for the user to play the video, so the play button serves as a visual call-to-action. This makes it especially important for the description in the FCM to be action-oriented. Encourage users to take the action of watching the video, and relate directly back to the video content and what they’ll get out of it.


  Text is full-width and displayed above the visual in the default/mobile view. When creating a static image for the visual, it should be 1076px × 606px (a 16:9 aspect ratio), which is 2x the rendered width at the maximum size at which the visual will be seen (on a 600px wide display).
behavior: >-
  At desktop size, the ratio of text and visual changes with screen size to keep
  the full height of the image visible. As available width dips below the
  maximum page width, the text area shrinks in width while the visual maintains
  a fixed width of 270px. That means that the height and aspect ratio of the
  visual will change as the screen shrinks, and the image will be cropped
  between 16% and 29% from each side.


  At larger screen sizes, the image moves to the right of the text, occupying a fixed width of 270px (equal to 3 of 12 columns at max page width). By default, the left edge of the image is anchored to the left side of the visual’s 270px-wide area, and the right side is cropped off. The aspect ratio of the visual area increases as screen size increases, resulting in slightly different image cropping at different screen sizes, but the left edge of the image remains anchored in view. The full height of the image is always in view; the top and bottom are never cropped. See below for modifiers that change the image’s horizontal anchoring.
accessibility: ""
last_updated: 2019-10-17T14:52:11.082Z
research: ""
---
