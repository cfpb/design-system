---
title: Tables
layout: variation
section: components
secondary_section: Layout options
status: Released
description: "Tables divide information into distinct columns and rows to create an intersection “cell” where data is displayed.\n\nMore information can be found at:\n\n* http://cfpb.github.io/design-manual/page-components/tables.html\t\n* https://cfpb.github.io/capital-framework/components/cf-tables/#responsive-tables\n* https://cfpb.github.io/capital-framework/components/cf-tables/#sortable-tables"
variation_groups:
  - variations:
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
        variation_description: >-
          This is the default style without stripes and without a breakpoint. It is
          equivalent to defining a classless `<table>` element.
        variation_name: Standard table
      - variation_code_snippet: |-
          <table class="o-table o-table__striped">
              <thead>
                  <tr>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      <th>Column 3</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="Column 1">Row A</td>
                      <td data-label="Column 2">Cell A2</td>
                      <td data-label="Column 3">Cell A3</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">Row B</td>
                      <td data-label="Column 2">Cell B2</td>
                      <td data-label="Column 3">Cell B3</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">Row C</td>
                      <td data-label="Column 2">Cell C2</td>
                      <td data-label="Column 3">Cell C3</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">Row D</td>
                      <td data-label="Column 2">Cell D2</td>
                      <td data-label="Column 3">Cell D3</td>
                  </tr>
              </tbody>
          </table>
        variation_description: >-
          Striping is useful to help the eye track across table rows. Use striping
          for tables that have more than five columns, or for tables with rows that
          are difficult to follow across the full width of the table.


          The `.o-table__striped` class adds stripes to the `table` rows. This
          striping is not visible on small screens.
        variation_name: Striped table
      - variation_code_snippet: |-
          <table class="o-table o-table__stack-on-small">
              <thead>
                  <tr>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      <th>Column 3</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="Column 1">Row A</td>
                      <td data-label="Column 2">Cell A2</td>
                      <td data-label="Column 3" class="o-table_cell__right-align">Cell A3</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">Row B</td>
                      <td data-label="Column 2">Cell B2</td>
                      <td data-label="Column 3" class="o-table_cell__right-align">Cell B3</td>
                  </tr>
              </tbody>
          </table>
        variation_description: >-
          Right-align columns of numbers that contain quantities (counts, dollar
          amounts, percentages) or ordinals (ranks, item numbers).


          The use of the `.o-table_cell__right-align` class on a `td` aligns the
          text right - see the third column.
        variation_name: Right-aligned table
      - variation_code_snippet: ''
        variation_description: >-
          Column widths are automatically set by browsers by default. If needed,
          some or all columns can be set to specific widths instead to accommodate
          longer data or labels.


          Fixed-width columns at the 600 px breakpoint and less lose their custom
          widths and expand to full width. This is the same responsive pattern used
          for default tables at small screens.


          * This isn't present in CF and doesn't have a code snippet.
        variation_name: Fixed-width table
      - variation_code_snippet: |2-
          <table class="o-table o-table__row-links">
              <thead>
                  <tr>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      <th>Column 3</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="Column 1">
                          <a href="https://example.com/">Example 1</a>
                      </td>
                      <td data-label="Column 2">Cell A2</td>
                      <td data-label="Column 3" >Cell A3</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">
                          <a href="https://example.com/">Example 2</a>
                      </td>
                      <td data-label="Column 2">Cell B2</td>
                      <td data-label="Column 3">Cell B3</td>
                  </tr>
              </tbody>
          </table>
        variation_description: >-
          The `.o-table_cell__row-links` class is added to a `table` to enable
          highlighting and hyperlinking rows which contain links.
        variation_name: Table with row links
      - variation_code_snippet: |2-
          <table class="o-table o-table__stack-on-small">
              <thead>
                  <tr>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      <th>Column 3</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="Column 1">Row A</td>
                      <td data-label="Column 2">Cell A2</td>
                      <td data-label="Column 3">Cell A3</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">Row B</td>
                      <td data-label="Column 2">Cell B2</td>
                      <td data-label="Column 3">Cell B3</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">Row C</td>
                      <td data-label="Column 2">Cell C2</td>
                      <td data-label="Column 3">Cell C3</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">Row D</td>
                      <td data-label="Column 2">Cell D2</td>
                      <td data-label="Column 3">Cell D3</td>
                  </tr>
              </tbody>
          </table>
        variation_description: >-
          Since the nature of tables relies so much on visual space, there are
          several common variations that can be used to accommodate different types
          of data in a table.


          A default table would “stack” the information on a smaller screen, since
          shrinking a table that maintained its columns/row structure would make it
          illegible.


          The `.o-table__stack-on-small` class adds the “stacked” `table` style for
          small screens.


          Please note that tables are not responsive without adding one of the small
          screen classes.


          Also note that the `data-label` attribute is used to label each entry in a
          `table` for small screen responsive views. Always include the `data-label`
          attribute for each cell.
        variation_name: Responsive stacked table
      - variation_code_snippet: |-
          <table class="o-table
                        o-table__stack-on-small
                        o-table__entry-header-on-small">
              <thead>
                  <tr>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      <th>Column 3</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="Column 1">Row A</td>
                      <td data-label="Column 2">Cell A2</td>
                      <td data-label="Column 3">Cell A3</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">Row B</td>
                      <td data-label="Column 2">Cell B2</td>
                      <td data-label="Column 3">Cell B3</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">Row C</td>
                      <td data-label="Column 2">Cell C2</td>
                      <td data-label="Column 3">Cell C3</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">Row D</td>
                      <td data-label="Column 2">Cell D2</td>
                      <td data-label="Column 3">Cell D3</td>
                  </tr>
              </tbody>
          </table>
        variation_description: >-
          When the data you’re presenting should only be read across the rows
          (instead of down columns), you can use a directory table. The first column
          in these tables is what organizes or labels the other data points in the
          row.


          For instance, contact information is comprised of a name, phone number,
          and email address. An event is made up of the name of the event, time, and
          location. You need all three pieces of data to create an understanding of
          the thing being shown, and the first column of data is the key to that
          understanding.


          The default stacking behavior on smaller breakpoints doesn’t maintain that
          “first column” importance since it stacks based on column headers.


          As such, at the small screen breakpoint, the directory table pattern uses
          that first column data (employee name, for instance) as a way to group and
          label stacks of rows.


          The `.o-table__entry-header-on-small` class in addition to
          `.o-table__stack-on-small` class changes the first column to be styled as
          an entry header. This style requires both classes be added.


          Note that tables are not responsive without adding one of the small screen
          classes.


          Also note that the `data-label` attribute is used to label each entry.
          Always include the `data-label` attribute for each cell.
        variation_name: Responsive stacked table with header
      - variation_code_snippet: |-
          <div class="o-table o-table-wrapper__scrolling">
              <table>
                  <thead>
                      <tr>
                          <th>Column 1</th>
                          <th>Column 2</th>
                          <th>Column 3</th>
                          <th>Column 4</th>
                          <th>Column 5</th>
                          <th>Column 6</th>
                          <th>Column 7</th>
                          <th>Column 8</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td data-label="Column 1">Row A</td>
                          <td data-label="Column 2">Cell A2</td>
                          <td data-label="Column 3">Cell A3</td>
                          <td data-label="Column 4">Cell A4</td>
                          <td data-label="Column 5">Cell A5</td>
                          <td data-label="Column 6">Cell A6</td>
                          <td data-label="Column 7">Cell A7</td>
                          <td data-label="Column 8">Cell A8</td>
                      </tr>
                      <tr>
                          <td data-label="Column 1">Row B</td>
                          <td data-label="Column 2">Cell B2</td>
                          <td data-label="Column 3">Cell B3</td>
                          <td data-label="Column 4">Cell B4</td>
                          <td data-label="Column 5">Cell B5</td>
                          <td data-label="Column 6">Cell B6</td>
                          <td data-label="Column 7">Cell B7</td>
                          <td data-label="Column 8">Cell B8</td>
                      </tr>
                      <tr>
                          <td data-label="Column 1">Row C</td>
                          <td data-label="Column 2">Cell C2</td>
                          <td data-label="Column 3">Cell C3</td>
                          <td data-label="Column 4">Cell C4</td>
                          <td data-label="Column 5">Cell C5</td>
                          <td data-label="Column 6">Cell C6</td>
                          <td data-label="Column 7">Cell C7</td>
                          <td data-label="Column 8">Cell C8</td>
                      </tr>
                      <tr>
                          <td data-label="Column 1">Row D</td>
                          <td data-label="Column 2">Cell D2</td>
                          <td data-label="Column 3">Cell D3</td>
                          <td data-label="Column 4">Cell D4</td>
                          <td data-label="Column 5">Cell D5</td>
                          <td data-label="Column 6">Cell D6</td>
                          <td data-label="Column 7">Cell D7</td>
                          <td data-label="Column 8">Cell D8</td>
                      </tr>
                  </tbody>
              </table>
          </div>
        variation_description: >-
          When the data you’re presenting has more columns than what will
          comfortably fit on the screen, you can use a table that scrolls
          horizontally. This becomes especially important when thinking about tables
          on smaller screens, instead of allowing the data to stack at smaller
          breakpoints.


          Using a table that scrolls ensures that all the information can be
          accessed in its original tabular structure, even on a smaller screen.


          The `.o-table-wrapper__scrolling` class must be added to the parent
          element of the table (by adding a wrapping `div`, in most cases). The
          `table` element does not need additional markup in this case. The
          “Comparative with horizontal scroll” style also adds striped rows to the
          table contained within, and remains striped on small screens (unlike the
          `o-table__striped` class, below).
        variation_name: Responsive table with horizontal scroll
      - variation_code_snippet: |-
          <table class="o-table o-table__sortable">
              <thead>
                  <tr>
                      <th>
                          Agency
                      </th>
                      <th>
                        <button class="sortable">
                          Languages
                        </button>
                      </th>
                      <th>
                        <button class="sortable sorted-up" data-sort_type="number">
                          Distance
                        </button>
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          Alpha
                      </td>
                      <td data-label="Languages">
                          English
                      </td>
                      <td data-label="Distance">
                          2.6 mi
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Beta
                      </td>
                      <td data-label="Languages">
                          English, Spanish
                      </td>
                      <td data-label="Distance">
                          1.4 mi
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Gamma
                      </td>
                      <td data-label="Languages">
                          English, French, Spanish
                      </td>
                      <td data-label="Distance">
                          1.4 mi
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Delta
                      </td>
                      <td data-label="Languages">
                          English, Spanish
                      </td>
                      <td data-label="Distance">
                          3.2 mi
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Epsilon
                      </td>
                      <td data-label="Languages">
                          English
                      </td>
                      <td data-label="Distance">
                          1.6 mi
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Zeta
                      </td>
                      <td data-label="Languages">
                          English, Spanish
                      </td>
                      <td data-label="Distance">
                          1.2 mi
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Eta
                      </td>
                      <td data-label="Languages">
                          English
                      </td>
                      <td data-label="Distance">
                          11.1 mi
                      </td>
                  </tr>
              </tbody>
          </table>
        variation_description: >-
          Sorting allows users to reorder the contents of a table by a sortable
          column of their choice.


          Any column that can sort needs to be specified in the table’s markup. When
          the table loads, it should be sorted by one of the sortable columns by
          default and indicate which column is already sorted. Not every column of a
          table needs to be sortable.
        variation_name: Sortable table
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


  #### Labels and Titles

  Give tables a meaningful title that succinctly describes the content presented
  so that users can understand their purpose at a glance. If presenting more
  than one table within a page, consider adding labels (e.g. “Table 1,” “Table
  2,” etc.) in addition to titles. Labels should precede titles (e.g. “Table 1:
  The title given to this table”).


  ##### Long column labels

  Consider using fixed columns or truncation for column labels that are
  significantly longer than the expected width of the data.


  ##### Unit of measurement

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


  #### Stacking tables

  A default table would “stack” the information on a smaller screen, since
  shrinking a table that maintained its columns/row structure would make it
  illegible.


  #### Directory tables

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


  #### Scrolling tables

  When the data you’re presenting has more columns than what will comfortably
  fit on the screen, you can use a table that scrolls horizontally. This becomes
  especially important when thinking about tables on smaller screens, instead of
  allowing the data to stack at smaller breakpoints.


  Using a table that scrolls ensures that all the information can be accessed in
  its original tabular structure, even on a smaller screen.


  See guidance on styles for a table that scrolls horizontally at all screen
  sizes.


  #### Sorting tables

  At large screen sizes, tables can be sorted using the header of any sortable
  column.

  * The currently sorted column is marked with an up or down triangle for
  ascending and descending sorts, respectively

  * On hover, the currently sorted column shows the opposite triangle

  * Columns that can sort show an up triangle on hover

  * Columns that cannot sort show nothing on hover


  If sorting is needed for smaller screens, use a filter-like expandable with a
  sorting control (or add a sorting control to the existing filter if the table
  has one) that only appears when the table switches from tabular to stacked.


  #### Code

  #### Making a table sortable

  By adding the `.o-table__sortable` class to a `table`, the table becomes
  sortable. To allow the table to be sorted by a column, add a button to the
  `th` of the column like so:


  ```

  …

  <button class="sortable">
      Column Name
  </button>

  …

  ```

  The use of a `button` helps address certain accessibility concerns.


  #### Sorting type

  To sort properly, the type of the `data` can be specified. By default, the
  column’s values will be sorted as `string` values. However, the column can be
  specifically sorted by `number` values (in which case, the cell’s contents are
  stripped of non-numeric characters, then sorted by the resulting number). To
  see an example, the sample table later in this document sorts the “Distance”
  column by `number` value.


  To sort by `number` value, add the `data-sort_type="number"` attribute to the
  sorting button:


  ```

  <table class="o-table o-table__sortable">
      …
          <th>
              <button class="sortable" data-sort_type="number">Column Name</button>
          </th>
      …
  </table>

  ```


  #### Sorting table on page load

  To sort the table on page load, use the `.sorted-up` and `.sorted-down`
  classes:


  ```

  <table class="o-table o-table__sortable">
      …
          <th>
              <button class="sortable sorted-up">Column Name</button>
          </th>
      …
  </table>

  ```



  * The class `.sorted-up` refers to a sort from smallest to greatest (first to
  last), and `.sorted-down` refers to a sort from greatest to smallest (last to
  first). These classes are added to the `th` when sorting occurs.

  * Please note the importance of defining a `thead` and `tbody` to preserve the
  table’s header through sorting operations.
accessibility: >-
  Remember to always use headers (that is, `<th>` elements) for all data tables
  to make tabular data accessible.
research: ''
last_updated: 2019-08-30T15:18:28.960Z
---

