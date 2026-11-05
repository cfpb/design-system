import { expect } from 'storybook/test';
import { mount, cleanup } from '../../../../../test/plugins/element-helpers.js';
import { CfpbFlagUsa } from './index.js';

CfpbFlagUsa.init();

describe('<cfpb-flag-usa>', () => {
  afterEach(cleanup);

  it('register flag', () => {
    expect(customElements.get('cfpb-flag-usa')).toBe(CfpbFlagUsa);
  });

  it('connect shadowRoot', async () => {
    const elm = await mount('cfpb-flag-usa');

    expect(elm.shadowRoot).not.toBeNull();
  });

  it('render no markup', async () => {
    const elm = await mount('cfpb-flag-usa');

    // This is drawn with styles.components.css. That means the only thing in
    // shadowRoot is what Lit injects. If other elments wind up there that means
    // this spec needs updating/changed.
    expect(elm.shadowRoot.querySelector(':not(style)')).toBeNull();
  });

  it('no attr', () => {
    expect(Object.keys(CfpbFlagUsa.properties ?? {})).toHaveLength(0);
  });
});
