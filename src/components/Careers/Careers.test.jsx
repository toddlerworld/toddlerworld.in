import React from 'react';
import { render, screen } from '@testing-library/react';
import Careers from './Careers';

describe('Careers Component', () => {
    test('renders Careers component', () => {
        render(<Careers />);

        expect(screen.getByText('CAREERS')).toBeInTheDocument();

        expect(screen.getByText('Did you know?')).toBeInTheDocument();

        expect(screen.getByText('Send your details')).toBeInTheDocument();
    });

    test('renders the left-aligned careers content', () => {
        const { getByText } = render(<Careers />);
        const leftContent = getByText(/If you are looking for jobs in childcare, an exciting/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned careers content', () => {
        const { getByText } = render(<Careers />);
        const rightContent = getByText(/We offer competitive package in addition to outstanding/i);
        expect(rightContent).toBeInTheDocument();
    });

    test('renders the "Did you know?" section', () => {
        const { getByText } = render(<Careers />);
        const learnMoreHeading = getByText('Did you know?');
        const learnMoreText = getByText(/We offer competitive package in addition to/i);
        expect(learnMoreHeading).toBeInTheDocument();
        expect(learnMoreText).toBeInTheDocument();
    });

    test('renders the "Send your details" button', () => {
        const { container } = render(<Careers />);
        const registerButton = container.querySelector('[data-testid="send-details-test"]');
        expect(registerButton).toBeInTheDocument();
    });

    test('checks the id of send details', () => {
        render(<Careers />);
        const sendDetailsLink = screen.getByTestId('send-link-test');
        expect(sendDetailsLink).toBeInTheDocument();
        expect(sendDetailsLink.getAttribute('href')).toBe('#send-details');
    })

    test('button click should open the admission registration link', () => {
        const {container} = render(<Careers />);

        const registerButton = container.querySelector('[data-testid="send-details-test"]');

        expect(registerButton).toBeInTheDocument();

        const linkElement = screen.getByTestId("send-link-test");

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute(
            'href',
            '#send-details'
        );
    });

    test('check if the iframe component is rendered', () => {
        render(<Careers />);

        const formContainer = screen.getByTestId('careers-form-test');
        expect(formContainer).toBeInTheDocument();

        const iframe = formContainer.querySelector('iframe');
        expect(iframe).toBeInTheDocument();
    });
});
