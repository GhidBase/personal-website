import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import "./index.css";
import "./css/animations.css";
import Header from "./components/Header";
import Projects from "./components/Projects";

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
        <Projects></Projects>
        <div className="mt-100"></div>
    </StrictMode>,
);
