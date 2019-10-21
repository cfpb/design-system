const ExpandableTransition = require(
  '../../../../../packages/cfpb-expandables/src/ExpandableTransition'
);

const HTML_SNIPPET = `
<div class="o-expandable_content" id="test-subject-one">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Neque ipsa voluptatibus soluta nobis unde quisquam
        temporibus magnam debitis quidem. Ducimus ratione
        corporis nesciunt earum vel est quaerat blanditiis
        dolore ipsa?
    </p>
</div>
<div class="o-expandable_content o-expandable_content__onload-open"
     id="test-subject-two">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Neque ipsa voluptatibus soluta nobis unde quisquam
        temporibus magnam debitis quidem. Ducimus ratione
        corporis nesciunt earum vel est quaerat blanditiis
        dolore ipsa?
    </p>
</div>
`;

let expandableDom1;
let expandableDom2;
let initialized1;
let initialized2;

describe( 'Expandable', () => {
  beforeEach( () => {
    document.body.innerHTML = HTML_SNIPPET;
    expandableDom1 = document.querySelector( '#test-subject-one' );
    expandableDom2 = document.querySelector( '#test-subject-two' );

    initialized1 = new ExpandableTransition( expandableDom1 ).init();
    initialized2 = new ExpandableTransition( expandableDom2 ).init();
  } );

  describe( 'initialized state', () => {
    it( 'should be collapsed when the OPEN_DEFAULT class is not present',
      () => {
        expect( expandableDom1.offsetHeight ).toBe( 0 );
        expect( expandableDom1.style.maxHeight ).toBe( '0' );
        expect( expandableDom1.classList.contains(
          'o-expandable_content__expanded'
        ) ).toBe( false );
        expect( expandableDom1.classList.contains(
          'o-expandable_content__collapsed'
        ) ).toBe( true );
      }
    );

    it( 'should be open when the OPEN_DEFAULT class is present',
      () => {
        expect( expandableDom2.style.maxHeight ).not.toBe( '0' );
        expect( expandableDom2.classList.contains(
          'o-expandable_content__expanded'
        ) ).toBe( true );
        expect( expandableDom2.classList.contains(
          'o-expandable_content__collapsed'
        ) ).toBe( false );
      }
    );
  } );

  describe( 'expanded state', () => {
    it( 'should be expanded when the expand method is called',
      () => {
        initialized1.expand();

        expect( expandableDom1.style.maxHeight ).not.toBe( '0' );
        expect( expandableDom1.classList.contains(
          'o-expandable_content__expanded'
        ) ).toBe( true );
        expect( expandableDom1.classList.contains(
          'o-expandable_content__collapsed'
        ) ).toBe( false );
      }
    );
  } );

  describe( 'collapsed state', () => {
    it( 'should be collpased when the collapse method is called',
      () => {
        initialized2.collapse();

        expect( expandableDom2.style.maxHeight ).toBe( '0' );
        expect( expandableDom2.classList.contains(
          'o-expandable_content__expanded'
        ) ).toBe( false );
        expect( expandableDom2.classList.contains(
          'o-expandable_content__collapsed'
        ) ).toBe( true );
      }
    );
  } );

  describe( 'toggled state', () => {
    it( 'should be expanded when the expandable starts out collapsed',
      () => {
        let expandBeginFired = false;

        initialized1.addEventListener( 'expandBegin', () => {
          expandBeginFired = true;
        } );

        initialized1.toggleExpandable();

        expect( expandBeginFired ).toBe( true );
        expect( expandableDom1.style.maxHeight ).not.toBe( '0' );
        expect( expandableDom1.classList.contains(
          'o-expandable_content__expanded'
        ) ).toBe( true );
        expect( expandableDom1.classList.contains(
          'o-expandable_content__collapsed'
        ) ).toBe( false );
      }
    );

    it( 'should be collapsed when the expandable starts out expanded',
      () => {
        let collapseBeginFired = false;

        initialized2.addEventListener( 'collapseBegin', () => {
          collapseBeginFired = true;
        } );

        initialized2.toggleExpandable();

        expect( collapseBeginFired ).toBe( true );
        expect( expandableDom2.style.maxHeight ).toBe( '0' );
        expect( expandableDom2.classList.contains(
          'o-expandable_content__expanded'
        ) ).toBe( false );
        expect( expandableDom2.classList.contains(
          'o-expandable_content__collapsed'
        ) ).toBe( true );
      }
    );
  } );
} );
