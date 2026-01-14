import ProfilePage from "./components/ProfilePage";
import ProjectPage from "./components/ProjectPage";
import Project from "./components/Project";
export default [
    {
        path: "*",
        element: <ProfilePage />,
        // children: [
        //     { path: ":pageTitle", element: <PageBuilder /> },
        //     { path: "guardian-upgrade-costs", element: <GuardianCosts /> },
        //     { path: "immortal-guardians", element: <ImmortalGuardians /> },
        //     { path: "flea-guide/", element: <Checklist checklistId={1} /> },
        //     // { path: "page-manager/:pageId", element: <PageBuilder /> }, deprecated

        //     { path: "editor-test/", element: <EditorExample /> },
        //     { path: "404/", element: <NotFound /> },
        //     { path: "*", element: <PageBuilder /> },
        // ],
    },
    { path: "/ldg", element: <ProjectPage title={"Lucky Defense Guides"} /> },
];
