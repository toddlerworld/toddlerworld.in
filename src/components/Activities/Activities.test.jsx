import React from 'react';
import { render } from '@testing-library/react';
import Activities from './Activities';

describe('Tests for the Activities Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<Activities />);
        expect(container).toBeInTheDocument();
    });

    test('renders the activities image', () => {
        const { getByAltText } = render(<Activities />);
        const image = getByAltText('Baby Bead Maze Toy For Brain Development');
        expect(image).toBeInTheDocument();
    });

    test('renders the heading', () => {
        const { getByText } = render(<Activities />);
        const heading = getByText('Our Activities');
        expect(heading).toBeInTheDocument();
    });

    test('renders the left-aligned admissions content', () => {
        const { getByText } = render(<Activities />);
        const leftContent = getByText(/Montessori Activities/i);
        expect(leftContent).toBeInTheDocument();
    });

    test('renders the right-aligned admissions content', () => {
        const { getByText } = render(<Activities />);
        const rightContent = getByText(/A range of play equipment is available to help children/i);
        expect(rightContent).toBeInTheDocument();
    });

    test('renders the Play Equipment section', () => {
        const { getByText } = render(<Activities />);
        const playEquipmentHeading = getByText('Play Equipment');
        const playEquipmentText = getByText(/A range of play equipment is available to help/i);
        expect(playEquipmentHeading).toBeInTheDocument();
        expect(playEquipmentText).toBeInTheDocument();
    });

    test('renders the Find out more button', () => {
        const { getByText } = render(<Activities />);
        const findOutMoreButton = getByText('Find out more');
        expect(findOutMoreButton).toBeInTheDocument();
    });
});
