// THIS IS THE ENVIRONMENT VARIABLE, just an object contains key-value pairs
// see line 27 and the .env file
// the .env contain secret environment variables, and SHOULD NOT be committed on Git (use gitinorge file)
require('dotenv').config();
//console.log(process.env);


var express = require('express');
var cookieParser = require('cookie-parser');

var userRoutes = require('./routes/users.route');
var authRoutes = require('./routes/auth.route');
var productRoutes = require('./routes/products.route');

var authMiddleware = require('./middlewares/auth.middleware');

var app = express();
var port = 3000;

// SETUP express app
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// => to use req.body

// SETUP view engine and folder
app.set('view engine', 'pug');
app.set('views', './views');

// SETUP cookie parser
app.use(cookieParser(process.env.SESSION_SECRET));	// we pass a string, called 'secret', to sign a cookie
								// see .env file
// SETUP root route
app.use('/auth', authRoutes);
app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/products', authMiddleware.requireAuth, productRoutes);	

// SETUP static files
app.use(express.static('public'));		// for demo, go to: http://localhost:3000/docs/TSL_C2.pdf	

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});

