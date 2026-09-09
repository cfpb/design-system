import { mount, cleanup } from '../../../../../test/plugins/element-helpers.js';
import { CfpbAlert } from './index.js';

CfpbAlert.init();

// The icon each status renders, per the component's icon getter
const statusIcons = {
  info: 'warning-round',
  warning: 'warning-round',
  success: 'approved-round',
  error: 'error-round',
  loading: 'update',
};

describe('<cfpb-alert>', () => {
  let elm;

  beforeEach(async () => {
    elm = await mount('cfpb-alert', {
      attributes: { status: 'info', message: 'Information alert' },
      html: '<span>You can also add an explanation to the alert.</span>',
    });
  });

  afterEach(cleanup);

  it('renders the message', () => {
    const message = elm.shadowRoot.querySelector('.message');
    expect(message.textContent.trim()).toBe('Information alert');
  });

  it('renders slotted explanation content', () => {
    const slot = elm.shadowRoot.querySelector('.explanation slot');
    const explanation = slot
      .assignedNodes({ flatten: true })
      .map((node) => node.textContent)
      .join('')
      .trim();

    expect(explanation).toBe('You can also add an explanation to the alert.');
  });

  it('applies the alert role', () => {
    const container = elm.shadowRoot.querySelector('.container');
    expect(container.getAttribute('role')).toBe('alert');
  });

  it.each(Object.entries(statusIcons))(
    'renders the %s status icon',
    async (status, iconName) => {
      elm.status = status;
      await elm.updateComplete;

      const icon = elm.shadowRoot.querySelector('cfpb-icon');
      expect(icon.getAttribute('name')).toBe(iconName);
      expect(icon.hasAttribute('spin')).toBe(status === 'loading');
    },
  );

  it('falls back to the info icon for an invalid status property', async () => {
    elm.status = 'not-a-status';
    await elm.updateComplete;

    const icon = elm.shadowRoot.querySelector('cfpb-icon');
    expect(icon.getAttribute('name')).toBe(statusIcons.info);
    expect(icon.hasAttribute('spin')).toBe(false);
  });

  it('falls back to the info icon for an invalid status attribute', async () => {
    elm.setAttribute('status', 'not-a-status');
    await elm.updateComplete;

    const icon = elm.shadowRoot.querySelector('cfpb-icon');
    expect(icon.getAttribute('name')).toBe(statusIcons.info);
    expect(icon.hasAttribute('spin')).toBe(false);
  });

  it('updates the message when the property changes', async () => {
    elm.message = 'Updated message';
    await elm.updateComplete;

    const message = elm.shadowRoot.querySelector('.message');
    expect(message.textContent.trim()).toBe('Updated message');
  });
});
