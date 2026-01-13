import ldg from "../assets/ldg-2.png";

export default function Project({ title }) {
    return (
        <div
            id={"project-" + title}
            tabIndex={0}
            className="bg-zinc-700
                w-80 h-100 md:w-150 md:h-150 relative group
                overflow-hidden
                blur-none hover:blur-xs transition-all delay-0 duration-500"
        >
            <div
                id={title + "-button-container"}
                className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center"
            >
                <a className="">See More</a>
            </div>

            <img
                src={ldg}
                alt=""
                className="w-full h-full object-cover
                opacity-100 sm:group-hover:opacity-80 transition-all delay-0 duration-500"
            />
            <div
                id={"p-" + title + "-detail-container"}
                className="absolute bottom-0 left-0 right-0
                bg-zinc-500
                h-40 group-focus:h-11 sm:group-focus:h-40
                opacity-100 group-focus:opacity-80 
                transition-all duration-700 delay-100 sm:delay-0
                p-2"
            >
                <h1 id={"p-" + title + "-title"} className="pb-2 text-xl">
                    {title}
                </h1>
                <div
                    id={"p-" + title + "-details"}
                    className="min-h-0 group-focus:opacity-0 sm:group-focus:opacity-100 transition-all overflow-hidden duration-500"
                >
                    <p className="">
                        Full-stack website built using React, Express,
                        PostgreSQL, and Prisma. 700k lifetime views, an active
                        userbase and a top result on google.
                    </p>
                </div>
            </div>
        </div>
    );
}
