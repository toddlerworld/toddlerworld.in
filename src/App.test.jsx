import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import App from './App'
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Environment from './components/Environment/Environment';
import Team from './components/Team/Team';

describe('App test', () => {
    test('renders without crashing', () => {
        render(<App />);
    });
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

    test('renders About component for /our-team path', () => {
        render(
            <MemoryRouter initialEntries={['/our-team']}>
                <Routes>
                    <Route path="/our-team" element={<Team />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('Our Team')).toBeInTheDocument();
    });

    test('renders About component for /our-environment path', () => {
        render(
            <MemoryRouter initialEntries={['/our-environment']}>
                <Routes>
                    <Route path="/our-environment" element={<Environment />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('Our Environment')).toBeInTheDocument();
    });
});