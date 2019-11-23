var db = require('../db.js');
var shortid = require('shortid');

module.exports.index = function(req, res){			// URL: localhost:3000/users
	res.render('users/users', {
		users: db.get('users').value()
	});
};

module.exports.search = function(req, res){
	console.log(req.query);			// see the request query, go to: localhost:3000/users/search?name=M&age=29
									// => log: {name: 'M', age: '29'}
	var queryName = req.query.name;
	// document.getElementById('userSearch').value = queryName;
	var matchedUsers = db.get('users').value().filter(function(user){
		return user.name.indexOf(queryName) !== -1;		// if queryName is not in user.name, indexOf() return -1
	});
	res.render('users/users',{
		users: matchedUsers
	});
};

module.exports.createGET = function(req, res){
	res.render('users/create');
};

module.exports.view = function(req, res){
	var id = req.params.id;										// this is NEW !!! 
	var user = db.get('users').find({ id: id }).value();
	res.render('users/view', {
		user: user
	});
};

module.exports.createPOST = function(req, res){		// to handle POST method to this URL
	console.log(req.body);	// req.body is the data user send to server using POST method
	req.body.id = shortid.generate();		// assign unique id to new user
	db.get('users').push(req.body).write();
	res.redirect('users');		// turn back to users page
};

