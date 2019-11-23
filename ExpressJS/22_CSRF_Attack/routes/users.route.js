var express = require('express');
var multer = require('multer');

var usersController = require('../controllers/users.controller');
var validate = require('../validation/users.validation');

var router = express.Router();
// set updoad directory, all upload files will be saved here
var upload = multer({ dest: './public/uploads/'});      // roor dir that multer interprete
                                                        // is the folder contain project          


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
router.post('/create', 
        upload.single('avatar'),          // upload 1 file, the name of submitted form-group is
        validate.postCreate,              // the same as the one in /users/create.pug      
        usersController.createPOST);	

module.exports = router;
