// formatter is a common option for any parser

var Parser = require("binary-parser").Parser;

var parser = new Parser()
	.array("ipv4", {
		type: 'uint8',
		length: 4,
		formatter: function(arr) {
			return arr.join(".");			// format result as a string
		}
	});

var buf = Buffer.from('31323434', 'hex');

console.log(parser.parse(buf));