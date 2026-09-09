import { mount, cleanup } from '../../../../../test/plugins/element-helpers.js';
import { CfpbFileUpload } from './index.js';

CfpbFileUpload.init();

describe('<cfpb-file-upload>', () => {
  let elm;

  beforeEach(async () => {
    elm = await mount('cfpb-file-upload');
  });

  afterEach(cleanup);

  it('renders with hidden details initially', () => {
    const details = elm.shadowRoot.querySelector('[part="upload-details"]');
    expect(details.hidden).toBe(true);
    expect(details.textContent).toContain('File added');
  });
});
