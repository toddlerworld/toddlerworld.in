import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Team from './components/Team/Team';
import Environment from './components/Environment/Environment';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/our-team" element={<Team />} />
                    <Route path="/our-environment" element={<Environment />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
