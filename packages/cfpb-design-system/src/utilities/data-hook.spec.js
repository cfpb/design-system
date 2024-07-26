import { add, contains } from './data-hook.js';

let testComponent;

const HTML_SNIPPET = `
<div id="test-component" data-js-hook="test_behavior">
</div>
`;

describe('Data hook', () => {
  beforeEach(() => {
    document.body.innerHTML = HTML_SNIPPET;
    testComponent = document.querySelector('#test-component');
  });

  describe('add()', () => {
    it('should add a value to the data-* attribute of the element', () => {
      add(testComponent, 'test_state');
      expect(testComponent.getAttribute('data-js-hook')).toBe(
        'test_behavior test_state',
      );
    });
  });

  describe('contains()', () => {
    it('should contain a value in the data-* attribute of the element', () => {
      expect(contains(testComponent, 'test_state')).toBe(false);
      expect(contains(testComponent, 'test_behavior')).toBe(true);
    });
  });
});
