import portrait from "../assets/portrait.jpg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import setup from "../assets/setup-2.jpg";

export default function Footer({ className, leftClassName }) {
    return (
        <footer className={className}>
            <div id="footer-left" className={leftClassName + " flex-1"}>
                <h1 className="text-center text-3xl md:text-6xl md:text-left">
                    Contact Me
                </h1>
                <p className="">
                    I'm always happy to talk with recruiters and teams looking
                    for a practical, detail-oriented developer.
                </p>
                <p className="">
                    Feel free to reach out if you'd like to discuss
                    opportunities or learn more about my work.
                </p>
                <a
                    href=""
                    className="flex items-center self-center gap-2 md:self-start"
                >
                    <img src={phone} className="h-6 text-white" alt="" />
                    775-293-1579
                </a>
                <a
                    href=""
                    className="flex items-center self-center gap-2 md:self-start"
                >
                    <img src={email} className="h-6 text-white" alt="" />
                    grvdylans@gmail.com
                </a>
            </div>
            <div className="flex-1 hidden md:block h-full">
                <img
                    src={setup}
                    alt=""
                    className="object-cover h-full w-full"
                />
            </div>
        </footer>
    );
}
