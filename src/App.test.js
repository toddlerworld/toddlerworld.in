import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

describe('App Component', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('renders a Router component', () => {
        const wrapper = shallow(<App />);
        const routerComponent = wrapper.find(Router);
        expect(routerComponent).toHaveLength(1);
    });

    it('renders a Header component', () => {
        const wrapper = shallow(<App />);
        const headerComponent = wrapper.find(Header);
        expect(headerComponent).toHaveLength(1);
    });

    it('renders a Navbar component', () => {
        const wrapper = shallow(<App />);
        const navbarComponent = wrapper.find(Navbar);
        expect(navbarComponent).toHaveLength(1);
    });

    it('renders a Routes component', () => {
        const wrapper = shallow(<App />);
        const routesComponent = wrapper.find(Routes);
        expect(routesComponent).toHaveLength(1);
    });

    it('renders a Route component with the Home component as an element', () => {
        const wrapper = shallow(<App />);
        const routeComponent = wrapper.find(Route);
        expect(routeComponent).toHaveLength(1);
        expect(routeComponent.prop('path')).toBe('/');
        expect(routeComponent.prop('element')).toEqual(<Home />);
    });

    it('renders a Footer component', () => {
        const wrapper = shallow(<App />);
        const footerComponent = wrapper.find(Footer);
        expect(footerComponent).toHaveLength(1);
    });
});
