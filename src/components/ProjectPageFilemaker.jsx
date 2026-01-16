import { Link } from "react-router";
import { useViewTransitionNavigate } from "../transitionFunction";

export default function ProjectPageFilemaker({ title }) {
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
                    Professional experience building and maintaining
                    database-driven business applications used in real
                    operational environments.
                </p>

                {/* Credly validation block */}
                <div className="mt-8 text-center">
                    <p className="text-zinc-300 text-base">
                        Vendor-certified in database-driven application
                        development and automation platforms.
                    </p>

                    <a
                        href="https://www.credly.com/users/YOUR-CREDLY-USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-block
                            mt-2
                            text-sm
                            text-blue-400
                            hover:text-blue-300
                            transition-colors"
                    >
                        View full certification transcript (Credly)
                    </a>
                </div>

                <div className="mt-10 mb-12 h-px w-24 mx-auto bg-zinc-700" />

                {/* Video section (now clearly optional) */}
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mx-auto text-center mb-4">
                    Optional overview video demonstrating a representative
                    FileMaker workflow. Production systems cannot be shown due
                    to proprietary constraints.
                </p>

                <div
                    className="
                        relative
                        h-64 sm:h-120
                        w-full
                        max-w-2xl
                        mx-auto
                        opacity-90
                    "
                >
                    <iframe
                        src="https://www.youtube.com/embed/e5IrGtKhHt4"
                        className="w-full h-full rounded-md"
                        title="FileMaker Example Workflow"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
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
                        Designed and maintained relational databases supporting
                        day-to-day business operations for non-technical users.
                    </li>

                    <li>
                        Built custom layouts, scripts, and workflows for data
                        entry, reporting, and internal process automation.
                    </li>

                    <li>
                        Extended and refactored existing systems to meet evolving
                        business requirements while preserving data integrity.
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
