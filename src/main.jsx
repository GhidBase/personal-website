import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import "./index.css";
import "./css/animations.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ldg from "./assets/ldg-2.png";
import bst from "./assets/BST.webp";

const aboutMe = (
    <Fragment>
        <p>
            I'm a web developer focused on building user-driven, full-stack
            applications. I work primarily with React, Node.js, PostgreSQL +
            Prisma, Amazon S3, and Tailwind CSS.
        </p>
        <br />
        <p>
            I've built and maintain a website used by thousands of real users,
            featuring a custom CMS that allows content creators to create and
            edit articles directly on the platform. I handled everything from
            the front-end to the back-end API and database, and I'm actively
            working to scale the system to support multiple websites.
        </p>
    </Fragment>
);

const projects = [
    {
        id: 0,
        title: "Lucky Defense Guides",
        description: (
            <Fragment>
                <p className="will-change-transform text-sm md:text-md xl:text-lg">
                    700k views, active users, a custom CMS, server, PostgreSQL,
                    Prisma, and good Google presence.
                </p>
            </Fragment>
        ),
        imgSrc: ldg,
    },
    {
        id: 1,
        title: "Data Structures Projects",
        description: (
            <Fragment>
                <p>BST, Linked Lists, Hashmaps</p>
            </Fragment>
        ),
        imgSrc: bst,
    },
    {
        id: 2,
        title: "Data Structures Projects",
        description: (
            <Fragment>
                <p>BST, Linked Lists, Hashmaps</p>
            </Fragment>
        ),
        imgSrc: bst,
    },
];

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header
            aboutMe={aboutMe}
            aboutMeClassName="
              text-center md:text-left
              text-xl md:text-xl xl:text-2xl"
            aboutMeHeaderClassName=" font-semibold text-5xl text-center md:text-left md:mt-5"
        ></Header>
        <br />
        <br />
        <h1 className="text-center text-5xl md:text-8xl mt-5 md:mb-4 fade-in-two">
            Projects
        </h1>
        <br />
        <br />
        <Projects
            projects={projects}
            className={`
                grid
                grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
                auto-rows-[350px] xl:auto-rows-[430px]
                justify-center
                w-full max-w-300
                px-6 xl:px-0 lg:mx-auto
                pb-20
                gap-10
                fade-in-two`}
        ></Projects>
        <Footer
            className="md:flex md:gap-16 bg-white/20 md:h-150 flex-1 justify-center items-center md:px-10 lg:px-20 md:py-20 fade-in-two"
            leftClassName="p-6 pt-2 md:p-0! h-100 md:pr-6 flex flex-col gap-6 md:text-md xl:text-lg 2xl:text-xl justify-center"
        ></Footer>
    </StrictMode>,
);
