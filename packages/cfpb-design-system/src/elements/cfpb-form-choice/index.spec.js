import { jest } from '@jest/globals';
import { CfpbFormChoice } from './index.js';

describe('<cfpb-form-choice>', () => {
  let elm;

  beforeEach(async () => {
    CfpbFormChoice.init();
    elm = document.createElement('cfpb-form-choice');
    document.body.appendChild(elm);

    await customElements.whenDefined('cfpb-form-choice');
    await elm.updateComplete;
  });

  afterEach(() => {
    document.body.removeChild(elm);
  });

  it('renders slotted content', async () => {
    const slottedContent = document.createElement('span');
    slottedContent.textContent = 'Earth';
    elm.appendChild(slottedContent);
    await elm.updateComplete;

    const slot = elm.shadowRoot.querySelector('slot');
    const assignedNodes = slot.assignedNodes({ flatten: true });

    expect(assignedNodes.length).toBe(1);
    expect(assignedNodes[0].textContent).toBe('Earth');
  });

  it('dispatches the correct event', async () => {
    const inputMockHandler = jest.fn();
    const changeMockHandler = jest.fn();
    elm.addEventListener('input', inputMockHandler);
    elm.addEventListener('change', changeMockHandler);

    elm.shadowRoot.querySelector('label').click();

    expect(inputMockHandler).toHaveBeenCalledTimes(1);
    expect(inputMockHandler.mock.calls[0][0].target).toBe(elm);

    expect(changeMockHandler).toHaveBeenCalledTimes(1);
    expect(changeMockHandler.mock.calls[0][0].target).toBe(elm);
  });
});
