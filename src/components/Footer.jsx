import portrait from "../assets/portrait.jpg";

export default function Footer() {
    return (
        <footer className="-mt-3 h-100 bg-white/20 p-6 pt-2 flex flex-col gap-6">
            <h1 className="text-center text-3xl pt-8">Contact Me</h1>
            <p className="">
                I'm always happy to talk with recruiters and teams looking for a
                practical, detail-oriented developer.{" "}
            </p>
            <p className="">
                Feel free to reach out if you'd like to discuss opportunities or
                learn more about my work.
            </p>
            <a href="">775-293-1579</a>
            <a href="">grvdylans@gmail.com</a>
        </footer>
    );
}
