import { NavLink } from "react-router-dom";

export default function MenuList({ style, hideMobileMenu }) {
    const activeClassName = "active-link";
    return (
        <ul style={style} className='menu-list'>
            <li>
                <NavLink
                    onClick={hideMobileMenu}
                    to='/shop'
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    BUTIK
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={hideMobileMenu}
                    to='/why-buy-from-us'
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    HVORFOR KØBE HOS OS
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={hideMobileMenu}
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                    to='/faq'
                >
                    FAQ
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={hideMobileMenu}
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                    to='/about'
                >
                    OM OS
                </NavLink>
            </li>
        </ul>
    );
}
