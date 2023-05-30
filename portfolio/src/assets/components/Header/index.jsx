import React from 'react'
import "./index.css"
const Header = () => {
  return (
    <header className='header'>
      <div className="header-container">
        <p className='header-name'>Nhat Tien</p>
        <ul className='header-menu'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Service</a></li>
          <li><a href="">Project</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
