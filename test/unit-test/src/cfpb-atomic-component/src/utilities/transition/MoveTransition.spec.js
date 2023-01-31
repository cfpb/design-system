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

  afterEach(() => {
    transition.remove();
  });

  describe('.moveToOrigin()', () => {
    it('should return instance of MoveTransition', () => {
      expect(transition.moveToOrigin()).toBeInstanceOf(MoveTransition);
    });

    it('should apply u-move-to-origin class', () => {
      let classes;
      const handler = () => {
        classes = 'content-1 u-move-transition';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionbegin', handler);
      };
      transition.addEventListener('transitionbegin', handler);

      const handler2 = () => {
        classes = 'content-1 u-move-transition u-move-to-origin';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionend', handler2);
      };
      transition.addEventListener('transitionend', handler2);

      transition.moveToOrigin();
    });

    it('should remove u-is-animating class when transition duration is zero', () => {
      transition.animateOff();

      let classes;
      const handler = () => {
        classes = 'content-1 u-move-transition u-no-animation';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionbegin', handler);
      };
      transition.addEventListener('transitionbegin', handler);

      const handler2 = () => {
        classes = 'content-1 u-move-transition u-no-animation';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionend', handler2);
      };
      transition.addEventListener('transitionend', handler2);

      transition.moveToOrigin();
    });
  });

  describe('.moveRight()', () => {
    it('should return instance of MoveTransition', () => {
      expect(transition.moveRight()).toBeInstanceOf(MoveTransition);
    });

    it('should apply u-move-to-origin class', () => {
      let classes;
      const handler = () => {
        classes = 'content-1 u-move-transition';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionbegin', handler);
      };
      transition.addEventListener('transitionbegin', handler);

      const handler2 = () => {
        classes = 'content-1 u-move-transition u-move-right';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionend', handler2);
      };
      transition.addEventListener('transitionend', handler2);

      transition.moveRight();
    });
  });

  describe('.moveUp()', () => {
    it('should return instance of MoveTransition', () => {
      expect(transition.moveUp()).toBeInstanceOf(MoveTransition);
    });

    it('should apply u-move-to-origin class', () => {
      let classes;
      const handler = () => {
        classes = 'content-1 u-move-transition';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionbegin', handler);
      };
      transition.addEventListener('transitionbegin', handler);

      const handler2 = () => {
        classes = 'content-1 u-move-transition u-move-up';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionend', handler2);
      };
      transition.addEventListener('transitionend', handler2);

      transition.moveUp();
    });
  });

  describe('.moveLeft()', () => {
    it('should return instance of MoveTransition', () => {
      expect(transition.moveUp()).toBeInstanceOf(MoveTransition);
    });

    it('should apply u-move-left class', () => {
      let classes;
      const handler = () => {
        classes = 'content-1 u-move-transition';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionbegin', handler);
      };
      transition.addEventListener('transitionbegin', handler);

      const handler2 = () => {
        classes = 'content-1 u-move-transition u-move-left';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionend', handler2);
      };
      transition.addEventListener('transitionend', handler2);

      transition.moveLeft();
    });

    it('should apply u-move-left-2x class', () => {
      let classes;
      const handler = () => {
        classes = 'content-1 u-move-transition';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionbegin', handler);
      };
      transition.addEventListener('transitionbegin', handler);

      const handler2 = () => {
        classes = 'content-1 u-move-transition u-move-left-2x';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionend', handler2);
      };
      transition.addEventListener('transitionend', handler2);

      transition.moveLeft2();
    });

    it('should apply u-move-left-3x class', () => {
      let classes;
      const handler = () => {
        classes = 'content-1 u-move-transition';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionbegin', handler);
      };
      transition.addEventListener('transitionbegin', handler);

      const handler2 = () => {
        classes = 'content-1 u-move-transition u-move-left-3x';
        expect(contentDom.className).toStrictEqual(classes);
        transition.removeEventListener('transitionend', handler2);
      };
      transition.addEventListener('transitionend', handler2);

      transition.moveLeft3();
    });
  });
});
