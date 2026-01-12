import Project from "./Project";
export default function Projects() {
    return (
        <div id="Projects"
            className="w-full mx-auto max-w-350 gap-8 2xl:pt-40 
                flex flex-col md:flex-row md:justify-center
                items-center"
        >
            <Project title={"Lucky Defense Guides"}></Project>
            <Project title="DSA Algorithms"></Project>
        </div>
    );
}
