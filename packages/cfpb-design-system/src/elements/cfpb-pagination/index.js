import { html, LitElement, css, unsafeCSS } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import styles from './cfpb-pagination.component.scss';
import leftIcon from '../../components/cfpb-icons/icons/left.svg';
import rightIcon from '../../components/cfpb-icons/icons/right.svg';
import { MediaQueryService } from '../cfpb-utilities/media-query-service';

/**
 *
 * @element cfpb-button
 * @slot - The main content for the button.
 */
export class CfpbPagination extends LitElement {
  #mediaService;
  #isMobile;

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {number} currentPage - The currently selected page.
   * @property {number} maxPage - The maximum page count.
   */
  static get properties() {
    return {
      currentPage: { type: Number, attribute: 'value', reflect: true },
      maxPage: { type: Number, attribute: 'max', reflect: true },
    };
  }

  constructor() {
    super();
    this.currentPage = 1;
    this.maxPage = 1;
    this.#mediaService = new MediaQueryService();
    this.#isMobile = false;
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
    return html`
      <nav
        class="m-pagination"
        role="navigation"
        aria-label="${this.label || 'Pagination'}"
      >
        <cfpb-button
          href="#"
          ?flush-right=${!this.#isMobile}
          ?disabled=${this.isAtMin}
          @click=${() => this.#goto(this.currentPage - 1)}
        >
          ${unsafeSVG(leftIcon)} Newer
        </cfpb-button>

        <form
          class="m-pagination__form"
          action="#pagination_content"
          @submit=${this.#handleSubmit}
        >
          <label class="m-pagination__label">
            Page
            <span class="u-visually-hidden">
              number ${this.currentPage} out
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
            of ${this.maxPage}
          </label>
          <cfpb-button type="submit" style-as-link> Go </cfpb-button>
        </form>

        <cfpb-button
          href="#"
          ?flush-left=${!this.#isMobile}
          ?disabled=${this.isAtMax}
          @click=${() => this.#goto(this.currentPage + 1)}
        >
          Older ${unsafeSVG(rightIcon)}
        </cfpb-button>
      </nav>
    `;
  }

  static init() {
    window.customElements.get('cfpb-pagination') ||
      window.customElements.define('cfpb-pagination', CfpbPagination);
  }
}
