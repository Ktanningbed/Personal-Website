import React from 'react'
import Experience from './Experience'
import './style.css'
import shad from './Shad.png'
import triway from './Triway.png'

function Experiences() {
  return (
    <div id='experiences' className='experience container'>
      <h1>Experiences</h1>
      <div className='experiences'>
        <a href='https://drive.google.com/file/d/1HQVKtDomYPFq88Am1ZSELvL-0ZCRVcYK/view?usp=sharing'
        target='_blank' rel="noopener noreferrer">
          <Experience name='Shad 2021' 
            desc='Shad is a "University-level STEM and entrepreneurship" program. There, I co-founded a company with a group of 7 called Grey Return that aims to develop 
                  an efficient grey water filtration system controlled by an app. The development process of this company involved countless interviews with homeowners and industry professionals to find the most optimal design and 
                  system covering all the needs of various homeowners. We wrote a business proposal and pitched our company to a panel of judges and was given the Best Business
                  Proposal and Best Product awards over 60+ other participants.' img={shad}/>
        </a>
        
        <Experience name='Triway Education | Java Programming Instructor'
          desc='I worked at Triway Education as a Java Programming Instructor where I taught
                15+ high school students algorithms and data structures typically used
                in the Canadian Computing Compeition (CCC) hosted by the 
                University of Waterloo.' img={triway}/>
      </div>
    </div>
  )
}

export default Experiences