import { html, LitElement, css, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { property } from 'lit/decorators.js';
import styles from './cfpb-file-upload.component.scss';

/**
 *
 * @tag cfpb-file-upload.
 * @slot - The main content for the upload button.
 *
 */
export class CfpbFileUpload extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  @property()
  accessor areDetailHidden = true;

  @property()
  accessor fileName = '';

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
    this.areDetailHidden = false;
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
        id="file-upload"
        class="a-btn a-btn--secondary"
        type="file"
        hidden
        @input="${() => this.#showDetails()}"
        ${ref(this.fileInput)}
      />
      <div
        part="upload-details"
        ?hidden=${this.areDetailHidden}
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

window.customElements.define('cfpb-file-upload', CfpbFileUpload);

// Create template
const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <style>
      :host {
        font-size: 24px;
        font-family: arial;
      }
      article {
          display: flex;
          align-items: center;
      }
      label {
        background-color: rgb(239, 239, 239);
        border: 1px solid rgb(118, 118, 118);
        padding: 2px 6px 2px 6px;
        border-radius: 2px;
        margin-right: 5px;
      }
      button {
          border:0;
          background: transparent;
          cursor: pointer;
      }
      button::before {
          content: '\\2716';
      }
  </style>
  <article>
    <label part="button-upload" for="fileUpload">Upload</label>
    <section hidden>
      <span></span><button></button>
    </section>
  </article>
  <input hidden id="fileUpload" type="file" />
`;
/*
export default class CfpbFileUpload extends LitElement {
  constructor() {
    // Inititialize custom component
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Add event listeners
    this.select('input').onchange = (e) => this.handleChange(e);
    this.select('button').onclick = () => this.handleRemove();
  }

  handleChange(e) {
    const file = e.target.files[0];
    this.select('section').style.display = 'block';
    this.select('span').innerText = file.name;
    this.dispatch('change', file);
  }

  handleRemove() {
    const el = this.select('input');
    const file = el.files[0];
    el.value = '';
    this.select('section').style.display = 'none';
    this.dispatch('change', file);
  }

  static get observedAttributes() {
    return ['label-upload'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'label-upload') {
      if (newValue && newValue !== '') {
        this.select('label').innerText = newValue;
      }
    }
  }

  dispatch(event, arg) {
    this.dispatchEvent(new CustomEvent(event, { detail: arg }));
  }

  get select() {
    return this.shadowRoot.querySelector.bind(this.shadowRoot);
  }
}

*/
