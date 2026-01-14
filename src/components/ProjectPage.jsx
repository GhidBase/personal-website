import ldg from "../assets/ldg-2.png";
import ldg2 from "../assets/ldg-3.png";
import { Fragment } from "react";
import { Link } from "react-router";
import { useViewTransitionNavigate } from "../transitionFunction";
import cmsGif from "../assets/ldg-vid.gif";

export default function ProjectPage({ title }) {
    const navigate = useViewTransitionNavigate();
    return (
        <div className="p-10 fade-in-two">
            <div
                onClick={() => navigate("/projects/lucky-defense")}
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
                    A full-stack game-guide platform with{" "}
                    <span className="text-white font-medium">
                        700,000+ views
                    </span>
                    , built from scratch. Custom CMS, React, PostgreSQL +
                    Prisma, Amazon S3, and an API designed for real traffic and
                    long-term growth.
                </p>

                <div className="mt-12 mb-16 h-px w-24 mx-auto bg-zinc-700" />

                <div
                    id={title + "image"}
                    className="relative h-64 md:h-64 w-full max-w-3xl mx-auto"
                >
                    <img
                        src={cmsGif}
                        alt="Custom CMS editing workflow"
                        className="
                                rounded-lg
                                border border-zinc-700
                                max-w-full
                                h-full
                                w-full
                                object-top
                                object-cover
                                shadow-sm"
                    />
                </div>

                <p className="mt-4 text-xs text-zinc-500 text-center">
                    Live production system • Custom CMS • Real users
                </p>
            </section>

            <section className="mt-32 max-w-3xl">
                <h2 className="text-3xl font-semibold mb-8">Tech Stack</h2>

                <ul className="space-y-6">
                    <li>
                        <p className="text-xs uppercase tracking-wide text-zinc-500 mb-1">
                            Frontend
                        </p>
                        <p className="text-zinc-200">React, Tailwind CSS</p>
                    </li>

                    <li>
                        <p className="text-xs uppercase tracking-wide text-zinc-500 mb-1">
                            Backend
                        </p>
                        <p className="text-zinc-200">
                            Node.js, Express, custom REST API
                        </p>
                    </li>

                    <li>
                        <p className="text-xs uppercase tracking-wide text-zinc-500 mb-1">
                            Database
                        </p>
                        <p className="text-zinc-200">
                            PostgreSQL with Prisma ORM
                        </p>
                    </li>

                    <li>
                        <p className="text-xs uppercase tracking-wide text-zinc-500 mb-1">
                            CMS
                        </p>
                        <p className="text-zinc-200">
                            Custom CMS with integrated TinyMCE editor
                        </p>
                    </li>

                    <li>
                        <p className="text-xs uppercase tracking-wide text-zinc-500 mb-1">
                            Deployment
                        </p>
                        <p className="text-zinc-200">
                            Production deployment with environment-based
                            configs, optimized for live traffic
                        </p>
                    </li>
                </ul>
            </section>
            <section className="mt-20 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">
                    Key Technical Decisions
                </h2>

                <ul className="space-y-4 text-zinc-300 leading-relaxed">
                    <li>
                        <span className="font-medium text-zinc-200">
                            Custom CMS:
                        </span>{" "}
                        Built to enable in-site content editing, matching the
                        workflow of professional publishing platforms and
                        avoiding reliance on external services.
                    </li>

                    <li>
                        <span className="font-medium text-zinc-200">
                            Custom API:
                        </span>{" "}
                        Designed the API with scalability in mind, allowing the
                        platform to expand beyond a single game and support
                        multiple content domains.
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
