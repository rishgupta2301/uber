const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const captainModel = require("../models/captain.model");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.authUser = async(req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; // these are the 2 places where we can find the token  if the user is logged in
    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }

    // checking if the token is present in the blackListed tokens, if it is then we will show unauthorized
    const isBlacklisted = await blacklistTokenModel.findOne({token: token});
    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id); // as int the userModel we are greating the token with just id so if we decode the token then also we will get the id and then find the user by that id

        req.user = user;
        return next();

    } catch (error) {
        return res.status(401).json({message:"Unauthorized"});
    }


}

module.exports.authCaptain = async( req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; 
    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token: token});
    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id); 
        req.captain = captain;
        return next();

    } catch (error) {
        return res.status(401).json({message:"Unauthorized"});
    }

}