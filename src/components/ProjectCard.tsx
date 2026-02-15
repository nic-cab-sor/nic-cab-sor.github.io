import '../styles/ProjectCard.css'

type Project = {
    title: string,
    description: string,
    skills: string[],
    githubLink: string
}

function ProjectCard({ title, description, skills, githubLink }: Project) {
    return (
        <article className="card rounded-0 border border-dark">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="card-body">
                    <header className="row row-cols-1 row-cols-md-auto justify-content-start justify-content-md-between">
                        <h6 className="card-title fw-bold m-0 pb-1">{title}</h6>
                        <p className="d-flex flex-wrap gap-2 h-100 m-0 pb-1">
                            {skills.map((item: string) => (
                                <span key={item} className='badge text-bg-info'>{item}</span>
                            ))}
                        </p>
                    </header>
                    <p className="card-text text-white-50">{description}</p>
                </div>
            </a>
        </article>
    )
}

export default ProjectCard