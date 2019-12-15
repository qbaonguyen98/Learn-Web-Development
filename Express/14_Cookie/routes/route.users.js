var express = require('express');
var usersController = require('../controllers/controller.users');
var validate = require('../validation/users.validate');

var router = express.Router();


//GET
router.get('/users', usersController.index);

router.get('/test-cookie', function(req, res, next) {           // test cookie 
        res.cookie('user-id', 12345);
        res.send('Cookie sent from server');
});
        // after server response with the cookie, browser save it, and 
        // this cookie will be added into every later request 

router.get('/search', usersController.search);
router.get('/create', usersController.createGET);		
router.get('/:id', usersController.view);


// POST
router.post('/create', validate.postCreate, usersController.createPOST);	
        // validate.postCreate is a Middleware

module.exports = router;
