import React from 'react'
import './Projects.css'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { useState } from 'react'

const Projects = (props) => {

  let projects = props.projects;

  const[index, setIndex] = useState(0);

  function leftHandler(){
    setIndex((prev)=>{
      return prev === 0? (projects.length-1) : (prev-1)
    })
  }

  function rightHandler(){
    setIndex((prev)=>{
      return prev === projects.length-1? (0) : (prev+1)
    })
  }

  return (
    <div className='project-container container relative'>
      <div className='tag-text relative'>
            <h2 className='tag'>Projects</h2>
            <p>My Recent Work</p>
      </div>
      <div className='project-main relative'>
        <button className='Project-btn' onClick={leftHandler}><FiChevronLeft/></button>
          
        <div className='project-content'>
            <div className='pro-image'>
              <img src={projects[index].image} alt='profile'/>
            </div>
            <div className='project-text'>
              <div className='project-title'>{projects[index].title}</div>
              <div className='project-desc'>
                <FaQuoteLeft/>
                <p className='desc'>{projects[index].desc}</p>
                <FaQuoteRight/>
              </div>
              <button className='btn'><a href={projects[index].link}> Visit </a></button>
            </div>
        </div>

        <button className='Project-btn' onClick={rightHandler}><FiChevronRight/></button>
      </div>
    </div>
  )
}

export default Projects