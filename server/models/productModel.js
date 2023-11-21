const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id:{
    type: mongoose.Schema.Types.ObjectId,
    unique:true,
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sellername:{
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;