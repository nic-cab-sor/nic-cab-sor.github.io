import cover from "./assets/cover.jpg"
import Footer from './components/Footer'
import MyNavbar from './components/MyNavbar'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Intro from './sections/Intro'
import MyJourney from './sections/MyJourney'
import Projects from './sections/Projects'
import ProjectsCS2 from "./sections/ProjectsCS2"
import './styles/App.css'

function App() {

  return (
    // <div className='container'>
    //   <div className='row justify-content-center'>
    //     <div className="col-12 col-md-9">
    //       <main className='m-2 m-md-3 m-md-4 d-flex flex-column gap-2 gap-md-3 gap-lg-4'>
    //         <Intro />
    //         {/* <ProjectsCS2 /> */}
    //         {/* <Projects></Projects> */}
    //         {/* <MyJourney></MyJourney> */}
    //         {/* <AboutMe></AboutMe> */}
    //         {/* <footer>
    //           <Contact></Contact>
    //         </footer> */}
    //       </main>

    //       <footer>
    //         {/* <Footer></Footer> */}
    //       </footer>
    //     </div>
    //   </div>
    // </div>

    <div>
      <Intro></Intro>
      <Projects></Projects>
    </div>
  )
}

export default App
