import { jest } from '@jest/globals';
import {
  FlyoutMenu,
  MoveTransition,
} from '../../../../../../../packages/cfpb-atomic-component';

const HTML_SNIPPET = `
<div data-js-hook="behavior_flyout-menu">
    <button data-js-hook="behavior_flyout-menu_trigger"
            aria-expanded="false"></button>
    <div data-js-hook="behavior_flyout-menu_content">
      <button data-js-hook="behavior_flyout-menu_trigger"
              aria-expanded="false"></button>
    </div>
</div>
`;

describe('FlyoutMenu', () => {
  let flyoutMenu;

  // Mock-related settings.
  let triggerClickSpy;
  let triggerOverSpy;
  let expandBeginSpy;
  let expandEndSpy;
  let collapseBeginSpy;
  let collapseEndSpy;

  // DOM-related settings.
  const SEL_PREFIX = '[data-js-hook=behavior_flyout-menu';

  let containerDom;
  let triggerDom;
  let contentDom;
  let altTriggerDom;

  beforeEach(() => {
    document.body.innerHTML = HTML_SNIPPET;
    containerDom = document.querySelector(SEL_PREFIX + ']');
    const triggersDom = document.querySelectorAll(SEL_PREFIX + '_trigger]');
    triggerDom = triggersDom[0];
    contentDom = document.querySelector(SEL_PREFIX + '_content]');
    // TODO: check for cases where alt trigger is absent.
    altTriggerDom = triggersDom[1];

    flyoutMenu = new FlyoutMenu(containerDom);
  });

  describe('.init()', () => {
    it('should have public static methods', () => {
      expect(FlyoutMenu.BASE_CLASS).toBe('behavior_flyout-menu');
    });

    it('should have correct state before initializing', () => {
      expect(triggerDom.getAttribute('aria-expanded')).toBe('false');
      expect(altTriggerDom.getAttribute('aria-expanded')).toBe('false');

      expect(flyoutMenu.isAnimating()).toBe(false);
      expect(flyoutMenu.isExpanded()).toBe(false);
      expect(flyoutMenu.getTransition()).toBeUndefined();
      expect(flyoutMenu.getData()).toBeUndefined();
    });

    it('should have correct state after initializing as collapsed', () => {
      expect(flyoutMenu.init()).toBeInstanceOf(FlyoutMenu);
      expect(triggerDom.getAttribute('aria-expanded')).toBe('false');
    });

    it('should have correct state after initializing as expanded', () => {
      expect(flyoutMenu.init(true)).toBeInstanceOf(FlyoutMenu);
      expect(triggerDom.getAttribute('aria-expanded')).toBe('true');
    });
  });

  describe('mouseover/click', () => {
    beforeEach(() => {
      // Set up expected event listeners.
      triggerOverSpy = jest.fn();
      triggerClickSpy = jest.fn();

      flyoutMenu.init();
      flyoutMenu.addEventListener('triggerover', triggerOverSpy);
      flyoutMenu.addEventListener('triggerclick', triggerClickSpy);
    });

    it('should dispatch events when called by trigger click', () => {
      const mouseEvent = new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
      });
      triggerDom.dispatchEvent(mouseEvent);
      triggerDom.click();

      // Check expected event broadcasts.
      expect(triggerOverSpy).toHaveBeenCalledTimes(1);
      expect(triggerOverSpy).toHaveBeenCalledWith({
        target: flyoutMenu,
        trigger: triggerDom,
        type: 'triggerover',
      });
    });

    it('should dispatch events when called by alt trigger click', () => {
      const mouseEvent = new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
      });
      altTriggerDom.dispatchEvent(mouseEvent);
      altTriggerDom.click();

      // Check expected event broadcasts.
      expect(triggerClickSpy).toHaveBeenCalledTimes(1);
      expect(triggerClickSpy).toHaveBeenCalledWith({
        target: flyoutMenu,
        trigger: altTriggerDom,
        type: 'triggerclick',
      });
    });
  });

  describe('.expand()', () => {
    beforeEach(() => {
      // Set up expected event listeners.
      expandBeginSpy = jest.fn();
      expandEndSpy = jest.fn();

      flyoutMenu.init();
      flyoutMenu.addEventListener('expandbegin', expandBeginSpy);
      flyoutMenu.addEventListener('expandend', expandEndSpy);
    });

    afterEach(() => {
      // Check expected event broadcasts.
      expect(expandBeginSpy).toHaveBeenCalledTimes(1);
      expect(expandBeginSpy).toHaveBeenCalledWith({
        target: flyoutMenu,
        type: 'expandbegin',
      });

      expect(expandEndSpy).toHaveBeenCalledTimes(1);
      expect(expandEndSpy).toHaveBeenCalledWith({
        target: flyoutMenu,
        type: 'expandend',
      });

      // Check expected aria attributes state.
      expect(triggerDom.getAttribute('aria-expanded')).toBe('true');
      expect(altTriggerDom.getAttribute('aria-expanded')).toBe('true');
    });

    it(
      'should dispatch events and set aria attributes, ' +
        'when called by trigger click',
      () => {
        triggerDom.click();
      },
    );

    it(
      'should dispatch events and set aria attributes, ' +
        'when called by alt trigger click',
      () => {
        altTriggerDom.click();
      },
    );

    it(
      'should dispatch events and set aria attributes, ' +
        'when called directly',
      () => {
        flyoutMenu.expand();
      },
    );
  });

  describe('.collapse()', () => {
    beforeEach(() => {
      // Set up expected event listeners.
      collapseBeginSpy = jest.fn();
      collapseEndSpy = jest.fn();

      flyoutMenu.init();
      flyoutMenu.addEventListener('collapsebegin', collapseBeginSpy);
      flyoutMenu.addEventListener('collapseend', collapseEndSpy);
      triggerDom.click();
    });

    afterEach(() => {
      // Check expected event broadcasts.
      expect(collapseBeginSpy).toHaveBeenCalledTimes(1);
      expect(collapseBeginSpy).toHaveBeenCalledWith({
        target: flyoutMenu,
        type: 'collapsebegin',
      });

      expect(collapseEndSpy).toHaveBeenCalledTimes(1);
      expect(collapseEndSpy).toHaveBeenCalledWith({
        target: flyoutMenu,
        type: 'collapseend',
      });

      // Check expected aria attribute states.
      expect(triggerDom.getAttribute('aria-expanded')).toBe('false');
      expect(altTriggerDom.getAttribute('aria-expanded')).toBe('false');
    });

    it(
      'should dispatch events and set aria attributes, ' +
        'when called by trigger click',
      () => {
        triggerDom.click();
      },
    );

    it(
      'should dispatch events and set aria attributes, ' +
        'when called by alt trigger click',
      () => {
        altTriggerDom.click();
      },
    );

    it(
      'should dispatch events and set aria attributes, ' +
        'when called directly',
      () => {
        flyoutMenu.collapse();
      },
    );
  });

  describe('.setTransition()', () => {
    it('should set a transition', async () => {
      flyoutMenu.init();
      const transition = new MoveTransition(contentDom).init(
        MoveTransition.CLASSES.MOVE_LEFT,
      );
      flyoutMenu.setTransition(
        transition,
        transition.moveLeft,
        transition.moveLeft2,
      );
      flyoutMenu.addEventListener('expandend', () => {
        const hasClass = contentDom.classList.contains('u-move-transition');
        expect(hasClass).toBe(true);
      });
      await triggerDom.click();
      flyoutMenu.addEventListener('collapseend', () => {
        const hasClass = contentDom.classList.contains('u-move-transition');
        expect(hasClass).toBe(true);
      });
      await triggerDom.click();

      /* The transitionend event should fire on its own,
         but for some reason the transitionend event is not firing within JSDom.
         In a future JSDom update this should be revisited.
         See https://github.com/jsdom/jsdom/issues/1781
      */
      const event = new Event('transitionend');
      event.propertyName = 'transform';
      contentDom.dispatchEvent(event);
    });
  });

  describe('.clearTransition()', () => {
    it('should remove all transitions', () => {
      flyoutMenu.init();
      const transition = new MoveTransition(contentDom).init(
        MoveTransition.CLASSES.MOVE_TO_ORIGIN,
      );
      flyoutMenu.setTransition(
        transition,
        transition.moveToOrigin,
        transition.moveLeft,
      );
      let hasClass = contentDom.classList.contains('u-move-transition');
      expect(hasClass).toBe(true);
      flyoutMenu.clearTransition();
      expect(flyoutMenu.getTransition()).toBeUndefined();
      hasClass = contentDom.classList.contains('u-move-transition');
      expect(hasClass).toBe(false);
    });
  });

  describe('.getDom()', () => {
    it('should return references to full dom', () => {
      flyoutMenu.init();
      const dom = flyoutMenu.getDom();
      expect(dom.container).toStrictEqual(containerDom);
      expect(dom.trigger[0]).toStrictEqual(triggerDom);
      expect(dom.content).toStrictEqual(contentDom);
      expect(dom.trigger[1]).toStrictEqual(altTriggerDom);
    });
  });

  describe('suspend/resume behavior', () => {
    beforeEach(() => {
      // Set up expected event listeners.
      expandBeginSpy = jest.fn();
      expandEndSpy = jest.fn();
      collapseBeginSpy = jest.fn();
      collapseEndSpy = jest.fn();
      flyoutMenu.init();
      flyoutMenu.addEventListener('expandbegin', expandBeginSpy);
      flyoutMenu.addEventListener('expandend', expandEndSpy);
      flyoutMenu.addEventListener('collapsebegin', collapseBeginSpy);
      flyoutMenu.addEventListener('collapseend', collapseEndSpy);
    });

    describe('.suspend()', () => {
      it('should not broadcast events after being suspended', () => {
        // Set up expected event listeners.
        flyoutMenu.suspend();
        triggerDom.click();

        expect(expandBeginSpy).toHaveBeenCalledTimes(0);
        expect(expandEndSpy).toHaveBeenCalledTimes(0);
        expect(collapseBeginSpy).toHaveBeenCalledTimes(0);
        expect(collapseEndSpy).toHaveBeenCalledTimes(0);
      });
    });

    describe('.resume()', () => {
      it('should broadcast events after resuming from suspended', () => {
        // Set up expected event listeners.
        flyoutMenu.suspend();
        flyoutMenu.resume();
        triggerDom.click();

        expect(expandBeginSpy).toHaveBeenCalledTimes(1);
        expect(expandEndSpy).toHaveBeenCalledTimes(1);
        triggerDom.click();
        expect(collapseBeginSpy).toHaveBeenCalledTimes(1);
        expect(collapseEndSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('.setData()', () => {
    it('should return the instance when set', () => {
      flyoutMenu.init();
      const inst = flyoutMenu.setData('test-data');
      expect(inst).toBeInstanceOf(FlyoutMenu);
    });
  });

  describe('.getData()', () => {
    it('should return the set data', () => {
      flyoutMenu.init();
      flyoutMenu.setData('test-data');
      expect(flyoutMenu.getData()).toBe('test-data');
    });
  });

  describe('.isAnimating()', () => {
    it('should return true when expanding', (done) => {
      flyoutMenu.init();
      flyoutMenu.addEventListener('expandbegin', () => {
        try {
          expect(flyoutMenu.isAnimating()).toBe(true);
          done();
        } catch (err) {
          done(err);
        }
      });
      triggerDom.click();
    });

    it('should return false after expanding', (done) => {
      flyoutMenu.init();
      flyoutMenu.addEventListener('expandend', () => {
        try {
          expect(flyoutMenu.isAnimating()).toBe(false);
          done();
        } catch (err) {
          done(err);
        }
      });
      triggerDom.click();
    });

    it('should return true while collapsing', (done) => {
      flyoutMenu.init();
      flyoutMenu.addEventListener('collapsebegin', () => {
        try {
          expect(flyoutMenu.isAnimating()).toBe(true);
          done();
        } catch (err) {
          done(err);
        }
      });
      triggerDom.click();
      triggerDom.click();
    });

    it('should return false after collapsing', (done) => {
      flyoutMenu.init();
      flyoutMenu.addEventListener('collapseend', () => {
        try {
          expect(flyoutMenu.isAnimating()).toBe(false);
          done();
        } catch (err) {
          done(err);
        }
      });
      triggerDom.click();
      triggerDom.click();
    });
  });

  describe('.isExpanded()', () => {
    it('should return false before expanding', (done) => {
      flyoutMenu.init();
      flyoutMenu.addEventListener('expandbegin', () => {
        try {
          expect(flyoutMenu.isExpanded()).toBe(false);
          done();
        } catch (err) {
          done(err);
        }
      });
      triggerDom.click();
    });

    it('should return true after expanding', (done) => {
      flyoutMenu.init();
      flyoutMenu.addEventListener('expandend', () => {
        try {
          expect(flyoutMenu.isExpanded()).toBe(true);
          done();
        } catch (err) {
          done(err);
        }
      });
      triggerDom.click();
    });

    it('should return true before collapsing', (done) => {
      flyoutMenu.init();
      triggerDom.click();
      flyoutMenu.addEventListener('triggerclick', () => {
        try {
          expect(flyoutMenu.isExpanded()).toBe(true);
          done();
        } catch (err) {
          done(err);
        }
      });
      triggerDom.click();
    });

    it('should return false after collapsing', (done) => {
      flyoutMenu.init();
      flyoutMenu.addEventListener('collapseend', () => {
        try {
          expect(flyoutMenu.isExpanded()).toBe(false);
          done();
        } catch (err) {
          done(err);
        }
      });
      triggerDom.click();
      triggerDom.click();
    });
  });
});
