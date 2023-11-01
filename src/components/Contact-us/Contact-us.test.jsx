import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactUs from './Contact-us';
import {BrowserRouter as Router} from 'react-router-dom';

describe('ContactUs', () => {
    test('renders ContactUs component', () => {
        render(
            <Router>
                <ContactUs />
            </Router>
        );
    });

    test('form inputs are present and functional', () => {
        render(
            <Router>
                <ContactUs />
            </Router>
        );
        const nameInput = screen.getByPlaceholderText('Name');
        const emailInput = screen.getByPlaceholderText('Email');
        const messageInput = screen.getByPlaceholderText('Message');

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Test message' } });

        expect(nameInput.value).toBe('John Doe');
        expect(emailInput.value).toBe('john@example.com');
        expect(messageInput.value).toBe('Test message');
    });

    test('clicking Whatsapp button navigates to the correct link', () => {
        render(
            <Router>
                <ContactUs />
            </Router>
        );

        const links= screen.getAllByRole("link");

        expect(links[0].textContent).toEqual("Message us on Whatsapp");
        expect(links[0].href).toContain("https://wa.me/917889744619");
    });
});
