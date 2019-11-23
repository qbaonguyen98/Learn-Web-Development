// This lesson show how to reorganize the previous project
var express = require('express');

//var db = require('./db.js')
var userRoutes = require('./routes/users.js')

var app = express();
var port = 3000;

// SETUP express app
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// => to use req.body

// SETUP view engine and folder
app.set('view engine', 'pug');
app.set('views', './views');

// SETUP root route
app.get('/', function(req, res){
	res.render('index', {
		name: 'Reus Nguyen'
	});
});
app.use('/users', userRoutes);			

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});

