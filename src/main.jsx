import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import "./index.css";
import "./css/animations.css";
import ProfilePage from "./components/ProfilePage";
import ProjectPage from "./components/ProjectPage";
import ProjectPageTest from "./components/ProjectPageTest";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProjectPage title={"Lucky Defense Guides"} />
    </StrictMode>,
);
