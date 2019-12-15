var Parser = require('binary-parser').Parser;

var parser1 = new Parser()
	.string('age', {
		length: 2,
		encoding: 'utf8'
	});


var parser2 = new Parser()
	// Statically sized array
	.string("name", {
		length: 4,	
		encoding: 'utf8'
	});


var parser = new Parser().uint8("tagValue").choice("data", {
  tag: "tagValue",		// tag is used to determine which parser to use
  choices: {
    1: parser1, // if tagValue == 1, execute parser1
    2: parser2, // if tagValue == 4, execute parser2
  }
});

var buf1 = Buffer.from('013231', 'hex');
console.log(parser.parse(buf1));				// { tagValue: 1, data: { age: '21' } }

var buf2 = Buffer.from('0252657573', 'hex');
console.log(parser.parse(buf2));				// { tagValue: 2, data: { name: 'Reus' } }







































