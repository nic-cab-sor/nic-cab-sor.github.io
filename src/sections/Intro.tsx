import ArrowDownIcon from "../assets/arrow_down.svg";
import '../styles/Intro.css'

function Intro() {
    return (
        <section id='intro' className="hero-section d-flex flex-column justify-content-center align-items-center p-4">
            <img src="my_picture.png" className="hero-img" alt="My Picture">
            </img>
            
            <div className='hero-text d-flex flex-column gap-2 pt-2'>
                <h1 className="hero-heading fw-bold fst-italic text-center m-0 p-0">NICOLE CABAYA</h1>

                <div className='d-inline-flex flex-column flex-sm-row justify-content-center gap-2'>
                    <span className="badge text-bg-info">#Self-motivated</span>
                    <span className="badge text-bg-light">#Problem Solver</span>
                    <span className="badge text-bg-info">#Pro Gamer</span>
                </div>

                <p className="text-center m-0">Hi! I'm a <span className='fw-bold'>Software Engineer</span>, I write code to make processes easier and users <span className='fw-bold'>happier</span> — <span className='fst-italic'>one line</span> at a time.</p>

                <div className='d-flex flex-column justify-content-center align-items-center gap-1'>
                    <a href="#projects" className="fw-bold link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Go to Projects</a>
                    <img id="arrowDown" className="bounce" src={ArrowDownIcon} alt="Arrow Down Icon" width={20} height={20} />
                </div>
            </div>
        </section >
    )
}

export default Intro