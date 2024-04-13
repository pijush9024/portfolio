import React from 'react'
import './Education.css'
import {SlGraduation} from 'react-icons/sl'
import {CiCalendar} from 'react-icons/ci'

const Education = () => {
  return (
    <div className='education-container container relative'>
      <div className='tag-text relative'>
        <h2 className='tag'><span><SlGraduation /></span>Education</h2>
        <p>My Personal Journey</p>
      </div>
      <div className='edu-main relative'>
        <div className='bars relative'>
          <div className='bar relative'>
              <div className='bar-dot'></div>
              <h3 className='bar-title'>Bachelor in Technology</h3>
              <p className='bar-text'>Gargi Memorial Institute of Technology</p>
              <span><CiCalendar/> 2020 to present</span>
          </div>
          <div className='bar relative'>
              <div className='bar-dot'></div>
              <h3 className='bar-title'>Higher Secondary Education</h3>
              <p className='bar-text'>Jara High School</p>
              <span><CiCalendar/> 2018 to 2020</span>
          </div>
          <div className='bar relative'>
              <div className='bar-dot'></div>
              <h3 className='bar-title'>Secondary Education</h3>
              <p className='bar-text'>Jara High School</p>
              <span><CiCalendar/> 2013 to 2018</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education