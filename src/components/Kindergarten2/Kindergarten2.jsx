import React from 'react';
import {Button} from '../Button/Button';
import './Kindergarten2.scss';

const Kindergarten2 = () => {
    return(
        <>
            <div className='heading-kindergarten2'>
                <img src='/images/kindergarten2/1.webp' alt='A boy who has a car on the elbow' className='kindergarten2-image'/>
                <h1 className='heading'>KINDERGARTEN 2 (5 - 6 YEARS)</h1>
                <hr className='hr-about-us' />
            </div>
            <div className='kindergarten2-container'>
                <div className='left-aligned-kindergarten2'>
                    <p>
                        <strong>Academic challenges that will result in a smoother transition to school:
                            <i>Kindergarten 2 at Toddler World.</i>
                        </strong><br /><br />

                        The final programme at pre-school level, Kindergarten 2 is meant for children between 5 years to
                        6 years old. In Kindergarten 2 we provide your child with ample academic challenges that will
                        result in a smoother transition to school. The programme is structured to have a fine balance
                        between fun and development. The focus is on activities that lead to development in thinking
                        and reading skills.
                    </p>
                </div>
                <div className='right-aligned-kindergarten2'>
                    <h1>Learn More</h1>
                    <p>There is a lot more to know. Please feel free to contact us.
                    </p>
                    <div className='contact-us-kindergarten2' data-testid="contact-us-comp">
                        <a href='/contact-us' data-testid="contact-us-link-test">
                            <Button
                                buttonStyle="primary-button"
                                buttonSize="large"
                                data-testid="contact-us-test"
                            >
                                Contact us
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Kindergarten2;