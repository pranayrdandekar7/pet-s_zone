import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
import getHealth from "./controllers/helth.js";
import {postSignupUser,postLogInUser} from "./controllers/user.js"

const app = express()
app.use (express.json())
app.use (cors())

const dbConnection = async ()=>{
    const conn =await mongoose.connect (process.env.MONGO_URL) ;
    if(conn){
        console.log(`mongoDB is connected successfully ✔`)
    }  
}
dbConnection();

app.get("/health" , getHealth)
app.post("/signup",postSignupUser)
app.post("/login",postLogInUser)

const PORT = process.env.PORT || 5000

app.listen (PORT ,()=>{
    console.log (`server is running on port ${PORT}`)
})