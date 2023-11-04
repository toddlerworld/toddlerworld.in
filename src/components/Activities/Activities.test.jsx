import React from 'react';
import {render, screen} from '@testing-library/react';
import Activities from './Activities';
import {MemoryRouter, Route, Router, Routes} from 'react-router-dom';

describe('Tests for the Activities Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/activities']}>
                <Routes>
                    <Route path="/activities" element={<Activities />} />
                </Routes>
            </MemoryRouter>
        );
    });
    test('renders without crashing', () => {
        const container = screen.getByTestId('activities-container');
        expect(container).toBeInTheDocument();
    });

    test('renders the activities image', () => {
        const image = screen.getByAltText('Baby Bead Maze Toy For Brain Development');
        expect(image).toBeInTheDocument();
    });

    test('renders the heading', () => {
        const heading = screen.getByText('Our Activities');
        expect(heading).toBeInTheDocument();
    });

    test('renders the left-aligned admissions content', () => {
        const leftContent = screen.getByText(/Montessori Activities/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned admissions content', () => {
        const rightContent = screen.getByText(/A range of play equipment is available to help children/i);
        expect(rightContent).toBeInTheDocument();
    });

    test('renders the Play Equipment section', () => {
        const playEquipmentHeading = screen.getByText('Play Equipment');
        const playEquipmentText = screen.getByText(/A range of play equipment is available to help/i);
        expect(playEquipmentHeading).toBeInTheDocument();
        expect(playEquipmentText).toBeInTheDocument();
    });

    test('renders the Find out more button', () => {
        const findOutMoreButton = screen.getByText('Find out more');
        expect(findOutMoreButton).toBeInTheDocument();
    });
});
