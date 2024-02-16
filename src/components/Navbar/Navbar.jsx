import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar"  data-testid="navbar-component">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img
                            src="/images/logo.webp"
                            alt="Logo"
                            data-testid="menu-icon-component"
                        />
                    </Link>
                    <div className="menu-icon" onClick={handleClick} data-testid="menu-icon">
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} data-testid="nav-menu-component">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about-us"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                <p>About us</p>
                            </Link>
                        </li>

                        <li className="dropdown">
                            <button className="nav-links">
                                <p>Information
                                    <i className="fa fa-caret-down"></i>
                                </p>
                            </button>
                            <div className="dropdown-content">
                                <Link
                                    to="/programmes"
                                >
                                    Programmes
                                </Link>
                                <Link
                                    to="/policies-procedures"
                                >
                                    Policies & Procedures
                                </Link>
                                <Link
                                    to="/admissions"
                                >
                                    Admissions
                                </Link>
                                <Link
                                    to="/parent-partnership"
                                >
                                    Parent Partnership
                                </Link>
                                <Link
                                    to="/careers"
                                >
                                    Careers
                                </Link>
                                <Link
                                    to="/contact-us"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;