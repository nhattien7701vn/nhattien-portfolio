import React from 'react'
import Home from './Home'
import "./index.css"
import About from './About'
import Experience from './Experience'
import Service from './Service'
import Project from './Project'
import Contact from './Contact'

const Main = () => {
  return (<>
    <div className='main-container'>
      <Home/>
      <About/>
      <Experience/>
      <Service/>
      <Project/>
      <Contact/>
    </div>
  </>)
}

export default Main
