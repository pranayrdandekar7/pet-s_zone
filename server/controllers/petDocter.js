
import Doctor from '../models/PetDoctors.js'

const postDoctors = async(req,res)=>{
  const {name,phone,email,password,specialization,qualification,address} = req.body
  const newDoctor = new Doctor({name,phone,email,password,specialization,qualification,address})
  try {
    const savedDoctor = await newDoctor.save()
    res.status(201).json({
      message: `Wel Come Dr.${name}`,
      success: true,
      data:savedDoctor
    })

  }
  catch(error){
    res.status(400).json({
      message: error.message,
      success: false,
      data:null
    })
  }
}

const getDoctors=async(req,res)=>{
  const doctors=Doctor.find()
  try{
    res.json({
      message: 'All Doctors',
      success: true,
      data:doctors
    })
  }
  catch(error){
    res.status(400).json({})
  }
}
export{
  postDoctors
}