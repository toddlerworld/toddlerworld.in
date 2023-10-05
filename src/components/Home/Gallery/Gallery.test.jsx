import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';

describe('Gallery component', () => {
    test('renders Gallery component', () => {
        render(<Gallery />);
        const galleryElement = screen.getByTestId('gallery-component');
        expect(galleryElement).toBeInTheDocument();
    });

    test('renders heading "Photo Gallery"', () => {
        render(<Gallery />);
        const headingElement = screen.getByText('Photo Gallery');
        expect(headingElement).toBeInTheDocument();
    });

    test('renders images from the json file', () => {
        render(<Gallery />);
        const imageElements = screen.getAllByRole('img');
        expect(imageElements.length).toBeGreaterThan(0);
    });
});
