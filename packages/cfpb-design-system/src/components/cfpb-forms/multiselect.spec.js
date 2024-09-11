import { Multiselect } from './multiselect.js';

let multiselect;
let selectDom;
let multiselectDom;

const HTML_SNIPPET = `
<select name="test-select" id="test-select" multiple>
  <option value="Debt collection">Debt collection</option>
  <option value="consumers-responses">Consumer&#39;s Responses</option>
  <option value="Mortgage disclosure">Mortgage disclosure</option>
  <optgroup label="All other topics">
</select>
`;

describe('Multiselect', () => {
  beforeEach(() => {
    document.body.innerHTML = HTML_SNIPPET;

    selectDom = document.querySelector('select[multiple]');
    multiselect = new Multiselect(selectDom);
  });

  describe('init()', () => {
    it('should initialize the Multiselect', () => {
      multiselect.init();
      selectDom = document.querySelectorAll('select[multiple]');
      multiselectDom = document.querySelectorAll('.o-multiselect');

      expect(selectDom.length).toBe(0);
      expect(multiselectDom.length).toBe(1);

      expect(multiselect.init()).toBeInstanceOf(Multiselect);
    });

    it('should autocheck any selected options (form submitted pages)', () => {
      const option = document.querySelector('option');
      option.defaultSelected = true;
      multiselect.init();
      const choices = document.querySelectorAll(
        '.o-multiselect .m-tag-group li',
      );

      expect(choices.length).toBe(1);
      expect(choices[0].innerHTML).toContain('Debt collection');
    });

    it('accepts configuration options', () => {
      const option = document.querySelector('option');
      option.defaultSelected = true;
      multiselect.init({ maxSelections: 1, renderTags: false });

      // maxSelections
      expect(multiselect.getModel().isAtMaxSelections()).toBe(true);

      // renderTags
      const choices = document.querySelectorAll(
        '.o-multiselect .m-tag-group li',
      );
      expect(choices.length).toBe(0);
    });
  });

  describe('public methods', () => {
    it('should open when the expand method is called', () => {
      multiselect.init();
      multiselect.expand();
      multiselectDom = document.querySelector('.o-multiselect');
      const fieldset = multiselectDom.querySelector('.o-multiselect__fieldset');

      expect(multiselectDom.className).toBe('o-multiselect u-active');
      expect(fieldset.getAttribute('aria-hidden')).toBe('false');
    });

    it('should close when the collapse method is called', () => {
      multiselect.init();
      multiselect.expand();
      multiselect.collapse();
      multiselectDom = document.querySelector('.o-multiselect');
      const fieldset = multiselectDom.querySelector('.o-multiselect__fieldset');

      expect(multiselectDom.className).toBe('o-multiselect');
      expect(fieldset.getAttribute('aria-hidden')).toBe('true');
    });
  });

  describe('interactions', () => {
    it('should highlight the first item when keying down', function () {
      multiselect.init();
      const search = document.querySelector('#test-select');
      search.click();
      window.simulateEvent('keydown', search, { key: 'ArrowDown' });

      expect(document.activeElement.id).toBe('test-select-debt-collection');
      expect(document.activeElement.value).toBe('Debt collection');
    });

    it('should open when the search input is focused', function () {
      multiselect.init();
      multiselectDom = document.querySelector('.o-multiselect');
      const fieldset = multiselectDom.querySelector('.o-multiselect__fieldset');
      const search = document.querySelector('#test-select');
      search.focus();

      expect(document.activeElement.id).toBe('test-select');
      expect(multiselectDom.className).toBe('o-multiselect u-active');
      expect(fieldset.getAttribute('aria-hidden')).toBe('false');
    });

    it('should close when the search input is blurred', function () {
      multiselect.init();
      multiselect.expand();
      multiselectDom = document.querySelector('.o-multiselect');
      const fieldset = multiselectDom.querySelector('.o-multiselect__fieldset');
      const search = document.querySelector('#test-select');
      search.focus();
      search.blur();

      expect(multiselectDom.className).toBe('o-multiselect');
      expect(fieldset.getAttribute('aria-hidden')).toBe('true');
    });
  });
});
