import React from 'react'
import './Skills.css'
import {IoIosCheckmarkCircle} from 'react-icons/io'

const Skills = () => {
  return (
    <div className='Skills-container container relative'>
      <div className='tag-text relative'>
            <h2 className='tag'>Skills</h2>
            <p>My Technical Level</p>
      </div>
      <div className='skills-main'>
        <div className='content relative'>
          <div className='title'>Language & Database Skills</div>
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>Java</p>
              <p>Intermediate</p>
            </div>
          </div>
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>HTML</p>
              <p>Intermediate</p>
            </div>
          </div>
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>CSS</p>
              <p>Intermediate</p>
            </div>
          </div>
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>JavaScript</p>
              <p>Intermediate</p>
            </div>
          </div>
          {/* <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>MongoDB</p>
              <p>Basic</p>
            </div>
          </div> */}
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>MySQL</p>
              <p>Basic</p>
            </div>
          </div>
        </div>
        <div className='content relative'>
          <div className='title'>Development Skills</div>
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>React.js</p>
              <p>Intermediate</p>
            </div>
          </div>
          {/* <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>Node.js</p>
              <p>Basic</p>
            </div>
          </div> */}
          {/* <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>Express.js</p>
              <p>Intermediate</p>
            </div>
          </div> */}
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>Tailwind</p>
              <p>Intermediate</p>
            </div>
          </div>
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>Git</p>
              <p>Basic</p>
            </div>
          </div>
          {/* <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>Postman</p>
              <p>Basic</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Skills

// IoIosCheckmarkCircle
// IoIosCheckmarkCircleOutline