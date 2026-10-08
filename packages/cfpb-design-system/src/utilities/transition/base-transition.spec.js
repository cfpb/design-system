import { expect } from 'vitest';
import { BaseTransition } from './base-transition.js';
import { MaxHeightTransition } from './max-height-transition.js';

let contentDom;
let transition;

const HTML_SNIPPET = `<div id="content"></div>`;

/**
 * @param {string} propertyName - The transitioning CSS property.
 * @param {HTMLElement} target - The element to dispatch the event on.
 */
function dispatchCancel(propertyName, target = contentDom) {
  const event = new Event('transitioncancel', { bubbles: true });
  Object.defineProperty(event, 'propertyName', { value: propertyName });
  target.dispatchEvent(event);
}

describe('BaseTransition', () => {
  beforeEach(() => {
    document.body.innerHTML = HTML_SNIPPET;
    contentDom = document.querySelector('#content');
    transition = new MaxHeightTransition(contentDom).init(
      MaxHeightTransition.CLASSES.MH_DEFAULT,
    );
  });

  describe('when a transition is canceled', () => {
    it('should complete if no replacement transition is running', () => {
      const onEnd = vi.fn();
      transition.addEventListener(BaseTransition.END_EVENT, onEnd);
      contentDom.getAnimations = () => [];

      transition.maxHeightZero();
      expect(contentDom.classList).toContain(BaseTransition.ANIMATING_CLASS);

      dispatchCancel('max-height');
      expect(onEnd).toHaveBeenCalledTimes(1);
      expect(contentDom.classList).not.toContain(
        BaseTransition.ANIMATING_CLASS,
      );
    });

    it('should keep waiting if a replacement transition is running', () => {
      const onEnd = vi.fn();
      transition.addEventListener(BaseTransition.END_EVENT, onEnd);
      contentDom.getAnimations = () => [
        { transitionProperty: 'max-height', playState: 'running' },
      ];

      transition.maxHeightZero();
      dispatchCancel('max-height');
      expect(onEnd).not.toHaveBeenCalled();
      expect(contentDom.classList).toContain(BaseTransition.ANIMATING_CLASS);
    });

    it('should keep waiting if getAnimations is unsupported', () => {
      const onEnd = vi.fn();
      transition.addEventListener(BaseTransition.END_EVENT, onEnd);
      expect(contentDom.getAnimations).toBeUndefined();

      transition.maxHeightZero();
      dispatchCancel('max-height');
      expect(onEnd).not.toHaveBeenCalled();
      expect(contentDom.classList).toContain(BaseTransition.ANIMATING_CLASS);
    });

    it('should ignore canceled transitions of other properties', () => {
      const onEnd = vi.fn();
      transition.addEventListener(BaseTransition.END_EVENT, onEnd);
      contentDom.getAnimations = () => [];

      transition.maxHeightZero();
      dispatchCancel('opacity');
      expect(onEnd).not.toHaveBeenCalled();
    });

    it('should ignore canceled transitions of child elements', () => {
      const onEnd = vi.fn();
      transition.addEventListener(BaseTransition.END_EVENT, onEnd);
      contentDom.getAnimations = () => [];
      const childDom = document.createElement('div');
      contentDom.appendChild(childDom);

      transition.maxHeightZero();
      dispatchCancel('max-height', childDom);
      expect(onEnd).not.toHaveBeenCalled();
    });
  });
});
