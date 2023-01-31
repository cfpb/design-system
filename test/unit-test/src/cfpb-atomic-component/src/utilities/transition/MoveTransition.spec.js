import MoveTransition from '../../../../../../../packages/cfpb-atomic-component/src/utilities/transition/MoveTransition.js';

let transition;

// DOM-related settings.
let contentDom;

const HTML_SNIPPET = '<div class="content-1"></div>';

describe('MoveTransition', () => {
  beforeEach(() => {
    document.body.innerHTML = HTML_SNIPPET;
    contentDom = document.querySelector('.content-1');
    transition = new MoveTransition(contentDom);
    transition.init();
  });

  describe('.moveToOrigin()', () => {
    it('should return instance of MoveTransition', () => {
      expect(transition.moveToOrigin()).toBeInstanceOf(MoveTransition);
    });

    it('should apply u-move-to-origin class', () => {
      transition.moveToOrigin();
      const classes =
        'content-1 u-move-transition ' + 'u-is-animating u-move-to-origin';
      expect(contentDom.className).toStrictEqual(classes);
      transition.addEventListener('transitionend', () => {
        const classes = 'content-1 u-move-transition u-move-to-origin';
        expect(contentDom.className).toStrictEqual(classes);
      });
    });

    it('should remove u-is-animating class when transition duration is zero', () => {
      transition.animateOff();
      transition.moveToOrigin();
      const classes =
        'content-1 u-move-transition ' + 'u-no-animation u-move-to-origin';
      expect(contentDom.className).toStrictEqual(classes);
      transition.addEventListener('transitionend', () => {
        const classes = 'content-1 u-move-transition u-move-to-origin';
        expect(contentDom.className).toStrictEqual(classes);
      });
    });
  });

  describe('.moveRight()', () => {
    it('should return instance of MoveTransition', () => {
      expect(transition.moveRight()).toBeInstanceOf(MoveTransition);
    });

    it('should apply u-move-to-origin class', () => {
      transition.moveRight();
      let classes = 'content-1 u-move-transition u-is-animating u-move-right';
      expect(contentDom.className).toStrictEqual(classes);
      transition.addEventListener('transitionend', () => {
        classes = 'content-1 u-move-transition u-move-right';
        expect(contentDom.className).toStrictEqual(classes);
      });
    });
  });

  describe('.moveUp()', () => {
    it('should return instance of MoveTransition', () => {
      expect(transition.moveUp()).toBeInstanceOf(MoveTransition);
    });

    it('should apply u-move-to-origin class', () => {
      transition.moveUp();
      let classes = 'content-1 u-move-transition u-is-animating u-move-up';
      expect(contentDom.className).toStrictEqual(classes);
      transition.addEventListener('transitionend', () => {
        classes = 'content-1 u-move-transition u-move-up';
        expect(contentDom.className).toStrictEqual(classes);
      });
    });
  });

  describe('.moveLeft()', () => {
    it('should return instance of MoveTransition', () => {
      expect(transition.moveUp()).toBeInstanceOf(MoveTransition);
    });

    it('should apply u-move-left class', () => {
      transition.moveLeft();
      let classes = 'content-1 u-move-transition u-is-animating u-move-left';
      expect(contentDom.className).toStrictEqual(classes);
      transition.addEventListener('transitionend', () => {
        classes = 'content-1 u-move-transition u-move-left';
        expect(contentDom.className).toStrictEqual(classes);
      });
    });

    it('should apply u-move-left-2x class', () => {
      transition.moveLeft2();
      let classes = 'content-1 u-move-transition u-is-animating u-move-left-2x';
      expect(contentDom.className).toStrictEqual(classes);
      transition.addEventListener('transitionend', () => {
        classes = 'content-1 u-move-transition u-move-left-2x';
        expect(contentDom.className).toStrictEqual(classes);
      });
    });

    it('should apply u-move-left-3x class', () => {
      transition.moveLeft3();
      let classes = 'content-1 u-move-transition u-is-animating u-move-left-3x';
      expect(contentDom.className).toStrictEqual(classes);
      transition.addEventListener('transitionend', () => {
        classes = 'content-1 u-move-transition u-move-left-3x';
        expect(contentDom.className).toStrictEqual(classes);
      });
    });
  });
});
