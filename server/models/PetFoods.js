
import {model,Schema} from 'mongoose';


 const PetFoodSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
  },

    {
        timestamps:true,
    
   
 })

const PetFoods=model('food',PetFoodSchema);
export default PetFoods