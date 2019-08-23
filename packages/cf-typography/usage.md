The cf-typography component includes multiple patterns for headings,
links, lists, and other advanced typographic treatments.

The [`cf-core`](../core) component is a dependency of this component
and has more basic typography patterns.


> NOTE: If you use `cf-typography.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.

## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Font variables](#font-variables)
    - [Font source variables](#font-source-variables)
- [Headings](#headings)
    - [Heading with icon](#heading-with-icon)
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
    - [Micro copy](#micro-copy)
    - [Date](#date)
    - [Pull quote](#pull-quote)


## Variables

Component variables are used to theme a component.
They likely will be left as is, but if needed can be overwritten by duplicating
the variable in a `@key: value` format with a different value.
This customized variable would be placed in the same file
where this component's less file is imported.

### Color variables

Color variables referenced in comments are from [cf-core cf-brand-colors.less](https://github.com/cfpb/capital-framework/blob/master/packages/cf-core/src/cf-brand-colors.less).

```
// Running text elements

// .a-micro-copy
@micro-copy:                @black;

// .a-date
@date:                      @gray;

// .m-pull-quote
@pull-quote_body:           @black;
@pull-quote_citation:       @gray;

// Headings

// .a-heading__icon
@heading__icon:             @black;
@heading__icon__hover:      @link-text-hover;

// Headers

// .m-slug-header
@slug-header_border__thin:  @gray-10;
@slug-header_border__thick: @green;

// .m-meta-header
@meta-header_border:        @gray-40;

// Links

// .a-link__jump
@jump-link_bg:              @gray-10;
@jump-link_border:          @gray-40;
```

### Font variables

```
@webfont-regular: 'AvenirNextLTW01-Regular';
@webfont-italic: @webfont-regular;
@webfont-medium: 'AvenirNextLTW01-Medium';
@webfont-demi: @webfont-medium;
```

**Note:** We don't serve the font file for Avenir Next Italic
because we found Avenir Next Regular with browser-created faux italics
was an acceptable substitute, and it saves a lot of bytes not to serve it.

Similarly, we're trying out Avenir Next Medium with faux bolding
in place of Avenir Next Demi, though the results of that experiment
have been less predictable, so we may yet revert that decision.

### Font source variables

Use this variable to specify where the fonts files used in the `@webfont-*`
variables are located when self-hosting fonts.
Can be either a relative or absolute path.

```
@cf-fonts-path: '/fonts'
```

If you want to load fonts from a Fonts.com Web Fonts project,
set the following variable to `true`,
otherwise set it to `false` to use the self-hosted font path:

```
@use-font-cdn: true;
```


### Heading with icon

The heading with icon is typically used for listing categories in a meta
header. Since categories can be repetitive, we suggest placing a label with
`.u-visually-hidden` prior to the headings to add more context for screen
readers (see Meta Header below).

<a href="#" class="a-heading a-heading__icon">
    {% include icons/dialogue.svg %}
    Consumer finance
</a>

```
<a href="#" class="a-heading a-heading__icon">
    {% raw %}{% include icons/dialogue.svg %}{% endraw %}
    Consumer finance
</a>
```


## Headers

### Slug header

<header class="m-slug-header">
    <h2 class="a-heading">
        Blog summary
    </h2>
</header>

```
<header class="m-slug-header">
    <h2 class="a-heading">
        Blog summary
    </h2>
</header>
```

### Meta header

Note that the example shows `.m-meta-header_left` using the `.a-heading__icon`
pattern and `.m-meta-header_right` using the `.a-date` pattern but you could use
other patterns in place of them. Or you can even swap them so that date is
attached to `.m-meta-header_left` and `.a-heading.a-heading__icon` is attached to
`.m-meta-header_right`.

#### Default meta header

<header class="m-meta-header">
    <div class="m-meta-header_right">
        <span class="a-date">
            Nov 4, 2013
        </span>
    </div>
    <div class="m-meta-header_left">
        <span class="u-visually-hidden">Categories: </span>
        <a href="#" class="a-heading a-heading__icon">
            {% include icons/credit-card.svg %}
            Consumer finance
        </a>
        |
        <a href="#" class="a-heading a-heading__icon">
            {% include icons/bullhorn.svg %}
            At the CFPB
        </a>
    </div>
</header>

```
<header class="m-meta-header">
    <div class="m-meta-header_right">
        <span class="a-date">
            Nov 4, 2013
        </span>
    </div>
    <div class="m-meta-header_left">
        <span class="u-visually-hidden">Categories: </span>
        <a href="#" class="a-heading a-heading__icon">
            {% raw %}{% include icons/credit-card.svg %}{% endraw %}
            Consumer finance
        </a>
        |
        <a href="#" class="a-heading a-heading__icon">
            {% raw %}{% include icons/bullhorn.svg %}{% endraw %}
            At the CFPB
        </a>
    </div>
</header>
```


## Link patterns

### Links with icons

- Styles to enable adding an icon to a link and preventing the link's underline
  from extending under the icon.
- For the underlined icon prevention to work, you must wrap the link text with
  a `span.icon-link_text`. There can be no whitespace between the text and the
  opening and closing `span` tags.
- Include the icon either prior to or after the `a-link_text`. It is important the
  text and icon are siblings to correctly handle underlines.

<p>
    For more information, email
    <a class="a-link
              a-link__icon"
       href="#">
        {% include icons/mail.svg %}
        <span class="a-link_text">john.smith@cfpb.gov</span>
    </a>.
    Alternatively, you can
    <a class="a-link
              a-link__icon"
       href="#">
        <span class="a-link_text">download the info sheet</span>
        {% include icons/download.svg %}
    </a>.
    Oh, you might also want to visit this
    <a class="a-link
              a-link__icon"
       href="#">
        <span class="a-link_text">other organization's website</span>
        {% include icons/external-link.svg %}
    </a> for further details.
</p>


```
<p>
   For more information, email
    <a class="a-link
              a-link__icon"
       href="#">
        {% raw %}{% include icons/mail.svg %}{% endraw %}
        <span class="a-link_text">john.smith@cfpb.gov</span>
    </a>.
    Alternatively, you can
    <a class="a-link
              a-link__icon"
       href="#">
        <span class="a-link_text">download the info sheet</span>
        {% raw %}{% include icons/download.svg %}{% endraw %}
    </a>.
    Oh, you might also want to visit this
    <a class="a-link
              a-link__icon"
       href="#">
        <span class="a-link_text">other organization's website</span>
        {% raw %}{% include icons/external-link.svg %}{% endraw %}
    </a> for further details.
</p>
```

#### Non-wrapping icon links

- Warning: Icons added to inline links can sometimes break onto the next line.
  If you want to prevent this, you can add the `__no-wrap` modifier to
  `.a-link__icon`.


For more information, email
<a class="a-link
          a-link__icon
          a-link__no-wrap"
   href="#">
    <span class="a-link_text">john.smith@cfpb.gov</span>
    {% include icons/mail.svg %}
</a>.

```

For more information, email
<a class="a-link
          a-link__icon
          a-link__no-wrap"
   href="#">
    <span class="a-link_text">john.smith@cfpb.gov</span>
    {% raw %}{% include icons/mail.svg %}{% endraw %}
</a>.
```

### Jump link

"Jump links" are standalone links that respond to small screens by converting
to full block links that have a finger-friendly touch area.

<a class="a-link
          a-link__jump
          a-link__icon-after-text"
   href="#">
    <span class="a-link_text">Default jump link</span>
    {% include icons/right.svg %}
</a>

```
<a class="a-link
          a-link__jump
          a-link__icon-after-text"
   href="#">
    {% raw %}{% include icons/right.svg %}{% endraw %}
</a>
```

#### Jump link with large link modifier

The large jump link has an `18px` `font-size`, compared to the default of `16px`.

<a class="a-link
          a-link__jump
          a-link__icon-after-text
          a-link__large"
   href="#">
    <span class="a-link_text">Large jump link</span>
    {% include icons/right.svg %}
</a>

```
<a class="a-link
          a-link__jump
          a-link__icon-after-text
          a-link__large"
   href="#">
    <span class="a-link_text">Large jump link</span>
    {% raw %}{% include icons/right.svg %}{% endraw %}
</a>
```

#### Jump link with icon on the left

Jump links can also have icons before the text, like icon links.

<a class="a-link
          a-link__jump
          a-link__icon-before-text"
   href="#">
    {% include icons/left.svg %}
    <span class="a-link_text">Jump link with icon on left</span>
</a>

```
<a class="a-link
          a-link__jump
          a-link__icon-before-text"
   href="#">
    {% raw %}{% include icons/left.svg %}{% endraw %}
    <span class="a-link_text">Jump link with icon on left</span>
</a>
```

#### Jump link with background modifier (only visible on small screens)

<a class="a-link
          a-link__jump
          a-link__icon-after-text
          a-link__bg"
   href="#">
    <span class="a-link_text">Jump link with grey background and
        solid borders on small screens</span>
    {% include icons/right.svg %}
</a>

```
<a class="a-link
          a-link__jump
          a-link__icon-after-text
          a-link__bg"
   href="#">
    <span class="a-link_text">Jump link with grey background and
        solid borders on small screens</span>
    {% raw %}{% include icons/right.svg %}{% endraw %}
</a>
```


## Lists

### Unstyled list modifier

Unstyled list removes bullets and other styling from a list.

<ul class="m-list m-list__unstyled">
    <li class="m-list_item">List item 1</li>
    <li class="m-list_item">List item 2</li>
    <li class="m-list_item">List item 3</li>
</ul>

```
<ul class="m-list m-list__unstyled">
    <li class="m-list_item">List item 1</li>
    <li class="m-list_item">List item 2</li>
    <li class="m-list_item">List item 3</li>
</ul>
```

### Spaced list modifier

Spaced list adds extra padding to every element in a list.

#### Default spaced list

<ul class="m-list m-list__spaced">
    <li class="m-list_item">List item 1</li>
    <li class="m-list_item">List item 2</li>
    <li class="m-list_item">List item 3</li>
</ul>

```
<ul class="m-list m-list__spaced">
    <li class="m-list_item">List item 1</li>
    <li class="m-list_item">List item 2</li>
    <li class="m-list_item">List item 3</li>
</ul>
```

#### Nested list example

<ul class="m-list m-list__spaced">
    <li class="m-list_item">List item 1</li>
    <li class="m-list_item">
        List item 2
        <ul class="m-list m-list__spaced">
            <li class="m-list_item">List item 2a</li>
            <li class="m-list_item">List item 2b</li>
            <li class="m-list_item">List item 2c</li>
        </ul>
    </li>
    <li class="m-list_item">List item 3</li>
</ul>

```
<ul class="m-list m-list__spaced">
    <li class="m-list_item">List item 1</li>
    <li class="m-list_item">
        List item 2
        <ul class="m-list m-list__spaced">
            <li class="m-list_item">List item 2a</li>
            <li class="m-list_item">List item 2b</li>
            <li class="m-list_item">List item 2c</li>
        </ul>
    </li>
    <li class="m-list_item">List item 3</li>
</ul>
```

### Horizontal list modifier

A modifier for the list to make it show items horizontally.

<ul class="m-list m-list__horizontal">
    <li class="m-list_item">List item 1</li>
    <li class="m-list_item">List item 2</li>
    <li class="m-list_item">List item 3</li>
</ul>

```
<ul class="m-list m-list__horizontal">
    <li class="m-list_item">List item 1</li>
    <li class="m-list_item">List item 2</li>
    <li class="m-list_item">List item 3</li>
</ul>
```

### Link list modifier

The link list modifier is intended to be used for lists where each item is a
link. It converts to a finger-friendly link with a large tap area on smaller
screens.

<ul class="m-list m-list__links">
    <li class="m-list_item">
        <a class="m-list_link" href="#">List item 1</a>
    </li>
    <li class="m-list_item">
        <a class="m-list_link" href="#">List item 2</a>
    </li>
    <li class="m-list_item">
        <a class="m-list_link" href="#">List item 3</a>
    </li>
</ul>

```
<ul class="m-list m-list__links">
    <li class="m-list_item">
        <a class="m-list_link" href="#">List item 1</a>
    </li>
    <li class="m-list_item">
        <a class="m-list_link" href="#">List item 2</a>
    </li>
    <li class="m-list_item">
        <a class="m-list_link" href="#">List item 3</a>
    </li>
</ul>
```

## Miscellaneous Text

### Micro copy

The `.a-micro-copy` class is good for highlighting small pieces of text,
typically legal copy.

<p class="a-micro-copy">
    Lorem ipsum dolor sit amet
</p>

```
<p class="a-micro-copy">
    Lorem ipsum dolor sit amet
</p>
```

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
    <p class="m-pull-quote_body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum corrupti tempora nam nihil qui mollitia consectetur
        corporis nemo culpa dolorum!
    </p>
    <footer>
        <cite class="m-pull-quote_citation">
            Author Name
        </cite>
    </footer>
</aside>


```
<aside class="m-pull-quote">
    <p class="m-pull-quote_body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum corrupti tempora nam nihil qui mollitia consectetur
        corporis nemo culpa dolorum!
    </p>
    <footer>
        <cite class="m-pull-quote_citation">
            Author Name
        </cite>
    </footer>
</aside>
```

#### Large pull quote

<aside class="m-pull-quote m-pull-quote__large">
    <div class="m-pull-quote_body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum corrupti tempora nam nihil qui mollitia consectetur
        corporis nemo culpa dolorum!
    </div>
    <footer>
        <cite class="m-pull-quote_citation">
            Author Name
        </cite>
    </footer>
</aside>

```
<aside class="m-pull-quote m-pull-quote__large">
    <div class="m-pull-quote_body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum corrupti tempora nam nihil qui mollitia consectetur
        corporis nemo culpa dolorum!
    </div>
    <footer>
        <cite class="m-pull-quote_citation">
            Author Name
        </cite>
    </footer>
</aside>
```
