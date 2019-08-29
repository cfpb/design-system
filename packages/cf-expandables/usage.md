Expandables are components that have additional content that can be
opened (expanded) and closed (collapsed). They can appear on their own
or in groups.

[`cf-core`](../cf-core) and [`cf-icons`](../cf-icons) components are
dependencies of this component.

> NOTE: If you use `cf-expandables.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Sizing variables](#sizing-variables)
    - [Timing variables](#timing-variables)
- [Modifiers](#modifiers)
    - [Expanded](#expanded)
    - [Padded](#padded)
    - [Spaced header](#spaced-header)
- [Elements](#elements)
    - [Text elements](#text-elements)
    - [Header elements](#header-elements)
- [Recommended expandable pattern](#recommended-expandable-pattern)
    - [Default state](#default-state)
    - [Default state - open on load](#default-state-open-on-load)
    - [Barebones example](#barebones-expandable)
- [Expandable groups](#expandable-groups)
    - [Accordion style group](#accordion-style-group)
- [JavaScript API](#javascript-api)


## Variables

Component variables are used to theme a component.
They likely will be left as is, but if needed can be overwritten by duplicating
the variable in a `@key: value` format with a different value.
This customized variable would be placed in the same file
where this component's less file is imported.

### Color variables

Color variables referenced in comments are from [cf-core cf-brand-colors.less](https://github.com/cfpb/capital-framework/blob/master/packages/cf-core/src/cf-brand-colors.less).


```
// .o-expandable
@expandable-focus:             @black;

// .o-expandable_label
@expandable_label-text:        @black;

// .o-expandable_link
@expandable_link-text:         @pacific;

// .o-expandable__padded
@expandable__padded-bg:        @gray-10;
@expandable__padded-bg-hover:  @gray-20;
@expandable__padded-divider:   @gray-40;

// .o-expandable-group
@expandable-group_header-text: @gray;
@expandable-group_header-bg:   @gray-10;
@expandable-group-bg:          @white;
@expandable-group-divider:     @gray-80;
```

### Sizing variables

```
@expandable_link-font-size: 14px;
```

### Timing variables
```
// Transition timing
@expandable__transition-speed: 0.25s;
```


## Modifiers

### Expanded

Sometimes you may want the expandable to be open by default.
This is as easy as adding the `.o-expandable_content__onload-open` modifier
to the `.o-expandable_content` block.

```
.o-expandable_content__onload-open
```

### Padded

Adds `padding` and a `background` color to `.o-expandable_header` and
`.o-expandable_content`.

In addition to using the `.o-expandable__padded` modifier you also need to make
sure you are using `.o-expandable_header`.

```
.o-expandable__padded
```

### Spaced header

Allows you to add space between `.o-expandable_header` and `.o-expandable_content`.

```
.o-expandable_header__spaced
```

## Elements

### Text elements

#### Label

Allows you to add some styled text.

<span class="o-expandable_label">
    Lorem ipsum
</span>

```
<span class="o-expandable_label">
    Lorem ipsum
</span>
```

#### Link

Allows you to add some styled text to look like a link.

_Note: only use this in the expandable header_

<span class="o-expandable_link">
    Lorem ipsum
</span>

```
<span class="o-expandable_link">
    Lorem ipsum
</span>
```

### Header elements

These additional elements are useful for more complicated expandables that need
to convey more information than just 'Show/Hide' before the user expands it.

#### Header

Creates a full-width container to house information that is always visible.

Combine `.o-expandable_header` with `.o-expandable_target` for a full-width
trigger.

```
.o-expandable_header
```

#### Header left/right

Allows you to float information left and right.

```
.o-expandable_header-left
.o-expandable_header-right
```


## Recommended expandable pattern

Expandables can be built by combining the basic barebones structure described
in the next section along with more specialized expandable elements
and modifiers described throughout.

### Default state

The following combination is our recommended go-to expandable pattern.

<div class="o-expandable
            o-expandable__padded
            o-expandable__background
            o-expandable__border">
    <button class="o-expandable_header o-expandable_target"
            title="Expand content">
        <h3 class="h4 o-expandable_header-left o-expandable_label">
            Expandable Header
        </h3>
        <span class="o-expandable_header-right o-expandable_link">
            <span class="o-expandable_cue o-expandable_cue-open">
                <span class="u-visually-hidden-on-mobile">Show</span>
                {% include icons/plus-round.svg %}
            </span>
            <span class="o-expandable_cue o-expandable_cue-close">
                <span class="u-visually-hidden-on-mobile">Hide</span>
                {% include icons/minus-round.svg %}
            </span>
        </span>
    </button>
    <div class="o-expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>

```
<div class="o-expandable
            o-expandable__padded
            o-expandable__background
            o-expandable__border">
    <button class="o-expandable_header o-expandable_target"
            title="Expand content">
        <h3 class="h4 o-expandable_header-left o-expandable_label">
            Expandable Header
        </h3>
        <span class="o-expandable_header-right o-expandable_link">
            <span class="o-expandable_cue o-expandable_cue-open">
                <span class="u-visually-hidden-on-mobile">Show</span>
                {% raw %}{% include icons/plus-round.svg %}{% endraw %}
            </span>
            <span class="o-expandable_cue o-expandable_cue-close">
                <span class="u-visually-hidden-on-mobile">Hide</span>
                {% raw %}{% include icons/minus-round.svg %}{% endraw %}
            </span>
        </span>
    </button>
    <div class="o-expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>
```

### Default state (open on load)

<div class="o-expandable
            o-expandable__padded
            o-expandable__background
            o-expandable__border">
    <button class="o-expandable_header o-expandable_target"
            title="Expand content">
        <h3 class="h4 o-expandable_header-left o-expandable_label">
            Expandable Header
        </h3>
        <span class="o-expandable_header-right o-expandable_link">
            <span class="o-expandable_cue o-expandable_cue-open">
                <span class="u-visually-hidden-on-mobile">Show</span>
                {% include icons/plus-round.svg %}
            </span>
            <span class="o-expandable_cue o-expandable_cue-close">
                <span class="u-visually-hidden-on-mobile">Hide</span>
                {% include icons/minus-round.svg %}
            </span>
        </span>
    </button>
    <div class="o-expandable_content o-expandable_content__onload-open">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>

```
<div class="o-expandable
            o-expandable__padded
            o-expandable__background
            o-expandable__border">
    <button class="o-expandable_header o-expandable_target"
            title="Expand content">
        <h3 class="h4 o-expandable_header-left o-expandable_label">
            Expandable Header
        </h3>
        <span class="o-expandable_header-right o-expandable_link">
            <span class="o-expandable_cue o-expandable_cue-open">
                <span class="u-visually-hidden-on-mobile">Show</span>
                {% raw %}{% include icons/plus-round.svg %}{% endraw %}
            </span>
            <span class="o-expandable_cue o-expandable_cue-close">
                <span class="u-visually-hidden-on-mobile">Hide</span>
                {% raw %}{% include icons/minus-round.svg %}{% endraw %}
            </span>
        </span>
    </button>
    <div class="o-expandable_content o-expandable_content__onload-open">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>
```

### Barebones expandable

This is the barebones structure for expandables that can be used (along with
other expanable elements and modifiers) to create custom expandable patterns.

In this barebones example there are no visual styles.

<div class="o-expandable">
    <button class="o-expandable_target" title="Expand content">
        <span class="o-expandable_cue o-expandable_cue-open">
            <span class="u-visually-hidden-on-mobile">Show</span>
        </span>
        <span class="o-expandable_cue o-expandable_cue-close">
            <span class="u-visually-hidden-on-mobile">Hide</span>
        </span>
    </button>
    <div class="o-expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>

```
<div class="o-expandable">
    <button class="o-expandable_target" title="Expand content">
        <span class="o-expandable_cue o-expandable_cue-open">
            <span class="u-visually-hidden-on-mobile">Show</span>
        </span>
        <span class="o-expandable_cue o-expandable_cue-close">
            <span class="u-visually-hidden-on-mobile">Hide</span>
        </span>
    </button>
    <div class="o-expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>
```


## Expandable groups

<div class="o-expandable-group">
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 1
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% include icons/minus-round.svg %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 2
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% include icons/minus-round.svg %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 3
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% include icons/minus-round.svg %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>

```
<div class="o-expandable-group">
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 1
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% raw %}{% include icons/minus-round.svg %}{% endraw %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 2
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% raw %}{% include icons/minus-round.svg %}{% endraw %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 3
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% raw %}{% include icons/minus-round.svg %}{% endraw %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>
```

### Accordion-style group

Accordions can only show one open expandable at a time.
Add the `o-expandable-group__accordion` class to the expandable group
to activate the accordion mode.

<div class="o-expandable-group o-expandable-group__accordion">
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 1
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% include icons/minus-round.svg %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 2
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% include icons/minus-round.svg %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 3
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% include icons/minus-round.svg %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>

```
<div class="o-expandable-group o-expandable-group__accordion">
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 1
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% raw %}{% include icons/minus-round.svg %}{% endraw %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 2
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% raw %}{% include icons/minus-round.svg %}{% endraw %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <h3 class="h4 o-expandable_header-left o-expandable_label">
                Expandable Header 3
            </h3>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    <span class="u-visually-hidden-on-mobile">Show</span>
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    <span class="u-visually-hidden-on-mobile">Hide</span>
                    {% raw %}{% include icons/minus-round.svg %}{% endraw %}
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>
```

## JavaScript API

A new array of Expandable instances can be created with
`const expandables = Expandable.init();`.
Each instance has the following methods for public consumption:

### toggleTargetState( element )

```js
const element = document.querySelector( '.o-expandable_target' );
expandables[0].toggleTargetState( element );
```

Toggle an expandable to open or closed.

Parameters:
 - element {HTMLNode} The expandable target HTML DOM element.

### getLabelText()

```js
expandables[0].getLabelText();
```

Retrieve the label text of the expandable header.

Return:
 - {string} The text of the expandable's label.
