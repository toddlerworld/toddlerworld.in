import { render } from '@testing-library/react';
import Home from './Home';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import React from 'react';

// Mock the react-responsive module
jest.mock('react-responsive', () => ({
    useMediaQuery: jest.fn(),
}));

describe('Home Component tests', () => {
    test('renders mobile image', () => {
        require('react-responsive').useMediaQuery.mockReturnValue(false);

        const { getByTestId } = render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MemoryRouter>
        );
        const mobileImage = getByTestId('landing-photo-mobile');

        // Assuming the mobile image source is '/images/mobile.webp'
        expect(mobileImage).toHaveAttribute('src', '/images/mobile.webp');
    });

    test('renders desktop image', () => {
        require('react-responsive').useMediaQuery.mockReturnValue(true);

        const { getByTestId } = render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MemoryRouter>
        );
        const desktopImage = getByTestId('landing-photo-desktop');

        expect(desktopImage).toHaveAttribute('src', '/images/main-section/landing-image.png');
    });



});