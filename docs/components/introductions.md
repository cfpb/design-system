---
title: Introductions
permalink: /components/introductions
layout: component
collection_name: components
section: components
status: Proposed
intro: >-
  Information about Introductions can be found at:


  * http://cfpb.github.io/design-manual/global-elements/text-introductions.html

  * https://cfpb.github.io/design-manual/global-elements/item-introduction.html


  The text introduction component is the standard page introduction component
  used across all pages that do not have a
  [hero](https://cfpb.github.io/design-system/components/heroes) or item
  introduction.


  On [landing](https://cfpb.github.io/design-system/templates/landing-pages) or
  [sub-landing
  pages](https://cfpb.github.io/design-system/templates/sublanding-pages), the
  text introduction may be accompanied by a breakout sidebar to highlight a
  specific piece of content from the section.


  The item introduction component is a variation of the text introduction
  component used on pages found in filterable lists such as blog posts, press
  releases, or documents.
variations:
  - variation_code_snippet: <marquee>We don't have CF code to add for this.</marquee>
    variation_description: >-
      Layout as seen with a standard right sidebar:


      ![Image of a text introduction component with a standard right
      sidebar](/design-system/images/uploads/textintro_intro.png)
    variation_jinja_code_snippet: ''
    variation_name: Standard text introduction
    variation_specs: >-
      ![](/design-system/images/uploads/textintro_style1.png)


      * Spacing: 45px margin above, 60 px margin below.

      * Page title: Heading 1

      * Subheader: Lead paragraph style

      * Optional body paragraph and link: Avenir paragraph

      * At breakpoints below 600: Page title and lead paragraph drop down one
      type size to make reading on smaller devices easier.


      Related:


      * Typography
  - variation_code_snippet: <marquee>We don't have CF code to add for this.</marquee>
    variation_description: >-
      Layout as seen with a ‘breakout’ highlight in the right sidebar area:


      ![Image of a text introduction component with a "breakout" highlight in
      the right sidebar](/design-system/images/uploads/textintro_intro2.png)
    variation_name: Text introduction with optional breakout sidebar
    variation_specs: >-
      ![](/design-system/images/uploads/textintro_style2.png)


      * Spacing: The breakout may be taller than the Text Intro content, in
      which case the margin beneath the breakout should be 60px.

      * Required elements: slug title and paragraph text.

      * Imagery: May use either a circle (1x1) image or a 16x9 ratio image.


      Component parts:


      * Illustration

      * Photography
  - variation_code_snippet: <marquee>We don't have CF code to add for this.</marquee>
    variation_name: Item introduction
    variation_specs: >-
      ![](/design-system/images/uploads/itemintro_style.png)


      * Required components: Only the post title is absolutely required and the
      category label should be used in the vast majority of cases. (Category
      label minicons are optional.)

      * Optional components: Subheader paragraph, author, dates, and social
      sharing icons.

      * Spacing: 45 px margin above, 60 px margin below.


      Component parts:


      * Typography

      * Minicons

      * Links
usage: >-
  #### Use cases


  **_Text introductions_**


  Text introductions should be used on every page, except in cases when a hero
  is used.


  The optional breakout sidebar should be used when a specific piece of content
  needs to be highlighted that is related to but not a continuation of content
  in the introduction. The breakout sidebar may contain a related posts element
  or imagery. Instances where the breakout sidebar is successfully used include
  the Careers sub-landing page or Rulemaking sub-landing page.


  WHERE TO USE


  * Landing page *

  * Sub-landing page *

  * Browse page

  * Learn page

  * Document Detail page


  Note (*): The breakout sidebar is only an option on landing and sub-landing
  pages.


  **_Item introductions_**


  WHEN TO USE


  * When introducing a specific article or post (such as a press release or blog
  post) or document or group of documents (such as a report, rule or enforcement
  action) linked through a filterable list.

  * The page contains specific content about one subject; there aren’t any child
  pages that drill down to anything more specific.


  WHEN OTHER OPTIONS ARE BETTER


  * When creating general content pages, even if the content is detailed or
  lengthy.


  WHERE TO USE


  * Learn page

  * Document detail page


  - - -


  #### Behavior


  _**Text introductions**_


  901+ breakpoints, standard grey-welled sidebar on the right


  ![](/design-system/images/uploads/textintro_behavior1.png)


  901+ breakpoints, breakout sidebar on the right


  ![](/design-system/images/uploads/textintro_behavior2.png)


  900 breakpoints and less, standard grey-welled sidebar (stacked to prefooter)


  ![](/design-system/images/uploads/textintro_behavior3.jpg)


  900 breakpoints and less, breakout sidebar stacked immediately after text
  intro


  ![](/design-system/images/uploads/textintro_behavior4.jpg)


  **_Item introductions_**


  901+ breakpoints, item introduction with sidebar to the right


  ![](/design-system/images/uploads/itemintro_behavior1.png)


  900 and under breakpoints, item intro takes up full width of viewport


  ![](/design-system/images/uploads/itemintro_behavior2.png)


  - - -




  #### Content guidelines


  **_Text introductions_**


  Headings should be as succinct as possible, ideally staying on a single line
  at max column width; 35 characters or less.


  Heading should be in sentence case


  Use the word “and” instead of “&”


  Lead paragraph beneath heading should also be succinct, roughly 1-3 sentences;
  350 characters maximum. This paragraph should explain why the page exists (how
  does its content tie back to the CFPB mission?) and the value add to the user
  (what will they get out of the content on this page?).


  The optional description paragraph can be anywhere from 1-5 sentences–100-800
  characters–depending on the needs of the page. If a breakout sidebar is being
  used, longer text may be appropriate to help match the text introduction
  length to the sidebar length. For emphasis, a call to action last sentence can
  be entered as its own paragraph underneath this lead paragraph, either linked
  to a url or not.


  The optional call to action link should be one line; about 40 characters or
  less. Link content should follow link guidelines.


  **_Item introductions_**


  Category should always be selected if it is a page type that is categorized.


  Headings should be as succinct as possible, ideally no more than 2 lines at
  max column width; 80 characters or less.


  The optional subheader paragraph should be additive to the user experience.
  Most pages currently using this component do not use the subheader element.


  If using the subheader paragraph, it should expand on the page title and help
  explain why the reader should care. No more than 2 sentences; 50 words.
accessibility: ''
research: ''
help_us: |-
  * [github issue goes here](<>)
  * [email us](<>)
---

