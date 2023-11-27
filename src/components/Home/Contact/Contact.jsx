import React from 'react';
import './Contact.scss';
import OpeningHours from './OpeningHours/OpeningHours';

const Contact = () => {
    return (
        <div className="container" data-testid="contact-container">
            <div className="contact-container">
                <h1>Contact Us</h1>
                <hr className="hr-about-us"/>

                <h2>Better yet, see us in person!</h2>

                <p className="contact-paragraph">
					We would love to see you in person. So feel free to call us to book an appointment.
                </p>

                <h2> Toddler World</h2>
                <p className="contact-paragraph">
					Airport Avenue, Near Railway Bridge, Srinagar, Jammu and Kashmir, 190021<br/>
                </p>
                <br />

                <p className="contact-telephone">
					Mobile: <a href="tel:+917051427879" className="phone">+91 705-1427879</a>, <a
                        href="tel:+917889744619"
                        className="phone">+91 788-9744619</a>
                </p>

                <OpeningHours/>
            </div>
            <div className="maps-container">
                <iframe title="Toddler World Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.730162425703!2d74.7713164!3d34.025136700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e191dba7d84fa3%3A0x16d8642869049f5a!2sToddler%20World!5e0!3m2!1sen!2suk!4v1695935838910!5m2!1sen!2suk"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;