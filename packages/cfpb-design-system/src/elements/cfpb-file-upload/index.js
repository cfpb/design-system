import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineComponent } from '../cfpb-utilities/shared-config';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './styles.component.css?inline';
import { CfpbButton } from '../cfpb-button';

/**
 *
 * @element cfpb-file-upload.
 * @slot - The main content for the upload button.
 */
export class CfpbFileUpload extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  #fileInput = createRef();

  static properties = {
    accept: { type: String, reflect: true }, // The accepted file types.
    isDetailHidden: {
      type: Boolean,
      state: true, // Internal property.
    },
    fileName: { type: String, state: true }, // An internal file name.
    files: { type: FileList, state: true }, // An internal FileList object.
  };

  constructor() {
    super();

    // Hide the details.
    this.isDetailHidden = true;
    this.fileName = '';
    this.files = null;
  }

  #showDetails() {
    const input = this.#fileInput.value;
    const files = input.files;

    if (!files?.length) {
      this.#hideDetails();
      return;
    }

    this.fileName = files[0].name;
    this.files = files;
    this.isDetailHidden = false;

    this.dispatchEvent(
      new CustomEvent('file-change', {
        detail: { files },
        bubbles: true,
        composed: true,
      }),
    );
  }

  #hideDetails() {
    this.fileName = '';
    this.files = null;
    this.isDetailHidden = true;
  }

  #checkStatus() {
    if (this.#fileInput.value.value == '') {
      this.#hideDetails();
    } else {
      this.#showDetails();
    }
  }

  render() {
    return html`
      <cfpb-button
        variant="secondary"
        @click=${() => {
          this.#fileInput.value.click();
        }}
      >
        <slot></slot>
      </cfpb-button>
      <input
        class="a-btn a-btn--secondary"
        type="file"
        hidden
        accept=${this.accept ?? ''}
        @change=${() => this.#checkStatus()}
        ${ref(this.#fileInput)}
      />
      <div part="upload-details" ?hidden=${this.isDetailHidden}>
        <h4>File added</h4>
        <ul>
          <li>${this.fileName}</li>
        </ul>
        <p>
          To remove or replace your file, select a new file and upload again.
        </p>
      </div>
    `;
  }

  static init() {
    CfpbButton.init();
    defineComponent('cfpb-file-upload', CfpbFileUpload);
  }
}
