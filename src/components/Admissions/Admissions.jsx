import React, {useEffect} from 'react';
import './Admissions.scss';
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';

const Admissions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className='admissions-container' data-testid='admissions-container'>
            <img src='/images/admissions/1.webp' alt='A child building a tower with blocks' className='admissions-image'/>
            <h1 className='heading'>Admissions</h1>
            <hr className='hr-about-us' />
            <div className='left-aligned-admissions'>
                <p>
                    Parents are encouraged to visit the nursery in person and have a feel of the environment.<br /><br />

                    <ul>
                        <li>After the visit the parents may register for admission.</li>
                        <li>Once the registration process is done parents along with the child are called for an
                            informal interaction with the Nursery Manager. Based on the interaction and the merits the
                            admission to the school is accepted/rejected.
                        </li>
                        <li>Shortlisted parents are required to fill in the admission form, complete all the procedures
                            and formalities and pay the required fee within a stipulated time. Once all the formalities
                            are completed the admission is deemed to be confirmed.
                        </li>
                    </ul>
                </p>
            </div>
            <div className='right-aligned-admissions'>
                <h1>Learn More</h1>
                <p>Our admissions process adheres to the equitable principle of serving individuals on a first-come,
                    first-served basis, ensuring a fair and timely allocation of opportunities. To initiate your
                    enrollment journey, kindly click on the button below, where you can register your interest.
                </p>
                <div className='register-interest-admission' data-testid="register-test-comp">
                    <Link to="https://www.campuskidz.in/toddler" target="_blank" data-testid="link-test">
                        <Button
                            buttonStyle="primary-button"
                            buttonSize="large"
                            data-testid="register-test"
                        >
                            Submit an Enquiry
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Admissions;