import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';
import { Carousel } from 'react-responsive-carousel';
import images from './images.json'; // Add this line

describe('Gallery Component', () => {
    it('renders without crashing', () => {
        shallow(<Gallery />);
    });

    it('renders the main container with the correct class', () => {
        const wrapper = shallow(<Gallery />);
        const mainContainer = wrapper.find('.gallery');
        expect(mainContainer).toHaveLength(1);
    });

    it('renders an h1 element with the correct text', () => {
        const wrapper = shallow(<Gallery />);
        const h1Element = wrapper.find('h1');

        expect(h1Element).toHaveLength(1);
        expect(h1Element.text()).toBe('Photo Gallery');
    });

    it('renders an hr element with the correct class', () => {
        const wrapper = shallow(<Gallery />);
        const hrElement = wrapper.find('.hr-gallery');
        expect(hrElement).toHaveLength(1);
    });

    it('renders a Carousel component with the correct props', () => {
        const wrapper = shallow(<Gallery />);
        const carouselComponent = wrapper.find(Carousel);

        expect(carouselComponent).toHaveLength(1);
        expect(carouselComponent.prop('showIndicators')).toBe(false);
        expect(carouselComponent.prop('autoPlay')).toBe(true);
        expect(carouselComponent.prop('infiniteLoop')).toBe(true);
        expect(carouselComponent.prop('centerMode')).toBe(true);
        expect(carouselComponent.prop('interval')).toBe(4000);
        expect(carouselComponent.prop('showStatus')).toBe(false);
    });

    it('renders images from the images.json file', () => {
        const wrapper = shallow(<Gallery />);
        const carouselImages = wrapper.find(Carousel).find('img');

        expect(carouselImages).toHaveLength(images.length);

        images.forEach((image, index) => {
            const imageElement = carouselImages.at(index);
            expect(imageElement.prop('src')).toBe(image.source);
            expect(imageElement.prop('alt')).toBe(image.alt);
            expect(imageElement.key()).toBe(image.id.toString());
        });
    });
});
