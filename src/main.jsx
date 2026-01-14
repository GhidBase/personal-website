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
                <p className="will-change-transform text-sm md:text-md">
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
        <h1 className="
            text-left w-full text-5xl md:text-6xl mt-5 fade-in-two
            md:max-w-260 2xl:max-w-none
            px-18 xl:px-0 2xl:px-40">
            My Work
        </h1>
        <br />
        <br />
        <Projects
            projects={projects}
            className={`
                grid
                grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
                auto-rows-[350px] xl:auto-rows-[430px]
                justify-center
                md:max-w-260 2xl:max-w-none
                w-full 2xl:px-40
                px-18 md:mx-20 xl:px-0
                pb-20
                gap-10
                fade-in-two`}
        ></Projects>
        <Footer
            height="h-125"
            className="
                w-full
                md:max-w-260 2xl:max-w-none
                px-18 xl:px-0 2xl:px-40
                lg:pb-20"
            maxSpacerClassName="flex items-center md:gap-8"
            leftHeaderClassName="text-center text-3xl md:text-6xl md:text-left"
            leftClassName="
                flex-5
                flex flex-col
                gap-6
                xl:text-lg 2xl:text-xl
                "
            rightClassName="
                hidden md:flex
                md:flex-3 lg:flex-5 items-center"
            imgClassName="
                object-cover md:h-75 lg:h-full max-h-125 w-full"
        ></Footer>
    </StrictMode>,
);
