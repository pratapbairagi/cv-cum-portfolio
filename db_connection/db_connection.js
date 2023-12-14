const mongoose = require("mongoose");

exports.dbConnection = async (url = 'mongodb+srv://portfolio:18May1994@cluster0.5qgqh.mongodb.net/portfolio?retryWrites=true&w=majority') => {

    try {
        mongoose.set({strictQuery : true})
        mongoose.connect(url).then((res)=>{
            console.log("mongo db connected")
        }).catch((er)=>{
            console.log("mnogoose db error", er)
        })
        
    } catch (error) {
        console.log("connection error", error)
    }
}

