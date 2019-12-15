var md5 = require('md5');
var User = require('../models/users.model');

module.exports.login = function(req, res) {
    res.render('auth/login', {
        csrfToken: req.csrfToken()
    });
};

module.exports.postLogin = async function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    var user = await User.find({email: email});

    if (!user) {
        res.render('auth/login', {
            errors: [
                'User does not exist.'
            ],
            inputValue: req.body
        });
        return;
    }

    var hashedPassword = md5(password); // get md5 hash password to compare with the one in database

    user = user[0];

    if (user.password !== hashedPassword) {
        res.render('auth/login', {
            errors: [
                'Wrong password.'
            ],
            inputValue: req.body
        });
        return;
    }

    res.cookie('userId', user._id, {
        signed: true
    });
    res.redirect('/users');
};