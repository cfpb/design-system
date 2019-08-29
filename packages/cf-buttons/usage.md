The cf-buttons component provides extensions to the basic button styles for
Capital Framework.

[`cf-core`](../cf-core) and [`cf-icons`](../cf-icons) components are all
dependencies of this component.

> NOTE: If you use `cf-buttons.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.

## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Sizing variables](#sizing-variables)
- [Atoms](#atoms)
    - [Default button](#default-button)
    - [Secondary button](#secondary-button)
    - [Destructive action button](#destructive-action-button)
    - [Disabled button](#disabled-button)
    - [Super button](#super-button)
    - [Full-width buttons on x-small screens](#full-width-buttons-on-x-small-screens)
    - [Button links](#button-links)
    - [Icon buttons](#icon-buttons)
- [Molecules](#molecules)
    - [Button group](#button-group)

## Variables

Component variables are used to theme a component.
They likely will be left as is, but if needed can be overwritten by duplicating
the variable in a `@key: value` format with a different value.
This customized variable would be placed in the same file
where this component's less file is imported.

### Color variables

Color variables referenced in comments are from [cf-core cf-brand-colors.less](https://github.com/cfpb/capital-framework/blob/master/packages/cf-core/src/cf-brand-colors.less).

```
// .btn
@btn-text:                  @white;
@btn-bg:                    @pacific;
@btn-bg-hover:              @dark-pacific;
@btn-bg-active:             @navy;

// .btn__secondary
@btn__secondary-text:       @white;
@btn__secondary-bg:         @gray;
@btn__secondary-bg-hover:   @dark-gray;
@btn__secondary-bg-active:  @black;

// .btn__warning
@btn__warning-text:         @white;
@btn__warning-bg:           @red;
@btn__warning-bg-hover:     @dark-red;
@btn__warning-bg-active:    @dark-gray;

// .btn__disabled
@btn__disabled-text:        @gray;
@btn__disabled-bg:          @gray-20;
@btn__disabled-outline:     @gray-20;
```

### Sizing variables

```
// .btn
@btn-font-size:             @base-font-size-px;
@btn-border-radius-size:    4px;
@btn-v-padding:             8px;
@btn-h-padding:             14px;
@btn-v-padding-modifier-ie: 0.8;

// .btn__super
@btn__super-font-size:      18px;
```

## Atoms

### Default Button

The default button is an atom in our atomic design standards.
You can apply the `a-btn` class to a link, button and submit input field
to receive the atomic button styles.

For accessibility reasons, use the semantic `<button>` instead of a link when possible.

#### Default state

<a href="#" class="a-btn" title="Test button">Anchor Tag</a>
<button class="a-btn" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn">

```
<a href="#" class="a-btn" title="Test button">Anchor Tag</a>
<button class="a-btn" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn">
```

#### Hovered state

<a href="#" class="a-btn hover" title="Test button">Anchor Tag</a>
<button class="a-btn hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn hover">

```
<a href="#" class="a-btn hover" title="Test button">Anchor Tag</a>
<button class="a-btn hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn hover">
```

#### Focused state

<a href="#" class="a-btn focus" title="Test button">Anchor Tag</a>
<button class="a-btn focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn focus">

```
<a href="#" class="a-btn focus" title="Test button">Anchor Tag</a>
<button class="a-btn focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn focus">
```

#### Active state

<a href="#" class="a-btn active" title="Test button">Anchor Tag</a>
<button class="a-btn active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn active">

```
<a href="#" class="a-btn active" title="Test button">Anchor Tag</a>
<button class="a-btn active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn active">
```

### Secondary button

#### Default state

<a href="#" class="a-btn a-btn__secondary">Anchor Tag</a>
<button class="a-btn a-btn__secondary" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary">

```
<a href="#" class="a-btn a-btn__secondary">Anchor Tag</a>
<button class="a-btn a-btn__secondary" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary">
```

#### Hovered state

<a href="#" class="a-btn a-btn__secondary hover">Anchor Tag</a>
<button class="a-btn a-btn__secondary hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary hover">

```
<a href="#" class="a-btn a-btn__secondary hover">Anchor Tag</a>
<button class="a-btn a-btn__secondary hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary hover">
```

#### Focused state

<a href="#" class="a-btn a-btn__secondary focus">Anchor Tag</a>
<button class="a-btn a-btn__secondary focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary focus">

```
<a href="#" class="a-btn a-btn__secondary focus">Anchor Tag</a>
<button class="a-btn a-btn__secondary focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary focus">
```

#### Active state

<a href="#" class="a-btn a-btn__secondary active">Anchor Tag</a>
<button class="a-btn a-btn__secondary active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary active">

```
<a href="#" class="a-btn a-btn__secondary active">Anchor Tag</a>
<button class="a-btn a-btn__secondary active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary active">
```

### Destructive action button

#### Default state

<a href="#" class="a-btn a-btn__warning">Anchor Tag</a>
<button class="a-btn a-btn__warning" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning">

```
<a href="#" class="a-btn a-btn__warning">Anchor Tag</a>
<button class="a-btn a-btn__warning" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning">
```

#### Hovered state

<a href="#" class="a-btn a-btn__warning hover">Anchor Tag</a>
<button class="a-btn a-btn__warning hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning hover">

```
<a href="#" class="a-btn a-btn__warning hover">Anchor Tag</a>
<button class="a-btn a-btn__warning hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning hover">
```

#### Focused state

<a href="#" class="a-btn a-btn__warning focus">Anchor Tag</a>
<button class="a-btn a-btn__warning focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning focus">

```
<a href="#" class="a-btn a-btn__warning focus">Anchor Tag</a>
<button class="a-btn a-btn__warning focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning focus">
```

#### Active state

<a href="#" class="a-btn a-btn__warning active">Anchor Tag</a>
<button class="a-btn a-btn__warning active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning active">

```
<a href="#" class="a-btn a-btn__warning active">Anchor Tag</a>
<button class="a-btn a-btn__warning active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning active">
```

### Disabled button

#### Default/hovered/active state

<a href="#" class="a-btn a-btn__disabled">Anchor Tag</a>
<button class="a-btn a-btn__disabled" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__disabled">
<button class="a-btn" disabled title="Test button">
    Button Tag w/ disabled attr
</button>

```
<a href="#" class="a-btn a-btn__disabled">Anchor Tag</a>
<button class="a-btn a-btn__disabled" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__disabled">
<button class="a-btn" disabled title="Test button">
    Button Tag w/ disabled attr
</button>
```

#### Focused state

<a href="#" class="a-btn a-btn__disabled focus">Anchor Tag</a>
<button class="a-btn a-btn__disabled focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__disabled focus">
<button class="a-btn focus" disabled title="Test button">
    Button Tag w/ disabled attr
</button>

```
<a href="#" class="a-btn a-btn__disabled focus">Anchor Tag</a>
<button class="a-btn a-btn__disabled focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__disabled focus">
<button class="a-btn focus" disabled title="Test button">
    Button Tag w/ disabled attr
</button>
```

### Super button

#### Default state

<a href="#" class="a-btn a-btn__super">Anchor Tag</a>
<button class="a-btn a-btn__super" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super">

```
<a href="#" class="a-btn a-btn__super">Anchor Tag</a>
<button class="a-btn a-btn__super" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super">
```

#### Hovered state

<a href="#" class="a-btn a-btn__super hover">Anchor Tag</a>
<button class="a-btn a-btn__super hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super hover">

```
<a href="#" class="a-btn a-btn__super hover">Anchor Tag</a>
<button class="a-btn a-btn__super hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super hover">
```

#### Focused state

<a href="#" class="a-btn a-btn__super focus">Anchor Tag</a>
<button class="a-btn a-btn__super focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super focus">

```
<a href="#" class="a-btn a-btn__super focus">Anchor Tag</a>
<button class="a-btn a-btn__super focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super focus">
```

#### Active state

<a href="#" class="a-btn a-btn__super active">Anchor Tag</a>
<button class="a-btn a-btn__super active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super active">

```
<a href="#" class="a-btn a-btn__super active">Anchor Tag</a>
<button class="a-btn a-btn__super active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super active">
```

### Full-width buttons on x-small screens

_Reduce screen size to see these in action_

<a href="#" class="a-btn a-btn__full-on-xs">Anchor Tag</a>

<button class="a-btn a-btn__full-on-xs" title="Test button">
    Button Tag
</button>

<input type="submit" value="Input Tag" class="a-btn a-btn__full-on-xs">

```
<a href="#" class="a-btn a-btn__full-on-xs">Anchor Tag</a>
<button class="a-btn a-btn__full-on-xs" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__full-on-xs">
```

### Button links

#### Default state

<button href="#" class="a-btn a-btn__link">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning">
    Warning Button Link
</button>

```
<button href="#" class="a-btn a-btn__link">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning">
    Warning Button Link
</button>
```

#### Hovered state

<button href="#" class="a-btn a-btn__link hover">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary hover">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning hover">
    Warning Button Link
</button>

```
<button href="#" class="a-btn a-btn__link hover">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary hover">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning hover">
    Warning Button Link
</button>
```

#### Focus state

<button href="#" class="a-btn a-btn__link focus">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary focus">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning focus">
    Warning Button Link
</button>

```
<button href="#" class="a-btn a-btn__link focus">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary focus">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning focus">
    Warning Button Link
</button>
```

#### Active state

<button href="#" class="a-btn a-btn__link active">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary active">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning active">
    Warning Button Link
</button>

```
<button href="#" class="a-btn a-btn__link active">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary active">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning active">
    Warning Button Link
</button>
```

### Icon buttons

> **Note:** Due to inherent whitespace created between inline elements,
whitespace must be removed between the icon and its wrapping span element.

#### Button with icon on the left

<button class="a-btn">
    <span class="a-btn_icon
                 a-btn_icon__on-left">{% include icons/error.svg %}</span>
    Close
</button>

<button class="a-btn a-btn__secondary">
    <span class="a-btn_icon
                 a-btn_icon__on-left">{% include icons/error.svg %}</span>
    Close
</button> Secondary button

<button class="a-btn a-btn__warning">
    <span class="a-btn_icon
                 a-btn_icon__on-left">{% include icons/error.svg %}</span>
    Close
</button> Warning button

<button class="a-btn a-btn__disabled">
    <span class="a-btn_icon
                 a-btn_icon__on-left">{% include icons/error.svg %}</span>
    Close
</button> Disabled button

```
<button class="a-btn">
    <span class="a-btn_icon
                 a-btn_icon__on-left">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
    Close
</button>

<button class="a-btn a-btn__secondary">
    <span class="a-btn_icon
                 a-btn_icon__on-left">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
    Close
</button>

<button class="a-btn a-btn__warning">
    <span class="a-btn_icon
                 a-btn_icon__on-left">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
    Close
</button>

<button class="a-btn a-btn__disabled">
    <span class="a-btn_icon
                 a-btn_icon__on-left">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
    Close
</button>
```

#### Button with icon on the right

<button class="a-btn">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right">{% include icons/error.svg %}</span>
</button>

<button class="a-btn a-btn__secondary">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right">{% include icons/error.svg %}</span>
</button> Secondary button

<button class="a-btn a-btn__warning">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right">{% include icons/error.svg %}</span>
</button> Warning button

<button class="a-btn a-btn__disabled">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right">{% include icons/error.svg %}</span>
</button> Disabled button

```
<button class="a-btn">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
</button>

<button class="a-btn a-btn__secondary">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
</button>

<button class="a-btn a-btn__warning">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
</button>

<button class="a-btn a-btn__disabled">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
</button>
```

#### Button with an animated icon

<button class="a-btn a-btn__disabled">
    Submit your complaint
    <span class="a-btn_icon
                 a-btn_icon__on-right">{% include icons/updating.svg %}</span>
</button>

```
<button class="a-btn">
    Submit your complaint
    <span class="a-btn_icon
                 a-btn_icon__on-right">{% raw %}{% include icons/updating.svg %}{% endraw %}</span>
</button>
```

## Molecules

### Button group

#### With default buttons

<div class="m-btn-group">
    <button class="a-btn">Yes</button>
    <button class="a-btn">No</button>
    <button class="a-btn">Maybe So</button>
</div>

```
<div class="m-btn-group">
    <button class="a-btn">Yes</button>
    <button class="a-btn">No</button>
    <button class="a-btn">Maybe So</button>
</div>
```

#### With super buttons

<div class="m-btn-group">
    <button class="a-btn a-btn__super">Yes</button>
    <button class="a-btn a-btn__super">No</button>
    <button class="a-btn a-btn__super">Maybe So</button>
</div>

```
<div class="m-btn-group">
    <button class="a-btn a-btn__super">Yes</button>
    <button class="a-btn a-btn__super">No</button>
    <button class="a-btn a-btn__super">Maybe So</button>
</div>
```
