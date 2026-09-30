import { mount, cleanup } from '../../../../../test/plugins/element-helpers.js';
import { CfpbListItem } from './index.js';

CfpbListItem.init();

/**
 * Read the text
 * @param {HTMLSlotElement} slot - The slot to read
 * @returns {string} The assigned text, trimmed
 */
const slotText = (slot) =>
  slot
    .assignedNodes({ flatten: true })
    .map((node) => node.textContent)
    .join('')
    .trim();

describe('<cfpb-list-item', () => {
  afterEach(cleanup);

  it('renders a default slot', async () => {
    const elm = await mount('cfpb-list-item', { text: 'List item content' });
    const slot = elm.shadowRoot.querySelector('slot');

    expect(slot).not.toBeNull();
    expect(slot.hasAttribute('name')).toBe(false);
    expect(slotText(slot)).toBe('List item content');
  });

  it('renders and empty slot with no content', async () => {
    const elm = await mount('cfpb-list-item');
    const slot = elm.shadowRoot.querySelector('slot');

    expect(slotText(slot)).toBe('');
  });

  it('slots elements, not just text', async () => {
    const elm = await mount('cfpb-list-item', {
      html: '<a href="#">A link inside a list item</a>',
    });
    const assigned = elm.shadowRoot
      .querySelector('slot')
      .assignedElements({ flatten: true });

    expect(assigned).toHaveLength(1);
    expect(assigned[0].tagName).toBe('A');
  });
});
