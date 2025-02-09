import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import "./Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    if (click) setDropdown(false);
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
    setDropdown(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };

  return (
    <nav className="navbar" data-testid="navbar-component">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/images/logo.webp" alt="Logo" className="logo-image" />
        </Link>
        <div
          className="menu-icon"
          onClick={handleClick}
          aria-label="Menu Toggle"
        >
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={click ? "nav-menu active" : "nav-menu"}
          data-testid="nav-menu-component"
        >
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li
            className="nav-item dropdown"
            onClick={window.innerWidth <= 875 ? toggleDropdown : undefined}
          >
            <button
              className="nav-links dropdown-toggle"
              aria-haspopup="true"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={toggleDropdown}
            >
              Information <FaCaretDown className="caret-icon" />
            </button>
            <div className={`dropdown-content ${dropdown ? "show" : ""}`}>
              <Link
                to="/programmes"
                className="dropdown-item"
                onClick={closeMobileMenu}
              >
                Programmes
              </Link>
              <Link
                to="/policies-procedures"
                className="dropdown-item"
                onClick={closeMobileMenu}
              >
                Policies &amp; Procedures
              </Link>
              <Link
                to="/admissions"
                className="dropdown-item"
                onClick={closeMobileMenu}
              >
                Admissions
              </Link>
              <Link
                to="/parent-partnership"
                className="dropdown-item"
                onClick={closeMobileMenu}
              >
                Parent Partnership
              </Link>
              <Link
                to="/careers"
                className="dropdown-item"
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
              <Link
                to="/contact-us"
                className="dropdown-item"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
