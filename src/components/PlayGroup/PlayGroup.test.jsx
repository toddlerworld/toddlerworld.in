import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayGroup from './PlayGroup';
import {MemoryRouter, Route, Routes} from "react-router-dom";
import About from "../About/About";

describe('Play Group Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/play-group']}>
                <Routes>
                    <Route path="/play-group" element={<PlayGroup />} />
                </Routes>
            </MemoryRouter>
        );
    })
    test('renders Play Group component', () => {
        expect(screen.getByText('Citizen')).toBeInTheDocument();
        expect(screen.getByText('Scholar')).toBeInTheDocument();
        expect(screen.getByText('Mind')).toBeInTheDocument();
    });

    test('renders the image', () => {
        const image = screen.getByAltText('Two children looking through a window');
        expect(image).toBeInTheDocument();
    });

    test('renders the left-aligned Play Group content', () => {
        const leftContent = screen.getByText(/Your toddler is busy exploring his/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned Play Group content', () => {
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
