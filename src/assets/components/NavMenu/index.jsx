import React from 'react'
import './index.css'
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { FiBookOpen } from 'react-icons/fi'
import { RiServiceLine } from 'react-icons/ri'
import { TiContacts } from 'react-icons/ti'
const NavMenu = () => {
  return (
    <nav className='navMenu-container'>

      <a className='navMenu-icon' href="#"><AiOutlineHome /></a>

      <a className='navMenu-icon' href="#about"><MdOutlinePersonOutline /></a>

      <a className='navMenu-icon' href="#experience"><FiBookOpen /></a>

      <a className='navMenu-icon' href="#service"><RiServiceLine /></a>

      <a className='navMenu-icon' href="#project"><AiOutlineFundProjectionScreen /></a>

      <a className='navMenu-icon' href="#contact"><TiContacts /></a>
    </nav>
  )
}

export default NavMenu
