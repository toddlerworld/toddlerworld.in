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
import Welcome from './components/Welcome/Welcome';
import PlayEquipment from './components/PlayEquipment/PlayEquipment';
import ParentPartnership from './components/ParentPartnership/ParentPartnership';
import PoliciesProcedures from './components/PoliciesProcedures/PoliciesProcedures';
import Admissions from './components/Admissions/Admissions';
import Activities from './components/Activities/Activities';
import Careers from './components/Careers/Careers';
import PlayGroup from './components/PlayGroup/PlayGroup';
import PreNursery from './components/PreNursery/PreNursery';
import Nursery from './components/Nursery/Nursery';
import Kindergarten1 from './components/Kindergarten1/Kindergarten1';
import Kindergarten2 from './components/Kindergarten2/Kindergarten2';
import ContactUs from './components/Contact-us/Contact-us';
import Programmes from './components/Programmes/Programmes';
import NotFound from './components/NotFound/NotFound';

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
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/play-equipment" element={<PlayEquipment />} />
                    <Route path="/parent-partnership" element={<ParentPartnership />} />
                    <Route path="/policies-procedures" element={<PoliciesProcedures />} />
                    <Route path="/admissions" element={<Admissions />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/play-group" element={<PlayGroup />} />
                    <Route path="/pre-nursery" element={<PreNursery />} />
                    <Route path="/nursery" element={<Nursery />} />
                    <Route path="/kindergarten-1" element={<Kindergarten1 />} />
                    <Route path="/kindergarten-2" element={<Kindergarten2 />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/programmes" element={<Programmes />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
