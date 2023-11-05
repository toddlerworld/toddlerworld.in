import React from 'react';
import { render, screen } from '@testing-library/react';
import Youtube from './Youtube';

describe('Youtube component', () => {
    test('renders Youtube component', () => {
        render(<Youtube />);
        const youtubeElement = screen.getByTestId('youtube-component');
        expect(youtubeElement).toBeInTheDocument();
    });

    test('renders heading "YOU\'LL LOVE WHY WE\'RE DIFFERENT. TAKE A LOOK"', () => {
        render(<Youtube />);
        const headingElement = screen.getByText(/YOU'LL LOVE WHY WE ARE DIFFERENT. TAKE A LOOK/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders paragraph with specific text', () => {
        render(<Youtube />);
        const paragraphElement = screen.getByText(/Toddler World is renowned for providing rich learning opportunities/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders Youtube video iframe with specific src', () => {
        render(<Youtube />);
        const videoIframeElement = screen.getByTestId('youtube-video');
        expect(videoIframeElement).toBeInTheDocument();
        expect(videoIframeElement.src).toContain('https://www.youtube.com/embed/FxxsA-qaHTM');
    });
});
