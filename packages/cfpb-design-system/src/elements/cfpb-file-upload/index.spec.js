import { CfpbFileUpload } from './index.js';

describe('<cfpb-file-upload>', () => {
  let elm;

  beforeEach(async () => {
    CfpbFileUpload.init();
    elm = document.createElement('cfpb-file-upload');
    document.body.appendChild(elm);

    await customElements.whenDefined('cfpb-file-upload');
    await elm.updateComplete;
  });

  afterEach(() => {
    document.body.removeChild(elm);
  });

  it('renders with hidden details initially', () => {
    const details = elm.shadowRoot.querySelector('[part="upload-details"]');
    expect(details.hidden).toBe(true);
    expect(details.textContent).toContain('File added');
  });
});
