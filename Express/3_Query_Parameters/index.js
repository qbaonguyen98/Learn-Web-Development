var express = require('express');
var app = express();
var port = 3000;

// Setup view engine and view folder
app.set('view engine', 'pug');
app.set('views', './views');

// Data
var users = [
	{id: 1, name: 'Marco Reus'},
	{id: 2, name: 'Toni Kroos'}
];

// Setup request callback

app.get('/', function(req, res){
	res.render('index.pug', {
		name: 'Reus Nguyen',
	});				
});

app.get('/users', function(req, res){			// URL: localhost:3000/users
	res.render('users.pug', {
		users: users				// the 2nd argument in render() must be an object
	});
});

app.get('/users/search', function(req, res){
	console.log(req.query);			// see the request query, go to: localhost:3000/users/search?name=M&age=29
									// => log: {name: 'M', age: '29'}
	var queryName = req.query.name;
	// document.getElementById('userSearch').value = queryName;
	var matchedUsers = users.filter(function(user){
		return user.name.indexOf(queryName) !== -1;				// if queryName is not in user.name, indexOf() return -1
	});
	res.render('users.pug',{
		users: matchedUsers
	});
});									


app.listen(port, function(){
	console.log('Server listening on port ' + port);
});