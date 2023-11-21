const asyncHandler = require('express-async-handler');
const Seller = require('../models/sellerModel');

// Create a new seller
const createSeller = asyncHandler(async (req, res) => {
  const { username, email, password,} = req.body;

  const seller = new Seller({
    username,
    email,
    password,
  });

  const createdSeller = await seller.save();

  res.status(201).json(createdSeller);
});
 const authseller = asyncHandler(async (req, res) => {
   const { email, password } = req.body;
   const seller = await Seller.findOne({ email });
   if (seller && (await seller.matchPassword(password))) {
     res.json({
       _id: seller._id,
       username: seller.username,
       email: seller.email,
     });
   } else {
     res.status(401);
     throw new Error('Invalid email or password');
   }
 });

module.exports = { createSeller,authseller };
exports.createSeller=createSeller
exports.authseller=authseller