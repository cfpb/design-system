import { html, LitElement, css, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './cfpb-file-upload.component.scss';

/**
 *
 * @element cfpb-file-upload.
 * @slot - The main content for the upload button.
 */
export class CfpbFileUpload extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static get properties() {
    return {
      isDetailHidden: { type: Boolean },
      fileName: { type: String }, // The file name.
      value: { type: String }, // The raw file name.
      files: { type: FileList }, // A FileList object.
    };
  }

  constructor() {
    super();
    this.#hideDetails();
  }

  fileInput = createRef();
  fileDetails = createRef();

  #getUploadName(fileName) {
    let uploadName = fileName;
    if (uploadName.indexOf('\\') > -1) {
      const uploadNameParts = uploadName.split('\\');
      uploadName = uploadNameParts[uploadNameParts.length - 1];
    }

    return uploadName;
  }

  #showDetails() {
    this.fileName = this.#getUploadName(this.fileInput.value.value);
    this.value = this.fileInput.value.value;
    this.files = this.fileInput.value.files;
    this.isDetailHidden = false;
  }

  #hideDetails() {
    this.fileName = '';
    this.value = '';
    this.files = {};
    this.isDetailHidden = true;
  }

  #checkStatus() {
    if (this.fileInput.value.value == '') {
      this.#hideDetails();
    } else {
      this.#showDetails();
    }
  }

  render() {
    return html`
      <cfpb-button
        type="secondary"
        @click="${() => {
          this.fileInput.value.click();
        }}"
      >
        <slot></slot>
      </cfpb-button>
      <input
        class="a-btn a-btn--secondary"
        type="file"
        hidden
        @input="${() => this.#checkStatus()}"
        @cancel="${() => this.#checkStatus()}"
        ${ref(this.fileInput)}
      />
      <div
        part="upload-details"
        ?hidden=${this.isDetailHidden}
        ${ref(this.fileDetails)}
      >
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
}

window.customElements.get('cfpb-file-upload') ||
  window.customElements.define('cfpb-file-upload', CfpbFileUpload);
