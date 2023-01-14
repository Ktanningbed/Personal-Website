import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import './style.css'

function Showcase() {
  return (
    <div id='home' class='hero'>
        <div className="hero-container">
            <h1>Hi! I'm Kevin.</h1>
            <h2>A first year at UWaterloo</h2>
            <div className='links'>
              <a href='https://github.com/Ktanningbed' target='_blank' rel="noopener noreferrer"><BsGithub className='github'/></a>
              <a href="mailto:kx3tan@uwaterloo.ca"><MdEmail className='github'/></a>
            </div>
        </div>
    </div>
  )
}

export default Showcase