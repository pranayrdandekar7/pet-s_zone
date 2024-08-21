import React from 'react'
import Navbar from '../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js'
import SignUp from '../SignUp/SignUp.js'

function Home() {
  return (
    <div>
      <Navbar/>
      <SignUp/>
      Home
      <Footer/>
    </div>
  )
}

export default Home