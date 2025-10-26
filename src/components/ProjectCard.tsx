type ProjectInfo = {
    title: string,
    type: React.ReactNode,
    description: string,
    skills: React.ReactNode,
    githubLink: string;
}

function ProjectCard({ type, title, description, skills, githubLink }: ProjectInfo) {
    return (
        <article className="card rounded-4 bg-card">
            <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
            >
                <section className="card-body">
                    <div className="d-flex justify-content-between gap-2 mb-2">
                        <h5 className="card-title m-0">{title}</h5>
                        {type}
                    </div>
                    <p className="card-text text-secondary">{description}</p>
                    <div className="d-flex flex-wrap gap-2">{skills}</div>
                </section>
            </a>
        </article>
    )
}

export default ProjectCard