import React from 'react'
import "./index.css"
const Header = () => {
  return (
    <header className='header'>
      <div className="header-container">
        <p className='header-name'>Tien Hoang</p>
        <nav className='header-menu'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Experience</a>
          <a href="">Service</a>
          <a href="">Project</a>
          <a href="">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
