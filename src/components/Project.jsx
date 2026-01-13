import ldg from "../assets/ldg-2.png";

export default function Project({ title }) {
    return (
        <div
            id={"project-" + title}
            tabIndex={0}
            className="bg-zinc-700
                w-80 h-100 md:w-150 md:h-150 relative group
                overflow-hidden
                scale-100 hover:scale-102 
                transition-all delay-0 duration-500
                will-change-transform
                "
        >
            <img
                src={ldg}
                alt=""
                className="
                
                w-full h-full object-cover
                transition-all duration-500
                group-focus:blur-[2px] sm:group-focus:blur-none group-hover:blur-[2px]!
                group-hover:opacity-80
                will-change-transform
"
            />

            <a
                className="
                    absolute inset-0 flex items-center justify-center
                    scale-200
                    opacity-0 group-hover:opacity-100 will-change-[opacity]
                    transition-opacity duration-300
  "
            >
                <span
                    className="
                        px-6 py-2
                        rounded-full
                        bg-black/40 backdrop-blur-md
                        border border-white/30
                        text-white font-medium tracking-wide
                        hover:bg-black/60
                        transition
    "
                >
                    Details →
                </span>
            </a>

            <div
                id={"p-" + title + "-detail-container"}
                className="absolute bottom-0 left-0 right-0
                bg-zinc-500
                h-40 group-focus:h-11 sm:group-focus:h-40
                opacity-100 
                transition-all duration-700 delay-100 sm:delay-0
                group-focus:delay-0 group-focus:duration-400 
                p-2 group-focus:blur-[2px] sm:group-focus:blur-none group-hover:blur-[2px]!"
            >
                <h1
                    id={"p-" + title + "-title"}
                    className="will-change-transform pb-2 text-xl"
                >
                    {title}
                </h1>
                <div
                    id={"p-" + title + "-details"}
                    className="min-h-0 group-focus:opacity-0 sm:group-focus:opacity-100 transition-all overflow-hidden duration-500 will-change-transform"
                >
                    <p className="will-change-transform">
                        Full-stack website built using React, Express,
                        PostgreSQL, and Prisma. 700k lifetime views, an active
                        userbase and a top result on google.
                    </p>
                </div>
            </div>
        </div>
    );
}
