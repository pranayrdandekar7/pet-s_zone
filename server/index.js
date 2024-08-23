import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import getHealth from "./controllers/helth.js";
import { postDoctors, getDoctors ,getDoctorsbyid,updateDoctor,deldoctors} from './controllers/petDocter.js';
//petFoods
import{postpetFoods, getPetFoods,getPetFoodsId,putPetFoodsId, deletePetFoods} from './controllers/petFoods.js'

import {postPet,deletePet,putPets,getPets} from "./controllers/pets.js"
import { postDoctors, getDoctors ,getDoctorsbyid,updateDoctor,deletedoctors} from './controllers/petDocter.js'

import {postSignupUser,postLogInUser} from "./controllers/user.js"
import { PostBlog,deleteBlogId ,getallBlogs,getBlog} from "./controllers/blog.js";

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
app.put("/pet/:id",putPets)
app.get("/pets",getPets)
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
app.get("/blogs/:id",getBlog)
app.get("/blogs",getallBlogs)
app.delete("/blog/:id",deleteBlogId)


//PetFoods API's

app.get("/PetFoods",getPetFoods)
app.get("/PetFoods/:id",getPetFoodsId)
app.put("/PetFoods/:id",putPetFoodsId)
app.post("/PetFoods",postpetFoods)
app.delete("/PetFoods/:id",deletePetFoods)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})