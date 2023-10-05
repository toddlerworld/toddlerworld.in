import React from 'react';
import { shallow } from 'enzyme';
import HomeLandingImage from './Home-landing-image';

describe('HomeLandingImage Component', () => {
    it('renders without crashing', () => {
        shallow(<HomeLandingImage />);
    });

    it('renders the main container with the correct class', () => {
        const wrapper = shallow(<HomeLandingImage />);
        const mainContainer = wrapper.find('.home-landing-container');
        expect(mainContainer).toHaveLength(1);
    });

    it('renders an h1 element with the correct text', () => {
        const wrapper = shallow(<HomeLandingImage />);
        const h1Element = wrapper.find('h1');

        expect(h1Element).toHaveLength(1);
        expect(h1Element.text()).toBe('ENABLING A SUCCESSFUL TRANSITION TO A PRIMARY SCHOOL');
    });
});
