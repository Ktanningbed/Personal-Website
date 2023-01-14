import React from 'react'
import './style.css'
import {FaGoogleDrive} from 'react-icons/fa'


function Experience({name, desc, img, icon}) {
  return (
    <div className={'experience-container'}>
        <div className='experience-content'>
            <div className='org'>
                <img className='logo' src={img} alt='experience'></img>
                <h2>{name}</h2>
            </div>
            <div className='desc'>
              {desc}<br/>
              <div className='links'>
                {name==='Shad 2021' && <FaGoogleDrive className='drive'/>}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Experience