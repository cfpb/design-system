import { html, css, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { CfpbIconText } from '../../cfpb-icon-text';
import styles from './styles.component.scss?inline';

export const MixinLink = (superClass) =>
  class extends superClass {
    static styles = css`
      ${unsafeCSS(styles)}
    `;

    #anchorRef = createRef();

    /**
     * @property {string} linkText - The text of the slotted link.
     * @property {object} linkAttributes - The attributes on the slotted link.
     * @property {string} linkVariant - The configuration of the link.
     * @property {string} size - The size of link, for example, h4. When omitted it's standard link size.
     * @property {string} colorTheme - The color theme of the link. Takes 'dark'.
     * @property {boolean} borders - Takes 'none' for no top/bottom border, or 'no-top' for no top border.
     * @property {boolean} inline - Whether the link is an inline link.
     * @returns {object} The map of properties.
     */
    static properties = {
      linkText: { type: String, state: true },
      linkAttributes: { type: Object, state: true },
      linkVariant: { type: String, reflect: true, attribute: 'link-variant' },
      size: { type: String, reflect: true },
      colorTheme: { type: String, reflect: true },
      borders: {
        type: String,
        reflect: true,
      },
      inline: { type: Boolean, reflect: true },
    };

    static variants = new Set([
      'external',
      'download',
      'nav-left',
      'nav-right',
    ]);

    constructor() {
      super();
      this.linkText = '';
      this.linkAttributes = {};
    }

    willUpdate(changed) {
      if (changed.has('linkVariant')) {
        if (!this.constructor.variants.has(this.linkVariant)) {
          // eslint-disable-next-line no-console
          console.warn(`Invalid link variant "${this.linkVariant}"`);

          this.linkVariant = undefined;
        }
      }
    }

    firstUpdated(changedProperties) {
      super.firstUpdated?.(changedProperties);

      this.#extractAnchorData();

      CfpbIconText.init();
    }

    get #slottedAnchor() {
      const slot = this.renderRoot.querySelector('slot');
      const assigned = slot?.assignedElements({ flatten: true }) ?? [];

      return assigned.find((elm) => elm instanceof HTMLAnchorElement) ?? null;
    }

    #extractAnchorData() {
      const anchor = this.#slottedAnchor;

      if (!anchor) {
        // this.tagName will be retrieved from the class implementing the mixin.
        // eslint-disable-next-line no-console
        console.warn(`${this.tagName.toLowerCase()} expects a slotted <a>`);
        return;
      }

      this.linkText = anchor.textContent.trim();

      const blocked = ['class', 'style', 'id', 'slot'];

      this.linkAttributes = Object.fromEntries(
        [...anchor.attributes]
          .filter((attr) => !blocked.includes(attr.name))
          .map((attr) => [attr.name, attr.value]),
      );
    }

    get #iconLeft() {
      return this.linkVariant === 'nav-left' ? 'left' : '';
    }

    get #iconRight() {
      switch (this.linkVariant) {
        case 'nav-right':
          return 'right';
        case 'download':
          return 'download';
        case 'external':
          return 'external-link';
      }

      return '';
    }

    get #underline() {
      if (!this.linkAttributes.href) return '';
      if (this.inline) return 'all';
      if (this.borders === 'none') return 'none';
      return 'tablet-up';
    }

    renderLink() {
      // Empty slot is fallback content.
      return html`
        <slot></slot>

        <a ${ref(this.#anchorRef)}>
          <cfpb-icon-text
            iconLeft=${this.#iconLeft}
            iconRight=${this.#iconRight}
            .underline=${this.#underline}
            ?mobile-icon-align-end=${this.linkVariant === 'nav-right'}
            ?inline=${this.inline}
            >${this.linkText}</cfpb-icon-text
          >
        </a>
      `;
    }

    updated() {
      const anchor = this.#anchorRef.value;

      if (!anchor) return;

      Object.entries(this.linkAttributes).forEach(([name, value]) => {
        anchor.setAttribute(name, value);
      });
    }
  };
