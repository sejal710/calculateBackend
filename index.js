
const express = require("express");
const {connection} = require("./db")
require('dotenv').config()
const cors = require('cors');
const {userRouter} = require("./Routes/user.Routes")
const {authetication} = require("./middleware/authenticated")
const {calcuRouter} = require("./Routes/calculator.Routes")

const app = express();
app.use(cors());

app.use(express.json());

app.use("/user",userRouter)
app.use(authetication)
app.use("/calculate",calcuRouter)

app.get("/",(req,res)=>{
    res.send("Welcome To The Home Page")
})

app.listen(process.env.PORT,async()=>{
    try{
        await connection;
        console.log(`Server is running ${process.env.PORT}`);
        console.log("DB is connected");
    }
    catch(err){
        console.log("Error Message",err.message)
    }
})