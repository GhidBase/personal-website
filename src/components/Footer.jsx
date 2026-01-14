import portrait from "../assets/portrait.jpg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import setup from "../assets/setup-2.jpg";

export default function Footer({
    className,
    leftClassName,
    rightClassName,
    height,
    maxSpacerClassName,
    leftHeaderClassName,
    imgClassName,
    linkClassName
}) {
    return (
        <footer className={className + " md:height"}>
            <div
                className={maxSpacerClassName}
            >
                <div id="footer-left" className={leftClassName}>
                    <h1 className={leftHeaderClassName}>
                        Contact Me
                    </h1>
                    <p className="">
                        I'm always happy to talk with recruiters and teams
                        looking for a practical, detail-oriented developer.
                    </p>
                    <p className="">
                        Feel free to reach out if you'd like to discuss
                        opportunities or learn more about my work.
                    </p>
                    <a
                        href=""
                        className={linkClassName}
                    >
                        <img src={phone} className="h-6 text-white" alt="" />
                        775-293-1579
                    </a>
                    <a
                        href=""
                        className={linkClassName}
                    >
                        <img src={email} className="h-6 text-white" alt="" />
                        grvdylans@gmail.com
                    </a>
                </div>
                <div className={rightClassName + " md:" + height}>
                    <img
                        src={setup}
                        alt=""
                        className={imgClassName}
                    />
                </div>
            </div>
        </footer>
    );
}
