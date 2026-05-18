import { html, css, unsafeCSS } from 'lit';
import { CfpbIconText } from '../../cfpb-icon-text';
import styles from './styles.component.scss?inline';

export const MixinLink = (superClass) =>
  class extends superClass {
    /**
     * @property {string} linkText - The text of the slotted link.
     * @property {object} linkAttributes - The attributes on the slotted link.
     * @property {string} linkVariant - The configuration of the link.
     * @returns {object} The map of properties.
     */
    static properties = {
      linkText: { type: String, state: true },
      linkAttributes: { type: Object, state: true },
      linkVariant: { type: String, reflect: true, attribute: 'link-variant' },
      noTopBorder: {
        type: Boolean,
        attribute: 'no-top-border',
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

    static styles = css`
      ${unsafeCSS(styles)}
    `;

    constructor() {
      super();
      this.linkText = '';
      this.linkAttributes = {};
    }

    willUpdate(changed) {
      if (changed.has('linkVariant')) {
        if (!this.constructor.variants.has(this.linkVariant)) {
          console.warn(`Invalid link variant "${this.linkVariant}"`);

          this.linkVariant = undefined;
        }
      }
    }

    firstUpdated(...args) {
      if (super.firstUpdated) {
        super.firstUpdated(args);
      }

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
    }

    renderLink() {
      // Empty slot is fallback content.
      return html`
        <slot></slot>

        <a
          ${Object.entries(this.linkAttributes).map(
            ([name, value]) => html`${name}="${value}"`,
          )}
          @click=${this.#handleClick}
        >
          <cfpb-icon-text
            iconLeft=${this.#iconLeft}
            iconRight=${this.#iconRight}
            ?has-underline-desktop=${this.linkAttributes.href}
            ?mobile-icon-align-end=${this.linkVariant === 'nav-right'}
            >${this.linkText}</cfpb-icon-text
          >
        </a>
      `;
    }

    updated() {
      const anchor = this.renderRoot.querySelector('a');

      if (!anchor) return;

      Object.entries(this.linkAttributes).forEach(([name, value]) => {
        anchor.setAttribute(name, value);
      });
    }

    #handleClick(evt) {
      if (this.disabled) {
        evt.preventDefault();
        evt.stopPropagation();
      }
    }
  };
