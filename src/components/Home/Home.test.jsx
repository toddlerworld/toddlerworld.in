import { render } from '@testing-library/react';
import Home from './Home';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import React from 'react';

describe('Home Component tests', () => {
    test('renders mobile image', () => {
        // Mocking the useMediaQuery hook to always return false for mobile
        jest.mock('react-responsive', () => ({
            __esModule: true,
            useMediaQuery: () => false,
        }));

        const { getByTestId } = render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MemoryRouter>
        );
        const mobileImage = getByTestId('landing-photo');

        // Assuming the mobile image source is '/images/mobile.webp'
        expect(mobileImage).toHaveAttribute('src', '/images/mobile.webp');
    });

});