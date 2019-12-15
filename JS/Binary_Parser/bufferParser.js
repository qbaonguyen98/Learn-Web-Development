var Parser = require('binary-parser').Parser;

var parser1 = new Parser()
	.buffer('bufferData', {
		length: 32
	});


var buf = Buffer.from('FE80FE880F000000FB977F820700008000800000000000000000000000000000', 'hex');

console.log(parser1.parse(buf));
/*
	{
		bufferData: <Buffer fe 80 fe 88 0f 00 00 00 fb 97 7f 82 07 00 00 80 00 80 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
	}
*/

//---------------------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------');

var parser2 = new Parser()
	.buffer('bufferData', {
		length: 32,
		formatter: function (bits) {
			var funcs = [];
			for (var i = 0; i < 256; i++) {
				var n = i >> 3;
				var bit = 1 << (i & 0x7);		// i AND 000...0111 --> (i& 0x7) = 0,1,2...,7
				
				console.log(bits[n]);

				if ((bits[n] & bit) === bit) {
					funcs.push(i + 1);
				}
			}
			return funcs;
	}
});

console.log(parser2.parse(buf));