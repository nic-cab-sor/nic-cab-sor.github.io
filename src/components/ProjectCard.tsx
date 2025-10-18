type ProjectInfo = {
    image: string,
    title: string,
    description: string,
    skills: React.ReactNode;
}

function ProjectCard({ image, title, description, skills }: ProjectInfo) {
    return (
        <article className="card shadow-sm rounded-4 overflow-hidden">
            <figure className="mb-0">
                <img
                    src={image}
                    alt={title}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "200px" }}
                />
            </figure>
            <section className="card-body">
                <header>
                    <h2 className="card-title h5 fw-bold">{title}</h2>
                </header>
                <p className="card-text text-secondary">{description}</p>
                <footer className="mt-3 d-flex gap-2">{skills}</footer>
            </section>
        </article>
    )
}

export default ProjectCard