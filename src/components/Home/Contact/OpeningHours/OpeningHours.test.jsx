import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import OpeningHours from './OpeningHours';

describe('Testing the Opening Hours Component', () => {
    test('renders the current day opening hours initially', () => {
        const { getByText } = render(<OpeningHours />);
        const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const openingHoursText = getByText((_, element) => {
            const isParagraph = element.tagName.toLowerCase() === 'p';
            const hasCurrentDay = element.textContent.includes(currentDay);
            return isParagraph && hasCurrentDay;
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