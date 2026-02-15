import ProjectCard from "../components/ProjectCard";

function Projects() {
    const githubPage = "https://github.com"; // TODO: Remove this and link the actual projects
    return (
        <section id='projects' className="row d-flex justify-content-center pb-5">
            <main className="col col-md-9 col-xl-8">
                <header>
                    <h2 className="pb-3 text-center">Projects</h2>
                </header>
                <ProjectCard githubLink={githubPage} title="PYTHON PROJECT" description="This is an example python project description." skills={["#Java", "#Python"]} />
                <ProjectCard githubLink={githubPage} title="JAVA GAME" description="This is an example java game with more text than the previous card. I will make this even longer to compare the cards." skills={["#Bootstrap"]} />
                <ProjectCard githubLink={githubPage} title="DESKTOP APP" description="This is short text." skills={["#Javascript"]} />
            </main>
        </section>
    )
}

export default Projects