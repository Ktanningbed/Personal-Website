import React from 'react'
import './style.css'
import rockclimbing from './rockclimbing.png'
// import {BsGithub} from 'react-icons/bs'
// import { MdEmail } from 'react-icons/md'

function About() {
  return (
    <div id='about' className='about container'>
      <div className="about-card">
        <h1>About me</h1><br/>
        <div className='about-text'>
          <p>Hey! My name is Kevin Tan (he/him) and I'm a first year Computer Science student at the University of Waterloo. 
              I'm interested in web/app development and would love the opportunity to explore it.
          </p> <br/>
          <p>I love rock climbing (specifically bouldering), enjoy singing and watching dramas.</p><br/>
          <p>I am currently in search of a Spring 2023 internship</p>
        </div>
      </div>
      <div className='about-img'>
        <img src={rockclimbing} alt='rockclimbing'/>
      </div>
    </div>
  )
}

export default About