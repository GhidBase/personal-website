
export default function Project({ title, description, imgSrc }) {
    return (
        <div
            id={"project-" + title}
            tabIndex={0}
            className="bg-zinc-700
                relative group
                overflow-hidden
                scale-100 md:hover:scale-102 
                transition-all delay-0 duration-500
                will-change-transform
                shadow-lg/80
                "
        >
            <img
                src={imgSrc}
                alt=""
                className="
                
                w-full h-full object-cover
                transition-all duration-500
                group-focus:blur-[2px] md:group-focus:blur-none md:group-hover:blur-[2px]!
                md:group-hover:opacity-80
                will-change-transform
"
            />

            <a
                className="
                    absolute inset-0 flex items-center justify-center
                    scale-150 md:scale-200
                    opacity-0 group-focus:opacity-100 md:group-focus:opacity-0 md:group-hover:opacity-100! will-change-[opacity]
                    transition-opacity duration-300
                    z-1
  "
            >
                <span
                    className="
                        px-6 py-2
                        rounded-full
                        bg-black
                        opacity-60 backdrop-blur-md
                        border border-white/30
                        text-white font-medium tracking-wide
                        hover:opacity-100!
                        transition-all duration-200
    "
                >
                    Details →
                </span>
            </a>

            <div
                id={"p-" + title + "-detail-container"}
                className="absolute bottom-0 left-0 right-0
                bg-zinc-500
                h-40 group-focus:h-11 md:group-focus:h-40
                opacity-100 
                transition-all duration-700 delay-100 md:delay-0
                group-focus:delay-0 group-focus:duration-400 
                p-2 md:p-4
                group-focus:blur-[2px] md:group-focus:blur-none md:group-hover:blur-[2px]!"
            >
                <h1
                    id={"p-" + title + "-title"}
                    className="will-change-transform pb-2 text-xl"
                >
                    {title}
                </h1>
                <div
                    id={"p-" + title + "-details"}
                    className="min-h-0 group-focus:opacity-0 md:group-focus:opacity-100 transition-all overflow-hidden duration-500 will-change-transform"
                >
                    {description}
                </div>
            </div>
        </div>
    );
}
