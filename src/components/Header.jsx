import portrait from "../assets/portrait.jpg";
import email from "../assets/email.svg";
import linkedIn from "../assets/linkedIn3.svg";
import github from "../assets/github.svg";
import resume from "../assets/resume.svg";
import resumePDF from "../assets/Resume.pdf";
import postgre from "../assets/postgreSQL2.svg";
import { useState } from "react";
export default function Header({
    aboutMe,
    aboutMeClassName,
    aboutMeHeaderClassName,
}) {
    const [portraitLoaded, setPortraitLoaded] = useState(false);
    return (
        <div
            id="header"
            className="
                    md:mx-auto
                    w-full 2xl:w-full
                    md:max-w-260 2xl:max-w-none
                    py-8 md:py-15 2xl:px-40
                    flex flex-col md:block 2xl:flex 2xl:flex-row
                    2xl:items-center
                    px-10 md:px-18 xl:px-0
                    transition-all duration-500
                    "
        >
            <div
                className="
                        fade-in-two
                        -mr-2 md:pb-4 2xl:p-0
                        h-100 sm:max-w-120 md:h-80 lg:h-100 2xl:h-150 2xl:max-w-none
                        self-center
                        md:float-left
                        relative z-1
                        object-cover
                        transition-all
                        duration-500"
            >
                <img
                    id="h-portrait"
                    src={portrait}
                    onLoad={() => setPortraitLoaded(true)}
                    className={`
                            w-full h-full object-cover
                            shadow-lg/40
                            ${portraitLoaded ? "fade-in-two" : "opacity-0!"}
                            transition-opacity duration-500
                            md:-translate-x-10 2xl:translate-x-0`}
                    alt=""
                />
                <h2 className="absolute top-15 -right-80 text-7xl text-shadow-lg/80 z-1 hidden md:block 2xl:hidden">
                    Dylan Simon
                </h2>
                <h2 className="absolute bottom-3 left-0 right-0 text-center text-5xl text-shadow-lg/80 md:hidden 2xl:block 2xl:text-6xl">
                    Dylan Simon
                </h2>
            </div>
            <div
                id="h-text"
                className="
                    fade-in-two
                    md:max-w-260 2xl:max-w-none
                    bg-none md:bg-zinc-800 text-neutral-200
                    md:shadow-lg/40
                    md:h-135 lg:h-115 2xl:h-145
                    m-0 2xl:m-0
                    mt-5 md:mt-40
                    md:my-20
                    py-5 md:px-6
                    flex-1
                    wrap-break-word
                    transition-all duration-500
                    font-[roboto]
                    relative
                    mb-0!
                    "
            >
                <h1 className={aboutMeHeaderClassName}>About Me</h1>
                <br />
                <div className={aboutMeClassName}>{aboutMe}</div>
                <br />
                <div
                    className="flex justify-center md:absolute right-12 bottom-6
                        gap-6 h-20 mt-2"
                >
                    {/* Resume */}
                    <div className="flex flex-col items-center flex-1">
                        <a
                            href={resumePDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center h-full aspect-square rounded-lg 
                                bg-neutral-700 hover:bg-neutral-600 hover:-translate-y-0.5 overflow-hidden
                                transition p-3"
                        >
                            <img src={resume} className="" alt="Resume" />
                        </a>
                        <p className="text-xs text-gray-400 mt-1">Resume</p>
                    </div>

                    {/* GitHub */}
                    <div className="flex flex-col items-center">
                        <a
                            href="https://github.com/GhidBase"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center h-full aspect-square rounded-lg 
                                bg-neutral-700 hover:bg-neutral-600 hover:-translate-y-0.5 overflow-hidden
                                transition p-3"
                        >
                            <img src={github} className="" alt="GitHub" />
                        </a>
                        <p className="text-xs text-gray-400 mt-1">GitHub</p>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex flex-col items-center">
                        <a
                            href="https://www.linkedin.com/in/dylan-simon-a5b324317/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center h-full aspect-square rounded-lg 
                                bg-neutral-700 hover:bg-neutral-600 hover:-translate-y-0.5 overflow-hidden
                                transition p-3"
                        >
                            <img src={linkedIn} className="" alt="LinkedIn" />
                        </a>
                        <p className="text-xs text-gray-400 mt-1">LinkedIn</p>
                    </div>
                </div>
            </div>
            <div
                id="h-skew"
                className="
                    bg-white/20
                    absolute
                    left-0 right-0 -top-20 md:-top-80
                    h-109 md:h-240 2xl:h-215
                    -skew-y-12 md:-skew-y-14 2xl:-skew-y-15
                    -z-1
                    fade-in-two"
            ></div>
        </div>
    );
}
