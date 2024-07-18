The @cfpb/buttons component provides extensions to the basic button styles for
CFPB's Design System.

[`@cfpb/cfpb-core`](../@cfpb/cfpb-core) and
[`@cfpb/cfpb-icons`](../@cfpb/cfpb-icons)
components are all dependencies of this component.

> NOTE: If you use `@cfpb/cfpb-buttons.scss` directly,
> be sure to run the file through
> [Autoprefixer](https://github.com/postcss/autoprefixer),
> or your compiled CSS will
> not work perfectly in older browsers.

## Table of contents

- [Variables](#variables)
  - [Color variables](#color-variables)
  - [Sizing variables](#sizing-variables)
- [Atoms](#atoms)
  - [Default button](#default-button)
  - [Secondary button](#secondary-button)
  - [Destructive action button](#destructive-action-button)
  - [Disabled button](#disabled-button)
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

Color variables referenced in comments are from [@cfpb/cfpb-core's brand-colors.scss](https://github.com/cfpb/design-system/blob/main/packages/cfpb-core/src/brand-colors.scss).

```
// .btn
@btn-text:                  var(--white);
@btn-bg:                    var(--pacific);
@btn-bg-hover:              var(--pacific-dark);
@btn-bg-active:             var(--navy);
@btn-divider:               var(--pacific-60);

// .btn__secondary
@btn__secondary-text:       var(--white);
@btn__secondary-bg:         var(--gray);
@btn__secondary-bg-hover:   var(--gray-dark);
@btn__secondary-bg-active:  var(--black);
@btn__secondary-divider:    var(--gray-40);

// .btn__warning
@btn__warning-text:         var(--white);
@btn__warning-bg:           var(--red-mid-dark);
@btn__warning-bg-hover:     var(--red-dark);
@btn__warning-bg-active:    var(--gray-dark);
@btn__warning-divider:      var(--red-60);

// .btn__disabled
@btn__disabled-text:        var(--gray);
@btn__disabled-bg:          var(--gray-20);
@btn__disabled-outline:     var(--gray-20);
@btn__disabled-divider:     var(--gray-60);
```

### Sizing variables

```
// .btn
@btn-font-size:             @base-font-size-px;
@btn-border-radius-size:    4px;
@btn-v-padding:             8px;
@btn-h-padding:             14px;
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

<a href="#" class="a-btn a-btn--secondary">Anchor Tag</a>
<button class="a-btn a-btn--secondary" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--secondary">

```
<a href="#" class="a-btn a-btn--secondary">Anchor Tag</a>
<button class="a-btn a-btn--secondary" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--secondary">
```

#### Hovered state

<a href="#" class="a-btn a-btn--secondary hover">Anchor Tag</a>
<button class="a-btn a-btn--secondary hover" title="Test button">
Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--secondary hover">

```
<a href="#" class="a-btn a-btn--secondary hover">Anchor Tag</a>
<button class="a-btn a-btn--secondary hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--secondary hover">
```

#### Focused state

<a href="#" class="a-btn a-btn--secondary focus">Anchor Tag</a>
<button class="a-btn a-btn--secondary focus" title="Test button">
Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--secondary focus">

```
<a href="#" class="a-btn a-btn--secondary focus">Anchor Tag</a>
<button class="a-btn a-btn--secondary focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--secondary focus">
```

#### Active state

<a href="#" class="a-btn a-btn--secondary active">Anchor Tag</a>
<button class="a-btn a-btn--secondary active" title="Test button">
Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--secondary active">

```
<a href="#" class="a-btn a-btn--secondary active">Anchor Tag</a>
<button class="a-btn a-btn--secondary active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--secondary active">
```

### Destructive action button

#### Default state

<a href="#" class="a-btn a-btn--warning">Anchor Tag</a>
<button class="a-btn a-btn--warning" title="Test button">
Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--warning">

```
<a href="#" class="a-btn a-btn--warning">Anchor Tag</a>
<button class="a-btn a-btn--warning" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--warning">
```

#### Hovered state

<a href="#" class="a-btn a-btn--warning hover">Anchor Tag</a>
<button class="a-btn a-btn--warning hover" title="Test button">
Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--warning hover">

```
<a href="#" class="a-btn a-btn--warning hover">Anchor Tag</a>
<button class="a-btn a-btn--warning hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--warning hover">
```

#### Focused state

<a href="#" class="a-btn a-btn--warning focus">Anchor Tag</a>
<button class="a-btn a-btn--warning focus" title="Test button">
Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--warning focus">

```
<a href="#" class="a-btn a-btn--warning focus">Anchor Tag</a>
<button class="a-btn a-btn--warning focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--warning focus">
```

#### Active state

<a href="#" class="a-btn a-btn--warning active">Anchor Tag</a>
<button class="a-btn a-btn--warning active" title="Test button">
Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--warning active">

```
<a href="#" class="a-btn a-btn--warning active">Anchor Tag</a>
<button class="a-btn a-btn--warning active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--warning active">
```

### Disabled button

#### Default/hovered/active state

<a href="#" class="a-btn a-btn--disabled">Anchor Tag</a>
<button class="a-btn a-btn--disabled" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--disabled">
<button class="a-btn" disabled title="Test button">
Button Tag w/ disabled attr
</button>

```
<a href="#" class="a-btn a-btn--disabled">Anchor Tag</a>
<button class="a-btn a-btn--disabled" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--disabled">
<button class="a-btn" disabled title="Test button">
    Button Tag w/ disabled attr
</button>
```

#### Focused state

<a href="#" class="a-btn a-btn--disabled focus">Anchor Tag</a>
<button class="a-btn a-btn--disabled focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--disabled focus">
<button class="a-btn focus" disabled title="Test button">
Button Tag w/ disabled attr
</button>

```
<a href="#" class="a-btn a-btn--disabled focus">Anchor Tag</a>
<button class="a-btn a-btn--disabled focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--disabled focus">
<button class="a-btn focus" disabled title="Test button">
    Button Tag w/ disabled attr
</button>
```

### Super button

#### Default state

<a href="#" class="a-btn">Anchor Tag</a>
<button class="a-btn" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn">

```
<a href="#" class="a-btn">Anchor Tag</a>
<button class="a-btn" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn">
```

#### Hovered state

<a href="#" class="a-btn hover">Anchor Tag</a>
<button class="a-btn hover" title="Test button">
Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn hover">

```
<a href="#" class="a-btn hover">Anchor Tag</a>
<button class="a-btn hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn hover">
```

#### Focused state

<a href="#" class="a-btn focus">Anchor Tag</a>
<button class="a-btn focus" title="Test button">
Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn focus">

```
<a href="#" class="a-btn focus">Anchor Tag</a>
<button class="a-btn focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn focus">
```

#### Active state

<a href="#" class="a-btn active">Anchor Tag</a>
<button class="a-btn active" title="Test button">
Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn active">

```
<a href="#" class="a-btn active">Anchor Tag</a>
<button class="a-btn active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn active">
```

### Full-width buttons on x-small screens

_Reduce screen size to see these in action_

<a href="#" class="a-btn a-btn--full-on-xs">Anchor Tag</a>

<button class="a-btn a-btn--full-on-xs" title="Test button">
    Button Tag
</button>

<input type="submit" value="Input Tag" class="a-btn a-btn--full-on-xs">

```
<a href="#" class="a-btn a-btn--full-on-xs">Anchor Tag</a>
<button class="a-btn a-btn--full-on-xs" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn--full-on-xs">
```

### Button links

#### Default state

<button href="#" class="a-btn a-btn--link">Button Link</button>
<button href="#" class="a-btn a-btn--link a-btn--secondary">
Secondary Button Link
</button>
<button href="#" class="a-btn a-btn--link a-btn--warning">
Warning Button Link
</button>

```
<button href="#" class="a-btn a-btn--link">Button Link</button>
<button href="#" class="a-btn a-btn--link a-btn--secondary">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn--link a-btn--warning">
    Warning Button Link
</button>
```

#### Hovered state

<button href="#" class="a-btn a-btn--link hover">Button Link</button>
<button href="#" class="a-btn a-btn--link a-btn--secondary hover">
Secondary Button Link
</button>
<button href="#" class="a-btn a-btn--link a-btn--warning hover">
Warning Button Link
</button>

```
<button href="#" class="a-btn a-btn--link hover">Button Link</button>
<button href="#" class="a-btn a-btn--link a-btn--secondary hover">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn--link a-btn--warning hover">
    Warning Button Link
</button>
```

#### Focus state

<button href="#" class="a-btn a-btn--link focus">Button Link</button>
<button href="#" class="a-btn a-btn--link a-btn--secondary focus">
Secondary Button Link
</button>
<button href="#" class="a-btn a-btn--link a-btn--warning focus">
Warning Button Link
</button>

```
<button href="#" class="a-btn a-btn--link focus">Button Link</button>
<button href="#" class="a-btn a-btn--link a-btn--secondary focus">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn--link a-btn--warning focus">
    Warning Button Link
</button>
```

#### Active state

<button href="#" class="a-btn a-btn--link active">Button Link</button>
<button href="#" class="a-btn a-btn--link a-btn--secondary active">
Secondary Button Link
</button>
<button href="#" class="a-btn a-btn--link a-btn--warning active">
Warning Button Link
</button>

```
<button href="#" class="a-btn a-btn--link active">Button Link</button>
<button href="#" class="a-btn a-btn--link a-btn--secondary active">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn--link a-btn--warning active">
    Warning Button Link
</button>
```

### Icon buttons

> **Note:** Due to inherent whitespace created between inline elements,
> whitespace must be removed between the icon and its wrapping span element.

#### Button with icon on the left

<button class="a-btn">
    <span class="a-btn__icon
                 a-btn__icon--on-left">{% include icons/error.svg %}</span>
    Close
</button>

<button class="a-btn a-btn--secondary">
    <span class="a-btn__icon
                 a-btn__icon--on-left">{% include icons/error.svg %}</span>
    Close
</button> Secondary button

<button class="a-btn a-btn--warning">
    <span class="a-btn__icon
                 a-btn__icon--on-left">{% include icons/error.svg %}</span>
    Close
</button> Warning button

<button class="a-btn a-btn--disabled">
    <span class="a-btn__icon
                 a-btn__icon--on-left">{% include icons/error.svg %}</span>
    Close
</button> Disabled button

```
<button class="a-btn">
    <span class="a-btn__icon
                 a-btn__icon--on-left">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
    Close
</button>

<button class="a-btn a-btn--secondary">
    <span class="a-btn__icon
                 a-btn__icon--on-left">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
    Close
</button>

<button class="a-btn a-btn--warning">
    <span class="a-btn__icon
                 a-btn__icon--on-left">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
    Close
</button>

<button class="a-btn a-btn--disabled">
    <span class="a-btn__icon
                 a-btn__icon--on-left">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
    Close
</button>
```

#### Button with icon on the right

<button class="a-btn">
    Close
    <span class="a-btn__icon
                 a-btn__icon--on-right">{% include icons/error.svg %}</span>
</button>

<button class="a-btn a-btn--secondary">
    Close
    <span class="a-btn__icon
                 a-btn__icon--on-right">{% include icons/error.svg %}</span>
</button> Secondary button

<button class="a-btn a-btn--warning">
    Close
    <span class="a-btn__icon
                 a-btn__icon--on-right">{% include icons/error.svg %}</span>
</button> Warning button

<button class="a-btn a-btn--disabled">
    Close
    <span class="a-btn__icon
                 a-btn__icon--on-right">{% include icons/error.svg %}</span>
</button> Disabled button

```
<button class="a-btn">
    Close
    <span class="a-btn__icon
                 a-btn__icon--on-right">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
</button>

<button class="a-btn a-btn--secondary">
    Close
    <span class="a-btn__icon
                 a-btn__icon--on-right">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
</button>

<button class="a-btn a-btn--warning">
    Close
    <span class="a-btn__icon
                 a-btn__icon--on-right">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
</button>

<button class="a-btn a-btn--disabled">
    Close
    <span class="a-btn__icon
                 a-btn__icon--on-right">{% raw %}{% include icons/error.svg %}{% endraw %}</span>
</button>
```

#### Button with an animated icon

<button class="a-btn a-btn--disabled">
    Submit your complaint
    <span class="a-btn__icon
                 a-btn__icon--on-right">{% include icons/updating.svg %}</span>
</button>

```
<button class="a-btn">
    Submit your complaint
    <span class="a-btn__icon
                 a-btn__icon--on-right">{% raw %}{% include icons/updating.svg %}{% endraw %}</span>
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
