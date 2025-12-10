import { html, LitElement, css, unsafeCSS } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import styles from './cfpb-expandable.component.scss';
import expandIcon from '../../components/cfpb-icons/icons/plus-round.svg';
import collapseIcon from '../../components/cfpb-icons/icons/minus-round.svg';
import { MaxHeightTransition } from '../../utilities/transition/max-height-transition';
import { FlyoutMenu } from '../../utilities/behavior/flyout-menu';

/**
 *
 * @element cfpb-button
 * @slot - The main content for the button.
 */
export class CfpbExpandable extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  #flyoutMenu;
  #transition;

  /**
   * @property {boolean} isExpanded - Whether the expandable is expanded or not.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      isExpanded: { type: Boolean, attribute: 'open', reflect: true },
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
    const root = this.shadowRoot.querySelector('div');
    const contentDom = root.querySelector('.o-expandable__content');

    // If it's expanded we don't set an initial height,
    // as it will be calculated internally.
    const initialClass = this.isExpanded
      ? MaxHeightTransition.CLASSES.MH_DEFAULT
      : MaxHeightTransition.CLASSES.MH_ZERO;
    this.#transition = new MaxHeightTransition(contentDom).init(initialClass);

    this.#flyoutMenu = new FlyoutMenu(root);

    this.#flyoutMenu.setTransition(
      this.#transition,
      this.#transition.maxHeightZero,
      this.#transition.maxHeightDefault,
    );

    this.#flyoutMenu.init(this.isExpanded);

    // Add events.
    this.#flyoutMenu.addEventListener('expandbegin', () => {
      this.isExpanded = true;
      contentDom.classList.remove('u-hidden');
      this.dispatchEvent(
        new CustomEvent('expandbegin', {
          detail: { target: this },
          bubbles: true,
          composed: true,
        }),
      );
    });
    this.#flyoutMenu.addEventListener('collapseend', () => {
      this.isExpanded = false;
      contentDom.classList.add('u-hidden');
    });
  }

  updated(changedProps) {
    if (changedProps.has('isExpanded')) {
      const oldVal = changedProps.get('isExpanded');
      const newVal = this.isExpanded;

      if (newVal !== oldVal) {
        if (newVal) {
          this.#flyoutMenu.expand();
        } else {
          this.#flyoutMenu.collapse();
        }
      }
    }
  }

  render() {
    return html`
      <div
        class="o-expandable o-expandable--background o-expandable--border"
        data-js-hook="behavior_flyout-menu"
      >
        <button
          class="o-expandable__header"
          title="Expand content"
          data-js-hook="behavior_flyout-menu_trigger"
        >
          <slot name="header" class="o-expandable__label"></slot>
          <span class="o-expandable__cues">
            <span class="o-expandable__cue-open" role="img" aria-label="Show">
              ${unsafeSVG(expandIcon)}
              <span class="u-visually-hidden">Show</span>
            </span>
            <span class="o-expandable__cue-close" role="img" aria-label="Hide">
              ${unsafeSVG(collapseIcon)}
              <span class="u-visually-hidden">Hide</span>
            </span>
          </span>
        </button>
        <div
          class="o-expandable__content"
          data-js-hook="behavior_flyout-menu_content"
        >
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }

  static init() {
    window.customElements.get('cfpb-expandable') ||
      window.customElements.define('cfpb-expandable', CfpbExpandable);
  }
}
