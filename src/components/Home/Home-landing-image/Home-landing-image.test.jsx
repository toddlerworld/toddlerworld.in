import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeLandingImage from './Home-landing-image';

describe('HomeLandingImage component', () => {
    test('renders HomeLandingImage component', () => {
        render(<HomeLandingImage />);
        const homeLandingImageElement = screen.getByTestId('home-landing-image');
        expect(homeLandingImageElement).toBeInTheDocument();
    });

    test('renders heading "ENABLING A SUCCESSFUL TRANSITION TO A PRIMARY SCHOOL"', () => {
        render(<HomeLandingImage />);
        const headingElement = screen.getByText('ENABLING A SUCCESSFUL TRANSITION TO A PRIMARY SCHOOL');
        expect(headingElement).toBeInTheDocument();
    });
});
