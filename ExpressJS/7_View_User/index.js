var express = require('express');
var app = express();
var port = 3000;

// include lowdb
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var shortid = require('shortid');
var adapter = new FileSync('db.json');
var db = low(adapter);

// setup default values in db
// Set some defaults (required if your JSON file is empty)
db.defaults({users: []})
  .write();

// setup express app
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// => to use req.body

app.set('view engine', 'pug');
app.set('views', './views');

// Get data from database: db.json

// Setup request callback
// GET
app.get('/', function(req, res){
	res.render('index', {
		name: 'Reus Nguyen',
	});				
});

app.get('/users/index', function(req, res){			// URL: localhost:3000/users
	res.render('./users/index', {
		users: db.get('users').value()
	});
});
app.get('/users/search', function(req, res){
	console.log(req.query);			// see the request query, go to: localhost:3000/users/search?name=M&age=29
									// => log: {name: 'M', age: '29'}
	var queryName = req.query.name;
	// document.getElementById('userSearch').value = queryName;
	var matchedUsers = db.get('users').value().filter(function(user){
		return user.name.indexOf(queryName) !== -1;		// if queryName is not in user.name, indexOf() return -1
	});
	res.render('./users/index',{
		users: matchedUsers
	});
});	
app.get('/users/create', function(req, res){
	res.render('./users/create');
});		
app.get('/users/:id', function(req, res){
	var id = req.params.id;										// this is NEW !!! 
	var user = db.get('users').find({ id: id }).value();
	res.render('./users/view', {
		user: user
	});
})

// POST
app.post('/users/create', function(req, res){		// to handle POST method to this URL
	console.log(req.body);	// req.body is the data user send to server using POST method
	req.body.id = shortid.generate();		// assign unique id to new user
	db.get('users').push(req.body).write();
	res.redirect('index');		// turn back to users page
});				


app.listen(port, function(){
	console.log('Server listening on port ' + port);
});