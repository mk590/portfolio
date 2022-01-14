import React from 'react'
import { Link } from 'react-router-dom'
// import '../App.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MOHIT</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-decoration-none ">
                        {/* <li className='px-3'><Link className='text-decoration-none' to='about'>About</Link></li>
                        <li className='px-3'><Link className='text-decoration-none' to='contact'>Contact</Link></li> */}
                        <li className='px-3'><Link className='text-decoration-none' to='projects'>Projects</Link></li>
                        <li className='px-3'><Link className='text-decoration-none' to='skills'>Skills</Link></li>
                        
                           
                           
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
