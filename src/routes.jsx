import LayoutContainer from "./components/LayoutContainer";
import ProfilePage from "./components/ProfilePage";
import ProjectPage from "./components/ProjectPage";

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
        ],
    },
];
