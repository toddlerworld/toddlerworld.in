import React from 'react';
import { render, screen } from '@testing-library/react';
import Nursery from './Nursery';

describe('Nursery Component Tests', () => {
    test('renders  Nursery component', () => {
        render(<Nursery />);
        expect(screen.getByText('NURSERY (3 - 4 YEARS)')).toBeInTheDocument();
    });

    test('renders the image for  Nursery component', () => {
        const { getByAltText } = render(<Nursery />);
        const image = getByAltText('A boy wearing a police outfit');
        expect(image).toBeInTheDocument();
    });

    test('renders the left-aligned Nursery content', () => {
        const { getByText } = render(<Nursery />);
        const leftContent = getByText(/This programme is for children between/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned Pre Nursery content', () => {
        const { getByText } = render(<Nursery />);
        const rightContent = getByText(/There is a lot more to know/i);
        expect(rightContent).toBeInTheDocument();
    });

    test('renders the "Learn More" section', () => {
        const { getByText } = render(<Nursery />);
        const learnMoreHeading = getByText('Learn More');
        const learnMoreText = getByText(/There is a lot more to know/i);
        expect(learnMoreHeading).toBeInTheDocument();
        expect(learnMoreText).toBeInTheDocument();
    });

    test('button click should open the contact us link', () => {
        const {container} = render(<Nursery />);

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
