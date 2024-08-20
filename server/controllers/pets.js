import Pets from "./../models/Pets.js"

const postPet = async (req, res) => {

    const { petName,
        age,
        gender,
        breed,
        description,
        image,
        price } = req.body


    const newPet = new Pets({
        petName,
        age,
        gender,
        breed,
        description,
        image,
        price,

    });
    
    try{
    const savedPets = await newPet.save();
    res.json({
        success: true,
        message: `your pet is added successfully`,
        data: savedPets

    })
}catch(e){
    res.json({
        success:false,
        message:e.message,
        data:null
    })
}
}

const deletePet =async(req,res) => {

        const {id} =req.params
       
      await Pets.deleteOne({_id:id})
      res.json({
        success:true,
        message:"Pet Delete Successfull",
        data:null
      
      })
      }

export {
    postPet,
    deletePet
}
