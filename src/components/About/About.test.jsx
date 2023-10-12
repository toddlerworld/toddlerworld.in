import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from './About';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';

let component;

describe('About Component', () => {
    beforeEach(() => {
        component = render(
            <MemoryRouter initialEntries={['/about-us']}>
                <Routes>
                    <Route path="/about-us" element={<About />} />
                </Routes>
            </MemoryRouter>
        );
    });
    test('renders About component without crashing', () => {
        const aboutElement = screen.getByTestId('about-container');
        expect(aboutElement).toBeInTheDocument();
    });

    test('displays the correct heading', () => {
        const headingElement = screen.getByText(/About us/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('displays image 1 in the section', () => {
        const imageElements = screen.getAllByAltText(/Teacher showing how to write to a child/i);
        expect(imageElements).toHaveLength(1);
    });

    test('displays image 2 in the section', () => {
        const imageElements = screen.getAllByAltText(/Children sitting on chairs and reading books/i);
        expect(imageElements).toHaveLength(1);
    });

    test('displays image 3 in the section', () => {
        const imageElements = screen.getAllByAltText(/Nine Children playing together/i);
        expect(imageElements).toHaveLength(1);
    });

    test('renders Learn More button in each section', () => {
        const learnMoreButtons = screen.getAllByRole('button', {name: /Learn More/i});
        expect(learnMoreButtons).toHaveLength(3);
    });
});