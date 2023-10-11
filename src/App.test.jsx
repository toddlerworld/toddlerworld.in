import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import App from './App'
import renderer from 'react-test-renderer';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';

describe('App test', () => {
    // Test 1: Render Test
    test('renders without crashing', () => {
        render(<App />);
    });

    // Test 2: Check if the title is correct
    test('check if the title is correct', () => {
        render(<App />);
        expect(screen.getByText('Welcome to Toddler World')).toBeInTheDocument();
    });

    test('renders Home component for / path', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('Welcome to Toddler World')).toBeInTheDocument();
    });

    test('renders About component for /about-us path', () => {
        render(
            <MemoryRouter initialEntries={['/about-us']}>
                <Routes>
                    <Route path="/about-us" element={<About />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('About us')).toBeInTheDocument();
    });
});