Atomic Component is a micro framework for building Atomic Design components
that utilize JavaScript. It is a dependency of other packages and isn't used
on its own.

## Table of contents

- [Usage](#Usage)

## Usage

This framework is intended to be used in conjunction with adherence to
Atomic Design principles.
It helps provide a uniform way to build Atomic components using
HTML, CSS, and JavaScript.

An example use case in building a Molecule is as follows:

Molecules are prefixed with “m-” in CSS, JavaScript, and HTML files.

**HTML**:

```html
<div class="m-notification">
    <span class="m-notification__icon cf-icon"></span>
    <div class="m-notification__content" role="alert">
        <div class="m-notification__message">message</div>
            <p class="m-notification__explanation">
              Please check the URL and try again.
            </p>
        </div>
    </div>
</div>
```

**CSS**:

```css
.m-notification {
    display: none;
    position: relative;
    padding: @notification-padding__px;
    …
```

**JavaScript**:

```js
const CONSTANTS = { MESSAGE: 'message', EXPLANATION: 'explanation' };

const NotificationMolecule = Molecule.extend({
  classes: {
    isVisible: 'm-notification--visible',
  },

  ui: {
    base: '.m-notification',
    explanation: '.m-notification__explanation',
    message: '.m-notification__message',
  },

  initialize: function () {
    this.ui.message.textContent = CONSTANTS.MESSAGE;
    this.ui.explanation.textContent = CONSTANTS.EXPLANATION;
  },
});

NotificationMolecule.constants = CONSTANTS;
NotificationMolecule.init();
```
