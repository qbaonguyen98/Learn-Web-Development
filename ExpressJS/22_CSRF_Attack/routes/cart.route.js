var express = require('express');
var cartController = require('../controllers/cart.controller');

var router = express.Router();

router.get('/add/:productId', cartController.addProduct);
router.get('/view', cartController.viewCart);

module.exports = router;