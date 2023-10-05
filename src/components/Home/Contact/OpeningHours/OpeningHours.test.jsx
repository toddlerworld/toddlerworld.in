import React from 'react';
import { shallow } from 'enzyme';
import OpeningHours from './OpeningHours';

describe('OpeningHours Component', () => {
    it('renders without crashing', () => {
        shallow(<OpeningHours />);
    });

    it('renders the current day with correct opening hours and dropdown arrow', () => {
        const originalDate = global.Date;

        // Mocking the current day as Monday
        global.Date = jest.fn(() => new originalDate('2023-10-09')); // A Monday

        const wrapper = shallow(<OpeningHours />);
        const currentDayText = wrapper.find('p').text();

        expect(currentDayText).toContain('Monday');
        expect(currentDayText).toContain('10:00 am – 04:00 pm');
        expect(currentDayText).toContain('▼');

        // Restoring the original Date object
        global.Date = originalDate;
    });

    it('opens the dropdown when clicked on the current day', () => {
        const wrapper = shallow(<OpeningHours />);
        wrapper.find('p').simulate('click');

        const dropdownText = wrapper.find('div').text();
        expect(dropdownText).toContain('Tuesday');
        expect(dropdownText).toContain('10:00 am – 04:00 pm');
        expect(dropdownText).toContain('▲');
    });

    it('closes the dropdown when clicked on a day in the dropdown', () => {
        const wrapper = shallow(<OpeningHours />);
        wrapper.find('p').simulate('click'); // Open the dropdown
        wrapper.find('p').at(1).simulate('click'); // Click on a day in the dropdown

        expect(wrapper.find('div')).toHaveLength(0);
    });

    it('renders the correct opening hours for each day in the dropdown', () => {
        const wrapper = shallow(<OpeningHours />);
        wrapper.find('p').simulate('click');

        const dropdownDays = wrapper.find('div').find('p');
        dropdownDays.forEach((day, index) => {
            const expectedDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][index];
            expect(day.text()).toContain(expectedDay);

            const openingHoursText = day.text(); // Extract opening hours
            const expectedOpeningHours = getExpectedOpeningHours(expectedDay);
            expect(openingHoursText).toContain(expectedOpeningHours);

            if (expectedDay === 'Saturday') {
                expect(day.text()).toContain('▲');
            }
        });
    });

    // Helper function to get expected opening hours
    const getExpectedOpeningHours = (day) => {
        const openingHours = {
            Monday: '10:00 am – 04:00 pm',
            Tuesday: '10:00 am – 04:00 pm',
            Wednesday: '10:00 am – 04:00 pm',
            Thursday: '10:00 am – 04:00 pm',
            Friday: '10:00 am – 04:00 pm',
            Saturday: '10:00 am – 03:00 pm',
            Sunday: 'Closed',
        };

        return openingHours[day];
    };
});
