import ProjectCard from "../components/ProjectCard";
import { BACK_END_BADGE, BOOTSTRAP_BADGE, FRONT_END_BADGE, FULL_STACK_BADGE, JAVA_BADGE, JS_BADGE, PYTHON_BADGE } from "../constants/elements";

function Projects() {
    const githubPage = "https://github.com";
    return (
        <section id='projects'>
            <header>
                <h2>Projects</h2>
            </header>
            <p>Here are some projects I've worked on.</p>
            <div className="row row-cols-lg-2">
                <ProjectCard githubLink={githubPage} type={FRONT_END_BADGE} title="Example Project" description="This is an example project description." skills={[JAVA_BADGE]} />
                <ProjectCard githubLink={githubPage} type={BACK_END_BADGE} title="title" description="description" skills={[JS_BADGE, PYTHON_BADGE]} />
                <ProjectCard githubLink={githubPage} type={FULL_STACK_BADGE} title="title" description="description" skills={[JS_BADGE]} />
                <ProjectCard githubLink={githubPage} type={FRONT_END_BADGE} title="title" description="description" skills={[JAVA_BADGE, JS_BADGE]} />
                <ProjectCard githubLink={githubPage} type={FRONT_END_BADGE} title="title" description="description" skills={[JS_BADGE, BOOTSTRAP_BADGE]} />
            </div>
        </section>
    )
}

export default Projects