type ProjectInfo = {
    title: string,
    description: string,
    skills: string[],
    githubLink: string;
}

function ProjectCardCS2({ title, description, skills, githubLink }: ProjectInfo) {
    return (
        <div className="p-1">
            <div className="py-2 px-3 h-100 project-card-bg-colour border border-dark rounded-1 d-flex flex-column justify-content-between gap-3">
                <h5 className="m-0 text-info text-end fw-bold fst-italic">{title}</h5>
                <p className="m-0 text-info">{description}</p>
                <div className="text-info fw-bold d-flex flex-wrap gap-2 justify-content-end">
                    {skills.map((skill, index) => (
                        <span className="badge text-bg-info" key={index}>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCardCS2