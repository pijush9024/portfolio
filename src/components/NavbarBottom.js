import React from 'react'
import './NavbarBottom.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {SlGraduation} from 'react-icons/sl'
import {BiBook} from 'react-icons/bi'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbarbottom-container relative'>

      <NavLink to="/" className='navbarbox'>
        <AiOutlineHome />
      </NavLink>

      <NavLink to="/about" className='navbarbox'>
        <AiOutlineUser/>
      </NavLink>

      <NavLink to="/education" className='navbarbox'>
        <SlGraduation />
      </NavLink>

      <NavLink to="/skills" className='navbarbox'>
        <BiBook/>
      </NavLink>

      <NavLink to="/projects" className='navbarbox'>
        <MdOutlineWorkOutline/>
      </NavLink>

      <NavLink to="/contact" className='navbarbox'>
        <BiMessageSquareDetail />
      </NavLink>

    </div>
  )
}

export default Navbar