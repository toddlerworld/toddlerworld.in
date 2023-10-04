import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders header component', () => {
    const { getByText } = render(<Header />);

    // You might need to adjust the textContent based on your actual content
    const phoneNumber1 = getByText('7889744619');
    const phoneNumber2 = getByText('7051427879');

    // Assert that the phone numbers are present in the rendered component
    expect(phoneNumber1).toBeInTheDocument();
    expect(phoneNumber2).toBeInTheDocument();
});