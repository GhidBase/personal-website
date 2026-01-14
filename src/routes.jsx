import LayoutContainer from "./components/LayoutContainer";
import ProfilePage from "./components/ProfilePage";
import ProjectPage from "./components/ProjectPage";
import ProjectPageDSA from "./components/ProjectPageDSA";
import ProjectPageFilemaker from "./components/ProjectPageFilemaker";

export default [
    {
        element: <LayoutContainer />,
        children: [
            {
                path: "*",
                element: <ProfilePage />,
            },
            {
                path: "/ldg",
                element: <ProjectPage title={"Lucky Defense Guides"} />,
            },
            {
                path: "/DSA",
                element: <ProjectPageDSA title={"Data Structures"} />,
            },
            {
                path: "/filemaker",
                element: <ProjectPageFilemaker title={"Filemaker"} />,
            },
        ],
    },
];
