import React from 'react'
import { Link } from 'react-router-dom'
// import '../App.css'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">MOHIT</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav text-decoration-none ">
                        <li className='px-3'><Link className='text-decoration-none' to='about'>About</Link></li>
                        <li className='px-3'><Link className='text-decoration-none' to='contact'>Contact</Link></li>
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
