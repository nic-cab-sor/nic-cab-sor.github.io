import ArrowDownIcon from "../assets/arrow_down.svg";
import '../styles/Intro.css'

function Intro() {
    return (
        <section id='intro' className="min-vh-100 d-flex flex-column justify-content-center align-items-center p-3">
            <img src="my_picture.png" className="hero-img" alt="My Picture">
            </img>

            <div className='hero-text d-flex flex-column gap-2 pt-2'>
                <h1 className="hero-heading fw-bold fst-italic text-center m-0 p-0">NICOLE CABAYA</h1>

                <div className='d-inline-flex flex-column flex-sm-row justify-content-center gap-2'>
                    <span className="badge rounded-pill text-bg-primary">Self-motivated</span>
                    <span className="badge rounded-pill text-bg-warning">Problem Solver</span>
                    <span className="badge rounded-pill text-bg-danger">Pro Gamer</span>
                </div>

                <p className="text-center m-0">Hi! I'm a <span className='fw-bold'>Software Engineer</span>, I write code to make processes easier and users <span className='fw-bold'>happier</span> — <span className='fst-italic'>one line</span> at a time.</p>

                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img id="arrowDown" className="bounce" src={ArrowDownIcon} alt="Arrow Down Icon" width={20} height={20} />
                    <a href="#projects" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">PROJECTS</a>
                </div>
            </div>
        </section >
    )
}

export default Intro