const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// Controller function to get all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Controller function to get a single product by ID
const getProductById = asyncHandler(async (req, res) => {
  const{name}=req.body
  const product = await Product.find({name});

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// Controller function to create a new product
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, image,sellername } = req.body;

  const product = new Product({
    name,
    description,
    price,
    image,
    sellername
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

module.exports = { getProducts, getProductById, createProduct };

