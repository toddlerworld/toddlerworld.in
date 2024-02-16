import React from 'react';
import { render, screen } from '@testing-library/react';
import PreNursery from './PreNursery';
import {MemoryRouter, Route, Routes} from "react-router-dom";
import About from "../About/About";

describe('Pre Nursery Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/pre-nursery']}>
                <Routes>
                    <Route path="/pre-nursery" element={<PreNursery />} />
                </Routes>
            </MemoryRouter>
        );
    });
    test('renders Pre Nursery component', () => {
        expect(screen.getByText('Citizen')).toBeInTheDocument();
        expect(screen.getByText('Scholar')).toBeInTheDocument();
        expect(screen.getByText('Mind')).toBeInTheDocument();
    });

    test('renders the Pre Nursery image', () => {
        const image = screen.getByAltText('A girl cutting bread');
        expect(image).toBeInTheDocument();
    });

    test('renders the left-aligned Pre Nursery content', () => {
        const leftContent = screen.getByText(/Welcome to the pre-nursery years/i);
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
