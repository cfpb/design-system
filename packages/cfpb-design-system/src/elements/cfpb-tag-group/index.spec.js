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
    const mockAddedHandler = jest.fn();
    const mockRemoveHandler = jest.fn();
    elm.addEventListener('tag-added', mockAddedHandler);
    elm.addEventListener('tag-removed', mockRemoveHandler);

    const slottedContent = document.createElement('cfpb-tag-filter');
    slottedContent.textContent = 'Earth';
    elm.appendChild(slottedContent);
    await elm.updateComplete;

    // Wait for MutationObserver render to settle.
    await new Promise((resolve) => {
      elm.addEventListener('tag-added', () => {
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

    expect(mockRemoveHandler).toHaveBeenCalledTimes(1);
    expect(
      mockRemoveHandler.mock.calls[0][0].detail.target.isEqualNode(
        slottedContent,
      ),
    ).toBe(true);
  });

  it('adds tags to internal list', async () => {
    expect(elm.tagList.length).toBe(0);

    let slottedContent = document.createElement('cfpb-tag-filter');
    slottedContent.textContent = 'Earth';
    elm.appendChild(slottedContent);
    await elm.updateComplete;

    // Wait for MutationObserver render to settle.
    await new Promise((resolve) => {
      elm.addEventListener('tag-added', () => {
        resolve();
      });
    });

    expect(elm.tagList.length).toBe(1);

    slottedContent = document.createElement('cfpb-tag-filter');
    slottedContent.textContent = 'Mars';
    elm.appendChild(slottedContent);
    await elm.updateComplete;

    expect(elm.tagList.length).toBe(2);
    expect(elm.tagList[1].isEqualNode(slottedContent)).toBe(true);
  });

  it('adds class to remove border on topic tag groups', async () => {
    let slottedContent = document.createElement('cfpb-tag-topic');
    slottedContent.textContent = 'Earth';
    slottedContent.setAttribute('href', '#');
    elm.appendChild(slottedContent);

    slottedContent = document.createElement('cfpb-tag-topic');
    slottedContent.textContent = 'Mars';
    slottedContent.setAttribute('href', '#');
    elm.appendChild(slottedContent);

    // Wait for MutationObserver render to settle.
    await new Promise((resolve) => {
      elm.addEventListener('tag-added', () => {
        resolve();
      });
    });

    await elm.tagList[0].updateComplete;

    expect(
      elm.tagList[0].shadowRoot
        .querySelector('a')
        .classList.contains('a-tag-topic--no-top-border'),
    ).toBe(false);
    expect(
      elm.tagList[1].shadowRoot
        .querySelector('a')
        .classList.contains('a-tag-topic--no-top-border'),
    ).toBe(true);
  });

  it('adds and removes at chosen indices', async () => {
    const earthContent = document.createElement('cfpb-tag-filter');
    earthContent.textContent = 'Earth';
    elm.addTag(earthContent);

    const marsContent = document.createElement('cfpb-tag-filter');
    marsContent.textContent = 'Mars';
    elm.addTag(marsContent, 0);

    // Wait for MutationObserver render to settle.
    await new Promise((resolve) => {
      elm.addEventListener('tag-added', () => {
        resolve();
      });
    });

    expect(elm.tagList[0].isEqualNode(marsContent)).toBe(true);

    elm.removeTag(marsContent, 0);

    expect(elm.tagList[0].isEqualNode(earthContent)).toBe(true);
  });
});
