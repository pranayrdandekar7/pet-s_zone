import React from "react";
import "./PetDatails.css";
import fordwordIcon from "./arrow.png";
import backwordIcon from "./right-arrow.png";
import axios from "axios"

function petDatails() {
  return (
    <>
      <h1 className="text-center border w-96 m-auto rounded-1 py-1 mt-3 fs-3 bg-secondary-subtle">
        Kitten cat
      </h1>
      <p className=" animals-paragraph-text text-center fs-5 ">
        Kittens are highly social animals and spend most of their waking hours
        interacting with available animals and playing on their own.
      </p>
      <div className="page-main-container">
        <div className="image-container">
          <img src={fordwordIcon} className="image-forwordbackword-Icon" />
          <img
            src="https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386.jpg"
            className="animal-image rounded-xl"
          />
          <img src={backwordIcon} className="image-forwordbackword-Icon" />
        </div>
        {/* petName,age,gender,breed,description,image,price */}
        <div className="animal-informations-container p-3">
          <h3 className="text-center ">Kitten cat</h3>
          <h3>Genral Informations</h3>
          <p className="fs-5">
            Kittens cannot see as well as adult cats until about ten weeks after
            birth. Kittens develop very quickly from about two weeks of age
            until their seventh week. Their coordination and strength improve,
            and they play-fight with their litter-mates and begin to explore the
            world outside the nest or den.
            
          </p>
          <p className="fs-5">Gender : male</p>

          <div className="flex">
            <h5>Price ₹ : 500</h5>
            <h5 className="mx-5">Age : 3 years</h5>
          </div>
          <h6>
            <h4>Address :</h4>
            Shop No 4 Waghire Empire, Pimpre Morwadi Road, Pimpri, Pune - 411018
            (Opposite Finolex Cable)
          </h6>
        </div>
      </div>

      <div className="App">
        <h1 className="text-center border w-96 m-auto rounded-1 py-1 mt-5 fs-2 bg-secondary-subtle">Review</h1>
        <div className="review-form review-page p-5 rounded-3 bg-info mx-auto m-3 ">
          <form>
            <label for="name ">Name : </label>
            <br />
            <input
              className="text w-100 py-2 px-2 rounded-2 focus:outline-none border border-primary"
              type="text"
              placeholder="Enter Name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              // required
            />
            <br />
            <br />

            <label for="review">Review :</label>
            <br />
            <textarea
              className=" reviw-input-text w-100 px-2 rounded-2 focus:outline-none border border-primary"
              placeholder="Comment"
              // rows="4"
              // value={review}
              // onChange={(e) => setReview(e.target.value)}
              // required
            ></textarea>
            <br />
            <br />
            <div className="button d-flex justify-content-center">
              <button
                type="submit"
                className="button bg-black text-white py-1 mt-3 px-5 rounded-3"
                // onClick={handleSuccessClick}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

       
      </div>
    </>
  );
}

export default petDatails;
