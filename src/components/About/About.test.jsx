import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from './About';

describe('About Component', () => {
    test('renders About component without crashing', () => {
        render(<About/>);
        const aboutElement = screen.getByTestId('about-container');
        expect(aboutElement).toBeInTheDocument();
    });

    test('displays the correct heading', () => {
        render(<About/>);
        const headingElement = screen.getByText(/About us/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('displays image 1 in the section', () => {
        render(<About/>);
        const imageElements = screen.getAllByAltText(/Teacher showing how to write to a child/i);
        expect(imageElements).toHaveLength(1);
    });

    test('displays image 2 in the section', () => {
        render(<About/>);
        const imageElements = screen.getAllByAltText(/Children sitting on chairs and reading books/i);
        expect(imageElements).toHaveLength(1);
    });

    test('displays image 3 in the section', () => {
        render(<About/>);
        const imageElements = screen.getAllByAltText(/Nine Children playing together/i);
        expect(imageElements).toHaveLength(1);
    });

    test('renders Learn More button in each section', () => {
        render(<About/>);
        const learnMoreButtons = screen.getAllByRole('button', {name: /Learn More/i});
        expect(learnMoreButtons).toHaveLength(3);
    });
});