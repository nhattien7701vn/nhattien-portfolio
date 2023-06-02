import React from 'react'
import "./index.css"
const Header = () => {
  return (
    <header className='header'>
      <div className="header-container">
        <p className='header-name'>Tien Hoang</p>
        <button className='header-btnMenu'>
          <svg width="24" height="24" fill='none' >
            <path d="M 3 3 H 21"
              stroke="var(--third-text-color)" strokeWidth="3" strokeLinecap="round" />
            <path d="M 3 12 H 21"
              stroke="var(--third-text-color)" strokeWidth="3" strokeLinecap="round" />
            <path d="M 3 21 H 21"
              stroke="var(--third-text-color)" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>
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
