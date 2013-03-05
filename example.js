var arraystack = require('./lib/ArrayStack.js')
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

