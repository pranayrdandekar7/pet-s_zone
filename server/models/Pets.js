import {model,Schema} from 'mongoose';

const petsSchema = new Schema({
  petName:{
    type:String,
    required: true
  },
  age:{
    type:String,
    default:`N.A`
  },
  breed:{
    type:String,
    required:true
  },
  description :{
    type:String,
    required:true
  },
  image:[{
    type:String,
    required:true
  }],
  price:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true
 }
},{
  timestamps:true
})

const Pets=model('pets',petsSchema);
export default Pets ;
