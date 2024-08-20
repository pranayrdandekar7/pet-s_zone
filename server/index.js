import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
import getHealth from "./controllers/helth.js";
//petFoods
import{postpetFoods, getPetFoods,getPetFoodsId,putPetFoodsId, deletePetFoods} from './controllers/petFoods.js'

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

//PetFoods API's

app.get("/PetFoods",getPetFoods)
app.get("/PetFoods/:id",getPetFoodsId)
app.put("/PetFoods/:id",putPetFoodsId)
app.post("/PetFoods",postpetFoods)
app.delete("/PetFoods/:id",deletePetFoods)

const PORT = process.env.PORT || 5000

app.listen (PORT ,()=>{
    console.log (`server is running on port ${PORT}`)
})