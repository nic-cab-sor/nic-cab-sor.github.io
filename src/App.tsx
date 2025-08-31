// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import MyNavbar from './components/MyNavbar'
import Intro from './sections/Intro'
import Projects from './sections/Projects'
import MyJourney from './sections/MyJourney'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Footer from './components/Footer'
// import './styles/App.css'

function App() {

  return (
    <>
      <header>
        <MyNavbar />
        <Intro />
      </header>

      <main>
        <Projects></Projects>
        <MyJourney></MyJourney>
        <AboutMe></AboutMe>
        <footer>
          <Contact></Contact>
        </footer>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
