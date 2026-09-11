import { mount, cleanup } from '../../../../../test/plugins/element-helpers.js';
import { getSharedConfig } from '../utilities/shared-config.js';
import { CfpbIcon } from './index.js';

CfpbIcon.init();

describe('<cfpb-icon>', () => {
  afterEach(cleanup);

  it('renders nothing without a name', async () => {
    const elm = await mount('cfpb-icon');

    expect(elm.shadowRoot.querySelector('img')).toBeNull();
    expect(elm.shadowRoot.querySelector('span')).toBeNull();
  });

  it('renders nothing when the name is emptied again', async () => {
    const elm = await mount('cfpb-icon', { attributes: { name: 'download' } });
    expect(elm.shadowRoot.querySelector('img')).not.toBeNull();

    elm.name = '';
    await elm.updateComplete;

    expect(elm.shadowRoot.querySelector('img')).toBeNull();
  });

  it.each(['download', 'approved-round', 'error-round', 'update'])(
    'builds the %s image source from the shared iconPath',
    async (name) => {
      const elm = await mount('cfpb-icon', { attributes: { name } });
      const img = elm.shadowRoot.querySelector('img');

      expect(img.getAttribute('src')).toBe(
        `${getSharedConfig().iconPath + name}.svg`,
      );
    },
  );

  it('exposes the same path to the CSS mask', async () => {
    const elm = await mount('cfpb-icon', { attributes: { name: 'download' } });
    const span = elm.shadowRoot.querySelector('span');
    const img = elm.shadowRoot.querySelector('img');

    expect(span.getAttribute('style')).toContain(img.getAttribute('src'));
  });

  it('hides the image from assistive technology', async () => {
    const elm = await mount('cfpb-icon', { attributes: { name: 'download' } });
    const img = elm.shadowRoot.querySelector('img');

    // The icon is decorative. Meaning comes from the surrounding component.
    expect(img.getAttribute('alt')).toBe('');
    expect(img.getAttribute('aria-hidden')).toBe('true');
  });

  it('defers loading and decoding', async () => {
    const elm = await mount('cfpb-icon', { attributes: { name: 'download' } });
    const img = elm.shadowRoot.querySelector('img');

    expect(img.getAttribute('loading')).toBe('lazy');
    expect(img.getAttribute('decoding')).toBe('async');
  });

  it('updates the source when the name changes', async () => {
    const elm = await mount('cfpb-icon', { attributes: { name: 'download' } });

    elm.name = 'update';
    await elm.updateComplete;

    expect(elm.shadowRoot.querySelector('img').getAttribute('src')).toContain(
      'update.svg',
    );
  });

  describe('spin', () => {
    it('is off by default', async () => {
      const elm = await mount('cfpb-icon', { attributes: { name: 'update' } });

      expect(elm.spin).toBeFalsy();
      expect(elm.hasAttribute('spin')).toBe(false);
    });

    it('reads the spin attribute onto the property', async () => {
      const elm = await mount('cfpb-icon', {
        attributes: { name: 'update', spin: true },
      });

      expect(elm.spin).toBe(true);
    });
  });
});
