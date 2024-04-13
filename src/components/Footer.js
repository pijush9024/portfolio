import React from 'react'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import './Footer.css';

// BsGithub
// BsInstagram
// BsFacebook
// BsLinkedin
// BsArrowRightShort

const Footer = () => {
  return (
    <div className='foot relative'>
        <div className='foot-icon'>
            <a href='https://www.facebook.com/profile.php?id=100039475933404' target='_blank' ><BsFacebook/></a>
            <a href='https://www.instagram.com/pijush9024/'><RiMessengerLine/></a>
            <a href='https://www.instagram.com/pijush9024/'><BsInstagram/></a>
        </div>
        <div>© pijush Mondal. All rights reserved</div>
    </div>
  )
}

export default Footer