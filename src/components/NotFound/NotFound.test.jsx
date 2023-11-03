import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NotFound component', () => {
    beforeEach(() => {
        render(
            <Router>
                render(<NotFound />);
            </Router>
        );
    });
    test('renders without crashing', () => {
        const errorPageElement = screen.getByTestId('error-page');
        expect(errorPageElement).toBeInTheDocument();
    });

    test('displays the correct heading and message', () => {
        const headingElement = screen.getByRole('heading', { level: 1 });
        expect(headingElement).toHaveTextContent('Lost your Way?');

        const messageElement = screen.getByText(/Sorry we can't find that page!/i);
        expect(messageElement).toBeInTheDocument();
    });

    test('contains a "Go Home" button that links to the home page', () => {
        const goHomeButton = screen.getByRole('button', { name: /go home/i });

        expect(goHomeButton).toHaveTextContent('Go Home');

        const homeLink = screen.getByRole('link', { name: /go home/i });
        expect(homeLink).toHaveAttribute('href', '/');
    });
});