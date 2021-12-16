import { ReactComponent as Phone } from "../../icons/phone.svg";
import { ReactComponent as Letter } from "../../icons/letter.svg";
import MenuList from "../MenuList";
import { Link } from "react-router-dom";
import MemberForm from "../MemberForm";

export default function Footer() {
    function navigateToTop(e) {
        e.preventDefault();
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
    return (
        <footer>
            <nav>
                <article>
                    <div className="container">
                        <p>
                            Vær med i kundeklubben for nye videoer, rabatkode og
                            mere!
                        </p>
                        <MemberForm />
                    </div>
                </article>
                <div className="container">
                    <article>
                        <h1>SoMe</h1>
                        <div>
                            <Link to="/">
                                <i>
                                    <img
                                        src="/assets/icons/socialMedia/facebook.svg"
                                        alt="facebook icon"
                                    />
                                </i>
                            </Link>
                            <Link to="/">
                                <i>
                                    <img
                                        src="/assets/icons/socialMedia/twitter.svg"
                                        alt="twitter icon"
                                    />
                                </i>
                            </Link>
                            <Link to="/">
                                <i>
                                    <img
                                        src="/assets/icons/socialMedia/instagram.svg"
                                        alt="instagram icon"
                                    />
                                </i>
                            </Link>
                            <Link to="/">
                                <i>
                                    <img
                                        src="/assets/icons/socialMedia/pinterest.svg"
                                        alt="pinterest icon"
                                    />
                                </i>
                            </Link>
                            <Link to="/">
                                <i>
                                    <img
                                        src="/assets/icons/socialMedia/youtube.svg"
                                        alt="youtube icon"
                                    />
                                </i>
                            </Link>
                        </div>
                    </article>
                    <article>
                        <h1>Quick Menu</h1>
                        <MenuList />
                    </article>
                    <address>
                        <h1>Kontakt</h1>
                        <a href="tel:+4512345678">
                            <i>
                                <Phone className="svg-fill" /> +45 1234 5678
                            </i>
                        </a>
                        <a href="mailto:mail@smuk.to">
                            <i>
                                <Letter className="svg-fill" />
                                mail@smuk.nu
                            </i>
                        </a>
                    </address>
                </div>
                <div>
                    <button onClick={navigateToTop}>
                        <i>
                            <img
                                src="/assets/icons/arrow-left.svg"
                                alt="arrow left"
                            />
                        </i>
                    </button>
                </div>
            </nav>
        </footer>
    );
}
