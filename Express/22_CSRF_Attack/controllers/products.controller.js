var db = require('../db.js');

module.exports.index = function(req, res) {
    var products = db.get('products').value();
    
    /*
        page = x
        we display n items per page
        => slice from (x-1)*n to [(x-1)*n + n] = n*x
    */
    var page = parseInt(req.query.page) || 1;
    var n = 8;
    
    var start = (page - 1) * n;
    var end = page * n;
    
    var parsedProducts = products.slice(start, end);
    //console.log(parsedProducts);
    res.render('products/index', {
        products: parsedProducts,
        renderPage: page
    });
}