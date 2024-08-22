import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import getHealth from "./controllers/helth.js";

import {postPet,deletePet,putPets} from "./controllers/pets.js"


import { postDoctors, getDoctors ,getDoctorsbyid,updateDoctor,deletedoctors} from './controllers/petDocter.js'



import {postSignupUser,postLogInUser} from "./controllers/user.js"
import { PostBlog,deleteBlogId } from "./controllers/blog.js";


dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())


const dbConnection = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    if (conn) {
        console.log(`mongoDB is connected successfully ✔`)
    }
}
dbConnection();

app.get("/health" , getHealth)
//API'S for pets

app.post("/pet",postPet)
app.put("/:petName/:id",putPets)
app.delete("/pet/:id",deletePet)

app.post("/signup",postSignupUser)
app.post("/login",postLogInUser)

//APIs for Doctors
app.get("/v1/doctors" , getDoctors)
app.post("/v1/doctors",postDoctors)
app.post("/v1/doctors", postDoctors)
app.put("/v1/doctors/:id",updateDoctor)
app.delete("/v1/doctors",deletedoctors)
//api blogs
app.post("/blog",PostBlog)
app.delete("/blog/:id",deleteBlogId)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})