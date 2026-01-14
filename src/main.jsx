import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import "./index.css";
import "./css/animations.css";
import ProfilePage from "./components/ProfilePage";
import ProjectPage from "./components/ProjectPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>,
);
