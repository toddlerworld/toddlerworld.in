import React from 'react';
import './About.scss';
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';

function About () {
    return (
        <div className='about-container' data-testid='about-container'>
            <h1 className='heading'>About us</h1>
            <hr className='hr-about-us' />
            <div className='about-section-1'>
                <img src='/images/about/first.webp' alt='Teacher showing how to write to a child'/>
                <div className='about-text'>
                    <h1>Our Team</h1>
                    <div className='about-button'>
                        <Link to="/our-team">
                            <Button
                                buttonStyle='primary-button'
                                buttonSize='large'
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='about-section-2'>
                <img src='/images/about/second.webp' alt='Children sitting on chairs and reading books' />
                <div className='about-text-left'>
                    <h1>Our Environment</h1>
                    <div className='about-button'>
                        <Link to="/our-environment">
                            <Button
                                buttonStyle='primary-button'
                                buttonSize='large'
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='about-section-3'>
                <img src='/images/about/third.webp' alt='Nine Children playing together'/>
                <div className='about-text'>
                    <h1>Our Activities</h1>
                    <div className='about-button'>
                        <Link to="/our-activities">
                            <Button
                                buttonStyle='primary-button'
                                buttonSize='large'
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;