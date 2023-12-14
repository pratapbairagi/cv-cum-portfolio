const express = require("express");
const http = require("http");
const { dbConnection } = require("./db_connection/db_connection");
const userRoute = require("./routes/user");
const cors = require("cors");
const cookieparser = require("cookie-parser")
const globalError = require("./middleware/globalError");
const app = express(http);
const path = require("path");
const bodyParser = require("body-parser");

const PORT = 5566;

app.use(cors({
   credentials : true,
   origin : [ "http://localhost:3000","http://localhost:5566", "https://cv-cum-portfolio.vercel.app"],
   methods: "GET, POST, PUT, DELETE",
   allowedHeaders: "Content-Type, Authorization"
 }));

app.use(express.urlencoded({ extended : true, limit : "2mb"}))
app.use(express.json({ extended : true, limit : "25mb"}))
app.use(cookieparser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true }));


app.use("/portfolio", userRoute)

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req,res)=>{
   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

app.use(globalError)
dbConnection()

app.listen(PORT, ()=>{
   console.log( `http://localhost:${PORT}` )
})