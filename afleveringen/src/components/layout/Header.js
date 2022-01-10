import { Link } from "react-router-dom";

import MenuList from "../MenuList";
import MemberForm from "../MemberForm";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const [scrollDown, setScrollDown] = useState(false);

    const oldScroll = useRef(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", handleWindowScroll);
        return () => {
            window.removeEventListener("scroll", handleWindowScroll);
        };
    }, []);

    function hideMobileMenu() {
        setShowMobileMenu(false);
    }

    function handleMobileMenuToggle(e) {
        e.preventDefault();

        setShowMobileMenu((prev) => {
            return !prev;
        });
    }

    function handleWindowScroll() {
        setScrollDown(this.scrollY > oldScroll.current);

        oldScroll.current = this.scrollY;
    }

    return (
        <header className={scrollDown ? "" : "scroll-up"}>
            <aside>100% fri fragt i Danmark</aside>
            <nav className='container'>
                <div style={{ transition: "margin-top 300ms" }}>
                    <figure>
                        <Link to='/'>
                            <img
                                src='assets/Index/SmukNu-Logo-Abril-Fatface.png'
                                alt='Smuk.nu logo'
                            />
                        </Link>
                    </figure>
                    <address>
                        <h1>Kontakt os</h1>
                        <a href='tel:+4512345678'>+45 1234 5678</a>
                    </address>
                </div>
                <div>
                    <MenuList />

                    <div id='user-interface'>
                        <MemberForm />
                        <div>
                            <i>
                                <img
                                    src='assets/icons/account.svg'
                                    alt='account'
                                />
                            </i>
                            <i>
                                <img
                                    src='assets/icons/basket.svg'
                                    alt='basket'
                                />
                            </i>
                        </div>
                        <button
                            onClick={handleMobileMenuToggle}
                            id='mobile-menu-icon'
                        >
                            <i>
                                <img
                                    src='/assets/icons/mobile-menu-icon.svg'
                                    alt='mobile menu icon'
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
                        borderTop: "1px dashed black",
                        borderBottom: "1px dashed black",
                        padding: "16px 0px",
                    }}
                />
            </nav>
        </header>
    );
}
