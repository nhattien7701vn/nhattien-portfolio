import React from 'react'
import './index.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section className='section experience' id='experience'>
      <h1>My Experience</h1>
      <p>What knowledge I've learnt</p>
      <div className="experience-content">

        <article className="experience-knowledge">
          <span className='experience-title'>Frontend Developer</span>

          <div className="experience-skill">
            <article>
              <BsFillPatchCheckFill />
              <span>HTML</span>
            </article>
            <article>
              <BsFillPatchCheckFill />
              <span>CSS</span>
            </article>
            <article>
              <BsFillPatchCheckFill />
              <span>JavaScript</span>
            </article>
            <article>
              <BsFillPatchCheckFill />
              <span>Axios</span>
            </article>
            <article>
              <BsFillPatchCheckFill />
              <span>VITE</span>
            </article>
            <article>
              <BsFillPatchCheckFill />
              <span>React</span>
            </article>
          </div>

        </article>

        <article className="experience-knowledge">
          <span className='experience-title'>Backend Developer</span>
          <article>
            <BsFillPatchCheckFill />
            <span>HTML</span>
          </article>
        </article>

        <article className="experience-knowledge">
          <span className='experience-title'>Manage Project</span>
          <article>
            <BsFillPatchCheckFill />
            <span>asdsad</span>
          </article>
        </article>
      </div>
    </section>
  )
}

export default Experience
