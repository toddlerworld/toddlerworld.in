import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <>
            <div className="header-container">
                <p>Book a visit by calling us on <a href="tel:+917889744619" className="telephone-number">7889744619</a>,
                    <a href="tel:+917051427879" className="telephone-number"> 7051427879</a></p>
            </div>
        </>
    );
};

export default Header;


