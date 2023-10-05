import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';
import OpeningHours from './OpeningHours/OpeningHours';

describe('Contact Component', () => {
    it('renders without crashing', () => {
        shallow(<Contact />);
    });

    it('renders the main container with the correct class', () => {
        const wrapper = shallow(<Contact />);
        const mainContainer = wrapper.find('.container');
        expect(mainContainer).toHaveLength(1);
    });

    it('renders the contact container with the correct class', () => {
        const wrapper = shallow(<Contact />);
        const contactContainer = wrapper.find('.contact-container');
        expect(contactContainer).toHaveLength(1);
    });

    it('renders an h1 element with the correct text', () => {
        const wrapper = shallow(<Contact />);
        const h1Element = wrapper.find('h1');

        expect(h1Element).toHaveLength(1);
        expect(h1Element.text()).toBe('Contact Us');
    });

    it('renders an hr element with the correct class', () => {
        const wrapper = shallow(<Contact />);
        const hrElement = wrapper.find('.hr-contact');
        expect(hrElement).toHaveLength(1);
    });

    it('renders the "see us in person" section with the correct text', () => {
        const wrapper = shallow(<Contact />);
        const h2Element = wrapper.find('h2');

        expect(h2Element.at(0).text()).toBe('Better yet, see us in person!');

        const paragraphText = wrapper.find('.contact-paragraph').at(0).text();
        expect(paragraphText).toContain('We would love to see you in person.');
        expect(paragraphText).toContain('So feel free to call us to book an appointment.');

    });

    it('renders the phone numbers with correct links', () => {
        const wrapper = shallow(<Contact />);
        const phoneNumbers = wrapper.find('.contact-telephone');

        expect(phoneNumbers.find('.phone').at(0).prop('href')).toBe('tel:+911942303601');
        expect(phoneNumbers.find('.phone').at(1).prop('href')).toBe('tel:+911942303611');
        expect(phoneNumbers.find('.phone').at(2).prop('href')).toBe('tel:+917051427879');
        expect(phoneNumbers.find('.phone').at(3).prop('href')).toBe('tel:+917889744619');
    });

    it('renders the OpeningHours component', () => {
        const wrapper = shallow(<Contact />);
        expect(wrapper.find(OpeningHours)).toHaveLength(1);
    });

    it('renders the maps container with an iframe', () => {
        const wrapper = shallow(<Contact />);
        const mapsContainer = wrapper.find('.maps-container');

        expect(mapsContainer).toHaveLength(1);
        expect(mapsContainer.find('iframe')).toHaveLength(1);
    });
});
