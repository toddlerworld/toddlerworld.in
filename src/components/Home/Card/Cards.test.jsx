import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import CardItem from '../../CardItem/CardItem';

jest.mock('../../CardItem/CardItem', () => jest.fn());
describe('PlayEquipment Component', () => {
    beforeEach(() => {
        let component = render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Cards />} />
                </Routes>
            </MemoryRouter>
        );
    });

    test('renders without crashing', () => {
        const aboutElement = screen.getByTestId('card-container');
        expect(aboutElement).toBeInTheDocument();
    });

    test('renders correct number of CardItems with proper props', () => {
        // Expect CardItem to be called 6 times
        expect(CardItem).toHaveBeenCalledTimes(3);

        // Loop through each call to CardItem and check the props
        CardItem.mock.calls.forEach((call, index) => {
            const [props] = call;
            const {src, text, label, alt} = props;

            expect(src).toBeDefined();
            expect(text).toBeDefined();
            expect(label).toBeDefined();
            expect(alt).toBeDefined();
        });
    });

    test('has the correct container class', () => {
        const container = screen.getByTestId('card-container');
        expect(container).toHaveClass('card-container');
    });

    test('renders header with correct text', () => {
        const header = screen.getByRole('heading', { level: 1 });
        expect(header).toHaveTextContent('A bit about us');
    });
});
