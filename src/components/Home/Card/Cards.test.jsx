import React from 'react';
import { shallow } from 'enzyme';
import Cards from './Cards';
import CardItem from '../../CardItem/CardItem';

describe('Cards Component', () => {
    it('renders without crashing', () => {
        shallow(<Cards />);
    });

    it('renders the main container with the correct class', () => {
        const wrapper = shallow(<Cards />);
        const mainContainer = wrapper.find('.cards');
        expect(mainContainer).toHaveLength(1);
    });

    it('renders an h1 element with the correct text', () => {
        const wrapper = shallow(<Cards />);
        const h1Element = wrapper.find('h1');

        expect(h1Element).toHaveLength(1);
        expect(h1Element.text()).toBe('A bit about us');
    });

    it('renders a card container with the correct class', () => {
        const wrapper = shallow(<Cards />);
        const cardContainer = wrapper.find('.card');
        expect(cardContainer).toHaveLength(1);
    });

    it('renders a wrapper div inside the card container', () => {
        const wrapper = shallow(<Cards />);
        const wrapperDiv = wrapper.find('.wrapper');
        expect(wrapperDiv).toHaveLength(1);
    });

    it('renders a list of CardItem components with correct props', () => {
        const wrapper = shallow(<Cards />);
        const cardItems = wrapper.find(CardItem);

        expect(cardItems).toHaveLength(3); // Assuming there are 3 CardItem components

        const expectedCardItemProps = [
            {
                src: '/gifs/placeholder1.gif',
                text: "Our well-designed environment supports child's growth and development",
                label: 'Our Environment',
                path: '/our-environment',
            },
            {
                src: '/gifs/placeholder2.gif',
                text: 'World class infrastructure for holistic development of the child',
                label: 'Our Facilities',
                path: '/play-equipment',
            },
            {
                src: '/gifs/placeholder3.gif',
                text: 'Our age appropriate programmes that grow with your child',
                label: 'Our Programmes',
                path: '/login',
            },
        ];

        cardItems.forEach((cardItem, index) => {
            const props = cardItem.props();
            expect(props).toEqual(expectedCardItemProps[index]);
        });
    });
});
