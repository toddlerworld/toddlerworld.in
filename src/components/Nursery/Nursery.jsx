import React from 'react';
import {Button} from '../Button/Button';
import './Nursery.scss';

const Nursery = () => {
    return(
        <>
            <div className='heading-nursery'>
                <img src='/images/nursery/1.webp' alt='A boy wearing a police outfit' className='nursery-image'/>
                <h1 className='heading'>NURSERY (3 - 4 YEARS)</h1>
                <hr className='hr-about-us' />
            </div>
            <div className='nursery-container'>
                <div className='left-aligned-nursery'>
                    <p>
                        <strong>Escalates the possibilities of learning in your child:
                            <i>Nursery at Toddler World.</i>
                        </strong><br /><br />

                        This programme is for children between 3 years to 4 years old. Once children graduate from
                        Pre-Nursery, we move on to a more advanced curriculum that escalates the possibilities of
                        learning in your child. The programme focuses on better reading skills, a richer vocabulary and
                        stronger skills in basic math. This ensures that your child is ready to venture into a new world
                        of learning that is rich with possibilities.
                    </p>
                </div>
                <div className='right-aligned-nursery'>
                    <h1>Learn More</h1>
                    <p>There is a lot more to know. Please feel free to contact us.
                    </p>
                    <div className='contact-us-nursery' data-testid="contact-us-comp">
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

export default Nursery;