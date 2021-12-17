import { Link } from "react-router-dom";

import { Outlet } from "react-router";
import MenuList from "../MenuList";
import MemberForm from "../MemberForm";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [scrollDown, setScrollDown] = useState(false);

    //const scrollDown = useRef(false);

    // console.log(scrollDown);
    function handleHideHeaderInfo(e) {
        //console.log(this.scrollY);

        this.scrollDown = this.scrollY > this.oldScroll;

        //console.log(this.scrollDown);

        const element = document.querySelector("#disappear-on-scroll");

        const marginTop = parseInt(element.style.marginTop);

        //console.log(marginTop);

        setScrollDown(this.scrollDown);

        this.oldScroll = this.scrollY;
        return;
    }
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    function hideMobileMenu() {
        setShowMobileMenu(false);
    }

    function handleMobileMenuToggle(e) {
        e.preventDefault();

        setShowMobileMenu((prev) => {
            return !prev;
        });
    }

    useEffect(() => {
        // console.log("hi");
    }, [scrollDown]);

    useEffect(() => {
        window.addEventListener("scroll", handleHideHeaderInfo);
        return () => {
            window.removeEventListener("scroll", handleHideHeaderInfo);
        };
    }, []);
    return (
        <header>
            <aside>100% fri fragt i Danmark</aside>
            <nav className="container">
                <div
                    id="disappear-on-scroll"
                    className={scrollDown ? "dissapear-up" : "show-down"}
                    style={{ transition: "margin-top 300ms" }}
                >
                    <figure>
                        <Link to="/">
                            <img
                                src="assets/Index/SmukNu-Logo-Abril-Fatface.png"
                                alt="Smuk.nu logo"
                            />
                        </Link>
                    </figure>
                    <address>
                        <h1>Kontakt os</h1>
                        <a href="tel:+4512345678">+45 1234 5678</a>
                    </address>
                </div>
                <div>
                    <MenuList />

                    <div id="user-interface">
                        <MemberForm />
                        <div>
                            <i>
                                <img
                                    src="assets/icons/account.svg"
                                    alt="account"
                                />
                            </i>
                            <i>
                                <img
                                    src="assets/icons/basket.svg"
                                    alt="basket"
                                />
                            </i>
                        </div>
                        <button
                            onClick={handleMobileMenuToggle}
                            id="mobile-menu-icon"
                        >
                            <i>
                                <img
                                    src="/assets/icons/mobile-menu-icon.svg"
                                    alt="mobile menu icon"
                                />
                            </i>
                        </button>
                    </div>
                </div>
                <MenuList
                    hideMobileMenu={hideMobileMenu}
                    style={{
                        display: showMobileMenu ? "flex" : "none",
                        flexDirection: "column",
                        marginLeft: "auto",

                        alignItems: "flex-end",

                        gap: "30px",
                        borderTop: "2px solid black",
                        borderBottom: "2px solid black",
                        padding: "16px 0px",
                    }}
                />
            </nav>
        </header>
    );
}
