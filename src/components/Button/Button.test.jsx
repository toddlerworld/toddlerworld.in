import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button Component', () => {
    it('renders without crashing', () => {
        shallow(<Button />);
    });

    it('renders with correct class names based on style and size prop', () => {
        const wrapper = shallow(<Button style="primary-button" size="large" />);
        expect(wrapper.hasClass('btn')).toBe(true);
        expect(wrapper.hasClass('primary-button')).toBe(true);
        expect(wrapper.hasClass('large')).toBe(true);
    });

    it('calls onClick prop when button is clicked', () => {
        const mockOnClick = jest.fn();
        const wrapper = shallow(<Button onClick={mockOnClick} />);
        wrapper.find('button').simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('renders children inside the button', () => {
        const wrapper = shallow(<Button>Click me</Button>);
        expect(wrapper.find('button').text()).toBe('Click me');
    });

    it('passes the correct type prop to the button', () => {
        const wrapper = shallow(<Button type="submit" />);
        expect(wrapper.prop('type')).toBe('submit');
    });
});
