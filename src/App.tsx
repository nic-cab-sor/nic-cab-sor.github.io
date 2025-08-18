// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Intro from './sections/Intro'
import Projects from './sections/Projects'
import MyJourney from './sections/MyJourney'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import './styles/App.css'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <Projects></Projects>
      <MyJourney></MyJourney>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </>
  )
}

export default App
