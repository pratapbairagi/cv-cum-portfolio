const cloudinary = require("../config/cloudinary");
const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");


exports.userRegister = async (req, res, next) => {
    const { name, email, password, number } = req.body;

    console.log("reg", req.body)
    try {
        if (!name || !email || !password || !number) {
            return next(new ErrorHandler("All fields are required !", 403))
        }

        const userEmailExist = await User.findOne({ email: email });


        if (userEmailExist) {
            // throw Error("Email already exist !")
            return next(new ErrorHandler("Email already exist !", 403))
        };

        const isNumberExist = await User.findOne({ number })

        if (isNumberExist) {
            // throw Error("Number already exist !");
            // res.status(403).json({
            //     success : false,
            //     message : "Number already registered !"
            // })
            return next(new ErrorHandler("Number already registered !", 403))

        };

        const user = await User.create(req.body);

        const token = await user.generateWebToken();

        let cookieOptions =
        {
            httpOnly: true,
            maxAge: (30 * 24 * 60 * 60 * 1000)
        }

        res.status(201).cookie("jwt", token, cookieOptions).json({
            success: true,
            user: user,
            message: "regitster successful"

        })
    } catch (error) {
        console.log("error in registering user", error)
    }
};

exports.userLogin = async (req, res, next) => {
    console.log("login", req.body.email)
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new ErrorHandler("both fields are required !", 402))
        }
        let isUserExist = await User.findOne({ email });

    console.log("wrong ==> ", isUserExist)

        if (!isUserExist || isUserExist === null) {
            return next(new ErrorHandler(`Login credential does not match!`, 403))
        };

        let isPasswordMatch = await isUserExist.comparePassword(password);

        if (!isPasswordMatch) {
            return next(new ErrorHandler(`Login credential does not match!`, 403))
        }

        isUserExist = await User.findOne({ email }).select("-password");

        let token = await isUserExist.generateWebToken();

        console.log("token => ", token)

        let cookieOptions = {
            httpOnly: true,
            maxAge: (30 * 24 * 60 * 60 * 1000)
        }

        res.status(200).cookie("jwt", token, cookieOptions).json({
            user: isUserExist,
            message: "Logged in !",
            success: true
        })
    } catch (error) {
        // return next(new ErrorHandler(`Login credential does not match!`, 403))
      return console.log("login error", error)
    }
};

exports.userLogged = async (req, res, next) => {

    try {
        const user = await User.findById({ _id: req.user._id });

        if (!user) {
            // throw new Error("login required !");
            return next(new ErrorHandler("login required !", 400))
        }

        res.status(200).json({
            success: true,
            message: "",
            user: user
        })
    } catch (error) {

    }
}

exports.getUser = async (req, res, next) => {

    try {
        const isUserExist = await User.findOne({ _id: req.params.id });

        if (!isUserExist) {
            return next(new ErrorHandler("Number not registered !", 404))
        }

        res.status(200).json({
            success: true,
            user: isUserExist,
            message: "User found !"
        })

    } catch (error) {
        console.log(error)
    }
};

exports.editUser = async (req, res, next) => {
    try {
        // console.log(req.body);


        let user = await User.findOne({ _id: req.params.id });

        if (req.body.process === "add") {
            if (req.body.content.url !== undefined) {
                if (req.body.content.url.includes("data:image")) {

                    let result = await cloudinary.uploader.upload(req.body.content.url, {
                        folder: "portfolio"
                    });

                    let lastContentIdNumber = user[req.body.editingContentName][user[req.body.editingContentName].length - 1].id
                    user[req.body.editingContentName] = [...user[req.body.editingContentName], { ...req.body.content, id: lastContentIdNumber + 1, url: result.url, public_id: result.public_id }];
                }
            }
            else {
                let lastContentIdNumber = user[req.body.editingContentName][user[req.body.editingContentName].length - 1].id
                user[req.body.editingContentName] = [...user[req.body.editingContentName], { ...req.body.content, id: lastContentIdNumber + 1 }];

            }
        }
        if (req.body.process === "edit") {
            if (req.body.content.url !== undefined) {
                if (req.body.content.url.includes("data:image")) {
                    await cloudinary.uploader.destroy(req.body.content.public_id);

                    let result = await cloudinary.uploader.upload(req.body.content.url, {
                        folder: "portfolio"
                    });

                    let editingContent = user[req.body.editingContentName].filter((v, i) => v.id !== req.body.content.id );
                    editingContent = [...editingContent, {...req.body.content, url : result.url, public_id : result.public_id }]
                    user[req.body.editingContentName] = editingContent;
                }
                else{
                    let editingContent = user[req.body.editingContentName].filter((v, i) => v.id !== req.body.content.id );
                    editingContent = [...editingContent, req.body.content]
                    user[req.body.editingContentName] = editingContent;
                }

            }
            else {
                
                if(typeof user[req.body.editingContentName]){
                     editingContent = req.body.content
                }
                else{
                     editingContent = user[req.body.editingContentName].filter((v, i) => v.id !== req.body.content.id)
                    editingContent = [...editingContent, req.body.content]

                }
               
                user[req.body.editingContentName] = editingContent;
            }
        };

        if (req.body.process === "delete") {
            if (req.body.content.url !== undefined) {

                let editingContent = user[req.body.editingContentName].find((v, i) => v.id === req.body.content.id);

                if (!editingContent) {
                    return next(new ErrorHandler("content not found !", 404))
                }

                await cloudinary.uploader.destroy(editingContent.public_id);
                user[req.body.editingContentName] = user[req.body.editingContentName].filter(v => v.id !== editingContent.id)
            }
            else {
                let editingContent = user[req.body.editingContentName].filter((v, i) => v.id !== req.body.content.id)
                user[req.body.editingContentName] = editingContent;
            }
        }

        // console.log("user", user)

         user = await user.save();

         res.status(200).json({
            success : true,
            message : `${req.body.editingContentName} updated successfully !`,
            user 
         })

    } catch (error) {
        console.log("error =>> ", error)
    }
}

exports.getUsers = async () => {
    try {
    } catch (error) {

    }
};

exports.logoutme = async (req, res, next) => {
    try {
        
        let cookieOptions = {
            httpOnly : true,
            expires : new Date(Date.now())
        };


        res.status(200).cookie("jwt", null, cookieOptions).json({
            success : true,
            message : "logout !",
            user : {}
        })

        
    } catch (error) {
        
    }
}