---
title: Updating this documentation
layout: variation
section: getting-started
secondary_section: Getting started
description: >-
  ## Creating new pages


  1. Through the Design System site you can quickly add a new page. Navigate to
  the section of the site where you’d like to add a new page. For example, if
  you want to add a new component page, make sure you’re in the “Components”
  section. 

  2. Click the “+ Add new page” button at the bottom of the page.

  3. If you haven’t already, log in to our CFPB GitHub repo.

  4. Fill out the relevant fields of the CMS that appear on the left, a preview
  of your page will appear on the right. You can edit the fields on the left as
  needed. The rich text field will let you easily style the text, but you can
  use additional markdown as needed to create the page content you want.

  5. Click “Save” at the top of the screen to save your work. Netlify will
  create a pull request in our public GitHub repo:
  <https://github.com/cfpb/design-system/pulls>. 

  6. Your work will not be visible until your pull request has been approved and
  merged.


  ## Editing pages


  1. Navigate to the page you’d like to edit. 

  2. At the bottom of the page, click the “**Edit this page**” button that has a
  pencil icon.

  3. If you haven’t already, log in to our CFPB GitHub repo.
     The left side of your screen will show the CMS fields, the right side shows a preview of the page. You can edit the fields on the left as needed. The rich text field will let you easily style the text, but you can use additional markdown as needed to create the page content you want.
  4. Click “Save” at the top of the screen to save your work. Netlify will
  create a pull request in our public GitHub repo:
  <https://github.com/cfpb/design-system/pulls>. 

  5. Your work will not be visible until your pull request has been approved and
  merged.


  ## Uploading images


  When editing a page, click the `+` icon to add an image. Select an image from
  the current library or upload a new image from your computer. Note: Due to a
  bug in Netlify CMS, the image might not immediately appear in the preview
  pane.


  ![Screenshot of image upload in
  CMS](/design-system/images/uploads/uploading-cms-images.png "Screenshot of
  image upload in CMS")


  ## Updating navigation


  Change a page’s location in the side navigation by changing the "Navigation
  Section" field in the CMS.


  ![Screenshot of navigation section in
  CMS](/design-system/images/uploads/netlify-cms-navigation-section.png
  "Screenshot of navigation section in CMS")


  ## Updating design tokens


  CFPB's design tokens are stored in a spreadsheet located in the repository's
  [`/docs/_data
  folder`](https://github.com/cfpb/design-system/tree/master/docs/_data). You
  can add new tokens and change existing ones by editing the file in your
  favorite spreadsheet software.


  ![Screenshot of design tokens
  spreadsheet](/design-system/images/uploads/design-tokens-spreadsheet.png
  "Screenshot of design tokens spreadsheet")


  To add a spec to a component variation's specs tables, add the applicable
  component variation to **column A**. Use the format
  `<component-name>_<variation-name>`. For example, to add the `Button
  background` spec in the above screenshot to the first variation on the
  [buttons component
  page](https://cfpb.github.io/design-system/components/buttons#variations), you
  would add `buttons_primary-button` to the row's first cell.


  **Column B** is the human-readable name of the specification and **column C**
  is the machine-readable name of the specification (we use [Less
  variables](https://github.com/cfpb/development/blob/master/standards/css.md#less)).
  The value of the specification can be added to **column D**. This will often
  be another Less variable.


  **Columns E - M** are the specifications' values. Complete only the applicable
  columns. For example, our headings (`h1`, `h2`, etc.) only have `Pixels` and
  `Points` defined because they're the only things needed to size a heading
  (pixels for websites and points for print documents). The `Second` and color
  columns are blank because time and colors don't concern headings.


  ![Screenshot of headings in design tokens
  spreadsheet](/design-system/images/uploads/design-tokens-values.png
  "Screenshot of headings in design tokens spreadsheet")
last_updated: 2019-09-12T20:41:36.822Z
---

