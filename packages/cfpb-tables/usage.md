The @cfpb/tables component formats tables, and provides an easy way to make tables sortable.

The [`@cfpb/cfpb-core`](../cfpb-core/) component is a dependency of this component,
and [base table styling is defined there](../cfpb-core/#tables).

## Table of contents

- [Variables](#variables)
  - [Color variables](#color-variables)
- [Standard tables](#standard-tables)
- [Striped tables](#striped-tables)
- [Right-aligned cells](#right-aligned-cells)
- [Responsive tables](#responsive-tables)
  - [Responsive stacked table](#responsive-stacked-table)
  - [Responsive stacked table with header](#responsive-stacked-table-with-header)
  - [Responsive table - horizontal scroll variation](#responsive-table---horizontal-scroll-variation)

## Variables

Component variables are used to theme a component.
They likely will be left as is, but if needed can be overwritten by duplicating
the variable in a `@key: value` format with a different value.
This customized variable would be placed in the same file
where this component's less file is imported.

### Color variables

Color variables referenced in comments are from [@cfpb/cfpb-core's brand-colors.scss](https://github.com/cfpb/design-system/blob/main/packages/cfpb-core/src/brand-colors.scss).

```less
@table-cell-bg: var(--white);
@table-cell-bg_alt: var(--gray-5);
@table-scrolling-border: var(--gray-40);
@table-border: var(--gray);
```

## Standard tables

A basic `o-table` table is not striped by default and is equivalent to defining
a classless `<table>` element in `@cfpb/cfpb-core`,
[for example](../cfpb-core/#standard-table).

## Striped tables

The `.o-table--striped` class adds stripes to the `table` rows. This striping is
not visible on small screens.

<table class="o-table o-table--striped">
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

```html
<table class="o-table o-table--striped">
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
```

## Right-aligned cells

The use of the `.o-table__cell--right-align` class on a `td` aligns the text
right - see the third column above.

<table class="o-table o-table--stack-on-small">
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
            <td data-label="Column 3" class="table_cell__right-align">Cell A3</td>
        </tr>
        <tr>
            <td data-label="Column 1">Row B</td>
            <td data-label="Column 2">Cell B2</td>
            <td data-label="Column 3" class="table_cell__right-align">Cell B3</td>
        </tr>
    </tbody>
</table>

```html
<table class="o-table o-table--stack-on-small">
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
      <td data-label="Column 3" class="table_cell__right-align">Cell A3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row B</td>
      <td data-label="Column 2">Cell B2</td>
      <td data-label="Column 3" class="table_cell__right-align">Cell B3</td>
    </tr>
  </tbody>
</table>
```

## Responsive tables

### Responsive stacked table

The `.o-table--stack-on-small` class adds the "stacked" `table` style for small
screens.

_Please note that tables are not responsive without adding one of the small
screen classes._

_Also note that the `data-label` attribute is used to label each entry in a
`table` for small screen responsive views.
Always include the `data-label` attribute for each cell._

<table class="o-table o-table--stack-on-small">
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

```html
<table class="o-table o-table--stack-on-small">
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
```

### Responsive stacked table with header

The `.o-table--entry-header-on-small` class in addition to
`.o-table--stack-on-small` class changes the first column to be styled as an
entry header. This style requires both classes be added.

_Note that tables are not responsive without adding one of the small screen
classes._

_Also note that the `data-label` attribute is used to label each entry.
Always include the `data-label` attribute for each cell._

<table class="o-table
              o-table--stack-on-small
              o-table--entry-header-on-small">
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

```html
<table
  class="o-table
              o-table--stack-on-small
              o-table--entry-header-on-small"
>
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
```

### Responsive table - horizontal scroll variation

The `.o-table-wrapper--scrolling` class must be added to the parent element of
the `table` (by adding a wrapping `div`, in most cases). The `table` element
does not need additional markup in this case. The "Comparative with horizontal
scroll" style also adds striped rows to the table contained within, and remains
striped on small screens (unlike the `o-table--striped` class, below).

<div class="o-table o-table-wrapper--scrolling">
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

```html
<div class="o-table o-table-wrapper--scrolling">
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
```
