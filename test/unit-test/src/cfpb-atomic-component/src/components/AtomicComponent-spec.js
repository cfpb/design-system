import AtomicComponent from '../../../../../../packages/cfpb-atomic-component/src/components/AtomicComponent';

const HTML_SNIPPET = `
<div id="test-block-a" class="test-class">
  <div id="test-block-b" class="test-class">
    <div id="test-block-c" class="test-class"></div>
 </div>
</div>
<div id="test-block-d" class="test-class">
  <div id="test-block-e" class="test-class">
    <div id="test-block-f" class="test-class"></div>
 </div>
</div>
`;

describe( 'AtomicComponent', () => {

  beforeEach( () => {
    document.body.innerHTML = HTML_SNIPPET;
  } );

  it( 'should correctly create an Atomic Component instance', () => {
    const element = document.getElementById( 'test-block-a' );
    const initialize = jest.fn();
    const options = {
      initialize: initialize,
      events:     {
        keydown: 'keyAction'
      },
      keyAction: jest.fn()
    };

    const atomicComponent = new AtomicComponent( element, options );
    expect( atomicComponent.element === element ).toBe( true );
    expect( atomicComponent.events ).toBeInstanceOf( Object );
    expect( initialize ).toHaveBeenCalledTimes( 1 );
    expect( atomicComponent.uId.indexOf( 'ac' ) > -1 ).toBe( true );
    expect( atomicComponent.render() === atomicComponent ).toBe( true );
  } );

  it( 'should correctly attach an element', () => {
    let atomicComponent = new AtomicComponent();
    expect( atomicComponent.element.tagName === 'DIV' ).toBe( true );
    const element = document.createElement( 'span' );
    atomicComponent = new AtomicComponent( element );
    expect( atomicComponent.element.tagName === 'SPAN' ).toBe( true );
    atomicComponent = new AtomicComponent( '',
      { id: 'test_id', className: 'test_class_name' }
    );
    expect( atomicComponent.element.id === 'test_id' ).toBe( true );
    expect( atomicComponent.element.className === 'test_class_name' ).toBe( true );
  } );

  it( 'should correctly create sub classes', () => {
    const subComponent = new ( AtomicComponent.extend( {} ) )();
    expect( subComponent._super === AtomicComponent.prototype ).toBe( true );
    expect( subComponent instanceof AtomicComponent ).toBe( true );
  } );

  it( 'should add the bound attribute to passed elements', () => {
    const element = document.getElementById( 'test-block-a' );
    const atomicComponent = new AtomicComponent( element );
    expect( atomicComponent.element.hasAttribute( 'data-js-hook' ) ).toBe( true );
  } );

  it( 'should initialize all instances in the DOM', () => {
    const TestComponent = AtomicComponent.extend( {
      ui: {
        base: '.test-class'
      }
    } );

    const testComponents = TestComponent.init();
    expect( testComponents.length ).toBe( 6 );
    expect( testComponents[0].element.id ).toBe( 'test-block-a' );
    expect( testComponents[1].element.id ).toBe( 'test-block-b' );
    expect( testComponents[2].element.id ).toBe( 'test-block-c' );
    expect( testComponents[3].element.id ).toBe( 'test-block-d' );
    expect( testComponents[4].element.id ).toBe( 'test-block-e' );
    expect( testComponents[5].element.id ).toBe( 'test-block-f' );
  } );

  it( 'should initialize scoped instances in the DOM', () => {
    const TestComponent = AtomicComponent.extend( {
      ui: {
        base: '.test-class'
      }
    } );

    const testComponents = TestComponent.init(
      document.querySelector( '#test-block-d' )
    );
    expect( testComponents.length ).toBe( 2 );
    expect( testComponents[0].element.id ).toBe( 'test-block-e' );
    expect( testComponents[1].element.id ).toBe( 'test-block-f' );
  } );
} );
