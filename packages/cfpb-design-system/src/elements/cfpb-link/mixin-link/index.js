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
     * @property {boolean} noUnderline - Remove underline (other than hover).
     * @property {boolean} noTopBorder - Remove the top border on mobile.
     * @property {boolean} inline - Whether the link is an inline link.
     * @returns {object} The map of properties.
     */
    static properties = {
      linkText: { type: String, state: true },
      linkAttributes: { type: Object, state: true },
      linkVariant: { type: String, reflect: true, attribute: 'link-variant' },
      size: { type: String, reflect: true },
      colorTheme: { type: String, reflect: true, attribute: 'color-theme' },
      noUnderline: {
        type: Boolean,
        reflect: true,
        attribute: 'no-underline',
      },
      noTopBorder: {
        type: Boolean,
        reflect: true,
        attribute: 'no-top-border',
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

    connectedCallback() {
      super.connectedCallback();

      const prev = this.previousElementSibling;

      const isAdjacentLink =
        prev?.tagName === this.tagName && !this.inline && !prev.inline;

      if (isAdjacentLink) {
        this.#removeTopBorder();
      }
    }

    #removeTopBorder() {
      this.style.setProperty('--cfpb-link-border-top-width', '0');
      this.style.setProperty('--cfpb-link-border-top-hover-width', '1px');
    }

    willUpdate(changed) {
      if (changed.has('linkVariant')) {
        if (!this.constructor.variants.has(this.linkVariant)) {
          // eslint-disable-next-line no-console
          console.warn(`Invalid link variant "${this.linkVariant}"`);

          this.linkVariant = undefined;
        }
      }

      // This is currently only used when two link lists are adjacent.
      // In the future, we may want a way to pass a break-at attribute
      // to a cfpb-list and bread a single list into columns.
      // However, this needs to wait till masonry layouts are supported.
      // See https://github.com/cfpb/design-system/tree/ans_list_columns
      if (changed.has('noTopBorder')) {
        this.#removeTopBorder();
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
      if (this.noUnderline) return 'none';
      return 'tablet-up';
    }

    renderLink() {
      // Empty slot is fallback content.
      return html`
        <slot></slot>

        <a ${ref(this.#anchorRef)}>
          <cfpb-icon-text
            icon-left=${this.#iconLeft}
            icon-right=${this.#iconRight}
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
