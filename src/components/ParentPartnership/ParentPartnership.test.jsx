import React from 'react';
import { render } from '@testing-library/react';
import ParentPartnership from './ParentPartnership';

describe(('Environment Component Tests'), () => {
    test('renders without crashing', () => {
        render(<ParentPartnership />);
    });

    test('renders the heading correctly', () => {
        const { getByText } = render(<ParentPartnership />);
        expect(getByText('Parent Partnership')).toBeInTheDocument();
    });

    test('renders the image with the correct alt attribute', () => {
        const { getByAltText } = render(<ParentPartnership />);
        expect(getByAltText('A mother and father kissing their child')).toBeInTheDocument();
    });

    test('contains the expected paragraphs of text', () => {
        const { getByText } = render(<ParentPartnership />);
        const expectedTextSnippet =
            `The importance of developing a positive relationship between our staff and parents can never be`;

        expect(getByText(new RegExp(expectedTextSnippet))).toBeInTheDocument();
    });
});