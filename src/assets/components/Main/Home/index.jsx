import React from 'react'
import "./index.css"

const Home = () => {
  return (<>
    <section className='section home' id=''>
      <div className='home-leftContent'>
        <h1 className='home-name'>Hi, I'm Tien Hoang</h1>
        <h2 className='home-position'>Frontend Developer</h2>
        <span className='home-introduce'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere inventore doloremque neque sed? Ab neque quod nisi, natus, officia dolore adipisci nulla dolor, illum nostrum exercitationem.</span>
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
