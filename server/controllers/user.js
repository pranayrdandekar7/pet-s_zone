import User from "./../models/Users.js";


const postSignupUser = async (req, res) => {
  const { name, mobile, email, password, address, role } = req.body;

  const newuser = new User({
    name,
    mobile,
    email,
    password,
    address,
    role,
  });
const savedUser = await newuser.save();
  res.json({
    success: true,
    message: "User Created Succesfully",
    data: savedUser,
  });
};

const postLogInUser = async (req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({
    email:email,
    password:password
  })
  if(user){
    res.json({
      success:true,
      message:"User Login Successfully",
      data:user
    })
  }else{
    res.json({
      success:false,
      message:"invailid Credentials",
      data:null
    })
  }
}


export {postSignupUser,postLogInUser };
