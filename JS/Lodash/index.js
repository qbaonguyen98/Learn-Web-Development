const _ = require('lodash');

// ------------------------------- .forEach -----------------------------------------
_.forEach(
	{ 
		'one': 1, 
		'two': 2, 
		'three': 3 
	}, 
	(value, key) => {			// if we pass only 1 argument --> It will be the value!
		console.log(value);
		console.log(key);
	}
);

// ------------------------------- .forEach -----------------------------------------

function foo (commandClass) {
	
}