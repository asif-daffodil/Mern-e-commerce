const jwt = require("jsonwebtoken");
const generateToken = (id)=>{
return jwt.sign({id},`${process.env.JWT_SECRETS}`,{
    expiresIn:"30d",
})
}
module.exports={generateToken}
exports.generateToken=generateToken