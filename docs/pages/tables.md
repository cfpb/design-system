---
title: Tables
layout: variation
section: components
status: Released
description: "Tables allow for the presentation of many data points grouped
  together in a visual way. They serve a unique purpose of allowing easy
  organization or comparison of more complex data than a chart or graph. They
  can be read either vertically (by columns) or horizontally (by rows). "
variation_groups:
  - variation_group_name: Standard table
    variation_group_description: This is the default style at the large screen
      breakpoint. Tables are not responsive by default; see options below for
      [responsive
      tables](https://cfpb-sandbox.github.io/design-system/components/tables#responsive-tables).
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

          Note: While th elements normally only contain raw text, they may sometimes contain heading elements when that would be beneficial to navigating a page’s content with a screenreader.

          -->
        variation_specs: >-
          [Color variables for
          tables](https://cfpb.github.io/design-system/development/variables#tables-1)


          ### Specs for default and directory table (large screens)


          #### Header


          * Background: Gray-05 #F8F8F8

          * Font: Avenir Next Demi-bold, all caps

          * Font-color: Black #101820

          * Font-size: 14px


          #### Border


          * Bottom: 1px, Gray-50 #BABBBD on each row, including header


          #### Cells


          * Background: Gray-05 #F8F8F8

          * Font: Avenir Next Regular Black

          * Font-color: Black #101820

          * Font-size: 16px

          * Padding: 10px
        variation_implementation: ""
  - variation_group_name: Responsive tables
    variation_group_description: >-
      Responsive tables fall into two main types: stacked, which stacks
      information vertically on smaller screens, and scrolling, which ensures
      that all the information can be accessed in its original tabular
      structure, even on a smaller screen.


      Note that tables are **not** responsive unless you add one of the small screen classes detailed below. Also note that the `data-label` attribute must be used to label each cell in a `table` for small screen responsive views.
    variations:
      - variation_name: Responsive stacked table
        variation_description: >
          To stack table information on smaller screens and make the information
          legible, use the `.o-table__stack-on-small` class.
        variation_code_snippet: |-
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
        variation_specs: |-
          #### Default table (small screens)

          ##### Border

          * Bottom: 1px, Gray-50 #BABBBD

          ##### Cells

          * Font: 16px Avenir Next Regular Black
          * Font-color: Black #101820
          * Labels font: 14px Avenir Next Regular, all caps
          * Labels font-color: Black #101820

          ##### Padding

          * Padding, label / content: 15px
          * Padding, content / next label: 30px
          * Padding, rule line / first label: 15px
      - variation_name: Responsive stacked table with header (directory tables)
        variation_description: >-
          The directory table is a variation of the stacked table. At the small
          screen breakpoint, the directory table pattern uses first column data
          (employee name, for instance) as a way to group and label stacks of
          rows.


          This is useful when data is read across rows, instead of down columns. For instance, contact information is comprised of a name, phone number, and email address. An event is made up of the name of the event, time, and location. You need all three pieces of data to create an understanding of the thing being shown, and the first column of data is the key to that understanding.

          At the small screen breakpoint, the first column (in the example shown below, employee names) become headers, and the remaining data points in the same row (phone number, email address) are stacked below.


          The `.o-table__entry-header-on-small` class in addition to `.o-table__stack-on-small` class changes the first column to be styled as an entry header. This style requires both classes be added.
        variation_code_snippet: |-
          <table class="o-table
                        o-table__stack-on-small
                        o-table__entry-header-on-small">
              <thead>
                  <tr>
                      <th>Employee name</th>
                      <th>Phone number</th>
                      <th>Email address</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="Employee name">Andrew Able</td>
                      <td data-label="Phone number">(202) XXX-XXXX</td>
                      <td data-label="Email address">aable@example.com</td>
                  </tr>
                  <tr>
                      <td data-label="Employee name">Betsy Bort</td>
                      <td data-label="Phone number">(202) XXX-XXXX</td>
                      <td data-label="Email address">bbort@example.com</td>
                  </tr>
                  <tr>
                      <td data-label="Employee name">Charles Clark</td>
                      <td data-label="Phone number">(202) XXX-XXXX</td>
                      <td data-label="Email address">cclark@example.com</td>
                  </tr>
              </tbody>
          </table>
        variation_specs: |-
          #### Style for directory tables (small screens)

          * Bottom border: 1px, Gray-50 #BABBBD on each row
          * Font: 16px Avenir Next Regular Black
          * Font-color: Black #101820
          * Header background color: #f1f1f1
          * Labels font: 14px Avenir Next Regular, all caps
          * Labels font-color: Black #101820
          * Padding, column label/bottom border: 15px
          * Padding, bottom border/content: 15px
          * Padding, content / next label: 30px
      - variation_name: Responsive table with horizontal scroll
        variation_description: >-
          Use a table with horizontal scroll when the data you’re presenting has
          more columns than will fit comfortably on the screen, and you want to
          ensure all information can be accessed in its original tabular
          structure, even on smaller screens.


          The `.o-table-wrapper__scrolling` class must be added to the parent element of the `table` (by adding a wrapping `div`, in most cases). The `table` element does not need additional markup in this case. The “Comparative with horizontal scroll” style also adds striped rows to the table contained within, and remains striped on small screens (unlike the o-table__striped class, below).
        variation_code_snippet: |-
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
        variation_specs: |-
          #### Styles for scrolling tables

          * Border: 1px, Gray-50 #BABBBD around the scrolling table
          * Alternate row striping: Grey-05 #F8F8F8
  - variations:
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
          Striping is useful to help the eye track across table rows. Use
          striping for tables that have more than five columns, or for tables
          with rows that are difficult to follow across the full width of the
          table.


          The `.o-table__striped` class adds stripes to the `table` rows. This striping is not visible on small screens.
        variation_name: Striped table
      - variation_code_snippet: >-
          <table class="o-table o-table__stack-on-small">
              <thead>
                  <tr>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      <th>Right-aligned column</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="Column 1">Row A</td>
                      <td data-label="Column 2">Cell A2</td>
                      <td data-label="Right-aligned column" class="o-table_cell__right-align">$1.00</td>
                  </tr>
                  <tr>
                      <td data-label="Column 1">Row B</td>
                      <td data-label="Column 2">Cell B2</td>
                      <td data-label="Right-aligned column" class="o-table_cell__right-align">$2.00</td>
                  </tr>
              </tbody>
          </table>
        variation_description: >-
          Right-align columns of numbers when they're quantities (counts, dollar
          amounts, percentages) or ordinals (ranks, item numbers). Use the
          `.o-table_cell__right-align` class on a `td`.


          Left-align columns of numbers when they're nominal (ZIP codes, room numbers) or non-numeric values (names, phrases).
        variation_name: Right-aligned table
        variation_specs: |
          #### Style for striped rows
          - Alternate row background: Grey-05 #F8F8F8
      - variation_code_snippet: |-
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
        variation_description: The `.o-table_cell__row-links` class is added to a
          `table` to enable highlighting and hyperlinking rows which contain
          links.
        variation_name: Table with row links
      - variation_code_snippet: >-
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
          column of their choice. See the [Behavior](#behavior) section for more
          information.


          Add the `.o-table__sortable` class to a table to make it sortable. To sort by a specific column, add a `button` to the `th` of the column. The use of a `button` helps address accessibility concerns.
        variation_name: Sortable table
        variation_implementation: >-
          #### Making a table sortable


          By adding the `.o-table__sortable` class to a `table`, the table becomes sortable. To allow the table to be sorted by a column, add a button to the `th` of the column like so:


          ```

          …

          <button class="sortable">
              Column Name
          </button>

          …

          ```


          The use of a `button` helps address certain accessibility concerns.


          #### Sorting type


          To sort properly, the type of the `data` can be specified. By default, the column’s values will be sorted as `string` values. However, the column can be specifically sorted by `number` values (in which case, the cell’s contents are stripped of non-numeric characters, then sorted by the resulting number). To see an example, the sample table later in this document sorts the “Distance” column by `number` value.


          To sort by `number` value, add the `data-sort_type="number"` attribute to the sorting button:


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


          To sort the table on page load, use the `.sorted-up` and `.sorted-down` classes:


          ```

          <table class="o-table o-table__sortable">
              …
                  <th>
                      <button class="sortable sorted-up">Column Name</button>
                  </th>
              …
          </table>

          ```


          * The class `.sorted-up` refers to a sort from smallest to greatest (first to last), and `.sorted-down` refers to a sort from greatest to smallest (last to first). These classes are added to the `th` when sorting occurs.

          * Please note the importance of defining a `thead` and `tbody` to preserve the table’s header through sorting operations.
      - variation_name: Filtering tables
        variation_code_snippet: >
          
          <div class="o-expandable o-expandable__filters o-expandable__padded" data-bound="true">
              <button class="o-expandable_header o-expandable_target o-expandable_target__collapsed" aria-pressed="false">
                  <span class="o-expandable_header-left o-expandable_label">
                      Filter activities
                  </span>
                  <span class="o-expandable_header-right o-expandable_link">
                      <span class="o-expandable_cue-open">
                          Show
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" class="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm263.1 550.7H549.6v213.6c0 27.6-22.4 50-50 50s-50-22.4-50-50V655.9H236c-27.6 0-50-22.4-50-50s22.4-50 50-50h213.6V342.3c0-27.6 22.4-50 50-50s50 22.4 50 50v213.6h213.6c27.6 0 50 22.4 50 50s-22.5 50-50.1 50z"></path></svg>
                      </span>
                      <span class="o-expandable_cue-close">
                          Hide
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" class="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm263.1 550.7H236c-27.6 0-50-22.4-50-50s22.4-50 50-50h527.1c27.6 0 50 22.4 50 50s-22.4 50-50 50z"></path></svg>
                      </span>
                  </span>
              </button>
              <div class="o-expandable_content o-expandable_content__transition o-expandable_content__collapsed" aria-expanded="false" style="max-height: 0px;">
                  <p>Filter options go here</p>
              </div>

          <table class="o-table o-table__stack-on-small" data-bound="true">
              <thead>
                  <tr>
                      <th class="u-w20pct">
                          Type
                      </th>
                      <th class="u-w55pct">
                          Title
                      </th>
                      <th class="u-w25pct">
                          Date
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="Type">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 825.1 1200" class="cf-icon-svg"><path d="M795.1 263.9H30c-16.5 0-30 13.5-30 30v539.5c0 16.5 13.5 30 30 30h95.3v144.5c0 17.7 8.5 31.8 22.7 37.7 4.2 1.8 8.7 2.7 13.3 2.7 10.3 0 20.6-4.6 29.4-13.3l171.5-171.6h432.9c16.5 0 30-13.5 30-30V293.9c-.1-16.6-13.5-30-30-30zm-90 409H120v-60h585.1v60zm0-158.6H120v-60h585.1v60z"></path></svg> Blog
                      </td>
                      <td data-label="Title">
                          Three things to do before closing
                      </td>
                      <td data-label="Date">
                          AUG 5, 2015
                      </td>
                  </tr>
                  <tr>
                      <td data-label="Type">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 975.1 1200" class="cf-icon-svg"><path d="M907.2 277L151 466.7H30c-16.5 0-30 13.5-30 30v197.5c0 16.5 13.5 30 30 30h121l93 23.3-20.6 82.4c-8 32.1 11.5 64.7 43.7 72.8l194.8 48.7c32.1 8 64.7-11.5 72.8-43.7l20.5-82.1 352.1 88.3c37.3 9.4 67.9-14.5 67.9-53v-531c-.1-38.4-30.7-62.3-68-52.9zM476.4 893l-194.7-48.6s0-.1-.1-.1l20.6-82.3 194.7 49-20.5 82z"></path></svg> News
                      </td>
                      <td data-label="Title">
                          Electronic Mortgage Closings Can Benefit Consumers
                      </td>
                      <td data-label="Date">
                          AUG 5, 2015
                      </td>
                  </tr>
                  <tr>
                      <td data-label="Type">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 825.1 1200" class="cf-icon-svg"><path d="M795.1 263.9H30c-16.5 0-30 13.5-30 30v539.5c0 16.5 13.5 30 30 30h95.3v144.5c0 17.7 8.5 31.8 22.7 37.7 4.2 1.8 8.7 2.7 13.3 2.7 10.3 0 20.6-4.6 29.4-13.3l171.5-171.6h432.9c16.5 0 30-13.5 30-30V293.9c-.1-16.6-13.5-30-30-30zm-90 409H120v-60h585.1v60zm0-158.6H120v-60h585.1v60z"></path></svg> Blog
                      </td>
                      <td data-label="Title">
                          National Day of Civic Hacking 2015
                      </td>
                      <td data-label="Date">
                          JUL 29, 2015
                      </td>
                  </tr>
              </tbody>
          </table>
        variation_description: >
          Tables can be paired with a filter to show only rows that meet certain
          criteria.
      - variation_name: Pagination
        variation_description: >-
          Tables with over 20 rows can be paired with pagination.




          ![image showing a table with pagination](/design-system/images/uploads/table_pagination.png)
        variation_code_snippet: >-
          <!--Code from Design Manual

          <table class="o-table o-table__stack-on-small" data-bound="true">
              <thead>
                  <tr>
                      <th class="u-w20pct">
                          Type
                      </th>
                      <th class="u-w55pct">
                          Title
                      </th>
                      <th class="u-w25pct">
                          Date
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="Type">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 825.1 1200" class="cf-icon-svg"><path d="M795.1 263.9H30c-16.5 0-30 13.5-30 30v539.5c0 16.5 13.5 30 30 30h95.3v144.5c0 17.7 8.5 31.8 22.7 37.7 4.2 1.8 8.7 2.7 13.3 2.7 10.3 0 20.6-4.6 29.4-13.3l171.5-171.6h432.9c16.5 0 30-13.5 30-30V293.9c-.1-16.6-13.5-30-30-30zm-90 409H120v-60h585.1v60zm0-158.6H120v-60h585.1v60z"></path></svg> Blog
                      </td>
                      <td data-label="Title">
                          Three things to do before closing
                      </td>
                      <td data-label="Date">
                          AUG 5, 2015
                      </td>
                  </tr>
                  <tr>
                      <td data-label="Type">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 975.1 1200" class="cf-icon-svg"><path d="M907.2 277L151 466.7H30c-16.5 0-30 13.5-30 30v197.5c0 16.5 13.5 30 30 30h121l93 23.3-20.6 82.4c-8 32.1 11.5 64.7 43.7 72.8l194.8 48.7c32.1 8 64.7-11.5 72.8-43.7l20.5-82.1 352.1 88.3c37.3 9.4 67.9-14.5 67.9-53v-531c-.1-38.4-30.7-62.3-68-52.9zM476.4 893l-194.7-48.6s0-.1-.1-.1l20.6-82.3 194.7 49-20.5 82z"></path></svg> News
                      </td>
                      <td data-label="Title">
                          Electronic Mortgage Closings Can Benefit Consumers
                      </td>
                      <td data-label="Date">
                          AUG 5, 2015
                      </td>
                  </tr>
              <tr>
                      <td colspan="3" style="text-align: center; font-weight: bold;">
                          (18 more rows)
                      </td>
                  </tr>
                  <tr>
                      <td data-label="Type">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 825.1 1200" class="cf-icon-svg"><path d="M795.1 263.9H30c-16.5 0-30 13.5-30 30v539.5c0 16.5 13.5 30 30 30h95.3v144.5c0 17.7 8.5 31.8 22.7 37.7 4.2 1.8 8.7 2.7 13.3 2.7 10.3 0 20.6-4.6 29.4-13.3l171.5-171.6h432.9c16.5 0 30-13.5 30-30V293.9c-.1-16.6-13.5-30-30-30zm-90 409H120v-60h585.1v60zm0-158.6H120v-60h585.1v60z"></path></svg> Blog
                      </td>
                      <td data-label="Title">
                          National Day of Civic Hacking 2015
                      </td>
                      <td data-label="Date">
                          JUL 29, 2015
                      </td>
                  </tr>
              </tbody>
          </table>


          <nav class="m-pagination" role="navigation" aria-label="Pagination">
              <a class="a-btn
                        a-btn__disabled
                        m-pagination_btn-prev">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 559.6 1200" class="cf-icon-svg"><path d="M494.5 1090.7c-17.3 0-33.8-6.8-46-19L19 642.1c-25.4-25.4-25.4-66.5 0-91.9l429.5-429.5c25.6-25.1 66.8-24.8 91.9.8 24.8 25.3 24.8 65.8 0 91.1L156.9 596.2l383.6 383.6c25.4 25.4 25.4 66.5.1 91.9-12.3 12.2-28.8 19-46.1 19z"></path></svg>
                  Newer
              </a>

              <a class="a-btn
                        m-pagination_btn-next" href="#">
                  Older
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 559.6 1200" class="cf-icon-svg"><path d="M65.1 1090.2c-35.9 0-65-29-65.1-64.9 0-17.3 6.8-33.9 19.1-46.1l383.6-383.5L19.1 212.2c-25.1-25.6-24.8-66.8.9-92 25.3-24.8 65.8-24.8 91.1 0l429.5 429.5c25.4 25.4 25.4 66.5 0 91.9L111 1071.2c-12.1 12.2-28.7 19.1-45.9 19z"></path></svg>
              </a>
              <form class="m-pagination_form" action="#">
                  <label class="m-pagination_label" for="m-pagination_current-page">
                      Page
                      <span class="u-visually-hidden">
                          number out of 3 total pages
                      </span>
                      <input class="m-pagination_current-page" id="m-pagination_current-page" name="page" type="number" min="1" max="3" inputmode="numeric" value="1">
                      of 3
                  </label>
                  <button class="a-btn
                                 a-btn__link
                                 m-pagination_submit-btn" id="pagination_submit" type="submit">Go</button>
              </form>
          </nav>

          -->
      - variation_name: Fixed-width column tables
        variation_description: >-
          Column widths are automatically set by browsers by default. If needed,
          some or all columns can be set to specific widths instead to
          accommodate longer data or labels.


          Fixed-width columns at the 600 px breakpoint and less lose their custom widths and expand to full width. This is the same responsive pattern used for default tables at small screens.
        variation_code_snippet: |-
          <table class="o-table o-table__stack-on-small" data-bound="true">
              <thead>
                  <tr>
                      <th class="u-w20pct">
                          County
                      </th>
                      <th class="u-w60pct">
                          Lien status
                      </th>
                      <th class="u-w20pct">
                          Active?
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="County">
                          Abbeville
                      </td>
                      <td data-label="Lien status">
                          Secured
                      </td>
                      <td data-label="Active?">
                          Yes
                      </td>
                  </tr>
                  <tr>
                      <td data-label="County">
                          Abbey
                      </td>
                      <td data-label="Lien status">
                          Secured
                      </td>
                      <td data-label="Active?">
                          No
                      </td>
                  </tr>
              </tbody>
          </table>
    variation_group_name: Variations
use_cases: >-
  Tables allow easy organization or comparison of more complex data than a chart
  or graph. They can be read either vertically (by columns) or horizontally (by
  rows).


  Tables work best when:

  * Presenting sequential data

  * Data being presented requires specific or precise values

  * Individual values are being presented or compared

  * Values across columns or rows require different units of measurement
guidelines: >-
  As a rule, design tables so that they are easy to read. Label columns
  precisely and include units of measurement where necessary. Organize the data
  so that the underlying meaning is quickly apparent.


  ### Labels and Titles

  Give tables a meaningful title that succinctly describes the content presented so that users can understand their purpose at a glance. If presenting more than one table within a page, consider adding labels (e.g. “Table 1,” “Table 2,” etc.) in addition to titles. Labels should precede titles (e.g. “Table 1: The title given to this table”).


  ### Long column labels

  Consider using fixed columns or truncation for column labels that are significantly longer than the expected width of the data.


  ### Unit of measurement

  Make sure to indicate the unit of measurement. In terms of placement, if the units are the same across columns, indicate the unit of measurement in the title or someplace noticeable above the table.


  Alternatively, if the table uses at most two units of measurement, consider using asterisks following the column label, and define the unit of measurement below the table.


  If units differ from column to column, the standard is to list the unit of measure in parentheses following the column label. Make sure to use common abbreviations when indicating units of measure. Spell out any ambiguous or obscure abbreviations.
behavior: >
  ### Sortable tables

  At large screen sizes,


  * The currently sorted column is marked with an up or down triangle for ascending and descending sorts, respectively

  * On hover, the currently sorted column shows the opposite triangle

  * Columns that can sort show an up triangle on hover

  * Columns that cannot sort show nothing on hover


  If sorting is needed for smaller screens, use a filter-like expandable with a sorting control (or add a sorting control to the existing filter if the table has one) that only appears when the table switches from tabular to stacked.
accessibility: Remember to always use headers (that is, `<th>` elements) for all
  data tables to make tabular data accessible.
research: ""
related_items: "* [Tables
  variables](https://cfpb.github.io/design-system/development/variables#tables-\
  1)"
last_updated: 2019-08-30T15:18:28.960Z
secondary_section: Layout options
---
