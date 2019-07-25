---
title: How to use the design system
permalink: /getting-started/how-to-use
layout: generic-page
collection_name: pages
section: getting-started
---


## Anatomy of a component
### src/
The working folder containing component source files.

### screenshot.png
Screenshot of the component in a browser.

### usage.md
Markdown file containing code snippets of how to use the component. cf-buttons is a good example.

### package.json
Used to record the component’s dependencies, keywords and description, among other things. The less property should point to the component’s Less file, styles to the component’s compiled CSS file, and main to the component’s JavaScript file, if applicable. Whenever you update a component, increment the component’s package.json file appropriately.
