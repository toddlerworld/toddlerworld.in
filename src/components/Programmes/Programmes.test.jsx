import {MemoryRouter, Route, Routes} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Programmes from './Programmes';
import CardItem from '../CardItem/CardItem';
import PlayEquipment from '../PlayEquipment/PlayEquipment';
import React from 'react';

jest.mock('../CardItem/CardItem', () => jest.fn());

describe('Programmes Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/programmes']}>
                <Routes>
                    <Route path="/programmes" element={<Programmes />} />
                </Routes>
            </MemoryRouter>
        );
    });

    test('renders without crashing', () => {
        const container = screen.getByTestId('programmes-container');
        expect(container).toBeInTheDocument();
    });

    test('renders correct number of CardItems with proper props', () => {
        // Expect CardItem to be called 5 times
        expect(CardItem).toHaveBeenCalledTimes(5);

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
        const container = screen.getByTestId('programmes-container');
        expect(container).toHaveClass('programmes-container');
    });
});