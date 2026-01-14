import ldg from "../assets/ldg-2.png";
import ldg2 from "../assets/ldg-3.png";
import { Fragment } from "react";

export default function ProjectPage({ title }) {
    return (
        <div className="p-10 pt-24">
            <section className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-center mb-6">
                    {title}
                </h1>

                <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto text-center">
                    A full-stack game-guide platform with{" "}
                    <span className="text-white font-medium">
                        700,000+ views
                    </span>
                    , built from scratch. Custom CMS, React, PostgreSQL +
                    Prisma, and an API designed for real traffic and long-term
                    growth.
                </p>

                <div className="mt-12 mb-16 h-px w-24 mx-auto bg-zinc-700" />

                <div
                    id={title + "image"}
                    className="relative h-48 md:h-64 w-full max-w-3xl mx-auto"
                >
                    <div
                        className="
                            w-full h-full
                            bg-cover bg-top
                            rounded-xl
                            border border-zinc-700
                            shadow-lg
                            transition-transform duration-500
                            hover:scale-[1.01]"
                        style={{ backgroundImage: `url(${ldg2})` }}
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
        </div>
    );
}
