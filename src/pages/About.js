import React from 'react'
import './About.css'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import resume from '../assets/resume.pdf'

const About = () => {
  return (
    <div className='container about-container relative'>
        <div className='tag-text relative'>
            <h2 className='tag'>About Me</h2>
            <p>My introduction</p>
        </div>
        <div className='about-main'>
            
            <div className='about-text-container'>
                <p className='about-desc relative'>
                    Hello viewers, this is a brief introduction of mine. I am pursuing B.Tech from Gargi Memorial Institute of Technology. I am a front end  developer and used different technology in web development. I started my web development journey with HTML,CSS,JavaScript,ReactJS. Apart from Web technologies, i am doing programming in different languages like C, Java,  etc. I am now at learning phase and want to explore more in this field.
                </p>
                <div className='btn-container relative'>
                <button className='btn relative'><a href={resume} download="Resume">Download CV</a><span><AiOutlineCloudDownload /></span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About