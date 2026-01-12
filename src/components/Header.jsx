import portrait from "../assets/portrait.jpg";
export default function Header() {
    return (
        <div className="">
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
                <img
                    id="h-portrait"
                    src={portrait}
                    className="
                        px-8 2xl:p-0
                        h-100 sm:max-w-120 md:h-80 lg:h-100 2xl:h-150 2xl:max-w-none
                        self-center
                        md:float-left
                        relative z-1
                        object-cover"
                    alt=""
                />
                <div
                    id="h-text"
                    className="
                    bg-white/0 md:bg-white text-white md:text-black
                    md:h-120 2xl:h-135
                    m-0 mt-5 2xl:m-0
                    md:my-20 md:mx-20 md:mt-40
                    py-5 px-6
                    flex-1
                    wrap-break-word
                    
                    font-[roboto]
                    "
                >
                    <div className="">
                        <h1 className="font-semibold text-4xl text-center 2xl:text-left">
                            About Me
                        </h1>
                        <p className="text-center 2xl:text-left">
                            This is my description
                        </p>
                    </div>
                </div>
                <div
                    id="h-skew"
                    className="
                    bg-white/20
                    absolute
                    left-0 right-0 -top-20 md:-top-80
                    h-109 md:h-240 2xl:h-215
                    -skew-y-12 md:-skew-y-14 2xl:-skew-y-15"
                ></div>
            </div>
        </div>
    );
}
