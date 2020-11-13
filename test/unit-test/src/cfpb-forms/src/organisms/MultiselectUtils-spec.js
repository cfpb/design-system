import MultiselectUtils from '../../../../../../packages/cfpb-forms/src/organisms/MultiselectUtils.js';
let array;
let index;

describe( 'MultiselectUtils', () => {

  describe( 'indexOfObject()', () => {

    it( 'should return -1 if the array is empty', () => {
      array = [];
      index = MultiselectUtils.indexOfObject( array, 'foo' );

      expect( index ).toBe( -1 );
    } );

    it( 'should return -1 if there is no match', () => {
      array = [
        { value: 'bar' },
        { value: 'baz' }
      ];
      index = MultiselectUtils.indexOfObject( array, 'value', 'foo' );

      expect( index ).toBe( -1 );
    } );

    it( 'should return the matched index', () => {
      array = [
        { value: 'foo' },
        { value: 'bar' },
        { value: 'baz' }
      ];
      index = MultiselectUtils.indexOfObject( array, 'value', 'foo' );

      expect( index ).toBe( 0 );
    } );
  } );

  describe( 'create()', () => {
    beforeAll( () => {
      const heading = MultiselectUtils.create( 'h1', {
        'textContent': 'Create Heading Text',
        'id':          'create-heading-id',
        'className':   'create-heading-class',
        'data-name':   'create-heading-data'
      } );

      MultiselectUtils.create( 'span', {
        'textContent': 'Heading Span',
        'id':          'create-span-id',
        'className':   'create-span-class',
        'data-name':   'create-span-data',
        'inside':      heading
      } );

      document.body.appendChild( heading );

      MultiselectUtils.create( 'div', {
        'id':        'create-div-id',
        'className': 'create-div-class',
        'data-name': 'create-div-data',
        'around':    heading
      } );
    } );

    it( 'should create a single elem', () => {
      const query = document.querySelector( 'h1' );

      expect( query.id ).toBe( 'create-heading-id' );
      expect( query.className ).toBe( 'create-heading-class' );
      expect( query.getAttribute( 'data-name' ) ).toBe( 'create-heading-data' );
    } );

    it( 'should create an elem inside another', () => {
      const query = document.querySelector( 'span' );

      expect( query.textContent ).toBe( 'Heading Span' );
      expect( query.id ).toBe( 'create-span-id' );
      expect( query.className ).toBe( 'create-span-class' );
      expect( query.getAttribute( 'data-name' ) ).toBe( 'create-span-data' );
    } );

    it( 'should create an elem around another', () => {
      const query = document.querySelector( 'div' );

      expect( query.id ).toBe( 'create-div-id' );
      expect( query.className ).toBe( 'create-div-class' );
      expect( query.getAttribute( 'data-name' ) ).toBe( 'create-div-data' );
    } );
  } );
} );
