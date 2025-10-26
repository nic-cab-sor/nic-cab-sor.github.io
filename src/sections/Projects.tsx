import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import ProjectCard from "../components/ProjectCard";
import { JAVA_BADGE, JS_BADGE, PYTHON_BADGE, BOOTSTRAP_BADGE } from "../constants/elements";

function Projects() {
    const githubPage = "https://github.com";
    return (
        <section id='projects'>
            <header>
                <h2>Projects</h2>
            </header>
            <p>Here are some projects I've worked on.</p>
            <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 justify-content-center gap-2 p-2">
                <ProjectCard githubLink={githubPage} image={img1} title="Example Project" description="This is an example project description. This is an example project description. This is an example project description." skills={[JAVA_BADGE]} />
                <ProjectCard githubLink={githubPage} image={img2} title="title" description="description" skills={[JS_BADGE, PYTHON_BADGE]} />
                <ProjectCard githubLink={githubPage} image={img3} title="title" description="description" skills={[JS_BADGE]} />
                <ProjectCard githubLink={githubPage} image={img1} title="title" description="description" skills={[JAVA_BADGE, JS_BADGE]} />
                <ProjectCard githubLink={githubPage} image={img2} title="title" description="description" skills={[JS_BADGE, BOOTSTRAP_BADGE]} />
            </div>
        </section>
    )
}

export default Projects