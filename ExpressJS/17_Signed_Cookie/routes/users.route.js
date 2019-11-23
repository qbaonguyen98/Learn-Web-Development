var express = require('express');
var usersController = require('../controllers/users.controller');
var validate = require('../validation/users.validation');

var router = express.Router();


//GET
router.get('/', usersController.index);

router.get('/test-cookie', function(req, res, next) {           // test cookie 
        res.cookie('user-id', 12345);
        res.send('Cookie sent from server');
});
        // after server response with the cookie, browser save it, and 
        // this cookie will be added into every later request 

router.get('/search', usersController.search);
router.get('/create', usersController.createGET);		
router.get('/user/:id', usersController.view);


// POST
router.post('/create', validate.postCreate, usersController.createPOST);	
        // validate.postCreate is a Middleware

module.exports = router;
