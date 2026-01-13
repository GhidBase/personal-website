import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import "./index.css";
import "./css/animations.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ldg from "./assets/ldg-2.png";
import bst from "./assets/BST.webp"

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
                    Full-stack website + custom CMS built using React, Express, PostgreSQL,
                    TinyMCE, and Prisma. 700k lifetime views, an active userbase and a
                    top result on google.
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
        imgSrc: bst
    },
];

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header
            aboutMe={aboutMe}
            aboutMeClassName="
              fade-in
              text-center md:text-left
              text-xl md:text-2xl 2xl:text-3xl"
            aboutMeHeaderClassName="fade-in font-semibold text-5xl text-center md:text-left md:mt-5"
        ></Header>
        <Projects projects={projects}></Projects>
        <div className="mt-100"></div>
    </StrictMode>,
);
