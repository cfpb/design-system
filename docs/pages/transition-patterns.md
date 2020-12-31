---
title: Transition patterns
layout: variation
section: patterns
status: Released
description: Transition patterns are animations that happen when a user
  interacts with an element on the page. They are CSS transition styles that are
  controlled via JavaScript.
variation_groups:
  - variations:
      - variation_name: Move transition
        variation_description: A transition that moves from one position to another.
        variation_code_snippet: >-
          <div class="u-move-transition example-box">Click me!</div>

          <script>
            const moveTransitionExample = document.querySelector( '.example-box.u-move-transition' );
            const moveTransition = new MoveTransition( moveTransitionExample ).init();
            moveTransitionExample.addEventListener( 'click', () => {
                moveTransition.moveRight();
                setTimeout( () => {
                  moveTransition.moveToOrigin();
                }, 1000 );
            } );
          </script>
        variation_code_snippet_rendered: >-
          <div class="u-move-transition example-box">Click me!</div>
          <script>
            document.addEventListener( 'DOMContentLoaded', function() {
              const moveTransitionExample = document.querySelector( '.example-box.u-move-transition' );
              const moveTransition = new MoveTransition( moveTransitionExample ).init();
              moveTransitionExample.addEventListener( 'click', function() {
                moveTransition.moveRight();
                setTimeout( function() {
                  moveTransition.moveToOrigin();
                }, 1000 );
              } );
            } );
          </script>
        variation_implementation: >-
          The move transition is added to an element by creating a new
          MoveTransition instance in JavaScript and calling its methods:


          ```

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
        variation_description: A transition that fades from one position to another.
        variation_code_snippet: >-
          <div class="u-alpha-transition example-box">Click me!</div>

          <script>
            const alphaTransitionExample = document.querySelector( '.example-box.u-alpha-transition' );
            const alphaTransition = new AlphaTransition( alphaTransitionExample ).init();
            alphaTransitionExample.addEventListener( 'click', () => {
              alphaTransition.fadeOut();
              setTimeout( () => {
                alphaTransition.fadeIn();
              }, 1000 );
            } );
          </script>
        variation_code_snippet_rendered: >-
          <div class="u-alpha-transition example-box">Click me!</div>
          <script>
            document.addEventListener( 'DOMContentLoaded', function() {
              const alphaTransitionExample = document.querySelector( '.example-box.u-alpha-transition' );
              const alphaTransition = new AlphaTransition( alphaTransitionExample ).init();
              alphaTransitionExample.addEventListener( 'click', function() {
                alphaTransition.fadeOut();
                setTimeout( function() {
                  alphaTransition.fadeIn();
                }, 1000 );
              } );
            } );
          </script>
        variation_implementation: >-
          The alpha (opacity) transition is added to an element by creating a
          new AlphaTransition instance in JavaScript and calling its methods:


          ```

          // Create reference to an element in the DOM.

          const element = document.querySelector( '.example-box' );


          // Create a new transition instance and pass in the element reference.

          const transition = new AlphaTransition( element );


          // Initialize the transition.

          transition.init();


          // Call methods on the transition.

          transition.fadeOut();

          ```
    variation_group_name: Types
    variation_group_description: ""
use_cases: ""
guidelines: ""
behavior: ""
accessibility: ""
last_updated: 2020-01-28T15:55:47.394Z
research: ""
---
