var Parser = require("binary-parser").Parser;

var parser = new Parser()
	// Statically sized array
	.array("data", {				// 8 elements, 1 element takes 4 bytes
		type: "uint8",
		length: 8
	});

var buf = Buffer.from("3031323334353637", "hex");

console.log(parser.parse(buf));
/*
	{ 
		data: [
    		48, 49, 50, 51,
    		52, 53, 54, 55
  		]
  	}

	explaination --> 30 = 0011_0000 = 48
*/
