import React from 'react';
import { render, screen } from '@testing-library/react';
import Kindergarten1 from './Kindergarten1';
import {MemoryRouter, Route, Routes} from "react-router-dom";
import About from "../About/About";

describe('Kindergarten1 Component Tests', () => {
    beforeEach(()=>{
        render(
            <MemoryRouter initialEntries={['/kindergarten-1']}>
                <Routes>
                    <Route path="/kindergarten-1" element={<Kindergarten1 />} />
                </Routes>
            </MemoryRouter>
        );
    });
    test('renders  Kindergarten1 component', () => {
        expect(screen.getByText('KINDERGARTEN 1 (4 - 5 YEARS)')).toBeInTheDocument();
    });

    test('renders the image for  Kindergarten1 component', () => {
        const image = screen.getByAltText('A girl who has her hands open');
        expect(image).toBeInTheDocument();
    });

    test('renders the left-aligned Kindergarten1 content', () => {
        const leftContent = screen.getByText(/This programme is meant for children between/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned Pre Kindergarten1 content', () => {
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

        const linkElement = screen.getByTestId('contact-us-link-test');

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute(
            'href',
            '/contact-us'
        );
    });
});
