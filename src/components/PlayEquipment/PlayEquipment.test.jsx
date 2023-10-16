import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayEquipment from './PlayEquipment';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import CardItem from '../CardItem/CardItem';

// Mock the CardItem component to capture props
jest.mock('../CardItem/CardItem', () => jest.fn());
describe('PlayEquipment Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/play-equipment']}>
                <Routes>
                    <Route path="/play-equipment" element={<PlayEquipment />} />
                </Routes>
            </MemoryRouter>
        );
    });

    test('renders without crashing', () => {
        const aboutElement = screen.getByTestId('play-equipment-container');
        expect(aboutElement).toBeInTheDocument();
    });

    test('renders correct number of CardItems with proper props', () => {
        // Expect CardItem to be called 6 times
        expect(CardItem).toHaveBeenCalledTimes(6);

        //Loop through each call to CardItem and check the props
        CardItem.mock.calls.forEach((call, index) => {
            const [props] = call;
            const {src, text, label} = props;

            expect(src).toBeDefined();
            expect(text).toBeDefined();
            expect(label).toBeDefined();
        });
    });

    test('has the correct container class', () => {
        const container = screen.getByTestId('play-equipment-container');
        expect(container).toHaveClass('play-equipment-container');
    });

    test('renders header with correct text', () => {
        const header = screen.getByRole('heading', { level: 1 });
        expect(header).toHaveTextContent('Our Facilities include...');
    });
});