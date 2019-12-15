var Parser = require('binary-parser').Parser;

var parser = new Parser()
	// Signed 32-bit integer (little endian)
	.int32le("a")
	// Unsigned 8-bit integer
	.uint8("b")
	// Signed 16-bit integer (big endian)
	.int16be("c");

var buf = Buffer.from('01020304990102', 'hex');

/*
	01_02_03_04 --> 04_03_02_01	(little endian) = 67305985

	0102 = 258
*/

console.log(parser.parse(buf));		// { a: 67305985, b: 153, c: 258 }