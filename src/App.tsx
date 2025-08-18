// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Intro from './sections/Intro'
import AboutMe from './sections/AboutMe'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'
import './styles/App.css'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <Projects></Projects>
      <Experience></Experience>
      <Education></Education>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </>
  )
}

export default App
