---
title: Transition patterns
layout: variation
section: patterns
variation_groups:
  - variation_group_name: Types
    variations:
      - variation_name: Move transition
        variation_description: A transition that moves from one position to another.
        variation_code_snippet: >-
          <div class="u-move-transition example-box">Click me!</div>

          <script>
            const moveTransitionExample = document.querySelector( '.example-box.u-move-transition' );
            const moveTransition = new MoveTransition( moveTransitionExample ).init(MoveTransition.CLASSES.MOVE_TO_ORIGIN);
            moveTransitionExample.addEventListener( 'click', () => {
                moveTransition.moveRight();
                setTimeout( () => {
                  moveTransition.moveToOrigin();
                }, 1000 );
            });
          </script>
        variation_code_snippet_rendered: >-
          <div class="u-move-transition example-box">Click me!</div> <br><br>
          <p> Events dispatched:<br> <textarea class="example-output-move"
          placeholder="Click square!"></textarea> </p> <script>
            document.addEventListener( 'DOMContentLoaded', function() {
              const output = document.querySelector('.example-output-move');
              const moveTransitionExample = document.querySelector( '.example-box.u-move-transition' );
              const moveTransition = new MoveTransition( moveTransitionExample ).init(MoveTransition.CLASSES.MOVE_TO_ORIGIN);
              moveTransitionExample.addEventListener( 'click', function() {
                moveTransition.moveRight();
                setTimeout( function() {
                  moveTransition.moveToOrigin();
                }, 1000 );
              });
              moveTransition.addEventListener('transitionbegin', function(evt) {
                output.value += evt.type + '\n';
              });
              moveTransition.addEventListener('transitionend', function(evt) {
                output.value += evt.type + '\n';
              });
            });
          </script>
        variation_implementation: >-
          The move transition is added to an element by creating a new
          MoveTransition instance in JavaScript and calling its methods:


          ```js

          // Create reference to an element in the DOM.

          const element = document.querySelector( '.example-box' );


          // Create a new transition instance and pass in the element reference.

          const transition = new MoveTransition( element );


          // Initialize the transition.

          transition.init();


          // Call methods on the transition.

          transition.moveRight();

          ```
      - variation_name: Alpha transition
        variation_description: A transition that fades from one opacity to another.
        variation_code_snippet: >-
          <div class="u-alpha-transition example-box">Click me!</div>

          <script>
            const alphaTransitionExample = document.querySelector( '.example-box.u-alpha-transition' );
            const alphaTransition = new AlphaTransition( alphaTransitionExample ).init(AlphaTransition.CLASSES.ALPHA_100);
            alphaTransitionExample.addEventListener( 'click', () => {
              alphaTransition.fadeOut();
              setTimeout( () => {
                alphaTransition.fadeIn();
              }, 1000 );
            });
          </script>
        variation_code_snippet_rendered: >-
          <div class="u-alpha-transition example-box">Click me!</div> <br><br>
          <p> Events dispatched:<br> <textarea class="example-output-alpha"
          placeholder="Click square!"></textarea> </p> <script>
            document.addEventListener( 'DOMContentLoaded', function() {
              const alphaTransitionExample = document.querySelector( '.example-box.u-alpha-transition' );
              const output = document.querySelector('.example-output-alpha');
              const alphaTransition = new AlphaTransition( alphaTransitionExample ).init(AlphaTransition.CLASSES.ALPHA_100);
              alphaTransitionExample.addEventListener( 'click', function() {
                alphaTransition.fadeOut();
                setTimeout( function() {
                  alphaTransition.fadeIn();
                }, 1000 );
              });
              alphaTransition.addEventListener('transitionbegin', function(evt) {
                output.value += evt.type + '\n';
              });
              alphaTransition.addEventListener('transitionend', function(evt) {
                output.value += evt.type + '\n';
              });
            });
          </script>
        variation_implementation: >-
          The alpha (opacity) transition is added to an element by creating a
          new AlphaTransition instance in JavaScript and calling its methods:


          ```js

          // Create reference to an element in the DOM.

          const element = document.querySelector( '.example-box' );


          // Create a new transition instance and pass in the element reference.

          const transition = new AlphaTransition( element );


          // Initialize the transition.

          transition.init();


          // Call methods on the transition.

          transition.fadeOut();

          ```
      - variation_name: MaxHeight transition
        variation_description: A transition that changes the height of an element.
        variation_code_snippet: >-
          <div class="u-max-height-summary example-box">
            Click me!

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>

          <script>
            const maxHeightTransitionExample = document.querySelector( '.example-box.u-max-height-summary' );
            const maxHeightTransition = new MaxHeightTransition( maxHeightTransitionExample ).init(MaxHeightTransition.CLASSES.MH_DEFAULT);
            maxHeightTransitionExample.addEventListener( 'click', () => {
              maxHeightTransition.maxHeightDefault();
              setTimeout( () => {
                maxHeightTransition.maxHeightSummary();
              }, 1000 );
            });
          </script>
        variation_code_snippet_rendered: >-
          <div class="u-max-height-summary example-box" style="height: auto;">
            Click me!

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div> <br><br> <p> Events dispatched:<br> <textarea class="example-output-maxheight" placeholder="Click square!"></textarea> </p> <script>
            document.addEventListener( 'DOMContentLoaded', function() {
              const output = document.querySelector('.example-output-maxheight');
              const maxHeightTransitionExample = document.querySelector( '.example-box.u-max-height-summary' );
              const maxHeightTransition = new MaxHeightTransition( maxHeightTransitionExample ).init(MaxHeightTransition.CLASSES.MH_SUMMARY);
              maxHeightTransitionExample.addEventListener( 'click', function() {
                maxHeightTransition.maxHeightDefault();
                setTimeout( function() {
                  maxHeightTransition.maxHeightSummary();
                }, 1000 );
              });
              maxHeightTransition.addEventListener('transitionbegin', function(evt) {
                output.value += evt.type + '\n';
              });
              maxHeightTransition.addEventListener('transitionend', function(evt) {
                output.value += evt.type + '\n';
              });
            });
          </script>
        variation_implementation: >-
          The max-height transition is added to an element by creating a new
          MaxHeightTransition instance in JavaScript and calling its methods:


          ```js

          // Create reference to an element in the DOM.

          const element = document.querySelector( '.example-box' );


          // Create a new transition instance and pass in the element reference.

          const transition = new MaxHeightTransition( element );


          // Initialize the transition.

          transition.init();


          // Call methods on the transition.

          transition.maxHeightSummary();

          ```
  - variation_group_name: Behavior
    variations:
      - variation_name: Flyout behavior
        variation_description:
          'A "flyout behavior" can be attached to a arbitrary
          container that contains one or more triggers and a content area. The
          flyout handles `aria-expanded` attribute toggling and dispatches the
          following events: `triggerover`, `triggerout`, `triggerclick`,
          `expandbegin`, `expandend`, `collapsebegin`, `collapseend`. This
          handles the markup semantics of toggling a content area, which can
          then be combined with a transition from above to create an animated
          container that shows and hides content.'
        variation_code_snippet: >-
          <div class="example-flyout" data-js-hook="behavior_flyout-menu">
            <button class="example-btn" data-js-hook="behavior_flyout-menu_trigger">
              Click me! v
            </button>
            <div class="example-flyout-content" data-js-hook="behavior_flyout-menu_content">
              Show this content
              <button class="example-btn" data-js-hook="behavior_flyout-menu_trigger">
                Click me! ^
              </button>
            </div>
          </div> <script>
            const flyoutExample = document.querySelector( '.example-flyout' );
            const flyoutExampleContent = document.querySelector(
              '.example-flyout-content'
            );
            const transition = new MaxHeightTransition(flyoutExampleContent).init(MaxHeightTransition.CLASSES.MH_ZERO);
            const flyout = new FlyoutMenu(flyoutExample);
            flyout.setTransition(transition, transition.maxHeightZero, transition.maxHeightDefault);
            flyout.init();
          </script>
        variation_code_snippet_rendered: >-
          <div class="example-flyout" data-js-hook="behavior_flyout-menu">
            <button class="example-btn" data-js-hook="behavior_flyout-menu_trigger">
              Click me! v
            </button>
            <div class="example-flyout-content" data-js-hook="behavior_flyout-menu_content">
              Show this content
              <button class="example-btn" data-js-hook="behavior_flyout-menu_trigger">
                Click me! ^
              </button>
            </div>
          </div> <br><br> <p> Events dispatched:<br> <textarea class="example-output-flyout" placeholder="Click a button!"></textarea> </p> <script>
            document.addEventListener( 'DOMContentLoaded', function() {
              const output = document.querySelector('.example-output-flyout');
              const flyoutExample = document.querySelector('.example-flyout');
              const flyoutExampleContent = document.querySelector(
                '.example-flyout-content'
              );
              const transition = new MaxHeightTransition(flyoutExampleContent).init(MaxHeightTransition.CLASSES.MH_ZERO);
              const flyout = new FlyoutMenu(flyoutExample);
              flyout.setTransition(transition, transition.maxHeightZero, transition.maxHeightDefault);
              flyout.init();
              flyout.addEventListener('triggerover', function(evt) {
                output.value += evt.type + '\n';
              });
              flyout.addEventListener('triggerout', function(evt) {
                output.value += evt.type + '\n';
              });
              flyout.addEventListener('triggerclick', function(evt) {
                output.value += evt.type + '\n';
              });
              flyout.addEventListener('expandbegin', function(evt) {
                output.value += evt.type + '\n';
              });
              flyout.addEventListener('expandend', function(evt) {
                output.value += evt.type + '\n';
              });
              flyout.addEventListener('collapsebegin', function(evt) {
                output.value += evt.type + '\n';
              });
              flyout.addEventListener('collapseend', function(evt) {
                output.value += evt.type + '\n';
              });
            });
          </script>
        variation_implementation: >-
          Behaviors are functionality that can be shared between different
          pieces of markup. They are not strictly atomic, though they likely are
          used on atomic components. As added JS behavior, this is added through
          HTML data-js-hook attributes.

          The structure is:
            behavior_flyout-menu
              behavior_flyout-menu_trigger
              behavior_flyout-menu_content
                behavior_flyout-menu_trigger (optional)

          The second trigger is optional and may be used for a button in the content area, which may obscure the first trigger. The flyout can be triggered through a click of either trigger.

          For example, at its most basic, the structure is:


          ```html

          <div data-js-hook="behavior_flyout-menu">
            <button data-js-hook="behavior_flyout-menu_trigger">
              Click me!
            </button>
            <div data-js-hook="behavior_flyout-menu_content">
              Show this content
            </div>
          </div>

          ```


          The `data-js-hook` attributes can be hardcoded in markup, or added via a JavaScript initialization script.


          The initialization would then look like:


          ```js

          // Create reference to the container and content element in the DOM.

          const elementDom = document.querySelector( [data-js-hook="behavior_flyout-menu"] ); const elementContentDom = elementDom.querySelector( [data-js-hook="behavior_flyout-menu_content"] );


          // Create a new transition instance and pass in the content area reference.

          const transition = new MaxHeightTransition(elementContentDom);


          // Initialize the transition.

          transition.init();


          // Create a new FlyoutMenu instance and pass in the container reference.

          const flyout = new FlyoutMenu(elementDom);


          // Set the expand/collapse transitions.

          flyout.setTransition(transition, transition.maxHeightZero, transition.maxHeightDefault);

          // Initialize the flyout.

          flyout.init();

          ```
guidelines: ''
eyebrow: Transitions
status: Released
description: Transition patterns are animations that happen when a user
  interacts with an element on the page. They are CSS transition styles that are
  controlled via JavaScript.
use_cases: ''
behavior: ''
accessibility: ''
last_updated: 2020-01-28T15:55:47.394Z
research: ''
---
