import React from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className="logo-socials">
                <div className="wrapper-socials">
                    <Link to="/" className="social-logo">
						Toddler World
                    </Link>
                    <small className="website-rights">Toddler World © 2016-2023</small>
                    <div className="logos-socials">
                        <Link
                            className="social-icon-link facebook"
                            to="https://www.facebook.com/toddlerworldsgr/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link
                            class="social-icon-link instagram"
                            to="https://www.instagram.com/toddlerworldsgr/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link
                            class="social-icon-link youtube"
                            to="https://www.youtube.com/@ToddlerWorld"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"/>
                        </Link>
                        <Link
                            class="social-icon-link twitter"
                            to="https://www.twitter.com/toddlerworldsgr/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"/>
                        </Link>
                        <Link
                            class="social-icon-link twitter"
                            to="https://www.linkedin.com/company/toddlerworld/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
