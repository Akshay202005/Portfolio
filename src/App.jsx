import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Home />
      <hr className='text-white/30'/>
      <About />
      <hr className='text-white/30'/>
      <Skill />
      <hr className='text-white/30'/>
      <Project />
      <hr className='text-white/30'/>
      <Contact />

      <Footer />
    </>
  )
}

export default App
