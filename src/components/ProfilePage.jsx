import { Fragment } from "react";

import Header from "./Header";
import Projects from "./Projects";
import Footer from "./Footer";
import ldg from "../assets/ldg-2.png";
import bst from "../assets/BST.webp";
import filemaker from "../assets/filemaker.avif";

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
                    A production full-stack platform with 700,000+ views,
                    powered by a custom CMS, PostgreSQL + Prisma, and a bespoke
                    API.
                </p>
            </Fragment>
        ),
        imgSrc: ldg,
        slug: "/ldg",
    },
    {
        id: 1,
        title: "Data Structures Projects",
        description: (
            <Fragment>
                <p className="will-change-transform text-sm md:text-md">
                    Core data structures implemented from scratch, including
                    linked lists, hash maps, and binary search trees, with a
                    focus on correctness and performance.
                </p>
            </Fragment>
        ),
        imgSrc: bst,
        slug: "/dsa",
    },
    {
        id: 2,
        title: "FileMaker Development",
        description: (
            <Fragment>
                <p className="will-change-transform text-sm md:text-md">
                    Professional FileMaker development for real-world business
                    workflows and database-driven applications.
                </p>
            </Fragment>
        ),
        imgSrc: filemaker,
        slug: "/filemaker",
    },
];

export default function ProfilePage() {
    return (
        <Fragment>
            <Header
                aboutMe={aboutMe}
                aboutMeClassName="
              text-center md:text-left
              text-xl md:text-xl xl:text-2xl"
                aboutMeHeaderClassName="font-semibold text-5xl text-center md:text-left md:mt-5"
            ></Header>
            <h1
                className="
            text-center w-full text-5xl md:text-6xl mt-5 fade-in-two
            md:max-w-260 2xl:max-w-none
            px-10 md:px-18 xl:px-0 2xl:px-40"
            >
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
                px-10 md:px-18 md:mx-20 xl:px-0
                pb-20
                gap-10
                fade-in-two`}
            ></Projects>
            <Footer
                height="h-125"
                className="
                w-full
                md:max-w-260 2xl:max-w-none
                px-10 md:px-18 lg:px-18 xl:px-0 2xl:px-40
                pb-10 lg:pb-20"
                maxSpacerClassName="flex items-center md:gap-8"
                // Removed md:text-left
                leftHeaderClassName="text-center text-3xl md:text-6xl"
                leftClassName="
                flex-5
                flex flex-col
                text-center
                gap-6
                xl:text-lg 2xl:text-xl
                "
                // I removed md:flex
                rightClassName="
                hidden
                md:flex-3 lg:flex-5 items-center"
                imgClassName="
                object-cover md:h-75 lg:h-full max-h-125 w-full"
                linkClassName="flex items-center self-center gap-2"
            ></Footer>
        </Fragment>
    );
}
