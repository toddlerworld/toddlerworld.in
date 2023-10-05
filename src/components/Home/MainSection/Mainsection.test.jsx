import React from 'react';
import { shallow } from 'enzyme';
import MainSection from './MainSection';
import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';

describe('MainSection Component', () => {
    it('renders without crashing', () => {
        shallow(<MainSection />);
    });

    it('renders the main container with the correct class', () => {
        const wrapper = shallow(<MainSection />);
        const mainContainer = wrapper.find('.hero-container');
        expect(mainContainer).toHaveLength(1);
    });

    it('renders a video element with the correct class and attributes', () => {
        const wrapper = shallow(<MainSection />);
        const videoElement = wrapper.find('video');

        expect(videoElement).toHaveLength(1);
        expect(videoElement.prop('src')).toBe('/images/home-page-pic.mp4');
        expect(videoElement.prop('className')).toBe('main-video');
        expect(videoElement.prop('autoPlay')).toBe(true);
        expect(videoElement.prop('loop')).toBe(true);
        expect(videoElement.prop('muted')).toBe(true);
    });

    it('renders an h1 element with the correct text', () => {
        const wrapper = shallow(<MainSection />);
        const h1Element = wrapper.find('h1');

        expect(h1Element).toHaveLength(1);
        expect(h1Element.text()).toBe('Welcome to Toddler World');
    });

    it('renders a Link to the login page with a Button component', () => {
        const wrapper = shallow(<MainSection />);
        const linkElement = wrapper.find(Link);
        const buttonElement = wrapper.find(Button);

        expect(linkElement).toHaveLength(1);
        expect(linkElement.prop('to')).toBe('/login');

        expect(buttonElement).toHaveLength(1);
        expect(buttonElement.prop('className')).toBe('login-button');
        expect(buttonElement.prop('buttonStyle')).toBe('primary-button');
        expect(buttonElement.prop('buttonSize')).toBe('large');

        // Check the text content inside the Button component
        const buttonText = buttonElement.dive().text(); // Dive into the Button component to check its text content
        expect(buttonText).toBe('Find out more!');
    });
});
