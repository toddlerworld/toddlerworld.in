import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact component', () => {
    test('renders Contact component', () => {
        render(<Contact />);
        const contactElement = screen.getByTestId('contact-container'); // Update the data-testid
        expect(contactElement).toBeInTheDocument();
    });

    test('renders heading "Contact Us"', () => {
        render(<Contact />);
        const headingElement = screen.getByText('Contact Us');
        expect(headingElement).toBeInTheDocument();
    });

    test('renders "Better yet, see us in person!" subheading', () => {
        render(<Contact />);
        const subheadingElement = screen.getByText('Better yet, see us in person!');
        expect(subheadingElement).toBeInTheDocument();
    });

    test('renders address information', () => {
        render(<Contact />);
        const addressElement = screen.getByText(/Airport Avenue, Near Railway Bridge, Srinagar, Jammu and Kashmir, 190021/);
        expect(addressElement).toBeInTheDocument();
    });

    test('renders phone numbers', () => {
        render(<Contact />);
        const phoneElement1 = screen.getByText('+91 1942-303601');
        const phoneElement2 = screen.getByText('+91 1942-303611');
        const mobileElement1 = screen.getByText('+91 705-1427879');
        const mobileElement2 = screen.getByText('+91 788-9744619');

        expect(phoneElement1).toBeInTheDocument();
        expect(phoneElement2).toBeInTheDocument();
        expect(mobileElement1).toBeInTheDocument();
        expect(mobileElement2).toBeInTheDocument();
    });
});
