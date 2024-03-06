Expandables are components that have additional content that can be
opened (expanded) and closed (collapsed). They can appear on their own
or in groups.

[`@cfpb/cfpb-core`](../@cfpb/cfpb-core) and
[`@cfpb/cfpb-icons`](../@cfpb/cfpb-icons)
components are dependencies of this component.

## Table of contents

- [Modifiers](#modifiers)
  - [Expanded](#expanded)
  - [Padded](#padded)
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

## Modifiers

### Expanded

Sometimes you may want the expandable to be open by default.
This is as easy as adding the `.o-expandable__onload-open` modifier
to the `.o-expandable` block.

```
.o-expandable__onload-open
```

### Padded

Adds `padding` to the `.o-expandable_label`.

```
.o-expandable__padded
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

<span class="o-expandable_cues">
    Lorem ipsum
</span>

```
<span class="o-expandable_cues">
    Lorem ipsum
</span>
```

## Recommended expandable pattern

Expandables can be built by combining the basic barebones structure described
in the next section along with more specialized expandable elements
and modifiers described throughout.

### Default state

The following combination is our recommended go-to expandable pattern.

<div class="o-expandable
            o-expandable__background
            o-expandable__border">
    <button class="o-expandable_header"
            title="Expand content">
        <h3 class="h4 o-expandable_label">
            Expandable Header
        </h3>
        <span class="o-expandable_cues">
            <span class="o-expandable_cue-open" role="img" aria-label="Show">
                {% include icons/plus-round.svg %}
            </span>
            <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
            o-expandable__background
            o-expandable__border">
    <button class="o-expandable_header"
            title="Expand content">
        <h3 class="h4 o-expandable_label">
            Expandable Header
        </h3>
        <span class="o-expandable_cues">
            <span class="o-expandable_cue-open" role="img" aria-label="Show">
                {% raw %}{% include icons/plus-round.svg %}{% endraw %}
            </span>
            <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
            o-expandable__background
            o-expandable__border
            o-expandable__onload-open">
    <button class="o-expandable_header"
            title="Expand content">
        <h3 class="h4 o-expandable_label">
            Expandable Header
        </h3>
        <span class="o-expandable_cues">
            <span class="o-expandable_cue-open" role="img" aria-label="Show">
                {% include icons/plus-round.svg %}
            </span>
            <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
            o-expandable__background
            o-expandable__border
            o-expandable__onload-open">
    <button class="o-expandable_header"
            title="Expand content">
        <h3 class="h4 o-expandable_label">
            Expandable Header
        </h3>
        <span class="o-expandable_cues">
            <span class="o-expandable_cue-open" role="img" aria-label="Show">
                {% raw %}{% include icons/plus-round.svg %}{% endraw %}
            </span>
            <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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

### Variations

Should you need an expandable thing that is not covered by the expandables above, see the [Transition Patterns](https://cfpb.github.io/design-system/patterns/transition-patterns) for making a component with expandable-like behavior.

## Expandable groups

<div class="o-expandable-group">
    <div class="o-expandable">
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 1
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 2
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 3
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 1
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 2
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 3
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 1
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 2
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 3
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% include icons/plus-round.svg %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 1
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 2
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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
        <button class="o-expandable_header"
                title="Expand content">
            <h3 class="h4 o-expandable_label">
                Expandable Header 3
            </h3>
            <span class="o-expandable_cues">
                <span class="o-expandable_cue-open" role="img" aria-label="Show">
                    {% raw %}{% include icons/plus-round.svg %}{% endraw %}
                </span>
                <span class="o-expandable_cue-close" role="img" aria-label="Hide">
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

### expand()

```js
expandables[0].expand();
```

Expand the expandable open.

### collapse()

```js
expandables[0].collapse();
```

Collapse the expandable closed.

### isExpanded()

```js
expandables[0].isExpanded();
```

Whether the expandable is open or closed.

### refresh()

```js
expandables[0].refresh();
```

Refresh the height of the expandable when the internal content height changes.

### getLabelText()

```js
expandables[0].getLabelText();
```

Retrieve the label text of the expandable header.

Return:

- {string} The text of the expandable's label.
