const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
  username: {
    type: String,
    ref: 'User',
    //required: true
  },
  items: [{
    productName: {
      type: String,
      ref: 'Product'
    },
    quantity: {
      type: Number,
     // required: true
    },
    price: {
      type: Number,
    //  required: true
    }
  }],
  createdOn: {
    type: Date,
    default: Date.now
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;




