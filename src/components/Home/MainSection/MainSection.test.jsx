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

    test('renders heading "Welcome to Toddler World"', () => {
        render(
            <Router>
                <MainSection />
            </Router>
        );
        const headingElement = screen.getByText('Welcome to Toddler World');
        expect(headingElement).toBeInTheDocument();
    });

    test('renders Link to "/welcome"', () => {
        render(
            <Router>
                <MainSection />
            </Router>
        );
        const linkElement = screen.getByRole('link', { name: /Find out more!/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.href).toContain('/welcome');
    });
});
