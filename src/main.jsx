import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import "./index.css";
import "./css/animations.css";
import ProfilePage from "./components/ProfilePage";



createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProfilePage></ProfilePage>
    </StrictMode>,
);
