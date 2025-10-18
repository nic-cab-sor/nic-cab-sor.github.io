import codeImg from "../assets/code.jpeg";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <section id='projects' className="pb-4">
            <header>
                <h1>Projects</h1>
            </header>
            <p>my projects will go here</p>
            <ProjectCard image={codeImg} title="title" description="description" skills={
                <>
                    <span className="badge text-bg-warning">Java</span>
                    <span className="badge text-bg-info">JS</span>
                </>
            } />
        </section>
    )
}

export default Projects