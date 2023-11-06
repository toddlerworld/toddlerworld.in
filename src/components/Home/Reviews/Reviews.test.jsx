import React from 'react';
import { render, screen } from '@testing-library/react';
import Reviews from './Reviews';
import reviews from './Reviews-list.json';

jest.mock('react-slick', () => 'div');

describe('Reviews Component', () => {
    beforeEach(() => {
        render(<Reviews />)
    });

    test('renders Reviews component correctly', () => {
        const headingElement = screen.getByText(/The Trust We've Earnt/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders review cards for each review in the Reviews-list.json file', () => {
        const reviewCards = screen.getAllByTestId('review-card');
        expect(reviewCards).toHaveLength(10);
    });

    test('renders the author correctly in each review card', () => {
        let authors = [];
        reviews.map(review => authors.push(review.author));
        const authorElements = screen.getAllByTestId('author');
        authors.forEach((author, index) => {
            expect(authorElements[index]).toHaveTextContent(author);
        });
    });
});
