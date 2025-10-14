import { html, LitElement, css, unsafeCSS } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import styles from './cfpb-pagination.component.scss';
import leftIcon from '../../components/cfpb-icons/icons/left.svg';
import rightIcon from '../../components/cfpb-icons/icons/right.svg';
import { I18nService, MediaQueryService } from '../cfpb-utilities/';

/**
 *
 * @element cfpb-button
 * @slot - The main content for the button.
 */
export class CfpbPagination extends LitElement {
  #mediaService;
  #isMobile;
  #i18n;

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {number} currentPage - The currently selected page.
   * @property {number} maxPage - The maximum page count.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      currentPage: { type: Number, attribute: 'value', reflect: true },
      maxPage: { type: Number, attribute: 'max', reflect: true },
      lang: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.currentPage = 1;
    this.maxPage = 1;
    this.#mediaService = new MediaQueryService();
    this.#isMobile = false;
    this.lang = 'en';
  }

  connectedCallback() {
    super.connectedCallback();
    this.#i18n = this.querySelector('i18n-service');
    if (this.#i18n) {
      this.addEventListener('i18n-change', this.#onI18nChange);
      this.#i18n.language = this.lang;
    }
  }

  #onI18nChange() {
    const updateLabel = (selector, key) => {
      const btn = this.renderRoot.querySelector(selector);
      const span = btn.querySelector('span');
      if (btn) {
        const newText = this.#i18n.translate(key);
        span.innerHTML = newText;
        btn.requestUpdate();
      }
    };

    updateLabel('#previous', 'previous');
    updateLabel('#next', 'next');
    updateLabel('#go', 'go');

    this.requestUpdate();
  }

  firstUpdated() {
    this.#mediaService.addEventListener('change', this.#onMediaChange);
    this.#isMobile = this.#mediaService.matches.xs;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#mediaService.removeEventListener('change', this.#onMediaChange);
    this.#mediaService.destroy();
  }

  #onMediaChange = (event) => {
    const newIsMobile = event.detail.matches.xs;
    if (newIsMobile !== this.#isMobile) {
      this.#isMobile = newIsMobile;
      this.requestUpdate();
    }
  };

  updated(changed) {
    if (changed.has('currentPage') || changed.has('maxPage')) {
      if (this.currentPage < 1) this.currentPage = 1;
      else if (this.currentPage > this.maxPage) this.currentPage = this.maxPage;
    }

    if (changed.has('lang')) {
      this.#i18n.language = this.lang;

      this.requestUpdate();
    }
  }

  get isAtMin() {
    return this.currentPage <= 1;
  }

  get isAtMax() {
    return this.currentPage >= this.maxPage;
  }

  #onInput(event) {
    this.currentPage = event.target.value;
  }

  #handleSubmit(event) {
    event.preventDefault();
    const page = parseInt(this.currentPage, 10);
    if (!Number.isNaN(page)) {
      this.#goto(page);
    }
  }

  #goto(page) {
    const clamped = Math.max(1, Math.min(page, this.maxPage));
    if (clamped !== this.currentPage) {
      this.currentPage = clamped;
      this.dispatchEvent(
        new CustomEvent('page-change', {
          detail: { page: clamped },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  render() {
    // Get a translator function.
    const trans =
      this.#i18n && this.#i18n.translate
        ? this.#i18n.translate.bind(this.#i18n)
        : (key) => key;

    return html`
      <slot></slot>
      <nav
        class="m-pagination"
        role="navigation"
        aria-label="${trans('page number')}"
      >
        <cfpb-button
          class="m-pagination__btn-prev"
          id="next"
          href="#"
          ?flush-right=${!this.#isMobile}
          ?disabled=${this.isAtMin}
          @click=${() => this.#goto(this.currentPage - 1)}
        >
          ${unsafeSVG(leftIcon)} ${trans('next')}
        </cfpb-button>

        <form
          class="m-pagination__form"
          action="#pagination_content"
          @submit=${this.#handleSubmit}
        >
          <label class="m-pagination__label">
            ${trans('page')}
            <span class="u-visually-hidden">
              ${this.currentPage} ${trans('out of')} ${this.maxPage}
              ${trans('total pages')}
            </span>
            <input
              class="m-pagination__current-page"
              name="page"
              type="number"
              min="1"
              max=${this.maxPage}
              pattern="[0-9]*"
              inputmode="numeric"
              .value=${this.currentPage}
              @input=${this.#onInput}
            />
            ${trans('of')} ${this.maxPage}
          </label>
          <cfpb-button id="go" type="submit" style-as-link>
            ${trans('go')}
          </cfpb-button>
        </form>

        <cfpb-button
          class="m-pagination__btn-next"
          id="previous"
          href="#"
          ?flush-left=${!this.#isMobile}
          ?disabled=${this.isAtMax}
          @click=${() => this.#goto(this.currentPage + 1)}
        >
          ${trans('previous')} ${unsafeSVG(rightIcon)}
        </cfpb-button>
      </nav>
    `;
  }

  static init() {
    I18nService.init();

    window.customElements.get('cfpb-pagination') ||
      window.customElements.define('cfpb-pagination', CfpbPagination);
  }
}
