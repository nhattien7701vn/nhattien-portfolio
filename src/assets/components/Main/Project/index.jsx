import React from 'react'
import './index.css'
const Project = () => {
  return (
    <section className='section project' id='project'>
      <h1 className='sectionTitle'>Projects</h1>
      <p className='project description'>What I did in the past</p>
      <div className='project-projectList'>
        <a href="" className='project-boxContainer'>
          <h2 className='project-boxTitle'>Weather Website</h2>
          <img className='project-boxBackground' src="/project-weather.png" alt="" />
          <div className='project-boxContent'>
            <img className='project-boxHoverBackground' src="/project-weather.png" alt="" />

          </div>
          <ul className='project-technology'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Vite</li>
            <li>ReactJS</li>
            <li>Axios</li>
            <li>Local Storage</li>
          </ul>
        </a>


        <a href="" className='project-boxContainer'>
          <h2 className='project-boxTitle'>Blog Website</h2>
          <img className='project-boxBackground' src="/project-blog.png" alt="" />
          <div className='project-boxContent'>
            <img className='project-boxHoverBackground' src="/project-blog.png" alt="" />
            <ul className='project-technology'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Vite</li>
              <li>ReactJS</li>
              <li>Axios</li>
              <li>Local Storage</li>
            </ul>
          </div>
        </a>

        <a href="" className='project-boxContainer'>
          <h2 className='project-boxTitle'>Todo Website</h2>
          <img className='project-boxBackground' src="/project-todo.png" alt="" />
          <div className='project-boxContent'>
            <img className='project-boxHoverBackground' src="/project-todo.png" alt="" />
            <ul className='project-technology'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Vite</li>
              <li>ReactJS</li>
              <li>Local Storage</li>
            </ul>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Project
