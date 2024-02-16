import React from 'react';
import {render, screen} from '@testing-library/react';
import Nursery from './Nursery';
import {MemoryRouter, Route, Routes} from "react-router-dom";

describe('Nursery Component Tests', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/nursery']}>
                <Routes>
                    <Route path="/nursery" element={<Nursery />} />
                </Routes>
            </MemoryRouter>
        );
    });
    test('renders  Nursery component', () => {
        expect(screen.getByText('NURSERY (3 - 4 YEARS)')).toBeInTheDocument();
    });

    test('renders the image for  Nursery component', () => {
        expect(screen.getByAltText('A boy wearing a police outfit')).toBeInTheDocument();
    });

    test('renders the left-aligned Nursery content', () => {
        const leftContent = screen.getByText(/This programme is for children between/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned Pre Nursery content', () => {
        const rightContent = screen.getByText(/There is a lot more to know/i);
        expect(rightContent).toBeInTheDocument();
    });

    test('renders the "Learn More" section', () => {
        const learnMoreHeading = screen.getByText('Learn More');
        const learnMoreText = screen.getByText(/There is a lot more to know/i);
        expect(learnMoreHeading).toBeInTheDocument();
        expect(learnMoreText).toBeInTheDocument();
    });

    test('button click should open the contact us link', () => {
        const registerButton = screen.getByTestId("contact-us-comp");

        expect(registerButton).toBeInTheDocument();

        const linkElement = screen.getByTestId("contact-us-link-test");

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute(
            'href',
            '/contact-us'
        );
    });
});
