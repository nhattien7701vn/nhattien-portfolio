import React from 'react'
import "./index.css"
const Header = () => {
  return (
    <header className='header'>
      <div className="header-container">
        <p className='header-name'>Tien Hoang</p>
        <nav className='header-menu'>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#service">Service</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
