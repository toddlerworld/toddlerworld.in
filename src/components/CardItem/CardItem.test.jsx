import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';

describe('CardItem Component', () => {
    const mockProps = {
        path: '/example',
        label: 'Example Label',
        src: 'example.jpg',
        text: 'Example Text',
    };

    it('renders without crashing', () => {
        shallow(<CardItem {...mockProps} />);
    });

    it('renders a Link component with correct props', () => {
        const wrapper = shallow(<CardItem {...mockProps} />);
        const link = wrapper.find(Link);

        expect(link).toHaveLength(1);
        expect(link.prop('to')).toBe('/example');
        expect(link.hasClass('link')).toBe(true);
    });

    it('renders a figure element with correct props', () => {
        const wrapper = shallow(<CardItem {...mockProps} />);
        const figure = wrapper.find('figure');

        expect(figure).toHaveLength(1);
        expect(figure.prop('data-category')).toBe('Example Label');
        expect(figure.hasClass('image')).toBe(true);
    });

    it('renders an img element with correct props', () => {
        const wrapper = shallow(<CardItem {...mockProps} />);
        const img = wrapper.find('img');

        expect(img).toHaveLength(1);
        expect(img.prop('alt')).toBe('Job Image');
        expect(img.prop('src')).toBe('example.jpg');
        expect(img.hasClass('img-item')).toBe(true);
    });

    it('renders a div element with correct props', () => {
        const wrapper = shallow(<CardItem {...mockProps} />);
        const div = wrapper.find('.aboutCard');

        expect(div).toHaveLength(1);
        expect(div.hasClass('aboutCard')).toBe(true);
    });

    it('renders an h5 element with correct props', () => {
        const wrapper = shallow(<CardItem {...mockProps} />);
        const h5 = wrapper.find('h5');

        expect(h5).toHaveLength(1);
        expect(h5.hasClass('caption')).toBe(true);
        expect(h5.text()).toBe('Example Text');
    });
});
