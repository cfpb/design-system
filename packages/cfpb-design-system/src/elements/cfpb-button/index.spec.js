import { expect } from 'vitest';
import { mount, cleanup } from '../../../../../test/plugins/element-helpers.js';
import { CfpbButton } from './index.js';

CfpbButton.init();

// Every mount in this file slots the same label; only attributes vary.
const mountButton = (attributes) =>
  mount('cfpb-button', { attributes, text: 'Button label' });

describe('<cfpb-button>', () => {
  let elm;

  afterEach(cleanup);

  describe('button form', () => {
    it('renders a button of type "button" by default', async () => {
      elm = await mountButton();
      const button = elm.shadowRoot.querySelector('button');

      expect(button).not.toBeNull();
      expect(button.getAttribute('type')).toBe('button');
      expect(button.classList.contains('a-btn')).toBe(true);
    });

    it.each(['submit', 'reset'])('honors the "%s" type', async (type) => {
      elm = await mountButton({ type });
      const button = elm.shadowRoot.querySelector('button');

      expect(button.getAttribute('type')).toBe(type);
    });

    it('falls back to type "button" for an invalid type', async () => {
      elm = await mountButton({ type: 'not-a-type' });
      const button = elm.shadowRoot.querySelector('button');

      expect(button.getAttribute('type')).toBe('button');
    });

    it('disables the button whenthe disabled attribute is set', async () => {
      elm = await mountButton({ disabled: '' });
      const button = elm.shadowRoot.querySelector('button');

      expect(button.disabled).toBe(true);
    });

    it('passes the disabled state down to the icon text', async () => {
      elm = await mountButton({ disabled: '' });
      const iconText = elm.shadowRoot.querySelector('cfpb-icon-text');

      expect(iconText.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('variants', () => {
    it.each([
      ['secondary', 'a-btn--secondary'],
      ['warning', 'a-btn--warning'],
    ])('adds the %s modifier class', async (variant, className) => {
      elm = await mountButton({ variant });
      const button = elm.shadowRoot.querySelector('button');

      expect(button.classList.contains(className)).toBe(true);
    });

    it('adds no modifier class for the primary variant', async () => {
      elm = await mountButton({ variant: 'primary' });
      const button = elm.shadowRoot.querySelector('button');

      expect([...button.classList]).toEqual(['a-btn']);
    });

    it('falls back to primary for an invalid variant', async () => {
      elm = await mountButton({ variant: 'not-a-variant' });
      const button = elm.shadowRoot.querySelector('button');

      // Primary renders no modifier, so the fallback is an `a-btn` only class list
      expect([...button.classList]).toEqual(['a-btn']);
    });
  });

  describe('link form', () => {
    it('renders an anchor with role="button" when href is set', async () => {
      elm = await mountButton({ href: '#' });
      const anchor = elm.shadowRoot.querySelector('a');

      expect(anchor).not.toBeNull();
      expect(elm.shadowRoot.querySelector('button')).toBeNull();
      expect(anchor.getAttribute('role')).toBe('button');
      expect(anchor.getAttribute('href')).toBe('#');
      expect(anchor.getAttribute('aria-disabled')).toBe('false');
      expect(anchor.getAttribute('tabindex')).toBe('0');
    });

    it('adds the link modifier class when styled as link', async () => {
      elm = await mountButton({ href: '#', 'style-as-link': '' });
      const anchor = elm.shadowRoot.querySelector('a');

      expect(anchor.classList.contains('a-btn--link')).toBe(true);
    });

    it('removes a disabled link from the tab order', async () => {
      elm = await mountButton({ href: '#', disabled: '' });
      const anchor = elm.shadowRoot.querySelector('a');

      expect(anchor.getAttribute('aria-disabled')).toBe('true');
      expect(anchor.getAttribute('tabindex')).toBe('-1');
    });

    it('does no point a disabled link at its href target', async () => {
      elm = await mountButton({ href: '#', disabled: '' });
      const anchor = elm.shadowRoot.querySelector('a');

      expect(anchor.getAttribute('href')).not.toBe('#');
    });
  });
});
