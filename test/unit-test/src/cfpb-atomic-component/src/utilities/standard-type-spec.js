import {
  BEHAVIOR_PREFIX,
  DIRECTIONS,
  JS_HOOK,
  STATE_PREFIX,
  noopFunct
} from '../../../../../../packages/cfpb-atomic-component/src/utilities/standard-type.js';

describe( 'standard-type', () => {
  it( 'should return the proper configurations and constants', () => {
    expect( BEHAVIOR_PREFIX ).toBe( 'behavior_' );
    expect( JS_HOOK ).toBe( 'data-js-hook' );
    expect( noopFunct() ).toBeUndefined();
    expect( STATE_PREFIX ).toBe( 'state_' );
    expect( DIRECTIONS ).toBeInstanceOf( Object );
  } );
} );
