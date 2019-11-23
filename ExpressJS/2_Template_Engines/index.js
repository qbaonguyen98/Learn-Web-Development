// This lession is about Pug (template engine)

var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'pug');	// setup template engine
app.set('views', './views');	// setup views folder


// .render() get 2 arguments: 
// 		- 1 is the pug view file to render
//		- 2 is the object contain key-value that can be render in the view file, see index.pug for details

app.get('/', function(req, res){
	res.render('index.pug', {
		name: 'Reus Nguyen',
	});				
});

app.get('/users', function(req, res){			// URL: localhost:3000/users
	res.render('users.pug', {
		users: [						// this 'users' var is used in users.pug
			{name: 'Marco Reus'},
			{name: 'Toni Kroos'}
		]
	})
});

app.listen(port, function(){
	console.log('Server listening on port ' + port);
})