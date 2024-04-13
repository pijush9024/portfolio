import React from 'react'
import './Home.css'
import {TbSend} from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container home-container'>
        <div className='home-text-container'>
          <h1 className='home-title'>Pijush Mondal🖐️</h1>
          <div className='home-intro'>
            <div></div>
            <span>ECE Student</span>
          </div>
          <p className='home-desc'>
              I'm a final year student || Programmer || Front End developer from India.
          </p>
          <div className='btn-container relative'>
            <Link to="/contact"><button className='btn'>Say Hello <span><TbSend/></span></button></Link>
          </div>
        </div>

        <div className='home-image-container'>
          <div className='home-image'>      
          </div>
        </div>
    </div>
  )
}

export default Home