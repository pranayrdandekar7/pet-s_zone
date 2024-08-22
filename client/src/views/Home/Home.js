import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Show_Cards from '../../components/animal_show_cards/animal_show_cards'
import Animal_cards from '../../components/animal_cards/animal_cards'
import cow from '../../components/animal_show_cards/cow.jpeg'
import bull from '../../components/animal_show_cards/bull.jpeg'
import { Link } from 'react-router-dom'
import dog from '../../components/animal_show_cards/dog.jpeg'
import cat from '../../components/animal_show_cards/cat.jpg'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'


function Home() {

  return (
    <div>
        <Navbar/>
      <div className='d-flex gap-5 flex-wrap'>
        <Show_Cards />
        <Link to="">  <Animal_cards Img={cow} /> </Link>
        <Link to="">  <Animal_cards Img={bull} /></Link>
        <Link to=""> <Animal_cards Img={dog} /></Link>
        <Link to="">  <Animal_cards Img={cat} /></Link>
      </div>
      <Footer/>
    </div>
  )
}

export default Home