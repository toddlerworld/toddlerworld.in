import React from 'react';
import { render, screen } from '@testing-library/react';
import Kindergarten1 from './Kindergarten1';

describe('Kindergarten1 Component Tests', () => {
    test('renders  Kindergarten1 component', () => {
        render(<Kindergarten1 />);
        expect(screen.getByText('KINDERGARTEN 1 (4 - 5 YEARS)')).toBeInTheDocument();
    });

    test('renders the image for  Kindergarten1 component', () => {
        const { getByAltText } = render(<Kindergarten1 />);
        const image = getByAltText('A girl who has her hands open');
        expect(image).toBeInTheDocument();
    });

    test('renders the left-aligned Kindergarten1 content', () => {
        const { getByText } = render(<Kindergarten1 />);
        const leftContent = getByText(/This programme is meant for children between/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned Pre Kindergarten1 content', () => {
        const { getByText } = render(<Kindergarten1 />);
        const rightContent = getByText(/There is a lot more to know/i);
        expect(rightContent).toBeInTheDocument();
    });

    test('renders the "Learn More" section', () => {
        const { getByText } = render(<Kindergarten1 />);
        const learnMoreHeading = getByText('Learn More');
        const learnMoreText = getByText(/There is a lot more to know/i);
        expect(learnMoreHeading).toBeInTheDocument();
        expect(learnMoreText).toBeInTheDocument();
    });

    test('button click should open the contact us link', () => {
        const {container} = render(<Kindergarten1 />);

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
