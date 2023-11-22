import React from 'react';
import { render } from '@testing-library/react';
import Environment from './Environment';

describe(('Environment Component Tests'), () => {
    test('renders without crashing', () => {
        render(<Environment />);
    });

    test('renders the heading correctly', () => {
        const { getByText } = render(<Environment />);
        expect(getByText('Our Environment')).toBeInTheDocument();
    });

    test('renders the image with the correct alt attribute', () => {
        const { getByAltText } = render(<Environment />);
        expect(getByAltText('A boy playing in the play area')).toBeInTheDocument();
    });

    test('contains the expected paragraphs of text', () => {
        const { getByText } = render(<Environment />);
        const expectedTextSnippet =
            `Toddler World is a space where once the child walks in, he is so lured that he is unable to withdraw from it.`;

        expect(getByText(new RegExp(expectedTextSnippet))).toBeInTheDocument();
    });

    test('contains specific list items in the caring growth environment section', () => {
        const { getByText } = render(<Environment />);
        expect(getByText('Different stages of development of the child')).toBeInTheDocument();
        expect(getByText('Individual differences amongst children')).toBeInTheDocument();
        expect(getByText('Varied potentials/skills of individual children')).toBeInTheDocument();
        expect(getByText('Last but not the least, all aspects of intelligence')).toBeInTheDocument();
    });

});