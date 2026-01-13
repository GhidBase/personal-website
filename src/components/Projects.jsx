import Project from "./Project";
export default function Projects({ projects, className }) {
    return (
        <div id="Projects" className={className}>
            {projects.map((project) => (
                <Project
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgSrc={project.imgSrc}
                ></Project>
            ))}
        </div>
    );
}
