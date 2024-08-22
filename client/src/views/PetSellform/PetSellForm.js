import { useState } from "react"
import "./PetSellForm.css"
import axios from "axios"

function PetSellForm() {


  const [petName,setPetName]=useState("");
  const [age,setAge]=useState("");
  const [gender,setGender]=useState("");
  const [breed,setBreed]=useState("");
  const [description,setDescription]=useState("");
  const [image,setImage]=useState ("")
  const [price,setPrice]=useState("");

  const petSell= async ()=>{
    const response =await axios.post(`${process.env.REACT_APP_BACKEND_URL}/pet`,
    {
      petName,
      age,
      gender,
      breed,
      description,
      image,
      price,
      user
    })
    console.log(response)
    
  }

  return (
   <>
   <h1>Animal Selling Form</h1>
   <form>
    <input type="text"
     placeholder="Enter Animal Name"
     value={petName} 
      onChange={(e) => {
          setPetName(e.target.value);
         }}/>

    <input type="text"
     placeholder="Enter Animal Age" 
     value={age}
     onChange={(e)=>{
      setAge(e.target.value)
     }}
     />

    <input type="text" 
    placeholder="Enter Animal Gender"
     value={gender}
     onChange={(e) => {
      setGender(e.target.value);
     }}/>

    <input type="text"
     placeholder="Enter Animal Breed"
     value={breed} 
     onChange={(e) => {
      setBreed(e.target.value);

    }}/>

    <input type="text" 
    placeholder="Enter Animal Description"
     value={description}
     onChange={(e) => {
      setDescription(e.target.value);

    }}/>

    <input type="text" 
    placeholder="Enter Animal price"
    value={price} 
    onChange={(e) => {
      setPrice(e.target.value);

    }}/>

<button type="button"  onClick={petSell}></button>
    
   </form>
   
   </>
  )
}

export default PetSellForm