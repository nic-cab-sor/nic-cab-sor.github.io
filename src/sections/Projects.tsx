import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import ProjectCard from "../components/ProjectCard";

const javaBadge: React.ReactNode = createBadge("text-bg-danger", "Java");
const javascript: React.ReactNode = createBadge("text-bg-info", "JavaScript");
const pythonBadge: React.ReactNode = createBadge("text-bg-warning", "Python");
const bootstrapBadge: React.ReactNode = createBadge("text-bg-secondary", "Bootstrap")

/**
 * @param colour A bootstrap class that defines the colour of the badge.
 * @param text The text of the badge.
 * @returns Returns a span element that represents a badge given the bootstrap colour class and the text of the badge.
 */
function createBadge(colour: string, text: string): React.ReactNode {
    return <span className={"badge " + colour}>{text}</span>;
}

function Projects() {
    return (
        <section id='projects'>
            <header>
                <h1>Projects</h1>
            </header>
            <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 justify-content-center gy-2 p-2">
                <ProjectCard image={img1} title="Example Project" description="This is an example project description." skills={[javaBadge]} />
                <ProjectCard image={img2} title="title" description="description" skills={[javascript]} />
                <ProjectCard image={img3} title="title" description="description" skills={[pythonBadge]} />
                <ProjectCard image={img1} title="title" description="description" skills={[javaBadge, javascript]} />
                <ProjectCard image={img2} title="title" description="description" skills={[javascript, bootstrapBadge]} />
            </div>
        </section>
    )
}

export default Projects