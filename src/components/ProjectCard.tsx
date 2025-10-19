type ProjectInfo = {
    image: string,
    title: string,
    description: string,
    skills: React.ReactNode;
}

function ProjectCard({ image, title, description, skills }: ProjectInfo) {
    return (
        <article className="card rounded-4 p-0 overflow-hidden">
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
            >
                <figure className="m-0 p-0">
                    <img src={image} className="card-img-top" alt={title} style={{ height: "200px", objectFit: "cover" }}/>
                </figure>
                <section className="card-body">
                    <div className="d-flex flex-wrap gap-2 pb-2">{skills}</div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-secondary">{description}</p>
                </section>
            </a>
        </article>
    )
}

export default ProjectCard