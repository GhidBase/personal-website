import { Outlet } from "react-router";
import ScrollToTop from "../scrollToTop";

export default function LayoutContainer() {
    return (
        <>
            {<ScrollToTop />}
            <Outlet />
        </>
    );
}
