import React from 'react'
import './style.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className='nav-container'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
        
        <a href="https://drive.google.com/file/d/1ZUoFwXzTWbln2Q4onwcOch2sRexG8ZOI/view?usp=sharing"
        target='_blank' rel="noopener noreferrer">Resume</a>
      </div>
        
    </div>
  )
}

export default Navbar