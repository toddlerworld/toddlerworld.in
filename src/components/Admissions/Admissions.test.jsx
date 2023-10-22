import React from 'react';
import {render, screen} from '@testing-library/react';
import Admissions from './Admissions';

describe('Tests for the Admissions Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<Admissions />);
        expect(container).toBeInTheDocument();
    });

    test('renders the admissions image', () => {
        const { getByAltText } = render(<Admissions />);
        const image = getByAltText('A child building a tower with blocks');
        expect(image).toBeInTheDocument();
    });

    test('renders the heading', () => {
        const { getByText } = render(<Admissions />);
        const heading = getByText('Admissions');
        expect(heading).toBeInTheDocument();
    });

    test('renders the left-aligned admissions content', () => {
        const { getByText } = render(<Admissions />);
        const leftContent = getByText(/Parents are encouraged to visit the nursery in person/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned admissions content', () => {
        const { getByText } = render(<Admissions />);
        const rightContent = getByText(/Our admissions process adheres to the equitable principle/i);
        expect(rightContent).toBeInTheDocument();
    });

    test('renders the "Learn More" section', () => {
        const { getByText } = render(<Admissions />);
        const learnMoreHeading = getByText('Learn More');
        const learnMoreText = getByText(/To initiate your enrollment journey/i);
        expect(learnMoreHeading).toBeInTheDocument();
        expect(learnMoreText).toBeInTheDocument();
    });

    test('renders the "Register your Child" button', () => {
        const { container } = render(<Admissions />);
        const registerButton = container.querySelector('[data-testid="register-test-comp"]');
        expect(registerButton).toBeInTheDocument();
    });

    test('button click should open the admission registration link', () => {
        const {container} = render(<Admissions/>);

        const registerButton = container.querySelector('[data-testid="register-test-comp"]');

        expect(registerButton).toBeInTheDocument();

        const linkElement = screen.getByTestId("link-test");

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute(
            'href',
            'https://www.campuskidz.in/Registration/OnlineEnquiry'
        );
    });
});
