var User = require('../models/users.model');

module.exports.requireAuth = async function(req, res, next) {
    if (!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }

    // find user with the id
    var user = await User.find({_id: req.signedCookies.userId});

    if(!user) {
        res.redirect('auth/login');
        return;
    }

    res.locals.user = user;     // this middleware is executed first in any route
    // => this local object will be delivered to the next component (may be another middleware or a controller)
    // and finally passed to the View
    
    next();
};