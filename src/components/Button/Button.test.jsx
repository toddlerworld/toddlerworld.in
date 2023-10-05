import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more matchers

import { Button } from './Button';

describe('Button Component', () => {
    test('renders with default props', () => {
        const { getByText } = render(<Button>Click me</Button>);
        expect(getByText('Click me')).toBeInTheDocument();
        expect(getByText('Click me')).toHaveClass('btn primary-button secondary-button');
    });

    test('renders with custom style and size', () => {
        const { getByText } = render(
            <Button style="custom-style" size="custom-size">
                Custom Button
            </Button>
        );
        expect(getByText('Custom Button')).toBeInTheDocument();
        expect(getByText('Custom Button')).toHaveClass('btn primary-button secondary-button');
    });

    test('calls onClick prop when button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);

        fireEvent.click(getByText('Click me'));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('renders with custom type if provided', () => {
        const { getByText } = render(<Button type="submit">Submit</Button>);
        expect(getByText('Submit')).toHaveAttribute('type', 'submit');
    });

    test('renders children elements correctly', () => {
        const { getByTestId } = render(
            <Button>
                <span data-testid="child-span">Child Element</span>
            </Button>
        );
        expect(getByTestId('child-span')).toBeInTheDocument();
    });

    test('falls back to default size and style if invalid values are provided', () => {
        const { getByText } = render(<Button size="invalid-size" style="invalid-style">Fallback Button</Button>);
        expect(getByText('Fallback Button')).toHaveClass('btn primary-button secondary-button');
    });



});
