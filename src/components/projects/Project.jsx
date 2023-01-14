import React from 'react'
import { BsGithub } from 'react-icons/bs'

function Project({name, tech, desc, img}) {
  return (
    <div className='project-card'>
        <img className='project-img' src={img} alt='projectimg'></img>
        <div className='proj-title'>
            <h1>{name}</h1>
            <h4>{tech}</h4>
        </div>
        
        <p>{desc}</p>
        <BsGithub className='github project-git'/>
    </div>
  )
}

export default Project