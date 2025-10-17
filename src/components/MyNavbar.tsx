function MyNavbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-md bg-transparent">
            <div className="container-fluid">
                <div className="collapse navbar-collapse p-2" id='my-navbar-nav'>
                    <ul className='navbar-nav flex-row d-flex justify-content-evenly ms-auto fw-semibold'>
                        <li className="navbar-item">
                            <a className="nav-link active" href='#intro'>Intro</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link active" href='#projects'>Projects</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link active" href='#journey'>Journey</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link active" href='#about'>About</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link active" href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
                <button className="navbar-toggler m-auto border-0 bg-transparent p-0" type="button" data-bs-toggle="collapse" data-bs-target="#my-navbar-nav" aria-controls="my-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <svg className="p-1" fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M490,165.37l-91.698-88.842L245,231.766L91.698,76.528L0,165.37l245,248.102L490,165.37z M91.219,119.611L245,275.343 l153.781-155.732l47.717,46.237L245,369.91L43.502,165.848L91.219,119.611z"></path> </g></svg>
                </button>
            </div>
        </nav>
    )
}

export default MyNavbar