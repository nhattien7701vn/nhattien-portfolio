import React from 'react'
import "./index.css"

const Home = () => {
  return (<>
    <section className='section home' id=''>
      <div className='home-leftContent'>
        <h1 className='home-name'>Hi, I'm Tien Hoang</h1>
        <h2 className='home-position'>Frontend Developer</h2>
        <span className='home-introduce'>Hey there! I'm a Front-End Developer who's still navigating through the vast world of coding. Think of me as a friendly and approachable tech enthusiast. I may not have a ton of experience yet, but I make up for it with my knack for making people laugh. I'm always up for a good chat and making new friends, so don't hesitate to say hello. When I'm not busy coding, you can probably find me trying to score goals on a virtual soccer field or working up a sweat in a real game. Life's all about balance, right? So let's connect, have some fun, and create awesome things together !</span>
        <div className="home-button">
          <button className='btn-hireMe'>Hire me</button>
          <button className='btn-letsTalk'>Let's Talk</button>
        </div>
      </div>
      <div className='home-rightContent'>
        <img className='home-personalPicture' src="/testt.jpg" alt="" />
      </div>
      <ul>

      </ul>
    </section>
  </>)
}

export default Home
