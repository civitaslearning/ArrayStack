ArrayStack
==========

Stack like interface for array.


## Example

```javascript
var arraystack = require('ArrayStack')
	, util = require('util');

var myStack;

arraystack.init(['item 1', 'item 2'], function (err, data) {
	if (err) {
		console.error('Error received');
		console.dir(err);
	}
	else {
		myStack = data;
		myStack.add('pushed data');

		console.log('data   : %s', util.inspect(myStack.toArray()));
		console.log('first  : %s', myStack.first());
		console.log('last   : %s', myStack.last());
		console.log('poppped: %s', myStack.pop());
		console.log('data   : %s', util.inspect(myStack.toArray()));
	}
});
```
#### Output
```
data   : [ 'item 1', 'item 2', 'pushed data' ]
first  : item 1
last   : pushed data
poppped: pushed data
data   : [ 'item 1', 'item 2' ]
```

## Installation

```
npm install https://github.com/civitaslearning/ArrayStack/tarball/master
```

## Usage

### Include module

```javascript
var arraystack = require('ArrayStack');
```

### Initialize stack object

#### init(&lt;config&gt;,&lt;callback&gt;)
**config**
Accepts an array or a configuration object. Passing an array will initialize
the data to the contents of the array. The configuration object has the
following format:

```
{
	maxLength: 10,
	data: []
}
```

**callback**
Callback function. Any errors encountered will be passed in "err". The
resulting ArrayStack object will be passed in "data".

```javascript
arraystack.init([], function (err, data) {

});
```

#### ArrayStack.configure(&lt;config&gt;)
You can call the ArrayStack object's configure method directly. The "config"
parameter accepts data in the same format as the init() method above.

#### ArrayStack.setData(&lt;data&gt;)
You can call the ArrayStack object's setData method directly. Pass an array
and the object's data will be set to a copy of the array's contents.

#### ArrayStack.push(&lt;data&gt;)
Push the passed data onto the object's stack. ArrayStack.add is an alias for
this method.

#### ArrayStack.pop()
Remove the last element from the stack and return it. ArrayStack.remove is an
alias for this method.

#### ArrayStack.first()
Return the first / oldest element in the stack.

#### ArrayStack.last()
Return the last / newest element in the stack.

#### ArrayStack.toArray()
Return the data in the stack as an array.
