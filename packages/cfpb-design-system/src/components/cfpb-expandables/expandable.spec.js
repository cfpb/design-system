import { Expandable, ExpandableGroup } from './index.js';

const HTML_SNIPPET = `
<div class="o-expandable-group"
     id="test-group-one">

    <div class="o-expandable" id="test-subject-one">
        <button class="o-expandable__header"
                title="Expand content">
            <span class="o-expandable__label">
                Expandable Header 1
            </span>
            <span class="o-expandable__cues">
                <span class="o-expandable__cue-open">
                    Show
                </span>
                <span class="o-expandable__cue-close">
                    Hide
                </span>
            </span>
        </button>
        <div class="o-expandable__content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>

    <div class="o-expandable" id="test-subject-two">
        <button class="o-expandable__header"
                title="Expand content">
            <span class="o-expandable__label">
                Expandable Header 2
            </span>
            <span class="o-expandable__cues">
                <span class="o-expandable__cue-open">
                    Show
                </span>
                <span class="o-expandable__cue-close">
                    Hide
                </span>
            </span>
        </button>
        <div class="o-expandable__content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>

<div class="o-expandable" id="test-subject-two">
    <button class="o-expandable__header"
            title="Expand content">
        <span class="o-expandable__label">
            Expandable Header 3
        </span>
        <span class="o-expandable__cues">
            <span class="o-expandable__cue-open">
                Show
            </span>
            <span class="o-expandable__cue-close">
                Hide
            </span>
        </span>
    </button>
    <div class="o-expandable__content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>
`;

let expandable;
let expandableGroup;
let expandableDom1;
let expandableDom2;
let targetDom1;
let targetDom2;
let contentDom1;
let contentDom2;

describe('standard Expandable', () => {
  beforeEach(() => {
    document.body.innerHTML = HTML_SNIPPET;
    expandableDom1 = document.querySelector('#test-subject-one');
    expandableDom2 = document.querySelector('#test-subject-two');
    targetDom1 = expandableDom1.querySelector('.o-expandable__header');
    targetDom2 = expandableDom2.querySelector('.o-expandable__header');
    contentDom1 = expandableDom1.querySelector('.o-expandable__content');
    contentDom2 = expandableDom2.querySelector('.o-expandable__content');
    expandableDom2.classList.add('o-expandable--onload-open');

    ExpandableGroup.init();
    expandable = Expandable.init()[0];
  });

  describe('initialized state', () => {
    it('should be initialized', () => {
      expect(expandableDom1.getAttribute('data-js-hook')).toBe(
        'state_atomic_init behavior_flyout-menu',
      );
      expect(expandableDom2.getAttribute('data-js-hook')).toBe(
        'state_atomic_init behavior_flyout-menu',
      );
    });

    it('should be collapsed when the OPEN_DEFAULT class is not present', () => {
      expect(targetDom1.getAttribute('aria-expanded')).toBe('false');
      expect(contentDom1.getAttribute('data-open')).toBe('false');
    });

    it('should be expanded when the OPEN_DEFAULT class is present', () => {
      expect(targetDom2.getAttribute('aria-expanded')).toBe('true');
      expect(contentDom2.getAttribute('data-open')).toBe('true');
    });

    it('should return label text', () => {
      expect(expandable.getLabelText() === 'Expandable Header 3');
    });
  });

  describe('interactions', () => {
    it('should expand on click', () => {
      window.simulateEvent('click', targetDom1);

      /* The transitionend event should fire on its own,
         but for some reason the transitionend event is not firing within JSDom.
         In a future JSDom update this should be revisited.
         See https://github.com/jsdom/jsdom/issues/1781
      */
      const event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);

      expect(targetDom1.getAttribute('aria-expanded')).toBe('true');
    });

    it('should go back to initial state on second click', () => {
      window.simulateEvent('click', targetDom1);
      let event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);

      window.simulateEvent('click', targetDom1);
      event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);

      expect(targetDom1.getAttribute('aria-expanded')).toBe('false');
    });
  });
});

describe('accordion Expandables', () => {
  beforeEach(() => {
    document.body.innerHTML = HTML_SNIPPET;
    expandableGroup = document.querySelector('.o-expandable-group');
    expandableGroup.classList.add('o-expandable-group--accordion');
    expandableDom1 = document.querySelector('#test-subject-one');
    expandableDom2 = document.querySelector('#test-subject-two');
    contentDom1 = expandableDom1.querySelector('.o-expandable__content');
    contentDom2 = expandableDom2.querySelector('.o-expandable__content');
    targetDom1 = expandableDom1.querySelector('.o-expandable__header');
    targetDom2 = expandableDom2.querySelector('.o-expandable__header');

    ExpandableGroup.init();
    expandable = Expandable.init()[1];
  });

  describe('initialized state', () => {
    it('should be initialized', () => {
      expect(expandableDom1.getAttribute('data-js-hook')).toBe(
        'state_atomic_init behavior_flyout-menu',
      );
      expect(expandableDom2.getAttribute('data-js-hook')).toBe(
        'state_atomic_init behavior_flyout-menu',
      );
    });

    it('should be collapsed when the OPEN_DEFAULT class is not present', () => {
      expect(targetDom1.getAttribute('aria-expanded')).toBe('false');
    });
  });

  describe('interactions', () => {
    it('should expand on a click', () => {
      window.simulateEvent('click', targetDom1);

      const event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);

      expect(targetDom1.getAttribute('aria-expanded')).toBe('true');
    });

    it('should collapse on a second click', () => {
      window.simulateEvent('click', targetDom1);
      let event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);

      window.simulateEvent('click', targetDom1);
      event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);

      expect(targetDom1.getAttribute('aria-expanded')).toBe('false');
    });

    it('should expand on a third click', () => {
      window.simulateEvent('click', targetDom1);
      let event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);

      window.simulateEvent('click', targetDom1);
      event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);

      window.simulateEvent('click', targetDom1);
      event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);

      expect(targetDom1.getAttribute('aria-expanded')).toBe('true');
    });

    it('should swap the expanded expandable', () => {
      window.simulateEvent('click', targetDom1);
      let event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);

      window.simulateEvent('click', targetDom2);
      event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom2.dispatchEvent(event);

      expect(targetDom1.getAttribute('aria-expanded')).toBe('false');
      expect(targetDom2.getAttribute('aria-expanded')).toBe('true');
    });

    it('should swap the expanded expandable when reactivated', () => {
      window.simulateEvent('click', targetDom1);
      let event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);

      window.simulateEvent('click', targetDom2);
      event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);
      event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom2.dispatchEvent(event);

      window.simulateEvent('click', targetDom1);
      event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom1.dispatchEvent(event);
      event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom2.dispatchEvent(event);

      expect(targetDom1.getAttribute('aria-expanded')).toBe('true');
      expect(targetDom2.getAttribute('aria-expanded')).toBe('false');
    });
  });
});
