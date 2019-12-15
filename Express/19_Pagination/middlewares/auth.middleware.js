var db = require('../db');

module.exports.requireAuth = function(req, res, next) {
    if (!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }

    // find user with the id
    var user = db.get('users').find({ id: req.signedCookies.userId }).value();
    //console.log(user);

    if(!user) {
        res.redirect('auth/login');
        return;
    }

    res.locals.user = user;     // the middleware is executed first in any route
    // => this local object will be delivered to the next component (may be another middleware or a controller)
    // and finally passed to the View
    
    next();
};