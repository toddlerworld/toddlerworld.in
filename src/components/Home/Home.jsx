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
            <MainSection data-testid='main-section-home-test'/>
            <Welcome data-testid='welcome-home-test'/>
            <HomeLandingImage data-testid='home-landing-image-home-test'/>
            <Cards data-testid='cards-home-test'/>
            {/*TODO: Add a new component for the Google reviews*/}
            <Youtube data-testid='youtube-home-test'/>
            <Gallery data-testid='gallery-home-test'/>
            <Contact data-testid='contact-home-test'/>
        </>
    );
};
export default Home;