import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import getHealth from "./controllers/helth.js";
import {postPet} from "./controllers/pets.js"
import { postDoctors, getDoctors ,getDoctorsbyid,updateDoctor,deldoctors} from './controllers/petDocter.js'

import {postSignupUser,postLogInUser} from "./controllers/user.js"


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

app.post("/signup",postSignupUser)
app.post("/login",postLogInUser)

//APIs for Doctors
app.get("/v1/doctors" , getDoctors)
app.post("/v1/doctors",postDoctors)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})