import React from 'react';
import {Button} from '../Button/Button';
import './Kindergarten1.scss';

const Kindergarten1 = () => {
    return(
        <>
            <div className='heading-kindergarten1'>
                <img src='/images/kindergarten1/1.webp' alt='A girl who has her hands open' className='kindergarten1-image'/>
                <h1 className='heading'>KINDERGARTEN 1 (4 - 5 YEARS)</h1>
                <hr className='hr-about-us' />
            </div>
            <div className='kindergarten1-container'>
                <div className='left-aligned-kindergarten1'>
                    <p>
                        <strong>Skills that will guide your child towards future academic success:
                            <i>Kindergarten 1 at Toddler World.</i>
                        </strong><br /><br />

                        This programme is meant for children between 4 years to 5 years old. In Kindergarten 1 we focus
                        on skills that will guide your child towards future academic success. The learning tenets of the
                        programme include social finesse and mastering gross motor skills. Each school day we provide your
                        child with opportunities for independent discovery, cooperative learning and generous outdoor
                        playtime.
                    </p>
                </div>
                <div className='right-aligned-kindergarten1'>
                    <h1>Learn More</h1>
                    <p>There is a lot more to know. Please feel free to contact us.
                    </p>
                    <div className='contact-us-kindergarten1' data-testid="contact-us-comp">
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

export default Kindergarten1;