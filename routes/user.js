const express = require("express");
const { userRegister, getUser, userLogin, userLogged, editUser, logoutme, searchPortfolio } = require("../controllers/users");
const userAuth = require("../middleware/userAuth");

const userRoute = express();

userRoute.route("/register").post(userRegister);
userRoute.route("/login").post(userLogin);
userRoute.route("/loggedme").get(userAuth, userLogged)
userRoute.route("/user/:id").get(getUser)
userRoute.route("/resume/edit/:id").put(editUser)
userRoute.route("/logoutme").get(userAuth, logoutme)
userRoute.route("/search").post( searchPortfolio);

module.exports = userRoute;