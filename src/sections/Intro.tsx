import '../styles/Intro.css'

function Intro() {
    return (
        <section id='intro' className="min-vh-100 d-flex align-items-center justify-content-center">
            <div className='w-100 d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 gap-md-5 p-5'>
                <img src="my_picture.png" className="fluid-clamp" alt="My Picture">
                </img>
                <header className="fluid-clamp d-flex flex-column align-items-center align-items-md-start">
                    <h1 className="custom-heading fw-bold fst-italic">NICOLE CABAYA</h1>
                    <p className="fs-6 fs-sm-4 text-center text-md-start">Hello There! I'm a software engineer. I like to solve problems, making processes efficient, and I'm all about helping users, one line of code at a time!</p>
                    <p className="fs-6 text-center text-md-start">My hobbies are playing the guitar, playing volleyball, and playing my favourite game <span className="fst-italic">Counter Strike!</span></p>
                    <button type="button" className="btn custom-button fst-italic fw-bold">showProjects()</button>
                </header>
            </div>
        </section >
    )
}

export default Intro