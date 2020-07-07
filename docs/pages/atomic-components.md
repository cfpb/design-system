---
variations: []
title: Atomic components
layout: variation
section: development
status: Released
description: Atomic Component is a micro framework for building Atomic Design
  components that utilize JavaScript. It is a dependency of other packages and
  isn’t used on its own.
use_cases: >-
  This framework is intended to be used in conjunction with adherence to Atomic
  Design principles. It helps provide a uniform way to build Atomic components
  using HTML, CSS, and JavaScript.


  An example use case in building a Molecule is as follows:


  Molecules are prefixed with “m-” in CSS, JavaScript, and HTML files.


  #### HTML:

  ```

  <div class="m-notification">
      <span class="m-notification_icon cf-icon"></span>
      <div class="m-notification_content" role="alert">
          <div class="h4 m-notification_message">message</div>
              <p class="h4 m-notification_explanation">
                Please check the URL and try again.
              </p>
          </div>
      </div>
  </div>

  ```

  #### CSS:

  ```

  .m-notification {
      display: none;
      position: relative;
      padding: @notification-padding__px;
      …
  ```

  #### JavaScript:

  ```

  const CONSTANTS = { MESSAGE: 'message', EXPLANATION: 'explanation' };


  const NotificationMolecule = Molecule.extend( {
        classes: {
          isVisible:   'm-notification__visible'
        },

        ui: {
          base:        '.m-notification',
          explanation: '.m-notification_explanation',
          message:     '.m-notification_message'
        },

        initialize: function() {
          this.ui.message.textContent = CONSTANTS.MESSAGE;
          this.ui.explanation.textContent = CONSTANTS.EXPLANATION;
        }
  } );


  NotificationMolecule.constants = CONSTANTS;

  NotificationMolecule.init();

  ```
content_guidelines: ""
behavior: ""
accessibility: ""
last_updated: 2020-01-28T15:55:47.394Z
secondary_section: Core development
research: ""
---
