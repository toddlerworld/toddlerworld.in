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
        expect(getByAltText('Teacher showing how to write to a child')).toBeInTheDocument();
    });

    test('contains the expected paragraphs of text', () => {
        const { getByText } = render(<Team />);
        const expectedTextSnippet =
            `Toddler World staff are selected for their empathy with children, their commitment to childcare...`;

        // Using a regular expression to match a part of the text content
        expect(getByText(new RegExp(expectedTextSnippet))).toBeInTheDocument();
    });
});
