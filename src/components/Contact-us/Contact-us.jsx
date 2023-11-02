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
                        <br />
                        <button className='contactus-send-button'>
                            Send
                        </button>
                    </form>
                    <p className='contactus-captcha'>
                        This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="phone"> Privacy Policy</a> and <a href="https://policies.google.com/terms" className="phone">Terms of Service</a> apply.
                    </p>
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
            <div className="contactus-maps-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.730162425703!2d74.7713164!3d34.025136700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e191dba7d84fa3%3A0x16d8642869049f5a!2sToddler%20World!5e0!3m2!1sen!2suk!4v1695935838910!5m2!1sen!2suk"
                ></iframe>
            </div>
        </>
    );
};

export default ContactUs;