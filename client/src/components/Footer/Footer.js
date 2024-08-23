import React from 'react'
import './Footer.css'
import LogoImg from './../Navbar/petLogo.png'
import Email from './../Footer/email.png'
import Contact from './../Footer/contact-mail.png'

function Footer() {
  return (
    <div className="card text-center footer-body">
            <div className="card-header footer-title ">
                <img src='' className='logo-img'/>
                <span>Pets Zone</span>
            </div>
            <div className="card-body ">
                <h5 className="card-title">"Paws, Claws, and Everything in Between"</h5>
                <div className='footer-content '>
                    <div className='links'>
                        <p className="heading">Special Links</p>
                        <a href="/" className="CardBody">Home</a>
                        <a href="/Blogs" className="CardBody">Blogs</a>
                        <a href="/Contact" className="CardBody">Contact</a>
                        <a href="/Login" className="CardBody">Login</a>
                    </div>
                    <div >
                        <p className='heading'>Contacts</p>
                        <a className="CardBody "><img src={Email} className='contact-logo' /> <span>saritasadgir3@gmail.com</span></a>
                        <a className="CardBody"><img src={Contact} className=' contact-logo contact-mobile'/> <span>9665386035</span></a>
                    </div>
                    <div >
                        <p className='heading'>Contacts</p>
                        <a className="CardBody "><img src={Email} className='contact-logo' /> <span>saritasadgir3@gmail.com</span></a>
                        <a className="CardBody"><img src={Contact} className=' contact-logo contact-mobile'/> <span>9665386035</span></a>
                    </div>
                </div>
            </div>
            <div className="card-footer ">
                @2024 Copyright:petszone.com
            </div>
        </div>
  )
}

export default Footer
