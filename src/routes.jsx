import LayoutContainer from "./components/LayoutContainer";
import ProfilePage from "./components/ProfilePage";
import ProjectPage from "./components/ProjectPage";
import ProjectPageDSA from "./components/ProjectPageDSA";
import ProjectPageFilemaker from "./components/ProjectPageFilemaker";

export default [
    {
        path: "/",
        element: <LayoutContainer />,
        children: [
            {
                index: true,
                element: <ProfilePage />,
            },
            {
                path: "ldg",
                element: <ProjectPage title={"Lucky Defense Guides"} />,
            },
            {
                path: "dsa",
                element: <ProjectPageDSA title={"Data Structures"} />,
            },
            {
                path: "filemaker",
                element: <ProjectPageFilemaker title={"FileMaker"} />,
            },
        ],
    },
];
