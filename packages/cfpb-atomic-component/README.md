# @cfpb/atomic-component [![Build Status](https://img.shields.io/travis/cfpb/design-system.svg)](https://travis-ci.org/cfpb/design-system) [![npm](https://img.shields.io/npm/v/@cfpb/atomic-component.svg?style=flat-square)](https://www.npmjs.com/package/@cfpb/atomic-component)

Design System atomic component micro-framework

This component can be used by itself, but it was made for Design System,
a front end framework developed at the
[Consumer Financial Protection Bureau](https://consumerfinance.gov).

## How to use this component

Detailed instructions can be found at the Design System
[documentation site](https://cfpb.github.io/design-system/).

## Utility descriptions

### object-assign

Utility used to copy Javascript object properties from one or more source objects to a target object

#### Example

```
var assert = require( 'assert' );
import { assign } from '../utilities/object-assign.js';
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

### Type Checkers

 Utility functions for checking Javascript types and primitives.

#### Example

```
var assert = require( 'assert' );
import typeCheckers from '../utilities/type-checkers.js';

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

## Getting involved

We welcome your feedback and contributions.

- [Find out about contributing](https://github.com/cfpb/design-system/blob/main/CONTRIBUTING.md)
- [File a bug](https://github.com/cfpb/design-system/issues/new?labels=bug)

---

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
