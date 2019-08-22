# object-assign

Utility used to copy Javascript object properties from one or more source objects to a target object

## Example


### JS

```
var assert = require( 'assert' );
var assign = require( 'object-assign' ).assign;
var testObjectA = {
    str:  'test',
    func: function() { return 'testStr'; },
    num:  1
 };
 var testObjectB = {
    obj:   { test: 2 },
    arr:   [ 3 ],
   	_null: null
 };
 assign( testObjectA, testObjectB );
 assert( testObjectA.hasOwnProperty( 'obj' ), true ) ;
 assert( testObjectA.hasOwnProperty( 'arr' ) );
 assert( testObjectA.hasOwnProperty( '_null' ), true );
```

## Installation

```npm install @cfpb/object-assign```

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
