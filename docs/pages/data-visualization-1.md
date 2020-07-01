---
title: Data visualization
collection_name: pages
layout: variation
section: guidelines
description: >+
  Whether you’re using Excel, Tableau, D3.js, or any other program, follow these
  guidelines to create effective and consistent data visualizations. 


variation_groups:
  - variation_group_name: Introduction
    variation_group_description: >
      Data visualization can be an excellent way to increase understanding and
      make comparisons of data. Each graph should have a point that you want the
      user to walk away knowing.


      Using visuals to convey meaning and to tell stories engages the user and creates a memorable experience. Part of this is choosing the correct visualization for the data. Make sure you understand the data and the relationship of your data before you choose visuals to help explain it to others.


      Occasionally, data visualization isn’t the best approach. A well crafted sentence or table may be a better solution to convey specific points or a precise numerical interpretation. Graphs are most useful when you want the user to walk away with a general sense of the data and to interpret patterns.
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
  - variation_group_name: Accuracy
    variation_group_description: >-
      A chart is only as good as the validity of its data. It’s important to
      check both the data and chart several times with multiple people before
      publishing. One small error can invalidate the integrity of an entire
      visualization. Several errors in data accuracy can damage credibility.


      ##### KEY QUESTIONS

      * Is this an accurate way to represent this data?

      * Did someone else look at the chart and data for feedback?

      * If there are percentages, do they add up to 100? Why not?

      * What is the source of the data?
    variations:
      - variation_name: Notes section
        variation_description: >-
          When using charts that show percentages, users expect things to add up
          to 100%. If they don’t it undermines the integrity of the visuals by
          leaving the user with missing pieces.


          To remedy this effect add a note at the bottom to explain the missing data.


          > *Example*: Percentages may not sum to 100% due to rounding.


          Use notes to add in other caveats around the data like if it was taken from a specific time period.


          > *Example*: Percent change is based on a 3 month period (October-December) and compared to the previous year.


          > *Example*: Company-level information should be considered in context of total complaints, company size and market share in a given geographic area.
      - variation_name: Sources section
        variation_description: >-
          Including the source of the data in the visualization is a must. It
          adds credibility and transparency to the graph. The visualization
          could then be replicated using the mentioned sources which adds
          credibility.


          If you’re unable to link to the source, link to a spreadsheet of the data used

          to create the visualization.
  - variation_group_name: Audience
    variation_group_description: |-
      Consider your audience when you’re creating data visualization.

      ##### KEY QUESTIONS
      * Who is your audience?
      * What is their familiarity with data visualization?
      * How much information do they need?
    variations:
      - variation_name: General public
        variation_description: If your user group is general (i.e. the American public),
          stick with basic and most common chart types that people can easily
          understand. Adding emphasis and labels will help highlight the point
          of the visual and tell the story of the information. Consider using
          multiple simple charts to step the user through the data, rather than
          one big complex visualization.
      - variation_name: Specific users
        variation_description: If your data visualizations are designed with a specific
          audience in mind, take into consideration their familiarity with the
          data, visualization types, and the terminology used to label and
          describe data. More complex stories might necessitate more complex
          visuals, however, this does not mean it should lack emphasis.
  - variation_group_name: Chart components
    variation_group_description: >-
      Using the appropriate font not only increases consistency with the core
      brand, but assures legibility and good visual hierarchy. Proper labeling
      and titles help users quickly understand the chart and increases
      comprehension as well as helping with accessibility.


      ##### KEY QUESTIONS

      * Does your chart have a descriptive title and subtitle so someone who cannot see the chart could understand the general trends?

      * Have you included notes and a data source?

      * Is it clear when the data is from?
    variations:
      - variation_name: Font
        variation_description: >-
          All data, labels and titles for data visualizations should be in a
          sans-serif font. The preferred choices for fonts are: Avenir Next over
          Arial, and Arial over another sans serif font.


          While serif fonts are generally easier to read for long blocks of text, data visualizations rarely include long blocks. The lack of serifs, especially on numbers, helps cut down on the amount of lines and visual clutter. This lack also increases the legibility of small text by eliminating thin serifs.
---
