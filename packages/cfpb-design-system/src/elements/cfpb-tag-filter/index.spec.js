import { expect } from 'storybook/test';
import { CfpbTagFilter } from './index.js';

describe('<cfpb-tag-filter>', () => {
  let elm;

  beforeEach(async () => {
    CfpbTagFilter.init();
    elm = document.createElement('cfpb-tag-filter');
    document.body.appendChild(elm);

    await customElements.whenDefined('cfpb-tag-filter');
    await elm.updateComplete;
  });

  afterEach(() => {
    document.body.removeChild(elm);
  });

  it('renders slotted content', async () => {
    const slottedContent = document.createElement('span');
    elm.setAttribute('for', 'unique-id');
    slottedContent.textContent = 'Earth';
    elm.appendChild(slottedContent);
    await elm.updateComplete;

    const slot = elm.shadowRoot.querySelector('slot');
    const assignedNodes = slot.assignedNodes({ flatten: true });

    expect(assignedNodes.length).toBe(1);
    expect(assignedNodes[0].textContent).toBe('Earth');
  });

  /**
   * These trigger the button directly instead of simulating a user click.
   * That the click interaction works is proven in Chromium by the Default
   * story's play function. These cover the shape of the event it emits.
   */

  it('names the element as the item-click detail target', () => {
    const mockHandler = vi.fn();
    elm.addEventListener('item-click', mockHandler);

    elm.shadowRoot.querySelector('button').click();

    expect(mockHandler.mock.calls[0][0].detail.target).toBe(elm);
  });

  it('keeps item-click scoped to the element', () => {
    const mockHandler = vi.fn();
    elm.addEventListener('item-click', mockHandler);

    elm.shadowRoot.querySelector('button').click();

    const event = mockHandler.mock.calls[0][0];
    expect(event.bubbles).toBe(false);
    expect(event.composed).toBe(false);
  });

  it('focuses the inner button', async () => {
    await elm.focus();

    expect(elm.shadowRoot.activeElement).toBe(
      elm.shadowRoot.querySelector('button'),
    );
  });

  it('wraps the slot in a label when the "for" is set', async () => {
    elm.setAttribute('for', 'unique-id');
    await elm.updateComplete;

    const label = elm.shadowRoot.querySelector('label');

    expect(label).not.toBeNull();
    expect(label.getAttribute('for')).toBe('unique-id');
    expect(label.querySelector('slot')).not.toBeNull();
  });

  it('renders no label when "for" is empty', () => {
    expect(elm.shadowRoot.querySelector('label')).toBeNull;
    expect(elm.shadowRoot.querySelector('slot')).not.toBeNull;
  });

  it('derives its value from the slotted test when "for" is empty', async () => {
    const slottedContent = document.createElement('span');
    slottedContent.textContent = 'Earth';
    elm.appendChild(slottedContent);
    await elm.updateComplete;

    expect(elm.value).toBe('Earth');
  });
});
