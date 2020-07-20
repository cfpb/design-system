---
title: Featured content module
layout: variation
section: patterns
status: Released
description: "Featured content modules (FCMs) highlight one specific piece of
  content at the top of a page. Content is featured temporarily and not a
  permanent part of the page. Content can be a video, link, or download.\r"
variation_groups:
  - variation_group_name: Standard featured content module
    variations:
      - variation_description: >-
          FCMs contain a headline, body copy text, a call to action (either a
          text link or a play button), and a graphical element related to the
          piece of content being featured. They are a “mini story” and never
          simply a dominant visual.

          FCMs appear below the page introduction, and retain that position on all screen sizes. They are designed to accommodate pages with either a left-hand navigation or right-hand sidebar. <br>


          ![Image of a featured content module](/design-system/images/uploads/fcm-desktop02.png)
        variation_specs: >-
          #### Desktop style


          * Module spans the full width of the page’s content area and is 220px tall at maximum page width. It appears 60px underneath the header/intro paragraph of the page.

          * Background color of module is Gray 5 with a 1px Gray 40 stroke.

          * Visual is always 270px wide and 220px tall at maximum page width.

          * Text spans 5 columns at maximum page width and is left and top aligned. There is 30px of padding around all sides of the text.

          * The ratio of text and visual changes with screen size to keep the full height of the image visible. As available width dips below the maximum page width, the text area shrinks in width while the visual maintains a fixed width of 270px. That means that the height and aspect ratio of the visual will change as the screen shrinks, and the image will be cropped between 16% and 29% from each side.

          * Heading: H3, 35 maximum character count (including spaces)

          * Body copy: 16px, appears 15px below the headline, 160 maximum character count (including spaces)

          * Call to action link: 16px, standard link colors, appears 15px below body copy, 35 maximum character count (including spaces)

          * Play button (for FCMs with a video): 60px diameter, Black background at 75% opacity that changes to Pacific on hover, White icon, 2px Gray 5 border, centered in the visual


          #### Differences in style at mobile size


          * Text and visual are stacked instead of side by side with 30px space between text and top of visual

          * Headline: H4

          * Visual is always in a 16:9 ratio

          * 15px of left, right, and bottom padding around all content in the FCM
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
                  </a>
              </div>
              <div class="o-featured-content-module_visual">
                  <img class="o-featured-content-module_img"
                      src="https://dummyimage.com/1076x606/addc91/101820"
                      alt="">
              </div>
          </section>
        variation_description: By default, the featured content module visual is
          anchored on the left, so that the left side remains in view at all
          screen sizes.
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
                  </a>
              </div>
              <div class="o-featured-content-module_visual">
                  <img class="o-featured-content-module_img"
                      src="https://dummyimage.com/1076x606/addc91/101820"
                      alt="">
              </div>
          </section>
        variation_description: In cases where the featured content module’s visual
          should be anchored to the right—for example, when displaying a map
          with a copyright watermark on the right—add the
          `o-featured-content-module__right` modifier class to the
          `o-featured-content-module` organism. This anchors the right side of
          the image to the right of the available space so that the right side
          remains in view at all screen sizes.
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
    variation_group_name: Variations
    variation_group_description: >-
      The modifiers below describe how to change how the featured content module
      visual is anchored. This affects what portion of the image or video is
      visible at different desktop breakpoints.


      The featured content module visual is anchored left by default, but there are cases in which right or center anchoring is preferred. For example, video should typically be centered.
use_cases: >-
  Featured content modules (FCMs) highlight a specific piece of content at the
  top of a page. They are meant to call attention to a related piece of content
  that might be new or otherwise relevant to — but not directly a part of — the
  main content on the page, the primary intended user action, or the user
  journey.


  The goal of an FCM is to have the user do one of three things: learn something (usually by navigating to other content), watch something, or download something (a printable tool or resource). FCMs can appear on any page type, though they are best suited for pages third level and below in the site map.


  FCM content shouldn’t be seen as integral to the page, meaning it could be changed or removed without taking away vital information the user needs or interrupting the user journey. Therefore, this module is not intended to support the site IA as the primary, permanent location for content. When the content is an integral, long-term part of the intended user journey, then it should have a more permanent home on the page.


  Use a featured content module (FCM) when you want to highlight something that’s:


  * **Timely**: Highlights a new tool or development. Keep in mind: When you remove dated content from a FCM, make sure you're not getting rid of the only way users can navigate to it. Make sure to plan a permanent home for the content.

  * **Impactful**: Lets people know immediately how the content will affect them, how they can use it, and how it might enhance their understanding of — or experience with — the primary page content.

  * **Localized**: New content that specifically applies to people in a specific geographic area; it may be important for that audience to see their specific content first, and when it’s removed from the page it won’t disrupt the usual user flow.

  * **Unique**: Content that is specifically in the Bureau’s “wheelhouse” because of our position as an approachable, trusted, unbiased authority.


  When there’s no link or video for the user to interact with, and you still want to visually differentiate your content from its surroundings, consider using a well or inline text instead.
guidelines: >-
  ### Content guidelines


  FCMs contain a headline, descriptive body copy text, an optional call-to-action link, and a graphical element related to the piece of content being featured. They are a “mini story” and never simply a dominant visual.


  * Headings should be as succinct as possible and 35 characters or less (including spaces).

  * Descriptions should be action-oriented and let the user know what they will get out of the featured content and how it's related to the main page content, not just what it is. Descriptions should be 160 characters or less (including spaces).

  * Links serve as a call-to-action, so they should begin with an action verb like “explore,” “read,” “learn,” or “discover.” When using an action verb, be specific and tie the action back to the content and what the user will get from it. As a best practice, only include up to one link in a FCM. Link text should be 35 characters or less (including spaces).

  * Do not include a link with a video FCM. In a FCM that features video, the desired action is for the user to play the video, so the play button serves as a visual call-to-action. This makes it especially important for the description in the FCM to be action-oriented. Encourage users to take the action of watching the video, and relate directly back to the video content and what they’ll get out of it.


  ### Stylistic guidelines


  Text is full-width and displayed above the visual in the default/mobile view. When creating a static image for the visual, it should be 1076px × 606px (a 16:9 aspect ratio), which is 2x the rendered width at the maximum size at which the visual will be seen (on a 600px wide display).
behavior: >-
  | Above 600 px | Below 601 px |

  | ------------ | ------------ |

  | ![](/design-system/images/uploads/fcm-desktop02.png) | ![](/design-system/images/uploads/fcm-mobile02.png) |


  ### Responsive visual behavior


  At desktop size, the ratio of text and visual changes with screen size to keep the full height of the image visible. As available width dips below the maximum page width, the text area shrinks in width while the visual maintains a fixed width of 270px. That means that the height and aspect ratio of the visual will change as the screen shrinks, and the image will be cropped between 16% and 29% from each side.


  At larger screen sizes, the image moves to the right of the text, occupying a fixed width of 270px (equal to 3 of 12 columns at max page width). By default, the left edge of the image is anchored to the left side of the visual’s 270px-wide area, and the right side is cropped off. The aspect ratio of the visual area increases as screen size increases, resulting in slightly different image cropping at different screen sizes, but the left edge of the image remains anchored in view. The full height of the image is always in view; the top and bottom are never cropped. See above for modifiers that change the image’s horizontal anchoring.
accessibility: ""
research: ""
related_items: "* [Variables for featured content
  modules](https://cfpb.github.io/design-system/development/variables#heroes-an\
  d-featured-content-modules)"
last_updated: 2019-10-17T14:52:11.082Z
secondary_section: Layout options
---
