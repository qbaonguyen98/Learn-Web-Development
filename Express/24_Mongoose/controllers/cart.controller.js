var 

module.exports.addProduct = function(req, res, next) {
    var productId = req.params.productId;       // get the productId in query parameters
    var sessionId = req.signedCookies.sessionId;

    if (!sessionId) {
        res.redirect('/products');     
        return;
    }

    // if the sessionId exists
    var count = db.get('sessions')
        .find({ sessionId: sessionId })
        .get('cart.' + productId, 0)    // if get nothing, make it 0 
        .value();

    db.get('sessions')
        .find({ sessionId: sessionId }) // find the object { sessionId: sessionId }
        .set('cart.' + productId, count+1)    // add 'cart' object as a property of the above object
                                        // cart: { productId: count+1 }
        .write();  // to update database
    res.redirect('/products');
};

module.exports.viewCart = function(req, res, next) {
    // sessionId is always exist, we have a middleware to set it if not available
    var sessionId = req.signedCookies.sessionId;
    var orderedProducts = [];

    var session = db.get('sessions')
                    .find({sessionId: sessionId})
                    .value();

    var cart = session.cart;
    
    if (cart !== undefined){
        for (var productId in cart) {
            var orderedProduct = db.get('products')
                                    .find({ id: productId }).value();

            // append the quantity to the product object
            orderedProduct['quantity'] = cart[productId].toString();
            
            orderedProducts.push(orderedProduct);
        }

        res.render('cart/view', {
            orderedProducts: orderedProducts
        });
        return;
    }
    res.redirect('/products');
}