import React, {useEffect} from 'react';
import './Home.scss';
import Cards from './Card/Cards';
import MainSection from './MainSection/MainSection';
import Welcome from './Welcome/Welcome';
import HomeLandingImage from './Home-landing-image/Home-landing-image';
import Youtube from './Youtube/Youtube';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <MainSection/>
            <Welcome/>
            <HomeLandingImage/>
            <Cards/>
            <Youtube/>
            <Gallery/>
            <Contact/>
        </>
    );
};
export default Home;