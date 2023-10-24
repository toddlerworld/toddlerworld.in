import React from 'react';
import './Home.scss';
import Cards from './Card/Cards';
import MainSection from './MainSection/MainSection';
import Welcome from './Welcome/Welcome';
import HomeLandingImage from './Home-landing-image/Home-landing-image';
import Youtube from './Youtube/Youtube';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <>
            <MainSection data-testid='main-section-home-test'/>
            <Welcome data-testid='welcome-home-test'/>
            <HomeLandingImage data-testid='home-landing-image-home-test'/>
            <Cards data-testid='cards-home-test'/>
            <Youtube data-testid='youtube-home-test'/>
            <Gallery data-testid='gallery-home-test'/>
            <Contact data-testid='contact-home-test'/>
        </>
    );
};
export default Home;