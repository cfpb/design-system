The cf-pagination component provides a responsive approach to multipage page
navigation for Capital Framework.

[`cf-core`](../cf-core), [`cf-buttons`](../cf-buttons), and
[`cf-icons`](../cf-icons) components are all dependencies of this component.

> NOTE: If you use `cf-pagination.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Sizing variables](#sizing-variables)
- [Default pagination](#default-pagination)
- [Responsive behavior](#responsive-behavior)


## Variables

Component variables are used to theme a component.
They likely will be left as is, but if needed can be overwritten by duplicating
the variable in a `@key: value` format with a different value.
This customized variable would be placed in the same file
where this component's less file is imported.

### Color variables

Color variables referenced in comments are from [cf-core cf-brand-colors.less](https://github.com/cfpb/capital-framework/blob/master/packages/cf-core/src/cf-brand-colors.less).

```
@pagination-text: @gray;
@pagination-bg:   @gray-10;
```

### Sizing variables

```
@pagination-btn-min-width-px: 130px;
```


## Default pagination

Default pagination consists of "Older" and "Newer" links, styled as buttons,
and an inline form (input, submit button) that allows users to navigate to
specific pages by number.
When appropriate, the buttons may be labeled "Previous" and "Next".

To enable the component to jump directly to the paginated content,
include an `id` on a wrapper of the paginated content
(or an element directly above it), e.g., `id="pagination_content"`.

<div id="pagination_content"></div>

<!-- Paginated content here -->

<nav class="m-pagination" role="navigation" aria-label="Pagination">
    <a class="a-btn
              m-pagination_btn-prev"
       href="?page=21#pagination_content">
        <span class="a-btn_icon a-btn_icon__on-left">{% include icons/left.svg %}</span>
        Newer
    </a>
    <a class="a-btn
              m-pagination_btn-next"
       href="?page=23#pagination_content">
        Older
        <span class="a-btn_icon a-btn_icon__on-right">{% include icons/right.svg %}</span>
    </a>
    <form class="m-pagination_form"
          action="#pagination_content">
        <label class="m-pagination_label"
               for="m-pagination_current-page">
            Page
            <span class="u-visually-hidden">
                number 22 out
            </span>
            <input class="m-pagination_current-page"
                   id="m-pagination_current-page"
                   name="page"
                   type="number"
                   min="1"
                   max="149"
                   pattern="[0-9]*"
                   inputmode="numeric"
                   value="22">
            of 149
        </label>
        <button class="a-btn
                       a-btn__link
                       m-pagination_btn-submit"
                id="m-pagination_btn-submit"
                type="submit">Go</button>
    </form>
</nav>

```
<div id="pagination_content"></div>

<!-- Paginated content here -->

<nav class="m-pagination" role="navigation" aria-label="Pagination">
    <a class="a-btn
              m-pagination_btn-prev"
       href="?page=21#pagination_content">
        <span class="a-btn_icon a-btn_icon__on-left">{% raw %}{% include icons/left.svg %}{% endraw %}</span>
        Newer
    </a>
    <a class="a-btn
              m-pagination_btn-next"
       href="?page=23#pagination_content">
        <span class="a-btn_icon a-btn_icon__on-right">{% raw %}{% include icons/right.svg %}{% endraw %}</span>
        Older
    </a>
    <form class="m-pagination_form"
          action="#pagination_content">
        <label class="m-pagination_label"
               for="m-pagination_current-page">
            Page
            <span class="u-visually-hidden">
                number 22 out
            </span>
            <input class="m-pagination_current-page"
                   id="m-pagination_current-page"
                   name="page"
                   type="number"
                   min="1"
                   max="149"
                   pattern="[0-9]*"
                   inputmode="numeric"
                   value="22">
            of 149
        </label>
        <button class="a-btn
                       a-btn__link
                       m-pagination_btn-submit"
                id="m-pagination_btn-submit"
                type="submit">Go</button>
    </form>
</nav>
```

### Handling the first and last pages

When on the first or last page of paginated content,
be sure to disable the appropriate buttons
by adding the `a_btn__disabled` modifier
and removing their `href` attribute.

For example:

<nav class="m-pagination" role="navigation" aria-label="Pagination">
    <a class="a-btn
              a-btn__disabled
              m-pagination_btn-prev">
        <span class="a-btn_icon a-btn_icon__on-left">{% include icons/left.svg %}</span>
        Newer
    </a>
    <a class="a-btn
              m-pagination_btn-next"
       href="?page=2#pagination_content">
        Older
        <span class="a-btn_icon a-btn_icon__on-right">{% include icons/right.svg %}</span>
    </a>
    <form class="m-pagination_form"
          action="#pagination_content">
        <label class="m-pagination_label"
               for="m-pagination_current-page">
            Page
            <span class="u-visually-hidden">
                number 1 out
            </span>
            <input class="m-pagination_current-page"
                   id="m-pagination_current-page"
                   name="page"
                   type="number"
                   min="1"
                   max="149"
                   pattern="[0-9]*"
                   inputmode="numeric"
                   value="1">
            of 149
        </label>
        <button class="a-btn
                       a-btn__link
                       m-pagination_btn-submit"
                id="m-pagination_btn-submit"
                type="submit">Go</button>
    </form>
</nav>

```
<nav class="m-pagination" role="navigation" aria-label="Pagination">
    <a class="a-btn
              a-btn__disabled
              m-pagination_btn-prev">
        <span class="a-btn_icon a-btn_icon__on-left">{% raw %}{% include icons/left.svg %}{% endraw %}</span>
        Newer
    </a>
    <a class="a-btn
              m-pagination_btn-next"
       href="?page=2#pagination_content">
        Older
        <span class="a-btn_icon a-btn_icon__on-right">{% raw %}{% include icons/right.svg %}{% endraw %}</span>
    </a>
    <form class="m-pagination_form"
          action="#pagination_content">
        <label class="m-pagination_label"
               for="m-pagination_current-page">
            Page
            <span class="u-visually-hidden">
                number 1 out
            </span>
            <input class="m-pagination_current-page"
                   id="m-pagination_current-page"
                   name="page"
                   type="number"
                   min="1"
                   max="149"
                   pattern="[0-9]*"
                   inputmode="numeric"
                   value="1">
            of 149
        </label>
        <button class="a-btn
                       a-btn__link
                       m-pagination_btn-submit"
                id="m-pagination_btn-submit"
                type="submit">Go</button>
    </form>
</nav>
```


## Responsive behavior

- `@bp-xs-max`: On small screens, the buttons display next to each
  other, stacked on top of the form.
