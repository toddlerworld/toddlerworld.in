import React from 'react';
import { render, screen } from '@testing-library/react';
import PreNursery from './PreNursery';

describe('Pre Nursery Component', () => {
    test('renders Pre Nursery component', () => {
        render(<PreNursery />);

        expect(screen.getByText('Citizen')).toBeInTheDocument();

        expect(screen.getByText('Scholar')).toBeInTheDocument();

        expect(screen.getByText('Mind')).toBeInTheDocument();
    });

    test('renders the Pre Nursery image', () => {
        const { getByAltText } = render(<PreNursery />);
        const image = getByAltText('A girl cutting bread');
        expect(image).toBeInTheDocument();
    });

    test('renders the left-aligned Pre Nursery content', () => {
        const { getByText } = render(<PreNursery />);
        const leftContent = getByText(/Welcome to the pre-nursery years/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned Pre Nursery content', () => {
        const { getByText } = render(<PreNursery />);
        const rightContent = getByText(/There is a lot more to know/i);
        expect(rightContent).toBeInTheDocument();
    });

    test('renders the "Learn More" section', () => {
        const { getByText } = render(<PreNursery />);
        const learnMoreHeading = getByText('Learn More');
        const learnMoreText = getByText(/There is a lot more to know/i);
        expect(learnMoreHeading).toBeInTheDocument();
        expect(learnMoreText).toBeInTheDocument();
    });

    test('button click should open the contact us link', () => {
        const {container} = render(<PreNursery />);

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
