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
          <div className='title'>Language & Data Management Skills</div>
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>Java</p>
              <p>Basic</p>
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
              <p>SQL</p>
              <p>Basic</p>
            </div>
          </div>

          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>Python</p>
              <p>Basic</p>
            </div>
          </div>
  
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>EXCEL</p>
              <p>Intermidiate</p>
            </div>
          </div>

          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>Google Sheets</p>
              <p>Intermidiate</p>
            </div>
          </div>
        </div>
        <div className='content relative'>
          <div className='title'>Business Intelligence Tools</div>
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>Power BI</p>
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
              <p>Looker Studio</p>
              <p>Intermediate</p>
            </div>
          </div>
          <div className='skills-item'>
            <IoIosCheckmarkCircle className='skills-icon'/>
            <div className='item'>
              <p>Tbleau</p>
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
