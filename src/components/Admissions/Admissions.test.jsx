import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import Admissions from './Admissions';

describe('Tests for the Admissions Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/admissions']}>
                <Routes>
                    <Route path="/admissions" element={<Admissions />} />
                </Routes>
            </MemoryRouter>
        );
    });

    test('renders the admissions image', () => {
        const image = screen.getByAltText('A child building a tower with blocks');
        expect(image).toBeInTheDocument();
    });

    test('renders the heading', () => {
        const heading = screen.getByText('Admissions');
        expect(heading).toBeInTheDocument();
    });

    test('renders the left-aligned admissions content', () => {
        const leftContent = screen.getByText(/Parents are encouraged to visit the nursery in person/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned admissions content', () => {
        const rightContent = screen.getByText(/Our admissions process adheres to the equitable principle/i);
        expect(rightContent).toBeInTheDocument();
    });

    test('renders the "Learn More" section', () => {
        const learnMoreHeading = screen.getByText('Learn More');
        const learnMoreText = screen.getByText(/To initiate your enrollment journey/i);
        expect(learnMoreHeading).toBeInTheDocument();
        expect(learnMoreText).toBeInTheDocument();
    });

    test('renders the "Register your Child" button', () => {
        // const { container } = render(<Admissions />);
        const registerButton = screen.getByTestId('register-test-comp');
        expect(registerButton).toBeInTheDocument();
    });

    test('button click should open the admission registration link', () => {
        const registerButton = screen.getByTestId('register-test-comp');
        expect(registerButton).toBeInTheDocument();

        const linkElement = screen.getByTestId("link-test");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute(
            'href',
            'https://www.campuskidz.in/Registration/OnlineEnquiry'
        );
    });
});
