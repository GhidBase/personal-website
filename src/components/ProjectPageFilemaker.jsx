import ldg from "../assets/ldg-2.png";
import ldg2 from "../assets/ldg-3.png";
import bst from "../assets/BST.webp";
import { Link } from "react-router";
import { useViewTransitionNavigate } from "../transitionFunction";

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
                    A collection of core data structures implemented from
                    scratch without the assistances of LLMs, focusing on
                    correctness, performance characteristics, and clear API
                    design.
                </p>

                <div className="mt-12 mb-16 h-px w-24 mx-auto bg-zinc-700" />

                <div
                    id={title + "image"}
                    className="relative h-64 sm:h-120 w-full max-w-2xl mx-auto"
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
                        style={{ backgroundImage: `url(${bst})` }}
                    />
                </div>

                <p className="mt-4 text-xs text-zinc-500 text-center">
                    Console visualizations of data structure behavior and
                    traversal output.
                </p>
            </section>

            <section className="mt-20 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">
                    Implemented Data Structures
                </h2>

                <ul className="space-y-6 text-zinc-300 leading-relaxed">
                    <li>
                        <span className="font-medium text-zinc-200">
                            Linked List:
                        </span>{" "}
                        Implemented a singly linked list with support for
                        insertion, deletion, traversal, and indexing, focusing
                        on pointer manipulation and edge cases.{" "}
                        <a
                            href="https://github.com/yourname/binary-search-tree"
                            className="text-sm text-zinc-400 hover:text-white"
                        >
                            View implementation →
                        </a>
                    </li>

                    <li>
                        <span className="font-medium text-zinc-200">
                            Hash Map:
                        </span>{" "}
                        Built a hash map from scratch using buckets and
                        collision handling, including resizing logic and
                        average-case time complexity analysis.{" "}
                        <a
                            href="https://github.com/yourname/binary-search-tree"
                            className="text-sm text-zinc-400 hover:text-white"
                        >
                            View implementation →
                        </a>
                    </li>

                    <li>
                        <span className="font-medium text-zinc-200">
                            Binary Search Tree:
                        </span>{" "}
                        Implemented a balanced binary search tree with
                        insertion, deletion, traversal, and lookup operations,
                        emphasizing recursive reasoning and tree invariants.{" "}
                        <a
                            href="https://github.com/yourname/binary-search-tree"
                            className="text-sm text-zinc-400 hover:text-white"
                        >
                            View implementation →
                        </a>
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
