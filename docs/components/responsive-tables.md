---
title: Responsive Tables
layout: variation
section: components
secondary_section: Tables
status: Proposed
description: "Tables divide information into distinct columns and rows to create an intersection “cell” where data is displayed.\n\nMore information can be found at:\n\n* http://cfpb.github.io/design-manual/page-components/tables.html\t\n* https://cfpb.github.io/capital-framework/components/cf-tables/#responsive-tables"
variations:
  - variation_code_snippet: >-
      <table>
          <caption>Table caption describing the data</caption>
          <thead>
              <tr>
                  <th>Column 1 header</th>
                  <th>Column 2 header</th>
                  <th>Column 3 header</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Row 1, column 1</td>
                  <td>Row 1, column 2</td>
                  <td>Row 1, column 3</td>
              </tr>
              <tr>
                  <td>Row 2, column 1</td>
                  <td>Row 2, column 2</td>
                  <td>Row 2, column 3</td>
              </tr>
              <tr>
                  <td>Row 3, column 1</td>
                  <td>Row 3, column 2</td>
                  <td>Row 3, column 3</td>
              </tr>
          </tbody>
      </table>


      <!--

      Note: While th elements normally only contain raw text, they may sometimes
      contain heading elements when that would be beneficial to navigating a
      page’s content with a screenreader.

      -->
    variation_description: This is the default style without a breakpoint.
    variation_name: Standard table
  - variation_code_snippet: <marquee>Some sample code will eventually show up here.</marquee>
    variation_description: The secondary state is very secondary.
    variation_name: Secondary state
usage: >-
  #### Use cases

  Tables are only one method for presenting many data points grouped together in
  a visual way. Other options include charts or graphs.


  Tables serve a unique purpose of allowing easy organization or comparison of
  more complex data than a chart or graph. They can be read either vertically
  (by columns) or horizontally (by rows).


  Tables work best when:

  * Presenting sequential data

  * Data being presented requires specific or precise values

  * Individual values are being presented or compared

  * Values across columns or rows require different units of measurement


  #### Content guidelines

  As a rule, design tables so that they are easy to read. Label columns
  precisely and include units of measurement where necessary. Organize the data
  so that the underlying meaning is quickly apparent.


  ##### Labels and Titles

  Give tables a meaningful title that succinctly describes the content presented
  so that users can understand their purpose at a glance. If presenting more
  than one table within a page, consider adding labels (e.g. “Table 1,” “Table
  2,” etc.) in addition to titles. Labels should precede titles (e.g. “Table 1:
  The title given to this table”).


  ###### Long column labels

  Consider using fixed columns or truncation for column labels that are
  significantly longer than the expected width of the data.


  ###### Unit of measurement

  Make sure to indicate the unit of measurement. In terms of placement, if the
  units are the same across columns, indicate the unit of measurement in the
  title or someplace noticeable above the table.


  Alternatively, if the table uses at most two units of measurement, consider
  using asterisks following the column label, and define the unit of measurement
  below the table, as shown in the example here.


  If units differ from column to column, the standard is to list the unit of
  measure in parentheses following the column label. Make sure to use common
  abbreviations when indicating units of measure. Spell out any ambiguous or
  obscure abbreviations.


  #### Behavior

  Since the nature of tables relies so much on visual space, there are several
  common variations that can be used to accommodate different types of data in a
  table.


  ##### Stacking tables

  A default table would “stack” the information on a smaller screen, since
  shrinking a table that maintained its columns/row structure would make it
  illegible.


  ##### Directory tables

  When the data you’re presenting should only be read across the rows (instead
  of down columns), you can use a directory table. The first column in these
  tables is what organizes or labels the other data points in the row.


  For instance, contact information is comprised of a name, phone number, and
  email address. An event is made up of the name of the event, time, and
  location. You need all three pieces of data to create an understanding of the
  thing being shown, and the first column of data is the key to that
  understanding.


  The default stacking behavior on smaller breakpoints doesn’t maintain that
  “first column” importance since it stacks based on column headers.


  As such, at the small screen breakpoint, the directory table pattern uses that
  first column data (employee name, for instance) as a way to group and label
  stacks of rows.


  See guidance on styles for a a directory table and how it should look on
  smaller breakpoints.


  ##### Scrolling tables

  When the data you’re presenting has more columns than what will comfortably
  fit on the screen, you can use a table that scrolls horizontally. This becomes
  especially important when thinking about tables on smaller screens, instead of
  allowing the data to stack at smaller breakpoints.


  Using a table that scrolls ensures that all the information can be accessed in
  its original tabular structure, even on a smaller screen.


  See guidance on styles for a table that scrolls horizontally at all screen
  sizes.
accessibility: >-
  Remember to always use headers (that is, `<th>` elements) for all data tables
  to make tabular data accessible.
research: >-
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
  rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna
  non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut
  dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut
  blandit.


  Odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec
  congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu
  ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in
  metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus
  tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur.


  Vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac
  egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora
  torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit
  amet leo consequat posuere.
---

