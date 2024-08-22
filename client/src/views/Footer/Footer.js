import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="card text-center">
            <div className="card-header footer-title">
                Pets Zone
            </div>
            <div className="card-body ">
                <h5 className="card-title"></h5>
                <div className='footer-content '>
                    <div className='links'>
                        <p className="card-text">Special Links</p>
                        <a href="/" className="CardBody">Home</a><br />
                        <a href="/Blogs" className="CardBody">Blogs</a><br />
                        <a href="/Contact" className="CardBody">Contact</a><br />
                        <a href="/Login" className="CardBody">Login</a>
                    </div>
                    <div className='contact'>
                        <p>Contact</p>
                        <a className="CardBody ">saritasadgir3@gmail.com</a><br />
                        <p className="CardBody">Mobile<a>9665386035</a></p><br />

                    </div>
                </div>
            </div>
            <div className="card-footer text-body-secondary">
                2 days ago
            </div>
        </div>
  )
}

export default Footer
