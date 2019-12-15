var mongoose = require('mongoose');

var sessionSchema = new moogoose.Schema({    
    _id: mongoose.ObjectId,  
    name: String,
    phone: String,
    email: String,
    password: String,
    avatarPath: String
});

var User = mongoose.model('User', userSchema, 'users');
//                         name     schema      collection name in DB

module.exports = User;