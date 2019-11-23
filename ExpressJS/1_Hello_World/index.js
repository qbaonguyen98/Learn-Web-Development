var express = require('express');
var app = express();				// create a server

var port = 3000;

app.get('/', function(req, res){			
	res.send('<h1>Hello World</h1><a href="/users">Users</a>');		
	// this .get method define: what server response when
	// users send GET request (they enter the link) with the URL '/' (root URL)
});

app.get('/users', function(req, res){			// URL: localhost:3000/users
	res.send('<strong>User Lists</strong>');
});

app.listen(port, function(){
	console.log('Server listening on port ' + port);		
});		// method .listen() get 2 arguments: port and callback when it is ready to begin listening 
		// (server's starting process completed)


// HOW TO RESPONSE .html, css, .... files ???

// => next lessions
