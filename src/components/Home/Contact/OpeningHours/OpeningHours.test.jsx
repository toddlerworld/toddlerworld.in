import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import OpeningHours from './OpeningHours';

describe('Testing the Opening Hours Component', () => {
    test('renders the current day opening hours initially', () => {
        const { getByText } = render(<OpeningHours />);
        const openingHoursText = getByText((_, element) => {
            return element.tagName.toLowerCase() === 'p';
        });
        expect(openingHoursText).toBeInTheDocument();
    });

    test('shows arrow in the document', () => {
        render(<OpeningHours />);
        const arrowIcon = screen.getByText('▼');
        expect(arrowIcon).toBeInTheDocument();
    });

    test('hides down arrow when dropdown is clicked', () => {
        render(<OpeningHours />);
        const dropdownTrigger = screen.getByText('▼');
        fireEvent.click(dropdownTrigger);
        expect(screen.queryByText('▼')).toBeNull();
    });

    test('hides arrow when dropdown is clicked', () => {
        render(<OpeningHours />);
        const dropdownTrigger = screen.getByText('▼');
        fireEvent.click(dropdownTrigger);
        expect(screen.queryByText('▲')).toBeInTheDocument();
    });
});