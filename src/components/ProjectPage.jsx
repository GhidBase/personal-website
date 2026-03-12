import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useViewTransitionNavigate } from "../transitionFunction";
import cmsGif from "../assets/ldg-vid.gif";
import cmsGif2 from "../assets/CMS.gif";
import authGif from "../assets/auth.gif";
import adminGif from "../assets/admin-panel.gif";
import multiGameGif from "../assets/multi-game.gif";
import navbarCustomizerGif from "../assets/navbar-customizer.gif";
import responsiveGif from "../assets/responsive-design.gif";

const stack = {
    Frontend: ["React", "React Router", "Vite", "Tailwind CSS", "JavaScript (ES6+)"],
    Backend: ["Node.js", "Express", "REST API", "Passport.js"],
    Database: ["PostgreSQL", "Prisma ORM"],
    Storage: ["AWS S3"],
    Deployment: ["Render", "Neon", "Hostinger"],
};

const additionalHighlights = [
    {
        title: "Block-based content engine",
        body: "Content is broken into typed blocks (text, heading, image, section) stored in the database, each of which may contain HTML produced by the editor. The frontend renders each block according to its type rather than treating a page as one monolithic blob. This keeps content structured, editor-friendly, and easy to query or reorder.",
    },
    {
        title: "Image upload pipeline",
        body: "The backend handles multipart form uploads, streams files to S3 with generated keys, and returns a URL that gets embedded in the content block record. Images are served directly from S3 without additional proxying.",
    },
    {
        title: "Production-grade deployment",
        body: "The frontend, API, database, and media storage all run on separate services with environment-based configuration. I handle deployments, environment variables, and incident response as the sole maintainer.",
    },
];

function Lightbox({ src, alt, onClose }) {
    useEffect(() => {
        const handler = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    return (
        <div
            onClick={onClose}
            className="
                fixed inset-0 z-50
                bg-black/90
                flex items-center justify-center
                p-6 cursor-zoom-out"
        >
            <img
                src={src}
                alt={alt}
                className="max-h-full max-w-full rounded-lg object-contain"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}

export default function ProjectPage({ title }) {
    const navigate = useViewTransitionNavigate();
    const [lightbox, setLightbox] = useState(null);
    return (
        <div className="p-10 pt-6 fade-in-two">
            {lightbox && (
                <Lightbox
                    src={lightbox.src}
                    alt={lightbox.alt}
                    onClose={() => setLightbox(null)}
                />
            )}
            <div
                onClick={() => navigate("/")}
                className="
                    inline-block
                    mb-6
                    text-sm
                    text-zinc-400
                    hover:text-white
                    transition-colors
                    cursor-pointer"
            >
                ← Back to portfolio
            </div>

            {/* Hero */}
            <section className="max-w-4xl mx-auto pt-18">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-center mb-6">
                    {title}
                </h1>

                <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto text-center">
                    A production full-stack content platform with{" "}
                    <span className="text-white font-medium">
                        700,000+ lifetime page views
                    </span>
                    , built and maintained solo. Features a custom CMS, a
                    block-based content engine, a REST API, and a multi-game
                    architecture — all deployed across production infrastructure.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <a
                        href="https://luckydefenseguides.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            w-full sm:w-auto
                            px-6 py-3 sm:py-2
                            rounded-md
                            bg-white/5
                            border border-white/20
                            text-white/90 text-sm
                            text-center
                            hover:bg-white/15
                            transition-all"
                    >
                        Live Site ↗
                    </a>
                    <a
                        href="https://github.com/GhidBase/guide-site-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            w-full sm:w-auto
                            px-6 py-3 sm:py-2
                            rounded-md
                            bg-white/5
                            border border-white/20
                            text-white/90 text-sm
                            text-center
                            hover:bg-white/15
                            transition-all"
                    >
                        Backend Repo ↗
                    </a>
                    <a
                        href="https://github.com/GhidBase/guide-site-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            w-full sm:w-auto
                            px-6 py-3 sm:py-2
                            rounded-md
                            bg-white/5
                            border border-white/20
                            text-white/90 text-sm
                            text-center
                            hover:bg-white/15
                            transition-all"
                    >
                        Frontend Repo ↗
                    </a>
                </div>

                <div className="mt-12 mb-16 h-px w-24 mx-auto bg-zinc-700" />

                <div
                    id={title + "image"}
                    className="relative h-64 sm:h-100 md:h-130 w-full max-w-3xl mx-auto"
                >
                    <img
                        src={cmsGif}
                        alt="Custom CMS editing workflow"
                        onClick={() => setLightbox({ src: cmsGif, alt: "Custom CMS editing workflow" })}
                        className="
                            rounded-lg
                            border border-zinc-700
                            max-w-full
                            h-full
                            w-full
                            object-top
                            object-cover
                            shadow-sm
                            cursor-zoom-in"
                    />
                </div>

                <p className="mt-4 text-xs text-zinc-500 text-center">
                    Live production system • Custom CMS • Real users
                </p>
            </section>

            {/* All remaining sections */}
            <div className="max-w-5xl mx-auto">

                {/* Scale & Impact */}
                <section className="mt-24 pt-24 border-t border-zinc-800">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-10">
                            Scale &amp; Impact
                        </h2>
                        <div className="flex flex-col md:flex-row gap-12 md:items-center">
                            <div className="shrink-0 text-center md:text-left">
                                <p className="text-7xl md:text-8xl font-bold text-white leading-none">
                                    700k+
                                </p>
                                <p className="text-zinc-500 mt-2 text-xs uppercase tracking-widest">
                                    lifetime page views
                                </p>
                            </div>
                            <div className="space-y-5">
                                {[
                                    "Consistent organic traffic driven by search engine indexing and community sharing — no paid promotion",
                                    "Sole developer across the entire stack: data modeling, API design, frontend, CMS, infrastructure, and ongoing maintenance",
                                    "Platform architecture supports future expansion to additional games with no structural changes required",
                                ].map((item) => (
                                    <div key={item} className="pl-4 border-l-2 border-zinc-700">
                                        <p className="text-zinc-300 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="mt-24 pt-24 border-t border-zinc-800">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-8">Tech Stack</h2>
                        <div className="space-y-6">
                            {Object.entries(stack).map(([category, items]) => (
                                <div key={category}>
                                    <p className="text-xs uppercase tracking-wide text-zinc-500 mb-3">
                                        {category}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((item) => (
                                            <span
                                                key={item}
                                                className="
                                                    px-3 py-1
                                                    text-sm
                                                    rounded-full
                                                    bg-zinc-800
                                                    border border-zinc-700
                                                    text-zinc-300"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Engineering Highlights */}
                <section className="mt-24 pt-24 border-t border-zinc-800">
                    <h2 className="text-3xl font-semibold mb-10">
                        Engineering Highlights
                    </h2>

                    <div className="space-y-16 md:space-y-24">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:flex-1 md:py-6">
                                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                                    Custom CMS
                                </h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    Content creators can write and edit guides
                                    directly on the live site through a custom
                                    editor interface backed by the same API. No
                                    third-party CMS dependency — the editing
                                    workflow, data model, and access controls are
                                    all purpose-built.
                                </p>
                            </div>
                            <div className="md:flex-1 relative">
                                <img
                                    src={cmsGif2}
                                    alt="Custom CMS editing workflow"
                                    onClick={() => setLightbox({ src: cmsGif2, alt: "Custom CMS editing workflow" })}
                                    className="md:absolute md:inset-0 w-full h-full rounded-lg border border-zinc-700 object-cover cursor-zoom-in"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse gap-8">
                            <div className="md:flex-1 md:py-6">
                                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                                    Session-based Auth &amp; Role Access Control
                                </h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    Auth is handled with Passport.js and
                                    server-side sessions. The API enforces two
                                    roles: admin users have full CMS access
                                    (create, edit, delete content), while standard
                                    users have read-level access. Protected routes
                                    check session state and role before processing
                                    any write operation.
                                </p>
                            </div>
                            <div className="md:flex-1 relative">
                                <div className="md:absolute md:inset-0 flex flex-col gap-3">
                                    <img
                                        src={authGif}
                                        alt="Login flow"
                                        onClick={() => setLightbox({ src: authGif, alt: "Login flow" })}
                                        className="w-full flex-1 min-h-0 rounded-lg border border-zinc-700 object-cover cursor-zoom-in"
                                    />
                                    <img
                                        src={adminGif}
                                        alt="Role management"
                                        onClick={() => setLightbox({ src: adminGif, alt: "Role management" })}
                                        className="w-full flex-1 min-h-0 rounded-lg border border-zinc-700 object-cover cursor-zoom-in"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:flex-1 md:py-6">
                                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                                    Per-game Navbar Customizer
                                </h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    Each game on the platform has its own
                                    independently configured navigation bar.
                                    Admins can add, remove, and reorder nav items
                                    through the CMS without touching code. Nav
                                    structure is stored in the database and fetched
                                    dynamically per game slug, keeping the frontend
                                    fully data-driven.
                                </p>
                            </div>
                            <div className="md:flex-1 relative">
                                <img
                                    src={navbarCustomizerGif}
                                    alt="Per-game navbar customizer"
                                    onClick={() => setLightbox({ src: navbarCustomizerGif, alt: "Per-game navbar customizer" })}
                                    className="md:absolute md:inset-0 w-full h-full rounded-lg border border-zinc-700 object-cover cursor-zoom-in"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse gap-8">
                            <div className="md:flex-1 md:py-6">
                                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                                    Multi-game Architecture
                                </h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    From the start I designed the schema to support
                                    multiple games, not just Lucky Defense.
                                    Slug-based routing and database-driven
                                    navigation mean the platform can onboard a new
                                    game title — complete with its own pages,
                                    content, and navbar — without any frontend code
                                    changes.
                                </p>
                            </div>
                            <div className="md:flex-1 relative">
                                <img
                                    src={multiGameGif}
                                    alt="Multi-game support"
                                    onClick={() => setLightbox({ src: multiGameGif, alt: "Multi-game support" })}
                                    className="md:absolute md:inset-0 w-full h-full rounded-lg border border-zinc-700 object-cover cursor-zoom-in"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 md:items-center">
                            <div className="md:flex-1">
                                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                                    Responsive Design
                                </h3>
                                <p className="text-zinc-300 leading-relaxed">
                                    The site is fully responsive with a dedicated
                                    mobile navigation experience. On smaller screens
                                    the desktop navbar is replaced with a separate
                                    mobile menu, keeping the interface clean and
                                    usable regardless of device.
                                </p>
                            </div>
                            <div className="md:flex-1 flex justify-center">
                                <img
                                    src={responsiveGif}
                                    alt="Responsive mobile navigation"
                                    onClick={() => setLightbox({ src: responsiveGif, alt: "Responsive mobile navigation" })}
                                    className="max-h-64 rounded-lg border border-zinc-700 object-contain cursor-zoom-in"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Additional highlights */}
                    <div className="mt-16 pt-10 border-t border-zinc-800/60 max-w-3xl mx-auto">
                        <p className="text-xs uppercase tracking-widest text-zinc-600 mb-6">
                            Also notable
                        </p>
                        <div className="space-y-6">
                            {additionalHighlights.map(({ title, body }) => (
                                <div key={title} className="pl-4 border-l-2 border-zinc-700">
                                    <p className="font-medium text-zinc-100 mb-1">{title}</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Architecture */}
                <section className="mt-24 pt-24 border-t border-zinc-800">
                    <div className="max-w-3xl mx-auto space-y-4 text-zinc-300 leading-relaxed">
                        <h2 className="text-3xl font-semibold mb-4 text-white">Architecture</h2>
                        <p>
                            What began as a small static site grew into a
                            full-stack content platform built around a custom
                            CMS. Rather than adopting an off-the-shelf solution,
                            I designed the content model from scratch — giving
                            full control over data shape, rendering logic, and
                            extensibility.
                        </p>
                        <p>
                            The backend is a Node.js/Express REST API with a
                            PostgreSQL database managed through Prisma ORM. The
                            data model is built around a hierarchy of{" "}
                            <span className="text-zinc-100 font-medium">
                                Games → Pages → Sections → Content Blocks
                            </span>
                            , with Tags for cross-linking related content. Each
                            content block has a typed structure (text, heading,
                            image, embed), which the React frontend uses to
                            dynamically render any page without hardcoded layouts.
                        </p>
                        <p>
                            Routes follow a{" "}
                            <span className="text-zinc-100 font-mono text-sm">
                                /games/:gameSlug/:pageSlug
                            </span>{" "}
                            pattern, making the platform fully multi-game from
                            day one. Adding support for a new game requires only
                            database entries — no frontend code changes needed.
                        </p>
                        <p>
                            Media is handled through a backend upload pipeline
                            that streams images directly to AWS S3 and stores
                            the resulting URLs in content block records. The
                            frontend is a React SPA deployed separately from the
                            API, using React Router for client-side navigation
                            and Vite for bundling. The API is hosted on Render,
                            the database on Neon (serverless PostgreSQL), and
                            static assets on Hostinger.
                        </p>
                    </div>
                </section>

            </div>

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
