import { Link } from "react-router-dom";

export default function MenuList({ style, hideMobileMenu }) {
    console.log(hideMobileMenu);
    return (
        <ul style={style} className="menu-list">
            <li>
                <Link onClick={hideMobileMenu} to="/shop">
                    BUTIK
                </Link>
            </li>
            <li>
                <Link onClick={hideMobileMenu} to="/why-buy-from-us">
                    HVORFOR KØBE HOS OS
                </Link>
            </li>
            <li>
                <Link onClick={hideMobileMenu} to="/faq">
                    FAQ
                </Link>
            </li>
            <li>
                <Link onClick={hideMobileMenu} to="/about">
                    OM OS
                </Link>
            </li>
        </ul>
    );
}
