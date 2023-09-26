import React from 'react';
import './Home.scss';
import Cards from './Card/Cards';
import MainSection from './MainSection/MainSection';
import Welcome from './Welcome/Welcome';
import HomeLandingImage from './Home-landing-image/Home-landing-image';
import Youtube from './Youtube/Youtube';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <>
            <MainSection/>
            <Welcome/>
            <HomeLandingImage/>
            <Cards/>
            <Youtube/>
            <Gallery/>
        </>
    );
};
export default Home;