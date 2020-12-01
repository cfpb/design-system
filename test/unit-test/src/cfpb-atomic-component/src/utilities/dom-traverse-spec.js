import { closest, queryOne } from '../../../../../../packages/cfpb-atomic-component/src/utilities/dom-traverse.js';

let testBlockA;
let testBlockB;
let testBlockC;
let testBlockD;
let UNDEFINED;

const HTML_SNIPPET = `
<section id="test-block-a">
  <div id="test-block-b">
    <div id="test-block-c" >
      <div id="test-block-d"></div>
    </div>
  </div>
</section>
`;

describe( 'Dom Traverse', () => {
  beforeEach( () => {
    document.body.innerHTML = HTML_SNIPPET;
    testBlockA = document.getElementById( 'test-block-a' );
    testBlockB = document.getElementById( 'test-block-b' );
    testBlockC = document.getElementById( 'test-block-c' );
    testBlockD = document.getElementById( 'test-block-d' );
  } );
  describe( 'queryOne()', () => {

    it( 'should return the first elem if the expr is a string', () => {
      const query = queryOne( 'div' );

      expect( query.id ).toBe( 'test-block-b' );
    } );

    it( 'should return the passed expr if it’s an object', () => {
      const obj = document.createElement( 'div' );
      obj.className = 'div-3';
      const query = queryOne( obj );

      expect( query.className ).toBe( 'div-3' );
    } );

    it( 'should return null if the elem doesn’t exist', () => {
      const query = document.querySelector( '.div-4' );

      expect( query ).toBeNull();
    } );
  } );

  describe( 'closest()', () => {
    it( 'should find the current DOM node if the node matches the selector',
      () => {
        let element = closest( testBlockD, 'div' );
        expect( element === testBlockD ).toBe( true );
        element = closest( testBlockD, 'div div' );
        expect( element === testBlockD ).toBe( true );
      }
    );

    it( 'should return null if a node isn\'t found', () => {
      let element = closest( testBlockA, '.test-block' );
      expect( element === null ).toBe( true );
      element = closest( testBlockA, 'div.test' );
      expect( element === null ).toBe( true );
    } );

    it( 'should return the correct parent node', () => {
      let element = closest( testBlockD, 'section' );
      expect( element === testBlockA ).toBe( true );
      element = closest( testBlockC, 'section > div' );
      expect( element === testBlockB ).toBe( true );
    } );

    it( 'should use the native closest method if it exists', () => {
      const spy = testBlockD.closest = jest.fn();
      closest( testBlockD, 'section' );
      expect( spy ).toHaveBeenCalled();
    } );

    it( 'should use the correct matches method', () => {
      const spy = jest.fn();

      /* Set the prototype to a generic object as deleting the "closest" method
      with `delete testBlockD.closest` does not work for some reason. */
      Object.setPrototypeOf( testBlockD, Object );
      testBlockD.matches = UNDEFINED;
      testBlockD.webkitMatchesSelector = spy;
      closest( testBlockD, 'section' );
      expect( spy ).toHaveBeenCalled();

      testBlockD.webkitMatchesSelector = UNDEFINED;
      spy.mockReset();
      testBlockD.mozMatchesSelector = spy;
      closest( testBlockD, 'section' );
      expect( spy ).toHaveBeenCalled();

      testBlockD.mozMatchesSelector = UNDEFINED;
      spy.mockReset();
      testBlockD.msMatchesSelector = spy;
      closest( testBlockD, 'section' );
      expect( spy ).toHaveBeenCalled();
    } );
  } );
} );
