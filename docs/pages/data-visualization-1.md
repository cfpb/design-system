---
title: Data visualization
collection_name: pages
layout: variation
section: guidelines
description: >+
  Whether you’re using Excel, Tableau, D3.js, or any other program, follow these
  guidelines to create effective and consistent data visualizations. 


  Data visualization can be an excellent way to increase understanding and make comparisons of data. Each graph should have a point that you want the user to walk away knowing.


  Using visuals to convey meaning and to tell stories engages the user and creates a memorable experience. Part of this is choosing the correct visualization for the data. Make sure you understand the data and the relationship of your data before you choose visuals to help explain it to others.


  Occasionally, data visualization isn’t the best approach. A well crafted sentence or table may be a better solution to convey specific points or a precise numerical interpretation. Graphs are most useful when you want the user to walk away with a general sense of the data and to interpret patterns.


variation_groups:
  - variation_group_name: Accessibility
    variation_group_description: >-
      Allowing all users to be able to comprehend charts and graphics is a key
      part of being a government agency that serves the entire American public.
      This is an interpretation of what it means for a chart to be 508 compliant
      and accessible, starting with descriptive titles (see the Data
      visualization chart components subsection on titles) and not only relying
      on color to connect data to its meaning (with details in the Data
      visualization color section).


      ##### KEY QUESTIONS

      * How would someone using a screen reader interact with this visualization?

      * How would someone with low vision interact with this visualization?
    variations:
      - variation_name: Alt tags
        variation_description: >-
          Alt tags are what a screen reader will say instead of the image. This
          is important for not only web materials, but charts that are in pdfs
          and charts that are placed as images into word documents.


          Screen readers read all of the text in an alt tag without allowing users to speed up, or skip. Make sure the information in the alt tag is descriptive but succinct.


          Alt tags should include:


          * One sentence of what the chart is, including the chart type for users with limited vision who can see part of it, but may not be able to have a full understanding of the graph. Example: "Bar chart showing complaints by type for New York metro area, New York state and the United States."


          * A link to a CSV or other machine-readable data format with the data so people with impaired vision can tab through the data with a screen reader. The data should have descriptive column labels and provide a link.
      - variation_name: Color contrast and color blindness
        variation_description: See the color section of these data visualization guidelines.
---
