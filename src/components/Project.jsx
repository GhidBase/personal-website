import { Link } from "react-router";
import { useViewTransitionNavigate } from "../transitionFunction";

export default function Project({ title, description, imgSrc, slug }) {
    const navigate = useViewTransitionNavigate();
    return (
        <div
            id={"project-" + title}
            tabIndex={0}
            className="bg-zinc-700
                relative group
                overflow-hidden
                scale-100 md:hover:scale-102!
                transition-all delay-0 duration-500
                will-change-transform
                shadow-lg/80
                "
        >
            <div
                id={title + "detail-button"}
                onClick={() => navigate(slug)}
                className="
                        absolute inset-0 flex items-center justify-center
                        scale-150 md:scale-200
                        opacity-0 md:group-hover:opacity-100! will-change-[opacity]
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
            </div>
            <div
                id={title + "blur-container"}
                className="
                group
                h-full w-full
                transition-all
                blur-none group-hover:blur-[2px]!
                duration-500
                relative
                will-change-transform
                "
            >
                <img
                    id={title + "-image"}
                    src={imgSrc}
                    alt=""
                    className="
                    w-full h-full object-cover
                "
                />

                <div
                    id={"p-" + title + "-detail-container"}
                    className="absolute bottom-0 left-0 right-0
                    bg-zinc-500
                    h-40
                    p-2 md:p-4
                    "
                >
                    <h1 id={"p-" + title + "-title"} className="pb-2 text-xl">
                        {title}
                    </h1>
                    <div id={"p-" + title + "-details"} className="">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}
