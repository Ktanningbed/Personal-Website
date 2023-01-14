import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <div className='footer'>
        <div>
            <p>Made with ♥ by <a className='kevin' href='https://github.com/Ktanningbed' target='_blank' rel="noopener noreferrer">Kevin Tan</a></p>
            <div className='footer-icons'>
                <a href='https://github.com/Ktanningbed' target='_blank' rel="noopener noreferrer"><BsGithub className='github footer-icon'/></a>
                <a href="mailto:kx3tan@uwaterloo.ca"><MdEmail className='github footer-icon'/></a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer