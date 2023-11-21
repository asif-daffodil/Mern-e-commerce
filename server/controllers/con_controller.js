const { request } = require("express")
const asyncHandler = require('express-async-handler');
const User=require("../models/consumerModel");
const generateToken=require("../config/generateToken");
const registerUser=asyncHandler( async (req,res)=>{
    const{username,email,password,phone}= req.body
    if (!username||!email||!password||!phone) {
        res.status(400);
        console.log(Error)
        throw new Error("Please provide proper Field")
    }
    const userExists= await User.findOne({email});
    if (userExists) {
        res.status(400)
        throw new Error("User already Exists");

    }
    const user = User.create(
        {
           username,
            email,
            password,
            phone,
        }
    )
    if(user){
        res.status(201).json({
            _id:user._id,
            username:user.username,
            password:user.password,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Failed to register")
    }
    console.log(username,password,email,phone,)
    })
    const authUser=asyncHandler(async(req,res)=>{
        const{email,password}=req.body;
        const user= await User.findOne({email})
        if(user && (await user.matchpassword(password))){
            res.json({
                _id:user._id,
            username:user.username,
            email:user.email,
            phone:user.phone,
        //token:generateToken(user._id)
            })
            console.log("login Confirmed")
        }
        else
        {
            console.log(Error)
            throw new Error("Uername or  Password is incorrect")
        }
    })
    module.exports = {registerUser,authUser}
    exports.registerUser = registerUser
    exports.authUser=authUser