import { mount, cleanup } from '../../../../../test/plugins/element-helpers.js';
import { CfpbLabel } from './index.js';

CfpbLabel.init();
/**
 * Mount a label with both slots filled
 * @param {object} [attributes] - Attributes to set on the element.
 * @returns {Promise<HTMLElement>} The mounted element.
 */
const mountLabel = (attributes = {}) =>
  mount('cfpb-label', {
    attributes,
    html:
      '<span slot="label">Email address</span>' +
      '<span slot="helper">We will only use this to reply to you.</span>',
  });

/**
 * Read the text a named slot is actually rendering.
 * @param {HTMLElement} elm - The mounted label.
 * @param {string} name - The slot name.
 * @returns {string} The assigned text, trimmed.
 */
const slotText = (elm, name) =>
  elm.shadowRoot
    .querySelector(`slot[name="${name}"]`)
    .assignedNodes({ flatten: true })
    .map((node) => node.textContent)
    .join('')
    .trim();

describe('<cfpb-label>', () => {
  afterEach(cleanup);

  it('renders a label element with the heading classes', async () => {
    const elm = await mountLabel();
    const label = elm.shadowRoot.querySelector('label');

    expect(label).not.toBeNull();
    expect([...label.classList]).toEqual(['a-label', 'a-label--heading']);
  });

  it('renders both named slots', async () => {
    const elm = await mountLabel();

    expect(slotText(elm, 'label')).toBe('Email address');
    expect(slotText(elm, 'helper')).toBe(
      'We will only use this to reply to you.',
    );
  });

  it('renders the helper inside a small element', async () => {
    const elm = await mountLabel();
    const helperSlot = elm.shadowRoot.querySelector('slot[name="helper"]');

    expect(helperSlot.closest('small')).not.toBeNull();
  });

  describe('the for attribute', () => {
    it('is not set on the label when omitted', async () => {
      const elm = await mountLabel();
      const label = elm.shadowRoot.querySelector('label');

      // ifDefined omits the attribute rather than rendering for=""
      expect(label.hasAttribute('for')).toBe(false);
    });

    it('associates the label with the given id', async () => {
      const elm = await mountLabel({ for: 'email-input' });
      const label = elm.shadowRoot.querySelector('label');

      expect(label.getAttribute('for')).toBe('email-input');
    });

    it.each(['', '   '])(
      'omits the attribute for the blank value %p',
      async (value) => {
        const elm = await mountLabel({ for: value });
        const label = elm.shadowRoot.querySelector('label');

        expect(label.hasAttribute('for')).toBe(false);
      },
    );
  });

  describe('helper text layout', () => {
    it('is inline by default', async () => {
      const elm = await mountLabel();
      const helper = elm.shadowRoot.querySelector('small');

      expect(elm.block).toBe(false);
      expect([...helper.classList]).toEqual(['a-label__helper']);
    });

    it('adds the block modifier when block is set', async () => {
      const elm = await mountLabel({ block: true });
      const helper = elm.shadowRoot.querySelector('small');

      expect([...helper.classList]).toEqual([
        'a-label__helper',
        'a-label__helper--block',
      ]);
    });

    it('reflects block back to the attribute', async () => {
      const elm = await mountLabel();

      elm.block = true;
      await elm.updateComplete;

      expect(elm.hasAttribute('block')).toBe(true);
      expect(
        elm.shadowRoot
          .querySelector('small')
          .classList.contains('a-label__helper--block'),
      ).toBe(true);
    });
  });
});
