# Dom-closest

Utility for finding the closest parent of the current element (or the current element itself) which matches the selector.

## Example


### HTML

```
<div id="test-block-a" class="test-class test-class-a">
 	<div id="test-block-b" class="test-class-b" >
		<div id="test-block-c" class="test-class-c"></div>
	</div>
</div>;
```

### JS

```
var assert = require( 'assert' );
var closest = require( '@cfpb/dom-closest' ).closest;
var testBlockA = document.getElementById( 'test-block-a' );
var testBlockB = document.getElementById( 'test-block-b' );
var element = domClosest( testBlockB, 'div' );

assert( element === testBlockB, true );
element = domClosest( testBlockB, '.test-class' );
assert( element === testBlockA );
```

## Installation

```npm install @cfpb/dom-closest```

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
