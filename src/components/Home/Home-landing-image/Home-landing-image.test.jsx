import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeLandingImage from './Home-landing-image';
import {MemoryRouter, Route, Routes} from 'react-router-dom';

describe('HomeLandingImage component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<HomeLandingImage />} />
                </Routes>
            </MemoryRouter>
        );
    });
    test('renders HomeLandingImage component', () => {
        const homeLandingImageElement = screen.getByTestId('home-landing-image');
        expect(homeLandingImageElement).toBeInTheDocument();
    });

    test('renders heading "ENABLING A SUCCESSFUL TRANSITION TO A PRIMARY SCHOOL"', () => {
        const headingElement = screen.getByText('ENABLING A SUCCESSFUL TRANSITION TO A PRIMARY SCHOOL');
        expect(headingElement).toBeInTheDocument();
    });
});
