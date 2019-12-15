var moogoose = require('mongoose');

var productSchema = new moogoose.Schema({  
    _id: mongoose.ObjectId,    
    name: String,
    image: String,
    description: String,
    price: String,
    quantity: String
});

var Product = moogoose.model('Product', productSchema, 'products');
//                         name     schema      collection name in DB

module.exports = Product;