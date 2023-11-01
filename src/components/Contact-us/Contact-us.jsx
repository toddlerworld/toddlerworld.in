import React from 'react';
import './Contact-us.scss';
import OpeningHours from '../Home/Contact/OpeningHours/OpeningHours';
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';

const ContactUs = () => {
    return(
        <>
            <div className='heading-contactus'>
                <h1 className='heading'>Contact Us</h1>
                <hr className='hr-about-us' />
            </div>
            <div className='contactus-container'>
                <div className='left-aligned-contactus'>
                    <h3>Drop us a line!</h3>
                    <form
                        action="https://getform.io/f/f5e8cb21-2e57-4c0b-af0c-ef2930b0ca8a"
                        method="POST"
                        className="form-contactus"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="10"
                            required
                        ></textarea>

                        <button>
                            Send
                        </button>
                    </form>
                </div>
                <div className='right-aligned-contactus'>
                    <h3>Better yet, see us in person!</h3><br /><br />
                    <p>We would love to see you in person. So feel free to call us to book an appointment.</p><br />
                    <Link to="https://wa.me/917889744619">
                        <Button button-style="primary-button">
                            <div className='whatsapp-button'>
                                <img src="/images/contactus/whatsapp-logo.png" alt="whatsapp logo"/>
                                <span>Message us on Whatsapp</span>
                            </div>
                        </Button>
                    </Link><br /><br />
                    <h3>Toddler World</h3> <br />
                    <p>Airport Avenue, Near Railway Bridge, Srinagar, Jammu and Kashmir, India</p> <br />
                    <p>P: <a href="tel:+917051427879" className="phone">+91.7051.427879</a>
                        , <a href="tel:+917889744619" className="phone">+91.7889.744619</a></p><br />
                    <h3>Hours</h3><br /><br />
                    <OpeningHours/>
                </div>
            </div>
        </>
    );
};

export default ContactUs;