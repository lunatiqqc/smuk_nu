import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useLocation,
} from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Faq from "./components/pages/Faq";
import Shop from "./components/pages/Shop";
import WhyUs from "./components/pages/WhyUs";
import About from "./components/pages/About";
import { useEffect } from "react";
import Pages from "./components/layout/Pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Header /> <Pages /> <Footer />
                        </>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path='shop' element={<Shop />} />
                    <Route path='why-buy-from-us' element={<WhyUs />} />
                    <Route path='faq' element={<Faq />} />
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
