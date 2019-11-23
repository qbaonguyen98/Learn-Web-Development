// This lesson show how to reorganize the previous project
var express = require('express');
var userRoutes = require('./routes/route.users');
var homeController = require('./controllers/controller.home');

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
app.get('/', homeController.index);
app.use('/users', userRoutes);	

// SETUP static files
app.use(express.static('public_files'));		// for demo, go to: http://localhost:3000/docs/TSL_C2.pdf	

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});

