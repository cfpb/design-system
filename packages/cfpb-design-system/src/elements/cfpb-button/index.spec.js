import { expect } from 'vitest';
import { CfpbButton } from './index.js';

/**
 * Mount a cfpb-button with the given attributes and wait for the first render.
 * @param {object} attributes - Attribute name/value pairs to set on the element.
 * @returns {Promise<HTMLElement>} The mounted element.
 */
async function mount(attributes = {}) {
  CfpbButton.init();

  const elm = document.createElement('cfpb-button');
  for (const [name, value] of Object.entries(attributes)) {
    elm.setAttribute(name, value);
  }
  elm.textContent = 'Button label';
  document.body.appendChild(elm);

  await customElements.whenDefined('cfpb-button');
  await elm.updateComplete;

  return elm;
}

describe('<cfpb-button>', () => {
  let elm;

  afterEach(() => {
    if (elm?.parentNode) document.body.removeChild(elm);
    elm = undefined;
  });

  describe('button form', () => {
    it('renders a button of type "button" by default', async () => {
      elm = await mount();
      const button = elm.shadowRoot.querySelector('button');

      expect(button).not.toBeNull();
      expect(button.getAttribute('type')).toBe('button');
      expect(button.classList.contains('a-btn')).toBe(true);
    });

    it.each(['submit', 'reset'])('honors the "%s" type', async (type) => {
      elm = await mount({ type });
      const button = elm.shadowRoot.querySelector('button');

      expect(button.getAttribute('type')).toBe(type);
    });

    it('falls back to type "button" for an invalid type', async () => {
      elm = await mount({ type: 'not-a-type' });
      const button = elm.shadowRoot.querySelector('button');

      expect(button.getAttribute('type')).toBe('button');
    });

    it('disables the button whenthe disabled attribute is set', async () => {
      elm = await mount({ disabled: '' });
      const button = elm.shadowRoot.querySelector('button');

      expect(button.disabled).toBe(true);
    });

    it('passes the disabled state down to the icon text', async () => {
      elm = await mount({ disabled: '' });
      const iconText = elm.shadowRoot.querySelector('cfpb-icon-text');

      expect(iconText.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('variants', () => {
    it.each([
      ['secondary', 'a-btn--secondary'],
      ['warning', 'a-btn--warning'],
    ])('adds the %s modifier class', async (variant, className) => {
      elm = await mount({ variant });
      const button = elm.shadowRoot.querySelector('button');

      expect(button.classList.contains(className)).toBe(true);
    });

    it('adds no modifier class for the primary variant', async () => {
      elm = await mount({ variant: 'primary' });
      const button = elm.shadowRoot.querySelector('button');

      expect([...button.classList]).toEqual(['a-btn']);
    });

    it('falls back to primary for an invalid variant', async () => {
      elm = await mount({ variant: 'not-a-variant' });
      const button = elm.shadowRoot.querySelector('button');

      // Primary renders no modifier, so the fallback is an `a-btn` only class list
      expect([...button.classList]).toEqual(['a-btn']);
    });
  });

  describe('link form', () => {
    it('renders an anchor with role="button" when href is set', async () => {
      elm = await mount({ href: '#' });
      const anchor = elm.shadowRoot.querySelector('a');

      expect(anchor).not.toBeNull();
      expect(elm.shadowRoot.querySelector('button')).toBeNull();
      expect(anchor.getAttribute('role')).toBe('button');
      expect(anchor.getAttribute('href')).toBe('#');
      expect(anchor.getAttribute('aria-disabled')).toBe('false');
      expect(anchor.getAttribute('tabindex')).toBe('0');
    });

    it('adds the link modifier class when styled as link', async () => {
      elm = await mount({ href: '#', 'style-as-link': '' });
      const anchor = elm.shadowRoot.querySelector('a');

      expect(anchor.classList.contains('a-btn--link')).toBe(true);
    });

    it('removes a disabled link from the tab order', async () => {
      elm = await mount({ href: '#', disabled: '' });
      const anchor = elm.shadowRoot.querySelector('a');

      expect(anchor.getAttribute('aria-disabled')).toBe('true');
      expect(anchor.getAttribute('tabindex')).toBe('-1');
    });

    it('does no point a disabled link at its href target', async () => {
      elm = await mount({ href: '#', disabled: '' });
      const anchor = elm.shadowRoot.querySelector('a');

      expect(anchor.getAttribute('href')).not.toBe('#');
    });
  });
});
