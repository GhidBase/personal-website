import portrait from "../assets/portrait.jpg";
import email from "../assets/email.svg";
import linkedIn from "../assets/linkedIn3.svg";
import github from "../assets/github.svg";
export default function Header({
    aboutMe,
    aboutMeClassName,
    aboutMeHeaderClassName,
}) {
    return (
        <div
            id="header"
            className="
                    md:mx-auto
                    w-full 2xl:w-full
                    md:max-w-300 2xl:max-w-none
                    py-8 md:py-15 2xl:px-40
                    flex flex-col md:block 2xl:flex 2xl:flex-row
                    2xl:items-center
                    "
        >
            <div
                className="
                        fade-in-two
                        px-8 2xl:p-0
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
                    className="
                            w-full h-full object-cover
                            shadow-lg/40
                            fade-in-two"
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
                    bg-none md:bg-zinc-800 text-neutral-200
                    md:shadow-lg/40
                    md:h-135 lg:h-115 2xl:h-145
                    m-0 mt-5 2xl:m-0
                    md:my-20 md:mx-20 md:mt-40
                    py-5 px-6
                    flex-1
                    wrap-break-word
                    transition-all duration-500
                    font-[roboto]
                    relative
                    "
            >
                <h1 className={aboutMeHeaderClassName}>About Me</h1>
                <br />
                <div className={aboutMeClassName}>{aboutMe}</div>
                <br />
                <div
                    className="flex justify-center md:absolute right-9 bottom-6
                    gap-12 h-12 mt-2"
                >
                    <a href="">
                        <img src={github} className="h-full" alt="" />
                    </a>
                    <a href="">
                        <img src={linkedIn} className="h-full" alt="" />
                    </a>
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
