import React from 'react'
import './Footer.css'
import LogoImg from './../Navbar/petLogo.png'
import HomeImg from './../Footer/home (1).png'
import Email from './../Footer/email (1).png'
import Contact from './../Footer/viber.png'
import instagramImg from './../Footer/instagram.png'
import linkdinImg from './../Footer/linkedin.png'

import facebookImg from './../Footer/facebook.png'

function Footer() {
    return (
        <div className="card text-center footer-body">
            <div className="card-header footer-title ">
                <img src='' className='logo-img' />
                <span>Pets Zone</span>
            </div>
            <div className="card-body ">
                <h5 className="card-title">"Paws, Claws, and Everything in Between"</h5>
                <div className='footer-content '>
                    <div className='website-info'>

                        <div className="heading logoInfo ">
                            <div >
                                <img src={instagramImg} className='contact-logo' />
                            </div>
                            <div >
                                <span>PetZone</span>
                            </div>
                            
                        </div>
                        <p className=' info'>Where Every Pet's Dream Comes True.A pet zone aims to create a one-stop destination for all pet-related needs, ensuring pets are well-cared-for and their owners have access to the best resources and support.</p>

                    </div>

                    <div className='links'>
                        <p className="heading">Special Links</p>
                        <a href="/" className="CardBody content-center">Home</a>
                        <a href="/Blogs" className="CardBody content-center">Blogs</a>
                        <a href="/Contact" className="CardBody content-center">Contact</a>
                    </div>

                    <div >
                        <p className='heading'>Contacts</p>
                        <a className="CardBody "><img src={HomeImg} className='contact-logo' /> <span>At.post Shewalewadi,Pune</span></a>
                        <a className="CardBody "><img src={Email} className='contact-logo' /> <span>petzone9766@gmail.com</span></a>
                        <a className="CardBody"><img src={Contact} className=' contact-logo contact-mobile' /> <span>9665386034</span></a>
                    </div>
                    <div >
                        <p className='heading'>Social Links</p>
                        <a className="CardBody "><img src={instagramImg} className='contact-logo' /> <span>Instagram</span></a>
                        <a className="CardBody "><img src={facebookImg} className='contact-logo' /><span>Facebook</span></a>
                        <a className="CardBody"><img src={linkdinImg} className=' contact-logo ' /><span>Linkdin</span></a>

                    </div>

                </div>
            </div>
            <div className="card-footer copy-rights">
                @2024 Copyright : petszone.org🐶🐱
            </div>
        </div>
    )
}

export default Footer
