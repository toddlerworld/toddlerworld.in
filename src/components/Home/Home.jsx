import React, {useEffect} from 'react';
import './Home.scss';
import Cards from './Card/Cards';
import MainSection from './MainSection/MainSection';
import Welcome from './Welcome/Welcome';
import HomeLandingImage from './Home-landing-image/Home-landing-image';
import Youtube from './Youtube/Youtube';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Reviews from './Reviews/Reviews';
import {useMediaQuery} from 'react-responsive';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isDesktop = useMediaQuery({
        query: '(min-width: 600px)'
    });

    return (
        <div className='home-page'>
            {isDesktop ?
                <img src="/images/main-section/landing-image.png" className="landing-photo" alt="Background Image" data-testid="landing-photo-desktop"/> :
                <img src="/images/mobile.webp" className="landing-photo" alt="Background Image" data-testid="landing-photo-mobile"/>
            }
            <MainSection/>
            <Welcome/>
            <HomeLandingImage/>
            <Cards/>
            <Reviews/>
            <Youtube/>
            <Gallery/>
            <Contact/>
        </div>
    );
};
export default Home;