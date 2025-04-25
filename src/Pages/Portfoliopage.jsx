import React from 'react'
import Header from '../Components/Header'
import "../assets/css/portfoliomainpage.css"
import Home from '../Components/Home'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Project from '../Components/Project'
import Contact from '../Components/Contact'

function Portfoliopage() {
  return (
    <div className='portfolio--main--page'>
      <Header />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skill"><Skills /></div>
      <div id="project"><Project /></div>
      <div id="contact"><Contact /></div>
    </div>
  )
}

export default Portfoliopage