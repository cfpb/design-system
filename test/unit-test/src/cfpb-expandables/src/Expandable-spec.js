import Expandable from '../../../../../packages/cfpb-expandables/src/Expandable';
import simulateEvent from '../../../../util/simulate-event';

const HTML_SNIPPET = `
<div class="o-expandable-group"
     id="test-group-one">

    <div class="o-expandable o-expandable__padded" id="test-subject-one">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 1
            </span>
            <span class="o-expandable_header-right o-expandable_link">
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

    <div class="o-expandable o-expandable__padded" id="test-subject-two">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 2
            </span>
            <span class="o-expandable_header-right o-expandable_link">
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

describe( 'standard Expandable', () => {

  beforeEach( () => {
    document.body.innerHTML = HTML_SNIPPET;
    expandableDom1 = document.querySelector( '#test-subject-one' );
    expandableDom2 = document.querySelector( '#test-subject-two' );
    targetDom1 = expandableDom1.querySelector( '.o-expandable_target' );
    targetDom2 = expandableDom2.querySelector( '.o-expandable_target' );
    contentDom1 = expandableDom1.querySelector( '.o-expandable_content' );
    contentDom2 = expandableDom2.querySelector( '.o-expandable_content' );
    contentDom2.classList.add( 'o-expandable_content__onload-open' );

    expandable = Expandable.init()[0];
  } );

  describe( 'initialized state', () => {
    it( 'should be data-bound', () => {
      expect( expandableDom1.getAttribute( 'data-bound' ) ).toBe( 'true' );
      expect( expandableDom2.getAttribute( 'data-bound' ) ).toBe( 'true' );
    } );

    it( 'should be collapsed when the OPEN_DEFAULT class is not present',
      () => {
        expect( contentDom1.style.maxHeight ).toBe( '0' );
        expect( targetDom1.classList.contains(
          'o-expandable_target__expanded'
        ) ).toBe( false );
        expect( targetDom1.classList.contains(
          'o-expandable_target__collapsed'
        ) ).toBe( true );
      }
    );

    it( 'should be expanded when the OPEN_DEFAULT class is present', () => {
      expect( contentDom2.style.maxHeight ).not.toBe( '0' );
      expect( targetDom2.classList.contains(
        'o-expandable_target__expanded'
      ) ).toBe( true );
      expect( targetDom2.classList.contains(
        'o-expandable_target__collapsed'
      ) ).toBe( false );
    } );

    it( 'should return label text', () => {
      expect( expandable.getLabelText() === 'Expandable Header 1' );
    } );
  } );

  describe( 'interactions', () => {
    it( 'should expand on click', () => {
      simulateEvent( 'click', targetDom1 );

      expect( contentDom1.style.maxHeight ).not.toBe( '0' );
      expect( targetDom1.classList.contains(
        'o-expandable_target__expanded'
      ) ).toBe( true );
      expect( targetDom1.classList.contains(
        'o-expandable_target__collapsed'
      ) ).toBe( false );
    } );

    it( 'should go back to initial state on second click', () => {
      simulateEvent( 'click', targetDom1 );
      simulateEvent( 'click', targetDom1 );

      expect( contentDom1.style.maxHeight ).toBe( '0' );
      expect( targetDom1.classList.contains(
        'o-expandable_target__expanded'
      ) ).toBe( false );
      expect( targetDom1.classList.contains(
        'o-expandable_target__collapsed'
      ) ).toBe( true );
    } );
  } );
} );

describe( 'accordion Expandables', () => {

  beforeEach( () => {
    document.body.innerHTML = HTML_SNIPPET;
    expandableGroup = document.querySelector( '.o-expandable-group' );
    expandableGroup.classList.add( 'o-expandable-group__accordion' );
    expandableDom1 = document.querySelector( '#test-subject-one' );
    expandableDom2 = document.querySelector( '#test-subject-two' );
    contentDom1 = expandableDom1.querySelector( '.o-expandable_content' );
    contentDom2 = expandableDom2.querySelector( '.o-expandable_content' );
    targetDom1 = expandableDom1.querySelector( '.o-expandable_target' );
    targetDom2 = expandableDom2.querySelector( '.o-expandable_target' );

    expandable = Expandable.init()[1];
  } );

  describe( 'initialized state', () => {
    it( 'should be data-bound', () => {
      expect( expandableDom1.getAttribute( 'data-bound' ) ).toBe( 'true' );
      expect( expandableDom2.getAttribute( 'data-bound' ) ).toBe( 'true' );
    } );

    it( 'should be collapsed when the OPEN_DEFAULT class is not present',
      () => {
        expect( contentDom1.style.maxHeight ).toBe( '0' );
        expect( targetDom1.classList.contains(
          'o-expandable_target__expanded'
        ) ).toBe( false );
        expect( targetDom1.classList.contains(
          'o-expandable_target__collapsed'
        ) ).toBe( true );
      }
    );
  } );

  describe( 'interactions', () => {
    it( 'should expand on a click', () => {
      simulateEvent( 'click', targetDom1 );

      expect( contentDom1.style.maxHeight ).not.toBe( '0' );
      expect( targetDom1.classList.contains(
        'o-expandable_target__expanded'
      ) ).toBe( true );
      expect( targetDom1.classList.contains(
        'o-expandable_target__collapsed'
      ) ).toBe( false );
    } );

    it( 'should collapse on a second click', () => {
      simulateEvent( 'click', targetDom1 );
      simulateEvent( 'click', targetDom1 );

      expect( contentDom1.style.maxHeight ).toBe( '0' );
      expect( targetDom1.classList.contains(
        'o-expandable_target__expanded'
      ) ).toBe( false );
      expect( targetDom1.classList.contains(
        'o-expandable_target__collapsed'
      ) ).toBe( true );
    } );

    it( 'should expand on a third click', () => {
      simulateEvent( 'click', targetDom1 );
      simulateEvent( 'click', targetDom1 );
      simulateEvent( 'click', targetDom1 );

      expect( contentDom1.style.maxHeight ).not.toBe( '0' );
      expect( targetDom1.classList.contains(
        'o-expandable_target__expanded'
      ) ).toBe( true );
      expect( targetDom1.classList.contains(
        'o-expandable_target__collapsed'
      ) ).toBe( false );
    } );

    it( 'should swap the expanded expandable', () => {
      simulateEvent( 'click', targetDom1 );
      simulateEvent( 'click', targetDom2 );

      expect( contentDom1.style.maxHeight ).toBe( '0' );
      expect( contentDom2.style.maxHeight ).not.toBe( '0' );
      expect( targetDom1.classList.contains(
        'o-expandable_target__expanded'
      ) ).toBe( false );
      expect( targetDom1.classList.contains(
        'o-expandable_target__collapsed'
      ) ).toBe( true );
      expect( targetDom2.classList.contains(
        'o-expandable_target__expanded'
      ) ).toBe( true );
      expect( targetDom2.classList.contains(
        'o-expandable_target__collapsed'
      ) ).toBe( false );
    } );

    it( 'should swap the expanded expandable when reactivated', () => {
      simulateEvent( 'click', targetDom1 );
      simulateEvent( 'click', targetDom2 );
      simulateEvent( 'click', targetDom1 );

      expect( contentDom1.style.maxHeight ).not.toBe( '0' );
      expect( contentDom2.style.maxHeight ).toBe( '0' );
      expect( targetDom1.classList.contains(
        'o-expandable_target__expanded'
      ) ).toBe( true );
      expect( targetDom1.classList.contains(
        'o-expandable_target__collapsed'
      ) ).toBe( false );
      expect( targetDom2.classList.contains(
        'o-expandable_target__expanded'
      ) ).toBe( false );
      expect( targetDom2.classList.contains(
        'o-expandable_target__collapsed'
      ) ).toBe( true );
    } );
  } );
} );
