import { checkBehaviorDom, behaviorFind } from './behavior.js';

let containerDom;

const HTML_SNIPPET = `
  <div id="container" data-js-hook="behavior_flyout-menu">
    <button data-js-hook="behavior_flyout-menu_trigger">
    <div data-js-hook="behavior_flyout-menu_content">…</div>
  </div>
`;

describe('behaviors', () => {
  beforeEach(() => {
    document.body.innerHTML = HTML_SNIPPET;
    containerDom = document.querySelector('#container');
  });

  describe('.checkBehaviorDom()', () => {
    it('should return an HTML element', () => {
      expect(
        checkBehaviorDom(
          containerDom,
          'behavior_flyout-menu_content',
        ).getAttribute('data-js-hook'),
      ).toBe('behavior_flyout-menu_content');
    });
  });

  describe('.behaviorFind()', () => {
    it('should return an array with two items when selectors are found', () => {
      const result = behaviorFind('flyout-menu', containerDom);
      expect(result).toBeInstanceOf(NodeList);
      expect(result.length).toBe(2);
    });
  });
});
