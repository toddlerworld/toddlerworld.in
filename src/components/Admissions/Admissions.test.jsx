import React from 'react';
import { render } from '@testing-library/react';
import Admissions from './Admissions';

describe('Tests for the Admissions Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Admissions />);
        expect(container).toBeInTheDocument();
    });

    it('renders the admissions image', () => {
        const { getByAltText } = render(<Admissions />);
        const image = getByAltText('A child building a tower with blocks');
        expect(image).toBeInTheDocument();
    });

    it('renders the heading', () => {
        const { getByText } = render(<Admissions />);
        const heading = getByText('Admissions');
        expect(heading).toBeInTheDocument();
    });

    it('renders the left-aligned admissions content', () => {
        const { getByText } = render(<Admissions />);
        const leftContent = getByText(/Parents are encouraged to visit the nursery in person/i);
        expect(leftContent).toBeInTheDocument();
    });

    it('renders the right-aligned admissions content', () => {
        const { getByText } = render(<Admissions />);
        const rightContent = getByText(/Our admissions process adheres to the equitable principle/i);
        expect(rightContent).toBeInTheDocument();
    });

    it('renders the "Learn More" section', () => {
        const { getByText } = render(<Admissions />);
        const learnMoreHeading = getByText('Learn More');
        const learnMoreText = getByText(/To initiate your enrollment journey/i);
        expect(learnMoreHeading).toBeInTheDocument();
        expect(learnMoreText).toBeInTheDocument();
    });

    it('renders the "Register your Child" button', () => {
        const { getByText } = render(<Admissions />);
        const registerButton = getByText('Register your Child');
        expect(registerButton).toBeInTheDocument();
    });
});
