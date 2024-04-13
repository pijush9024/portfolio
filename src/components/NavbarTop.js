import React from 'react'
import './NavbarTop.css'
import {RxCrossCircled} from 'react-icons/rx'
import {HiOutlineSquares2X2} from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const NavbarTop = ({pageBar, setPageBar}) => {

    function modeHandler(){
        setPageBar((prev)=>(!prev));
    }

  return (
    <div className='navbartop-container'>
        <div className='navbar-title'>
          <Link to='/' className='link'><span>Pijush</span>Mondal.</Link>
        </div>
        <div onClick={modeHandler} className='mode'>
        {
            pageBar? (<RxCrossCircled/>) : (<HiOutlineSquares2X2/>)
        }
        </div>
    </div>
  )
}

export default NavbarTop