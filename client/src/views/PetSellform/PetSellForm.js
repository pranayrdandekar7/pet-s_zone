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
      
    })
    console.log(response)
    
  }

  return (
   <>
   <h1>Animal Selling Form</h1>
   <form className="border border-primary d-flex flex-column w-50 mx-auto my-5 p-3 rounded">
    <input type="text"
    className="w-100 border border-primary-subtle mx-auto my-2 p-2 rounded ps-4 input-outline"
     placeholder="Enter Animal Name"
     value={petName} 
      onChange={(e) => {
          setPetName(e.target.value);
         }}/>

    <input type="text"
     placeholder="Enter Animal Age" 
     className="w-100 border border-primary-subtle mx-auto my-2 p-2 rounded ps-4 input-outline"
     value={age}
     onChange={(e)=>{
      setAge(e.target.value)
     }}
     />

    <input type="text" 
    placeholder="Enter Animal Gender"
    className="w-100 border border-primary-subtle mx-auto my-2 p-2 rounded ps-4 input-outline"
     value={gender}
     onChange={(e) => {
      setGender(e.target.value);
     }}/>

    <input type="text"
     placeholder="Enter Animal Breed"
     className="w-100 border border-primary-subtle mx-auto my-2 p-2 rounded ps-4 input-outline"
     value={breed} 
     onChange={(e) => {
      setBreed(e.target.value);

    }}/>

    <input type="text" 
    placeholder="Enter Animal Description"
    className="w-100 border border-primary-subtle mx-auto my-2 p-2 rounded ps-4 input-outline"
     value={description}
     onChange={(e) => {
      setDescription(e.target.value);

    }}/>
   
    <input type="text" 
    placeholder="Enter Animal price"
    className="w-100 border border-primary-subtle mx-auto my-2 p-2 rounded ps-4 input-outline"
    value= {price} 
    onChange={(e) => {
      setPrice(e.target.value);

    }}/>

<button type="button"
 className="bg-info text-dark px-auto py-2 rounded-2 text-bold " 
  onClick={petSell}>Add Animal</button>
    
   </form>
   
   </>
  )
}

export default PetSellForm