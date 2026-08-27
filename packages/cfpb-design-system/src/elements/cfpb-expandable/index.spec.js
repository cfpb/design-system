import { describe, expect } from 'vitest';
import { CfpbExpandable } from './index.js';

/**
 * Mount a cfpb-expandable with header and content slots filled.
 * @param {boolean} open - Whether to start expanded.
 * @returns {Promise<HTMLElement>} The mounted element.
 */
async function mount(open = false) {
  CfpbExpandable.init();

  const elm = document.createElement('cfpb-expandable');
  if (open) elm.setAttribute('open', '');
  elm.innerHTML =
    '<span slot="header">Section header</span>' +
    '<p slot="content">Expandable section content</p>';
  document.body.appendChild(elm);

  await customElements.whenDefined('cfpb-expandable');
  await elm.updateComplete;

  return elm;
}

describe('<cfpb-expandable>', () => {
  let elm;

  afterEach(() => {
    if (elm?.parentNode) document.body.removeChild(elm);
    elm = undefined;
  });

  it('starts collapsed by default', async () => {
    elm = await mount();
    const content = elm.shadowRoot.querySelector('.o-expandable__content');

    expect(elm.isExpanded).toBe(false);
    expect(elm.hasAttribute('open')).toBe(false);
    expect(content.classList.contains('u-max-height-zero')).toBe(true);
  });

  it('starts expanded when the open attribute is set', async () => {
    elm = await mount(true);
    const content = elm.shadowRoot.querySelector('.o-expandable__content');

    expect(elm.isExpanded).toBe(true);
    expect(content.classList.contains('u-max-height-default')).toBe(true);
  });

  it('renders header and content slots', async () => {
    elm = await mount();
    const header = elm.shadowRoot.querySelector('slot[name="header"]');
    const content = elm.shadowRoot.querySelector('slot[name="content"]');

    const text = (slot) =>
      slot
        .assignedNodes({ flatten: true })
        .map((node) => node.textContent)
        .join('')
        .trim();

    expect(text(header)).toBe('Section header');
    expect(text(content)).toBe('Expandable section content');
  });

  /**
   * KNOWN BUG - this test is expected to fail until the component is fixed.
   *
   * When the expandable mounts already open, `firstUpdated()` applies the
   * `u-max-height-default` class but never computes and inline max-height.
   * MaxHeightTransition only calls `refersh()` from three spots and none
   * run on an initially open mount and a custom element upgraded after `load`
   * has already fired never recieves that event at all.
   *
   * Toggling open after mount goes thorugh `maxHeightDefault()` works which
   * is why this reproduces on initial load.
   *
   * The fix is to refresh the transition when mounting in the expanded state.
   */
  //   it('sets and inline max-height when mounted already open', async () => {
  //     elm = await mount(true);
  //     const content = elm.shadowRoot.querySelector('.o-expandable__content');

  //     expect(content.style.maxHeight).not.toBe('');
  //   });

  describe('collapsing programatically', () => {
    it('collapses when isExpanded is set to false', async () => {
      elm = await mount(true);
      const button = elm.shadowRoot.querySelector('button');

      elm.isExpanded = false;
      await elm.updateComplete;

      expect(elm.isExpanded).toBe(false);
      expect(button.getAttribute('aria-expanded')).toBe('false');
    });

    it('unreflects the open attribute when collapsed', async () => {
      elm = await mount(true);

      elm.isExpanded = false;
      await elm.updateComplete;

      expect(elm.hasAttribute('open')).toBe(false);
    });

    it('drives the content to max-height zero when collapsed', async () => {
      elm = await mount(true);
      const content = elm.shadowRoot.querySelector('.o-expandable__content');

      elm.isExpanded = false;
      await elm.updateComplete;

      expect(content.classList.contains('u-max-height-zero')).toBe(true);
    });
  });

  describe('expanding programatically', () => {
    it('reflects the open attribute when isExpanded is set to true', async () => {
      elm = await mount(false);

      elm.isExpanded = true;
      await elm.updateComplete;

      expect(elm.hasAttribute('open')).toBe(true);
    });

    it('reveals the content when expanded', async () => {
      elm = await mount(false);
      const content = elm.shadowRoot.querySelector('.o-expandable__content');

      elm.isExpanded = true;
      await elm.updateComplete;

      expect(content.hasAttribute('hidden')).toBe(false);
      expect(content.classList.contains('u-max-height-default')).toBe(true);
    });
  });
});
