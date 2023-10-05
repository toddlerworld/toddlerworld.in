import React from 'react';
import {getByLabelText, render} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import CardItem from './CardItem';

describe('CardItem Component', () => {
    test('renders with provided props', () => {
        const props = {
            path: '/example',
            label: 'Example Label',
            src: 'example.jpg',
            text: 'Example Text',
        };

        const { getByText, getByAltText, getByTestId } = render(
            <Router>
                <CardItem {...props} />
            </Router>
        );

        expect(getByText('Example Text')).toBeInTheDocument();
        expect(getByAltText('Job Image')).toHaveAttribute('src', 'example.jpg');
    });

    test('renders with default alt text if not provided', () => {
        const props = {
            path: '/example',
            label: 'Example Label',
            src: 'example.jpg',
            text: 'Example Text',
        };

        const { getByAltText } = render(
            <Router>
                <CardItem {...props} />
            </Router>
        );

        expect(getByAltText('Job Image')).toBeInTheDocument();
    });

    test('renders with default alt text if alt prop is an empty string', () => {
        const props = {
            path: '/example',
            label: 'Example Label',
            src: 'example.jpg',
            text: 'Example Text',
            alt: '',
        };

        const { getByAltText } = render(
            <Router>
                <CardItem {...props} />
            </Router>
        );

        expect(getByAltText('Job Image')).toBeInTheDocument();
    });
});
