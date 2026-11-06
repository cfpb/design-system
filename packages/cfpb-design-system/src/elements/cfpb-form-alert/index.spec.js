import { mount, cleanup } from '../../../../../test/plugins/element-helpers.js';
import { CfpbFormAlert } from './index.js';

CfpbFormAlert.init();

const validationIcons = {
  error: ['error-round', 'form-alert-icon-color-error'],
  warning: ['warning-round', 'form-alert-icon-color-warning'],
  success: ['approved-round', 'form-alert-icon-color-success'],
};

/**
 * Form alert with slot text
 * @param {object} [attributes] - Attr to set
 * @returns {Promise<HTMLElement>} The mounted element
 */
const mountFormAlert = (attributes = {}) =>
  mount('cfpb-form-alert', {
    attributes,
    text: 'Enter valid email.',
  });

describe('<cfpb-form-alert>', () => {
  afterEach(cleanup);

  it('error state is default', async () => {
    const elm = await mountFormAlert();
    const container = elm.shadowRoot.querySelector('.a-form-alert');

    expect(elm.validation).toBe('error');
    expect(container.classList.contains('a-form-alert--error')).toBe(true);
  });

  it('apply alert role', async () => {
    const elm = await mountFormAlert();
    const container = elm.shadowRoot.querySelector('.a-form-alert');

    expect(container.getAttribute('role')).toBe('alert');
  });

  it('shows slot text', async () => {
    const elm = await mountFormAlert();
    const slot = elm.shadowRoot.querySelector('.a-form-alert__text slot');
    const slottext = slot
      .assignedNodes({ flatten: true })
      .map((node) => node.textContent)
      .join('')
      .trim();

    expect(slottext).toBe('Enter valid email.');
  });

  it.each(Object.entries(validationIcons))(
    'render the %s icon and color',
    async (validation, [iconName, colorVar]) => {
      const elm = await mountFormAlert({ validation });
      const icon = elm.shadowRoot.querySelector('cfpb-icon');

      expect(icon.getAttribute('name')).toBe(iconName);
      expect(icon.getAttribute('style')).toContain(`var(--${colorVar})`);
    },
  );

  it.each(Object.keys(validationIcons))(
    'add %s modifier class',
    async (validation) => {
      const elm = await mountFormAlert({ validation });
      const container = elm.shadowRoot.querySelector('.a-form-alert');

      expect(container.classList.contains(`a-form-alert--${validation}`)).toBe(
        true,
      );
    },
  );

  it('fall back to error icon in unknown validation state', async () => {
    const elm = await mountFormAlert({ validation: 'not-a-state' });
    const icon = elm.shadowRoot.querySelector('cfpb-icon');

    expect(icon.getAttribute('name')).toBe('error-round');
  });

  it('change when validation prop changes', async () => {
    const elm = await mountFormAlert();

    elm.validation = 'success';
    await elm.updateComplete;

    const icon = elm.shadowRoot.querySelector('cfpb-icon');
    const container = elm.shadowRoot.querySelector('.a-form-alert');

    expect(icon.getAttribute('name')).toBe('approved-round');
    expect(container.classList.contains('a-form-alert--success')).toBe(true);
  });

  it('register the icon', () => {
    expect(customElements.get('cfpb-icon')).toBeDefined();
  });
});
