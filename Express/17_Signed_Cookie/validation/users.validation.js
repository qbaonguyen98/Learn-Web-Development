module.exports.postCreate = function(req, res, next) {
    // validation
	var errors = [];
	if (!req.body.name){
		errors.push('Invaid Name !');
	}
	if (!req.body.phone){
		errors.push('Invaid Phone Number !');
	}
	if (errors.length){
		res.render('users/create', {
			errors: errors,
			inputValue: req.body
		});
		return;
    }
    // use 'res.locals' to send object from a middleware to the next middleware
    res.locals.success = true; 
    
    next();     //if no error --> move to the next middleware / or the controller method
}