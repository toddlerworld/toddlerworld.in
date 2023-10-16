import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Welcome from './Welcome';

describe('Welcome component', () => {
    test('renders Welcome component', () => {
        render(
            <Router>
                <Welcome />
            </Router>
        );
        const welcomeElement = screen.getByTestId('welcome-component');
        expect(welcomeElement).toBeInTheDocument();
    });

    test('renders heading "Welcome To Toddler World"', () => {
        render(
            <Router>
                <Welcome />
            </Router>
        );
        const headingElement = screen.getByText('Welcome To Toddler World');
        expect(headingElement).toBeInTheDocument();
    });

    test('renders paragraph with specific text', () => {
        render(
            <Router>
                <Welcome />
            </Router>
        );
        const paragraphElement = screen.getByText(/Toddler World is a friendly, caring and committed facility/);
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders Link to "/admissions"', () => {
        render(
            <Router>
                <Welcome />
            </Router>
        );
        const linkElement = screen.getByRole('link', { name: /Register your child!/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.href).toContain('https://www.campuskidz.in/Registration/OnlineEnquiry');
    });
});
