const jsonwebtoken = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
    try {


        let {jwt} = req.cookies;
        if(jwt == null || jwt == undefined){
            return next( new ErrorHandler("Session expired !"))
        };
        

        let key = "uurfb75d6d&@BYFfb&IyuBFyibd6bw5465o78^P(N(:I5bk*r97r6br&"
        let {id} = jsonwebtoken.verify(jwt, key);

        let isUserExist = await User.findOne({_id : id});

        if(!isUserExist){
            return next( new ErrorHandler("Need to login !"))
        };

        req.user = isUserExist;

        return next()
    } catch (error) {
        
    }
};

module.exports = userAuth