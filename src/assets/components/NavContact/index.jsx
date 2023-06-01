import React from 'react'
import './index.css'
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'


const NavContact = () => {
  return (
    <nav className='navContact-container'>
      <a href="https://github.com/nhattien7701vn">
        <span>Git Hub</span>
        <AiOutlineGithub />
      </a>

      <a href="https://www.facebook.com/nhattien.hoang.7/">
        <span>Facebook</span>
        <AiOutlineFacebook />
      </a>

      <a href="https://t.me/nhattien7701">
        <span>Telegram</span>
        <FaTelegram />
      </a>

      <a href="https://www.instagram.com/nt.fuuu/">
        <span>Instagram</span>
        <AiOutlineInstagram />
      </a>

    </nav>
  )
}

export default NavContact
