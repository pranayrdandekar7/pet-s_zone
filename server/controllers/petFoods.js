
import PetFoods from './../models/PetFoods.js'

const petFoods=async(req,res)=>{
  const{
    name,
    price,
    image,
    description,
    category,
   
  }=req.body

  const newPetFoods=new PetFoods({
    name:name,
    price:price,
    image:image,
    description:description,
    category:category,
  })

  const savedPetFoods=await newPetFoods.save();
  res.json({
    success:true,
    data:savedPetFoods,
    message:"PetFood added Sucessfully.."
  })
  
  }


  //get method

  const getPetFoods=async(req,res)=>{
    const allPetFoods=await PetFoods.find().sort({createdAt: -1});
    res.json({
      success:true,
      data:allPetFoods,
      message:"PetFoods fetched successfully.."
    })
  }

  //
  const getPetFoodsId=async(req,res)=>{
    const {id}=req.paramas
    const PetFoods =await PetFoods.findById(id)

    res.json({
      success:true,
      data:PetFoods,
      message:PetFoods ? "PetFoods fetched successfully":"PetFoods Not Found",
    })
  }

  //put method
  const putPetFoodsId=async(req,res)=>{
    const{
      name,
      price,
      image,
      description,
      category,
    }=req.body
    
    const{id}=req.paramas
   await PetFoods.updateOne({_id:id},{
     $set:{
      name:name,
      price:price,
      image:image,
      description:description,
      category:category,
    }
  })
  const updatePetFoods=await PetFoods.findById(id)

    res.json({
      success:true,
      data:updatePetFoods,
      message: "PetFoods updated successfully..",
    })
  }

  //
  const deletePetFoods=asyn(req,res)=>{
    const{id}=req.paramas
    await PetFoods.deleteOne({_id:id})

    res.json({
      success:true,
      message:"PetFoods deleted successfully..",
      data:null
    })
  }



export{  petFoods,
  getPetFoods,
  getPetFoodsId,
  putPetFoodsId,
  deletePetFoods
 
}