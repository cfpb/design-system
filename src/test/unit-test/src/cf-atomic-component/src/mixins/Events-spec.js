const srcPath = require( '../src-path' );
const Events = require( srcPath + '/mixins/Events' );

const HTML_SNIPPET = '<!DOCTYPE html>';

let mockEvent;
let spy1;
let spy2;

describe( 'Events', () => {

  beforeEach( () => {
    mockEvent = { events: {}};
    mockEvent = Object.assign( mockEvent, Events );
    spy1 = jest.fn();
    spy2 = jest.fn();
    document.body.innerHTML = HTML_SNIPPET;
  } );

  it( 'should add the correct methods to an object when mixed in', () => {
    expect( mockEvent.on ).toBeInstanceOf( Function );
    expect( mockEvent.off ).toBeInstanceOf( Function );
    expect( mockEvent.trigger ).toBeInstanceOf( Function );
  } );

  it( 'should correctly add event listeners', () => {
    mockEvent.on( 'click', spy1 );
    expect( mockEvent.events['click'][0] === spy1 ).toBe( true );
    mockEvent.on( 'click', spy2 );
    expect( mockEvent.events['click'][1] === spy2 ).toBe( true );
    expect( mockEvent.events.hasOwnProperty( 'click' ) ).toBe( true );
  } );

  it( 'should correctly trigger event listeners', () => {
    mockEvent = Object.assign( mockEvent, Events );
    mockEvent.on( 'click', spy1 );
    mockEvent.trigger( 'click' );
    expect( spy1 ).toHaveBeenCalled();
    expect( spy1 ).toHaveBeenCalled();
  } );

  it( 'should correctly remove event listeners', () => {
    mockEvent.on( 'click', spy1 );
    expect( mockEvent.events['click'][0] === spy1 ).toBe( true );
    mockEvent.on( 'click', spy2 );
    expect( mockEvent.events['click'][1] === spy2 ).toBe( true );
    mockEvent.off( 'click' );
    expect( mockEvent.events.hasOwnProperty( 'click' ) ).toBe( false );
    mockEvent.trigger( 'click' );
    expect( spy1 ).toHaveBeenCalledTimes( 0 );
    expect( spy2 ).toHaveBeenCalledTimes( 0 );
  } );
} );
