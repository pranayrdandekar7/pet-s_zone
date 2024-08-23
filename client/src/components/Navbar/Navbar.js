import React from 'react'
import './Navbar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
    return (
        <div>
            <navbar>
                <nav className="navbar nav-wid">
                    <div className='navbar-content'>
                        <div >
                            <a className="navbar-brand" href="#">Navbar</a>
                        </div>
                        <div className='nav-pages'>
                            <a className="nav-link" href="#">Home</a>
                            <a className="nav-link" href="#">About</a>
                            <a className="nav-link" href="#">Contact</a>
                            <a className="nav-link" href="#">Logout</a>
                        </div>
                    </div>
                </nav>
            </navbar>
        </div>
    )
}

export default Navbar
