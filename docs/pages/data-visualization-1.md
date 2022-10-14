---
title: Data visualization guidelines
collection_name: pages
layout: variation
section: guidelines
eyebrow: Data visualization
description: 'Data visualization can be an excellent way to increase
  understanding of information and make comparisons of data. Using visuals to
  convey meaning and tell stories can engage the user and create a memorable
  experience. '
variation_groups:
  - variation_group_name: Types
    variation_group_description: >-
      Data visualization types commonly produced by the CFPB include the
      following. 


      * [Bar chart](https://cfpb.github.io/design-system/guidelines/bar-charts)

      * [Line chart](https://cfpb.github.io/design-system/guidelines/line-charts)

      * [Pie chart](https://cfpb.github.io/design-system/guidelines/pie-charts)

      * Map


      A data visualization may appear as a static image, such as in a report or social media graphic, or as an interactive graphic, such as on a web page detailing [origination activity for auto loans](https://www.consumerfinance.gov/data-research/consumer-credit-trends/auto-loans/origination-activity/).
    variations: []
use_cases: >-
  It is critical to choose the correct visualization for your data. Make sure
  you understand the data and the relationship of your data before you decide
  how to visualize it. It's also important to ensure your data visualization
  communicates a main point that users can easily recognize and walk away with.


  Occasionally, data visualization isn’t the best approach. A well-crafted sentence or table may work better to convey a specific point or precise numerical interpretation. Graphs are most useful when you want the user to walk away with a general sense of the data and to interpret patterns.


  ### Audience


  Consider your audience when creating a visualization. 


  * Who is your audience?

  * What is their familiarity with data visualization?

  * How much information do they need?


  #### General public


  If your user group is general (i.e. the American public), stick with basic and most common chart types that people can easily understand. Adding emphasis and labels will help highlight the point of the visual and tell the story of the information. Consider using multiple simple charts to step the user through the data, rather than one big complex visualization.


  #### Specific users


  If your data visualization is designed with a specific audience in mind, take into consideration their familiarity with the data, visualization types, and terminology used to label and describe data. More complex stories might necessitate more complex visuals, however, this does not mean it should lack emphasis.
guidelines: >-
  Whether you’re using Excel, Tableau, D3.js, or any other program, follow these
  guidelines to create effective and consistent data visualizations.


  ### Font


  All data, labels, and titles for data visualizations should be in a sans-serif font. While serif fonts are generally easier to read for long blocks of text, data visualizations rarely include long blocks. The lack of serifs, especially on numbers, helps cut down on the amount of lines and visual clutter. This lack also increases the legibility of small text by eliminating thin serifs.


  * Use Avenir Next if it is available.

  * If Avenir Next is not available, use Arial. 


  Using the appropriate font not only increases consistency with the core brand, it assures legibility and good visual hierarchy. 


  ### Color


  When used properly, color can help clarify relationships between data, provide emphasis for certain data points, and maintain a consistent brand voice. When used poorly, color can overwhelm the user, make the data confusing, and break with brand standards.


  When using color, ensure the following.


  * Your use of color has a purpose.

  * You’re not relying solely on color to connote meaning. Use other visual qualities such as patterning to distinguish between data points. 

  * You’ve accounted for color blindness. We use specific color combinations to create accessible, on-brand data visualizations. [View our data visualization color palettes](https://cfpb.github.io/design-system/foundation/color#data-visualization-palettes-1). We also have a set of guidelines detailing the accessible use of color in both web and print. [View color accessibility guidelines](https://cfpb.github.io/design-system/foundation/color#accessibility).


  ### Chart components


  Elements such as clear titles and proper labeling help users quickly understand data visualizations, increase comprehension, and contribute to accessibility.


  ![Chart components](/design-system/images/uploads/parts-of-a-chart_titles.png)


  #### Figure number


  The figure number style varies depending on where the data visualization is presented.  


  * In a report, use the Figure number style (all caps).

  * On a web page, use the H5 heading style.

  * On a blog or social post, do not include a figure number.


  #### Title


  Titles should be as descriptive as possible to give users a sense of what the chart will be about and ensure someone who cannot see the chart can understand the general trends. This provides users a framework of what they are viewing. It also helps with 508 accessibility and decreases the amount of text necessary in alt tags.


  * Write the title to provide an overview of what the graph is about.

  * Use the h3 heading style.

  * Include no more than two lines of text.


  #### Subtitle


  As with a title, ensure your data visualization has a descriptive subtitle.


  * Write the subtitle to explain the general trends of the graph and what that means, including why it is important.

  * Use the body text paragraph style.

  * Include no more than three lines of text.


  #### Notes


  Include notes with your data visualization to describe any caveats or inconsistencies with the data. For instance, when using charts that show percentages, users expect numbers to add up to 100%. Not adding up to 100% undermines the integrity of the visuals by leaving the user with missing pieces. 


  To remedy this effect, add a note at the bottom to explain the missing data.


  * *Example: “Percentages may not sum to 100% due to rounding.”*


  You can also use notes to add in other caveats, such as if the data was taken from a specific time period.


  * *Example: “Percent change is based on a 3-month period (October-December) and compared to the previous year.”*

  * *Example: “Company-level information should be considered in context of total complaints, company size, and market share in a given geographic area.*


  #### Data source


  It is important to clearly state where data is from to promote trustworthiness and validity. If possible, provide a link to the URL of a spreadsheet or to the source of the data. This will enable people to dive deeper into the data, explore the nuances for themselves, and replicate the visualization themselves. 


  #### Labels and key


  Whenever possible, place labels directly on the data visualization rather than putting labels in a key. Direct labeling reduces the cognitive burden for a user by preventing them from having to hunt for labels or try to connect color meaning to the data.  


  ![Labels and keys](/design-system/images/uploads/parts-of-a-chart_012.png)


  ![Labels and keys](/design-system/images/uploads/parts-of-a-chart_013.png)


  #### Logo


  If the data visualization appears on its own, such as in a social media post, include the CFPB logo. This will help with identification and determining the graphic’s origin if it gets reused. 


  ### Creating emphasis


  Highlighting parts of your chart will help users quickly understand the point of the graphic and accurately comprehend the information.


  When considering how to create emphasis, ask yourself the following.


  * What is the point of the chart?

  * Can someone who hasn’t seen the chart before figure out the point from a quick look and the title?


  To help create emphasis, ensure your visualization has a strong visual hierarchy. This will allow the user to focus on the most important piece of content first and work their way into the graphic. 


  #### Check hierarchy with a squint test


  The title and subtitle should be the biggest and first things the user reads when viewing the chart to give them context of what the chart is about. Take a step back from your data visualization, squint your eyes, and say what you see first, second, third, and so on. This will give you a sense what your users will likely identify first. 


  #### Use labels to call out information


  Goals, trends, and important outliers should be highlighted with labels to help the user discern what is going on with the data. 


  #### Deemphasize projected values


  When dealing with projected or predicted data, the predicted data should be deemphasized. Use a color change to a lighter tint or dashed outline for bar charts, a dotted line for line charts, and a label explaining what part of the data is predicted or projected.


  ![Projected values](/design-system/images/uploads/projected-values-1.png)


  ![Projected values](/design-system/images/uploads/projected-values-2.png)


  ### Ensuring accuracy


  A chart is only as good as the validity of its data. It is important to check both the data and chart several times with multiple people before publishing. One small error can invalidate the integrity of an entire visualization. Several errors in data accuracy can damage credibility. Include notes with your data visualization to describe any caveats or inconsistencies and be sure to clearly state where data is from to promote trustworthiness and validity. 


  To ensure accuracy, ask yourself the following. 


  * Is this an accurate way to represent this data?

  * Did someone else look at the chart and data for feedback?

  * If there are percentages, do they add up to 100%? Why not?

  * What is the source of the data?
accessibility: >-
  Allowing all users to be able to comprehend data visualizations is a key part
  of being a government agency that serves the entire American public. 


  When building your data visualization, it’s important to ensure the following.


  * Include descriptive titles. 

  * Be mindful of your use of color. Do not rely solely on color to connect data to its meaning, account for color blindness, and ensure adequate color contrast.


  ### Alt tags


  Alt tags are what a screen reader will say instead of the image. This is important for not only web materials but also for charts that are in pdfs and charts that are placed as images into word documents. Screen readers read all of the text in an alt tag without allowing users to speed up or skip. Make sure the information in the alt tag is descriptive but succinct.


  * When writing an alt tag, include one sentence of what the chart is, including the chart type, for users with limited vision who can see part of it but may not be able to have a full understanding of the graph. *Example: “Bar chart showing complaints by type for New York metro area, New York state and the United States.”*

  * Link to a CSV or other machine-readable data format with the data so people with impaired vision can tab through the data with a screen reader. The data should have descriptive column labels and provide a link.


  When determining how to create an accessible data visualization, ask yourself the following.


  * How would someone using a screen reader interact with this visualization?

  * How would someone with low vision interact with this visualization?
research: ''
related_items: >-
  * [Data visualization color
  palettes](https://cfpb.github.io/design-system/foundation/color#data-visualization-palettes-1)


  * [Color accessibility guidelines](https://cfpb.github.io/design-system/foundation/color#accessibility)


  * [Bar charts](https://cfpb.github.io/design-system/guidelines/bar-charts)


  *  [Line charts](https://cfpb.github.io/design-system/guidelines/line-charts)


  * [Pie charts](https://cfpb.github.io/design-system/guidelines/pie-charts)
---
