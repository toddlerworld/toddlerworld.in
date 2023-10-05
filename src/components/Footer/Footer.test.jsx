import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './Footer';

describe('Footer Component', () => {
    test('renders the footer with the correct content', () => {
        const { getByText, getByLabelText } = render(
            <Router>
                <Footer />
            </Router>
        );

        expect(getByText('Toddler World')).toBeInTheDocument();
        expect(getByText('Toddler World © 2016-2023')).toBeInTheDocument();
        expect(getByLabelText('Facebook')).toBeInTheDocument();
        expect(getByLabelText('Instagram')).toBeInTheDocument();
        expect(getByLabelText('Youtube')).toBeInTheDocument();
        expect(getByLabelText('Twitter')).toBeInTheDocument();
        expect(getByLabelText('LinkedIn')).toBeInTheDocument();
    });

    test('renders social icons with the correct links', () => {
        const { getByLabelText } = render(
            <Router>
                <Footer />
            </Router>
        );

        expect(getByLabelText('Facebook')).toHaveAttribute('href', 'https://www.facebook.com/toddlerworldsgr/');
        expect(getByLabelText('Instagram')).toHaveAttribute('href', 'https://www.instagram.com/toddlerworldsgr/');
        expect(getByLabelText('Youtube')).toHaveAttribute('href', 'https://www.youtube.com/@ToddlerWorld');
        expect(getByLabelText('Twitter')).toHaveAttribute('href', 'https://www.twitter.com/toddlerworldsgr/');
        expect(getByLabelText('LinkedIn')).toHaveAttribute('href', 'https://www.linkedin.com/company/toddlerworld/');
    });

    test('renders social icons with links opening in a new tab', () => {
        const { getByLabelText } = render(
            <Router>
                <Footer />
            </Router>
        );

        expect(getByLabelText('Facebook')).toHaveAttribute('target', '_blank');
        expect(getByLabelText('Instagram')).toHaveAttribute('target', '_blank');
        expect(getByLabelText('Youtube')).toHaveAttribute('target', '_blank');
        expect(getByLabelText('Twitter')).toHaveAttribute('target', '_blank');
        expect(getByLabelText('LinkedIn')).toHaveAttribute('target', '_blank');
    });

    test('renders the footer container with the correct class', () => {
        const { container } = render(
            <Router>
                <Footer />
            </Router>
        );

        expect(container.firstChild).toHaveClass('footer-container');
    });

    test('renders a link to the home page with the correct path', () => {
        const { getByText } = render(
            <Router>
                <Footer />
            </Router>
        );

        expect(getByText('Toddler World')).toHaveAttribute('href', '/');
    });

});
