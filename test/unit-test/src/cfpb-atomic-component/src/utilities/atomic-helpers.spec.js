import {
  checkDom,
  instantiateAll,
  setInitFlag,
} from '../../../../../../packages/cfpb-atomic-component/src/utilities/atomic-helpers.js';
import Expandable from '../../../../../../packages/cfpb-expandables/src/Expandable.js';

let containerDom;
let componentDom;
const testClass = 'o-footer';
const HTML_SNIPPET = `
  <div class="o-expandable o-expandable__padded" id="test-subject-two">
      <button class="o-expandable_header o-expandable_target"
              title="Expand content">
          <span class="o-expandable_header-left o-expandable_label">
              Expandable Header 3
          </span>
          <span class="o-expandable_link">
              <span class="o-expandable_cue o-expandable_cue-open">
                  Show
              </span>
              <span class="o-expandable_cue o-expandable_cue-close">
                  Hide
              </span>
          </span>
      </button>
      <div class="o-expandable_content">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Neque ipsa voluptatibus soluta nobis unde quisquam
              temporibus magnam debitis quidem. Ducimus ratione
              corporis nesciunt earum vel est quaerat blanditiis
              dolore ipsa?
          </p>
      </div>
  </div>
  <div class="container">
    <div class="o-footer"></div>
    <div class="o-footer"></div>
  </div>
`;

describe('atomic-helpers', () => {
  beforeEach(() => {
    document.body.innerHTML = HTML_SNIPPET;
    containerDom = document.querySelector('.container');
    componentDom = document.querySelector(`.${testClass}`);
  });

  describe('.checkDom()', () => {
    it('should throw an error if element DOM not found', () => {
      const errMsg =
        'null is not valid. ' +
        'Check that element is a DOM node with ' +
        `class ".${testClass}"`;
      /**
       *
       */
      function errFunc() {
        checkDom(null, testClass);
      }
      expect(errFunc).toThrow(Error, errMsg);
    });

    it('should throw an error if element class not found', () => {
      const errMsg = 'mock-class not found on or in passed DOM node.';
      /**
       *
       */
      function errFunc() {
        checkDom(componentDom, 'mock-class');
      }
      expect(errFunc).toThrow(Error, errMsg);
    });

    it('should return the correct HTMLElement when direct element is searched', () => {
      const dom = checkDom(componentDom, testClass);
      expect(dom).toStrictEqual(componentDom);
    });

    it('should return the correct HTMLElement when parent element is searched', () => {
      const dom = checkDom(containerDom, testClass);
      expect(dom).toStrictEqual(componentDom);
    });
  });

  describe('.instantiateAll()', () => {
    it('should return an array of instances', () => {
      const instArr = instantiateAll('.o-expandable', Expandable);
      expect(instArr).toBeInstanceOf(Array);
      expect(instArr.length).toBe(1);
      const instArr2 = instantiateAll('.o-expandable', Expandable);
      expect(instArr2).toBeInstanceOf(Array);
      expect(instArr2.length).toBe(0);
    });

    it('should return an empty array if no instances found', () => {
      const instArr = instantiateAll('.missing-class', Expandable);
      expect(instArr).toBeInstanceOf(Array);
      expect(instArr.length).toBe(0);
    });

    it('should not return instances that have already been initialized', () => {
      componentDom.setAttribute('data-js-hook', 'state_atomic_init');
      const instArr = instantiateAll('.o-expandable', Expandable);
      expect(instArr).toBeInstanceOf(Array);
      expect(instArr.length).toBe(1);
    });
  });

  describe('.setInitFlag()', () => {
    it('should return true when init flag is set', () => {
      expect(setInitFlag(componentDom)).toBe(true);
    });

    it('should return false when init flag is already set', () => {
      setInitFlag(componentDom);
      expect(setInitFlag(componentDom)).toBe(false);
    });
  });
});
