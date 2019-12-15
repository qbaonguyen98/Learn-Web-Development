var express = require('express');
var productsController = require('../controllers/products.controller');
var router = express.Router();

router.get('/', productsController.index);


module.exports = router;