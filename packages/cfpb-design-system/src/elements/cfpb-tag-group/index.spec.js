import { jest } from '@jest/globals';
import { CfpbTagFilter } from '../cfpb-tag-filter';
import { CfpbTagTopic } from '../cfpb-tag-topic';
import { CfpbTagGroup } from './index.js';

describe('<cfpb-tag-group>', () => {
  let elm;

  beforeEach(async () => {
    CfpbTagGroup.init();
    CfpbTagTopic.init();
    CfpbTagFilter.init();
    elm = document.createElement('cfpb-tag-group');
    document.body.appendChild(elm);

    await customElements.whenDefined('cfpb-tag-group');
    await elm.updateComplete;
  });

  afterEach(() => {
    document.body.removeChild(elm);
  });

  it('renders slotted content', async () => {
    const slottedContent = document.createElement('cfpb-tag-filter');
    slottedContent.textContent = 'Earth';
    elm.appendChild(slottedContent);
    await elm.updateComplete;

    // Wait for browser render to settle.
    // Needed because requestAnimationFrame is used in firstUpdated.
    await new Promise((resolve) => requestAnimationFrame(resolve));

    const ul = elm.shadowRoot.querySelector('ul');

    expect(ul.children.length).toBe(1);

    // Walk into the first <li> and first <cfpb-tag-filter>.
    expect(ul.firstElementChild.firstElementChild.textContent).toBe('Earth');
  });

  it('dispatches the correct events', async () => {
    const mockRemoveHandler = jest.fn();
    const mockAddedHandler = jest.fn();
    elm.addEventListener('tagadded', mockAddedHandler);
    elm.addEventListener('tagremoved', mockRemoveHandler);

    const slottedContent = document.createElement('cfpb-tag-filter');
    slottedContent.textContent = 'Earth';
    elm.appendChild(slottedContent);
    await elm.updateComplete;

    // Wait for MutationObserver render to settle.
    await new Promise((resolve) => {
      elm.addEventListener('tagadded', () => {
        resolve();
      });
    });

    expect(mockAddedHandler).toHaveBeenCalledTimes(1);
    expect(
      mockAddedHandler.mock.calls[0][0].detail.target.isEqualNode(
        slottedContent,
      ),
    ).toBe(true);

    elm.shadowRoot
      .querySelector('cfpb-tag-filter')
      .shadowRoot.querySelector('button')
      .click();

    // Wait for MutationObserver render to settle.
    await new Promise((resolve) => {
      elm.addEventListener('tagremoved', () => {
        resolve();
      });
    });

    expect(mockRemoveHandler).toHaveBeenCalledTimes(1);
    expect(
      mockRemoveHandler.mock.calls[0][0].detail.target.isEqualNode(
        slottedContent,
      ),
    ).toBe(true);
  });
});
