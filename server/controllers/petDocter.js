import Doctor from '../models/PetDoctors.js'

const postDoctors = async (req, res) => {
  const { name, phone, email, password, specialization, qualification, address } = req.body
  const newDoctor = new Doctor({ name, phone, email, password, specialization, qualification, address })
  try {
    const savedDoctor = await newDoctor.save()
    res.status(201).json({
      message: `Wel Come Dr.${name}`,
      success: true,
      data: savedDoctor
    })

  }
  catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      data: null
    })
  }
}

const getDoctors = async (req, res) => {
  const doctors = await Doctor.find()

  if (!doctors) {
    res.status(404).json({
      message: 'No Doctor Found',
      success: false,
      data: null
    })
  }
  else {
    res.json({
      message: 'All Doctors',
      success: true,
      data: doctors
    })
  }
}

const getDoctorsbyid = async (req, res) => {
  const { userId } = req.query
  const doctors = await Doctor.findOne({ userId: _id })

  if (!doctors) {
    res.status(404).json({
      message: 'No Doctor Found',
      success: false,
      data: null
    })
  }
  else {
    res.json({
      message: ' Doctor Found',
      success: true,
      data: doctors
    })
  }
}

const updateDoctor = async (req, res) => {
  const { name, phone, email, password, specialization, qualification, address } = req.body
  const { id } = req.params
  const doctor = await Doctor.updateOne({ _id: id },
    {
      $set: {
        name: name,
        email: email,
        phone: phone,
        password: password,
        specialization: specialization,
        qualification: qualification,
        address: address
      }
    })
  const updateddoctor = await Doctor.findById(id)
  res.json({
    success: true,
    data: updateddoctor,
    message: "Doctor Updated"
  })
}

const deldoctors = async (req, res) => {
  const { name } = req.body
  const { doctId } = req.query
  await Doctor.deleteOne({ _id: doctId })
  res.json({
    success: true,
    message: `Thank you Dr.${name} for your service`,
    data:null
  })
}
export {
  postDoctors, getDoctors, getDoctorsbyid, updateDoctor, deldoctors
}