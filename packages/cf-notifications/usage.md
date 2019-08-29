The cf-notifications component provides notification boxes
for Capital Framework.

[`cf-core`](../cf-core) and
[`cf-icons`](../cf-icons) components are dependencies of this component.

> NOTE: If you use `cf-notifications.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


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
@notification-bg:             @gray-5;
@notification-bg-success:     @green-10;
@notification-bg-warning:     @gold-10;
@notification-bg-error:       @red-10;

@notification-border:         @gray-40;
@notification-border-success: @green;
@notification-border-warning: @gold;
@notification-border-error:   @red;

@notification-icon:           @gray;
@notification-icon-success:   @green;
@notification-icon-warning:   @gold;
@notification-icon-error:     @red;
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
            m-notification__visible">
    {% include icons/information-round.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">A default notification</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible">
    {% raw %}{% include icons/information-round.svg %}{% endraw %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">A default notification</div>
    </div>
</div>
```

### Optional elements

#### Explanation

If your notification requires further explanation, include it in a paragraph
following the main message.

<div class="m-notification
            m-notification__visible">
    {% include icons/information-round.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">A default notification</div>
        <p class="m-notification_explanation">
            This is the explanation of the notification.
        </p>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible">
    {% raw %}{% include icons/information-round.svg %}{% endraw %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">A default notification</div>
        <p class="m-notification_explanation">
            This is the explanation of the notification.
        </p>
    </div>
</div>
```

#### Links

If your notification requires links,
include them below the message or explanation as a `m-list` unordered list.

<div class="m-notification
            m-notification__visible">
    {% include icons/information-round.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">A default notification</div>
        <ul class="m-list m-list__links">
            <li class="m-list_item">
                <a class="m-list_link" href="/">
                    This is a link below the message
                </a>
            </li>
            <li class="m-list_item">
                <a class="m-list_link" href="/">
                    This is another link
                </a>
            </li>
         </ul>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible">
    {% raw %}{% include icons/information-round.svg %}{% endraw %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">A default notification</div>
        <ul class="m-list m-list__links">
            <li class="m-list_item">
                <a class="m-list_link" href="/">
                    This is a link below the message
                </a>
            </li>
            <li class="m-list_item">
                <a class="m-list_link" href="/">
                    This is another link
                </a>
            </li>
        </ul>
    </div>
</div>
```

<div class="m-notification
            m-notification__visible">
    {% include icons/information-round.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">A default notification</div>
        <p class="m-notification_explanation">
            This is the explanation of the notification.
        </p>
        <ul class="m-list m-list__links">
            <li class="m-list_item">
                <a class="m-list_link" href="/">
                    This is a link below the explanation
                </a>
            </li>
            <li class="m-list_item">
                <a class="m-list_link" href="/">
                    This is an external link {% include icons/external-link.svg %}
                </a>
            </li>
         </ul>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible">
    {% raw %}{% include icons/information-round.svg %}{% endraw %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">A default notification</div>
        <p class="m-notification_explanation">
            This is the explanation of the notification.
        </p>
        <ul class="m-list m-list__links">
            <li class="m-list_item">
                <a class="m-list_link" href="/">
                    This is a link below the explanation
                </a>
            </li>
            <li class="m-list_item">
                <a class="m-list_link" href="/">
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
            m-notification__visible">
    {% include icons/update.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">The page is loading…</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible">
    {% raw %}{% include icons/update.svg %}{% endraw %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">The page is loading…</div>
    </div>
</div>
```

### Success notification

The success notification is for displaying when an operation has run as
expected, such as returning the number of results in a search.

<div class="m-notification
            m-notification__visible
            m-notification__success">
    {% include icons/approved-round.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">11 results</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible
            m-notification__success">
    {% raw %}{% include icons/approved-round.svg %}{% endraw %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">11 results</div>
    </div>
</div>
```

### Warning notification

The warning notification is for displaying when an operation has run as
expected, but doesn't have the expected results,
such as a search that returned no results.

<div class="m-notification
            m-notification__visible
            m-notification__warning">
    {% include icons/warning-round.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">No results found.</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible
            m-notification__warning">
    {% raw %}{% include icons/warning-round.svg %}{% endraw %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">No results found.</div>
    </div>
</div>
```

### Error notification

The error notification is for displaying when an operation has not run as
expected and encountered an error.

<div class="m-notification
            m-notification__visible
            m-notification__error">
    {% include icons/error-round.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">Page not found.</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible
            m-notification__error">
    {% raw %}{% include icons/error-round.svg %}{% endraw %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">Page not found.</div>
    </div>
</div>
```

## Modifiers

### Visibility

Notifications are hidden by default; you can toggle their visibility by adding
or removing the `m-notification__visible` class to the base element.
