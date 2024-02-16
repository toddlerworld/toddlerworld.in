import React from 'react';
import { render, screen } from '@testing-library/react';
import Kindergarten2 from './Kindergarten2';
import {MemoryRouter, Route, Routes} from "react-router-dom";
import About from "../About/About";

describe('Kindergarten2 Component Tests', () => {
    beforeEach(()=> {
        render(
            <MemoryRouter initialEntries={['/kindergarten-2']}>
                <Routes>
                    <Route path="/kindergarten-2" element={<Kindergarten2 />} />
                </Routes>
            </MemoryRouter>
        );
    });
    test('renders  Kindergarten2 component', () => {
        expect(screen.getByText('KINDERGARTEN 2 (5 - 6 YEARS)')).toBeInTheDocument();
    });

    test('renders the image for  Kindergarten2 component', () => {
        const image = screen.getByAltText('A boy who has a car on the elbow');
        expect(image).toBeInTheDocument();
    });

    test('renders the left-aligned Kindergarten2 content', () => {
        const leftContent = screen.getByText(/The final programme at pre-school level/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned Kindergarten2 content', () => {
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
        const registerButton = screen.getByTestId('contact-us-comp');

        expect(registerButton).toBeInTheDocument();

        const linkElement = screen.getByTestId("contact-us-link-test");

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute(
            'href',
            '/contact-us'
        );
    });
});
