import React from 'react'
import './index.css'
import { BsTelephone } from 'react-icons/bs'

const About = () => {
  return (
    <section className='section about' id='about'>
      <div className='about-leftContent'>
        <img src="https://i.ibb.co/mBsD1R6/testt.jpg" alt="" />
      </div>
      <div className='about-rightContent'>
        <h1 className='about title'>About me</h1>
        <p className='about-introduce'>Im's a Front-End Developer, learning at Information Technology University (UIT) - VietNam National University (VNU)</p>
        <p className='about-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga voluptas, dicta aliquid omnis corrupti illo in aspernatur totam laudantium!</p>
        <ul className='about-experience'>
          <li>
            <h2>0.5</h2>
            <span>Years of Experience</span>
          </li>
          <li>
            <h2>5</h2>
            <span>Projects Completed</span>
          </li>
        </ul>
        <button className='about-btnContact'>
          <BsTelephone />
          <p>Contact me</p>
        </button>
      </div>
    </section>
  )
}

export default About
