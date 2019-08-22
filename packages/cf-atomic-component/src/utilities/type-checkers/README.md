# Type Checkers

 Utility functions for checking Javascript types and primitives.

## Example


### JS

```
var assert = require( 'assert' );
var typeCheckers = require( 'type-checkers' );

var UNDEFINED;

var date = new Date( 2011, 7, 21 );

function func() {
  return true;
}

var object = {
  a: '1',
  b: '2',
  c: '3'
};

assert.equal( typeCheckers.isUndefined( UNDEFINED ), true );
assert.equal( typeCheckers.isObject( object ), true );
assert.equal( typeCheckers.isFunction( func ), true );
assert.equal( typeCheckers.isDate( date ), true );
```

## Installation

```npm install type-checkers```

## Contributing

We welcome your feedback and contributions.
See the [contribution guidelines](CONTRIBUTING.md) for more details.

Additionally, you may want to consider
[contributing to the Capital Framework](https://cfpb.github.io/capital-framework/contributing/),
which is the front-end pattern library used in this project.

## Open source licensing info

1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
