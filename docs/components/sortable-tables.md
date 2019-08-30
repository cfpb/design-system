---
title: Sortable Tables
layout: variation
section: components
secondary_section: Layout options
status: Proposed
description: "Sorting allows users to reorder the contents of a table by a sortable column of their choice.\n\nAny column that can sort needs to be specified in the table’s markup. When the table loads, it should be sorted by one of the sortable columns by default and indicate which column is already sorted. Not every column of a table needs to be sortable.\n\nAt large screen sizes, tables can be sorted using the header of any sortable column.\n* The currently sorted column is marked with an up or down triangle for ascending and descending sorts, respectively\n* On hover, the currently sorted column shows the opposite triangle\n* Columns that can sort show an up triangle on hover\n* Columns that cannot sort show nothing on hover\n\nIf sorting is needed for smaller screens, use a filter-like expandable with a sorting control (or add a sorting control to the existing filter if the table has one) that only appears when the table switches from tabular to stacked.\n\nMore information can be found at:\n\n* http://cfpb.github.io/design-manual/page-components/tables.html\t\n* https://cfpb.github.io/capital-framework/components/cf-tables/#sortable-tables"
variations:
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
    variation_description: ''
    variation_name: Sortable table
usage: >-
  #### Code

  ##### Making a table sortable

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


  ##### Sorting type

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


  ##### Sorting table on page load

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
  Phasellus molestie magna non est bibendum non venenatis nisl tempor.
  Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.
  Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at
  risus et justo dignissim congue. Donec.
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
