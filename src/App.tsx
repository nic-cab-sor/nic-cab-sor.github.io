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
    <div className='container'>
      <div className='row justify-content-center'>
        <div className="col-12 col-md-8">
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
        </div>
      </div>
    </div>
  )
}

export default App
