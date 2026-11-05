import { mount, cleanup } from '../../../../../test/plugins/element-helpers.js';
import { CfpbCheckboxIcon } from './index.js';

CfpbCheckboxIcon.init();

/**
 * @param {HTMLElement} elm - The element
 * @returns {Array<string>} The inner <span> classes
 */
const spanClasses = (elm) => [
  ...elm.shadowRoot.querySelector('span').classList,
];

describe('cfpb-checkbox-icon', () => {
  afterEach(cleanup);

  it('render unchecked with only the base class', async () => {
    const elm = await mount('cfpb-checkbox-icon');

    expect(spanClasses(elm)).toEqual(['cfpb-checkbox-icon']);
  });

  it('render the check icon and hide with styles', async () => {
    const elm = await mount('cfpb-checkbox-icon');
    const icon = elm.shadowRoot.querySelector('cfpb-icon');

    expect(icon.getAttribute('name')).toBe('approved');
  });

  describe('state classes', () => {
    it.each([
      ['borderless', 'borderless'],
      ['checked', 'checked'],
      ['disabled', 'disabled'],
    ])('uses %s class', async (attribute, className) => {
      const elm = await mount('cfpb-checkbox-icon', {
        attributes: { [attribute]: true },
      });

      expect(spanClasses(elm)).toContain(className);
    });

    it('combine states', async () => {
      const elm = await mount('cfpb-checkbox-icon', {
        attributes: { checked: true, borderless: true },
      });

      expect(spanClasses(elm)).toEqual(
        expect.arrayContaining(['checked', 'borderless']),
      );
    });

    it('put disabled on inner span', async () => {
      const elm = await mount('cfpb-checkbox-icon', {
        attributes: { disabled: true },
      });

      expect(
        elm.shadowRoot.querySelector('span').hasAttribute('disabled'),
      ).toBe(true);
    });
  });

  describe('validation', () => {
    it.each(['error', 'warning', 'success'])(
      'add the %s class',
      async (validation) => {
        const elm = await mount('cfpb-checkbox-icon', {
          attributes: { validation },
        });

        expect(spanClasses(elm)).toContain(`validation-${validation}`);
      },
    );

    it.each(['', 'no-state'])(
      'no validation class for %p',
      async (validation) => {
        const elm = await mount('cfpb-checkbox-icon', {
          attributes: { validation },
        });

        expect(
          spanClasses(elm).some((ns) => ns.startsWith('validation-')),
        ).toBe(false);
      },
    );
  });

  describe('hover and focus', () => {
    it('add hover on mouseover and remove on mouseleave', async () => {
      const elm = await mount('cfpb-checkbox-icon');

      elm.mouseover();
      await elm.updateComplete;
      expect(spanClasses(elm)).toContain('hover');

      elm.mouseleave();
      await elm.updateComplete;

      expect(spanClasses(elm)).not.toContain('hover');
    });

    it('add focus class when focused and remove on blur', async () => {
      const elm = await mount('cfpb-checkbox-icon');

      elm.focus();
      await elm.updateComplete;
      expect(spanClasses(elm)).toContain('focus');

      elm.blur();
      await elm.updateComplete;
      expect(spanClasses(elm)).not.toContain('focus');
    });

    it.each(['mouseover', 'focus'])('dont %s if disabled', async (method) => {
      const elm = await mount('cfpb-checkbox-icon', {
        attributes: { disabled: true },
      });

      elm[method]();
      await elm.updateComplete;

      expect(spanClasses(elm)).not.toContain(
        method === 'mouseover' ? 'hover' : 'focus',
      );
    });
  });

  it('register the icon', () => {
    expect(customElements.get('cfpb-icon')).toBeDefined();
  });
});
