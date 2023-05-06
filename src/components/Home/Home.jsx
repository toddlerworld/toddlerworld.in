import React from 'react';
import './Home.scss';
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <>
            <div className='home'>
                <img src='/images/home-page-pic.png' alt='Home Page Picture' className='home-page-pic' />
                <h1>WELCOME TO<br />TODDLER WORLD</h1>
                <Link to='/about'>
                    <Button style='primary-button' size='large'>Find out more!</Button>
                </Link>
            </div>
            <div className='welcome-section'>
                <h2>Welcome to Toddler World</h2>
                <p>Toddler World is a friendly, caring and committed facility in Srinagar, which provides developmental childcare, embracing excellence and quality. Our program is designed to foster the physical, cognitive, social, emotional and cultural development of each child in a loving and nurturing environment. We believe children learn through hands-on activities. Our nursery is specifically designed to allow free movement and exploration according to each child’s abilities. Its large, bright, colourful playrooms and outdoor play areas accessorised by state-of-the-art equipment and age-appropriate toys create a magical haven for your child.</p>
                <p><strong>We will provide an experience that will make your child learn to never forget.</strong></p>
            </div>
        </>
    )
}
export default Home;