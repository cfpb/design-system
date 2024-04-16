The @cfpb/notifications component provides notification boxes
for Design System.

[`@cfpb/cfpb-core`](../core) and
[`@cfpb/cfpb-icons`](../icons)
components are dependencies of this component.

## Table of contents

- [Variables](#variables)
  - [Color variables](#color-variables)
  - [Sizing variables](#sizing-variables)
- [Recommended notification patterns](#recommended-notification-patterns)
  - [Action notification](#action-notification)
  - [Success notification](#success-notification)
  - [Warning notification](#warning-notification)
  - [Error notification](#error-notification)
- [Optional elements](#optional-elements)
  - [Explanation](#explanation)
  - [Links](#links)
- [Modifiers](#modifiers)
  - [Visibility](#visibility)

## Variables

Component variables are used to theme a component.
They likely will be left as is, but if needed can be overwritten by duplicating
the variable in a `@key: value` format with a different value.
This customized variable would be placed in the same file
where this component's less file is imported.

### Color variables

```
@notification-bg:             var(--gray-5);
@notification-bg-success:     var(--green-10);
@notification-bg-warning:     var(--gold-10);
@notification-bg-error:       var(--red-10);

@notification-border:         var(--gray-40);
@notification-border-success: var(--green);
@notification-border-warning: var(--gold);
@notification-border-error:   var(--red);

@notification-icon:           var(--gray);
@notification-icon-success:   var(--green);
@notification-icon-warning:   var(--gold);
@notification-icon-error:     var(--red);
```

### Sizing variables

```
@notification-padding__px: 15px;
```

## Recommended notification patterns

### Default notification

The default notification creates the base for the message that is often hidden
and empty, but is modified by scripting in production to update the state and
message based on user input.

<div class="m-notification
            m-notification--visible">
    {% include icons/information-round.svg %}
    <div class="m-notification__content">
        <div class="m-notification__message">A default notification</div>
    </div>
</div>

```
<div class="m-notification
            m-notification--visible">
    {% raw %}{% include icons/information-round.svg %}{% endraw %}
    <div class="m-notification__content">
        <div class="m-notification__message">A default notification</div>
    </div>
</div>
```

### Optional elements

#### Explanation

If your notification requires further explanation, include it in a paragraph
following the main message.

<div class="m-notification
            m-notification--visible">
    {% include icons/information-round.svg %}
    <div class="m-notification__content">
        <div class="m-notification__message">A default notification</div>
        <p class="m-notification__explanation">
            This is the explanation of the notification.
        </p>
    </div>
</div>

```
<div class="m-notification
            m-notification--visible">
    {% raw %}{% include icons/information-round.svg %}{% endraw %}
    <div class="m-notification__content">
        <div class="m-notification__message">A default notification</div>
        <p class="m-notification__explanation">
            This is the explanation of the notification.
        </p>
    </div>
</div>
```

#### Links

If your notification requires links,
include them below the message or explanation as a `m-list` unordered list.

<div class="m-notification
            m-notification--visible">
    {% include icons/information-round.svg %}
    <div class="m-notification__content">
        <div class="m-notification__message">A default notification</div>
        <ul class="m-list m-list--links">
            <li class="m-list__item">
                <a class="m-list__link" href="/">
                    This is a link below the message
                </a>
            </li>
            <li class="m-list__item">
                <a class="m-list__link" href="/">
                    This is another link
                </a>
            </li>
         </ul>
    </div>
</div>

```
<div class="m-notification
            m-notification--visible">
    {% raw %}{% include icons/information-round.svg %}{% endraw %}
    <div class="m-notification__content">
        <div class="m-notification__message">A default notification</div>
        <ul class="m-list m-list--links">
            <li class="m-list__item">
                <a class="m-list__link" href="/">
                    This is a link below the message
                </a>
            </li>
            <li class="m-list__item">
                <a class="m-list__link" href="/">
                    This is another link
                </a>
            </li>
        </ul>
    </div>
</div>
```

<div class="m-notification
            m-notification--visible">
    {% include icons/information-round.svg %}
    <div class="m-notification__content">
        <div class="m-notification__message">A default notification</div>
        <p class="m-notification__explanation">
            This is the explanation of the notification.
        </p>
        <ul class="m-list m-list--links">
            <li class="m-list__item">
                <a class="m-list__link" href="/">
                    This is a link below the explanation
                </a>
            </li>
            <li class="m-list__item">
                <a class="m-list__link" href="/">
                    This is an external link {% include icons/external-link.svg %}
                </a>
            </li>
         </ul>
    </div>
</div>

```
<div class="m-notification
            m-notification--visible">
    {% raw %}{% include icons/information-round.svg %}{% endraw %}
    <div class="m-notification__content">
        <div class="m-notification__message">A default notification</div>
        <p class="m-notification__explanation">
            This is the explanation of the notification.
        </p>
        <ul class="m-list m-list--links">
            <li class="m-list__item">
                <a class="m-list__link" href="/">
                    This is a link below the explanation
                </a>
            </li>
            <li class="m-list__item">
                <a class="m-list__link" href="/">
                    This is an external link {% raw %}{% include icons/external-link.svg %}{% endraw %}
                </a>
            </li>
        </ul>
    </div>
</div>
```

### Action notification

The action notification is for displaying when something
is happening on the page,
such as a page loading notification.
This is the default notification appearance without additional CSS modifiers.

<div class="m-notification
            m-notification--visible">
    {% include icons/update.svg %}
    <div class="m-notification__content">
        <div class="m-notification__message">The page is loading…</div>
    </div>
</div>

```
<div class="m-notification
            m-notification--visible">
    {% raw %}{% include icons/update.svg %}{% endraw %}
    <div class="m-notification__content">
        <div class="m-notification__message">The page is loading…</div>
    </div>
</div>
```

### Success notification

The success notification is for displaying when an operation has run as
expected, such as returning the number of results in a search.

<div class="m-notification
            m-notification--visible
            m-notification--success">
    {% include icons/approved-round.svg %}
    <div class="m-notification__content">
        <div class="m-notification__message">11 results</div>
    </div>
</div>

```
<div class="m-notification
            m-notification--visible
            m-notification--success">
    {% raw %}{% include icons/approved-round.svg %}{% endraw %}
    <div class="m-notification__content">
        <div class="m-notification__message">11 results</div>
    </div>
</div>
```

### Warning notification

The warning notification is for displaying when an operation has run as
expected, but doesn't have the expected results,
such as a search that returned no results.

<div class="m-notification
            m-notification--visible
            m-notification--warning">
    {% include icons/warning-round.svg %}
    <div class="m-notification__content">
        <div class="m-notification__message">No results found.</div>
    </div>
</div>

```
<div class="m-notification
            m-notification--visible
            m-notification--warning">
    {% raw %}{% include icons/warning-round.svg %}{% endraw %}
    <div class="m-notification__content">
        <div class="m-notification__message">No results found.</div>
    </div>
</div>
```

### Error notification

The error notification is for displaying when an operation has not run as
expected and encountered an error.

<div class="m-notification
            m-notification--visible
            m-notification--error">
    {% include icons/error-round.svg %}
    <div class="m-notification__content">
        <div class="m-notification__message">Page not found.</div>
    </div>
</div>

```
<div class="m-notification
            m-notification--visible
            m-notification--error">
    {% raw %}{% include icons/error-round.svg %}{% endraw %}
    <div class="m-notification__content">
        <div class="m-notification__message">Page not found.</div>
    </div>
</div>
```

## Modifiers

### Visibility

Notifications are hidden by default; you can toggle their visibility by adding
or removing the `m-notification--visible` class to the base element.
