import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from './Components/Home';
import Projects from "./Components/Projects";
import Navbar from './Components/Navbar';
import Skills from "./Components/Skills";
import { Route, Routes } from 'react-router';


const App = () => {
    return (
        <>
            <Navbar />

            <Routes>
                {/* <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} /> */}
                <Route path="projects" element={<Projects />} />
                <Route path="projects" element={<Projects />} />
                <Route path="skills" element={<Skills />} />
            </Routes>
        </>
    )
}

export default App
