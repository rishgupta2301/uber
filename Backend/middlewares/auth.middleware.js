const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.authUser = async(req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]; // these are the 2 places where we can find the token  if the user is logged in
    if(!token){
        res.status(401).json({message: 'Unauthorized'})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id); // as int the userModel we are greating the token with just id so if we decode the token then also we will get the id and then find the user by that id

        req.user = user;
        return next();

    } catch (error) {
        res.status(401).json({message:"Unauthorized"});
    }


}