var express = require('express');
var app = express();
var port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// => to use req.body

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
	res.render('index', {
		name: 'Reus Nguyen',
	});				
});

app.get('/users/index', function(req, res){			// URL: localhost:3000/users
	res.render('./users/index', {
		users: users				// the 2nd argument in render() must be an object
	});
});

app.get('/users/search', function(req, res){
	console.log(req.query);			// see the request query, go to: localhost:3000/users/search?name=M&age=29
									// => log: {name: 'M', age: '29'}
	var queryName = req.query.name;
	// document.getElementById('userSearch').value = queryName;
	var matchedUsers = users.filter(function(user){
		return user.name.indexOf(queryName) !== -1;		// if queryName is not in user.name, indexOf() return -1
	});
	res.render('./users/index',{
		users: matchedUsers
	});
});	

app.get('/users/create', function(req, res){
	res.render('./users/create');
});		

app.post('/users/create', function(req, res){		// to handle POST method to this URL
	console.log(req.body);	// req.body is the data user send to server using POST method
	users.push(req.body);
	res.redirect('index');		// turn back to users page
});				


app.listen(port, function(){
	console.log('Server listening on port ' + port);
});