import React, { useState } from 'react'
import './index.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import ExperienceColumn from './ExperienceColumn'

const Experience = () => {
  const [contentHover, setContentHover] = useState("isFE")
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
          <div className="experience-skill">
            <article>
              <BsFillPatchCheckFill />
              <span>NodeJS</span>
            </article>
            <article>
              <BsFillPatchCheckFill />
              <span>NestJS</span>
            </article>
          </div>
        </article>

        <article className="experience-knowledge">
          <span className='experience-title'>Manage Project</span>
          <div className="experience-skill">
            <article>
              <BsFillPatchCheckFill />
              <span>GitHub</span>
            </article>
            <article>
              <BsFillPatchCheckFill />
              <span>Trello</span>
            </article>
            <article>
              <BsFillPatchCheckFill />
              <span>Miro</span>
            </article>
            <article>
              <BsFillPatchCheckFill />
              <span>Jira</span>
            </article>
          </div>
        </article>

      </div>
      <article className="experience-knowledgeBoard">
        <h2>Board</h2>
        <div className={`experience-board ${contentHover === "isFE" ? "showBoard" : ""}`}>
          <ExperienceColumn
            columnTitle="HTML"
            columnValue="100%"
          />
          <ExperienceColumn
            columnTitle="CSS"
            columnValue="100%"
          />
          <ExperienceColumn
            columnTitle="JavaScript"
            columnValue="100%"
          />
          <ExperienceColumn
            columnTitle="Axios"
            columnValue="100%"
          />
          <ExperienceColumn
            columnTitle="VITE"
            columnValue="100%"
          />
          <ExperienceColumn
            columnTitle="React"
            columnValue="100%"
          />
        </div>



      </article>
    </section>
  )
}

export default Experience
