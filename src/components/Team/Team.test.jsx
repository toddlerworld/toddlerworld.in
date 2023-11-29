import React from 'react';
import { render } from '@testing-library/react';
import Team from './Team';

describe('Tests for Our Team Component', () => {
    test('renders without crashing', () => {
        render(<Team />);
    });

    test('renders the heading correctly', () => {
        const { getByText } = render(<Team />);
        expect(getByText('Our Team')).toBeInTheDocument();
    });

    test('renders the image with the correct alt attribute', () => {
        const { getByAltText } = render(<Team />);
        expect(getByAltText('A boy reading from a book')).toBeInTheDocument();
    });

    test('contains the expected paragraphs of text', () => {
        const { getByText } = render(<Team />);
        const expectedTextSnippet =
            `Toddler World staff are selected for their empathy with children, their commitment to childcare...`;

        expect(getByText(new RegExp(expectedTextSnippet))).toBeInTheDocument();
    });
});
