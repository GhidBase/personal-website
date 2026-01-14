import { useNavigate } from "react-router";

export function useViewTransitionNavigate() {
    const navigate = useNavigate();

    return (to) => {
        if (!document.startViewTransition) {
            navigate(to);
            return;
        }

        document.startViewTransition(() => {
            navigate(to);
        });
    };
}
