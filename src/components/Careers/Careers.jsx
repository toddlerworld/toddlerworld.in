import React from 'react';
import './Careers.scss';
import {Button} from '../Button/Button';

const Careers = () => {
    return(
        <>
            <div className='heading-careers'>
                <h1 className='heading'>CAREERS</h1>
                <hr className='hr-about-us' />
            </div>
            <div className='careers-container'>
                <div className='left-aligned-careers'>
                    <p>
                        <strong>A career in childcare with Toddler World.</strong><br /><br />

                    If you are looking for jobs in childcare, an exciting challenge, or your current career isn&apos;t
                    fulfilling you or going in the direction that you had hoped then why not consider working for the
                    Srinagar&apos;s best childcare provider.<br /><br />

                    At Toddler World we have a wide range of opportunities for careers in childcare to both challenge
                    and fulfil your working life.<br /><br />

                    No matter if you have worked in the childcare environment for many years, or are simply looking
                    to start a new chapter in your career path we would encourage you to look at our vacancy listings
                    and contact us to see if we have any opportunities for you to come and join the team.<br /><br />

                    But why choose Toddler World when looking for a career in childcare?<br /><br />

                    Toddler world is created by a family that wanted to provide the best childcare solutions available,
                    getting the best from around the world and give those facilities to the children in Kashmir.<br /><br />

                    The company has strong beliefs in both offering equal opportunities to all of its employees,
                    investing in people and recognising its staff as their leading resource.<br /><br />

                    Toddler World provides top quality support and training for all of their staff on a continual basis,
                    helping to improve individuals own technical and organisational skills and thus providing the kind
                    of overall service that every parent looks for when seeking out a place of security and to trust to
                    send the most important thing in their lives, their children.<br /><br />

                        <strong>How can I work for Toddler World?</strong><br /><br />

                    If you are interested in a career at a Toddler World, send us your details below or email us your CV
                    at <a href="mailto:info@toddlerworld.in">info@toddlerworld.in</a> Whenever a position becomes
                    available which matches your skills, we will get in touch with you.
                    </p>
                </div>
                <div className='right-aligned-careers'>
                    <h1>Did you know?</h1>
                    <p>We offer competitive package in addition to outstanding training and development opportunity. So,
                    what are you waiting for? If you are focussed and energetic with a passion to work in the childcare
                    industry, apply today.
                    </p>
                    <div className='register-interest-careers' data-testid='send-details-test'>
                        <a href='#send-details' data-testid='send-link-test'>
                            <Button
                                buttonStyle="primary-button"
                                buttonSize="large"
                            >
                            Send your details
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='heading-careers'>
                <h1 className='heading' id='send-details' data-testid='send-details'>SEND YOUR DETAILS</h1>
                <hr className='hr-about-us' />
            </div>
            <div className='careers-form' data-testid='careers-form-test'>
                <iframe src=
                    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5JQ_npNHs9jCVW4oVfrLS4qybFBK8vU6Op6Y70fm8qp7uGw/formResponse?embedded=true"
                />
            </div>
        </>
    );
};

export default Careers;