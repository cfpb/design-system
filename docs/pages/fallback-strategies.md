---
title: Fallback strategies
layout: variation
section: components
status: Released
description: >-
  In order to recognize custom HTML markup, a web browser requires JavaScript to initialize custom elements (Web Components).
  If a browser does not support modern web component APIs, or has
  JavaScript turned off, the web component markup will not render as expected. 

  This document provides an architectural framework for consistently handling fallback behavior across web components. 
  It aims to provide a fallback strategy that gives the author control over the fallback. If, for example, the
  component was run within a react environment and the author assumes JavaScript is enabled, the component will not 
  need a fallback.

  This document addresses handling the following states:

   - **JS disabled** (defacto no web component support)
   - **JS enabled + no web component support** (legacy browsers)
   - **JS enabled + web component support** (modern browsers)

  Authors should decide on a component-by-component basis which of the first two fallback states they want to support, based on things like the environment the component appears in (React already assumes JS support), and the expected browser metrics of the visitors that the application is aiming to support.

  ## The basic web component - no fallback

  At its most basic, a web component is a custom HTML opening and closing tag, like:

  `<my-custom-btn></my-custom-btn>`

  All the rendered content of this component is present in the component's shadow DOM, and the structure is defined 
  in the component's `.js` definition file.

  In modern browsers with web component support, this component will render whatever appears in the shadow DOM.
  In legacy browsers or with JavaScript disabled, this will be completely blank on the page.

  ## Slotted content

  A web component can wrap author-supplied content, which is exposed through a `<slot>` element in the component's definition file.

  `<my-custom-btn>Click this fancy button!</my-custom-btn>`

  In modern browsers with web component support, this component will incorporate the slotted content within the shadow DOM content.
  In legacy browsers or with JavaScript disabled, the slotted content will appear on the page.


  ## Fallback content

  While slotted content may often suffice as a fallback, for more complex components, slotted content may be too simple as an adequate replacement. We could add more markup and structure to the slotted content, but that creates clutter that needs to be handled within the shadow DOM. Because of this, slotted content is likely best for simple text strings only.

  A better approach for complex fallback content may be to provide content in a `<noscript>` element within the slotted content, and then enable or disable the slotted content based on the state of web component and JavaScript support. 

  For example, the following structure include a fallback written in a `<noscript>` (note the additional `<button>` markup for the fallback), and slotted content:

  ```html
  <my-custom-btn>
    <!-- author-supplied no-js fallback -->
    <noscript>
      <button>Click this basic button!</button>
    </noscript>

    <!-- author supplied slotted content -->
    Click this fancy button!
  </my-custom-btn>
  ```

  The following sections describe how this functions in the different fallback states.

  ### JS disabled
  When JS is disabled, the `<noscript>` content is rendered AND the author supplied slotted content is rendered. So it looks like this:

  ```html
  <button>Click this basic button!</button>
  Click this fancy button!
  ```

  To fix this, we can provide CSS that hides everything except the `<noscript>` tag. However, we can't generically target all web components in CSS:

  ```css
  /* This won't work for all web components! */
  my-custom-btn > :not(noscript) { display: none; }
  ```

  To make this more generic, we could have the author add a `<noscript>` tag to the component's slotted content, and, if they want to hide other content in the component, add a boolean attribute `hasfallback` or similar. Then we can make the selector more generic:

  ```css
  [hasfallback] > :not(noscript) { display: none; }
  ```

  > CSS for this use-case can be found in [`cfpb-utilities/fallback/wc-fallback.css`](https://github.com/cfpb/design-system/blob/main/packages/cfpb-design-system/src/elements/cfpb-utilities/fallback/wc-fallback.css), and can be included in a project's CSS bundle so that it is available for use.

  ### JS enabled, web components not supported

  In the case where JavaScript is available—but web component APIs are not (as is the case in legacy browsers)—we can globally check if web components are supported, and if not, we can load a polyfill, or we could just let it fall back to the `<noscript>` content. *However*, the problem here is that if JS is enabled, but web components are not supported, then the `<noscript>` content will not show! Therefore, we need to use JavaScript to turn the `<noscript>` tag inside the web component into `<div class="fallback">` or similar.
    
  > A JS utility for this use-case can be found in [`cfpb-utilities/fallback/wc-fallback.css`](https://github.com/cfpb/design-system/blob/main/packages/cfpb-design-system/src/elements/cfpb-utilities/fallback/wc-fallback.js). It can be included in a project's JS bundle so that it is available for use.

  This would now show the content inside the former `<noscript>`, *except* non-noscript tags are hidden via the CSS! So, lastly, we need to add more CSS to show the div with the `.fallback` class:

  ```css
  [hasfallback] > .fallback { display: block; }
  ```

  > CSS for this use-case can be found in [`cfpb-utilities/fallback/wc-fallback.css`](https://github.com/cfpb/design-system/blob/main/packages/cfpb-design-system/src/elements/cfpb-utilities/fallback/wc-fallback.css), and can be included in a project's CSS bundle so that it is available for use.


  ### JS enabled, web components are supported

  If JS is enabled, the `<noscript>` content is hidden and it is not swapped with `<div class="fallback">` and then the web component uses the author-supplied slotted content to render. However, because of the existing CSS that hides everything but the `noscript` content, that means everything will be hidden. So in this case, we add another CSS rule:

  ```css
  [hasfallback]:defined > :not(noscript) { display: block; }
  ```

  > CSS for this use-case can be found in [`cfpb-utilities/fallback/wc-fallback.css`](https://github.com/cfpb/design-system/blob/main/packages/cfpb-design-system/src/elements/cfpb-utilities/fallback/wc-fallback.css), and can be included in a project's CSS bundle so that it is available for use.

guidelines: ''
behavior: ''
eyebrow: Web Components
---
