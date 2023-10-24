import React from 'react';
import { render, screen } from '@testing-library/react';
import Kindergarten2 from './Kindergarten2';

describe('Kindergarten2 Component Tests', () => {
    test('renders  Kindergarten2 component', () => {
        render(<Kindergarten2 />);
        expect(screen.getByText('KINDERGARTEN 2 (5 - 6 YEARS)')).toBeInTheDocument();
    });

    test('renders the image for  Kindergarten2 component', () => {
        const { getByAltText } = render(<Kindergarten2 />);
        const image = getByAltText('A boy who has a car on the elbow');
        expect(image).toBeInTheDocument();
    });

    test('renders the left-aligned Kindergarten2 content', () => {
        const { getByText } = render(<Kindergarten2 />);
        const leftContent = getByText(/The final programme at pre-school level/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned Kindergarten2 content', () => {
        const { getByText } = render(<Kindergarten2 />);
        const rightContent = getByText(/There is a lot more to know/i);
        expect(rightContent).toBeInTheDocument();
    });

    test('renders the "Learn More" section', () => {
        const { getByText } = render(<Kindergarten2 />);
        const learnMoreHeading = getByText('Learn More');
        const learnMoreText = getByText(/There is a lot more to know/i);
        expect(learnMoreHeading).toBeInTheDocument();
        expect(learnMoreText).toBeInTheDocument();
    });

    test('button click should open the contact us link', () => {
        const {container} = render(<Kindergarten2 />);

        const registerButton = container.querySelector('[data-testid="contact-us-comp"]');

        expect(registerButton).toBeInTheDocument();

        const linkElement = screen.getByTestId("contact-us-link-test");

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute(
            'href',
            '/contact-us'
        );
    });
});
