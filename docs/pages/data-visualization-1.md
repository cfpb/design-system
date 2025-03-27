---
title: Data visualization guidelines
collection_name: pages
layout: variation
section: guidelines
description: Data visualization can be a great way to tell stories, convey
  meaning, and help users make comparisons. At the CFPB, we’ve built the
  guidance below into our Content Management System (CMS) and Data visualization
  Excel file.
variation_groups:
  - variation_group_name: Bar chart
    variation_group_description: Bar charts are good at showing comparisons of discrete items or categories.
    variations:
      - variation_is_deprecated: false
        variation_name: Vertical bar chart
        variation_description: "![Vertical bar chart
          example](/design-system/images/uploads/vertical_bar_chart.png)"
      - variation_is_deprecated: false
        variation_name: Horizontal bar chart
        variation_description: "![Horizontal bar chart
          example](/design-system/images/uploads/horizontal_bar_chart.png)"
      - variation_is_deprecated: false
        variation_name: Grouped bar chart
        variation_description: "![Grouped bar chart
          example](/design-system/images/uploads/grouped_bar_chart.png)"
      - variation_is_deprecated: false
        variation_name: Stacked bar chart
        variation_description: "![Stacked bar chart
          example](/design-system/images/uploads/stacked_bar_chart.png)"
      - variation_is_deprecated: false
        variation_name: Bar chart stacked to 100 percent
        variation_description: "![Example of a bar chart stacked to
          100%](/design-system/images/uploads/bar_chart_stacked_to_100.png)"
  - variation_group_name: Line chart
    variation_group_description: Line charts are good at showing a change over time. Start your axis at 0.
    variations:
      - variation_is_deprecated: false
        variation_name: Simple line chart
        variation_description: "![Simple line chart
          example](/design-system/images/uploads/simple_line_chart.png)"
      - variation_is_deprecated: false
        variation_name: Date/time chart 
        variation_description: A date/time chart is a line chart which graphs continuous
          data over a period of time. The chart includes buttons to select time
          ranges of 1, 3, or 5 years. The x axis is always based on time, and
          the period of time can be controlled in more detail with the slider
          control. Clicking and dragging the handles of the slider changes the
          length of time displayed in the chart, while moving the slider within
          the bar changes the starting and ending dates in the chart.
  - variation_group_name: Pie chart
    variation_group_description: Pie charts are good at showing parts of a whole.
      Slices should always add up to 100 percent.
  - variation_group_name: Area chart
    variation_group_description: Area charts are good at showing trends over time
      much like line charts. Unlike line charts, area charts use filled areas
      which help draw attention to the changing values. They are good at
      emphasizing the size of change over time.
  - variation_group_name: Tile grid map
    variation_group_description: Tile grid maps can show comparative state data
      where population figures or geographic size are not part of the story. In
      tile grid maps, each state is the same size and shape. This prevents
      regions with large areas from dominating a map and prevent regions with
      small areas from going unnoticed.
guidelines: >-
  ### Limit the data you include 


  **Include no more than five types of data in your chart.** For example, a line chart should have no more than five lines, and a pie chart should have no more than five slices. It is important not to exceed this number to ensure charts are readable and accessible. If you need to show more than five data types, break your chart into multiple smaller charts.  


  ### Use accessible colors and pattens 


  When used properly, color can help clarify relationships between data, provide emphasis for certain data points, and maintain a consistent brand voice. When used poorly, color can overwhelm the user, make the data confusing and break with brand standards to appear inconsistent. 


  * **Color:** Refer to our [Data visualization color palettes](https://cfpb.github.io/design-system/foundation/color#data-visualization-palettes) and [Color accessibility guidelines](https://cfpb.github.io/design-system/foundation/color#accessibility). 

  * **Patterns:** In addition to colors, use patterns to promote accessibility. We’ve built the following patterns into our CMS and Excel template: square dot, round dot, dash, and long dash.


  ### Include critical information 


  Elements such as a chart title and alt text help validate the data and increase comprehension. Please reference the image and lists below regarding required and optional information to include in a data visualization. 


  #### Required information


  * **Title:** The title should be as descriptive as possible to give users a sense of what the chart will be about.  

    * **Character count:** No more than a single line at desktop screen size (approx. 95 characters including spaces) 
  * **Alt text (short description):** Alt text should include the chart type, type of data, and main takeaway. This text will not be visible on the page. Rather, it will be read by a screen reader.  

    * **Character count:** No more than 250 characters including spaces
    * **Example:** *“Line chart showing average credit card debt between June 2018 and September 2019 stayed relatively stable across respondents, whether they reported difficulty paying expenses.”*
  * **Downloadable source data:** Provide the data used to create the chart in an Excel or CSV file. Within the file, format the data as a table with header columns for accessibility. Please reference this table accessibility video for guidance.   

    * **Download text:** Write a short phrase of text to appear as the link text when a user clicks to download the data. The text should succinctly describe the data the file contains so it is clear to a user using a screen reader what they are downloading. 
  * **Axis labels:** Include and label one X axis and one Y axis per chart. 


  #### Optional information


  If relevant to your chart, you may include the following information. 


  * **Figure number:** If there will be many charts on a page, include a figure number with each chart. This will appear as text above the chart’s title.

  * **Intro text:** Can be used to call out key takeaways and trends in the chart data. This will help a user understand why they may want to explore the data.

    * **Character count:** No more than three lines at desktop screen size (approx. 250 characters including spaces)
  * **Data source:** Cite where the data is from. This helps to promote trust and validity. Whenever possible, link to the original source. 

  * **Date published:** The date the data in the chart was last updated.

  * **Notes:** Include any additional notes about the chart and data to describe aspects such as caveats or inconsistencies with the data. 

  * **Supporting text:** Increase the visualization’s accessibility by further describing it in the main body of text. In addition to text placed within the data visualization itself, describe the chart data, trends, and key takeaways in greater detail in the paragraphs directly following the visualization. This is especially necessary for more complex charts.
eyebrow: Data visualization
use_cases: >-
  When deciding if and how to create a data visualization, consider the
  following. 


  * Is a data visualization truly the best format for your information? Data visualizations can be powerful in showing aspects such as patterns and comparisons. But sometimes data visualization isn’t the best approach, and a well-crafted sentence or table may actually be more impactful in conveying a specific point. 

  * Make sure you understand the data before deciding how to visualize it. For instance, bar graphs are good at showing comparisons whereas line graphs are good at showing a change over time.  

  * Consider your audience, their familiarity with data visualization, and how much information they need. 

  * Ensure your data visualization communicates a main point that users can easily recognize and walk away with.
accessibility: >-
  Enabling all users to comprehend data visualizations is a key part of being a
  government agency that serves the entire American public.  


  As stated in the Guidelines section above, please ensure your visualization includes the following. 


  * Accessible colors and patterns

  * Required information including a chart title, alt text, downloadable source data, download text, and axis labels
research: ""
related_items: >-
  * [Data visualization color
  palettes](https://cfpb.github.io/design-system/foundation/color#data-visualization-palettes-1)

  * [Color accessibility guidelines](https://cfpb.github.io/design-system/foundation/color#accessibility)[](https://cfpb.github.io/design-system/guidelines/bar-charts)[](https://cfpb.github.io/design-system/guidelines/pie-charts)
---
