import React from 'react'
import './index.css'
import { BsTelephone } from 'react-icons/bs'

const About = () => {
  return (
    <section className='section about' id='about'>
      <div className='about-leftContent'>
        <img src="/testt.jpg" alt="" />
      </div>
      <div className='about-rightContent'>
        <h1 className='about sectionTitle'>About me</h1>
        <p className='about-introduce'>Im's a Front-End Developer, learning at Information Technology University (UIT) - VietNam National University (VNU)</p>
        <p className='about-description'>Hey there! I'm a Front-End Developer who's still navigating through the vast world of coding. Think of me as a friendly and approachable tech enthusiast. I may not have a ton of experience yet, but I make up for it with my knack for making people laugh. I'm always up for a good chat and making new friends, so don't hesitate to say hello. When I'm not busy coding, you can probably find me trying to score goals on a virtual soccer field or working up a sweat in a real game. Life's all about balance, right? So let's connect, have some fun, and create awesome things together !</p>
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
