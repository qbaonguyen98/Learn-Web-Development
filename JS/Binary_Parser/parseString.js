// Module import
var Parser = require("binary-parser").Parser;

var example = new Parser()
	.string('zeroToNine', {
		length: 10,
		encoding: 'utf8'
	});

var buf = Buffer.from("30313233343536373839", "hex");

console.log(example.parse(buf));
/*
		{
			zeroToNine: '0123456789'
		}
*/
