import cover from "./assets/cover.jpg"
import Footer from './components/Footer'
import MyNavbar from './components/MyNavbar'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Intro from './sections/Intro'
import MyJourney from './sections/MyJourney'
import Projects from './sections/Projects'
import './styles/App.css'

function App() {

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className="col-12 col-md-9">
          <header>
            <MyNavbar />
          </header>

          <main className='d-flex flex-column gap-2 gap-md-3 gap-lg-4'>
            <figure className="position-relative overflow-hidden mb-4" style={{ height: "20rem" }}>
              <img
                src={cover}
                alt="Cover image"
                className="w-100 h-100"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </figure>
            <Intro />
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
