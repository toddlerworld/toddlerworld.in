import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';
import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';

describe('Welcome Component', () => {
    it('renders without crashing', () => {
        shallow(<Welcome />);
    });

    it('renders the main container with the correct class', () => {
        const wrapper = shallow(<Welcome />);
        const mainContainer = wrapper.find('.welcome');
        expect(mainContainer).toHaveLength(1);
    });

    it('renders an h2 element with the correct text', () => {
        const wrapper = shallow(<Welcome />);
        const h2Element = wrapper.find('h2');

        expect(h2Element).toHaveLength(1);
        expect(h2Element.text()).toBe('Welcome To Toddler World');
    });

    it('renders a p element with the correct class and text content', () => {
        const wrapper = shallow(<Welcome />);
        const paragraphElement = wrapper.find('.welcome-paragraph');

        expect(paragraphElement).toHaveLength(1);
        expect(paragraphElement.text()).toContain('Toddler World is a friendly, caring and committed facility');
    });

    it('renders a Link to the admissions page with a Button component', () => {
        const wrapper = shallow(<Welcome />);
        const linkElement = wrapper.find(Link);
        const buttonElement = wrapper.find(Button);

        expect(linkElement).toHaveLength(1);
        expect(linkElement.prop('to')).toBe('/admissions');

        expect(buttonElement).toHaveLength(1);
        expect(buttonElement.prop('className')).toBe('register-button');
        expect(buttonElement.prop('buttonStyle')).toBe('primary-button');
        expect(buttonElement.prop('buttonSize')).toBe('large');
        // Check the text content inside the Button component
        const buttonText = buttonElement.dive().text(); // Dive into the Button component to check its text content
        expect(buttonText).toBe('Register your child!');
    });
});
