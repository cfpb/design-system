import config from '../../../../../../packages/cfpb-atomic-component/src/utilities/config';

describe( 'config', () => {
  it( 'should return the proper configurations and constants', () => {
    expect( config.DIRECTIONS ).toBeInstanceOf( Object );
    expect( config.PREFIXES ).toBeInstanceOf( Object );
    expect( config.UNDEFINED ).toBeUndefined();
    expect( config.NO_OP_FUNCTION ).toBeInstanceOf( Function );
    // eslint-disable-next-line new-cap
    expect( config.NO_OP_FUNCTION() ).toBeUndefined();
  } );
} );
