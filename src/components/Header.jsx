import portrait from "../assets/portrait.jpg";
export default function Header() {
    return (
        <div className="">
            <div
                id="header"
                className="
                    w-full h-full md:h-200
                    py-8 md:py-20 2xl:px-20
                    flex flex-col md:block 2xl:flex 2xl:flex-row
                    2xl:items-center
                    "
            >
                <img
                    id="h-portrait"
                    src={portrait}
                    className="
                        px-8 2xl:p-0
                        h-100 sm:max-w-120 md:h-80 lg:h-100
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
                    md:h-150
                    m-0 mt-5 2xl:m-0
                    md:my-20 md:mx-20
                    py-5 px-6
                    2xl:w-full
                    wrap-break-word
                    
                    font-[roboto]
                    
                    "
                >
                    <h1 className="font-semibold text-4xl">About Me</h1>
                    <p>This is my description</p>
                </div>
                <div
                    id="h-skew"
                    className="
                    bg-white/20
                    absolute
                    left-0 right-0 -top-20 md:-top-80
                    h-109 md:h-240
                    -skew-y-12 md:-skew-y-14"
                ></div>
            </div>
        </div>
    );
}
