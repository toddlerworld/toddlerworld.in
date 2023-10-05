import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import MainSection from './MainSection/MainSection';
import Welcome from './Welcome/Welcome';
import HomeLandingImage from './Home-landing-image/Home-landing-image';
import Cards from './Card/Cards';
import Youtube from './Youtube/Youtube';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';

describe('Home Component', () => {
    it('renders without crashing', () => {
        shallow(<Home />);
    });

    it('renders the MainSection component', () => {
        const wrapper = shallow(<Home />);
        const mainSectionComponent = wrapper.find(MainSection);
        expect(mainSectionComponent).toHaveLength(1);
    });

    it('renders the Welcome component', () => {
        const wrapper = shallow(<Home />);
        const welcomeComponent = wrapper.find(Welcome);
        expect(welcomeComponent).toHaveLength(1);
    });

    it('renders the HomeLandingImage component', () => {
        const wrapper = shallow(<Home />);
        const homeLandingImageComponent = wrapper.find(HomeLandingImage);
        expect(homeLandingImageComponent).toHaveLength(1);
    });

    it('renders the Cards component', () => {
        const wrapper = shallow(<Home />);
        const cardsComponent = wrapper.find(Cards);
        expect(cardsComponent).toHaveLength(1);
    });

    it('renders the Youtube component', () => {
        const wrapper = shallow(<Home />);
        const youtubeComponent = wrapper.find(Youtube);
        expect(youtubeComponent).toHaveLength(1);
    });

    it('renders the Gallery component', () => {
        const wrapper = shallow(<Home />);
        const galleryComponent = wrapper.find(Gallery);
        expect(galleryComponent).toHaveLength(1);
    });

    it('renders the Contact component', () => {
        const wrapper = shallow(<Home />);
        const contactComponent = wrapper.find(Contact);
        expect(contactComponent).toHaveLength(1);
    });
});
