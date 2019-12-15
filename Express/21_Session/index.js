/*
	When a new user requests to server, server will set a cookie that is a session id for that user
	Later, when the user requests again, server recognizes the session by the cookie sent by user
*/
require('dotenv').config();
var express = require('express');
var cookieParser = require('cookie-parser');

var userRoutes = require('./routes/users.route');
var authRoutes = require('./routes/auth.route');
var productRoutes = require('./routes/products.route');
var cartRoutes = require('./routes/cart.route');

var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddeware = require('./middlewares/session.middleware');

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
// SETUP common middlewares
app.use(sessionMiddeware);

// SETUP route
app.use('/auth', authRoutes);
app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/products', authMiddleware.requireAuth, productRoutes);	
app.use('/cart', authMiddleware.requireAuth, cartRoutes);

// SETUP static files
app.use(express.static('public'));		// for demo, go to: http://localhost:3000/docs/TSL_C2.pdf	

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});

/////////////////////////////////////
app.get('/', function(req, res){
	res.redirect('/users');
});

