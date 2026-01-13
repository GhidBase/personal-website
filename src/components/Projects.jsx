import Project from "./Project";
export default function Projects({ projects }) {
    return (
        <div
            id="Projects"
            className="w-full mx-auto max-w-350 gap-16 2xl:pt-40 
                flex flex-col md:flex-row
                md:justify-between items-center
                "
        >
            {projects.map((project) => (
                <Project
                    title={project.title}
                    description={project.description}
                    imgSrc={project.imgSrc}
                ></Project>
            ))}
            {/* <Project title={"Lucky Defense Guides"}></Project>
            <Project title="DSA Algorithms"></Project> */}
        </div>
    );
}
