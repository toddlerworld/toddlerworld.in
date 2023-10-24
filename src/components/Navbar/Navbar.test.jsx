import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
    test('renders Navbar component', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const navbarElement = screen.getByTestId('navbar-component');
        expect(navbarElement).toBeInTheDocument();
    });

    test('renders logo', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const logoElement = screen.getByAltText('Logo');
        expect(logoElement).toBeInTheDocument();
    });

    test('toggles mobile menu when menu icon is clicked', async () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );

        const menuIconElement = screen.getByTestId('menu-icon-component');
        const navMenuElement = screen.getByTestId('nav-menu-component');

        fireEvent.click(menuIconElement);
        await waitFor(() => {
            expect(navMenuElement).toHaveClass('nav-menu');
        });

        fireEvent.click(menuIconElement);
        await waitFor(() => {
            expect(navMenuElement).not.toHaveClass('active');
        });
    });

    test('closes mobile menu when a link is clicked', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );

        const menuIconElement = screen.getByTestId('menu-icon-component');
        const navMenuElement = screen.getByTestId('nav-menu-component');

        fireEvent.click(menuIconElement);
        expect(navMenuElement).toHaveClass('nav-menu');

        const homeLinkElement = screen.getByText('Home');
        fireEvent.click(homeLinkElement);

        expect(navMenuElement).not.toHaveClass('active');
    });
});
