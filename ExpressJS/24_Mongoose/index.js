/*
	CSRF protection:

	Assume that you have a form to transfer money like this:	form(action="/tranfers/create" method="POST")

		=> hackers can create an html page width another form that has action="yourURL/tranfers/create" and POST method

		Using this, hackers can fake your money tranfer activity 

	=> Add csrf token to forms to avoid it. But How can it solve the problem ???

		=> when user visits your site, the token will be added to the form by server. Then, when user submits the form, server will recognize the token.
		Hackers use their own site to submit another form => no / invalid token
*/
require('dotenv').config();
var express = require('express');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');

var userRoutes = require('./routes/users.route');
var authRoutes = require('./routes/auth.route');
var productRoutes = require('./routes/products.route');
var cartRoutes = require('./routes/cart.route');
var transferRoutes = require('./routes/transfer.route');

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
app.use(csrf({ cookie: true }));	// must after cookieParser, this return a middleware

// SETUP common middlewares
app.use(sessionMiddeware);

// SETUP route
app.use('/auth', authRoutes);
app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/products', authMiddleware.requireAuth, productRoutes);	
app.use('/cart', authMiddleware.requireAuth, cartRoutes);
app.use('/transfer', authMiddleware.requireAuth, transferRoutes);

// SETUP static files
app.use(express.static('public'));		// for demo, go to: http://localhost:3000/docs/TSL_C2.pdf	

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});

/////////////////////////////////////
app.get('/', function(req, res){
	res.redirect('/users');
});

