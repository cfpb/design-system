---
layout: variation
section: patterns
status: Released
variation_groups:
  - variations:
      - variation_code_snippet: >-
          <section class="o-featured-content-module">
              <div class="o-featured-content-module__text">
                  <h2>Featured content</h2>
                  <p>
                      Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
                      instructior ex pri. Cu pri inani constituto, cum aeque noster
                      commodo cu.
                  </p>
                  <a class="a-link
                            a-link--jump">
                      <span class="a-link__text">Read more about the feature</span>
                  </a>
              </div>
              <div class="o-featured-content-module__visual">
                  <img class="o-featured-content-module__img"
                      src="https://dummyimage.com/1076x606/addc91/101820"
                      alt="">
              </div>
          </section>
        variation_description: There is only one type of FCM layout. When the pattern
          appears on a page in a language that reads right to left, such as
          Arabic, the layout remains the same, but the text is aligned right
          rather than left.
        variation_name: Standard
    variation_group_name: Types
    variation_group_description: ""
guidelines: >-
  ### Placement 


  * Can appear on any [page type](https://cfpb.github.io/design-system/pages/) 

  * Should sit below a page’s introduction and retain that position on all screen sizes  


  ### Content guidelines 


  #### Heading 


  * Maximum 35 characters including spaces 


  #### Description 


  * Maximum 160 characters including spaces 

  * Should be action-oriented and succinctly state what the item is about and how it relates to the main content of the page 


  #### Call to action 


  * Include only one call to action. 

    * If your FCM doesn’t have a video, present one call-to-action link.  
    * If your FCM does have a video, do not present a call-to action link. The desired action is for the user to play the video, so the play button serves as a visual call-to-action.  
  * Call-to-action link guidelines 

    * Maximum 35 characters including spaces 
    * Should clearly tie to the heading and description 
    * Should begin with an action verb such as “explore,” “read,” “learn,” or “discover”  

  ### Image guidelines 


  * 1076px width by 606px height 

    * This is a 16:9 aspect ratio and 2x the rendered width.   
    * See the [behavior guidelines](https://cfpb.github.io/design-system/patterns/featured-content-module#behavior) below regarding how the image will crop as the browser width changes.   
  * If there is a video, a 60 by 60px play button will appear in the center of the image. Make sure the image’s subject is not obscured by the play button, particularly ensuring that no faces are covered by the button.
eyebrow: Featured content
title: Featured content module
description: A featured content module (FCM) is a “mini story” used to highlight
  a specific piece of content, such as a video. FCM content is featured rather
  than integral to the main content of the page.
use_cases: >-
  An FCM should call attention to a piece of content that might be new or
  otherwise relevant to— but not directly a part of— the main content on the
  page. FCM content shouldn’t be seen as integral to the page, meaning it could
  be changed or removed without taking away vital information the user needs or
  interrupting the user journey.  


  You may consider using an FCM if your content is one of the following. 


  * Timely: You want to highlight a new tool or development that could be impactful to visitors. Keep in mind that, when the content becomes dated and you remove it from the FCM, you must ensure you’re not removing the only way users can navigate to it. Be sure to plan a permanent home for the content. 

  * Localized: You want to promote content that applies to people in a specific geographic area. An FCM provides emphasis and placement that will help ensure that specific audience sees the content. When the content is removed, it won’t disrupt the main user flow of the page.  

  * CFPB’s stance: You want to show how a subject fits within the CFPB’s areas of expertise and what the CFPB’s stance is on it.
behavior: >-
  ### Large screen 


  * The image appears to the right of the content.  

  * The ratio of text and visual changes with screen size to keep the full height of the image visible. As available width dips below the maximum page width, the text area shrinks in width while the visual maintains a fixed width of 270px. That means that the height and aspect ratio of the visual will change as the screen shrinks, and the image will be cropped between 16% and 29% from each side. 


  ### Small screen 


  * The content drops below the image.
accessibility: ""
related_items: ""
last_updated: 2019-10-17T14:52:11.082Z
research: ""
---
