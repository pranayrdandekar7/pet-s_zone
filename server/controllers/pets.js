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

    }
    )

    const savedPets = await newPet.save();
    res.json({
        success: true,
        message: `your pet added successfully`,
        data: savedPets

    })
}
export {
    postPet
}
