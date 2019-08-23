A set of HTML and CSS layout helpers.

[`cf-core`](../cf-core) and [`cf-grid`](../cf-grid) components are
dependencies of this component.

> NOTE: If you use `cf-layout.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Sizing variables](#sizing-variables)
- [Standard content formats](#standard-content-formats)
    - [Content line](#content-line)
    - [Main content and sidebar](#main-content-and-sidebar)
    - [Left-hand navigation layout](#left-hand-navigation-layout)
    - [Right-hand sidebar layout](#right-hand-sidebar-layout)
        - [Bleedbar sidebar styling](#bleedbar-sidebar-styling)
    - [Narrow content column option](#narrow-content-column-option)
    - [Flush bottom modifier](#flush-bottom-modifier)
    - [Flush top modifier (only on small screens)](#flush-top-modifier-only-on-small-screens)
    - [Flush all modifier (only on small screens)](#flush-all-modifier-only-on-small-screens)
- [Custom content layouts](#custom-content-layouts)
    - [Large gutters modifier](#large-gutters-modifier)
    - [Content layout column dividers](#content-layout-column-dividers)
- [Block](#block)
    - [Standard block example](#standard-block-example)
    - [Border-top modifier](#border-top-modifier)
    - [Border-right modifier](#border-right-modifier)
    - [Border-bottom modifier](#border-bottom-modifier)
    - [Border-left modifier](#border-left-modifier)
    - [Border modifier](#border-modifier)
    - [Flush-top modifier](#flush-top-modifier)
    - [Flush-bottom modifier](#flush-bottom-modifier-1)
    - [Flush-sides modifier](#flush-sides-modifier)
    - [Flush modifier](#flush-modifier)
    - [Background modifier](#background-modifier)
    - [Background and flush sides modifier combo example](#background-and-flush-sides-modifier-combo-example)
    - [Padded-top modifier](#padded-top-modifier)
    - [Padded-bottom modifier](#padded-bottom-modifier)
    - [Sub blocks](#sub-blocks)
    - [Mixing content blocks with content layouts](#mixing-content-blocks-with-content-layouts)
- [cf-grid helpers](#cf-grid-helpers)
    - [.wrapper (base)](#wrapper-base)
    - [Column divider modifiers](#column-divider-modifiers)
- [Featured content module](#featured-content-module)
    - [Anchoring the visual on the right](#anchoring-the-visual-on-the-right)
    - [Centering the visual](#centering-the-visual)
- [Heroes](#heroes)
    - [Standard hero with illustration](standard-hero-with-illustration)
    - [Hero with bleeding illustration](#hero-with-bleeding-illustration)
    - [Hero with photograph](#hero-with-photograph)
- [Wells](#wells)


## Variables

Component variables are used to theme a component.
They likely will be left as is, but if needed can be overwritten by duplicating
the variable in a `@key: value` format with a different value.
This customized variable would be placed in the same file
where this component's less file is imported.

### Color variables

Color variables referenced in comments are from [cf-core cf-brand-colors.less](https://github.com/cfpb/capital-framework/blob/master/packages/cf-core/src/cf-brand-colors.less).

```
// .block
@block__bg:                 @gray-5;
@block__border:             @gray-40;
@block__border-top:         @gray-40;
@block__border-right:       @gray-40;
@block__border-bottom:      @gray-40;
@block__border-left:        @gray-40;

// .content_main
@content_main-border:       @gray-40;

// .content_sidebar
@content_sidebar-bg:        @gray-5;
@content_sidebar-border:    @gray-40;

// .content_line
@content_line:              @gray-40;

// .grid_column__top-divider
@grid_column__top-divider:  @gray-40;

// .grid_column__top-divider
@grid_column__left-divider: @gray-40;

// Hero variables
@hero-bg:                   @gray-5;
@hero-knockout-bg:          @gray;
@hero-knockout-text:        @white;

// Featured Content Module variables
@fcm-bg:                    @block__bg;
```

### Sizing variables

```
// Hero variables
@hero-desktop-height: 285px;
```


## Standard content formats


### Content line

A 1 pixel edge to edge bar that can divide content.

<div class="content_line"></div>

```
<div class="content_line"></div>
```


### Main content and sidebar

Standard layout for the main content area and sidebar.

By default `.content_main` and `.content_sidebar` stack vertically.
When using the modifiers described below to create columns,
the columns will remain stacked for smaller screens and then convert to to
columns at `801px`.

_Inline styling is for demonstration purposes only; do not include it in your
markup._

<main class="content" role="main">
    <section class="content_hero" style="background: #E3E4E5">
        Content hero
    </section>
    <div class="content_wrapper">
        <section class="content_main">
            Main content area
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>

```
<main class="content" role="main">
    <section class="content_hero" style="background: #E3E4E5">
        Content hero
    </section>
    <div class="content_wrapper">
        <section class="content_main">
            Main content area
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>
```


### Left-hand navigation layout

Add a class of `.content__L-R` to `main.content` to determine the width ratio
of `.content_main` and `.content_sidebar`, where 'L' is the left-hand item and
'R' is the right-hand item. The two common configurations are `1-3` (sidebar on
the left, content on the right, in a ratio of 1:3) and `2-1` (content on the
left, sidebar on the right, in a ratio of 2:1).

It is assumed that the content is wider than the sidebar.

<main class="content content__1-3" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__1-3" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```


### Right-hand sidebar layout

Add a class of `.content__L-R` to `main.content` to determine the width ratio
of `.content_main` and `.content_sidebar`, where 'L' is the left-hand item and
'R' is the right-hand item. The two common configurations are `1-3` (sidebar
on the left, content on the right, in a ratio of 1:3) and `2-1` (content on the
left, sidebar on the right, in a ratio of 2:1).

It is assumed that the content is wider than the sidebar.

_Inline styling is for demonstration purposes only; do not include it in your
markup._

<main class="content content__2-1" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <section class="content_main">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__2-1" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <section class="content_main">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```


#### Bleedbar sidebar styling

Simply add class `.content__bleedbar` to `main.content`. Only supports
sidebars on the right, for now.

_Note that inline styling is for demonstration purposes only; do not include
it in your markup._

<main class="content content__2-1 content__bleedbar" role="main">
    <section class="content_hero" style="background: #E3E4E5">
        Content hero
    </section>
    <div class="content_line"></div>
    <div class="content_wrapper">
        <section class="content_main">
            Main content area
        </section>
        <aside class="content_sidebar">
            Bleeding sidebar
        </aside>
    </div>
</main>

```
<main class="content content__2-1 content__bleedbar" role="main">
    <section class="content_hero" style="background: #E3E4E5">
        Content hero
    </section>
    <div class="content_line"></div>
    <div class="content_wrapper">
        <section class="content_main">
            Main content area
        </section>
        <aside class="content_sidebar">
            Bleeding sidebar
        </aside>
    </div>
</main>
```


### Narrow content column option

Add a class of `.content_main__narrow` to `.content_main` to get a one-column
(in a 12-column grid) gutter on the right side.

_Inline styling is for demonstration purposes only; do not include it in your
markup._

<main class="content content__2-1" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <section class="content_main content_main__narrow">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__2-1" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <section class="content_main content_main__narrow">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```


### Flush bottom modifier

Add a class of `.content__flush-bottom` to `.content_main` or
`.content_sidebar` to remove bottom padding.

<main class="content content__1-3" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-bottom">
            Side with no bottom padding...
        </aside>
        <section class="content_main content__flush-bottom">
            Main content with no bottom padding...
            <div class="block
                        block__flush-bottom
                        block__flush-sides
                        block__bg">
                .content__flush-bottom is very useful when you have a
                content block inside of .content_main with a background
                and flush sides.
            </div>
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__1-3" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-bottom">
            Side with no bottom padding...
        </aside>
        <section class="content_main content__flush-bottom">
            Main content with no bottom padding...
            <div class="block
                        block__flush-bottom
                        block__flush-sides
                        block__bg">
                .content__flush-bottom is very useful when you have a
                content block inside of .content_main with a background
                and flush sides.
            </div>
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```


### Flush top modifier (only on small screens)

Add a class of `.content__flush-top-on-small` to `.content_main` or
`.content_sidebar` to remove top `padding` on small screens only. 'Small'
screens in this case refers to the breakpoint where `.content_main` and
`.content_sidebar` single column layout.

<main class="content content__1-3" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-top-on-small">
            Side with no top padding on small screens...
        </aside>
        <section class="content_main">
            Main content
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__1-3" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-top-on-small">
            Side with no top padding on small screens...
        </aside>
        <section class="content_main">
            Main content
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```


### Flush all modifier (only on small screens)

Add a class of `.content__flush-all-on-small` to `.content_main` or
`.content_sidebar` to remove all `padding` and border-based gutters on small
screens only. 'Small' screens in this case refers to the breakpoint where
`.content_main` and `.content_sidebar` single column layout.

<main class="content content__1-3" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-all-on-small">
            Side with no padding or border-based gutters on small screens...
        </aside>
        <section class="content_main">
            Main content
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__1-3" role="main">
    <div class="content_line"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-all-on-small">
            Side with no padding or border-based gutters on small screens...
        </aside>
        <section class="content_main">
            Main content
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```


## Custom content layouts

The `content-l` ("content layout")
class can be used to lay content out in a grid.

<div class="content-l">
    <div class="content-l_col content-l_col-1">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Full-width column (spans 12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-2-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Two thirds-width column (spans 8/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-4">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;">
            Quarter width column (spans 3/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-3-4">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;">
            Three-quarter width column (spans 9/12 columns)
        </div>
    </div>
</div>

```
<div class="content-l">
    <div class="content-l_col content-l_col-1">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Full-width column (spans 12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-2-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Two thirds-width column (spans 8/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-4">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;">
            Quarter width column (spans 3/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-3-4">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;">
            Three-quarter width column (spans 9/12 columns)
        </div>
    </div>
</div>
```


### Large gutters modifier

<div class="content-l content-l__main  content-l__large-gutters">
    <div class="content-l_col content-l_col-1">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Full-width column (spans 12 columns)
        </div>
    </div>
</div>
<div class="content-l content-l__main  content-l__large-gutters">
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
</div>

```
<div class="content-l content-l__main  content-l__large-gutters">
    <div class="content-l_col content-l_col-1">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Full-width column (spans 12 columns)
        </div>
    </div>
</div>
<div class="content-l content-l__main  content-l__large-gutters">
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
</div>
```


### Content layout column dividers

Adds dividers between specified `.content-l_col-X-X` classes.

Layout dividers work in conjunction with `.content-l_col-X-X` elements and have
specific needs depending on which column element variant they are attached to.
For example `.content-l_col-1-2` has different divider needs than
`.content-l_col-1-3` because they may break to single columns at different
breakpoints.

Dividers use absolute positioning relative to the `.content-l` element
and depend on `.content-l` using `position: relative;`.
This allows vertical dividers to span the height of the tallest column.
Just be aware that if you have more than one row of columns,
and each row has columns of different widths, the borders will cause unwanted
overlapping since they will span the height of the entire `.content-l` element.

<div class="content-l content-l__large-gutters">
    <div class="content-l_col content-l_col-1-2">
        <img src="https://dummyimage.com/600x320/addc91/101820" alt="Placeholder image">
        <br>
        Half-width column (spans 6/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-2 content-l_col__before-divider">
        <img src="https://dummyimage.com/600x320/addc91/101820" alt="Placeholder image">
        <br>
        Half-width column (spans 6/12 columns)
    </div>
</div>
<br>
<div class="content-l content-l__large-gutters">
    <div class="content-l_col content-l_col-1-3">
        Third-width column (spans 4/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-3 content-l_col__before-divider">
        Third-width column (spans 4/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-3 content-l_col__before-divider">
        Third-width column (spans 4/12 columns)
    </div>
</div>

```
<div class="content-l content-l__large-gutters">
    <div class="content-l_col content-l_col-1-2">
        <img src="https://dummyimage.com/600x320/addc91/101820" alt="Placeholder image">
        <br>
        Half-width column (spans 6/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-2 content-l_col__before-divider">
        <img src="https://dummyimage.com/600x320/addc91/101820" alt="Placeholder image">
        <br>
        Half-width column (spans 6/12 columns)
    </div>
</div>
<br>
<!-- Starting a new .content-l so that the dividers from
     .content-l_col.content-l_col-1-2.content-l_col__before-divider
     won't overlap the .content-l_col-1-3 columns. -->
<div class="content-l content-l__large-gutters">
    <div class="content-l_col content-l_col-1-3">
        Third-width column (spans 4/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-3 content-l_col__before-divider">
        Third-width column (spans 4/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-3 content-l_col__before-divider">
        Third-width column (spans 4/12 columns)
    </div>
</div>
```


## Block

`.block` is a base class with several modifiers that help you separate chunks
of content via `margin`, `padding`, `border`, and `background`.

### Standard block example

The standard `.block` class by itself simply adds a `margin` of twice the
gutter width to the top and bottom.

Main content...
<div class="block">
    Content block
</div>
<div class="block">
    Content block
</div>
<div class="block">
    Content block
</div>

```
Main content...
<div class="block">
    Content block
</div>
<div class="block">
    Content block
</div>
<div class="block">
    Content block
</div>
```

### Border-top modifier

Adds top `border` to `.block`.

Main content...
<div class="block block__border-top">
    Content block with top border.
</div>

```
Main content...
<div class="block block__border-top">
    Content block with top border.
</div>
```

### Border-right modifier

Adds right `border` to `.block`.

Main content...
<div class="block block__border-right">
    Content block with right border.
</div>

```
Main content...
<div class="block block__border-right">
    Content block with right border.
</div>
```

### Border-bottom modifier

Adds bottom `border` to `.block`.

Main content...
<div class="block block__border-bottom">
    Content block with bottom border.
</div>

```
Main content...
<div class="block block__border-bottom">
    Content block with bottom border.
</div>
```

### Border-left modifier

Adds left `border` to `.block`.

Main content...
<div class="block block__border-left">
    Content block with left border.
</div>

```
Main content...
<div class="block block__border-left">
    Content block with left border.
</div>
```

### Border modifier

Adds `border` on all sides to `.block`.

Main content...
<div class="block block__border">
    Content block with borders on all sides.
</div>

```
Main content...
<div class="block block__border">
    Content block with borders on all sides.
</div>
```

### Flush-top modifier

Removes the top `margin` from `.block`.

Main content...
<div class="block block__flush-top">
    Content block with no top margin.
</div>
<div class="block">
    Content block
</div>

```
Main content...
<div class="block block__flush-top">
    Content block with no top margin.
</div>
<div class="block">
    Content block
</div>
```

### Flush-bottom modifier

Removes the bottom `margin` from `.block`.

Main content...
<div class="block block__flush-bottom">
    Content block with no bottom margin.
</div>
<div class="block">
    Content block
</div>

```
Main content...
<div class="block block__flush-bottom">
    Content block with no bottom margin.
</div>
<div class="block">
    Content block
</div>
```

### Flush-sides modifier

Removes the side `margin` from `.block`.
Typically used in conjunction with `.block__bg` to create a 'well' whose
`background` extends into the left and right gutters. (See below.)

<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            Main content...
            <aside class="block block__flush-sides">
                Content block with no side margins.
            </aside>
        </section>
    </div>
</main>

```
<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            Main content...
            <aside class="block block__flush-sides">
                Content block with no side margins.
            </aside>
        </section>
    </div>
</main>
```

### Flush modifier

Removes the side, top, and bottom `margin` from `.block`.

<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            Main content...
            <aside class="block block__flush">
                Content block with no margins.
            </aside>
        </section>
    </div>
</main>

```
<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            Main content...
            <aside class="block block__flush">
                Content block with no margins.
            </aside>
        </section>
    </div>
</main>
```

### Background modifier

Adds a `background` color and padding to `.block`.
Setup for (ems-equivalent) `30px` `padding` on top and `60px` on bottom.

Main content...
<div class="block block__bg">
    Content block with a background
</div>

```
Main content...
<div class="block block__bg">
    Content block with a background
</div>
```

### Background and flush-sides modifier combo example

This is an example of combining modifiers to get a flush `padding` and
`background` with a `.block`.

<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main content__flush-bottom">
            Main content...
            <div class="block block__flush-sides block__bg">
                Content block with a background and flush sides
            </div>
        </section>
    </div>
</main>

```
<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main content__flush-bottom">
            Main content...
            <div class="block block__flush-sides block__bg">
                Content block with a background and flush sides
            </div>
        </section>
    </div>
</main>
```

### Padded-top modifier

Breaks top `margin` into `margin` and `padding`. Useful in combination with
`block__border-top` to add `padding` between `.block` contents and `border`.

Main content...
<div class="block block__padded-top block__border-top">
    Content block with reduced top margin and added top padding
    and border.
</div>

```
Main content...
<div class="block block__padded-top block__border-top">
    Content block with reduced top margin and added top padding
    and border.
</div>
```

### Padded-bottom modifier

Breaks bottom `margin` into `margin` and `padding`. Useful in combination with
`block__border-bottom` to add `padding` between `.block` contents and `border`.

Main content...
<div class="block block__padded-bottom block__border-bottom">
    Content block with reduced bottom margin and added bottom padding
    and border.
</div>

```
Main content...
<div class="block block__padded-bottom block__border-bottom">
    Content block with reduced bottom margin and added bottom padding
    and border.
</div>
```

### Sub blocks

Useful for when you need some consistent `margin` between `.blocks` that are
nested within other `.blocks`.

_Note that the `div`s with inline styles are for demonstration purposes only
and should not be used in production._

<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>
<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>
<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>

```
<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>
<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>
<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>
```

### Mixing content blocks with content layouts

You can safely combine `.block` with `.content-l_col` to achieve a column-based
layout at larger screens with no top `margin` and a vertical layout at smaller
screens that do have `margins`.

_Note that the `div`s with inline styles are for demonstration purposes only
and should not be used in production._

<div class="content-l">
    <div class="block content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2; padding: 8px;">
            Content block that is also a content column.
            Notice how my top margins only exist on smaller screens when
            I need to stack vertically.
        </div>
    </div>
    <div class="block content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2; padding: 8px;">
            Content block that is also a content column.
            Notice how my top margins only exist on smaller screens when
            I need to stack vertically.
        </div>
    </div>
</div>

```
<div class="content-l">
    <div class="block content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2; padding: 8px;">
            Content block that is also a content column.
            Notice how my top margins only exist on smaller screens when
            I need to stack vertically.
        </div>
    </div>
    <div class="block content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2; padding: 8px;">
            Content block that is also a content column.
            Notice how my top margins only exist on smaller screens when
            I need to stack vertically.
        </div>
    </div>
</div>
```


## cf-grid helpers

### .wrapper (base)

Turns an element into a cf-grid wrapper at `801px` and above. Includes some
explicit declarations for Internet Explorer 8 due to the fact that it doesn't
support media queries.

<div class="wrapper">
    Wrapper
</div>

```
<div class="wrapper">
    Wrapper
</div>
```

### Column divider modifiers

cf-grid columns use left and right `border` for fixed `margin` which means it's
not possible to set visual left and right borders directly on them.
Instead we can use the `:before` pseudo element and position it absolutely.
The added benefit of doing it this way is that the `border` spans the entire
height of the next parent using `position: relative;`. This means that the
`border` will always match the height of the tallest column in the row.

```less
.my-column-1-2 {

    // Creates a column that spans 6 out of 12 columns.
    .grid_column(6, 12);

    // Add a top divider only at screen 599px and smaller.
    .respond-to-max(599px {
        .grid_column__top-divider();
    });

    // Add a left divider only at screen 600px and larger.
    .respond-to-min(600px, {
        .grid_column__left-divider();
    });

}
```


## Featured content module

Featured content modules, like a hero, consist of headline and description,
an optional call to action, and a static or video visual.
They are intended to be used in a main content column next to a sidebar.

Text is full-width and displayed above the visual in the default/mobile view.
When creating a static image for the visual, it should be 1076px × 606px
(a 16:9 aspect ratio), which is 2x the rendered width at the maximum size
at which the visual will be seen (on a 600px wide display).

At larger screen sizes, the image moves to the right of the text,
occupying a fixed width of 270px (equal to 3 of 12 columns at max page width).
By default, the left edge of the image is anchored to the left side of the
visual's 270px-wide area, and the right side is cropped off.
The aspect ratio of the visual area increases as screen size increases,
resulting in slightly different image cropping at different screen sizes,
but the left edge of the image remains anchored in view.
The full height of the image is always in view;
the top and bottom are never cropped.
See below for modifiers that change the image's horizontal anchoring.

<section class="o-featured-content-module">
    <div class="o-featured-content-module_text">
        <h2>Featured content</h2>
        <p>
            Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
            instructior ex pri. Cu pri inani constituto, cum aeque noster
            commodo cu.
        </p>
        <a class="a-link
                  a-link__jump
                  a-link__icon-after-text">
            <span class="a-link_text">Read more about the feature</span>
            {% include icons/right.svg %}
        </a>
    </div>
    <div class="o-featured-content-module_visual">
        <img class="o-featured-content-module_img"
             src="https://dummyimage.com/1076x606/addc91/101820"
             alt="">
    </div>
</section>

```
<section class="o-featured-content-module">
    <div class="o-featured-content-module_text">
        <h2>Featured content</h2>
        <p>
            Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
            instructior ex pri. Cu pri inani constituto, cum aeque noster
            commodo cu.
        </p>
        <a class="a-link
                  a-link__jump
                  a-link__icon-after-text">
            <span class="a-link_text">Read more about the feature</span>
            {% raw %}{% include icons/right.svg %}{% endraw %}
        </a>
    </div>
    <div class="o-featured-content-module_visual">
        <img class="o-featured-content-module_img"
             src="https://dummyimage.com/1076x606/addc91/101820"
             alt="">
    </div>
</section>
```

### Anchoring the visual on the right

To anchor a featured content module's visual on the right
(for example, when displaying a map with a copyright watermark on the right),
add the `o-featured-content-module__right` modifier class
to the `o-featured-content-module` organism.
This anchors the right side of the image to the right of the available space
so that the right side remains in view at all screen sizes.

<section class="o-featured-content-module
                o-featured-content-module__right">
    <div class="o-featured-content-module_text">
        <h2>Featured map</h2>
        <p>
            Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
            instructior ex pri. Cu pri inani constituto, cum aeque noster
            commodo cu.
        </p>
        <a class="a-link
                  a-link__jump
                  a-link__icon-after-text">
            <span class="a-link_text">Read more about the feature</span>
            {% include icons/right.svg %}
        </a>
    </div>
    <div class="o-featured-content-module_visual">
        <img class="o-featured-content-module_img"
             src="https://dummyimage.com/1076x606/addc91/101820"
             alt="">
    </div>
</section>

```
<section class="o-featured-content-module
                o-featured-content-module__right">
    <div class="o-featured-content-module_text">
        <h2>Featured map</h2>
        <p>
            Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
            instructior ex pri. Cu pri inani constituto, cum aeque noster
            commodo cu.
        </p>
        <a class="a-link
                  a-link__jump
                  a-link__icon-after-text">
            <span class="a-link_text">Read more about the feature</span>
            {% raw %}{% include icons/right.svg %}{% endraw %}
        </a>
    </div>
    <div class="o-featured-content-module_visual">
        <img class="o-featured-content-module_img"
             src="https://dummyimage.com/1076x606/addc91/101820"
             alt="">
    </div>
</section>
```

### Centering the visual

When the featured content module visual is a video,
or a static image composed with its subject in the middle,
add the `o-featured-content-module__center` modifier class
to the `o-featured-content-module` organism.
This anchors the center of the image to the center of the available space
so that the focal point of the visual remains in view at all screen sizes.

<section class="o-featured-content-module
                o-featured-content-module__center">
    <div class="o-featured-content-module_text">
        <h2>Featured video</h2>
        <p>
            Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
            instructior ex pri. Cu pri inani constituto, cum aeque noster
            commodo cu.
        </p>
        <a class="a-link
                  a-link__jump
                  a-link__icon-after-text">
            <span class="a-link_text">Read more about the feature</span>
            {% include icons/right.svg %}
        </a>
    </div>
    <div class="o-featured-content-module_visual">
        <img class="o-featured-content-module_img"
             src="https://dummyimage.com/1076x606/addc91/101820"
             alt="">
    </div>
</section>

```
<section class="o-featured-content-module
                o-featured-content-module__center">
    <div class="o-featured-content-module_text">
        <h2>Featured video</h2>
        <p>
            Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
            instructior ex pri. Cu pri inani constituto, cum aeque noster
            commodo cu.
        </p>
        <a class="a-link
                  a-link__jump
                  a-link__icon-after-text">
            <span class="a-link_text">Read more about the feature</span>
            {% raw %}{% include icons/right.svg %}{% endraw %}
        </a>
    </div>
    <div class="o-featured-content-module_visual">
        <img class="o-featured-content-module_img"
             src="https://dummyimage.com/1076x606/addc91/101820"
             alt="">
    </div>
</section>
```


## Heroes

A hero consists of a headline, a small amount of additional sub-heading text
and an image. Its background color or image is flush with the sides of the
screen, and the content is vertically centered.

The illustration can be customized by setting the `background-image` property
on the `.m-hero_image` element.

On small screens (or where media queries are not supported), the text spans the
full width of the `.m-hero_wrapper` and the illustration is displayed underneath.

For larger screen sizes, media queries are used to position the illustration to
the right of the text.

At the grid's maximum width and above, the hero should not exceed `285px` in
height. The image should be `195px` in height to conform to this standard.

### Standard hero with illustration

<section class="m-hero" id="hero1">
    <div class="m-hero_wrapper wrapper">
        <div class="m-hero_text">
            <h1 class="m-hero_heading">Standard hero with illustration</h1>
            <p class="m-hero_subhead">
                This text has a recommended count of 165-186 characters
                (three lines at 1230px) following a one-line heading
                and 108-124 characters (two lines at 1230px)
                following a two-line heading.
            </p>
        </div>
        <div class="m-hero_image-wrapper">
            <div class="m-hero_image"></div>
        </div>
    </div>
    <style>
        #hero1 .m-hero_image {
            background-image:
                url('https://dummyimage.com/570x236/addc91/101820');
            background-image: -webkit-image-set(
                url('https://dummyimage.com/570x236/addc91/101820') 1x,
                url('https://dummyimage.com/1140x472/addc91/101820') 2x
            );
            background-image: image-set(
                url('https://dummyimage.com/570x236/addc91/101820') 1x,
                url('https://dummyimage.com/1140x472/addc91/101820') 2x
            );
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                src='https://dummyimage.com/570x236/addc91/101820',
                sizingMethod='scale');
            padding-bottom: 41.4893617%;
        }

        @media screen and (min-width: 37.5625em) {
            #hero1 .m-hero_image {
                background-image:
                    url('https://dummyimage.com/470x195/addc91/101820');
                background-image: -webkit-image-set(
                    url('https://dummyimage.com/470x195/addc91/101820') 1x,
                    url('https://dummyimage.com/940x390/addc91/101820') 2x
                );
                background-image: image-set(
                    url('https://dummyimage.com/470x195/addc91/101820') 1x,
                    url('https://dummyimage.com/940x390/addc91/101820') 2x
                );
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                    src='https://dummyimage.com/470x195/addc91/101820',
                    sizingMethod='scale');
                padding-bottom: 41.4893617%;
            }
        }
    </style>
</section>

```
<section class="m-hero" id="hero1">
    <div class="m-hero_wrapper wrapper">
        <div class="m-hero_text">
            <h1 class="m-hero_heading">Standard hero with illustration</h1>
            <p class="m-hero_subhead">
                This text has a recommended count of 165-186 characters
                (three lines at 1230px) following a one-line heading
                and 108-124 characters (two lines at 1230px)
                following a two-line heading.
            </p>
        </div>
        <div class="m-hero_image-wrapper">
            <div class="m-hero_image"></div>
        </div>
    </div>
    <style>
        #hero1 .m-hero_image {
            background-image:
                url('https://dummyimage.com/570x236/addc91/101820');
            background-image: -webkit-image-set(
                url('https://dummyimage.com/570x236/addc91/101820') 1x,
                url('https://dummyimage.com/1140x472/addc91/101820') 2x
            );
            background-image: image-set(
                url('https://dummyimage.com/570x236/addc91/101820') 1x,
                url('https://dummyimage.com/1140x472/addc91/101820') 2x
            );
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                src='https://dummyimage.com/570x236/addc91/101820',
                sizingMethod='scale');
            padding-bottom: 41.4893617%;
        }

        @media screen and (min-width: 37.5625em) {
            #hero1 .m-hero_image {
                background-image:
                    url('https://dummyimage.com/470x195/addc91/101820');
                background-image: -webkit-image-set(
                    url('https://dummyimage.com/470x195/addc91/101820') 1x,
                    url('https://dummyimage.com/940x390/addc91/101820') 2x
                );
                background-image: image-set(
                    url('https://dummyimage.com/470x195/addc91/101820') 1x,
                    url('https://dummyimage.com/940x390/addc91/101820') 2x
                );
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                    src='https://dummyimage.com/470x195/addc91/101820',
                    sizingMethod='scale');
                padding-bottom: 41.4893617%;
            }
        }
    </style>
</section>
```

### Hero with knockout text

When using a dark background add the `__knockout` modifier to the hero to
switch the text to white.

<section class="m-hero m-hero__knockout" id="hero2">
    <div class="m-hero_wrapper wrapper">
        <div class="m-hero_text">
            <h1 class="m-hero_heading">Max of 41 chars for a one-line heading</h1>
            <p class="m-hero_subhead">
                This text has a recommended count of 165-186 characters
                (three lines at 1230px) following a one-line heading
                and 108-124 characters (two lines at 1230px)
                following a two-line heading.
            </p>
        </div>
        <div class="m-hero_image-wrapper">
            <div class="m-hero_image"></div>
        </div>
    </div>
    <style>
        #hero2 {
            background-color: #207676;
        }

        #hero2 .m-hero_image {
            background-image:
                url('https://dummyimage.com/570x236/addc91/101820');
            background-image: -webkit-image-set(
                url('https://dummyimage.com/570x236/addc91/101820') 1x,
                url('https://dummyimage.com/1140x472/addc91/101820') 2x
            );
            background-image: image-set(
                url('https://dummyimage.com/570x236/addc91/101820') 1x,
                url('https://dummyimage.com/1140x472/addc91/101820') 2x
            );
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                src='https://dummyimage.com/570x236/addc91/101820',
                sizingMethod='scale');
            padding-bottom: 41.4893617%;
        }

        @media screen and (min-width: 37.5625em) {
            #hero2 .m-hero_image {
                background-image:
                    url('https://dummyimage.com/470x195/addc91/101820');
                background-image: -webkit-image-set(
                    url('https://dummyimage.com/470x195/addc91/101820') 1x,
                    url('https://dummyimage.com/940x390/addc91/101820') 2x
                );
                background-image: image-set(
                    url('https://dummyimage.com/470x195/addc91/101820') 1x,
                    url('https://dummyimage.com/940x390/addc91/101820') 2x
                );
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                    src='https://dummyimage.com/470x195/addc91/101820',
                    sizingMethod='scale');
                padding-bottom: 41.4893617%;
            }
        }
    </style>
</section>

```
<section class="m-hero m-hero__knockout" id="hero2">
    <div class="m-hero_wrapper wrapper">
        <div class="m-hero_text">
            <h1 class="m-hero_heading">Max of 41 chars for a one-line heading</h1>
            <p class="m-hero_subhead">
                This text has a recommended count of 165-186 characters
                (three lines at 1230px) following a one-line heading
                and 108-124 characters (two lines at 1230px)
                following a two-line heading.
            </p>
        </div>
        <div class="m-hero_image-wrapper">
            <div class="m-hero_image"></div>
        </div>
    </div>
    <style>
        #hero2 {
            background-color: #207676;
        }

        #hero2 .m-hero_image {
            background-image:
                url('https://dummyimage.com/570x236/addc91/101820');
            background-image: -webkit-image-set(
                url('https://dummyimage.com/570x236/addc91/101820') 1x,
                url('https://dummyimage.com/1140x472/addc91/101820') 2x
            );
            background-image: image-set(
                url('https://dummyimage.com/570x236/addc91/101820') 1x,
                url('https://dummyimage.com/1140x472/addc91/101820') 2x
            );
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                src='https://dummyimage.com/570x236/addc91/101820',
                sizingMethod='scale');
            padding-bottom: 41.4893617%;
        }

        @media screen and (min-width: 37.5625em) {
            #hero2 .m-hero_image {
                background-image:
                    url('https://dummyimage.com/470x195/addc91/101820');
                background-image: -webkit-image-set(
                    url('https://dummyimage.com/470x195/addc91/101820') 1x,
                    url('https://dummyimage.com/940x390/addc91/101820') 2x
                );
                background-image: image-set(
                    url('https://dummyimage.com/470x195/addc91/101820') 1x,
                    url('https://dummyimage.com/940x390/addc91/101820') 2x
                );
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                    src='https://dummyimage.com/470x195/addc91/101820',
                    sizingMethod='scale');
                padding-bottom: 41.4893617%;
            }
        }
    </style>
</section>
```

### Hero with a bleeding illustration

When using an illustration that bleeds top to bottom at larger screen sizes,
add the `__bleeding` modifier to the hero and add an additional
`m-hero_bleeding-image` as a sibling to `m-hero_image`

<section class="m-hero m-hero__bleeding" id="hero3">
    <div class="m-hero_wrapper wrapper">
        <div class="m-hero_text">
            <h1 class="m-hero_heading">Max of 41 chars for a one-line heading</h1>
            <p class="m-hero_subhead">
                This text has a recommended count of 165-186 characters
                (three lines at 1230px) following a one-line heading
                and 108-124 characters (two lines at 1230px)
                following a two-line heading.
            </p>
        </div>
        <div class="m-hero_image-wrapper">
            <div class="m-hero_image"></div>
        </div>
    </div>
    <style>
        #hero3 .m-hero_image {
            background-image:
                url('https://dummyimage.com/570x140/addc91/101820');
            background-image: -webkit-image-set(
                url('https://dummyimage.com/570x140/addc91/101820') 1x,
                url('https://dummyimage.com/1140x280/addc91/101820') 2x
            );
            background-image: image-set(
                url('https://dummyimage.com/570x140/addc91/101820') 1x,
                url('https://dummyimage.com/1140x280/addc91/101820') 2x
            );
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                src='https://dummyimage.com/570x140/addc91/101820',
                sizingMethod='scale');
            padding-bottom: 25.1020408%;
        }

        @media screen and (min-width: 37.5625em) {
            #hero3 .m-hero_image {
                background-image:
                    url('https://dummyimage.com/470x640/addc91/101820');
                background-image: -webkit-image-set(
                    url('https://dummyimage.com/470x640/addc91/101820') 1x,
                    url('https://dummyimage.com/940x1280/addc91/101820') 2x
                );
                background-image: image-set(
                    url('https://dummyimage.com/470x640/addc91/101820') 1x,
                    url('https://dummyimage.com/940x1280/addc91/101820') 2x
                );
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                    src='https://dummyimage.com/470x640/addc91/101820',
                    sizingMethod='scale');
            }
        }
    </style>
</section>

```
<section class="m-hero m-hero__bleeding" id="hero3">
    <div class="m-hero_wrapper wrapper">
        <div class="m-hero_text">
            <h1 class="m-hero_heading">Max of 41 chars for a one-line heading</h1>
            <p class="m-hero_subhead">
                This text has a recommended count of 165-186 characters
                (three lines at 1230px) following a one-line heading
                and 108-124 characters (two lines at 1230px)
                following a two-line heading.
            </p>
        </div>
        <div class="m-hero_image-wrapper">
            <div class="m-hero_image"></div>
        </div>
    </div>
    <style>
        #hero3 .m-hero_image {
            background-image:
                url('https://dummyimage.com/570x140/addc91/101820');
            background-image: -webkit-image-set(
                url('https://dummyimage.com/570x140/addc91/101820') 1x,
                url('https://dummyimage.com/1140x280/addc91/101820') 2x
            );
            background-image: image-set(
                url('https://dummyimage.com/570x140/addc91/101820') 1x,
                url('https://dummyimage.com/1140x280/addc91/101820') 2x
            );
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                src='https://dummyimage.com/570x140/addc91/101820',
                sizingMethod='scale');
            padding-bottom: 25.1020408%;
        }

        @media screen and (min-width: 37.5625em) {
            #hero3 .m-hero_image {
                background-image:
                    url('https://dummyimage.com/470x640/addc91/101820');
                background-image: -webkit-image-set(
                    url('https://dummyimage.com/470x640/addc91/101820') 1x,
                    url('https://dummyimage.com/940x1280/addc91/101820') 2x
                );
                background-image: image-set(
                    url('https://dummyimage.com/470x640/addc91/101820') 1x,
                    url('https://dummyimage.com/940x1280/addc91/101820') 2x
                );
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                    src='https://dummyimage.com/470x640/addc91/101820',
                    sizingMethod='scale');
            }
        }
    </style>
</section>
```

### Hero with photograph

The text overlays the photograph at larger screen sizes.
It's best to avoid a non-button call to action in these,
as it's unlikely that the Pacific Blue will have accessible contrast
with a non-white (or light gray) background.

<section class="m-hero m-hero__overlay" id="hero4">
    <div class="m-hero_wrapper wrapper">
        <div class="m-hero_text">
            <h1 class="m-hero_heading">Max of 41 chars for a one-line heading</h1>
            <p class="m-hero_subhead">
                This text has a recommended count of 165-186 characters
                (three lines at 1230px) following a one-line heading
                and 108-124 characters (two lines at 1230px)
                following a two-line heading.
            </p>
        </div>
        <div class="m-hero_image-wrapper">
            <div class="m-hero_image"></div>
        </div>
    </div>
    <style>
        #hero4 .m-hero_image {
            background-image:
                url('https://dummyimage.com/600x250/addc91/101820');
            background-image: -webkit-image-set(
                url('https://dummyimage.com/600x250/addc91/101820') 1x,
                url('https://dummyimage.com/1200x500/addc91/101820') 2x
            );
            background-image: image-set(
                url('https://dummyimage.com/600x250/addc91/101820') 1x,
                url('https://dummyimage.com/1200x500/addc91/101820') 2x
            );
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                src='https://dummyimage.com/600x250/addc91/101820',
                sizingMethod='scale');
            padding-bottom: 41.6666667%;
        }

        @media screen and (min-width: 37.5625em) {
            #hero4 .m-hero_wrapper{
                background-image:
                    url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg');
                background-image: -webkit-image-set(
                    url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 1x,
                    url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 2x
                );
                background-image: image-set(
                    url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 1x,
                    url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 2x
                );
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                    src='http://files.consumerfinance.gov/f/images/PC_hero.original.jpg',
                    sizingMethod='scale');
            }
        }
    </style>
</section>

```
<section class="m-hero m-hero__overlay" id="hero4">
    <div class="m-hero_wrapper wrapper">
        <div class="m-hero_text">
            <h1 class="m-hero_heading">Max of 41 chars for a one-line heading</h1>
            <p class="m-hero_subhead">
                This text has a recommended count of 165-186 characters
                (three lines at 1230px) following a one-line heading
                and 108-124 characters (two lines at 1230px)
                following a two-line heading.
            </p>
        </div>
        <div class="m-hero_image-wrapper">
            <div class="m-hero_image"></div>
        </div>
    </div>
    <style>
        #hero4 .m-hero_image {
            background-image:
                url('https://dummyimage.com/600x250/addc91/101820');
            background-image: -webkit-image-set(
                url('https://dummyimage.com/600x250/addc91/101820') 1x,
                url('https://dummyimage.com/1200x500/addc91/101820') 2x
            );
            background-image: image-set(
                url('https://dummyimage.com/600x250/addc91/101820') 1x,
                url('https://dummyimage.com/1200x500/addc91/101820') 2x
            );
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                src='https://dummyimage.com/600x250/addc91/101820',
                sizingMethod='scale');
            padding-bottom: 41.6666667%;
        }

        @media screen and (min-width: 37.5625em) {
            #hero4 .m-hero_wrapper{
                background-image:
                    url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg');
                background-image: -webkit-image-set(
                    url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 1x,
                    url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 2x
                );
                background-image: image-set(
                    url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 1x,
                    url('http://files.consumerfinance.gov/f/images/PC_hero.original.jpg') 2x
                );
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                    src='http://files.consumerfinance.gov/f/images/PC_hero.original.jpg',
                    sizingMethod='scale');
            }
        }
    </style>
</section>
```


## Wells

Wells are used to highlight specific information within a designated section
of a page. This breaks up the flow of content on the page and helps to
emphasize and set apart the content that is included.

<div class="o-well">
    <h4>Well title</h4>
    <p>
        Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
        instructior ex pri. Cu pri inani constituto, cum aeque noster commodo
        cu.
    </p>
</div>

```
<div class="o-well">
    <h4>Well title</h4>
    <p>
        Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur
        instructior ex pri. Cu pri inani constituto, cum aeque noster commodo
        cu.
    </p>
</div>
```
