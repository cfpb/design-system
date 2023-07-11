import { BaseTransition, EventObserver } from '@cfpb/cfpb-atomic-component';

const eventObserver = new EventObserver();

/**
 * Mock the default transition for a BaseTransition constructor.
 * @returns {Function} A mock instance.
 */
function MockChildTransition() {
  this.dispatchEvent = eventObserver.dispatchEvent;
  return this;
}
let mockChildTransition;
let transition;

// DOM-related settings.
let contentDom;
let content2Dom;

const HTML_SNIPPET =
  '<div class="content-1"></div>' + '<div class="content-2"></div>';

describe('BaseTransition', () => {
  beforeEach(() => {
    document.body.innerHTML = HTML_SNIPPET;
    contentDom = document.querySelector('.content-1');
    content2Dom = document.querySelector('.content-2');

    mockChildTransition = new MockChildTransition();
    transition = new BaseTransition(
      contentDom,
      {
        CSS_PROPERTY: 'top',
        BASE_CLASS: 'u-test-transition',
      },
      mockChildTransition,
    );
  });

  describe('.init()', () => {
    it('should have public static methods', () => {
      expect(BaseTransition.BEGIN_EVENT).toStrictEqual('transitionbegin');
      expect(BaseTransition.END_EVENT).toStrictEqual('transitionend');
      expect(BaseTransition.NO_ANIMATION_CLASS).toStrictEqual('u-no-animation');
    });

    it('should have correct state before initializing', () => {
      expect(transition.isAnimated()).toBe(false);
    });

    it('should have correct state after initializing', () => {
      expect(transition.init('test-class') instanceof BaseTransition).toBe(
        true,
      );
    });
  });

  describe('.setElement()', () => {
    it('should move classes from old element to new element', () => {
      const className = 'u-test-transition';
      expect(contentDom.classList.contains(className)).toBe(false);
      transition.init('test-class');
      expect(contentDom.classList.contains(className)).toBe(true);
      transition.setElement(content2Dom);
      expect(contentDom.classList.contains(className)).toBe(false);
      expect(content2Dom.classList.contains(className)).toBe(true);
    });
  });

  describe('.halt()', () => {
    xit('should immediately fire transition end event', () => {
      /* TODO: To test halt() the transition needs to be started and
         then halt() needs to be called before the transition
         duration has completed. */
    });
  });

  describe('.remove()', () => {
    it('should remove transition classes from element', () => {
      transition.init('test-class');
      let hasClass = contentDom.classList.contains('u-test-transition');
      expect(hasClass).toBe(true);
      transition.remove();
      hasClass = contentDom.classList.contains('u-test-transition');
      expect(hasClass).toBe(false);
    });
  });

  describe('.isAnimated()', () => {
    beforeEach(() => {
      transition.init('test-class');
    });

    it('should be true after animation is initialized', () => {
      expect(transition.isAnimated()).toBe(true);
    });

    it('should be true after animation is turned On', () => {
      transition.animateOn();
      expect(transition.isAnimated()).toBe(true);
    });

    it('should be false after animation is turned Off', () => {
      transition.animateOff();
      expect(transition.isAnimated()).toBe(false);
    });
  });

  describe('.animateOff()', () => {
    beforeEach(() => {
      transition.init('test-class');
    });

    it('should set u-no-animation class when called', () => {
      expect(contentDom.classList.contains('u-no-animation')).toBe(false);
      expect(transition.isAnimated()).toBe(true);
      transition.animateOff();
      expect(transition.isAnimated()).toBe(false);
      expect(contentDom.classList.contains('u-no-animation')).toBe(true);
    });
  });

  describe('.animateOn()', () => {
    beforeEach(() => {
      transition.init('test-class');
    });

    it('should remove u-no-animation class, if set', () => {
      expect(transition.isAnimated()).toBe(true);
      transition.animateOff();
      expect(transition.isAnimated()).toBe(false);
      transition.animateOn();
      expect(transition.isAnimated()).toBe(true);
      expect(contentDom.classList.contains('u-no-animation')).toBe(false);
    });
  });

  describe('.applyClass()', () => {
    it('should apply a class', () => {
      transition.init('test-class');
      contentDom.classList.remove('u-test-transition');
      expect(transition.applyClass('u-test-transition')).toBe(true);
      expect(transition.applyClass('u-test-transition')).toBe(false);
    });
  });
});
