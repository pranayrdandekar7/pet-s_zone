import Pets from "./../models/Pets.js"

const postPet = async (req, res) => {

    const { petName,
        age,
        gender,
        breed,
        description,
        image,
        price,
        user
    } = req.body


    const newPet = new Pets({
        petName,
        age,
        gender,
        breed,
        description,
        image,
        price,
        user

    });

    try {
        const savedPets = await newPet.save();
        res.json({
            success: true,
            message: `your pet is added successfully`,
            data: savedPets

        })
    } catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
}

const putPets = async (req, res) => {

    const { petName,
        age,
        gender,
        breed,
        description,
        image,
        price,
        user } = req.body


    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'User information is required .'
        });
    }

    const { id } = req.params;
  
    const pet = await Pets.findOne({_id: id, user: user})
    if (!pet) {
        return res.status(404).json({
            success: false,
            message: 'Pet details mismatch'
        });
    }

    console.log("this is pet", pet.user.valueOf())

    await Pets.updateOne({ _id: id, user: pet.user.valueOf()},
        {
            $set: {
                petName,
                age,
                gender,
                breed,
                description,
                image,
                price

            }
        }
    )
    const updatepet = await Pets.updateOne({ id })

    res.json({
        success: true,
        message: `pet update successfully`,
         data: updatepet
    })

}

const deletePet = async (req, res) => {

    const { id } = req.params

    await Pets.deleteOne({ _id: id })
    res.json({
        success: true,
        message: "Pet Delete Successfull",
        data: null

    })
}

const getPets = async (req,res)=>{
    const allPets =await Pets.find()

    res.json({
        success:true,
        message:`all pets fetched successfully`,
        data:allPets
    })
}

export {
    postPet,
    deletePet,
    putPets,
    getPets
}
