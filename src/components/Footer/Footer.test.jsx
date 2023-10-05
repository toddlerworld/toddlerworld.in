import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Footer from './Footer';

describe('Footer Component', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders the correct class for the main container', () => {
        const wrapper = shallow(<Footer />);
        const mainContainer = wrapper.find('.footer-container');
        expect(mainContainer).toHaveLength(1);
    });

    it('renders the logo Link with correct props', () => {
        const wrapper = shallow(<Footer />);
        const logoLink = wrapper.find('.social-logo');

        expect(logoLink).toHaveLength(1);
        expect(logoLink.prop('to')).toBe('/');
        expect(logoLink.hasClass('social-logo')).toBe(true);
        expect(logoLink.text()).toBe('Toddler World');
    });

    it('renders the small element with the correct text', () => {
        const wrapper = shallow(<Footer />);
        const smallElement = wrapper.find('.website-rights');

        expect(smallElement).toHaveLength(1);
        expect(smallElement.hasClass('website-rights')).toBe(true);
        expect(smallElement.text()).toBe('Toddler World © 2016-2023');
    });

    it('renders the correct social icons with Font Awesome icons', () => {
        const wrapper = shallow(<Footer />);
        const socialIcons = wrapper.find('.social-icon-link');

        const expectedFontAwesomeClasses = [
            'fab fa-facebook-f',
            'fab fa-instagram',
            'fab fa-youtube',
            'fab fa-twitter',
            'fab fa-linkedin',
        ];

        socialIcons.forEach((icon, index) => {
            const iconElement = icon.find('i');
            expect(iconElement).toHaveLength(1);
            expect(iconElement.hasClass(expectedFontAwesomeClasses[index])).toBe(true);
        });
    });
});
