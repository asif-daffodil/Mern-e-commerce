const asyncHandler = require('express-async-handler');
const User=require('../models/consumerModel')
const Product=require('../models/productModel')
const Order = require('../models/orderModel');

// @desc      Create new order
// @route     POST /api/orders
// @access    Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    username,
    orderItems,
    shippingAddress,
    totalPrice,
  } = req.body;
    const usertrue= User.findOne({username})
    if(!usertrue){
        res.status(400);
        throw new Error("User not found")
    }
    else
    {
        if (orderItems && orderItems.length === 0) {
            res.status(400);
            throw new Error('No order items');
            return;
          } else {
            const order = new Order({
                username,
              orderItems,
              shippingAddress,
              totalPrice,
            });

            const createdOrder = await order.save();

            res.status(201).json(createdOrder);
          }
    }

});

module.exports = {
  addOrderItems,
};