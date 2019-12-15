var express = require('express');
var usersController = require('../controllers/controller.users');

var router = express.Router();


//GET
router.get('/users', usersController.index);

router.get('/search', usersController.search);

router.get('/create', usersController.createGET);		

router.get('/:id', usersController.view)

// POST
router.post('/create', usersController.createPOST);				

module.exports = router;
