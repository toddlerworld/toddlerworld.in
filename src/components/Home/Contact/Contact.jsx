import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="container">
            <div className="contact">
                <h1>Contact Us</h1>
                <hr className="hr-contact"/>

                <h2>Better yet, see us in person!</h2>

                <p className="contact-paragraph">
					We would love to see you in person. So feel free to call us to book an appointment.
                </p>

                <h2> Toddler World</h2>
                <p className="contact-paragraph">
					Airport Avenue, Near Railway Bridge, Srinagar, Jammu and Kashmir, India <br/>
                </p>

                <p className="contact-paragraph">
					Phone: <a href="tel:+911942303601" className="phone">+91 1942-303601</a>, <a
                        href="tel:+911942303611" className="phone">+91 1942-303611</a>
                    <br/>
					Mobile: <a href="tel:+917051427879" className="phone">+91 705-1427879</a>, <a
                        href="tel:+917889744619"
                        className="phone">+91 788-9744619</a>
                </p>

                <h2>Hours:</h2>

            </div>
            <div className="maps">
                <h1>MAPS</h1>
            </div>
        </div>
    );
};

export default Contact;