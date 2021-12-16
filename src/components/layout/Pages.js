import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

export default function Pages() {
    const location = useLocation();
    const { pathname } = location;
    //const state = location.state;

    console.log(location);

    useEffect(() => {
        //setShowMobileMenu(false);
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
}
