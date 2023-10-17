import React from 'react';
import { render } from '@testing-library/react';
import PoliciesProcedures from './PoliciesProcedures';

describe(('Policies and Procedures Component Tests'), () => {
    test('renders without crashing', () => {
        render(<PoliciesProcedures />);
    });

    test('renders the heading correctly', () => {
        const { getByText } = render(<PoliciesProcedures />);
        expect(getByText('Policies and Procedures')).toBeInTheDocument();
    });

    test('renders the image with the correct alt attribute', () => {
        const { getByAltText } = render(<PoliciesProcedures />);
        expect(getByAltText('Pencils')).toBeInTheDocument();
    });
});