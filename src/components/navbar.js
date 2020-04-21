import { Link } from "gatsby";
import React, { useState } from 'react';
import { FaAlignJustify, FaTimes} from "react-icons/fa";
import Logo from '../images/logo.png';

const Navbar = ({about, work, contact}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header id="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Obeke Calistus" width="140" />
                </Link>
            </div>
            <nav className={isOpen ? "show-nav" : "hide-nav"}>
                <ul>
                    <li>
                        <a href="/#about">
                            {about}
                        </a>
                    </li>
                    <li>
                        <a href="/#work">
                            {work}
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            {contact}
                        </a>
                    </li>
                </ul>
            </nav>
            <button
                type="button"
                className="menu-toggle"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                <FaTimes className="nav-icon" />
                ) : (
                <FaAlignJustify className="nav-icon" />
                )}
            </button>
        </header>
    )
}

export default Navbar;