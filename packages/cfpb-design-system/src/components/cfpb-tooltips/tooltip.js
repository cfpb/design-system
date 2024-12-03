/* ==========================================================================
   Tooltip Organism
   ========================================================================== */

import tippy from 'tippy.js';

import { instantiateAll } from '../../utilities';

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
  // Internal vars.
  const tooltipContent = element.getAttribute('data-tooltip');

  /**
   * Set up and create the multiselect.
   * @returns {Tooltip} An instance.
   */
  function init() {
    tippy(element, {
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
                document.addEventListener('keydown', onKeyDown);
              },
              onHide() {
                document.removeEventListener('keydown', onKeyDown);
              },
            };
          },
        },
      ],
    });
  }

  // Attach public events.
  this.init = init;

  return this;
}

Tooltip.BASE_ATTRIBUTE = BASE_ATTRIBUTE;
Tooltip.init = (scope) =>
  instantiateAll(`[${Tooltip.BASE_ATTRIBUTE}]`, Tooltip, scope);

export { Tooltip, TooltipStyles };
