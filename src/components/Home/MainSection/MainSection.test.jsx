import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainSection from './MainSection';

describe('MainSection component', () => {
    test('renders MainSection component', () => {
        render(
            <Router>
                <MainSection />
            </Router>
        );
        const mainSectionElement = screen.getByTestId('main-section');
        expect(mainSectionElement).toBeInTheDocument();
    });

    test('renders video element with src "/images/home-page-pic.mp4"', () => {
        render(
            <Router>
                <MainSection />
            </Router>
        );
        const videoElement = screen.getByTestId('main-video');
        expect(videoElement).toBeInTheDocument();
        expect(videoElement.src).toContain('/images/home-page-pic.mp4');
    });

    test('renders heading "Welcome to Toddler World"', () => {
        render(
            <Router>
                <MainSection />
            </Router>
        );
        const headingElement = screen.getByText('Welcome to Toddler World');
        expect(headingElement).toBeInTheDocument();
    });

    test('renders Link to "/login"', () => {
        render(
            <Router>
                <MainSection />
            </Router>
        );
        const linkElement = screen.getByRole('link', { name: /Find out more!/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.href).toContain('/login');
    });
});
