import './SchoolTransitions';
import {render,screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import SchoolTransitions from './SchoolTransitions';


describe('Tests for School Transitions Component', () => {
    beforeEach(() => {
        render(
            <Router>
                render(<SchoolTransitions />);
            </Router>
        );
    });

    test('Should render the School Transitions component', () => {
        expect(SchoolTransitions).toBeTruthy();
    });

    test('renders the correct headings', () => {
        expect(screen.getByText('SCHOOL TRANSITIONS')).toBeInTheDocument();
        expect(screen.getByText('Facts')).toBeInTheDocument();
        expect(screen.getByText('Get in touch')).toBeInTheDocument();
    });

    test('renders the images', () => {
        expect(screen.getByAltText('school-transitions')).toBeInTheDocument();
    });
});