The @cfpb/cfpb-typography component includes multiple patterns for headings,
links, lists, and other advanced typographic treatments.

The [`@cfpb/cfpb-core`](../cfpb-core)
component is a dependency of this component
and has more basic typography patterns.

> NOTE: If you use `@cfpb/cfpb-typography.less` directly,
> be sure to run the file through
> [Autoprefixer](https://github.com/postcss/autoprefixer),
> or your compiled Design System CSS will
> not work perfectly in older browsers.

## Table of contents

- [Variables](#variables)
  - [Color variables](#color-variables)
  - [Font variables](#font-variables)
  - [Font source variables](#font-source-variables)
- [Headers](#headers)
  - [Slug header](#slug-header)
  - [Meta header](#meta-header)
- [Link patterns](#link-patterns)
  - [Links with icons](#links-with-icons)
  - [Jump link](#jump-link)
- [Lists](#lists)
  - [Unstyled list modifier](#unstyled-list-modifier)
  - [Spaced list modifier](#spaced-list-modifier)
  - [Horizontal list modifier](#horizontal-list-modifier)
  - [Link list modifier](#link-list-modifier)
- [Miscellaneous text](#miscellaneous-text)
  - [Date](#date)
  - [Pull quote](#pull-quote)

## Variables

Component variables are used to theme a component.
They likely will be left as is, but if needed can be overwritten by duplicating
the variable in a `@key: value` format with a different value.
This customized variable would be placed in the same file
where this component's less file is imported.

### Color variables

Color variables referenced in comments are from [@cfpb/cfpb-core's brand-colors.less](https://github.com/cfpb/design-system/blob/main/packages/cfpb-core/src/brand-colors.less).

```
// Running text elements

// .a-date
@date:                      var(--gray);

// .m-pull-quote
@pull-quote_body:           var(--black);
@pull-quote_citation:       var(--gray);

// Headers

// .m-slug-header
@slug-header_border__thin:  var(--gray-10);
@slug-header_border__thick: var(--green);

### Font variables

```

@font-stack: "Avenir Next", Arial, sans-serif;

```

#### Webfont variables

```

@font-face-path: 'licensed-fonts.less';

```

Use this variable to point to the file containing your `@font-face` rules.
To use none, set it to an empty string.

**Note:** We don't serve the font file for Avenir Next Italic
because we found Avenir Next Regular with browser-created faux italics
was an acceptable substitute, and it saves a lot of bytes not to serve it.

Similarly, we're trying out Avenir Next Medium with faux bolding
in place of Avenir Next Demi, though the results of that experiment
have been less predictable, so we may yet revert that decision.

```

@cf-fonts-path: '/static/fonts';

```

Use this variable to specify where
the fonts declared in `licensed-fonts.less`
are located when self-hosting the font files.
Can be either a relative or absolute path.

## Headers

### Slug header

<header class="m-slug-header">
    <h2 class="m-slug-header__heading">
        Blog summary
    </h2>
</header>

```

<header class="m-slug-header">
    <h2 class="m-slug-header__heading">
        Blog summary
    </h2>
</header>
```

### Meta header

#### Default meta header

<div class="m-meta-header">
    <div class="m-meta-header__item-group">
    <div class="m-meta-header__item">
        {% include icons/chart.svg %}
        Office of Research Publication
    </div>
    <div class="m-meta-header__item">
        {% include icons/bank.svg %}
        Policy and compliance
    </div>
    </div>
    <div class="m-meta-header__item">
        <span class="a-date">
            Published
            <span class="datetime">
                <time datetime="2024-09-28T00:00:00">SEP 28, 2024</time>
            </span>
        </span>
    </div>
</div>

```
<div class="m-meta-header">
    <div class="m-meta-header__item-group">
    <div class="m-meta-header__item">
        {% include icons/chart.svg %}
        Office of Research Publication
    </div>
    <div class="m-meta-header__item">
        {% include icons/bank.svg %}
        Policy and compliance
    </div>
    </div>
    <div class="m-meta-header__item">
        <span class="a-date">
            Published
            <span class="datetime">
                <time datetime="2024-09-28T00:00:00">SEP 28, 2024</time>
            </span>
        </span>
    </div>
</div>
```

## Link patterns

### Links with icons

- Styles to enable adding an icon to a link and preventing the link's underline
  from extending under the icon.
- For the underlined icon prevention to work, you must wrap the link text with
  a `span.a-link__text`. There can be no whitespace between the text and the
  opening and closing `span` tags.
- Include the icon either prior to or after the `a-link__text`.
  It is important the text and icon are siblings to correctly handle underlines.

<p>
    For more information, email
    <a class="a-link"
       href="#">
        {% include icons/mail.svg %}
        <span class="a-link__text">john.smith@cfpb.gov</span>
    </a>.
    Alternatively, you can
    <a class="a-link"
       href="#">
        <span class="a-link__text">download the info sheet</span>
        {% include icons/download.svg %}
    </a>.
    Oh, you might also want to visit this
    <a class="a-link"
       href="#">
        <span class="a-link__text">other organization's website</span>
        {% include icons/external-link.svg %}
    </a> for further details.
</p>

```
<p>
   For more information, email
    <a class="a-link"
       href="#">
        {% raw %}{% include icons/mail.svg %}{% endraw %}
        <span class="a-link__text">john.smith@cfpb.gov</span>
    </a>.
    Alternatively, you can
    <a class="a-link"
       href="#">
        <span class="a-link__text">download the info sheet</span>
        {% raw %}{% include icons/download.svg %}{% endraw %}
    </a>.
    Oh, you might also want to visit this
    <a class="a-link"
       href="#">
        <span class="a-link__text">other organization's website</span>
        {% raw %}{% include icons/external-link.svg %}{% endraw %}
    </a> for further details.
</p>
```

### Jump link

"Jump links" are standalone links that respond to small screens by converting
to full block links that have a finger-friendly touch area.

<a class="a-link
          a-link--jump"
   href="#">
<span class="a-link__text">Default jump link</span>
{% include icons/right.svg %}
</a>

```
<a class="a-link
          a-link--jump"
   href="#">
    {% raw %}{% include icons/right.svg %}{% endraw %}
</a>
```

#### Jump link with icon on the left

Jump links can also have icons before the text, like icon links.

<a class="a-link
          a-link--jump"
   href="#">
{% include icons/left.svg %}
<span class="a-link__text">Jump link with icon on left</span>
</a>

```
<a class="a-link
          a-link--jump"
   href="#">
    {% raw %}{% include icons/left.svg %}{% endraw %}
    <span class="a-link__text">Jump link with icon on left</span>
</a>
```

## Lists

### Unstyled list modifier

Unstyled list removes bullets and other styling from a list.

<ul class="m-list m-list--unstyled">
    <li class="m-list__item">List item 1</li>
    <li class="m-list__item">List item 2</li>
    <li class="m-list__item">List item 3</li>
</ul>

```
<ul class="m-list m-list--unstyled">
    <li class="m-list__item">List item 1</li>
    <li class="m-list__item">List item 2</li>
    <li class="m-list__item">List item 3</li>
</ul>
```

### Spaced list modifier

Spaced list adds extra padding to every element in a list.

#### Default spaced list

<ul class="m-list m-list--spaced">
    <li class="m-list__item">List item 1</li>
    <li class="m-list__item">List item 2</li>
    <li class="m-list__item">List item 3</li>
</ul>

```
<ul class="m-list m-list--spaced">
    <li class="m-list__item">List item 1</li>
    <li class="m-list__item">List item 2</li>
    <li class="m-list__item">List item 3</li>
</ul>
```

#### Nested list example

<ul class="m-list m-list--spaced">
    <li class="m-list__item">List item 1</li>
    <li class="m-list__item">
        List item 2
        <ul class="m-list m-list--spaced">
            <li class="m-list__item">List item 2a</li>
            <li class="m-list__item">List item 2b</li>
            <li class="m-list__item">List item 2c</li>
        </ul>
    </li>
    <li class="m-list__item">List item 3</li>
</ul>

```
<ul class="m-list m-list--spaced">
    <li class="m-list__item">List item 1</li>
    <li class="m-list__item">
        List item 2
        <ul class="m-list m-list--spaced">
            <li class="m-list__item">List item 2a</li>
            <li class="m-list__item">List item 2b</li>
            <li class="m-list__item">List item 2c</li>
        </ul>
    </li>
    <li class="m-list__item">List item 3</li>
</ul>
```

### Horizontal list modifier

A modifier for the list to make it show items horizontally.

<ul class="m-list m-list--horizontal">
    <li class="m-list__item">List item 1</li>
    <li class="m-list__item">List item 2</li>
    <li class="m-list__item">List item 3</li>
</ul>

```
<ul class="m-list m-list--horizontal">
    <li class="m-list__item">List item 1</li>
    <li class="m-list__item">List item 2</li>
    <li class="m-list__item">List item 3</li>
</ul>
```

### Link list modifier

The link list modifier is intended to be used for lists where each item is a
link. It converts to a finger-friendly link with a large tap area on smaller
screens.

<ul class="m-list m-list--links">
    <li class="m-list__item">
        <a class="a-link a-link--jump" href="#">List item 1</a>
    </li>
    <li class="m-list__item">
        <a class="a-link a-link--jump" href="#">List item 2</a>
    </li>
    <li class="m-list__item">
        <a class="a-link a-link--jump" href="#">List item 3</a>
    </li>
</ul>

```
<ul class="m-list m-list--links">
    <li class="m-list__item">
        <a class="a-link a-link--jump" href="#">List item 1</a>
    </li>
    <li class="m-list__item">
        <a class="a-link a-link--jump" href="#">List item 2</a>
    </li>
    <li class="m-list__item">
        <a class="a-link a-link--jump" href="#">List item 3</a>
    </li>
</ul>
```

## Miscellaneous Text

### Date

<span class="a-date">
    Nov 4, 2013
</span>

```
<span class="a-date">
    Nov 4, 2013
</span>
```

### Pull quote

Use a pull quote to highlight excerpts from the current work.
This is not to be confused with `blockquote` which quotes from an external
work. Since a pull quote is an excerpt and repeats content from the article
you should use the `aside` element.

#### Default pull quote

<aside class="m-pull-quote">
    <p class="m-pull-quote__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum corrupti tempora nam nihil qui mollitia consectetur
        corporis nemo culpa dolorum!
    </p>
    <footer>
        <cite class="m-pull-quote__citation">
            Author Name
        </cite>
    </footer>
</aside>

```
<aside class="m-pull-quote">
    <p class="m-pull-quote__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum corrupti tempora nam nihil qui mollitia consectetur
        corporis nemo culpa dolorum!
    </p>
    <footer>
        <cite class="m-pull-quote__citation">
            Author Name
        </cite>
    </footer>
</aside>
```
