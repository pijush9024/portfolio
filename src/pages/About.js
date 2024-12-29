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
                    Hello viewers, this is a brief introduction of mine. I am a B.Tech graduate in Electronics and Communication Engineering (ECE) with a strong passion for data analytics and business intelligence. Currently working as an MIS Executive, I specialize in transforming complex data into actionable insights and creating visually impactful dashboards.
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
