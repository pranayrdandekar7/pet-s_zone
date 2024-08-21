import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../animal_cards/animal_cards.css'
function Animal_cards({ Img, name, }) {
    return (
        <div>
            <div className="">
                <img
                    src={Img}
                    alt="Shoes"
                    className="rounded-3 object-fit-cover animals " />
            </div>
        </div>
    )
}

export default Animal_cards
