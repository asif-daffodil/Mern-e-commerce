const express = require('express');
const {registerUser,authUser} = require("../controllers/con_controller");
const{getProducts,getProductById}=require('../controllers/product_controller')
const{addToCart}=require('../controllers/cart_controllers')
const{addOrderItems}=require('../controllers/order_controller')
const router = express.Router();
console.log(`registerUser${registerUser}`)
router.post('/',registerUser);
router.post('/login',authUser)
router.post('/cart',addToCart)
router.post('/product',getProducts)
router.post('/search',getProductById)
router.post('/order',addOrderItems,)
module.exports = router