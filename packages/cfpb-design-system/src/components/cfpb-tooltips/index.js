/* ==========================================================================
   Tooltip Organism
   ========================================================================== */

import tippy from 'tippy.js';
import { instantiateAll } from '@cfpb/cfpb-design-system';

import * as TooltipStyles from './tooltip.scss';

const BASE_ATTRIBUTE = 'data-tooltip';

/**
 * Tooltip
 * @class
 * @classdesc Initializes a new Tooltip.
 * @param {HTMLElement} element - The DOM element that should
 *  activate the tooltip.
 * @returns {Tooltip} An instance.
 */
function Tooltip(element) {
  const tooltipContent = element.getAttribute(BASE_ATTRIBUTE);

  /**
   * Set up and create the tooltip.
   * @returns {object} An initialized tippy tooltip instance.
   */
  function init() {
    return (this.tooltip = tippy(element, {
      theme: 'cfpb',
      maxWidth: 450,
      content: function (reference) {
        const template = reference.parentElement.querySelector(
          `#${tooltipContent}`,
        );
        const container = document.createElement('div');
        const node = document.importNode(template.content, true);
        container.appendChild(node);
        return container;
      },
      // See https://atomiks.github.io/tippyjs/v6/plugins/
      plugins: [
        {
          name: 'hideOnEsc',
          defaultValue: true,
          fn({ hide }) {
            /**
             * Hide when the escape key is pressed.
             * @param {KeyboardEvent} event - Key down event.
             */
            function onKeyDown(event) {
              if (event.key === 'Escape') {
                hide();
              }
            }
            return {
              onShow() {
                document.body.addEventListener('keydown', onKeyDown);
              },
              onHide() {
                document.body.removeEventListener('keydown', onKeyDown);
              },
            };
          },
        },
      ],
    }));
  }

  // Attach public events.
  this.init = init;
  this.tooltip = null;

  return this;
}

Tooltip.BASE_ATTRIBUTE = BASE_ATTRIBUTE;
Tooltip.init = (scope) =>
  instantiateAll(`[${Tooltip.BASE_ATTRIBUTE}]`, Tooltip, scope);

export { Tooltip, TooltipStyles };
