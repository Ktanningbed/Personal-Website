import React from 'react'
import Project from './Project'
import './style.css'
import groupup from './groupup.png'
import bookre from './BookRe.png'
import personal from './personalwebsite.png'
import score from './scoretracker.png'
import bookreader from './bookreader.png'
import nlp from './nlpsample.png'

function Projects() {
  return (
    <div id='projects' className='project container'>
      <h1>Projects</h1>
      <div className='projects'>
        <a href='https://github.com/Ktanningbed/Group-Project-Manager' target='_blank' rel="noopener noreferrer">
          <Project name='GroupUp' tech='React, HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Redux, JsonWebToken' 
          desc='A group project manager allowing users to create projects with other users and manage tasks.' 
          img={groupup}/>
        </a>
        <a href='https://github.com/Ktanningbed/BookRe' target='_blank' rel="noopener noreferrer">
          <Project name='BookRe' tech='React, HTML, CSS, JavaScript, Flask, Python, PostgreSQL, SQL' 
          desc='A book recommendation app. Mostly for personal use but allows anyone on the site to recommend books which are then stored on a database.' 
          img={bookre}/>
        </a>
        <a href='https://github.com/Ktanningbed/personal-website' target='_blank' rel="noopener noreferrer">
          <Project name='Personal Website' tech='React, HTML, CSS, JavaScript' 
          desc='A personal website to display my experiences.' 
          img={personal}/>
        </a>
        <a href='https://github.com/Ktanningbed/Natural-Language-Processing' target='_blank' rel="noopener noreferrer">
          <Project name='NLP Research Essay' tech='Python, SKLearn, Pandas' 
          desc="Movie review classification using different models." 
          img={nlp}/>
        </a>
        <a href='https://github.com/Ktanningbed/Book-Reader' target='_blank' rel="noopener noreferrer">
          <Project name='Book Reader' tech='JavaScript, Python, BeautifulSoup, HTML, CSS' 
          desc='Web scrape books from websites' 
          img={bookreader}/>
        </a>
        <a href='https://github.com/Ktanningbed/Score-Tracker-for-Various-Sports' target='_blank' rel="noopener noreferrer">
          <Project name='Score Tracker' tech='Java, Swing' 
          desc="With a broken score tracker in the school's gym, I built this as a temporary solution." 
          img={score}/>
        </a>
        
      </div>
    </div>
  )
}

export default Projects