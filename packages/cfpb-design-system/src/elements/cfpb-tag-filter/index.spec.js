import { jest } from '@jest/globals';
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

  xit('dispatches the correct event', async () => {
    const mockHandler = jest.fn();
    elm.addEventListener('click-tag', mockHandler);

    elm.shadowRoot.querySelector('button').click();

    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(mockHandler.mock.calls[0][0].detail.target).toBe(elm);
  });
});
