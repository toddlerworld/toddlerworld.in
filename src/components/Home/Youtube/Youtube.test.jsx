import React from 'react';
import { shallow } from 'enzyme';
import Youtube from './Youtube';

describe('Youtube Component', () => {
    it('renders without crashing', () => {
        shallow(<Youtube />);
    });

    it('renders the main container with the correct class', () => {
        const wrapper = shallow(<Youtube />);
        const mainContainer = wrapper.find('.youtube-container');
        expect(mainContainer).toHaveLength(1);
    });

    it('renders an h1 element with the correct text', () => {
        const wrapper = shallow(<Youtube />);
        const h1Element = wrapper.find('h1');

        expect(h1Element).toHaveLength(1);
        expect(h1Element.text()).toBe("YOU'LL LOVE WHY WE'RE DIFFERENT. TAKE A LOOK");
    });

    it('renders an hr element with the correct class', () => {
        const wrapper = shallow(<Youtube />);
        const hrElement = wrapper.find('.hr-youtube');
        expect(hrElement).toHaveLength(1);
    });

    it('renders a p element with the correct text content', () => {
        const wrapper = shallow(<Youtube />);
        const pElement = wrapper.find('p');

        expect(pElement).toHaveLength(1);
        expect(pElement.text()).toContain('Toddler World is renowned for providing rich learning opportunities in unique and exciting environment.');
    });

    it('renders a div with the correct class and an iframe with the correct src attribute', () => {
        const wrapper = shallow(<Youtube />);
        const videoContainer = wrapper.find('.youtube-video-container');
        const iframeElement = videoContainer.find('iframe');

        expect(videoContainer).toHaveLength(1);
        expect(iframeElement).toHaveLength(1);
        expect(iframeElement.prop('className')).toBe('youtube-video');
        expect(iframeElement.prop('src')).toBe('https://www.youtube.com/embed/FxxsA-qaHTM');
    });
});
