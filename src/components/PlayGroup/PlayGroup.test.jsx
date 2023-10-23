import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayGroup from './PlayGroup';

describe('Play Group Component', () => {
    test('renders Play Group component', () => {
        render(<PlayGroup />);

        expect(screen.getByText('Citizen')).toBeInTheDocument();

        expect(screen.getByText('Scholar')).toBeInTheDocument();

        expect(screen.getByText('Mind')).toBeInTheDocument();
    });

    test('renders the image', () => {
        const { getByAltText } = render(<PlayGroup />);
        const image = getByAltText('Two children looking through a window');
        expect(image).toBeInTheDocument();
    });

    test('renders the left-aligned Play Group content', () => {
        const { getByText } = render(<PlayGroup />);
        const leftContent = getByText(/Your toddler is busy exploring his/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned Play Group content', () => {
        const { getByText } = render(<PlayGroup />);
        const rightContent = getByText(/There is a lot more to know/i);
        expect(rightContent).toBeInTheDocument();
    });

    test('renders the "Learn More" section', () => {
        const { getByText } = render(<PlayGroup />);
        const learnMoreHeading = getByText('Learn More');
        const learnMoreText = getByText(/There is a lot more to know/i);
        expect(learnMoreHeading).toBeInTheDocument();
        expect(learnMoreText).toBeInTheDocument();
    });

    test('button click should open the contact us link', () => {
        const {container} = render(<PlayGroup />);

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
