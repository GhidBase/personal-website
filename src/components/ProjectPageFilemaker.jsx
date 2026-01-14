import ldg from "../assets/ldg-2.png";
import ldg2 from "../assets/ldg-3.png";
import bst from "../assets/BST.webp";
import { Link } from "react-router";
import { useViewTransitionNavigate } from "../transitionFunction";
import filemaker from "../assets/filemaker.avif";

export default function ProjectPageFilemaker({ title, imgSrc }) {
    const navigate = useViewTransitionNavigate();
    return (
        <div className="p-10 fade-in-two">
            <div
                onClick={() => navigate("/")}
                className="
                    inline-block
                    mb-6
                    text-sm
                    text-zinc-400
                    hover:text-white
                    transition-colors"
            >
                ← Back to portfolio
            </div>

            <section className="max-w-4xl mx-auto pt-18">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-center mb-6">
                    {title}
                </h1>

                <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto text-center">
                    Professional FileMaker development focused on building and
                    maintaining database-driven business applications used in
                    real operational environments.
                </p>

                <p className="mt-6 text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto text-center">
                    Due to the proprietary nature of the systems I worked on,
                    the video below demonstrates a representative FileMaker
                    solution showcasing layout customization and workflow logic.
                </p>

                <div className="mt-8 mb-12 h-px w-24 mx-auto bg-zinc-700" />

                <div
                    id={title + "image"}
                    className="relative h-64 sm:h-120 w-full max-w-2xl mx-auto"
                >
                    <iframe
                        src="https://www.youtube.com/embed/e5IrGtKhHt4?si=7vTfE7JPaX5MEn5L"
                        className="w-full h-full"
                        title="FileMaker Example Workflow"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <p className="mt-4 text-xs text-zinc-500 text-center">
                    Representative example demonstrating layout structure,
                    navigation, and workflow logic.
                </p>
            </section>

            <section className="mt-20 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">
                    Scope of Professional Work
                </h2>

                <ul className="space-y-6 text-zinc-300 leading-relaxed">
                    <li>
                        Designed and maintained relational FileMaker databases
                        supporting day-to-day business operations for
                        non-technical users.
                    </li>

                    <li>
                        Built custom layouts, scripts, and workflows to support
                        data entry, reporting, and internal process automation.
                    </li>

                    <li>
                        Worked within existing systems while extending and
                        refactoring solutions to meet evolving business needs.
                    </li>

                    <li className="text-zinc-400">
                        Examples shown are simplified representations due to the
                        proprietary nature of production systems.
                    </li>
                </ul>
            </section>

            <div className="mt-24 text-center">
                <Link
                    to="/"
                    className="
                        text-sm
                        text-zinc-400
                        hover:text-white
                        transition-colors"
                >
                    ← Back to portfolio
                </Link>
            </div>
        </div>
    );
}
