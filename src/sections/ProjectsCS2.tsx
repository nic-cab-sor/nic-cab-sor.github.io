import ProjectCardCS2 from "../components/ProjectCardCS2"

function ProjectsCS2() {
    return (
        <>
            <h1>Projects CS2</h1>
            <section className="d-grid row-gap-1">
                <header className="project-bg-colour py-1">
                    <h3 className="m-0 text-center">
                        <span className="text-white-50">Nicole Cabaya's </span>
                        <span className="text-white">Projects</span>
                    </h3>
                </header>
                <div className="project-bg-colour pb-3 px-4">
                    <h2 className="m-0 pt-1 pb-2 text-white fw-bold text-center">idk what to write here</h2>
                    <div className="row row-cols-lg-2 row-cols-xl-3">
                        <ProjectCardCS2 title="Front End" description="Here will go a short description about the project. About two sentences long i think. Here will go a short description about" skills={["Python", "Java"]} githubLink="github link" />
                        <ProjectCardCS2 title="Back End" description="Here will go a short description about the project. About two sentences long i think." skills={["HTML", "CSS", "JavaScript"]} githubLink="github link" />
                        <ProjectCardCS2 title="Java Project" description="Here will go a short description about the project. About two sentences long i think." skills={["CSS", "JavaScript"]} githubLink="github link" />
                        <ProjectCardCS2 title="HTML CSS" description="Here will go a short description about the project. About two sentences long i think." skills={["Ruby", "Java", "JavaScript"]} githubLink="github link" />
                        <ProjectCardCS2 title="AI Project" description="Here will go a short description about the project. About two sentences long i think." skills={["Java", "JavaScript"]} githubLink="github link" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectsCS2