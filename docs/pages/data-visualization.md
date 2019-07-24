---
title: Data Visualization
permalink: /foundation/data-visualization
layout: generic-page
collection_name: pages
section: foundation
---
This page is under active development. Information is being moved into it from this page:

* http://cfpb.github.io/design-manual/data-visualization/data-visualization.html

### Usage

#### Use cases

Consider your audience when you’re creating data visualization.

##### KEY QUESTIONS

* Who is your audience?
* What is their familiarity with data visualization?
* How much information do they need?

##### If your user group is general (i.e. the American public)

For the general public, stick with basic and most common chart types that people can easily understand. Adding emphasis and labels will help highlight the point of the visual and tell the story of the information. Consider using multiple simple charts to step the user through the data, rather than one big complex visualization.

##### If your user is refined to a specific audience

When you’re creating visualizations for a specific target, take into consideration their familiarity with the data, visualization types, and the terminology used to label and describe data. More complex stories might necessitate more complex visuals, however, this does not mean it should lack emphasis.

### Content guidelines

#### Accuracy

A chart is only as good as the validity of its data. It’s important to check both the data and chart several times with multiple people before publishing. One small error can invalidate the integrity of an entire visualization. Several errors in data accuracy can damage credibility.

##### KEY QUESTIONS

* Is this an accurate way to represent this data?
  Did someone else look at the chart and data for feedback?
* If there are percentages, do they add up to 100? Why not?
* What is the source of the data?

##### Notes section

When using charts that show percentages, users expect things to add up to 100%. If they don’t it undermines the integrity of the visuals by leaving the user with missing pieces.

To remedy this effect add a note at the bottom to explain the missing data.

> Example: Percentages may not sum to 100% due to rounding.

Use notes to add in other caveats around the data like if it was taken from a specific time period.

> Example: Percent change is based on a 3 month period (October-December) and compared to the previous year.
>
> Example: Company-level information should be considered in context of total complaints, company size and market share in a given geographic area.

##### Sources section

Including the source of the data in the visualization is a must. It adds credibility and transparency to the graph. The visualization could then be replicated using the mentioned sources which adds credibility.

If you’re unable to link to the source, link to a spreadsheet of the data used
to create the visualization.

#### Emphasis

Highlighting parts of your chart will help users quickly understand the point of the graphic and accurately comprehend the information.

##### KEY QUESTIONS

* What is the point of the chart?
* Can someone who hasn’t seen the chart before figure out the point from a quick look and the title?

##### Visual hierarchy

Good visual hierarchy allows the user to focus on the most important piece of content first and work their way into the graphic. The title and subtitle should be the first thing that the user reads when viewing the chart to give them context of what the chart is about. Therefore, they should be the biggest thing on the chart.

Use the squint test (take a step back from your graph, squint your eyes, and say what you see first, second, third…) to get a sense of what your users will automatically identify first.

##### Labels

Goals, trends, and important outliers should be highlighted to help the user discern what is going on with the data. Labels will help the user understand the data and make sense of what it is showing.

##### Projected values

When dealing with projected or predicted data, the predicted data should be deemphasized. Use a color change to a lighter tint or dashed outline for bar charts, a dotted line for line charts, and a label explaining what part of the data is predicted or projected.

![Line chart that has a projected values label, as well as changes in color and pattern to indicate the projected data.](/design-system/images/uploads/projected-values-1.png)

![Bar chart that has a projected values label, as well as changes in color to indicate the projected data.](/design-system/images/uploads/projected-values-2.png)

### Accessibility

Allowing all users to be able to comprehend charts and graphics is a key part of being a government agency that serves the entire American public. This is an interpretation of what it means for a chart to be 508 compliant and accessible, starting with descriptive titles and not only relying on color to connect data to its meaning.

##### KEY QUESTIONS

* How would someone using a screen reader interact with this visualization?
* How would someone with low vision interact with this visualization?

#### Alt tags

Alt tags are what a screen reader will say instead of the image. This is important for not only web materials, but charts that are in pdfs and charts that are placed as images into word documents.

Screen readers read all of the text in an alt tag without allowing users to speed up, or skip. Make sure the information in the alt tag is descriptive but succinct.

Alt tags should include:

* One sentence of what the chart is, including the chart type for users with limited vision who can see part of it, but may not be able to have a full understanding of the graph.
  > Example: Bar chart showing complaints by type for New York metro area, New York state and the United States.
* A link to a CSV or other machine-readable data format with the data so people with impaired vision can tab through the data with a screen reader. The data should have descriptive column labels and provide a link.

#### Color contrast and color blindness

See the color section guidelines.
