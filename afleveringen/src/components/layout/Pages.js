import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Pages() {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return <Outlet />;
}
