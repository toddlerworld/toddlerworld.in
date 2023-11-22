import React from 'react';
import { render } from '@testing-library/react';
import Welcome from './Welcome';

describe(('Welcome Component Tests'), () => {
    test('renders without crashing', () => {
        render(<Welcome />);
    });

    test('renders the heading correctly', () => {
        const { getByText } = render(<Welcome />);
        expect(getByText('Thank you for your interest in Toddler World.')).toBeInTheDocument();
    });

    test('renders the image with the correct alt attribute', () => {
        const { getByAltText } = render(<Welcome />);
        expect(getByAltText('Children enjoying listening to a story')).toBeInTheDocument();
    });

    test('contains the expected paragraphs of text', () => {
        const { getByText } = render(<Welcome />);
        const expectedTextSnippet =
            `Child is the most precious and valuable gift of our lives. Our priorities, aims and aspirations completely revolve around them. We as parents strive to give them the best of everything.`;

        expect(getByText(new RegExp(expectedTextSnippet))).toBeInTheDocument();
    });
});